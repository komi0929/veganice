"use client";

import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";

const comparisonRows = [
  {
    label: "食後の後味",
    cheap: "乳脂肪や油分が口に残り、食後に重たく感じる",
    cheapStatus: "negative" as const,
    soyStories: "植物性ですっきりリフレッシュ。濃厚なのにキレが良い",
    soyStoriesStatus: "positive" as const,
  },
  {
    label: "提供オペレーション",
    cheap: "冷凍庫から出して固く、削るのに力と時間がかかる",
    cheapStatus: "negative" as const,
    soyStories: "米粉の力で出してすぐディッシャーですっと15秒提供",
    soyStoriesStatus: "positive" as const,
  },
  {
    label: "満足感とコク",
    cheap: "市販シャーベットだと水っぽく、デザートとして物足りない",
    cheapStatus: "negative" as const,
    soyStories: "発酵素材（甘酒・みそ）と米粉の深いうまみと濃厚なコク",
    soyStoriesStatus: "positive" as const,
  },
  {
    label: "冷凍スペース",
    cheap: "大容量（4L〜10L）バルクでラーメン店の狭い冷凍庫を圧迫",
    cheapStatus: "negative" as const,
    soyStories: "1L・2Lのコンパクト容器。最小4Lから省スペース保管",
    soyStoriesStatus: "positive" as const,
  },
  {
    label: "アレルゲン管理",
    cheap: "乳・小麦等の共用製造ラインによるコンタミ不安",
    cheapStatus: "negative" as const,
    soyStories: "乳・卵・小麦を持ち込まない専用工房で製造",
    soyStoriesStatus: "positive" as const,
  },
  {
    label: "お客様の反応",
    cheap: "「よくある市販アイスだな」と印象に残らない",
    cheapStatus: "negative" as const,
    soyStories: "「デザートまでヴィーガンで美味しい！」と口コミ拡散",
    soyStoriesStatus: "positive" as const,
  },
] as const;

function StatusIcon({ status }: { status: "positive" | "negative" }) {
  if (status === "positive")
    return <Check className="text-brand h-4 w-4 flex-shrink-0" strokeWidth={3} />;
  return <Info className="h-4 w-4 flex-shrink-0 text-gray-300" strokeWidth={2} />;
}

export default function DessertComparisonSection() {
  return (
    <section className="bg-bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 md:text-center"
        >
          <span className="text-brand mb-4 block text-sm font-semibold tracking-widest uppercase">
            Comparison
          </span>
          <h2 className="text-ink mb-6 font-serif text-2xl font-bold sm:text-3xl md:text-4xl">
            「食後のデザート」に求められる条件、
            <br />
            すべて満たしていますか？
          </h2>
          <p className="text-ink-light mx-auto max-w-2xl font-sans text-base leading-relaxed md:text-lg">
            一般的な業務用アイスや市販シャーベットと、食事系店舗特化のSoyStories。
            厨房のオペレーションからお客様の満足度まで、違いは一目瞭然です。
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
                  一般的な業務用アイス・シャーベット
                </p>
              </div>
              <div className="bg-brand/5 border-l border-gray-100 p-6 text-center">
                <p className="text-brand font-serif text-sm font-bold tracking-wider">
                  SoyStories 食後クラフトアイス
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
                <div className="bg-brand/[0.03] flex items-center gap-2 border-l border-gray-50 p-5">
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
          <p className="text-ink-light mb-6 font-sans text-sm md:text-base">
            食後のディッシャー通りと後味の良さを、ぜひ無料サンプルでご体感ください。
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
