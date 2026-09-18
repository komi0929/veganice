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
              Our Story
            </p>
            <h2 className="text-ink font-serif text-3xl sm:text-4xl">
              ユメミタイな体験を届けるために
            </h2>
          </motion.div>

          {/* ── Chapter 1: 事業承継 ── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-10 md:flex-row md:gap-16"
          >
            <div className="bg-bg relative aspect-[4/3] w-full overflow-hidden rounded-2xl md:w-1/2">
              <Image
                src="/images/dummy_store_front.jpg"
                alt="SoyStoriesの薬院店舗"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex w-full flex-col gap-6 md:w-1/2">
              <h3 className="text-ink font-serif text-2xl leading-[1.6] font-bold sm:text-3xl">
                閉店寸前だったお店を、
                <br className="hidden lg:block" />
                引き継ぐところから始まりました。
              </h3>
              <p className="text-ink-light font-sans text-base leading-[2] sm:text-lg">
                まったく別の仕事をしていたオーナーが、コロナを経て閉業間際だったこの店を事業承継したのは2023年のこと。スイーツづくりは未経験——でも「ここでしか食べられないから」と通い続けてくださるお客様がいると聞いて、この場所を残したいと思いました。
              </p>
            </div>
          </motion.div>

          {/* ── Chapter 2: ワッフルアイスの壁と突破 ── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-10 md:flex-row-reverse md:gap-16"
          >
            <div className="bg-bg relative aspect-[4/3] w-full overflow-hidden rounded-2xl md:w-1/2">
              <Image
                src="/images/jp_wafflesoft.png"
                alt="SoyStoriesのワッフルアイス"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex w-full flex-col gap-6 md:w-1/2">
              <h3 className="text-ink font-serif text-2xl leading-[1.6] font-bold sm:text-3xl">
                米粉との出会い。
              </h3>
              <p className="text-ink-light font-sans text-base leading-[2] sm:text-lg">
                もともとの看板商品だったワッフルにアイスを添えたい。でも、乳脂肪を使わないアイスはどうしても固くなってしまう。何度も壁にぶつかりました。
                <br />
                <br />
                そんな時、パートナー企業が開発した「米粉」を使った新しい製法に出会います。それは以前のものとはまるで別物で、今ではヴィーガンでない方からも「こっちのアイスのほうが好き」と言っていただける看板商品になりました。
              </p>
            </div>
          </motion.div>

          {/* ── Chapter 3: ユメミタイを広げる ── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-10 md:flex-row md:gap-16"
          >
            <div className="bg-bg relative aspect-[4/3] w-full overflow-hidden rounded-2xl md:w-1/2">
              <Image
                src="/images/dummy_manufacturing.jpg"
                alt="SoyStoriesの製造拠点"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex w-full flex-col gap-6 md:w-1/2">
              <h3 className="text-ink font-serif text-2xl leading-[1.6] font-bold sm:text-3xl">
                店舗が大反響。
                <br className="hidden lg:block" />
                だからこそ、製造拠点を作りました。
              </h3>
              <p className="text-ink-light font-sans text-base leading-[2] sm:text-lg">
                薬院の小さな店舗で提供し始めた米粉アイスは、アレルギーをお持ちの方だけでなく、「こっちのほうが美味しい」という多くのお客様から想像以上の反響をいただきました。
                <br />
                <br />
                「このアイスなら、全国の飲食店の『デザートが出せない』という悩みを解決できるかもしれない」。そう考えた私たちは、店舗を何店舗も増やすのではなく、他のお店でも扱っていただけるよう、コンタミネーションのない専用の製造工場を設立することを選びました。
              </p>
            </div>
          </motion.div>

          {/* ── Chapter 4: 拠点 ── */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-col items-center gap-12">
            <div className="bg-bg flex max-w-3xl flex-col items-center gap-8 rounded-2xl p-8 sm:flex-row">
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-sm sm:h-40 sm:w-40">
                <Image
                  src="/images/dummy_founder.jpg"
                  alt="SoyStories代表 小南優作"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              <blockquote className="text-center sm:text-left">
                <p className="text-ink mb-3 font-serif text-lg font-bold">
                  「アレルギーがあっても、そうじゃなくても、みんなで一緒に『おいしいね』と笑い合える空間を作りたい」
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
