"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisonRows = [
  {
    label: "テクスチャー",
    cheap: "固まりやすい。時間が経つとカチカチ",
    cheapStatus: "negative" as const,
    soyStories: "米粉製法で滑らかさを長時間維持",
    soyStoriesStatus: "positive" as const,
  },
  {
    label: "スクープ性",
    cheap: "冷凍庫から出して15〜20分待ち",
    cheapStatus: "negative" as const,
    soyStories: "出してすぐディッシャーで提供可能",
    soyStoriesStatus: "positive" as const,
  },
  {
    label: "味の評価",
    cheap: "「植物性だから仕方ない」という妥協",
    cheapStatus: "negative" as const,
    soyStories: "HappyCow 5.0 — ノンビーガンが選ぶ味",
    soyStoriesStatus: "positive" as const,
  },
  {
    label: "アレルゲン管理",
    cheap: "製造ラインの共用が多い（コンタミリスク）",
    cheapStatus: "negative" as const,
    soyStories: "乳・卵・小麦不使用の専用工場",
    soyStoriesStatus: "positive" as const,
  },
  {
    label: "添加物",
    cheap: "乳化剤・安定剤・増粘剤で食感を補正",
    cheapStatus: "negative" as const,
    soyStories: "乳化安定剤・増粘剤・着色料すべて不使用",
    soyStoriesStatus: "positive" as const,
  },
  {
    label: "原材料",
    cheap: "輸入原料中心・大量生産",
    cheapStatus: "negative" as const,
    soyStories: "米粉・豆乳ベースの独自レシピ",
    soyStoriesStatus: "positive" as const,
  },
  {
    label: "お客様の反応",
    cheap: "「まあ、こんなもんか」——リピートなし",
    cheapStatus: "negative" as const,
    soyStories: "「本当にヴィーガン？」——驚きと感動",
    soyStoriesStatus: "positive" as const,
  },
] as const;

function StatusIcon({ status }: { status: "positive" | "negative" }) {
  if (status === "positive")
    return <Check className="text-brand h-4 w-4 flex-shrink-0" strokeWidth={3} />;
  return <X className="h-4 w-4 flex-shrink-0 text-red-400" strokeWidth={3} />;
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
            安い代替品との、決定的な違い
          </h2>
          <p className="text-ink-light mx-auto max-w-2xl font-sans text-base leading-relaxed md:text-lg">
            価格だけで選んだ結果、メニューから外すことになっていませんか？
            <br className="hidden md:block" />
            プロの現場で使い続けられるかどうかが、本当の判断基準です。
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
                安価な植物性アイス
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
                <StatusIcon status={row.cheapStatus} />
                <span className="text-ink-light text-xs leading-snug md:text-sm">{row.cheap}</span>
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
          <p className="text-ink-light mb-6 font-sans text-sm">
            価格の違いには、理由があります。その理由は、味で確かめてください。
          </p>
          <a
            href="#contact-form"
            className="bg-cta hover:bg-cta-hover inline-block rounded-full px-10 py-4 text-base font-bold text-white shadow-sm transition-all hover:shadow-md md:text-lg"
          >
            無料でサンプルを試す
          </a>
        </motion.div>
      </div>
    </section>
  );
}
