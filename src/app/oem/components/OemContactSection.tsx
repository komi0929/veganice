"use client";

import { useActionState, useEffect, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { Check, Sparkles, ShieldCheck, ChevronDown } from "lucide-react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import SampleFlavorPicker from "@/app/components/SampleFlavorPicker";
import DeliveryPreferencePicker from "@/app/components/DeliveryPreferencePicker";
import {
  subscribeOemIntent,
  type OemSelectableCourse,
  type OemSelectableFormat,
} from "../lib/oemInteraction";

const initialState: ContactState = {
  success: false,
  message: "",
};

type OemTab = "oem" | "sample";

const LINE_URL = "https://lin.ee/OnsWAWw2";

const COURSE_CHOICES: {
  id: OemSelectableCourse;
  title: string;
  badge: string;
}[] = [
  { id: "seal_only", title: "① フタだけお店ロゴ", badge: "開発費 ¥0" },
  { id: "base_arrange", title: "② 粉末・具材を混ぜる", badge: "試作費 ¥1万" },
  { id: "custom_recipe", title: "③ 果物・特産品から開発", badge: "試作費 ¥3万" },
  { id: "undecided", title: "まだ迷っている・相談したい", badge: "おすすめ提案" },
];

const FORMAT_CHOICES: {
  id: OemSelectableFormat;
  label: string;
}[] = [
  { id: "cup", label: "100mlカップ（お店シール）" },
  { id: "bulk", label: "2L業務用バルク" },
  { id: "both", label: "両方・まだ未定" },
];

const QUICK_MEMO_CHIPS = [
  {
    label: "＋ 果物・果汁を使いたい",
    text: "自家農園（または地域）の果物・果汁を使ったアイスを検討しています。",
  },
  {
    label: "＋ 茶葉・珈琲で作りたい",
    text: "お店の茶葉・焙煎珈琲パウダーを使ったオリジナル味を検討しています。",
  },
  {
    label: "＋ 開発費0円のシール変更を知りたい",
    text: "まずは開発費0円の天面シール変更コースと入稿テンプレートについて知りたいです。",
  },
  {
    label: "＋ 店内用の2Lバルクも検討中",
    text: "店内の食後デザート・パフェ用の業務用バルク導入もあわせて相談したいです。",
  },
];

const inputClasses =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-base text-ink placeholder:text-gray-300 transition-shadow focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none disabled:cursor-not-allowed disabled:opacity-50";
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
      <label htmlFor={id} className="text-ink mb-1.5 flex items-center gap-2 text-sm font-bold">
        {label}
        {required ? (
          <span className="bg-cta rounded px-1.5 py-0.5 text-[11px] text-white">必須</span>
        ) : (
          <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[11px] text-gray-500">任意</span>
        )}
      </label>
      {hint && <p className="text-ink-muted mb-2 text-xs leading-relaxed">{hint}</p>}
      {children}
      {error && <p className="mt-1 text-xs text-red-500">{error[0]}</p>}
    </div>
  );
}

/**
 * 最短60秒・視覚カード選択＋ワンタップ記入例チップつきの高反響OEM相談＆試食申込フォーム
 * コースカードや利益シミュレーターからの1タップ条件引き継ぎに対応
 */
