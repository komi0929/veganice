"use client";

import React, { useActionState } from "react";
import { motion } from "framer-motion";
import { submitContact, type ContactState } from "../actions/contact";

const initialState: ContactState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);

  const inputClasses =
    "w-full px-4 py-3.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand transition-shadow font-sans text-ink placeholder:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed";

  if (state.success) {
    return (
      <section id="contact-form" className="bg-bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl border border-gray-100 bg-white p-12 shadow-sm"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-ink mb-4 font-serif text-2xl font-bold md:text-3xl">
              送信完了しました
            </h2>
            <p className="text-ink-light font-sans text-base leading-relaxed">{state.message}</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="bg-bg-white px-5 py-20 md:px-8">
      <div className="mx-auto mb-16 max-w-4xl md:text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-ink mb-6 font-serif text-2xl font-bold sm:text-3xl md:text-5xl"
        >
          この美味しさを、
          <br className="md:hidden" />
          一緒に届けていただけませんか？
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-ink-light font-sans text-sm leading-relaxed md:text-base"
        >
          小さなお店だからこそ、
          <br className="sm:hidden" />
          丁寧にお作りしてお届けします。
          <br />
          最小4Lから対応可能です。
          <br className="sm:hidden" />
          メニューのご相談やご試食など、
          <br className="sm:hidden" />
          まずはお気軽にお声がけください。
        </motion.p>

        {/* リスクリバーサルバッジ */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 inline-flex flex-col items-center gap-3 sm:flex-row sm:gap-6"
        >
          <span className="text-brand flex items-center gap-1.5 font-sans text-sm font-medium">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            サンプル無料
          </span>
          <span className="text-brand flex items-center gap-1.5 font-sans text-sm font-medium">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            購入義務なし
          </span>
          <span className="text-brand flex items-center gap-1.5 font-sans text-sm font-medium">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            ご連絡はメールのみ
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mx-auto max-w-3xl rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-12"
      >
        <form action={formAction} aria-label="お問い合わせフォーム" className="space-y-7">
          {state.message && !state.success && (
            <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600">{state.message}</div>
          )}

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            <div>
              <label
                htmlFor="companyName"
                className="text-ink mb-2 block font-sans text-sm font-bold"
              >
                貴社名/店舗名{" "}
                <span className="text-cta border-cta/30 ml-2 rounded border px-1.5 py-0.5 text-[10px]">
                  必須
                </span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                disabled={isPending}
                className={`${inputClasses} ${state.errors?.companyName ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""}`}
                placeholder="株式会社ソイストーリーズ"
              />
              {state.errors?.companyName && (
                <p className="mt-1 text-xs text-red-500">{state.errors.companyName[0]}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="contactName"
                className="text-ink mb-2 block font-sans text-sm font-bold"
              >
                ご担当者名{" "}
                <span className="text-cta border-cta/30 ml-2 rounded border px-1.5 py-0.5 text-[10px]">
                  必須
                </span>
              </label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                disabled={isPending}
                className={`${inputClasses} ${state.errors?.contactName ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""}`}
                placeholder="山田 太郎"
              />
              {state.errors?.contactName && (
                <p className="mt-1 text-xs text-red-500">{state.errors.contactName[0]}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            <div>
              <label htmlFor="email" className="text-ink mb-2 block font-sans text-sm font-bold">
                メールアドレス{" "}
                <span className="text-cta border-cta/30 ml-2 rounded border px-1.5 py-0.5 text-[10px]">
                  必須
                </span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                disabled={isPending}
                className={`${inputClasses} ${state.errors?.email ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""}`}
                placeholder="example@soystories.jp"
              />
              {state.errors?.email && (
                <p className="mt-1 text-xs text-red-500">{state.errors.email[0]}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="text-ink mb-2 block font-sans text-sm font-bold">
                電話番号{" "}
                <span className="text-cta border-cta/30 ml-2 rounded border px-1.5 py-0.5 text-[10px]">
                  必須
                </span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                disabled={isPending}
                className={`${inputClasses} ${state.errors?.phone ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""}`}
                placeholder="03-1234-5678"
              />
              {state.errors?.phone && (
                <p className="mt-1 text-xs text-red-500">{state.errors.phone[0]}</p>
              )}
            </div>
          </div>

          <div>
            <label className="text-ink mb-2 block font-sans text-sm font-bold">
              お問い合わせ内容{" "}
              <span className="text-cta border-cta/30 ml-2 rounded border px-1.5 py-0.5 text-[10px]">
                必須
              </span>
            </label>
            <div className="space-y-3">
              {["サンプルについて", "価格・お取引について", "その他ご相談"].map((option) => (
                <label
                  key={option}
                  className={`flex cursor-pointer items-center space-x-3 rounded-sm border p-4 transition-colors ${
                    isPending ? "cursor-not-allowed opacity-50" : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="inquiryType"
                    value={option}
                    defaultChecked={option === "サンプルについて"}
                    disabled={isPending}
                    className="text-brand focus:ring-brand h-4 w-4 border-gray-300"
                  />
                  <span className="text-ink font-sans text-sm font-medium">{option}</span>
                </label>
              ))}
            </div>
            {state.errors?.inquiryType && (
              <p className="mt-1 text-xs text-red-500">{state.errors.inquiryType[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="notes" className="text-ink mb-2 block font-sans text-sm font-bold">
              備考{" "}
              <span className="ml-2 rounded border border-gray-200 px-1.5 py-0.5 text-[10px] text-gray-400">
                任意
              </span>
            </label>
            <textarea
              id="notes"
              name="notes"
              disabled={isPending}
              rows={4}
              className={`${inputClasses} resize-none`}
              placeholder="ご質問やご要望があればご記入ください。"
            ></textarea>
          </div>

          <div className="pt-6 text-center">
            <p className="text-ink-muted mb-4 flex items-center justify-center gap-4 font-sans text-xs">
              <span className="flex items-center gap-1">
                <svg
                  className="text-brand h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                購入義務なし
              </span>
              <span className="flex items-center gap-1">
                <svg
                  className="text-brand h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                ご連絡はメールのみ
              </span>
            </p>
            <button
              type="submit"
              disabled={isPending}
              className={`bg-cta hover:bg-cta-hover inline-flex w-full items-center justify-center rounded-full px-12 py-4 font-sans text-base font-bold text-white shadow-sm transition-all md:w-auto md:text-lg ${
                isPending ? "cursor-wait opacity-70" : "animate-breathe hover:shadow-md"
              }`}
            >
              {isPending ? "送信中..." : "送信する"}
            </button>
            <p className="text-ink-muted mt-4 font-sans text-xs">
              ※ 通常２営業日以内にご連絡いたします
            </p>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
