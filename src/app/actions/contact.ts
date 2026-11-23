"use server";

import { z } from "zod";
import {
  hasPrefecture,
  lookupAddressByZipDigits,
  mergeZipPrefixIntoAddress,
  normalizeDomesticPhone,
  normalizePostalCode,
} from "@/app/lib/addressPhoneHelper";

const ALLOWED_FLAVORS = [
  "もも",
  "りんご",
  "ミックスベリー",
  "ドラゴンフルーツ",
  "マンゴー",
  "ショコラ",
  "抹茶",
  "ほうじ茶",
  "バニラココナッツ",
  "UMAMIバニラ",
  "アールグレイ",
] as const;

type AllowedFlavor = (typeof ALLOWED_FLAVORS)[number];

const LEGACY_FLAVOR_INPUTS = [...ALLOWED_FLAVORS, "バニラ"] as const;

const sampleFlavorItemSchema = z.object({
  flavor: z
    .enum(LEGACY_FLAVOR_INPUTS)
    .transform((val): AllowedFlavor => (val === "バニラ" ? "バニラココナッツ" : val)),
  qty: z.number().int().min(1).max(6),
});

export type SampleFlavorItem = z.infer<typeof sampleFlavorItemSchema>;

const baseSchema = z.object({
  companyName: z.string().min(1, "お店・会社名は必須です"),
  contactName: z.string().min(1, "ご担当者名は必須です"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  source: z.string().max(100).optional(),
  requestId: z.string().max(100).optional(),
});

const sampleSchema = baseSchema
  .extend({
    formType: z.literal("sample"),
    phone: z
      .string()
      .min(1, "電話番号は必須です")
      .refine((v) => /^0\d{9,10}$/.test(v.replace(/-/g, "")), {
        message: "0から始まる10〜11桁の電話番号を入力してください（+81は自動変換されます）",
      }),
    postalCode: z
      .string()
      .min(1, "郵便番号は必須です")
      .refine((v) => /^\d{7}$/.test(v.replace(/[^\d]/g, "")), {
        message: "郵便番号は7桁の数字で入力してください（例：810-0022）",
      }),
    address: z
      .string()
      .min(1, "ご住所は必須です")
      .refine((v) => hasPrefecture(v), {
        message: "都道府県・市区町村からご入力ください",
      })
      .refine((v) => /[\d０-９一二三四五六七八九十]/.test(v), {
        message: "番地までご入力ください（例：1-2-3 〇〇ビル1F）",
      }),
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

const oemSchema = baseSchema
  .extend({
    formType: z.literal("oem"),
    phone: z.string().optional(),
    customerToken: z.string().max(120).optional(),
    oemCourse: z.enum(["seal_only", "base_arrange", "custom_recipe", "undecided"]),
    packageFormat: z.enum(["cup", "bulk", "both", "undecided"]),
    ingredientName: z.string().max(200).optional(),
    ingredientState: z.string().max(200).optional(),
    allergenStatus: z.enum(["free_confirmed", "checking", "contains_or_unknown", "none_seal_only"]),
    tasteImage: z.string().max(1000).optional(),
    desiredTiming: z.string().max(200).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.oemCourse === "seal_only" && data.packageFormat === "bulk") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["packageFormat"],
        message:
          "プラン①（フタだけお店ロゴ）は100ml個食カップ専用プランです。2Lバルクをご希望の場合はプラン②または定番卸をお選びください",
      });
    }
  });

const contactSchema = z.discriminatedUnion("formType", [sampleSchema, inquirySchema, oemSchema]);

export type ContactFormType = "sample" | "inquiry" | "oem";

export type ContactState = {
  success: boolean;
  message: string;
  formType?: ContactFormType;
  caseNumber?: string;
  errors?: Record<string, string[]>;
  fields?: Record<string, string>;
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
  seal_only: "プラン①：フタだけお店ロゴ（既存11種・開発費0円）",
  custom_recipe: "プラン②：お店の素材でオリジナル開発（試作開発費 税別30,000円＋試作実費）",
  base_arrange: "プラン②（旧アレンジ枠）",
  undecided: "まだ迷っている・相談しながら決めたい",
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
  contains_or_unknown:
    "卵・乳・小麦を含む可能性あり／不明（工房持ち込み不可のため代替・別案を要確認）",
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
    data.customerToken ? "・顧客台帳連携：専用URL経由" : null,
  ].filter((line): line is string => Boolean(line));
  return lines.join("\n");
}