export default function OemContactSection() {
  const searchParams = useSearchParams();
  const prefillStore = searchParams.get("store") ?? "";
  const prefillName = searchParams.get("name") ?? "";
  const prefillEmail = searchParams.get("email") ?? "";
  const prefillPhone = searchParams.get("phone") ?? "";
  const customerToken = searchParams.get("c") ?? "";

  const [state, formAction, isPending] = useActionState(submitContact, initialState);
  const [activeTab, setActiveTab] = useState<OemTab>("oem");
  const [selectedCourse, setSelectedCourse] = useState<OemSelectableCourse>("custom_recipe");
  const [selectedFormat, setSelectedFormat] = useState<OemSelectableFormat>("cup");
  const [tasteMemo, setTasteMemo] = useState<string>("");
  const [syncedNotice, setSyncedNotice] = useState<boolean>(false);

  useEffect(() => {
    return subscribeOemIntent((detail) => {
      if (detail.target !== "contact") return;
      if (detail.tab) {
        setActiveTab(detail.tab);
      }
      if (detail.courseId) {
        setSelectedCourse(detail.courseId);
        if (detail.courseId === "seal_only") {
          setSelectedFormat("cup");
        }
      }
      if (detail.formatId) {
        setSelectedFormat(detail.formatId);
      }
      setSyncedNotice(true);
      const timer = window.setTimeout(() => setSyncedNotice(false), 3500);
      return () => window.clearTimeout(timer);
    });
  }, []);

  const handleCourseTap = (course: OemSelectableCourse) => {
    setSelectedCourse(course);
    if (course === "seal_only" && selectedFormat === "bulk") {
      setSelectedFormat("cup");
    }
  };

  const appendMemoChip = (snippet: string) => {
    setTasteMemo((prev) => {
      if (prev.includes(snippet)) return prev;
      return prev.trim() ? `${prev.trim()}\n${snippet}` : snippet;
    });
  };

  return (
    <section id="contact-form" className="bg-bg-white scroll-mt-16 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="bg-brand/10 text-brand inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            最短60秒・ご相談無料
          </span>
          <h2 className="text-ink mt-2.5 text-2xl font-bold sm:text-3xl">
            無料事前相談・試食サンプルお申し込み
          </h2>
          <p className="text-ink-light mt-2.5 text-[15px] leading-relaxed">
            まだ素材や数量が固まっていなくても大丈夫です。まずはお気軽にお聞かせください。
          </p>
        </div>

        {/* 「無料相談を送ると何がもらえるか」を明示して送信ハードルを下げる特典ボックス */}
        <div className="mt-7 rounded-2xl border border-[#3e6044]/20 bg-[#f7f3ec] p-4 sm:p-5">
          <p className="text-brand text-center text-xs font-bold">
            無料相談をお送りいただいた方へ、2〜3営業日以内にメールでお届けします
          </p>
          <div className="mt-3 grid grid-cols-1 gap-2 text-xs sm:grid-cols-3">
            <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 shadow-2xs">
              <Check className="text-brand h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="text-ink font-bold">3つの味の方向性シート</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 shadow-2xs">
              <Check className="text-brand h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="text-ink font-bold">概算費用・お届け時期目安</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 shadow-2xs">
              <Check className="text-brand h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="text-ink font-bold">Canvaシール入稿テンプレ</span>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-gray-200/80 bg-[#fafaf8] p-5 shadow-xs sm:p-9">
          {state.success ? (
            <div className="rounded-2xl bg-white p-8 text-center sm:p-10">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-700">
                ✓
              </div>
              <h3 className="text-ink text-xl font-bold">受け付けいたしました</h3>
              <p className="text-ink-light mt-3 text-[15px] leading-relaxed whitespace-pre-line">
                {state.message}
              </p>
            </div>
          ) : (
            <>
              {/* モード切替タブ（OEM事前相談 ／ まずは既存味の試食サンプル） */}
              <div className="flex rounded-full bg-gray-200/70 p-1" role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "oem"}
                  onClick={() => setActiveTab("oem")}
                  className={`min-h-11 flex-1 cursor-pointer rounded-full py-2 text-xs font-bold transition-colors sm:text-sm ${
                    activeTab === "oem" ? "bg-white text-gray-900 shadow-xs" : "text-gray-600"
                  }`}
                >
                  OEM・オリジナル開発の無料相談
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "sample"}
                  onClick={() => setActiveTab("sample")}
                  className={`min-h-11 flex-1 cursor-pointer rounded-full py-2 text-xs font-bold transition-colors sm:text-sm ${
                    activeTab === "sample" ? "bg-white text-gray-900 shadow-xs" : "text-gray-600"
                  }`}
                >
                  まずは今の味を試食する（6個）
                </button>
              </div>

              {syncedNotice && (
                <div className="bg-brand/10 text-brand mt-4 rounded-xl px-4 py-2.5 text-center text-xs font-bold">
                  ✓ 選択いただいたコース・条件をフォームに反映しました
                </div>
              )}

              <form action={formAction} className="mt-6 space-y-5">
                <input type="hidden" name="formType" value={activeTab} />
                {customerToken && (
                  <input type="hidden" name="customerToken" value={customerToken} />
                )}

                {state.message && !state.success && (
                  <div className="rounded-xl bg-red-50 p-4 text-sm text-red-600">
                    {state.message}
                  </div>
                )}

                {activeTab === "oem" && (
                  <>
                    {/* タップで直感選択できるコースカード */}
                    <div>
                      <span className="text-ink mb-2 block text-sm font-bold">
                        気になるコース（後から変更OK）
                      </span>
                      <input type="hidden" name="oemCourse" value={selectedCourse} />
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {COURSE_CHOICES.map((c) => {
                          const active = selectedCourse === c.id;
                          return (
                            <button
                              key={c.id}
                              type="button"
                              onClick={() => handleCourseTap(c.id)}
                              className={`flex min-h-12 cursor-pointer items-center justify-between rounded-xl border px-3.5 py-2.5 text-left transition-all ${
                                active
                                  ? "border-brand bg-brand/8 text-ink ring-brand/20 ring-2"
                                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                              }`}
                            >
                              <span className="text-xs font-bold">{c.title}</span>
                              <span className="text-brand shrink-0 text-[11px] font-bold">
                                {c.badge}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* タップで選べる納品形態ピル */}
                    <div>
                      <span className="text-ink mb-2 block text-sm font-bold">
                        ご希望の納品形態
                      </span>
                      <input type="hidden" name="packageFormat" value={selectedFormat} />
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                        {FORMAT_CHOICES.map((f) => {
                          const disabled = selectedCourse === "seal_only" && f.id === "bulk";
                          const active = selectedFormat === f.id;
                          return (
                            <button
                              key={f.id}
                              type="button"
                              disabled={disabled}
                              onClick={() => setSelectedFormat(f.id)}
                              className={`min-h-11 rounded-xl border px-3 py-2 text-xs font-bold transition-all ${
                                disabled
                                  ? "cursor-not-allowed border-gray-100 bg-gray-50 text-gray-400"
                                  : active
                                    ? "border-brand bg-brand/8 text-brand ring-brand/20 cursor-pointer ring-2"
                                    : "cursor-pointer border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                              }`}
                            >
                              {f.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </>
                )}

                {/* 必須入力は最小3項目（店名・担当者・メール）に絞って離脱を防ぐ */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field
                    id="companyName"
                    label="お店・会社・農園のお名前"
                    required
                    error={state.errors?.companyName}
                  >
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      defaultValue={prefillStore}
                      disabled={isPending}
                      placeholder="例：〇〇農園 ／ カフェ〇〇"
                      className={`${inputClasses} ${state.errors?.companyName ? errorClasses : ""}`}
                    />
                  </Field>

                  <Field
                    id="contactName"
                    label="ご担当者名"
                    required
                    error={state.errors?.contactName}
                  >
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      defaultValue={prefillName}
                      disabled={isPending}
                      placeholder="山田 花子"
                      className={`${inputClasses} ${state.errors?.contactName ? errorClasses : ""}`}
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field id="email" label="メールアドレス" required error={state.errors?.email}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      defaultValue={prefillEmail}
                      disabled={isPending}
                      placeholder="info@example.jp"
                      className={`${inputClasses} ${state.errors?.email ? errorClasses : ""}`}
                    />
                  </Field>

                  {activeTab === "sample" ? (
                    <Field
                      id="phone"
                      label="お電話番号（配送伝票用）"
                      required
                      error={state.errors?.phone}
                    >
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        defaultValue={prefillPhone}
                        disabled={isPending}
                        placeholder="092-000-0000"
                        className={`${inputClasses} ${state.errors?.phone ? errorClasses : ""}`}
                      />
                    </Field>
                  ) : (
                    selectedCourse !== "seal_only" && (
                      <Field id="ingredientName" label="使いたい素材（ざっくりでOK）">
                        <input
                          type="text"
                          id="ingredientName"
                          name="ingredientName"
                          disabled={isPending}
                          placeholder="例：ゆず果汁、焙煎ほうじ茶、いちご等"
                          className={inputClasses}
                        />
                      </Field>
                    )
                  )}
                </div>

                {activeTab === "oem" ? (
                  <>
                    {/* ワンタップで下書きが入る相談メモ欄 */}
                    <Field
                      id="tasteImage"
                      label="ご相談メモ・作りたいイメージ"
                      hint="下のボタンをタップすると記入例が入ります。1行だけでも大丈夫です。"
                    >
                      <div className="mb-2.5 flex flex-wrap gap-1.5">
                        {QUICK_MEMO_CHIPS.map((chip) => (
                          <button
                            key={chip.label}
                            type="button"
                            onClick={() => appendMemoChip(chip.text)}
                            className="hover:border-brand hover:text-brand cursor-pointer rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-bold text-gray-600 transition-colors"
                          >
                            {chip.label}
                          </button>
                        ))}
                      </div>
                      <textarea
                        id="tasteImage"
                        name="tasteImage"
                        rows={3}
                        value={tasteMemo}
                        onChange={(e) => setTasteMemo(e.target.value)}
                        disabled={isPending}
                        placeholder="例：店頭レジ横での販売（税込600円前後）に向けて、まずは方向性やスケジュールを相談したいです。"
                        className={inputClasses}
                      />
                    </Field>

                    {/* 詳細項目（保管温度・アレルゲン・時期・電話番号）は任意アコーディオンに収納 */}
                    <details className="group rounded-2xl border border-gray-200/80 bg-white px-4 py-3.5">
                      <summary className="text-ink-light flex cursor-pointer list-none items-center justify-between text-xs font-bold [&::-webkit-details-marker]:hidden">
                        <span>＋ お決まりの詳細情報もあわせて伝える（任意・あとからでもOK）</span>
                        <ChevronDown
                          className="text-brand h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
                          aria-hidden="true"
                        />
                      </summary>

                      <div className="mt-4 space-y-4 border-t border-gray-100 pt-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <Field id="ingredientState" label="素材の状態・保管温度">
                            <input
                              type="text"
                              id="ingredientState"
                              name="ingredientState"
                              disabled={isPending}
                              placeholder="例：冷凍ピューレ、常温パウダーなど"
                              className={inputClasses}
                            />
                          </Field>

                          <Field id="desiredTiming" label="販売開始のご希望時期">
                            <input
                              type="text"
                              id="desiredTiming"
                              name="desiredTiming"
                              disabled={isPending}
                              placeholder="例：来月下旬ごろ ／ 時期は未定"
                              className={inputClasses}
                            />
                          </Field>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <Field id="allergenStatus" label="素材の「卵・乳・小麦」混入有無">
                            <select
                              id="allergenStatus"
                              name="allergenStatus"
                              disabled={isPending}
                              defaultValue={
                                selectedCourse === "seal_only" ? "none_seal_only" : "checking"
                              }
                              className={inputClasses}
                            >
                              <option value="checking">後ほど原材料表・規格書で確認したい</option>
                              <option value="free_confirmed">
                                素材・加工場所ともに卵・乳・小麦を含まない
                              </option>
                              <option value="none_seal_only">
                                素材の持ち込みなし（シール変更のみ）
                              </option>
                            </select>
                          </Field>

                          <Field id="phone" label="お電話番号" error={state.errors?.phone}>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              defaultValue={prefillPhone}
                              disabled={isPending}
                              placeholder="092-000-0000"
                              className={inputClasses}
                            />
                          </Field>
                        </div>
                      </div>
                    </details>
                  </>
                ) : (
                  <>
                    <div className="rounded-2xl bg-white p-4 text-xs leading-relaxed text-gray-600">
                      OEMをご検討中の方にも、まずは既存の11フレーバー（6個おためしセット・
                      <strong>商品代無料／クール便送料のみ着払い</strong>
                      ）で米粉×発酵製法のなめらかさをお確かめいただけます。
                    </div>

                    <SampleFlavorPicker disabled={isPending} />

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <Field
                        id="postalCode"
                        label="郵便番号"
                        required
                        error={state.errors?.postalCode}
                      >
                        <input
                          type="text"
                          id="postalCode"
                          name="postalCode"
                          disabled={isPending}
                          placeholder="810-0022"
                          className={`${inputClasses} ${state.errors?.postalCode ? errorClasses : ""}`}
                        />
                      </Field>
                      <div className="sm:col-span-2">
                        <Field
                          id="address"
                          label="お届け先ご住所"
                          required
                          error={state.errors?.address}
                        >
                          <input
                            type="text"
                            id="address"
                            name="address"
                            disabled={isPending}
                            placeholder="福岡県福岡市中央区薬院..."
                            className={`${inputClasses} ${state.errors?.address ? errorClasses : ""}`}
                          />
                        </Field>
                      </div>
                    </div>

                    <DeliveryPreferencePicker disabled={isPending} />
                  </>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  className="bg-cta hover:bg-cta-hover mt-2 min-h-14 w-full cursor-pointer rounded-full py-4 text-base font-bold text-white shadow-sm transition-colors disabled:opacity-60"
                >
                  {isPending
                    ? "送信しています..."
                    : activeTab === "oem"
                      ? "無料で事前相談・方向性シートを受け取る →"
                      : "試食サンプル（6個・商品代無料）を申し込む →"}
                </button>

                <div className="text-ink-muted flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center text-xs">
                  <span className="inline-flex items-center gap-1">
                    <ShieldCheck className="text-brand h-3.5 w-3.5" aria-hidden="true" />
                    費用は一切発生しません
                  </span>
                  <span>・</span>
                  <span>しつこい営業電話はいたしません</span>
                </div>
              </form>
            </>
          )}

          {/* LINEでの気軽な相談導線 */}
          <div className="mt-7 border-t border-gray-200 pt-6 text-center">
            <p className="text-ink-muted text-xs">
              「フォームよりチャットで気軽に聞きたい」という方はLINEからもご相談いただけます
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 inline-flex min-h-10 items-center gap-2 rounded-full border border-[#06C755] bg-white px-5 py-2 text-xs font-bold text-[#06C755] transition-colors hover:bg-[#06C755]/5"
            >
              LINE公式アカウントで気軽に質問する
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
