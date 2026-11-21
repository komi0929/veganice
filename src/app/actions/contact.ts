"use server";

import { z } from "zod";

const ALLOWED_FLAVORS = [
  "もも",
  "りんご",
  "ミックスベリー",
  "ドラゴンフルーツ",
  "マンゴー",
  "ショコラ",
  "抹茶",
  "ほうじ茶",
  "バニラ",
  "UMAMIバニラ",
  "アールグレイ",
] as const;

type AllowedFlavor = (typeof ALLOWED_FLAVORS)[number];

const sampleFlavorItemSchema = z.object({
  flavor: z.enum(ALLOWED_FLAVORS),
  qty: z.number().int().min(1).max(6),
});

export type SampleFlavorItem = z.infer<typeof sampleFlavorItemSchema>;

const baseSchema = z.object({
  companyName: z.string().min(1, "お店・会社名は必須です"),
  contactName: z.string().min(1, "ご担当者名は必須です"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  source: z.string().max(50).optional(),
});

const sampleSchema = baseSchema
  .extend({
    formType: z.literal("sample"),
    phone: z.string().min(1, "電話番号は必須です"),
    postalCode: z.string().min(1, "郵便番号は必須です"),
    address: z.string().min(1, "ご住所は必須です"),
    receiveDays: z.string().max(100).optional(),
    receiveSlots: z.string().max(100).optional(),
    receiveNote: z.string().max(100).optional(),
    notes: z.string().optional(),
    customerToken: z.string().max(120).optional(),
    sampleMode: z.enum(["omakase", "custom"]).default("omakase"),
    sampleFlavors: z
      .string()
      .optional()
      .default("[]")
      .transform((str, ctx): SampleFlavorItem[] => {
        try {
          const parsed: unknown = JSON.parse(str || "[]");
          const result = z.array(sampleFlavorItemSchema).safeParse(parsed);
          if (!result.success) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "味の選択内容が正しくありません",
            });
            return z.NEVER;
          }
          return result.data;
        } catch {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "味の選択内容が正しくありません",
          });
          return z.NEVER;
        }
      }),
  })
  .superRefine((data, ctx) => {
    if (data.sampleMode === "custom") {
      const total = data.sampleFlavors.reduce((sum, item) => sum + item.qty, 0);
      if (total < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["sampleFlavors"],
          message: "味を1つ以上選ぶか、『おまかせ6個』を選んでください",
        });
      } else if (total > 6) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["sampleFlavors"],
          message: "サンプルの味は合計6個までお選びいただけます",
        });
      }
      const seen = new Set<AllowedFlavor>();
      for (const item of data.sampleFlavors) {
        if (seen.has(item.flavor)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["sampleFlavors"],
            message: "味の選択内容が正しくありません",
          });
          break;
        }
        seen.add(item.flavor);
      }
    }
  });

const inquirySchema = baseSchema.extend({
  formType: z.literal("inquiry"),
  phone: z.string().optional(),
  customerToken: z.string().max(120).optional(),
  message: z.string().min(1, "お問い合わせ内容は必須です"),
});

const oemSchema = baseSchema.extend({
  formType: z.literal("oem"),
  phone: z.string().optional(),
  customerToken: z.string().max(120).optional(),
  oemCourse: z.enum(["seal_only", "base_arrange", "custom_recipe", "undecided"]),
  packageFormat: z.enum(["cup", "bulk", "both", "undecided"]),
  ingredientName: z.string().max(200).optional(),
  ingredientState: z.string().max(200).optional(),
  allergenStatus: z.enum(["free_confirmed", "checking", "none_seal_only"]),
  tasteImage: z.string().max(1000).optional(),
  desiredTiming: z.string().max(200).optional(),
});

const contactSchema = z.discriminatedUnion("formType", [sampleSchema, inquirySchema, oemSchema]);

export type ContactFormType = "sample" | "inquiry" | "oem";

export type ContactState = {
  success: boolean;
  message: string;
  formType?: ContactFormType;
  errors?: Record<string, string[]>;
};

function buildSampleSummary(
  sampleMode: "omakase" | "custom",
  sampleFlavors: SampleFlavorItem[]
): string {
  if (sampleMode === "omakase") {
    return "おまかせ6個";
  }
  const total = sampleFlavors.reduce((sum, item) => sum + item.qty, 0);
  const parts = sampleFlavors.map((item) => `${item.flavor}×${item.qty}`).join("、");
  const remaining = 6 - total;
  if (remaining > 0) {
    return `${parts}（残り${remaining}個はおまかせ）`;
  }
  return parts;
}

const COURSE_LABELS: Record<z.infer<typeof oemSchema>["oemCourse"], string> = {
  seal_only: "① 既存の11種の味＋お店の天面シール（開発費0円）",
  base_arrange: "② 既存ベース＋お店の粉末・具材追加（試作費1万円）",
  custom_recipe: "③ お店の素材で専用ベースから開発（試作費3万円）",
  undecided: "相談しながら決めたい",
};

