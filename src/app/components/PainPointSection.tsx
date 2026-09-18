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
    text: "アレルギーやヴィーガンのお客様に、デザートを出せずにいる",
    detail: "せっかくの食事の締めに、お断りするのは心苦しい。",
  },
  {
    num: "02",
    text: "インバウンド客にデザートを断るたびに、客単価を逃している",
    detail: "海外のお客様は特に食へのこだわりが強く、機会損失になっている。",
  },
  {
    num: "03",
    text: "専用設備やレシピ開発の余裕はない",
    detail: "コンタミネーション対策や新しい機材の導入はハードルが高い。",
  },
  {
    num: "04",
    text: "代替品を試したが、味に納得できなかった",
    detail: "「ヴィーガン用だから」と味を妥協したくない。",
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
                className="flex flex-col gap-5 bg-white p-10 md:p-12"
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
              そのお悩み、
              <br className="sm:hidden" />
              SoyStoriesのヴィーガン米粉アイスが解決します。
            </p>
            <motion.a
              href="#products"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-cta hover:bg-cta-hover inline-block cursor-pointer rounded-full px-10 py-4 text-base font-bold text-white shadow-sm transition-colors"
            >
              商品を見る
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
