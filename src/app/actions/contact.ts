"use server";

import { z } from "zod";

const baseSchema = z.object({
  companyName: z.string().min(1, "店舗名は必須です"),
  contactName: z.string().min(1, "ご担当者名は必須です"),
  email: z.string().email("有効なメールアドレスを入力してください"),
});

const sampleSchema = baseSchema.extend({
  formType: z.literal("sample"),
  phone: z.string().min(1, "電話番号は必須です"),
  postalCode: z.string().min(1, "郵便番号は必須です"),
  address: z.string().min(1, "ご住所は必須です"),
  notes: z.string().optional(),
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
          notes: formData.get("notes"),
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

  const gasUrl = process.env.GAS_WEB_APP_URL;

  if (gasUrl) {
    try {
      const response = await fetch(gasUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...validatedFields.data,
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
    console.log("【開発モード】受信 (GAS未設定):", validatedFields.data);
  }

  const successMessage =
    formType === "sample"
      ? "サンプルのお申し込みを受け付けました。通常2営業日以内に発送いたします。送料は着払いとなります。"
      : "お問い合わせありがとうございます。通常2営業日以内に担当者よりご連絡いたします。";

  return {
    success: true,
    message: successMessage,
    formType: formType as "sample" | "inquiry",
  };
}
