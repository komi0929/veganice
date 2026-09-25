"use client";

import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";

const comparisonRows = [
  {
    label: "テクスチャー",
    cheap: "時間が経つと固くなりやすい",
    cheapStatus: "negative" as const,
    soyStories: "お米の力で、なめらかさを長く保ちます",
    soyStoriesStatus: "positive" as const,
  },
  {
    label: "提供のしやすさ",
    cheap: "冷凍庫から出して少し待つ必要がある",
    cheapStatus: "negative" as const,
    soyStories: "出してすぐ、ディッシャーですっとすくえます",
    soyStoriesStatus: "positive" as const,
  },
  {
    label: "味わい",
    cheap: "「植物性だから」という、少しの妥協",
    cheapStatus: "negative" as const,
    soyStories: "ノンビーガンの方も「美味しい」と喜ぶコク",
    soyStoriesStatus: "positive" as const,
  },
  {
    label: "アレルゲン管理",
    cheap: "製造ラインの共用によるコンタミの不安",
    cheapStatus: "negative" as const,
    soyStories: "乳・卵・小麦を一切持ち込まない専用工房",
    soyStoriesStatus: "positive" as const,
  },
  {
    label: "原材料のこだわり",
    cheap: "乳化剤や安定剤で食感を補正している",
    cheapStatus: "negative" as const,
    soyStories: "乳化安定剤・増粘剤・着色料はすべて不使用",
    soyStoriesStatus: "positive" as const,
  },
  {
    label: "お客様の反応",
    cheap: "「まぁ、こんなものかな」",
    cheapStatus: "negative" as const,
    soyStories: "「これ、本当にヴィーガンなの？」という驚き",
    soyStoriesStatus: "positive" as const,
  },
] as const;

function StatusIcon({ status }: { status: "positive" | "negative" }) {
  if (status === "positive")
    return <Check className="text-brand h-4 w-4 flex-shrink-0" strokeWidth={3} />;
  return <Info className="h-4 w-4 flex-shrink-0 text-gray-300" strokeWidth={2} />;
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
          className="mb-12 md:mb-16 md:text-center"
        >
          <span className="text-brand mb-4 block text-sm font-semibold tracking-widest uppercase">
            Our Promise
          </span>
          <h2 className="text-ink mb-6 font-serif text-2xl sm:text-3xl md:text-4xl">
            「植物性だから仕方ない」——本当にそうでしょうか？
          </h2>
          <p className="text-ink-light mx-auto max-w-2xl font-sans text-base leading-relaxed md:text-lg">
            私たちも同じ悩みを抱えていました。だから、ひとつひとつ向き合ってきました。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
        >
          {/* ── デスクトップ: テーブル表示 ── */}
          <div className="hidden md:block">
            {/* テーブルヘッダー */}
            <div className="grid grid-cols-[180px_1fr_1fr] border-b border-gray-100 bg-gray-50">
              <div className="p-6" />
              <div className="border-l border-gray-100 p-6 text-center">
                <p className="text-ink-muted font-sans text-xs font-medium tracking-wider">
                  よくあるクラフトアイスの印象
                </p>
              </div>
              <div className="bg-brand/5 border-l border-gray-100 p-6 text-center">
                <p className="text-brand font-serif text-sm font-bold tracking-wider">
                  SoyStoriesのお約束
                </p>
              </div>
            </div>

            {/* テーブルボディ */}
            {comparisonRows.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-[180px_1fr_1fr] ${
                  index < comparisonRows.length - 1 ? "border-b border-gray-50" : ""
                }`}
              >
                <div className="flex items-center p-5">
                  <span className="text-ink font-serif text-sm font-bold">{row.label}</span>
                </div>
                <div className="flex items-center gap-2 border-l border-gray-50 p-5">
                  <StatusIcon status={row.cheapStatus} />
                  <span className="text-ink-light text-sm leading-snug">{row.cheap}</span>
                </div>
                <div className="bg-brand/[0.02] flex items-center gap-2 border-l border-gray-50 p-5">
                  <StatusIcon status={row.soyStoriesStatus} />
                  <span className="text-ink text-sm leading-snug font-medium">
                    {row.soyStories}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ── モバイル: カード表示 ── */}
          <div className="divide-y divide-gray-100 md:hidden">
            {comparisonRows.map((row, index) => (
              <div key={index} className="px-5 py-4">
                <p className="text-ink mb-3 font-serif text-sm font-bold">{row.label}</p>
                <div className="mb-2 flex items-start gap-2 rounded-lg bg-gray-50 p-3">
                  <StatusIcon status={row.cheapStatus} />
                  <span className="text-ink-light text-sm leading-relaxed">{row.cheap}</span>
                </div>
                <div className="bg-brand/5 flex items-start gap-2 rounded-lg p-3">
                  <StatusIcon status={row.soyStoriesStatus} />
                  <span className="text-ink text-sm leading-relaxed font-medium">
                    {row.soyStories}
                  </span>
                </div>
              </div>
            ))}
          </div>
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
            この違いが、お店のお客様を笑顔にする理由です。
          </p>
          <a
            href="#contact-form"
            className="bg-cta hover:bg-cta-hover inline-block rounded-full px-10 py-4 text-base font-bold text-white shadow-sm transition-all hover:shadow-md md:text-lg"
          >
            無料でサンプルを取り寄せる
          </a>
        </motion.div>
      </div>
    </section>
  );
}