const FORMAT_LABELS: Record<z.infer<typeof oemSchema>["packageFormat"], string> = {
  cup: "100ml 個食カップ（お店シール）",
  bulk: "2L 業務用バルク",
  both: "カップと2Lバルクの両方検討",
  undecided: "未定・相談したい",
};

const ALLERGEN_LABELS: Record<z.infer<typeof oemSchema>["allergenStatus"], string> = {
  free_confirmed: "素材・加工場所ともに卵・乳・小麦不使用を確認済み",
  checking: "確認中（後ほど規格書等で確認）",
  none_seal_only: "素材の持ち込みなし（シール変更のみ）",
};

function buildOemReadableMessage(data: z.infer<typeof oemSchema>): string {
  const lines = [
    "【OEM・オリジナル製造 事前ヒアリング】",
    `・ご希望コース：${COURSE_LABELS[data.oemCourse]}`,
    `・ご希望形態：${FORMAT_LABELS[data.packageFormat]}`,
    data.ingredientName ? `・使いたい素材：${data.ingredientName}` : null,
    data.ingredientState ? `・素材の状態：${data.ingredientState}` : null,
    `・アレルゲン確認：${ALLERGEN_LABELS[data.allergenStatus]}`,
    data.desiredTiming ? `・ご希望時期：${data.desiredTiming}` : null,
    data.tasteImage ? `・目指したい味わい・ご相談内容：\n${data.tasteImage}` : null,
    data.customerToken ? `・顧客連携キー：${data.customerToken}` : null,
  ].filter((line): line is string => Boolean(line));
  return lines.join("\n");
}

