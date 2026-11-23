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

      {/* 見出し・本文 */}
      <motion.h3
        variants={fadeUp}
        custom={0.1}
        className={`text-ink mb-4 font-serif leading-relaxed font-bold ${
          isMain ? "text-2xl sm:text-3xl md:text-4xl" : "text-xl sm:text-2xl md:text-3xl"
        }`}
      >
        {solutionTitle}
      </motion.h3>
      <motion.p
        variants={fadeUp}
        custom={0.2}
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
        label="01 — Velvety Rice-Flour Craft"
        solutionTitle="米粉をじっくり炊き上げる独自製法。スプーンに吸い付く濃密な口どけ。"
        solutionBody="国産米粉を豆乳や甘酒、果汁と一緒にじっくり火にかけ、とろりとしたベースに炊き上げてから冷やし固めることで、体温でなめらかにほどける濃密な口どけに仕立てました。業務用の冷凍庫で出し入れを繰り返しても氷に戻らず、最後の一杯まで豊かな舌触りが続きます。"
        imageSrc="/images/craft_scoop_cup.webp"
        imageAlt="米粉独自製法によるなめらかなクラフトアイスをカップへ盛り付ける風景"
        imageBadge="スプーンに吸い付くような、濃密でなめらかな口どけ"
        imagePosition="right"
      />

      <div className="mx-auto max-w-4xl px-6">
        <hr className="border-gray-200" />
      </div>

      {/* ── 要素② 日本の発酵素材 ── */}
      <ValueBlock
        label="02 — Richness & Clean Finish"
        solutionTitle="生チョコや濃茶のように濃厚なのに、あと口は驚くほど軽やか。"
        solutionBody="クーベルチュールチョコレートやココナッツクリームのリッチな口どけに、北海道産てんさい糖・きび砂糖のやさしい甘み、そして米麹の甘酒と少量の白みそを重ねました。発酵由来の旨みとほのかな塩気が奥深いコクを生み出しつつ、食後には茶葉や果実の鮮やかな香りだけを残してすっと消える、心地よい余韻を楽しめます。"
      />

      <div className="mx-auto max-w-4xl px-6">
        <hr className="border-gray-200" />
      </div>

      {/* ── 要素③ 乳・卵・小麦フリーの専用工房 ── */}
      <ValueBlock
        label="03 — Dedicated Workshop"
        solutionTitle="乳・卵・小麦を一切持ち込まない専用工房で製造。"
        solutionBody="私たちの専用アイス工房では、乳製品・卵・小麦を一切持ち込みません（※ナッツ類を使用した製品は製造しています）。乳・卵・小麦の意図しない混入リスクを抑えた専用環境のため、乳・卵・小麦アレルギーをお持ちのお客様やヴィーガンの方にも、安心してお出しいただけます。"
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
