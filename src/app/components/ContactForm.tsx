"use client";

import React, {
  useActionState,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ChangeEvent,
  type FocusEvent,
} from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { submitContact, type ContactState } from "../actions/contact";
import {
  lookupAddressByZipDigits,
  mergeZipPrefixIntoAddress,
  normalizeDomesticPhone,
  normalizePostalCode,
} from "@/app/lib/addressPhoneHelper";
import SampleFlavorPicker from "./SampleFlavorPicker";
import DeliveryPreferencePicker from "./DeliveryPreferencePicker";

const initialState: ContactState = {
  success: false,
  message: "",
};

type FormType = "sample" | "inquiry";

const NOTE_CHIPS = [
  { label: "＋ 食後のデザート検討", text: "お食事・コースの食後デザートとして検討しています。" },
  {
    label: "＋ ドーナツ・焼き菓子に添えたい",
    text: "ドーナツや焼き菓子に添える（挟む）アイスとして検討しています。",
  },
  {
    label: "＋ カップ物販・ロゴOEMも知りたい",
    text: "100ml個食カップでの販売や、お店ロゴシールOEMの条件も知りたいです。",
  },
  {
    label: "＋ 原材料・基準の確認",
    text: "ベースミルクの種類やアルコール有無など、原材料の詳細も確認したいです。",
  },
] as const;

