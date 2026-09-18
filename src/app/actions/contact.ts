"use server";

import { z } from "zod";

const contactSchema = z.object({
  companyName: z.string().min(1, "貴社名/店舗名は必須です"),
  contactName: z.string().min(1, "ご担当者名は必須です"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  phone: z.string().min(1, "電話番号は必須です"),
  inquiryType: z.string().min(1, "お問い合わせ内容は必須です"),
  notes: z.string().optional(),
});

export type ContactState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContact(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const validatedFields = contactSchema.safeParse({
    companyName: formData.get("companyName"),
    contactName: formData.get("contactName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    inquiryType: formData.get("inquiryType"),
    notes: formData.get("notes"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "入力内容にエラーがあります。ご確認ください。",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const gasUrl = process.env.GAS_WEB_APP_URL;

  if (gasUrl) {
    try {
      // Google Apps ScriptのWebアプリURLに対してデータをPOST送信
      const response = await fetch(gasUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
      };
    }
  } else {
    // 開発用フォールバック (URLが未設定の場合)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("【開発モード】お問い合わせ受信 (GAS未設定):", validatedFields.data);
  }

  return {
    success: true,
    message: "お問い合わせありがとうございます。通常2営業日以内に担当者よりご連絡いたします。",
  };
}
