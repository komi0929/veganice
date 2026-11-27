"use client";

import {
  useActionState,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ChangeEvent,
  type FocusEvent,
  type ReactNode,
} from "react";
import Link from "next/link";
import { submitContact, type ContactState } from "@/app/actions/contact";
import type { SampleFlavorName } from "@/app/components/SampleFlavorPicker";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";
import {
  lookupAddressByZipDigits,
  mergeZipPrefixIntoAddress,
  normalizeDomesticPhone,
  normalizePostalCode,
} from "@/app/lib/addressPhoneHelper";
import WholesaleDeliveryPicker from "./WholesaleDeliveryPicker";
import WholesaleSamplePicker from "./WholesaleSamplePicker";

const initialState: ContactState = {
  success: false,
  message: "",
};

type FormTab = "sample" | "inquiry";

const inputClasses =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-sans text-base text-ink placeholder:text-gray-300 transition-shadow focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none disabled:cursor-not-allowed disabled:opacity-50";
const errorClasses = "border-red-300 focus:border-red-500 focus:ring-red-500";

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string[];
  hint?: string;
  children: ReactNode;
}

function Field({ id, label, required = false, error, hint, children }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-ink mb-1.5 flex items-center gap-2 font-sans text-sm font-bold"
      >
        {label}
        {required ? (
          <span className="bg-cta rounded px-1.5 py-0.5 text-[10px] text-white">必須</span>
        ) : (
          <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] text-gray-500">任意</span>
        )}
      </label>
      {hint ? <p className="text-ink-muted mb-1.5 font-sans text-xs">{hint}</p> : null}
      {children}
      {error ? <p className="mt-1 font-sans text-xs text-red-500">{error[0]}</p> : null}
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

const emptySubscribe = () => () => {};
const getLocationSearchSnapshot = () => window.location.search;
const getServerLocationSearchSnapshot = () => "";

export interface WholesaleContactCardProps {
  source: "hotel" | "cafe" | "wholesale";
  companyLabel: string;
  companyPlaceholder: string;
  contactNameLabel?: string;
  emailPlaceholder: string;
  addressPlaceholder: string;
  deliveryDescription: string;
  deliveryNotePlaceholder: string;
  notesLabel: string;
  notesPlaceholder: string;
  inquiryPlaceholder: string;
  presetTitle: string;
  presetDescription: string;
  presetFlavors: readonly SampleFlavorName[];
}