const emptySubscribe = () => () => {};
const getLocationSearchSnapshot = () => window.location.search;
const getServerLocationSearchSnapshot = () => "";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);
  const [activeTab, setActiveTab] = useState<FormType>("sample");
  const [notesValue, setNotesValue] = useState("");
  const addressInputRef = useRef<HTMLInputElement>(null);
  const errorBannerRef = useRef<HTMLDivElement>(null);
  const lastLookedUpZip = useRef<string>("");

  const searchString = useSyncExternalStore(
    emptySubscribe,
    getLocationSearchSnapshot,
    getServerLocationSearchSnapshot
  );
  const queryParams = new URLSearchParams(searchString);
  const customerToken = queryParams.get("c") ?? "";
  const prefillStore = queryParams.get("store") ?? "";
  const channelTag = queryParams.get("s") ?? "";
  const resolvedSource = channelTag ? `home:${channelTag}`.slice(0, 50) : "home";

  useEffect(() => {
    if (!state.success && state.message && errorBannerRef.current) {
      errorBannerRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [state]);

  const handlePhoneBlur = (e: FocusEvent<HTMLInputElement>) => {
    const normalized = normalizeDomesticPhone(e.target.value);
    if (normalized && normalized !== e.target.value) {
      e.target.value = normalized;
    }
  };

  const handlePostalCodeBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { formatted } = normalizePostalCode(e.target.value);
    if (formatted && formatted !== e.target.value) {
      e.target.value = formatted;
    }
  };

  const handlePostalCodeChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { digits } = normalizePostalCode(e.target.value);
    if (digits.length !== 7 || digits === lastLookedUpZip.current) return;
    lastLookedUpZip.current = digits;

    const hit = await lookupAddressByZipDigits(digits);
    if (!hit || !addressInputRef.current) return;
    addressInputRef.current.value = mergeZipPrefixIntoAddress(
      addressInputRef.current.value,
      hit.prefecture,
      hit.city,
      hit.town
    );
  };

  const appendNoteChip = (snippet: string) => {
    setNotesValue((prev) => {
      if (prev.includes(snippet)) return prev;
      return prev.trim() ? `${prev.trim()}\n${snippet}` : snippet;
    });
  };

  const inputClasses =
    "w-full px-4 py-3.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand transition-shadow font-sans text-ink placeholder:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed";

  const errorClass = "border-red-300 focus:border-red-500 focus:ring-red-500";

  if (state.success) {
    return (
      <section id="contact-form" className="bg-bg-white scroll-mt-20 px-5 py-20 md:px-8">
        <div id="sample-form-card" className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl border border-gray-100 bg-white p-10 shadow-sm sm:p-12"
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
                ? "サンプルのお申し込みを受け付けました"
                : "送信完了しました"}
            </h2>
            <p className="text-ink-light font-sans text-base leading-relaxed whitespace-pre-line">
              {state.message}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 border-t border-gray-100 pt-5 font-sans text-xs font-bold">
              <Link
                href="/wholesale"
                className="text-ink hover:text-brand rounded-full border border-gray-200 bg-[#fafaf8] px-4 py-2 transition-colors"
              >
                業務用バルク・100mlカップの条件一覧を見る →
              </Link>
              <Link
                href="/oem/plan?src=home_thanks"
                className="text-brand hover:bg-brand/10 rounded-full border border-emerald-200 bg-emerald-50/50 px-4 py-2 transition-colors"
              >
                お店ロゴシール・オリジナルOEM案内を見る →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="bg-bg-white scroll-mt-20 px-5 py-14 md:px-8 md:py-20">
      <span id="flow" className="-mt-20 block pt-20" aria-hidden="true" />
      <div className="mx-auto mb-7 max-w-3xl md:text-center">
        <p className="text-brand mb-2 font-sans text-xs font-bold tracking-wider uppercase">
          Free Sample
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-ink mb-3 font-serif text-2xl font-bold sm:text-3xl md:text-4xl"
        >
          まずは6個、お店で味をお確かめください。
        </motion.h2>
        <div className="mt-3 flex flex-wrap gap-2 md:justify-center">
          <span className="text-ink inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-[#fafaf8] px-3 py-1 font-sans text-xs font-bold">
            <span className="text-brand">①</span> 6個無料サンプルをご試食（送料のみ着払い）
          </span>
          <span className="text-ink inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-[#fafaf8] px-3 py-1 font-sans text-xs font-bold">
            <span className="text-brand">②</span> ご納得後に4L〜味を選んで注文
          </span>
          <span className="text-ink inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-[#fafaf8] px-3 py-1 font-sans text-xs font-bold">
            <span className="text-brand">✓</span> 電話営業なし
          </span>
        </div>
      </div>

      <motion.div
        id="sample-form-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mx-auto max-w-3xl scroll-mt-20 rounded-2xl border border-gray-100 bg-white shadow-sm"
      >
        {/* タブ切り替え */}
        <div className="flex border-b border-gray-100">
          <button
            type="button"
            onClick={() => setActiveTab("sample")}
            className={`flex-1 cursor-pointer px-6 py-4 font-sans text-sm font-bold transition-colors ${
              activeTab === "sample"
                ? "text-brand border-brand border-b-2 bg-white"
                : "text-ink-light hover:text-ink bg-gray-50"
            }`}
          >
            無料サンプルを申し込む（6個）
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("inquiry")}
            className={`flex-1 cursor-pointer px-6 py-4 font-sans text-sm font-bold transition-colors ${
              activeTab === "inquiry"
                ? "text-brand border-brand border-b-2 bg-white"
                : "text-ink-light hover:text-ink bg-gray-50"
            }`}
          >
            ご相談・お問い合わせ
          </button>
        </div>

        <div className="p-5 sm:p-8 md:p-10">
          {(prefillStore || customerToken) && (
            <div className="bg-brand/10 text-brand mb-6 rounded-2xl px-4 py-3 font-sans text-xs leading-relaxed font-bold">
              {prefillStore ? `${prefillStore} 様、` : ""}
              ご連絡ありがとうございます。お届け先をご入力いただくだけで無料サンプルを手配いたします。
            </div>
          )}

          <form action={formAction} aria-label="お問い合わせフォーム" className="space-y-5">
            <input type="hidden" name="formType" value={activeTab} />
            <input type="hidden" name="source" value={resolvedSource} />
            {customerToken && <input type="hidden" name="customerToken" value={customerToken} />}

            {state.message && !state.success && (
              <div ref={errorBannerRef} className="rounded-lg bg-red-50 p-4 text-sm text-red-600">
                {state.message}
              </div>
            )}

            {/* 共通フィールド: 店舗名・担当者名 */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="companyName"
                  className="text-ink mb-2 block font-sans text-sm font-bold"
                >
                  店舗・施設名{" "}
                  <span className="text-cta border-cta/30 ml-1 rounded border px-1.5 py-0.5 text-[10px]">
                    必須
                  </span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  defaultValue={state.fields?.companyName ?? prefillStore}
                  autoComplete="organization"
                  disabled={isPending}
                  className={`${inputClasses} ${state.errors?.companyName ? errorClass : ""}`}
                  placeholder="例：レストラン〇〇 ／ カフェ〇〇 ／ 焼菓子店〇〇"
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
                  defaultValue={state.fields?.contactName ?? ""}
                  autoComplete="name"
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
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
                  defaultValue={state.fields?.email ?? ""}
                  autoComplete="email"
                  inputMode="email"
                  disabled={isPending}
                  className={`${inputClasses} ${state.errors?.email ? errorClass : ""}`}
                  placeholder="example@shop.jp"
                />
                {state.errors?.email && (
                  <p className="mt-1 text-xs text-red-500">{state.errors.email[0]}</p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="text-ink mb-2 block font-sans text-sm font-bold">
                  電話番号（配送伝票用）{" "}
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
                  defaultValue={state.fields?.phone ?? ""}
                  autoComplete="tel"
                  inputMode="tel"
                  onBlur={handlePhoneBlur}
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
              <div className="space-y-5 rounded-xl border border-gray-100 bg-gray-50/50 p-4 sm:p-6">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-[11rem_1fr]">
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
                      defaultValue={state.fields?.postalCode ?? ""}
                      autoComplete="postal-code"
                      onChange={handlePostalCodeChange}
                      onBlur={handlePostalCodeBlur}
                      disabled={isPending}
                      className={`${inputClasses} ${state.errors?.postalCode ? errorClass : ""}`}
                      placeholder="810-0022"
                      inputMode="numeric"
                    />
                    {state.errors?.postalCode && (
                      <p className="mt-1 text-xs text-red-500">{state.errors.postalCode[0]}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="address"
                      className="text-ink mb-2 block font-sans text-sm font-bold"
                    >
                      お届け先ご住所{" "}
                      <span className="text-cta border-cta/30 ml-1 rounded border px-1.5 py-0.5 text-[10px]">
                        必須
                      </span>
                    </label>
                    <input
                      ref={addressInputRef}
                      type="text"
                      id="address"
                      name="address"
                      defaultValue={state.fields?.address ?? ""}
                      autoComplete="street-address"
                      disabled={isPending}
                      className={`${inputClasses} ${state.errors?.address ? errorClass : ""}`}
                      placeholder="都道府県・市区町村・番地・建物名"
                    />
                    {state.errors?.address && (
                      <p className="mt-1 text-xs text-red-500">{state.errors.address[0]}</p>
                    )}
                  </div>
                </div>

                <SampleFlavorPicker disabled={isPending} error={state.errors?.sampleFlavors} />

                <DeliveryPreferencePicker disabled={isPending} />

                <div>
                  <label
                    htmlFor="notes"
                    className="text-ink mb-1.5 block font-sans text-sm font-bold"
                  >
                    お店の業態・試したい使い方・確認したい点{" "}
                    <span className="ml-1 rounded border border-gray-200 px-1.5 py-0.5 text-[10px] text-gray-400">
                      任意
                    </span>
                  </label>
                  <div className="mb-2 flex flex-wrap gap-1.5">
                    {NOTE_CHIPS.map((chip) => (
                      <button
                        key={chip.label}
                        type="button"
                        onClick={() => appendNoteChip(chip.text)}
                        className="hover:border-brand hover:text-brand cursor-pointer rounded-full border border-gray-200 bg-white px-2.5 py-1 font-sans text-[11px] font-bold text-gray-600 transition-colors"
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>
                  <textarea
                    id="notes"
                    name="notes"
                    value={notesValue}
                    onChange={(e) => setNotesValue(e.target.value)}
                    disabled={isPending}
                    rows={2}
                    className={`${inputClasses} resize-none`}
                    placeholder="例：カフェ・焼き菓子店です。お菓子の添えアイスや100mlカップ販売も検討しています。"
                  />
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
                  defaultValue={state.fields?.message ?? ""}
                  disabled={isPending}
                  rows={5}
                  className={`${inputClasses} resize-none ${state.errors?.message ? errorClass : ""}`}
                  placeholder="卸価格や100mlカップ販売・ロゴシールOEM、原材料のご質問など、お気軽にご記入ください。"
                />
                {state.errors?.message && (
                  <p className="mt-1 text-xs text-red-500">{state.errors.message[0]}</p>
                )}
              </div>
            )}

            {/* 送信ボタン */}
            <div className="pt-2 text-center">
              <button
                type="submit"
                disabled={isPending}
                className={`bg-cta hover:bg-cta-hover inline-flex w-full cursor-pointer items-center justify-center rounded-full px-12 py-4 font-sans text-base font-bold text-white shadow-sm transition-all md:w-auto md:text-lg ${
                  isPending ? "cursor-wait opacity-70" : "animate-breathe hover:shadow-md"
                }`}
              >
                {isPending
                  ? "送信中..."
                  : activeTab === "sample"
                    ? "無料サンプル（6個）を申し込む →"
                    : "送信する →"}
              </button>
              <p className="text-ink-muted mt-3 font-sans text-xs leading-relaxed">
                {activeTab === "sample"
                  ? "商品代は無料・ヤマト運輸クール冷凍便の送料のみ着払い（原則お申し込みの翌日に発送）／営業電話はいたしません"
                  : "通常2営業日以内にメールにてご返信いたします"}
              </p>
            </div>
          </form>

          {/* LINE CTA */}
          <div className="mt-6 border-t border-gray-100 pt-6 text-center">
            <p className="text-ink-light font-sans text-xs">
              フォーム入力のお時間がない場合は、LINEから一言お送りいただく形でも承ります
            </p>
            <a
              href="https://lin.ee/OnsWAWw2"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 inline-flex items-center gap-2 rounded-full bg-[#06C755] px-6 py-2.5 font-sans text-sm font-bold text-white shadow-sm transition-all hover:bg-[#05b34c]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              LINEで申し込む・相談する
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
