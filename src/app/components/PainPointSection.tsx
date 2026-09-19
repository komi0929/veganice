"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const painPoints = [
  {
    num: "01",
    text: "ヴィーガン対応のアイスを入れたが、ガチガチに固まってスクープできない",
    detail: "冷凍庫から出して20分待ち。忙しいサービス中にお客様を待たせ、結局メニューから外した。",
  },
  {
    num: "02",
    text: "「植物性だから仕方ない」で済ませていた、味の妥協",
    detail:
      "ノンビーガンのお客様に出せないクオリティ。グループ全員が同じデザートを楽しめないまま。",
  },
  {
    num: "03",
    text: "アレルギー対応を謳ったのに、自信を持って「大丈夫です」と言えない",
    detail: "製造工程が見えない仕入れ先。コンタミリスクが怖くて、お客様に聞かれると言葉に詰まる。",
  },
  {
    num: "04",
    text: "インバウンド需要が増えているのに、出せるデザートがない",
    detail:
      "HappyCow・Google Mapsで「vegan dessert」と検索する外国人客。対応メニューがなく、機会を逃し続けている。",
  },
  {
    num: "05",
    text: "安い業務用を何種類か試したが、結局どれも同じ——安かろう、悪かろう",
    detail: "「もう植物性アイスはやめよう」と諦めかけていませんか？——それ、商品の問題でした。",
  },
];

export default function PainPointSection() {
  return (
    <section id="pain-points" className="bg-bg text-ink w-full py-16 md:py-32">
      <div className="container mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center"
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="mb-16 text-center md:mb-20">
            <h2 className="font-serif text-3xl leading-snug tracking-wide md:text-4xl">
              こんな経験、ありませんか？
            </h2>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            className="mb-20 grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl bg-gray-200 md:grid-cols-2"
          >
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col gap-5 bg-white p-10 md:p-12 ${
                  index === 4 ? "md:col-span-2" : ""
                }`}
              >
                <span className="text-ink-muted font-sans text-sm tracking-widest">
                  {point.num}
                </span>
                <h3 className="text-ink font-serif text-lg leading-relaxed md:text-xl">
                  {point.text}
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed">{point.detail}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Transition & CTA */}
          <motion.div
            variants={itemVariants}
            className="flex w-full max-w-2xl flex-col items-center gap-8 text-center"
          >
            <p className="text-ink font-serif text-xl leading-relaxed md:text-2xl">
              それは商品選びの問題でした。
              <br />
              <span className="text-brand">米粉の力で、すべて解決できます。</span>
            </p>
            <motion.a
              href="#benefits"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-cta hover:bg-cta-hover inline-block cursor-pointer rounded-full px-10 py-4 text-base font-bold text-white shadow-sm transition-colors"
            >
              SoyStoriesが違う理由を見る
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
