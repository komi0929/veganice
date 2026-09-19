"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const comparisonRows = [
  {
    label: "初期投資",
    inHouse: "アイスマシン 50万円〜",
    inHouseStatus: "negative" as const,
    soyStories: "なし",
    soyStoriesStatus: "positive" as const,
  },
  {
    label: "毎日の仕込み",
    inHouse: "材料の計量・攪拌・冷凍",
    inHouseStatus: "negative" as const,
    soyStories: "不要（すくうだけ）",
    soyStoriesStatus: "positive" as const,
  },
  {
    label: "アレルゲン管理",
    inHouse: "自社で管理体制の構築が必要",
    inHouseStatus: "negative" as const,
    soyStories: "専用工場・コンタミなし",
    soyStoriesStatus: "positive" as const,
  },
  {
    label: "廃棄リスク",
    inHouse: "日持ちしない・売れ残りは損失",
    inHouseStatus: "negative" as const,
    soyStories: "冷凍保存で廃棄ロスゼロ",
    soyStoriesStatus: "positive" as const,
  },
  {
    label: "味の安定性",
    inHouse: "スタッフの技量に依存",
    inHouseStatus: "neutral" as const,
    soyStories: "専用工場で毎回同じ品質",
    soyStoriesStatus: "positive" as const,
  },
  {
    label: "メニューの幅",
    inHouse: "レシピ開発に時間が必要",
    inHouseStatus: "neutral" as const,
    soyStories: "8種のフレーバーから自由に選択",
    soyStoriesStatus: "positive" as const,
  },
  {
    label: "人件費",
    inHouse: "仕込み工数がそのまま上乗せ",
    inHouseStatus: "negative" as const,
    soyStories: "追加人件費なし",
    soyStoriesStatus: "positive" as const,
  },
] as const;

function StatusIcon({ status }: { status: "positive" | "negative" | "neutral" }) {
  if (status === "positive")
    return <Check className="text-brand h-4 w-4 flex-shrink-0" strokeWidth={3} />;
  if (status === "negative")
    return <X className="h-4 w-4 flex-shrink-0 text-red-400" strokeWidth={3} />;
  return <Minus className="h-4 w-4 flex-shrink-0 text-gray-400" strokeWidth={3} />;
}

export default function ComparisonSection() {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-brand mb-4 block text-sm font-semibold tracking-widest uppercase">
            Comparison
          </span>
          <h2 className="text-ink mb-6 font-serif text-3xl md:text-4xl">
            「自分で作る」と、どちらが得か？
          </h2>
          <p className="text-ink-light mx-auto max-w-2xl font-sans text-base leading-relaxed md:text-lg">
            品質を担保しながら利益を最大化するために、
            <br className="hidden md:block" />
            何に時間とお金を使うべきかを比較してみてください。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
        >
          {/* テーブルヘッダー */}
          <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-gray-100 bg-gray-50 md:grid-cols-[180px_1fr_1fr]">
            <div className="p-4 md:p-6" />
            <div className="border-l border-gray-100 p-4 text-center md:p-6">
              <p className="text-ink-muted font-sans text-xs font-bold tracking-wider uppercase">
                自社で仕込み
              </p>
            </div>
            <div className="bg-brand/5 border-l border-gray-100 p-4 text-center md:p-6">
              <p className="text-brand font-sans text-xs font-bold tracking-wider uppercase">
                SoyStories
              </p>
            </div>
          </div>

          {/* テーブルボディ */}
          {comparisonRows.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-[1fr_1fr_1fr] md:grid-cols-[180px_1fr_1fr] ${
                index < comparisonRows.length - 1 ? "border-b border-gray-50" : ""
              }`}
            >
              <div className="flex items-center p-4 md:p-5">
                <span className="text-ink font-sans text-sm font-bold">{row.label}</span>
              </div>
              <div className="flex items-center gap-2 border-l border-gray-50 p-4 md:p-5">
                <StatusIcon status={row.inHouseStatus} />
                <span className="text-ink-light text-xs leading-snug md:text-sm">
                  {row.inHouse}
                </span>
              </div>
              <div className="bg-brand/[0.02] flex items-center gap-2 border-l border-gray-50 p-4 md:p-5">
                <StatusIcon status={row.soyStoriesStatus} />
                <span className="text-ink text-xs leading-snug font-medium md:text-sm">
                  {row.soyStories}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact-form"
            className="bg-cta hover:bg-cta-hover inline-block rounded-full px-10 py-4 text-base font-bold text-white shadow-sm transition-all hover:shadow-md md:text-lg"
          >
            まずは味で判断してみる
          </a>
        </motion.div>
      </div>
    </section>
  );
}
