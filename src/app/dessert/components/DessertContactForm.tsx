"use client";

import React, { useActionState, useState } from "react";
import { motion } from "framer-motion";
import { submitContact, type ContactState } from "../../actions/contact";

const initialState: ContactState = {
  success: false,
  message: "",
};

type FormType = "sample" | "inquiry";

export default function DessertContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);
  const [activeTab, setActiveTab] = useState<FormType>("sample");

  const inputClasses =
    "w-full px-4 py-3.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand transition-shadow font-sans text-ink placeholder:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed";

  const errorClass = "border-red-300 focus:border-red-500 focus:ring-red-500";

  if (state.success) {
    return (
      <section id="contact-form" className="bg-bg px-5 py-20 md:px-8">
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
              {state.formType === "sample"
                ? "食後デザート用サンプルのお申し込みを受け付けました"
                : "お問い合わせを送信しました"}
            </h2>
            <p className="text-ink-light font-sans text-base leading-relaxed">{state.message}</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="bg-bg px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto mb-12 max-w-4xl md:text-center">
        <span className="text-brand mb-3 block font-sans text-xs font-semibold tracking-widest uppercase">
          Free Sample for Food Restaurants
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-ink mb-6 font-serif text-2xl font-bold sm:text-3xl md:text-5xl"
        >
          まずは実際の厨房で、
          <br />
          食後のデザートとしてお試しください。
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-ink-light font-sans text-sm leading-relaxed sm:text-base md:text-lg"
        >
          ラーメンやバーガーの後のキレ、食感のなめらかさ、ディッシャーのすくいやすさを
          <br className="hidden sm:block" />
          ご確認いただけるサンプルアイス本体（おすすめ6種）を無料でお届けします。
          <br />
          <span className="mt-2 inline-block rounded-lg border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-semibold text-amber-900 sm:text-sm">
            ⚠️ ヤマト運輸 クール冷凍便の送料（着払い）のみご負担をお願いしております
          </span>
          <br className="hidden sm:block" />
          事前の購入義務やしつこい営業連絡は一切ございません。
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mx-auto max-w-3xl rounded-2xl border border-gray-100 bg-white shadow-sm"
      >
        {/* タブ切り替え */}
        <div className="flex border-b border-gray-100">
          <button
            type="button"
            onClick={() => setActiveTab("sample")}
            className={`flex-1 px-6 py-4 font-sans text-sm font-bold transition-colors ${
              activeTab === "sample"
                ? "text-brand border-brand border-b-2 bg-white"
                : "text-ink-light hover:text-ink bg-gray-50"
            }`}
          >
            🎁 食後デザート用サンプルを申し込む
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("inquiry")}
            className={`flex-1 px-6 py-4 font-sans text-sm font-bold transition-colors ${
              activeTab === "inquiry"
                ? "text-brand border-brand border-b-2 bg-white"
                : "text-ink-light hover:text-ink bg-gray-50"
            }`}
          >
            💬 ご相談・お問い合わせ
          </button>
        </div>

        <div className="p-8 md:p-12">
          {/* LINE CTA */}
          <div className="mb-8 rounded-xl border border-[#06C755]/20 bg-[#06C755]/5 p-5 text-center">
            <a
              href="https://lin.ee/OnsWAWw2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#06C755] px-7 py-2.5 font-sans text-sm font-bold text-white shadow-sm transition-all hover:bg-[#05b34c] hover:shadow-md"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              LINEでもご相談・受付中
            </a>
          </div>

          <div className="relative mb-8 flex items-center">
            <div className="flex-1 border-t border-gray-200" />
            <span className="text-ink-light px-4 font-sans text-xs">または、フォームから</span>
            <div className="flex-1 border-t border-gray-200" />
          </div>

          <form action={formAction} aria-label="お問い合わせフォーム" className="space-y-6">
            <input type="hidden" name="formType" value={activeTab} />

            {state.message && !state.success && (
              <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600">{state.message}</div>
            )}

            {activeTab === "sample" && (
              <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-4 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-xl">🚚</span>
                  <div className="text-xs leading-relaxed text-amber-950 sm:text-sm">
                    <p className="font-bold">【送料のご負担について（必ずご確認ください）】</p>
                    <p className="mt-1 text-amber-900">
                      サンプルアイス（おすすめ6種）の<strong>商品代金は無料</strong>
                      です。お届け時に発生する
                      <strong>ヤマト運輸のクール冷凍便送料（着払い）のみ</strong>
                      お客様にてご負担をお願いしております。ご了承の上、お申し込みください。
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 共通フィールド: 店舗名・担当者名 */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="companyName"
                  className="text-ink mb-2 block font-sans text-sm font-bold"
                >
                  貴店名・店舗名{" "}
                  <span className="text-cta border-cta/30 ml-1 rounded border px-1.5 py-0.5 text-[10px]">
                    必須
                  </span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  disabled={isPending}
                  className={`${inputClasses} ${state.errors?.companyName ? errorClass : ""}`}
                  placeholder="例: ヴィーガンラーメン ○○ / ○○ BURGER"
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
                  <span className="text-cta border-cta/30 ml-1 rounded border px-1.5 py-0.5 text-[10px]">
                    必須
                  </span>
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  disabled={isPending}
                  className={`${inputClasses} ${state.errors?.contactName ? errorClass : ""}`}
                  placeholder="山田 太郎"
                />
                {state.errors?.contactName && (
                  <p className="mt-1 text-xs text-red-500">{state.errors.contactName[0]}</p>
                )}
              </div>
            </div>

            {/* 共通フィールド: メール・電話 */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="email" className="text-ink mb-2 block font-sans text-sm font-bold">
                  メールアドレス{" "}
                  <span className="text-cta border-cta/30 ml-1 rounded border px-1.5 py-0.5 text-[10px]">
                    必須
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  disabled={isPending}
                  className={`${inputClasses} ${state.errors?.email ? errorClass : ""}`}
                  placeholder="example@restaurant.jp"
                />
                {state.errors?.email && (
                  <p className="mt-1 text-xs text-red-500">{state.errors.email[0]}</p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="text-ink mb-2 block font-sans text-sm font-bold">
                  電話番号{" "}
                  {activeTab === "sample" ? (
                    <span className="text-cta border-cta/30 ml-1 rounded border px-1.5 py-0.5 text-[10px]">
                      必須
                    </span>
                  ) : (
                    <span className="ml-1 rounded border border-gray-200 px-1.5 py-0.5 text-[10px] text-gray-400">
                      任意
                    </span>
                  )}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  disabled={isPending}
                  className={`${inputClasses} ${state.errors?.phone ? errorClass : ""}`}
                  placeholder="090-1234-5678"
                />
                {state.errors?.phone && (
                  <p className="mt-1 text-xs text-red-500">{state.errors.phone[0]}</p>
                )}
              </div>
            </div>

            {/* ── サンプル申込：送付先 ── */}
            {activeTab === "sample" && (
              <div className="space-y-6 rounded-xl border border-gray-100 bg-gray-50/50 p-6">
                <p className="text-ink font-sans text-sm font-bold">
                  サンプル送付先（店舗または受取先）
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="postalCode"
                      className="text-ink mb-2 block font-sans text-sm font-bold"
                    >
                      〒 郵便番号{" "}
                      <span className="text-cta border-cta/30 ml-1 rounded border px-1.5 py-0.5 text-[10px]">
                        必須
                      </span>
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      disabled={isPending}
                      className={`${inputClasses} ${state.errors?.postalCode ? errorClass : ""}`}
                      placeholder="810-0022"
                      inputMode="numeric"
                    />
                    {state.errors?.postalCode && (
                      <p className="mt-1 text-xs text-red-500">{state.errors.postalCode[0]}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="text-ink mb-2 block font-sans text-sm font-bold"
                  >
                    ご住所（建物名・号室まで）{" "}
                    <span className="text-cta border-cta/30 ml-1 rounded border px-1.5 py-0.5 text-[10px]">
                      必須
                    </span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    disabled={isPending}
                    className={`${inputClasses} ${state.errors?.address ? errorClass : ""}`}
                    placeholder="福岡県福岡市中央区薬院 1-2-3 ○○ビル 1F"
                  />
                  {state.errors?.address && (
                    <p className="mt-1 text-xs text-red-500">{state.errors.address[0]}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="notes"
                    className="text-ink mb-1.5 block font-sans text-sm font-bold"
                  >
                    備考・店舗業態{" "}
                    <span className="ml-1 rounded border border-gray-200 px-1.5 py-0.5 text-[10px] text-gray-400">
                      任意
                    </span>
                  </label>
                  <p className="text-ink-light mb-2 text-xs leading-relaxed sm:text-sm">
                    ラーメン・バーガー・ダイナー等の業態や、試してみたいフレーバーがあればご記入ください。
                  </p>
                  <textarea
                    id="notes"
                    name="notes"
                    disabled={isPending}
                    rows={3}
                    className={`${inputClasses} resize-none`}
                    placeholder="例: ヴィーガンラーメン店を運営しています。さっぱり系の白桃やりんご、ショコラを試してみたいです。"
                  ></textarea>
                </div>
                <div className="rounded-lg border border-amber-200/80 bg-amber-50/70 p-3 text-left">
                  <p className="text-xs leading-relaxed font-medium text-amber-950">
                    ※ サンプルアイス本体は無料です。ヤマト運輸の
                    <strong>クール冷凍便送料（着払い）のみ</strong>ご負担をお願いしております。
                  </p>
                </div>
              </div>
            )}

            {/* ── お問い合わせ：メッセージ ── */}
            {activeTab === "inquiry" && (
              <div>
                <label
                  htmlFor="message"
                  className="text-ink mb-2 block font-sans text-sm font-bold"
                >
                  お問い合わせ内容{" "}
                  <span className="text-cta border-cta/30 ml-1 rounded border px-1.5 py-0.5 text-[10px]">
                    必須
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  disabled={isPending}
                  rows={5}
                  className={`${inputClasses} resize-none ${state.errors?.message ? errorClass : ""}`}
                  placeholder="卸売価格やお取引条件、食後デザートとしてのメニュー提案など、お気軽にご記入ください。"
                ></textarea>
                {state.errors?.message && (
                  <p className="mt-1 text-xs text-red-500">{state.errors.message[0]}</p>
                )}
              </div>
            )}

            {/* 送信ボタン */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                disabled={isPending}
                className={`bg-cta hover:bg-cta-hover inline-flex w-full items-center justify-center rounded-full px-12 py-4 font-sans text-base font-bold text-white shadow-sm transition-all md:w-auto md:text-lg ${
                  isPending ? "cursor-wait opacity-70" : "animate-breathe hover:shadow-md"
                }`}
              >
                {isPending
                  ? "送信中..."
                  : activeTab === "sample"
                    ? "食後デザート用サンプルを申し込む（送料着払い）"
                    : "送信する"}
              </button>
              <p className="text-ink-muted mt-3 font-sans text-xs">
                {activeTab === "sample"
                  ? "※ 通常2営業日以内にヤマト運輸クール冷凍便（着払い）にて発送いたします"
                  : "※ 通常2営業日以内にご連絡いたします"}
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
