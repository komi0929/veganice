"use client";

import { motion } from "framer-motion";

/**
 * 導入事例セクション（プレースホルダー）
 *
 * 卸売導入実績が取れ次第、ここにケーススタディを追加する。
 * 使い方：
 * 1. caseStudies 配列にデータを追加
 * 2. page.tsx の {/* 導入事例 *​/} コメントを解除
 */

interface CaseStudy {
  storeName: string;
  location: string;
  category: string;
  quote: string;
  result: string;
  imageSrc?: string;
}

const caseStudies: CaseStudy[] = [
  // 例:
  // {
  //   storeName: "◯◯カフェ",
  //   location: "東京・渋谷",
  //   category: "カフェ",
  //   quote: "ヴィーガンメニューを導入してから、インバウンドのお客様が月20組増えました。",
  //   result: "デザート注文率 +35%",
  //   imageSrc: "/images/case_study_01.jpg",
  // },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  }),
};

export default function CaseStudySection() {
  // 導入事例がまだない場合は何も表示しない
  if (caseStudies.length === 0) return null;

  return (
    <section id="case-studies" className="bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-ink-muted mb-4 font-sans text-xs tracking-[0.25em] uppercase">
            Case Studies
          </p>
          <h2 className="text-ink font-serif text-3xl sm:text-4xl">導入いただいた飲食店様の声</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {caseStudies.map((cs, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={index * 0.15 + 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-brand bg-brand/10 rounded-full px-3 py-1 text-xs font-medium">
                  {cs.category}
                </span>
                <span className="text-ink-muted text-xs">{cs.location}</span>
              </div>
              <h3 className="text-ink mb-3 font-serif text-lg font-bold">{cs.storeName}</h3>
              <blockquote className="text-ink-light mb-4 font-serif text-base leading-[1.8]">
                &ldquo;{cs.quote}&rdquo;
              </blockquote>
              <p className="text-brand font-sans text-sm font-bold">{cs.result}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
