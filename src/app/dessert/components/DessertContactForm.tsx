"use client";

import { useActionState, useState, type ReactNode } from "react";
import { submitContact, type ContactState } from "../../actions/contact";

const initialState: ContactState = {
  success: false,
  message: "",
};

type FormType = "sample" | "inquiry";

const LINE_URL = "https://lin.ee/OnsWAWw2";

const inputClasses =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-base text-ink placeholder:text-gray-300 transition-shadow focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none disabled:cursor-not-allowed disabled:opacity-50";
const errorClasses = "border-red-300 focus:border-red-500 focus:ring-red-500";

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string[];
  children: ReactNode;
}

function Field({ id, label, required = false, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-ink mb-1.5 flex items-center gap-2 text-sm font-bold">
        {label}
        {required ? (
          <span className="bg-cta rounded px-1.5 py-0.5 text-[10px] text-white">必須</span>
        ) : (
          <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] text-gray-500">任意</span>
        )}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-500">{error[0]}</p>}
    </div>
  );
}

function LineIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

/** サンプル申込／お問い合わせフォーム（カード部分のみ） */
export default function DessertContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);
  const [activeTab, setActiveTab] = useState<FormType>("sample");

  if (state.success) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-sm sm:p-12">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-600">
          ✓
        </div>
        <h3 className="text-ink text-xl font-bold">
          {state.formType === "sample" ? "お申し込みありがとうございます" : "送信しました"}
        </h3>
        <p className="text-ink-light mt-3 text-[15px] leading-relaxed">{state.message}</p>
      </div>
    );
  }

  const tabClass = (tab: FormType) =>
    `flex-1 rounded-full py-2.5 text-sm font-bold transition-colors ${
      activeTab === tab ? "bg-white text-ink shadow-sm" : "text-ink-muted"
    }`;

  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm sm:p-10">
      {/* 切り替え */}
      <div className="flex rounded-full bg-gray-100 p-1" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "sample"}
          onClick={() => setActiveTab("sample")}
          className={tabClass("sample")}
        >
          サンプルを申し込む
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "inquiry"}
          onClick={() => setActiveTab("inquiry")}
          className={tabClass("inquiry")}
        >
          相談・問い合わせ
        </button>
      </div>

      <form action={formAction} aria-label="お問い合わせフォーム" className="mt-6 space-y-5">
        <input type="hidden" name="formType" value={activeTab} />

        {state.message && !state.success && (
          <div className="rounded-xl bg-red-50 p-4 text-sm text-red-600">{state.message}</div>
        )}

        <Field id="companyName" label="お店の名前" required error={state.errors?.companyName}>
          <input
            type="text"
            id="companyName"
            name="companyName"
            autoComplete="organization"
            disabled={isPending}
            className={`${inputClasses} ${state.errors?.companyName ? errorClasses : ""}`}
            placeholder="例：〇〇食堂"
          />
        </Field>

        <Field id="contactName" label="お名前" required error={state.errors?.contactName}>
          <input
            type="text"
            id="contactName"
            name="contactName"
            autoComplete="name"
            disabled={isPending}
            className={`${inputClasses} ${state.errors?.contactName ? errorClasses : ""}`}
            placeholder="山田 太郎"
          />
        </Field>

        <Field id="email" label="メールアドレス" required error={state.errors?.email}>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            disabled={isPending}
            className={`${inputClasses} ${state.errors?.email ? errorClasses : ""}`}
            placeholder="example@restaurant.jp"
          />
        </Field>

        <Field
          id="phone"
          label="電話番号"
          required={activeTab === "sample"}
          error={state.errors?.phone}
        >
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            disabled={isPending}
            className={`${inputClasses} ${state.errors?.phone ? errorClasses : ""}`}
            placeholder="090-1234-5678"
          />
        </Field>

        {activeTab === "sample" && (
          <>
            <Field id="postalCode" label="郵便番号" required error={state.errors?.postalCode}>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                autoComplete="postal-code"
                inputMode="numeric"
                disabled={isPending}
                className={`${inputClasses} max-w-[12rem] ${state.errors?.postalCode ? errorClasses : ""}`}
                placeholder="810-0022"
              />
            </Field>

            <Field id="address" label="お届け先の住所" required error={state.errors?.address}>
              <input
                type="text"
                id="address"
                name="address"
                autoComplete="street-address"
                disabled={isPending}
                className={`${inputClasses} ${state.errors?.address ? errorClasses : ""}`}
                placeholder="福岡市中央区薬院1-2-3 〇〇ビル1F"
              />
            </Field>

            <Field id="notes" label="お店のジャンル・試したい味など">
              <textarea
                id="notes"
                name="notes"
                rows={3}
                disabled={isPending}
                className={`${inputClasses} resize-none`}
                placeholder="例：定食屋です。さっぱり系を試したいです。"
              />
            </Field>
          </>
        )}

        {activeTab === "inquiry" && (
          <Field id="message" label="ご相談内容" required error={state.errors?.message}>
            <textarea
              id="message"
              name="message"
              rows={5}
              disabled={isPending}
              className={`${inputClasses} resize-none ${state.errors?.message ? errorClasses : ""}`}
              placeholder="卸値や取引条件など、なんでもどうぞ。"
            />
          </Field>
        )}

        <div className="pt-2">
          <button
            type="submit"
            disabled={isPending}
            className={`bg-cta hover:bg-cta-hover w-full rounded-full py-4 text-base font-bold text-white shadow-[0_6px_20px_rgba(212,112,143,0.35)] transition-colors ${
              isPending ? "cursor-wait opacity-70" : ""
            }`}
          >
            {isPending ? "送信中…" : activeTab === "sample" ? "無料サンプルを申し込む" : "送信する"}
          </button>
          <p className="text-ink-muted mt-2.5 text-center text-xs">
            {activeTab === "sample"
              ? "2営業日以内に発送します（送料のみ着払い）"
              : "2営業日以内にご連絡します"}
          </p>
        </div>
      </form>

      <div className="mt-6 border-t border-gray-100 pt-6 text-center">
        <p className="text-ink-light text-xs">フォームが面倒なら、LINEでもOKです</p>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#06C755] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#05b34c]"
        >
          <LineIcon />
          LINEで申し込む・相談する
        </a>
      </div>
    </div>
  );
}
