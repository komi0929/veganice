"use client";

import { useActionState, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { submitContact, type ContactState } from "@/app/actions/contact";
import SampleFlavorPicker from "@/app/components/SampleFlavorPicker";
import DeliveryPreferencePicker from "@/app/components/DeliveryPreferencePicker";

const initialState: ContactState = {
  success: false,
  message: "",
};

type OemTab = "oem" | "sample";

const LINE_URL = "https://lin.ee/OnsWAWw2";

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
 * OEM事前ヒアリング・ご相談 ＆ 既存ベース試食サンプル申込フォーム
 * URLクエリ（?store=...&name=...&email=...&phone=...&c=...）があれば自動セットし二度入力を防ぐ
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
  const [selectedCourse, setSelectedCourse] = useState<string>("custom_recipe");

  return (
    <section id="contact-form" className="bg-bg-white scroll-mt-16 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-brand text-xs font-bold tracking-widest uppercase">
            Consultation & Sample
          </p>
          <h2 className="text-ink mt-2 text-2xl font-bold sm:text-3xl">
            事前ヒアリング・ご相談フォーム
          </h2>
          <p className="text-ink-light mt-3 text-[15px] leading-relaxed">
            まずは無料でお店のイメージや使いたい素材をお聞かせください。
            <br className="hidden sm:inline" />
            試作に進む前に、「3つの味の方向性・アレンジ案」を整理してご提案いたします。
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-gray-200/80 bg-[#fafaf8] p-5 shadow-xs sm:p-10">
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
                  className={`flex-1 cursor-pointer rounded-full py-2.5 text-xs font-bold transition-colors sm:text-sm ${
                    activeTab === "oem" ? "bg-white text-gray-900 shadow-xs" : "text-gray-600"
                  }`}
                >
                  OEM・オリジナル開発の事前相談
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "sample"}
                  onClick={() => setActiveTab("sample")}
                  className={`flex-1 cursor-pointer rounded-full py-2.5 text-xs font-bold transition-colors sm:text-sm ${
                    activeTab === "sample" ? "bg-white text-gray-900 shadow-xs" : "text-gray-600"
                  }`}
                >
                  まずは今の味を試食する（6個）
                </button>
              </div>

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

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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

                  <Field
                    id="phone"
                    label="お電話番号"
                    required={activeTab === "sample"}
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
                </div>

                {activeTab === "oem" ? (
                  <>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <Field id="oemCourse" label="ご検討中のコース" required>
                        <select
                          id="oemCourse"
                          name="oemCourse"
                          value={selectedCourse}
                          onChange={(e) => setSelectedCourse(e.target.value)}
                          disabled={isPending}
                          className={inputClasses}
                        >
                          <option value="custom_recipe">
                            ③ お店の素材で専用ベースから開発（試作費3万円）
                          </option>
                          <option value="base_arrange">
                            ② 既存ベース＋粉末・具材追加（試作費1万円）
                          </option>
                          <option value="seal_only">
                            ① 既存の11種の味＋お店の天面シール（開発費0円）
                          </option>
                          <option value="undecided">まだ迷っている・相談して決めたい</option>
                        </select>
                      </Field>

                      <Field id="packageFormat" label="ご希望の納品形態" required>
                        <select
                          id="packageFormat"
                          name="packageFormat"
                          disabled={isPending}
                          className={inputClasses}
                        >
                          <option value="cup">100ml 個食カップ（お店シール）</option>
                          <option value="bulk">2L 業務用バルク</option>
                          <option value="both">個食カップと2Lバルクの両方</option>
                          <option value="undecided">相談して決めたい</option>
                        </select>
                      </Field>
                    </div>

                    {selectedCourse !== "seal_only" && (
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <Field
                          id="ingredientName"
                          label="使いたい素材（お決まりの範囲で）"
                          hint="例：自家農園のゆず果汁、焙煎ほうじ茶パウダー、酒粕など"
                        >
                          <input
                            type="text"
                            id="ingredientName"
                            name="ingredientName"
                            disabled={isPending}
                            placeholder="例：無農薬ゆず果汁"
                            className={inputClasses}
                          />
                        </Field>

                        <Field
                          id="ingredientState"
                          label="素材の状態・保管温度"
                          hint="例：冷凍ピューレ、常温パウダー、生の果物など"
                        >
                          <input
                            type="text"
                            id="ingredientState"
                            name="ingredientState"
                            disabled={isPending}
                            placeholder="例：冷凍ストレート果汁（無加糖）"
                            className={inputClasses}
                          />
                        </Field>
                      </div>
                    )}

                    <Field
                      id="allergenStatus"
                      label="素材の「卵・乳・小麦」混入有無（専用工房の安全確認）"
                      required
                    >
                      <select
                        id="allergenStatus"
                        name="allergenStatus"
                        disabled={isPending}
                        defaultValue={
                          selectedCourse === "seal_only" ? "none_seal_only" : "free_confirmed"
                        }
                        className={inputClasses}
                      >
                        <option value="free_confirmed">
                          素材・一次加工場所ともに卵・乳・小麦を含まない
                        </option>
                        <option value="checking">
                          確認中（後ほど原材料表・規格書で確認したい）
                        </option>
                        <option value="none_seal_only">
                          素材の持ち込みなし（コース① 天面シール変更のみ）
                        </option>
                      </select>
                    </Field>

                    <Field
                      id="tasteImage"
                      label="目指したい味わい・販売シーンのイメージ"
                      hint="甘さの加減、香りの立たせ方、どんなお客様に届けたいかなど、思い描いていることを自由にお書きください。"
                    >
                      <textarea
                        id="tasteImage"
                        name="tasteImage"
                        rows={4}
                        disabled={isPending}
                        placeholder="例：食後でもさっぱり食べられて、ゆずの香りがしっかり立つ味わいにしたいです。店頭のレジ横（税込600円前後）とギフトセットでの販売を考えています。"
                        className={inputClasses}
                      />
                    </Field>

                    <Field id="desiredTiming" label="お届け・販売開始のご希望時期">
                      <input
                        type="text"
                        id="desiredTiming"
                        name="desiredTiming"
                        disabled={isPending}
                        placeholder="例：来月下旬のイベントに合わせたい ／ 時期は未定"
                        className={inputClasses}
                      />
                    </Field>
                  </>
                ) : (
                  <>
                    <div className="rounded-2xl bg-white p-4 text-xs leading-relaxed text-gray-600">
                      OEMをご検討中の方にも、まずは既存の11フレーバー（6個おためしセット・商品代無料／クール便送料のみ着払い）で米粉×発酵製法のなめらかさをお確かめいただけます。
                    </div>

                    <SampleFlavorPicker disabled={isPending} />

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
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
                  className="bg-cta hover:bg-cta-hover mt-2 w-full cursor-pointer rounded-full py-4 text-base font-bold text-white shadow-sm transition-colors disabled:opacity-60"
                >
                  {isPending
                    ? "送信しています..."
                    : activeTab === "oem"
                      ? "この内容で事前相談を送る（無料）"
                      : "試食サンプル（6個）を申し込む"}
                </button>

                <p className="text-ink-muted text-center text-xs leading-relaxed">
                  この時点では費用は一切発生しません。方向性のご提案をご確認いただいた後、ご納得いただけた場合のみ試作お申し込み（カード決済または銀行振込）へ進みます。
                </p>
              </form>
            </>
          )}

          {/* LINEでの気軽な相談導線 */}
          <div className="mt-8 border-t border-gray-200 pt-6 text-center">
            <p className="text-ink-muted text-xs">LINEでのご質問・ご相談も承っています</p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 inline-flex items-center gap-2 rounded-full border border-[#06C755] bg-white px-5 py-2 text-xs font-bold text-[#06C755] transition-colors hover:bg-[#06C755]/5"
            >
              LINE公式アカウントで相談する
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
