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
  companyName: z.string().min(1, "店舗名は必須です"),
  contactName: z.string().min(1, "ご担当者名は必須です"),
  email: z.string().email("有効なメールアドレスを入力してください"),
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
  message: z.string().min(1, "お問い合わせ内容は必須です"),
});

const contactSchema = z.discriminatedUnion("formType", [sampleSchema, inquirySchema]);

export type ContactState = {
  success: boolean;
  message: string;
  formType?: "sample" | "inquiry";
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

export async function submitContact(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const formType = formData.get("formType") as string;

  const rawData =
    formType === "sample"
      ? {
          formType: "sample" as const,
          companyName: formData.get("companyName"),
          contactName: formData.get("contactName"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          postalCode: formData.get("postalCode"),
          address: formData.get("address"),
          receiveDays: (formData.get("receiveDays") as string) || "",
          receiveSlots: (formData.get("receiveSlots") as string) || "",
          receiveNote: (formData.get("receiveNote") as string) || "",
          notes: formData.get("notes"),
          sampleMode: (formData.get("sampleMode") as string) || "omakase",
          sampleFlavors: (formData.get("sampleFlavors") as string) || "[]",
        }
      : {
          formType: "inquiry" as const,
          companyName: formData.get("companyName"),
          contactName: formData.get("contactName"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        };

  const validatedFields = contactSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "入力内容にエラーがあります。ご確認ください。",
      formType: formType as "sample" | "inquiry",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const payload =
    validatedFields.data.formType === "sample"
      ? {
          ...validatedFields.data,
          sampleFlavors:
            validatedFields.data.sampleMode === "omakase" ? [] : validatedFields.data.sampleFlavors,
          sampleSummary: buildSampleSummary(
            validatedFields.data.sampleMode,
            validatedFields.data.sampleFlavors
          ),
        }
      : validatedFields.data;

  const DEFAULT_GAS_URL =
    "https://script.google.com/macros/s/AKfycby1Wj8ORyoo8MNj8ze3n_KxhaBEhDnjRiejhAjrwBVyHa1ahfSnItuH3apUxmGVbun0/exec";
  const gasUrl = process.env.GAS_WEB_APP_URL || DEFAULT_GAS_URL;

  if (gasUrl) {
    try {
      const response = await fetch(gasUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          timestamp: new Date().toISOString(),
        }),
        redirect: "follow",
      });

      if (!response.ok) {
        throw new Error(`GASへの送信に失敗しました (HTTP ${response.status})`);
      }

      const result = await response.json();
      if (result.status === "error") {
        throw new Error(result.message || "GASでエラーが発生しました");
      }
    } catch (error) {
      console.error("お問い合わせ送信エラー:", error);
      return {
        success: false,
        message: "送信に失敗しました。時間をおいて再度お試しください。",
        formType: formType as "sample" | "inquiry",
      };
    }
  } else {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("【開発モード】受信 (GAS未設定):", payload);
  }

  const successMessage =
    payload.formType === "sample"
      ? `サンプルのお申し込みを受け付けました。通常2営業日以内に発送いたします。送料は着払いとなります。\nサンプルの味：${payload.sampleSummary}`
      : "お問い合わせありがとうございます。通常2営業日以内に担当者よりご連絡いたします。";

  return {
    success: true,
    message: successMessage,
    formType: formType as "sample" | "inquiry",
  };
}
