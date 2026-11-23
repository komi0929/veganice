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
        label="01 — Velvety Rice-Flour Craft"
        problem="植物性のアイスは氷っぽくてシャリシャリする。営業中に冷凍庫を開け閉めするうちに、どんどん食感が痩せてしまう。——多くの料理人が導入をためらってきた最大の理由です。"
        solutionTitle="米粉をじっくり炊き上げる独自製法。スプーンに吸い付く濃密な口どけが続く。"
        solutionBody="私たちが目指したのは、「植物性にしては美味しい」ではなく、本場のクラフトジェラートのようにみっちり詰まった密度と、体温でとろりとほどける贅沢な舌触りです。国産米粉を豆乳や甘酒、果汁と一緒に火にかけ、なめらかなベースに炊き上げてから冷やし固めることで、氷の粒が立たないねっとり濃厚な口どけを実現しました。業務用の冷凍庫で出し入れを繰り返しても食感が崩れず、最後の一杯まで美しい一皿をお出しいただけます。"
        imageSrc="/images/craft_scoop_cup.webp"
        imageAlt="米粉独自製法によるなめらかなクラフトアイスをカップへ盛り付ける風景"
        imageBadge="スプーンに吸い付くような、ねっとり濃密な口どけ"
        imagePosition="right"
      />

      <div className="mx-auto max-w-4xl px-6">
        <hr className="border-gray-200" />
      </div>

      {/* ── 要素② 日本の発酵素材 ── */}
      <ValueBlock
        label="02 — Richness & Clean Finish"
        problem="乳製品を抜くとあっさりしすぎて頼りない。かといって重たいクリームのデザートは、食後にはくどすぎる。"
        solutionTitle="食べている最中は生チョコや濃茶のように濃厚。なのに、あと口は驚くほど軽やか。"
        solutionBody="クーベルチュールチョコレートやココナッツクリームのリッチな口どけに、北海道産てんさい糖・きび砂糖のやさしい甘み、そして米麹の甘酒と少量の白みそを忍ばせました。発酵由来の旨みとほのかな塩気が、乳製品なしでも物足りなさのない奥行きのあるコクを生み出します。それでいて舌の上に重たい脂肪の膜を残さないため、茶葉や果実の鮮やかな香りがダイレクトに立ち上がり、コースや食事のあとでもすっと消える心地よい余韻が続きます。"
      />

      <div className="mx-auto max-w-4xl px-6">
        <hr className="border-gray-200" />
      </div>

      {/* ── 要素③ 乳・卵・小麦フリーの専用工房 ── */}
      <ValueBlock
        label="03 — Dedicated Workshop"
        problem="本当に安心して使える？ 製造ラインで乳や小麦を扱っていないか、正直不安。"
        solutionTitle="乳・卵・小麦を一切持ち込まない専用工房で製造。"
        solutionBody="私たちの専用アイス工房では、乳製品・卵・小麦を一切持ち込みません（※ナッツ類を使用した製品は製造しています）。乳・卵・小麦の意図しない混入リスクを抑えた専用環境のため、乳・卵・小麦アレルギーをお持ちのお客様やヴィーガンの方にも、自信を持ってお出しいただけます。"
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
