"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
import { dispatchOemIntent, subscribeOemIntent } from "../lib/oemInteraction";

/**
 * スライダー連動の「売価と手残り利益バー図解」＋「試算条件のまま1タップで無料相談できる直結ボタン」つきシミュレーター
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

  useEffect(() => {
    return subscribeOemIntent((detail) => {
      if (detail.target === "simulator" && detail.courseId && detail.courseId !== "undecided") {
        handleCourseChange(detail.courseId);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formatId]);

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

  const selectedCourse = OEM_COURSES.find((c) => c.id === courseId) ?? OEM_COURSES[1];
  const minSlider = formatId === "cup" ? 480 : 400;
  const maxSlider = formatId === "cup" ? 800 : 750;
  const profitPctClamped = Math.min(80, Math.max(10, result.storeGrossMarginPercent));
  const costPctClamped = 100 - profitPctClamped;

  return (
    <section id="simulator" className="scroll-mt-16 bg-[#f7f3ec] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="販売イメージ試算"
          lines={["スライダーを動かすだけで、", "お店に残る利益とご負担の目安がわかります。"]}
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* 左側：タップで選ぶ条件パネル */}
          <div className="space-y-6 rounded-3xl bg-white p-6 shadow-2xs sm:p-8 lg:col-span-7">
            {/* 1. プラン */}
            <div>
              <label className="text-ink block text-sm font-bold">1. プランを選ぶ</label>
              <div className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {OEM_COURSES.map((course) => {
                  const active = course.id === courseId;
                  return (
                    <button
                      key={course.id}
                      type="button"
                      onClick={() => handleCourseChange(course.id)}
                      className={`min-h-14 cursor-pointer rounded-2xl border p-3.5 text-left transition-all ${
                        active
                          ? "border-brand bg-brand/8 text-ink ring-brand/20 ring-2"
                          : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      <p className="text-xs font-bold">{course.shortTitle}</p>
                      <p className="text-brand mt-1 text-xs font-bold">
                        初期開発費 ¥{course.devFeeExTax.toLocaleString("ja-JP")}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. 容器形態 */}
            <div>
              <label className="text-ink block text-sm font-bold">2. 納品形態を選ぶ</label>
              <div className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => handleFormatChange("cup")}
                  className={`min-h-14 cursor-pointer rounded-2xl border p-3.5 text-left transition-all ${
                    formatId === "cup"
                      ? "border-brand bg-brand/8 text-ink ring-brand/20 ring-2"
                      : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                  }`}
                >
                  <p className="text-sm font-bold">100ml 個食カップ</p>
                  <p className="text-ink-muted mt-0.5 text-xs">
                    店頭販売・ギフトに（税込¥{PRICING_CONSTANTS.cupOemPriceTaxIncl}/個）
                  </p>
                </button>
                <button
                  type="button"
                  disabled={courseId === "seal_only"}
                  onClick={() => handleFormatChange("bulk")}
                  className={`min-h-14 rounded-2xl border p-3.5 text-left transition-all ${
                    courseId === "seal_only"
                      ? "cursor-not-allowed border-gray-100 bg-gray-50 text-gray-400"
                      : formatId === "bulk"
                        ? "border-brand bg-brand/8 text-ink ring-brand/20 cursor-pointer ring-2"
                        : "cursor-pointer border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                  }`}
                >
                  <p className="text-sm font-bold">2L 業務用バルク</p>
                  <p className="mt-0.5 text-xs">
                    {courseId === "seal_only"
                      ? "※既存味のバルクは定番卸(4L〜)で対応"
                      : "店内デザート皿盛りに（2L 税別¥4,000）"}
                  </p>
                </button>
              </div>
            </div>

            {/* 3. お店の想定提供価格スライダー */}
            <div className="rounded-2xl bg-[#faf8f4] p-4 sm:p-5">
              <div className="flex items-baseline justify-between gap-2">
                <label htmlFor="oem-selling-price" className="text-ink text-sm font-bold">
                  3. 販売価格（税込）
                </label>
                <span className="text-brand shrink-0 text-2xl font-bold whitespace-nowrap">
                  ¥{sellingPrice.toLocaleString("ja-JP")}
                  <span className="text-ink-muted ml-1 text-xs font-normal">
                    ／1{result.servingUnitLabel}
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
                className="slider-brand mt-4 h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
              />
              <div className="text-ink-muted mt-1.5 flex justify-between text-xs">
                <span>¥{minSlider}</span>
                <span>標準目安：¥600前後</span>
                <span>¥{maxSlider}</span>
              </div>
            </div>

            {/* 4. お届け先地域 */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="oem-region" className="text-ink block text-sm font-bold">
                  4. お届け先エリア
                </label>
                <select
                  id="oem-region"
                  value={regionKey}
                  onChange={(e) => setRegionKey(e.target.value as ShippingRegionKey)}
                  className="text-ink mt-2 min-h-11 w-full rounded-xl border border-gray-200 bg-white px-3.5 text-sm font-medium"
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
                  <label className="flex min-h-11 w-full cursor-pointer items-center gap-2.5 rounded-xl border border-gray-200 bg-[#fafaf8] px-3 py-2 text-xs leading-snug">
                    <input
                      type="checkbox"
                      checked={bundleTrial}
                      onChange={(e) => setBundleTrial(e.target.checked)}
                      className="h-4 w-4 shrink-0 rounded accent-[#3e6044]"
                    />
                    <span className="text-ink-light">通常納品と試作を同梱する（試作送料 ¥0）</span>
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* 右側：一目でわかる棒グラフ＆結果パネル＋1タップ相談ブリッジ */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-2xs sm:p-8 lg:col-span-5">
            <div className="space-y-5">
              <div>
                <p className="text-brand text-xs font-bold">リアルタイム試算結果</p>
                <h3 className="text-ink mt-0.5 text-lg font-bold">
                  1{result.servingUnitLabel}あたりの内訳と利益目安
                </h3>
              </div>

              {/* 直感アニメーション棒グラフ（仕入・送料 vs お店の利益） */}
              <div>
                <div className="flex h-11 w-full overflow-hidden rounded-2xl bg-gray-100 text-xs font-bold">
                  <motion.div
                    animate={{ width: `${costPctClamped}%` }}
                    transition={{ type: "spring", stiffness: 260, damping: 28 }}
                    className="flex items-center justify-center bg-gray-300/80 px-2 whitespace-nowrap text-gray-700"
                  >
                    仕入+送料 {100 - result.storeGrossMarginPercent}%
                  </motion.div>
                  <motion.div
                    animate={{ width: `${profitPctClamped}%` }}
                    transition={{ type: "spring", stiffness: 260, damping: 28 }}
                    className="bg-brand flex items-center justify-center px-2 whitespace-nowrap text-white"
                  >
                    お店利益 {result.storeGrossMarginPercent}%
                  </motion.div>
                </div>
                <div className="text-ink-light mt-2 flex justify-between text-xs">
                  <span>送料込仕入：約¥{result.unitCostExTaxRecommended}</span>
                  <span className="text-brand font-bold">
                    1{result.servingUnitLabel}の利益：約¥{result.unitGrossProfitExTax}
                  </span>
                </div>
              </div>

              {/* リピート1箱あたりの利益（一番知りたい数字を大きく） */}
              <div className="border-brand/25 bg-brand/5 rounded-2xl border p-4 text-center">
                <p className="text-brand text-xs font-bold">
                  リピート1回・{result.recommendedLotLabel}のお店利益目安
                </p>
                <p className="text-brand mt-1.5 text-3xl font-bold">
                  約 ¥{result.recommendedLotProfitExTax.toLocaleString("ja-JP")}
                </p>
              </div>

              {/* 初回ご負担となじむ目安 */}
              <div className="space-y-2.5 rounded-2xl bg-[#faf8f4] p-4 text-xs">
                <div className="flex items-baseline justify-between">
                  <span className="text-ink-light">初回ご試作のご負担（送料・実費込）</span>
                  <span className="text-ink text-base font-bold">
                    ¥{result.initialTrialTotalTaxIncl.toLocaleString("ja-JP")}
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-ink-light">
                    初回最小ロット（{formatId === "cup" ? "60個" : "6L"}・送料込）
                  </span>
                  <span className="text-ink text-base font-bold">
                    ¥{result.firstLotTotalTaxIncl.toLocaleString("ja-JP")}
                  </span>
                </div>
                {selectedCourse.devFeeExTax > 0 && (
                  <div className="flex items-baseline justify-between border-t border-gray-200/80 pt-2.5">
                    <span className="text-ink-light">試作ご負担が売上になじむ目安</span>
                    <span className="text-brand font-bold">
                      約 {result.familiarizeUnits} {result.servingUnitLabel}（1日3
                      {result.servingUnitLabel}で約{result.familiarizeWeeksAt3PerDay}週間）
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* 試算条件をそのままフォームへ引き継ぐCVボタン */}
            <div className="mt-5">
              <button
                type="button"
                onClick={() =>
                  dispatchOemIntent({
                    target: "contact",
                    tab: "oem",
                    courseId,
                    formatId,
                  })
                }
                className="bg-cta hover:bg-cta-hover min-h-12 w-full cursor-pointer rounded-full px-5 py-3 text-sm font-bold text-white shadow-2xs transition-colors"
              >
                この条件（{selectedCourse.shortTitle}・{formatId === "cup" ? "カップ" : "2Lバルク"}
                ）で無料相談する →
              </button>
              <p className="text-ink-muted mt-2.5 text-[11px] leading-relaxed">
                ※税抜会計ベースの概算目安です。ご支給素材の原価・工房への素材送料・天面シールの印刷費は別途となります。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
