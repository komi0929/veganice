import { NextRequest, NextResponse } from "next/server";
import { submitContact, type ContactState } from "@/app/actions/contact";

const ALLOWED_ORIGINS = new Set([
  "https://www.soystories.jp",
  "https://soystories.jp",
  "https://www.soystories.cafe",
  "https://soystories.cafe",
]);

function buildCorsHeaders(origin: string | null): Record<string, string> {
  const allowOrigin = origin && ALLOWED_ORIGINS.has(origin) ? origin : "https://www.soystories.jp";
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

export async function OPTIONS(request: NextRequest): Promise<NextResponse> {
  const origin = request.headers.get("origin");
  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    return new NextResponse(null, { status: 403 });
  }
  return new NextResponse(null, {
    status: 204,
    headers: buildCorsHeaders(origin),
  });
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const origin = request.headers.get("origin");
  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    return NextResponse.json(
      { success: false, message: "許可されていない送信元です。" } satisfies ContactState,
      { status: 403 }
    );
  }
  const corsHeaders = buildCorsHeaders(origin);

  try {
    const contentType = request.headers.get("content-type") ?? "";
    const formData = new FormData();

    if (contentType.includes("application/json")) {
      const json = (await request.json()) as Record<string, unknown>;
      for (const [key, value] of Object.entries(json)) {
        if (value !== undefined && value !== null) {
          formData.set(key, typeof value === "string" ? value : JSON.stringify(value));
        }
      }
    } else {
      const incoming = await request.formData();
      for (const [key, value] of incoming.entries()) {
        if (typeof value === "string") {
          formData.append(key, value);
        }
      }
    }

    const initialState: ContactState = { success: false, message: "" };
    const result = await submitContact(initialState, formData);

    return NextResponse.json(result, {
      status: result.success ? 200 : 400,
      headers: corsHeaders,
    });
  } catch (err) {
    console.error("public-contact route error:", err);
    return NextResponse.json(
      {
        success: false,
        message:
          "通信エラーにより送信できませんでした。お手数ですが時間をおいて再度お試しいただくか、公式LINEよりご連絡ください。",
      } satisfies ContactState,
      { status: 500, headers: corsHeaders }
    );
  }
}
