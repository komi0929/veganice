"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-end overflow-hidden sm:items-center">
      {/* 背景写真 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_flagship.jpg"
          alt="SoyStoriesの看板商品 — ワッフルカップにクラフトアイスを盛り付けた一皿"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* モバイル: 下部にグラデーション（テキスト領域を読みやすく） */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 sm:from-black/70 sm:via-black/30 sm:to-black/5" />
      </div>

      {/* テキストコンテンツ */}
      <div className="relative z-10 w-full px-6 pt-32 pb-12 sm:px-10 sm:pb-16 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-7xl flex-col items-start gap-6"
        >
          <motion.h1
            variants={itemVariants}
            className="font-serif leading-[1.4] font-bold tracking-wider text-white sm:leading-[1.3]"
          >
            <span className="block text-[1.65rem] leading-[1.5] sm:text-3xl md:text-5xl lg:text-6xl">
              同じテーブルで
              <br className="sm:hidden" />
              「おいしいね」と
              <br />
              言い合えるデザートを。
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-xl font-sans text-[0.85rem] leading-[1.9] text-gray-100 sm:text-base md:text-lg"
          >
            福岡・薬院の小さなお店から生まれた、
            <br className="sm:hidden" />
            プラントベース クラフトアイスクリーム。
            <br />
            乳・卵・小麦フリー。米粉と豆乳だけで作りました。
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mt-2">
            <motion.a
              href="#contact-form"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-cta hover:bg-cta-hover inline-block cursor-pointer rounded-full px-10 py-4 text-center text-base font-bold text-white shadow-lg transition-colors sm:text-lg"
            >
              無料でサンプルを試す
            </motion.a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-x-5 gap-y-1 border-t border-white/20 pt-5"
          >
            <span className="font-sans text-xs text-white/70 sm:text-sm">★ HappyCow 5.0</span>
            <span className="text-white/30" aria-hidden="true">
              ·
            </span>
            <span className="font-sans text-xs text-white/70 sm:text-sm">
              Google レビュー 200件超
            </span>
            <span className="text-white/30" aria-hidden="true">
              ·
            </span>
            <span className="font-sans text-xs text-white/70 sm:text-sm">最小ロット 4L〜</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
