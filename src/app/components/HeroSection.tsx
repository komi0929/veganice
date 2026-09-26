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
    <section className="bg-bg-white relative w-full overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* モバイル: 縦積み / デスクトップ: 横並び */}
        <div className="flex flex-col lg:min-h-screen lg:flex-row lg:items-center">
          {/* ── テキストエリア ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-6 px-6 pt-28 pb-8 sm:px-10 lg:w-1/2 lg:py-20 lg:pr-12 lg:pl-16"
          >
            <motion.h1
              variants={itemVariants}
              className="text-ink font-serif leading-[1.4] font-bold tracking-wider sm:leading-[1.3]"
            >
              <span className="block text-[1.65rem] leading-[1.5] sm:text-3xl md:text-4xl lg:text-5xl">
                同じテーブルで
                <br className="sm:hidden" />
                「おいしいね」と
                <br />
                言い合えるデザートを。
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-ink-light max-w-xl font-sans text-sm leading-[1.9] sm:text-base"
            >
              福岡・薬院の小さなお店から生まれた、
              <br className="sm:hidden" />
              プラントベース クラフトアイスクリーム。
              <br />
              乳・卵・小麦フリー。米粉と豆乳だけで作りました。
              <br className="sm:hidden" />
              まずは無料のサンプルで、
              <br className="sm:hidden" />
              この味をお確かめください。
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="mt-2 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row"
            >
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-cta hover:bg-cta-hover inline-block w-full cursor-pointer rounded-full px-10 py-4 text-center text-lg font-bold text-white shadow-md transition-colors sm:w-auto"
              >
                無料でサンプルを試す
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={itemVariants}
              className="flex w-full flex-col items-start gap-x-5 gap-y-2 border-t border-gray-200 pt-6 sm:max-w-xl sm:flex-row sm:flex-wrap sm:items-center"
            >
              <span className="text-ink-light font-sans text-sm">★ 薬院のお店 HappyCow 5.0</span>
              <span className="hidden text-gray-300 sm:inline" aria-hidden="true">
                ·
              </span>
              <span className="text-ink-light font-sans text-sm">Google レビュー 200件超</span>
              <span className="hidden text-gray-300 sm:inline" aria-hidden="true">
                ·
              </span>
              <span className="text-ink-light font-sans text-sm">最小ロット 4L〜</span>
            </motion.div>
          </motion.div>

          {/* ── 写真エリア ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative w-full lg:w-1/2"
          >
            {/* モバイル: アスペクト比4:5で大きく見せる / デスクトップ: 画面高さいっぱい */}
            <div className="relative aspect-[4/5] w-full sm:aspect-[3/4] lg:aspect-auto lg:h-screen">
              <Image
                src="/images/hero_flagship.jpg"
                alt="SoyStoriesの看板商品 — ワッフルカップにクラフトアイスを盛り付けた一皿"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* 下部グラデーション（モバイルでの自然な繋ぎ） */}
              <div className="from-bg-white pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t to-transparent lg:hidden" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
