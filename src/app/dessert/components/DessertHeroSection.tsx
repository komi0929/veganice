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

export default function DessertHeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-end overflow-hidden sm:items-center">
      {/* 背景写真 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_flagship.jpg"
          alt="SoyStoriesの看板商品 — ワッフルカップに盛り付けた食後のプラントベース クラフトアイス"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* テキスト可読性のためのグラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 sm:from-black/80 sm:via-black/50 sm:to-black/20" />
      </div>

      {/* テキストコンテンツ */}
      <div className="relative z-10 w-full px-6 pt-32 pb-14 sm:px-10 sm:pb-20 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-7xl flex-col items-start gap-6"
        >
          {/* カテゴリバッジ */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 font-sans text-xs font-semibold tracking-wider text-white backdrop-blur-md sm:text-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              ヴィーガンラーメン・バーガー・食事系店舗様向け
            </span>
          </motion.div>

          {/* メイン見出し */}
          <motion.h1
            variants={itemVariants}
            className="font-serif font-bold tracking-wide text-white"
          >
            <span className="block text-2xl leading-[1.3] sm:text-4xl md:text-5xl lg:text-6xl">
              ヴィーガンラーメンや
              <br className="sm:hidden" />
              バーガーの後に。
            </span>
            <span className="mt-3 block text-3xl leading-[1.2] font-black text-[#52b788] drop-shadow-md sm:text-5xl md:text-6xl lg:text-7xl">
              食後のデザートに最適です。
            </span>
          </motion.h1>

          {/* 説明文 */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl font-sans text-sm leading-[2] text-white/95 drop-shadow-sm sm:text-base md:text-lg"
          >
            濃厚なスープやジューシーなパティを楽しんだお客様に、
            <br className="hidden sm:block" />
            すっきりと、でも確かな満足感を残す締めくくりのひと皿を。
            <br />
            乳・卵・小麦不使用。仕込みゼロ・ディッシャーですくうだけ。
            <br className="hidden sm:block" />
            オペレーション負荷なく、客単価アップと顧客満足度を同時に叶えます。
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-2 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center"
          >
            <motion.a
              href="#contact-form"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-cta hover:bg-cta-hover inline-block cursor-pointer rounded-full px-10 py-4 text-center text-base font-bold text-white shadow-lg transition-colors sm:text-lg"
            >
              無料でサンプルを試す（食後デザート用）
            </motion.a>
            <a
              href="#reasons"
              className="inline-block rounded-full border border-white/30 bg-white/10 px-6 py-4 text-center text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:text-base"
            >
              選ばれる理由を見る ↓
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-x-5 gap-y-1.5 border-t border-white/20 pt-5 text-white/80"
          >
            <span className="font-sans text-xs sm:text-sm">★ HappyCow 5.0</span>
            <span className="text-white/30" aria-hidden="true">
              ·
            </span>
            <span className="font-sans text-xs sm:text-sm">Google ★4.7（200件超）</span>
            <span className="text-white/30" aria-hidden="true">
              ·
            </span>
            <span className="font-sans text-xs sm:text-sm">最小4L〜（省スペース保管）</span>
            <span className="text-white/30" aria-hidden="true">
              ·
            </span>
            <span className="font-sans text-xs font-semibold text-[#a7f3d0] sm:text-sm">
              仕込み不要・即提供
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
