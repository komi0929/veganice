"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { RefreshCcw, Wind } from "lucide-react";

/* ── 定数 ── */
const COST_PER_SCOOP = 167; // 1スクープあたり原価（円）— 2L ¥4,180(税込) ÷ 25スクープ
const BUSINESS_DAYS = 25; // 月間営業日数

/* ── 補足情報 ── */
const supplementary = [
  {
    icon: <RefreshCcw className="text-brand h-5 w-5" />,
    label: "廃棄ロス",
    value: "実質ゼロ",
    note: "冷凍食品のため賞味期限の表示義務なし。注文が入ったときだけすくえばいい。",
  },
  {
    icon: <Wind className="text-brand h-5 w-5" />,
    label: "低オーバーラン",
    value: "素材が凝縮",
    note: "空気含有率を抑えた濃厚な味わい。溶けにくく、提供しやすい。",
  },
];

export default function EconomicsSection() {
  const [menuPrice, setMenuPrice] = useState(700);
  const [dailyServings, setDailyServings] = useState(5);

  const grossProfitPerCup = menuPrice - COST_PER_SCOOP;
  const monthlyGrossProfit = grossProfitPerCup * dailyServings * BUSINESS_DAYS;
  const costRatio = Math.round((COST_PER_SCOOP / menuPrice) * 100);

  const formatCurrency = useCallback((value: number) => {
    return new Intl.NumberFormat("ja-JP").format(value);
  }, []);

  return (
    <section id="economics" className="bg-bg-white relative overflow-hidden py-24">
      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-12">
        {/* ── ヘッダー ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-brand mb-4 block text-sm font-semibold tracking-widest uppercase">
            Profit Simulator
          </span>
          <h2 className="text-ink mb-6 font-serif text-3xl md:text-5xl">
            原価は高い。でも、利益は出ます。
          </h2>
          <p className="text-ink-light mx-auto max-w-2xl font-sans text-lg md:text-xl">
            安い代替品より原価は高い。でも&ldquo;味で選ばれる&rdquo;デザートは、
            <br className="hidden md:block" />
            メニューの顔になり、確実に利益を生みます。
          </p>
        </motion.div>

        {/* ── シミュレーター本体 ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mb-16 max-w-3xl rounded-2xl border border-gray-100 bg-white p-8 shadow-md md:p-12"
        >
          {/* スライダー: メニュー価格 */}
          <div className="mb-10">
            <div className="mb-3 flex items-baseline justify-between">
              <label htmlFor="menuPrice" className="text-ink font-sans text-sm font-bold">
                メニュー価格（税込）
              </label>
              <span className="text-brand font-serif text-2xl font-bold md:text-3xl">
                ¥{formatCurrency(menuPrice)}
              </span>
            </div>
            <input
              id="menuPrice"
              type="range"
              min={400}
              max={1500}
              step={50}
              value={menuPrice}
              onChange={(e) => setMenuPrice(Number(e.target.value))}
              className="slider-brand h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-[var(--color-brand)]"
            />
            <div className="text-ink-muted mt-2 flex justify-between font-sans text-xs">
              <span>¥400</span>
              <span>¥1,500</span>
            </div>
          </div>

          {/* スライダー: 1日の提供杯数 */}
          <div className="mb-12">
            <div className="mb-3 flex items-baseline justify-between">
              <label htmlFor="dailyServings" className="text-ink font-sans text-sm font-bold">
                1日の提供杯数
              </label>
              <span className="text-brand font-serif text-2xl font-bold md:text-3xl">
                {dailyServings}
                <span className="text-ink-muted ml-1 text-base font-normal">杯</span>
              </span>
            </div>
            <input
              id="dailyServings"
              type="range"
              min={1}
              max={30}
              step={1}
              value={dailyServings}
              onChange={(e) => setDailyServings(Number(e.target.value))}
              className="slider-brand h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-[var(--color-brand)]"
            />
            <div className="text-ink-muted mt-2 flex justify-between font-sans text-xs">
              <span>1杯</span>
              <span>30杯</span>
            </div>
          </div>

          {/* 結果表示 */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="bg-bg rounded-xl p-6 text-center">
              <p className="text-ink-muted mb-2 font-sans text-xs font-medium">1杯あたりの粗利</p>
              <p className="text-ink font-serif text-3xl font-bold md:text-4xl">
                ¥{formatCurrency(grossProfitPerCup)}
              </p>
            </div>
            <div className="bg-brand/5 border-brand/20 rounded-xl border-2 p-6 text-center">
              <p className="text-ink-muted mb-2 font-sans text-xs font-medium">月間粗利</p>
              <p className="text-brand font-serif text-3xl font-bold md:text-4xl">
                ¥{formatCurrency(monthlyGrossProfit)}
              </p>
              <p className="text-ink-muted mt-1 text-[10px]">月{BUSINESS_DAYS}日営業</p>
            </div>
            <div className="bg-bg rounded-xl p-6 text-center">
              <p className="text-ink-muted mb-2 font-sans text-xs font-medium">原価率</p>
              <p className="text-ink font-serif text-3xl font-bold md:text-4xl">
                {costRatio}
                <span className="text-xl">%</span>
              </p>
              <p className="text-brand mt-1 text-[10px] font-medium">
                {costRatio <= 30 ? "目標30%をクリア ✓" : ""}
              </p>
            </div>
          </div>

          {/* 注釈 */}
          <p className="text-ink-muted mt-6 text-center font-sans text-xs">
            ※ 2L ¥4,180（税込）/ #12ディッシャー（80ml）で約25スクープ ≒ ¥
            {formatCurrency(COST_PER_SCOOP)}/杯で算出。 フレーバーや提供杯数により変動します。
          </p>

          {/* CTA */}
          <div className="mt-8 text-center">
            <a
              href="#contact-form"
              className="bg-cta hover:bg-cta-hover inline-block rounded-full px-10 py-4 text-base font-bold text-white shadow-sm transition-all hover:shadow-md md:text-lg"
            >
              この利益を、あなたのお店でも
            </a>
          </div>
        </motion.div>

        {/* ── 補足情報 ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {supplementary.map((item) => (
            <div key={item.label} className="bg-bg flex items-start gap-4 rounded-xl p-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                {item.icon}
              </div>
              <div>
                <p className="text-ink mb-1 font-sans text-sm font-bold">
                  {item.label}：{item.value}
                </p>
                <p className="text-ink-muted text-xs leading-relaxed">{item.note}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
