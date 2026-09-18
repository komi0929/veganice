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
    text: "アレルギーやヴィーガンのお客様に、デザートを断っている",
    detail: "グループに1人でもいると、テーブル全体のデザート注文がキャンセルされることも。",
  },
  {
    num: "02",
    text: "インバウンド客に対応できず、客単価を逃している",
    detail: "訪日外国人の約10%がベジタリアン・ヴィーガン。デザート1品で+500〜800円の機会損失に。",
  },
  {
    num: "03",
    text: "パティシエがいない。仕込みに人手を割けない",
    detail: "デザートのために専任スタッフを雇う余裕はないが、食後の一品は欲しい。",
  },
  {
    num: "04",
    text: "生菓子の廃棄ロスが痛い",
    detail: "ケーキやプリンは賞味期限が短く、売れ残りがそのまま原価に乗る。",
  },
  {
    num: "05",
    text: "代替品を試したが、味に納得できなかった",
    detail: "『ヴィーガン対応だから仕方ない』——その妥協は、もう必要ありません。",
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
              こんなお悩み、ありませんか？
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
              その課題、SoyStoriesなら一括で解決できます。
            </p>
            <motion.a
              href="#products"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-cta hover:bg-cta-hover inline-block cursor-pointer rounded-full px-10 py-4 text-base font-bold text-white shadow-sm transition-colors"
            >
              解決策を見る
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
