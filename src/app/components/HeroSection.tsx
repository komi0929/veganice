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
    <section className="bg-ink relative flex min-h-screen w-full items-center overflow-hidden">
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/soystories_icecream02358icecream.jpg"
            alt="Soy stories プラントベース・クラフトジェラート"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxQf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//9k="
          />
        </motion.div>
        {/* Gradient Overlay for text readability (left side darker) */}
        <div className="from-ink/90 via-ink/60 absolute inset-0 bg-gradient-to-r to-transparent" />
        <div className="from-ink/40 absolute inset-0 bg-gradient-to-t to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto flex w-full flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex max-w-2xl flex-1 flex-col items-start gap-8 text-left"
        >
          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="font-serif leading-[1.4] font-bold tracking-wider text-white sm:leading-[1.3]"
          >
            <span className="block text-2xl text-gray-200 sm:text-3xl md:text-4xl">
              飲食店のための、プラントベース・クラフトジェラート。
            </span>
            <span className="mt-2 block text-3xl sm:text-4xl md:text-5xl lg:mt-4 lg:text-6xl">
              自社店舗で実証済みの味を、
              <br />
              あなたのお店に。
            </span>
          </motion.h1>

          {/* Sub copy */}
          <motion.p
            variants={itemVariants}
            className="max-w-xl font-sans text-base leading-relaxed text-gray-200 sm:text-lg md:text-xl"
          >
            乳・卵・小麦フリー。仕込みゼロ。4Lの小ロットから。
            <br />
            HappyCow 5.0・Google レビュー200件超——直営店で圧倒的な評価を得ている
            <br className="hidden sm:block" />
            クラフトジェラートを、あなたのメニューに。
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-4 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row"
          >
            <motion.a
              href="#contact-form"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-cta hover:bg-cta-hover inline-block w-full cursor-pointer rounded-full px-10 py-4 text-center text-lg font-bold text-white shadow-md transition-colors sm:w-auto"
            >
              無料サンプルを申し込む
            </motion.a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={itemVariants}
            className="mt-4 flex w-full flex-col items-start gap-x-5 gap-y-2 border-t border-gray-100/30 pt-8 sm:max-w-xl sm:flex-row sm:flex-wrap sm:items-center"
          >
            <span className="font-sans text-sm text-gray-300">★ 直営店 HappyCow 5.0</span>
            <span className="hidden text-gray-500 sm:inline" aria-hidden="true">
              ·
            </span>
            <span className="font-sans text-sm text-gray-300">Google レビュー 200件超</span>
            <span className="hidden text-gray-500 sm:inline" aria-hidden="true">
              ·
            </span>
            <span className="font-sans text-sm text-gray-300">仕込み不要・すくうだけ</span>
            <span className="hidden text-gray-500 sm:inline" aria-hidden="true">
              ·
            </span>
            <span className="font-sans text-sm text-gray-300">最小ロット 4L〜</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-sans text-[10px] tracking-[0.2em] text-white/50 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-[1px] bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