export async function submitContact(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const rawType = formData.get("formType");
  const formType: ContactFormType = rawType === "sample" || rawType === "oem" ? rawType : "inquiry";

  const rawSource = ((formData.get("source") as string) || "").trim() || undefined;

  const rawData =
    formType === "sample"
      ? {
          formType: "sample" as const,
          companyName: formData.get("companyName"),
          contactName: formData.get("contactName"),
          email: formData.get("email"),
          source: rawSource,
          phone: formData.get("phone"),
          postalCode: formData.get("postalCode"),
          address: formData.get("address"),
          receiveDays: (formData.get("receiveDays") as string) || "",
          receiveSlots: (formData.get("receiveSlots") as string) || "",
          receiveNote: (formData.get("receiveNote") as string) || "",
          notes: formData.get("notes") || undefined,
          customerToken: (formData.get("customerToken") as string) || undefined,
          sampleMode: (formData.get("sampleMode") as string) || "omakase",
          sampleFlavors: (formData.get("sampleFlavors") as string) || "[]",
        }
      : formType === "oem"
        ? {
            formType: "oem" as const,
            companyName: formData.get("companyName"),
            contactName: formData.get("contactName"),
            email: formData.get("email"),
            source: rawSource,
            phone: (formData.get("phone") as string) || undefined,
            customerToken: (formData.get("customerToken") as string) || undefined,
            oemCourse: (formData.get("oemCourse") as string) || "undecided",
            packageFormat: (formData.get("packageFormat") as string) || "cup",
            ingredientName: (formData.get("ingredientName") as string) || undefined,
            ingredientState: (formData.get("ingredientState") as string) || undefined,
            allergenStatus: (formData.get("allergenStatus") as string) || "checking",
            tasteImage: (formData.get("tasteImage") as string) || undefined,
            desiredTiming: (formData.get("desiredTiming") as string) || undefined,
          }
        : {
            formType: "inquiry" as const,
            companyName: formData.get("companyName"),
            contactName: formData.get("contactName"),
            email: formData.get("email"),
            source: rawSource,
            phone: (formData.get("phone") as string) || undefined,
            customerToken: (formData.get("customerToken") as string) || undefined,
            message: formData.get("message"),
          };

  const validatedFields = contactSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "入力内容に確認が必要な項目があります。ご確認ください。",
      formType,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = validatedFields.data;

  // 統合管理システム側の直接受信URLが設定されている場合は先に直接連携し、同時に既存受付経路とも互換性を保つ
  const directEndpoint = process.env.ORDER_SYSTEM_INGEST_URL;
  const timestamp = new Date().toISOString();

  const sourcePrefix = data.source ? `[申込LP: ${data.source}]` : "";

  let outboundPayload =
    data.formType === "sample"
      ? {
          ...data,
          notes: sourcePrefix
            ? data.notes
              ? `${sourcePrefix} ${data.notes}`
              : sourcePrefix
            : data.notes,
          sampleFlavors: data.sampleMode === "omakase" ? [] : data.sampleFlavors,
          sampleSummary: buildSampleSummary(data.sampleMode, data.sampleFlavors),
          timestamp,
        }
      : data.formType === "oem"
        ? {
            ...data,
            // 既存の受信テーブルでも全文が読めるよう formType互換の message も同梱
            formType: "inquiry",
            inquiryKind: "oem_hearing",
            oemDetail: data,
            message: buildOemReadableMessage(data),
            timestamp,
          }
        : {
            ...data,
            message: sourcePrefix ? `${sourcePrefix}\n${data.message}` : data.message,
            timestamp,
          };

  // 統合管理システム（Supabase DB）への直接登録：OEM相談・一般問い合わせも管理画面・顧客カルテへ即時連動
  const SUPABASE_RPC_BASE = process.env.NEXT_PUBLIC_SUPABASE_URL
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL.replace(/\/$/, "")}/rest/v1/rpc`
    : "https://bnvudcxlvldrpilhcirr.supabase.co/rest/v1/rpc";
  const SUPABASE_PUB_KEY =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    "sb_publishable_6OSjYRgADIH8kYj4Jsi66A_WzFxvIRD";

  if (data.formType === "oem" || data.formType === "inquiry") {
    const readableMessage =
      data.formType === "oem"
        ? buildOemReadableMessage(data)
        : sourcePrefix
          ? `${sourcePrefix}\n${data.message}`
          : data.message;
    try {
      const supaRes = await fetch(`${SUPABASE_RPC_BASE}/submit_oem_from_lp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_PUB_KEY,
        },
        body: JSON.stringify({
          p: {
            kind: data.formType,
            companyName: data.companyName,
            contactName: data.contactName,
            email: data.email,
            phone: data.phone ?? "",
            customerToken: data.customerToken ?? "",
            oemCourse: data.formType === "oem" ? data.oemCourse : null,
            packageFormat: data.formType === "oem" ? data.packageFormat : null,
            ingredientName: data.formType === "oem" ? (data.ingredientName ?? "") : "",
            ingredientState: data.formType === "oem" ? (data.ingredientState ?? "") : "",
            allergenStatus: data.formType === "oem" ? data.allergenStatus : null,
            tasteImage: data.formType === "oem" ? (data.tasteImage ?? "") : "",
            desiredTiming: data.formType === "oem" ? (data.desiredTiming ?? "") : "",
            message: readableMessage,
            timestamp,
          },
        }),
      });
      const supaJson = (await supaRes.json().catch(() => null)) as {
        status?: string;
        reason?: string;
      } | null;
      if (
        !supaRes.ok ||
        !supaJson ||
        (supaJson.status !== "ok" && supaJson.status !== "already_received")
      ) {
        const reason = supaJson?.reason ?? `http_${supaRes.status}`;
        console.warn("submit_oem_from_lp not accepted:", reason);
        outboundPayload = {
          ...outboundPayload,
          message: `【要確認：管理画面DB自動登録保留（${reason}）】\n${readableMessage}`,
        };
      }
    } catch (supaErr) {
      console.error("Supabase OEM直接登録エラー（GASフォールバック継続）:", supaErr);
      outboundPayload = {
        ...outboundPayload,
        message: `【要確認：管理画面DB通信エラー・メール本文より登録してください】\n${readableMessage}`,
      };
    }
  }

  if (directEndpoint) {
    try {
      await fetch(directEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(outboundPayload),
      });
    } catch (directErr) {
      console.error("統合システム直接連携エラー（フォールバック継続）:", directErr);
    }
  }

  const DEFAULT_GAS_URL =
    "https://script.google.com/macros/s/AKfycby1Wj8ORyoo8MNj8ze3n_KxhaBEhDnjRiejhAjrwBVyHa1ahfSnItuH3apUxmGVbun0/exec";
  const gasUrl = process.env.GAS_WEB_APP_URL || DEFAULT_GAS_URL;

  if (gasUrl) {
    try {
      const response = await fetch(gasUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(outboundPayload),
        redirect: "follow",
      });

      if (!response.ok) {
        throw new Error(`受付サーバーへの送信に失敗しました (HTTP ${response.status})`);
      }

      const result: unknown = await response.json();
      if (
        typeof result === "object" &&
        result !== null &&
        "status" in result &&
        (result as { status?: string }).status === "error"
      ) {
        const msg =
          "message" in result && typeof (result as { message?: string }).message === "string"
            ? (result as { message: string }).message
            : "受付処理でエラーが発生しました";
        throw new Error(msg);
      }
    } catch (error) {
      console.error("お問い合わせ送信エラー:", error);
      return {
        success: false,
        message: "送信に失敗しました。時間をおいて再度お試しください。",
        formType,
      };
    }
  }

  const successMessage =
    data.formType === "sample"
      ? `サンプルのお申し込みを受け付けました。通常2営業日以内に発送いたします。送料は着払いとなります。\nサンプルの味：${buildSampleSummary(data.sampleMode, data.sampleFlavors)}`
      : data.formType === "oem"
        ? data.oemCourse === "seal_only"
          ? "OEM（既存フレーバー＋お店の天面シール）のご相談を受け付けました。通常2営業日以内に、シールのベースデータとお見積りのご案内をお送りいたします。"
          : "オリジナルアイス開発の事前ヒアリングを受け付けました。いただいた内容をもとに、お店の素材に合わせた「3つの味の方向性・アレンジ案」を整理して、通常2〜3営業日以内にご提案いたします。"
        : "お問い合わせありがとうございます。通常2営業日以内に担当者よりご連絡いたします。";

  return {
    success: true,
    message: successMessage,
    formType,
  };
}
