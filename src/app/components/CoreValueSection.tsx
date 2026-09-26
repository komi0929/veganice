"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  }),
};

interface ValueBlockProps {
  label: string;
  problem: string;
  solutionTitle: string;
  solutionBody: string;
  isMain?: boolean;
}

function ValueBlock({
  label,
  problem,
  solutionTitle,
  solutionBody,
  isMain = false,
}: ValueBlockProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`${isMain ? "py-20 md:py-28" : "py-16 md:py-24"}`}
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* ラベル */}
        <motion.p
          variants={fadeUp}
          custom={0}
          className="text-brand mb-6 font-sans text-xs font-semibold tracking-[0.2em] uppercase"
        >
          {label}
        </motion.p>

        {/* 問題提起 */}
        <motion.div
          variants={fadeUp}
          custom={0.1}
          className="mb-10 rounded-xl border-l-4 border-gray-300 bg-gray-50 py-5 pr-5 pl-6"
        >
          <p className="text-ink font-serif text-lg leading-relaxed md:text-xl">{problem}</p>
        </motion.div>

        {/* 解決策 */}
        <motion.h3
          variants={fadeUp}
          custom={0.2}
          className={`text-ink mb-5 font-serif leading-relaxed font-bold ${
            isMain ? "text-2xl sm:text-3xl md:text-4xl" : "text-xl sm:text-2xl md:text-3xl"
          }`}
        >
          {solutionTitle}
        </motion.h3>
        <motion.p
          variants={fadeUp}
          custom={0.3}
          className="text-ink-light font-sans text-base leading-[1.9] md:text-lg"
        >
          {solutionBody}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function CoreValueSection() {
  return (
    <section id="benefits" className="bg-bg-white w-full">
      {/* ── 要素① [メイン] 米粉の独自製法 ── */}
      <ValueBlock
        isMain
        label="01 — Rice Flour Method"
        problem="「無添加」「ヴィーガン」のアイスは、美味しくない。固くて使いづらい。——飲食店の現場では、そんな声が少なくありません。"
        solutionTitle="米粉でつくる、増粘剤のいらないアイス。"
        solutionBody="一般的なヴィーガンアイスは、乳製品の代わりに増粘剤や安定剤で食感を補います。私たちは、米粉が持つ自然なとろみに着目しました。独自の米粉製法により、増粘剤を使わなくても、なめらかで溶けにくく、冷凍庫から出してすぐにすくえるアイスを実現。飲食店の忙しいオペレーションの中でも、ストレスなくお使いいただけます。"
      />

      <div className="mx-auto max-w-3xl px-6">
        <hr className="border-gray-200" />
      </div>

      {/* ── 要素② 日本の発酵素材 ── */}
      <ValueBlock
        label="02 — Japanese Fermentation"
        problem="ヴィーガンアイスは味気ない。コクがなく、どれも似たような味になってしまう。"
        solutionTitle="甘酒、みそ。日本の発酵素材が、うまみとコクを生む。"
        solutionBody="ドーナツやワッフルなど、さまざまなヴィーガン＆グルテンフリースイーツをつくる過程で出会ったのが、甘酒やみそといった日本の発酵素材でした。乳製品を使わなくても、発酵がもたらす深いうまみと自然な甘みが、クラフトアイスに奥行きのあるコクを与えてくれます。「これ、本当にヴィーガンなの？」という驚きの声は、この発酵の力から生まれています。"
      />

      <div className="mx-auto max-w-3xl px-6">
        <hr className="border-gray-200" />
      </div>

      {/* ── 要素③ コンタミなしの専用工房 ── */}
      <ValueBlock
        label="03 — Dedicated Workshop"
        problem="本当に安心して使える？ 製造ラインで乳や小麦を扱っていないか、正直不安。"
        solutionTitle="工房で作るのは、ヴィーガン＆グルテンフリーのアイスだけ。"
        solutionBody="私たちの工房では、乳製品・卵・小麦を一切持ち込みません。製造しているのはヴィーガン＆グルテンフリーのクラフトアイスのみ。コンタミネーション（意図しない混入）の心配がないから、アレルギーをお持ちのお客様にも、自信を持ってお出しいただけます。"
      />

      {/* CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pb-20 text-center md:pb-28"
      >
        <motion.a
          variants={fadeUp}
          custom={0}
          href="#contact-form"
          className="bg-cta hover:bg-cta-hover inline-block rounded-full px-10 py-4 text-base font-bold text-white shadow-sm transition-all hover:shadow-md md:text-lg"
        >
          まずはサンプルで、お試しください
        </motion.a>
      </motion.div>
    </section>
  );
}