export async function submitContact(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const rawType = formData.get("formType");
  const formType: ContactFormType = rawType === "sample" || rawType === "oem" ? rawType : "inquiry";

  // スパムボット用 Honeypot：値が入っていれば外部通信・DB枠消費をせず静かに終了
  const honeypot = String(formData.get("websiteUrl") ?? "").trim();
  if (honeypot.length > 0) {
    return {
      success: true,
      message: "受け付けいたしました。",
      formType,
    };
  }

  const rawSource = ((formData.get("source") as string) || "").trim().slice(0, 100) || undefined;
  const rawRequestId =
    ((formData.get("requestId") as string) || "").trim().slice(0, 100) || undefined;
  const normalizedPhone = normalizeDomesticPhone(String(formData.get("phone") ?? ""));
  const normalizedZip = normalizePostalCode(String(formData.get("postalCode") ?? ""));
  let resolvedAddress = String(formData.get("address") ?? "").trim();

  if (
    formType === "sample" &&
    resolvedAddress &&
    !hasPrefecture(resolvedAddress) &&
    normalizedZip.digits.length === 7
  ) {
    const lookedUp = await lookupAddressByZipDigits(normalizedZip.digits);
    if (lookedUp) {
      resolvedAddress = mergeZipPrefixIntoAddress(
        resolvedAddress,
        lookedUp.prefecture,
        lookedUp.city,
        lookedUp.town
      );
    }
  }

  const rawOemCourse = (formData.get("oemCourse") as string) || "undecided";
  const rawAllergenInput = (formData.get("allergenStatus") as string) || "";
  const resolvedAllergenStatus =
    rawOemCourse === "seal_only" ? "none_seal_only" : rawAllergenInput || "checking";

  const rawData =
    formType === "sample"
      ? {
          formType: "sample" as const,
          companyName: formData.get("companyName"),
          contactName: formData.get("contactName"),
          email: formData.get("email"),
          source: rawSource,
          requestId: rawRequestId,
          phone: normalizedPhone,
          postalCode: normalizedZip.formatted,
          address: resolvedAddress,
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
            requestId: rawRequestId,
            phone: normalizedPhone || undefined,
            customerToken: (formData.get("customerToken") as string) || undefined,
            oemCourse: rawOemCourse,
            packageFormat: (formData.get("packageFormat") as string) || "cup",
            ingredientName: (formData.get("ingredientName") as string) || undefined,
            ingredientState: (formData.get("ingredientState") as string) || undefined,
            allergenStatus: resolvedAllergenStatus,
            tasteImage: (formData.get("tasteImage") as string) || undefined,
            desiredTiming: (formData.get("desiredTiming") as string) || undefined,
          }
        : {
            formType: "inquiry" as const,
            companyName: formData.get("companyName"),
            contactName: formData.get("contactName"),
            email: formData.get("email"),
            source: rawSource,
            requestId: rawRequestId,
            phone: normalizedPhone || undefined,
            customerToken: (formData.get("customerToken") as string) || undefined,
            message: formData.get("message"),
          };

  const submittedFields: Record<string, string> = {
    companyName: String(formData.get("companyName") ?? ""),
    contactName: String(formData.get("contactName") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: normalizedPhone || String(formData.get("phone") ?? ""),
    postalCode: normalizedZip.formatted || String(formData.get("postalCode") ?? ""),
    address: resolvedAddress || String(formData.get("address") ?? ""),
    receiveDays: String(formData.get("receiveDays") ?? ""),
    receiveSlots: String(formData.get("receiveSlots") ?? ""),
    receiveNote: String(formData.get("receiveNote") ?? ""),
    notes: String(formData.get("notes") ?? ""),
    message: String(formData.get("message") ?? ""),
    ingredientName: String(formData.get("ingredientName") ?? ""),
    ingredientState: String(formData.get("ingredientState") ?? ""),
    allergenStatus: resolvedAllergenStatus,
    tasteImage: String(formData.get("tasteImage") ?? ""),
    desiredTiming: String(formData.get("desiredTiming") ?? ""),
  };

  const validatedFields = contactSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      message:
        "入力内容に確認が必要な項目があります。赤字の項目をご確認ください（入力内容は保持されています）。",
      formType,
      errors: validatedFields.error.flatten().fieldErrors,
      fields: submittedFields,
    };
  }

  const data = validatedFields.data;

  // 統合管理システム側の直接受信URLが設定されている場合は先に直接連携し、同時に既存受付経路とも互換性を保つ
  const directEndpoint = process.env.ORDER_SYSTEM_INGEST_URL;
  const timestamp = new Date().toISOString();

  const sourcePrefix = data.source ? `[申込LP: ${data.source}]` : "";
  const oemReadableWithSource =
    data.formType === "oem"
      ? sourcePrefix
        ? `${sourcePrefix}\n${buildOemReadableMessage(data)}`
        : buildOemReadableMessage(data)
      : "";

  // OEM・一般問い合わせでは GAS・シートに customerToken（ポータル合鍵）を平文で渡さない
  let outboundPayload: Record<string, unknown>;
  if (data.formType === "sample") {
    outboundPayload = {
      ...data,
      notes: sourcePrefix
        ? data.notes
          ? `${sourcePrefix} ${data.notes}`
          : sourcePrefix
        : data.notes,
      sampleFlavors: data.sampleMode === "omakase" ? [] : data.sampleFlavors,
      sampleSummary: buildSampleSummary(data.sampleMode, data.sampleFlavors),
      timestamp,
    };
  } else if (data.formType === "oem") {
    const { customerToken: _omitToken, ...oemSafeData } = data;
    void _omitToken;
    outboundPayload = {
      ...oemSafeData,
      hasCustomerToken: Boolean(data.customerToken),
      // 既存の受信テーブルでも全文が読めるよう formType互換の message も同梱
      formType: "inquiry",
      inquiryKind: "oem_hearing",
      oemDetail: oemSafeData,
      message: oemReadableWithSource,
      timestamp,
    };
  } else {
    const { customerToken: _omitToken, ...inquirySafeData } = data;
    void _omitToken;
    outboundPayload = {
      ...inquirySafeData,
      hasCustomerToken: Boolean(data.customerToken),
      message: sourcePrefix ? `${sourcePrefix}\n${data.message}` : data.message,
      timestamp,
    };
  }

  // 統合管理システム（Supabase DB）への直接登録：OEM相談・一般問い合わせも管理画面・顧客カルテへ即時連動
  const SUPABASE_RPC_BASE = process.env.NEXT_PUBLIC_SUPABASE_URL
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL.replace(/\/$/, "")}/rest/v1/rpc`
    : "https://bnvudcxlvldrpilhcirr.supabase.co/rest/v1/rpc";
  const SUPABASE_PUB_KEY =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    "sb_publishable_6OSjYRgADIH8kYj4Jsi66A_WzFxvIRD";

  let supaAccepted = false;
  let caseNumber: string | undefined;

  if (data.formType === "oem" || data.formType === "inquiry") {
    const readableMessage =
      data.formType === "oem"
        ? oemReadableWithSource
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
            requestId: data.requestId ?? "",
            source: data.source ?? "",
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
        case_number?: string;
        due_date?: string;
      } | null;

      const returnedCaseNumber =
        typeof supaJson?.case_number === "string" && supaJson.case_number.trim()
          ? supaJson.case_number.trim()
          : undefined;

      if (supaRes.ok && supaJson?.status === "ok") {
        supaAccepted = true;
        caseNumber = returnedCaseNumber;
        if (caseNumber) {
          const caseTag = `[受付番号: ${caseNumber}]`;
          outboundPayload = {
            ...outboundPayload,
            caseNumber,
            subjectPrefix: caseTag,
            subject: `${caseTag} ${data.companyName}様 ${
              data.formType === "oem" ? "OEM事前相談" : "お問い合わせ"
            }`,
            message: `${caseTag}\n${readableMessage}`,
          };
        }
      } else if (supaRes.ok && supaJson?.status === "already_received") {
        if (supaJson.reason === "duplicate_recent") {
          outboundPayload = {
            ...outboundPayload,
            message: `【要確認：短時間複数送信のため管理画面DB自動起票スキップ・メールより確認】\n${readableMessage}`,
          };
        } else {
          supaAccepted = true;
          caseNumber = returnedCaseNumber;
          if (caseNumber) {
            const caseTag = `[受付番号: ${caseNumber}]`;
            outboundPayload = {
              ...outboundPayload,
              caseNumber,
              subjectPrefix: caseTag,
              subject: `${caseTag} ${data.companyName}様 ${
                data.formType === "oem" ? "OEM事前相談" : "お問い合わせ"
              }`,
              message: `${caseTag}\n${readableMessage}`,
            };
          }
        }
      } else {
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
      if (supaAccepted) {
        console.error(
          "GAS送信エラー（Supabase DB登録・通知済みのため二重起票防止として完了扱い）:",
          error
        );
      } else {
        console.error("お問い合わせ送信エラー:", error);
        return {
          success: false,
          message:
            "通信エラーにより送信できませんでした（入力内容は保持されています）。再度お試しいただくか、フォーム下部のLINEよりご連絡ください。",
          formType,
          fields: submittedFields,
        };
      }
    }
  }

  const caseLabel = caseNumber ? `（受付番号：${caseNumber}）` : "";
  const successMessage =
    data.formType === "sample"
      ? `サンプルのお申し込みを受け付けました。通常2営業日以内に発送いたします。送料は着払いとなります。\nサンプルの味：${buildSampleSummary(data.sampleMode, data.sampleFlavors)}`
      : data.formType === "oem"
        ? data.oemCourse === "seal_only"
          ? `OEM（プラン①：フタだけお店ロゴ）のご相談を受け付けました${caseLabel}。通常2〜3営業日以内に、シール用 .aiテンプレートと概算お見積り・納期目安のご案内をお送りいたします。`
          : `オリジナルアイス開発の事前ヒアリングを受け付けました${caseLabel}。いただいた内容をもとに、お店の素材に合わせた「3つの味の方向性・アレンジ案」と概算お見積りを整理して、通常2〜3営業日以内にご提案いたします。`
        : `お問い合わせありがとうございます${caseLabel}。通常2〜3営業日以内に担当者よりご連絡いたします。`;

  return {
    success: true,
    message: successMessage,
    formType,
    caseNumber,
  };
}
