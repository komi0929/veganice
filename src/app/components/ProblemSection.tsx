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
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: "easeOut" as const,
    },
  },
};

export default function ProblemSection() {
  return (
    <section
      id="story"
      className="text-ink relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-36 lg:px-12"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-24 md:gap-36"
        >
          {/* ── Section label ── */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-ink-muted mb-4 font-sans text-xs tracking-[0.25em] uppercase">
              Why We Manufacture
            </p>
            <h2 className="text-ink font-serif text-3xl sm:text-4xl">
              直営店の反響から、製造工場の設立へ
            </h2>
          </motion.div>

          {/* ── Chapter 1: 直営店が大反響 ── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-10 md:flex-row md:gap-16"
          >
            <div className="bg-bg relative aspect-[4/3] w-full overflow-hidden rounded-2xl md:w-1/2">
              <Image
                src="/images/craft_moment.jpg"
                alt="SoyStoriesの工房・仕込み風景"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex w-full flex-col gap-6 md:w-1/2">
              <h3 className="text-ink font-serif text-2xl leading-[1.6] font-bold sm:text-3xl">
                直営店が大反響。
                <br className="hidden lg:block" />
                だからこそ、製造拠点を作りました。
              </h3>
              <p className="text-ink-light font-sans text-base leading-[2] sm:text-lg">
                薬院の直営店で提供し始めた米粉アイスは、アレルギーをお持ちの方だけでなく、「こっちのほうが美味しい」という多くのお客様から想像以上の反響をいただきました。
                <br />
                <br />
                「このアイスなら、全国の飲食店の『デザートが出せない』という悩みを解決できるかもしれない」。そう考えた私たちは、店舗を何店舗も増やすのではなく、他のお店でも扱っていただけるよう、コンタミネーションのない専用の製造工場を設立することを選びました。
              </p>
            </div>
          </motion.div>

          {/* ── Chapter 2: 拠点 ── */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-col items-center gap-12">
            <div className="bg-bg flex max-w-3xl flex-col items-center gap-8 rounded-2xl p-8 sm:flex-row">
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-sm sm:h-40 sm:w-40">
                <Image
                  src="/images/craft_moment.jpg"
                  alt="SoyStoriesの現場風景"
                  fill
                  className="object-cover object-bottom"
                  sizes="160px"
                />
              </div>
              <blockquote className="text-center sm:text-left">
                <p className="text-ink mb-3 font-serif text-lg leading-relaxed font-bold">
                  「アレルギーがあっても、そうじゃなくても、みんなで一緒に『おいしいね』と笑い合える——そんな瞬間を、あなたのお店でも作ってほしい」
                </p>
                <footer className="text-ink-light font-sans text-sm">— 代表 小南 優作</footer>
              </blockquote>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