export default function WholesaleContactCard({
  source,
  companyLabel,
  companyPlaceholder,
  contactNameLabel = "ご担当者名",
  emailPlaceholder,
  addressPlaceholder,
  deliveryDescription,
  deliveryNotePlaceholder,
  notesLabel,
  notesPlaceholder,
  inquiryPlaceholder,
  presetTitle,
  presetDescription,
  presetFlavors,
}: WholesaleContactCardProps) {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);
  const [activeTab, setActiveTab] = useState<FormTab>("sample");
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
  const resolvedSource = channelTag ? `${source}:${channelTag}`.slice(0, 50) : source;

  const noteChips =
    source === "cafe"
      ? [
          {
            label: "＋ ドーナツ・焼き菓子に添えたい",
            text: "ドーナツや焼き菓子に添える（挟む）アイスとして検討しています。",
          },
          {
            label: "＋ フロート・パフェに",
            text: "ドリンクフロートやパフェ用のアイスとして検討しています。",
          },
          {
            label: "＋ 100mlカップ物販・ロゴOEMも知りたい",
            text: "持ち帰り用の100ml個食カップや、お店ロゴシールOEMも知りたいです。",
          },
          {
            label: "＋ 原材料・基準の確認",
            text: "ベースミルクの種類やアルコール有無など、原材料の詳細も確認したいです。",
          },
        ]
      : source === "hotel"
        ? [
            {
              label: "＋ 会席の水菓子・締めの甘味に",
              text: "夕食の会席やコース料理の締めくくりの水菓子・甘味として検討しています。",
            },
            {
              label: "＋ 海外宿泊客・食制限対応に",
              text: "海外のお客様（ヴィーガン・GF）や乳卵小麦アレルギー対応として検討しています。",
            },
            {
              label: "＋ アルコール由来原料を味ごとに確認したい",
              text: "アルコール由来の原料などについて、味ごとに個別確認したいです。",
            },
            {
              label: "＋ 部屋出し・売店用屋号カップ・地元味OEMも知りたい",
              text: "お部屋出し・売店用の100mlカップ（屋号ロゴ入り）や地元素材OEMも知りたいです。",
            },
          ]
        : [
            {
              label: "＋ 業務用バルク（4L〜）検討",
              text: "店内提供用の1L・2Lバルクを検討しています。",
            },
            {
              label: "＋ 100mlカップ（60個〜）検討",
              text: "テイクアウト・物販用の100ml個食カップを検討しています。",
            },
            {
              label: "＋ ロゴシールOEMも知りたい",
              text: "開発費0円のお店ロゴ丸シールOEMについても知りたいです。",
            },
          ];

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

  if (state.success) {
    return (
      <div
        id="sample-form-card"
        className="scroll-mt-20 rounded-3xl border border-stone-200/80 bg-white p-8 text-center shadow-xs sm:p-10"
      >
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-600">
          ✓
        </div>
        <h3 className="text-ink text-xl font-bold">
          {state.formType === "sample" ? "お申し込みありがとうございます" : "送信しました"}
        </h3>
        <p className="text-ink-light mt-3 font-sans text-[15px] leading-relaxed whitespace-pre-line">
          {state.message}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2.5 border-t border-gray-100 pt-5 font-sans text-xs font-bold">
          {source !== "wholesale" && (
            <Link
              href="/wholesale"
              className="text-ink hover:text-brand rounded-full border border-gray-200 bg-[#fafaf8] px-4 py-2 transition-colors"
            >
              業務用バルク・100mlカップの要点一覧を見る →
            </Link>
          )}
          <Link
            href={`/oem/plan?src=${source}_thanks`}
            className="text-brand hover:bg-brand/10 rounded-full border border-emerald-200 bg-emerald-50/50 px-4 py-2 transition-colors"
          >
            お店ロゴシール・オリジナルOEM案内を見る →
          </Link>
        </div>
      </div>
    );
  }

  const tabClass = (tab: FormTab) =>
    `flex-1 cursor-pointer rounded-full py-2.5 font-sans text-sm font-bold transition-colors ${
      activeTab === tab ? "bg-white text-ink shadow-2xs" : "text-ink-muted hover:text-ink"
    }`;

  return (
    <div
      id="sample-form-card"
      className="scroll-mt-20 rounded-3xl border border-stone-200/80 bg-white p-5 shadow-xs sm:p-8"
    >
      {(prefillStore || customerToken) && (
        <div className="bg-brand/10 text-brand mb-4 rounded-2xl px-4 py-3 font-sans text-xs leading-relaxed font-bold">
          {prefillStore ? `${prefillStore} 様、` : ""}
          ご連絡ありがとうございます。お届け先をご入力いただくだけでサンプル（6個・商品代無料）を手配いたします。
        </div>
      )}

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

      <form action={formAction} aria-label="お問い合わせフォーム" className="mt-5 space-y-4">
        <input type="hidden" name="formType" value={activeTab} />
        <input type="hidden" name="source" value={resolvedSource} />
        {customerToken ? <input type="hidden" name="customerToken" value={customerToken} /> : null}

        {state.message && !state.success ? (
          <div
            ref={errorBannerRef}
            className="rounded-xl bg-red-50 p-4 font-sans text-sm text-red-600"
          >
            {state.message}
          </div>
        ) : null}

        <Field id="companyName" label={companyLabel} required error={state.errors?.companyName}>
          <input
            type="text"
            id="companyName"
            name="companyName"
            defaultValue={state.fields?.companyName ?? prefillStore}
            autoComplete="organization"
            disabled={isPending}
            className={`${inputClasses} ${state.errors?.companyName ? errorClasses : ""}`}
            placeholder={companyPlaceholder}
          />
        </Field>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field
            id="contactName"
            label={contactNameLabel}
            required
            error={state.errors?.contactName}
          >
            <input
              type="text"
              id="contactName"
              name="contactName"
              defaultValue={state.fields?.contactName ?? ""}
              autoComplete="name"
              disabled={isPending}
              className={`${inputClasses} ${state.errors?.contactName ? errorClasses : ""}`}
              placeholder="山田 太郎"
            />
          </Field>

          <Field
            id="phone"
            label="電話番号（配送伝票用）"
            required={activeTab === "sample"}
            error={state.errors?.phone}
          >
            <input
              type="tel"
              id="phone"
              name="phone"
              defaultValue={state.fields?.phone ?? ""}
              autoComplete="tel"
              inputMode="tel"
              onBlur={handlePhoneBlur}
              disabled={isPending}
              className={`${inputClasses} ${state.errors?.phone ? errorClasses : ""}`}
              placeholder="092-231-0677"
            />
          </Field>
        </div>

        <Field id="email" label="メールアドレス" required error={state.errors?.email}>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={state.fields?.email ?? ""}
            autoComplete="email"
            inputMode="email"
            disabled={isPending}
            className={`${inputClasses} ${state.errors?.email ? errorClasses : ""}`}
            placeholder={emailPlaceholder}
          />
        </Field>

        {activeTab === "sample" ? (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-[10rem_1fr]">
              <Field id="postalCode" label="郵便番号" required error={state.errors?.postalCode}>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  defaultValue={state.fields?.postalCode ?? ""}
                  autoComplete="postal-code"
                  inputMode="numeric"
                  onChange={handlePostalCodeChange}
                  onBlur={handlePostalCodeBlur}
                  disabled={isPending}
                  className={`${inputClasses} ${state.errors?.postalCode ? errorClasses : ""}`}
                  placeholder="810-0022"
                />
              </Field>

              <Field id="address" label="お届け先の住所" required error={state.errors?.address}>
                <input
                  ref={addressInputRef}
                  type="text"
                  id="address"
                  name="address"
                  defaultValue={state.fields?.address ?? ""}
                  autoComplete="street-address"
                  disabled={isPending}
                  className={`${inputClasses} ${state.errors?.address ? errorClasses : ""}`}
                  placeholder={addressPlaceholder}
                />
              </Field>
            </div>

            <WholesaleSamplePicker
              disabled={isPending}
              error={state.errors?.sampleFlavors}
              presetTitle={presetTitle}
              presetDescription={presetDescription}
              presetFlavors={presetFlavors}
            />

            <WholesaleDeliveryPicker
              disabled={isPending}
              description={deliveryDescription}
              notePlaceholder={deliveryNotePlaceholder}
            />

            <Field
              id="notes"
              label={notesLabel}
              hint="タップで記入例が入ります。原材料や基準のご質問もこちらへどうぞ。"
            >
              <div className="mb-2 flex flex-wrap gap-1.5">
                {noteChips.map((chip) => (
                  <button
                    key={chip.label}
                    type="button"
                    onClick={() => appendNoteChip(chip.text)}
                    className="hover:border-brand hover:text-brand cursor-pointer rounded-full border border-gray-200 bg-[#fafaf8] px-2.5 py-1 font-sans text-[11px] font-bold text-gray-600 transition-colors"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
              <textarea
                id="notes"
                name="notes"
                rows={2}
                value={notesValue}
                onChange={(e) => setNotesValue(e.target.value)}
                disabled={isPending}
                className={`${inputClasses} resize-none`}
                placeholder={notesPlaceholder}
              />
            </Field>
          </>
        ) : null}

        {activeTab === "inquiry" ? (
          <Field id="message" label="ご相談内容" required error={state.errors?.message}>
            <textarea
              id="message"
              name="message"
              rows={5}
              defaultValue={state.fields?.message ?? ""}
              disabled={isPending}
              className={`${inputClasses} resize-none ${state.errors?.message ? errorClasses : ""}`}
              placeholder={inquiryPlaceholder}
            />
          </Field>
        ) : null}

        <div className="pt-2">
          <button
            type="submit"
            disabled={isPending}
            className={`bg-cta hover:bg-cta-hover w-full cursor-pointer rounded-full py-4 font-sans text-base font-bold text-white shadow-[0_6px_20px_rgba(212,112,143,0.3)] transition-colors ${
              isPending ? "cursor-wait opacity-70" : ""
            }`}
          >
            {isPending
              ? "送信中…"
              : activeTab === "sample"
                ? `${WHOLESALE_FACTS.ctaLabel} →`
                : "送信する →"}
          </button>
          <p className="text-ink-muted mt-2.5 text-center font-sans text-xs leading-relaxed">
            {activeTab === "sample"
              ? "商品代は無料・クール便の送料のみ着払い（原則お申し込みの翌日に発送）／電話での営業連絡は一切いたしません"
              : "通常2営業日以内にメールにてご返信いたします"}
          </p>
        </div>
      </form>

      <div className="mt-5 border-t border-gray-100 pt-5 text-center">
        <p className="text-ink-light font-sans text-xs">
          フォーム入力のお時間がない場合は、LINEから一言お送りいただく形でも承ります
        </p>
        <a
          href={WHOLESALE_FACTS.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2.5 inline-flex items-center gap-2 rounded-full bg-[#06C755] px-6 py-2.5 font-sans text-sm font-bold text-white transition-colors hover:bg-[#05b34c]"
        >
          <LineIcon />
          LINEで申し込む・相談する
        </a>
      </div>
    </div>
  );
}
