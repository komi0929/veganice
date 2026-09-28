"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
  imageSrc?: string;
  imageAlt?: string;
  imageBadge?: string;
  imagePosition?: "left" | "right";
}

function ValueBlock({
  label,
  problem,
  solutionTitle,
  solutionBody,
  isMain = false,
  imageSrc,
  imageAlt,
  imageBadge,
  imagePosition = "right",
}: ValueBlockProps) {
  const content = (
    <div className="flex flex-col justify-center">
      {/* ラベル */}
      <motion.p
        variants={fadeUp}
        custom={0}
        className="text-brand mb-4 font-sans text-xs font-semibold tracking-[0.2em] uppercase"
      >
        {label}
      </motion.p>

      {/* 問題提起 */}
      <motion.div
        variants={fadeUp}
        custom={0.1}
        className="mb-8 rounded-xl border-l-4 border-gray-300 bg-gray-50 py-4 pr-5 pl-6"
      >
        <p className="text-ink font-serif text-base leading-relaxed md:text-lg">{problem}</p>
      </motion.div>

      {/* 解決策 */}
      <motion.h3
        variants={fadeUp}
        custom={0.2}
        className={`text-ink mb-4 font-serif leading-relaxed font-bold ${
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
  );

  const imageBlock = imageSrc ? (
    <motion.div
      variants={fadeUp}
      custom={0.2}
      className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-gray-100 bg-stone-100 shadow-md"
    >
      <Image
        src={imageSrc}
        alt={imageAlt || ""}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
      />
      {imageBadge && (
        <div className="absolute right-3 bottom-3 left-3 rounded-xl bg-black/65 px-4 py-2 text-center font-sans text-xs font-medium text-white shadow-sm backdrop-blur-xs sm:text-sm">
          {imageBadge}
        </div>
      )}
    </motion.div>
  ) : null;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`${isMain ? "py-20 md:py-28" : "py-16 md:py-24"}`}
    >
      <div className={`mx-auto px-6 lg:px-8 ${imageSrc ? "max-w-6xl" : "max-w-3xl"}`}>
        {imageSrc ? (
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14">
            <div
              className={`md:col-span-7 ${imagePosition === "left" ? "md:order-2" : "md:order-1"}`}
            >
              {content}
            </div>
            <div
              className={`md:col-span-5 ${imagePosition === "left" ? "md:order-1" : "md:order-2"}`}
            >
              {imageBlock}
            </div>
          </div>
        ) : (
          content
        )}
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
        solutionTitle="米粉をつかった独自製法で、驚くほど滑らかな仕上がり。"
        solutionBody="一般的な植物性アイスは、乳脂肪分がないため凍結時にカチカチに固まりやすく、大容量になるほど扱いが難しくなりがちです。SoyStoriesは、米粉が持つ自然な保水力と独自製法により、驚くほどクリーミーで滑らかな舌触りを実現。2Lなどの業務用サイズであってもカチカチに固くならず、ディッシャーでスムーズにすくえるため、忙しい厨房のオペレーションに負担をかけることなく、常に最高の状態で提供いただけます。"
        imageSrc="/images/craft_scoop_cup.webp"
        imageAlt="米粉独自製法によるなめらかなクラフトアイスをカップへ盛り付ける風景"
        imageBadge="ディッシャー通り抜群・驚くほど滑らかな質感"
        imagePosition="right"
      />

      <div className="mx-auto max-w-4xl px-6">
        <hr className="border-gray-200" />
      </div>

      {/* ── 要素② 日本の発酵素材 ── */}
      <ValueBlock
        label="02 — Japanese Fermentation"
        problem="ヴィーガンアイスは味気ない。コクがなく、どれも似たような味になってしまう。"
        solutionTitle="甘酒、みそ。日本の発酵素材が、うまみとコクを生む。"
        solutionBody="ドーナツやワッフルなど、さまざまなヴィーガン＆グルテンフリースイーツをつくる過程で出会ったのが、甘酒やみそといった日本の発酵素材でした。乳製品を使わなくても、発酵がもたらす深いうまみと自然な甘みが、クラフトアイスに奥行きのあるコクを与えてくれます。「これ、本当にヴィーガンなの？」という驚きの声は、この発酵の力から生まれています。"
      />

      <div className="mx-auto max-w-4xl px-6">
        <hr className="border-gray-200" />
      </div>

      {/* ── 要素③ コンタミなしの専用工房 ── */}
      <ValueBlock
        label="03 — Dedicated Workshop"
        problem="本当に安心して使える？ 製造ラインで乳や小麦を扱っていないか、正直不安。"
        solutionTitle="工房で作るのは、ヴィーガン＆グルテンフリーのアイスだけ。"
        solutionBody="私たちの工房では、乳製品・卵・小麦を一切持ち込みません。製造しているのはヴィーガン＆グルテンフリーのクラフトアイスのみ。コンタミネーション（意図しない混入）の心配がないから、アレルギーをお持ちのお客様にも、自信を持ってお出しいただけます。"
        imageSrc="/images/factory_kitchen_craft.webp"
        imageAlt="乳・卵・小麦を持ち込まない専用アイスファクトリーでの仕込み風景"
        imageBadge="乳・卵・小麦フリーの専用工房で製造"
        imagePosition="left"
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
