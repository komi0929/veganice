"use client";

import { useState } from "react";
import { SectionHeader } from "@/app/dessert/components/ui";
import {
  OEM_COURSES,
  PRICING_CONSTANTS,
  SHIPPING_REGIONS,
  simulateCustomerEconomics,
  type OemCourseId,
  type OemFormatId,
  type ShippingRegionKey,
} from "../data/oemSpecs";

/**
 * 穏やかで誠実なトーンの「お店での販売イメージと、ご負担の目安」シミュレーター
 */
export default function OemSimulatorSection() {
  const [courseId, setCourseId] = useState<OemCourseId>("custom_recipe");
  const [formatId, setFormatId] = useState<OemFormatId>("cup");
  const [sellingPrice, setSellingPrice] = useState<number>(600);
  const [regionKey, setRegionKey] = useState<ShippingRegionKey>("kanto_shinetsu");
  const [bundleTrial, setBundleTrial] = useState<boolean>(false);

  const handleCourseChange = (nextCourse: OemCourseId) => {
    setCourseId(nextCourse);
    if (nextCourse === "seal_only" && formatId === "bulk") {
      setFormatId("cup");
    }
  };

  const handleFormatChange = (nextFormat: OemFormatId) => {
    setFormatId(nextFormat);
    if (nextFormat === "cup" && sellingPrice < 480) {
      setSellingPrice(600);
    } else if (nextFormat === "bulk" && sellingPrice > 700) {
      setSellingPrice(550);
    }
  };

  const result = simulateCustomerEconomics({
    courseId,
    formatId,
    sellingPriceTaxIncl: sellingPrice,
    regionKey,
    bundleTrialWithRegularOrder: bundleTrial,
  });

  const selectedCourse = OEM_COURSES.find((c) => c.id === courseId) ?? OEM_COURSES[2];
  const minSlider = formatId === "cup" ? 480 : 400;
  const maxSlider = formatId === "cup" ? 800 : 750;

  return (
    <section id="simulator" className="bg-[#f7f3ec] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="販売イメージとご予算の目安"
          lines={["お店の提供価格に合わせた、", "無理のない収支の目安をご確認いただけます。"]}
          lead={[
            "長く愛されるメニューとして続けていただけるよう、送料や試作実費も含めた目安をそのまま公開しています。",
            "お店のスタイルに近い条件を選んでみてください。",
          ]}
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* 左側：条件選択パネル */}
          <div className="space-y-6 rounded-3xl bg-white p-6 shadow-xs sm:p-8 lg:col-span-7">
            {/* 1. コース */}
            <div>
              <label className="text-ink block text-sm font-bold">1. ご検討中のコース</label>
              <div className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {OEM_COURSES.map((course) => {
                  const active = course.id === courseId;
                  return (
                    <button
                      key={course.id}
                      type="button"
                      onClick={() => handleCourseChange(course.id)}
                      className={`cursor-pointer rounded-2xl border p-3.5 text-left transition-colors ${
                        active
                          ? "border-brand bg-brand/5 text-ink"
                          : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      <p className="text-xs font-bold">{course.shortTitle}</p>
                      <p className="text-brand mt-1 text-xs font-semibold">
                        試作費 ¥{course.devFeeExTax.toLocaleString("ja-JP")}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. 容器形態 */}
            <div>
              <label className="text-ink block text-sm font-bold">2. ご希望の納品形態</label>
              <div className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => handleFormatChange("cup")}
                  className={`cursor-pointer rounded-2xl border p-3.5 text-left transition-colors ${
                    formatId === "cup"
                      ? "border-brand bg-brand/5 text-ink"
                      : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                  }`}
                >
                  <p className="text-sm font-bold">100ml 個食カップ</p>
                  <p className="text-ink-muted mt-0.5 text-xs">
                    店頭販売・お土産・ギフトに（税込¥{PRICING_CONSTANTS.cupOemPriceTaxIncl}/個）
                  </p>
                </button>
                <button
                  type="button"
                  disabled={courseId === "seal_only"}
                  onClick={() => handleFormatChange("bulk")}
                  className={`rounded-2xl border p-3.5 text-left transition-colors ${
                    courseId === "seal_only"
                      ? "cursor-not-allowed border-gray-100 bg-gray-50 text-gray-400"
                      : formatId === "bulk"
                        ? "border-brand bg-brand/5 text-ink cursor-pointer"
                        : "cursor-pointer border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                  }`}
                >
                  <p className="text-sm font-bold">2L 業務用バルク</p>
                  <p className="mt-0.5 text-xs">
                    {courseId === "seal_only"
                      ? "※既存味のバルクは定番卸（4L〜）で承ります"
                      : "店内デザート皿盛りに（2L 税別¥4,000）"}
                  </p>
                </button>
              </div>
            </div>

            {/* 3. お店の想定提供価格 */}
            <div>
              <div className="flex items-baseline justify-between">
                <label htmlFor="oem-selling-price" className="text-ink text-sm font-bold">
                  3. お店での想定ご提供価格（税込）
                </label>
                <span className="text-brand text-xl font-bold">
                  ¥{sellingPrice.toLocaleString("ja-JP")}
                  <span className="text-ink-muted ml-1 text-xs font-normal">
                    ／1{result.servingUnitLabel}
                    {formatId === "bulk" ? "（約80ml盛り想定）" : ""}
                  </span>
                </span>
              </div>
              <input
                id="oem-selling-price"
                type="range"
                min={minSlider}
                max={maxSlider}
                step={10}
                value={sellingPrice}
                onChange={(e) => setSellingPrice(Number(e.target.value))}
                className="slider-brand mt-3 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
              />
              <div className="text-ink-muted mt-1 flex justify-between text-xs">
                <span>¥{minSlider}</span>
                <span>目安：¥600前後</span>
                <span>¥{maxSlider}</span>
              </div>
            </div>

            {/* 4. お届け先地域 */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="oem-region" className="text-ink block text-sm font-bold">
                  4. お届け先エリア（クール便送料）
                </label>
                <select
                  id="oem-region"
                  value={regionKey}
                  onChange={(e) => setRegionKey(e.target.value as ShippingRegionKey)}
                  className="text-ink mt-2 w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm"
                >
                  {SHIPPING_REGIONS.map((r) => (
                    <option key={r.key} value={r.key}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </div>

              {selectedCourse.devFeeExTax > 0 && (
                <div className="flex items-end">
                  <label className="flex cursor-pointer items-start gap-2.5 rounded-xl border border-gray-200 bg-[#fafaf8] p-3 text-xs leading-relaxed">
                    <input
                      type="checkbox"
                      checked={bundleTrial}
                      onChange={(e) => setBundleTrial(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded accent-[#3e6044]"
                    />
                    <span className="text-ink-light">
                      既に定番卸をご利用中で、通常納品と試作品を同梱する（試作送料 ¥0）
                    </span>
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* 右側：穏やかな試算結果カード */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-xs sm:p-8 lg:col-span-5">
            <div className="space-y-5">
              <div>
                <p className="text-brand text-xs font-bold">お選びの条件での目安</p>
                <h3 className="text-ink mt-1 text-lg font-bold">ご負担とお店に残る利益の目安</h3>
              </div>

              {/* 初期ご負担 */}
              <div className="rounded-2xl bg-[#faf8f4] p-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-ink-light text-xs font-medium">
                    初回ご試作のご負担（税込）
                  </span>
                  <span className="text-ink text-lg font-bold">
                    ¥{result.initialTrialTotalTaxIncl.toLocaleString("ja-JP")}
                  </span>
                </div>
                {selectedCourse.devFeeExTax > 0 && (
                  <p className="text-ink-muted mt-1 text-[11px] leading-relaxed">
                    内訳：試作費 税別¥{selectedCourse.devFeeExTax.toLocaleString("ja-JP")} ＋
                    試作材料（1.5L）・資材・60サイズ冷凍送料
                  </p>
                )}

                <div className="mt-3 flex items-baseline justify-between border-t border-gray-200/70 pt-3">
                  <span className="text-ink-light text-xs font-medium">
                    初回最小ロット（{formatId === "cup" ? "60個" : "6L＝2L×3本"}・送料込税込）
                  </span>
                  <span className="text-ink text-base font-bold">
                    ¥{result.firstLotTotalTaxIncl.toLocaleString("ja-JP")}
                  </span>
                </div>
              </div>

              {/* なじむ目安 */}
              {selectedCourse.devFeeExTax > 0 ? (
                <div className="rounded-2xl border border-gray-100 bg-white p-4">
                  <p className="text-ink-muted text-xs">
                    最初のご試作費用が、日々の売上になじむ目安
                  </p>
                  <p className="text-ink mt-1.5 text-xl font-bold">
                    約 {result.familiarizeUnits.toLocaleString("ja-JP")} {result.servingUnitLabel}
                    <span className="text-ink-light ml-2 text-xs font-normal">
                      （1日3{result.servingUnitLabel}ペースで 約{result.familiarizeWeeksAt3PerDay}
                      週間）
                    </span>
                  </p>
                </div>
              ) : (
                <div className="rounded-2xl border border-gray-100 bg-white p-4">
                  <p className="text-ink-muted text-xs">開発費のご負担</p>
                  <p className="text-ink mt-1 text-base font-bold">
                    ¥0（初回のご注文分からすぐにお店の利益になります）
                  </p>
                </div>
              )}

              {/* 2回目以降のおススメ単位での利益目安 */}
              <div className="border-brand/25 bg-brand/5 rounded-2xl border p-4">
                <p className="text-brand text-xs font-bold">
                  リピート時（{result.recommendedLotLabel}）のお店の手残り目安
                </p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-brand text-2xl font-bold">
                    約 ¥{result.recommendedLotProfitExTax.toLocaleString("ja-JP")}
                  </span>
                  <span className="text-ink-light text-xs">
                    ／1回あたり粗利（粗利率 約{result.storeGrossMarginPercent}%）
                  </span>
                </div>
                <p className="text-ink-light mt-1.5 text-xs">
                  1{result.servingUnitLabel}あたり：送料込仕入目安 税抜¥
                  {result.unitCostExTaxRecommended} → 粗利目安 約¥{result.unitGrossProfitExTax}
                </p>
              </div>
            </div>

            <p className="text-ink-muted mt-5 text-[11.5px] leading-relaxed">
              ※上記は税抜会計ベースでの概算目安です。お客様からご支給いただくオリジナル素材の原価・当社工房への素材送料・天面シールの印刷費用は別途となります。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
