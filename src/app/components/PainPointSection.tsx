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
    text: "クラフトアイスを導入したけれど、固くてすくいづらい",
    detail:
      "冷凍庫から出してすぐには使えず、お客様をお待たせしてしまう。忙しい時間帯には少し負担になっていませんか？",
  },
  {
    num: "02",
    text: "「植物性だから」と、味わいにどこか妥協している",
    detail:
      "本当はノンビーガンのお客様にも「美味しい」と喜んでいただけるデザートをお出ししたいのに、納得のいくものが見つからない。",
  },
  {
    num: "03",
    text: "アレルギーへの配慮。本当に安心して提供できるか不安",
    detail:
      "仕入れ先の製造ラインで乳や卵を扱っていないか。「大丈夫かな？」と少し心配しながらお出しするのは、とても心苦しいですよね。",
  },
  {
    num: "04",
    text: "インバウンドや多様なお客様に、美味しいデザートを届けたい",
    detail:
      "せっかくお店に来てくださったのに、召し上がっていただけるデザートがない。そんな寂しい思いをさせてしまっている。",
  },
  {
    num: "05",
    text: "業務用のクラフトアイスは、どれも同じような味に感じてしまう",
    detail: "添加物や乳化剤に頼らない、手作りのような温かみのあるクラフトアイスを探している。",
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
          <motion.div variants={itemVariants} className="mb-12 md:mb-20 md:text-center">
            <h2 className="font-serif text-2xl leading-relaxed tracking-wide sm:text-3xl md:text-4xl">
              私たちも飲食店だからこそ、
              <br />
              そのお悩みが
              <br className="sm:hidden" />
              痛いほどよくわかります。
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
            className="flex w-full max-w-2xl flex-col items-start gap-8 md:items-center md:text-center"
          >
            <p className="text-ink font-serif text-xl leading-relaxed md:text-2xl">
              「植物性だから仕方ない」と、
              <br />
              味や扱いやすさを諦めてほしくないから。
              <br className="hidden md:block" />
              <span className="text-brand mt-2 block">私たちは、お米の力にたどり着きました。</span>
            </p>
            <motion.a
              href="#benefits"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-cta hover:bg-cta-hover mt-4 inline-block cursor-pointer rounded-full px-10 py-4 text-base font-bold text-white shadow-sm transition-colors"
            >
              私たちのこだわりを見る
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
