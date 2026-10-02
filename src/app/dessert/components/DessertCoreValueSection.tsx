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
  highlight?: string;
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
  highlight,
}: ValueBlockProps) {
  const content = (
    <div className="flex flex-col justify-center">
      {/* ラベル */}
      <motion.p
        variants={fadeUp}
        custom={0}
        className="text-brand mb-3 font-sans text-xs font-semibold tracking-[0.2em] uppercase"
      >
        {label}
      </motion.p>

      {/* 現場の課題 */}
      <motion.div
        variants={fadeUp}
        custom={0.1}
        className="mb-6 rounded-xl border-l-4 border-amber-400 bg-amber-50/60 py-4 pr-5 pl-6"
      >
        <p className="mb-1 text-xs font-bold tracking-wider text-amber-900 uppercase">
          食事系店舗のよくあるお悩み
        </p>
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

      {highlight && (
        <motion.p
          variants={fadeUp}
          custom={0.25}
          className="text-brand-dark mb-4 font-sans text-sm font-semibold sm:text-base"
        >
          {highlight}
        </motion.p>
      )}

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
        <div className="absolute right-3 bottom-3 left-3 rounded-xl bg-black/70 px-4 py-2 text-center font-sans text-xs font-medium text-white shadow-sm backdrop-blur-xs sm:text-sm">
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

export default function DessertCoreValueSection() {
  return (
    <section id="reasons" className="bg-bg-white w-full">
      {/* ── セクション導入見出し ── */}
      <div className="mx-auto max-w-4xl px-6 pt-20 text-center md:pt-28">
        <span className="text-brand mb-3 block font-sans text-xs font-semibold tracking-widest uppercase">
          Why SoyStories for Food Restaurants
        </span>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl md:text-5xl">
          なぜ、ヴィーガンラーメンやバーガーに
          <br />
          「食後のデザート」として最適なのか？
        </h2>
        <p className="text-ink-light mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed md:text-lg">
          しっかりとした旨味や油分を持つ食事の後に求められるのは、
          重たく残らない「キレ」と、デザートとしての「確かな満足感」。
          SoyStoriesはその両方を妥協なく叶えます。
        </p>
      </div>

      {/* ── 要素① [メイン] 後味すっきり＆米粉のなめらかさ ── */}
      <ValueBlock
        isMain
        label="Reason 01 — Post-Meal Refreshing"
        problem="「ラーメンやバーガーの後に重いアイスは食べたくない。でもシャーベットだと水っぽくて満足感がない……」"
        solutionTitle="米粉の独自製法。濃厚なのに後味すっきり、食後の締めに最適。"
        highlight="乳脂肪ゼロだから口に残らず爽快。米粉の自然な保水力でリッチな舌触りを両立。"
        solutionBody="動物性の乳脂肪を一切使用していないため、濃厚なラーメンスープやジューシーなバーガーパティの後でも、油分が舌に残ることなく驚くほど爽やかにリセットされます。さらにSoyStoriesは米粉独自の保水力を活かした特許出願級の独自製法により、シャーベットのようなシャリシャリ感ではなく、まるでジェラートのようにクリーミーで滑らかなテクスチャーを実現。食後の最後の一口まで、お客様を幸せな余韻で満たします。"
        imageSrc="/images/craft_scoop_cup.webp"
        imageAlt="ディッシャーですっとすくえる滑らかな米粉クラフトアイス"
        imageBadge="食後の油分をリフレッシュするキレとなめらかさ"
        imagePosition="right"
      />

      <div className="mx-auto max-w-4xl px-6">
        <hr className="border-gray-200" />
      </div>

      {/* ── 要素② 日本の発酵素材による深いコク ── */}
      <ValueBlock
        label="Reason 02 — Japanese Fermentation"
        problem="「プラントベースのデザートは物足りない。食事の満足感を最後に台無しにしてしまわないか？」"
        solutionTitle="甘酒・みその発酵の力。ノンビーガンのお客様も唸るコクと旨み。"
        highlight="乳製品不使用でも「しっかりデザートを食べた」充実感。"
        solutionBody="ヴィーガンラーメンやヴィーガンバーガーを選ぶお客様の中には、健康や環境への配慮はもちろん、「味の美味しさ」を第一に求めるノンビーガンの方も数多くいらっしゃいます。SoyStoriesは甘酒や味噌といった日本の伝統発酵素材を絶妙にブレンド。乳製品に頼ることなく、深いうまみと自然なコクを生み出しているため、「これ本当に植物性なの！？」と驚かれる深い味わいを食後にお届けできます。"
      />

      <div className="mx-auto max-w-4xl px-6">
        <hr className="border-gray-200" />
      </div>

      {/* ── 要素③ 仕込みゼロ・提供15秒 ── */}
      <ValueBlock
        label="Reason 03 — Zero Prep & Fast Operation"
        problem="「ランチやディナーのピーク時、厨房はラーメンやバーガーの調理で手一杯。デザートの仕込みや盛付に時間をかけられない」"
        solutionTitle="仕込み不要・15秒で提供完了。厨房の負担を一切増やしません。"
        highlight="冷凍庫から出してすぐディッシャーが通る。カチカチにならない米粉の特性。"
        solutionBody="一般的な植物性アイスは冷凍庫でカチカチに固まりやすく、提供時に解凍待ちや力が必要になるのが現場の大きな悩みでした。SoyStoriesは米粉の分子構造により、−18℃の冷凍庫から取り出してすぐにディッシャーですっとすくえます。オーダーが入ったらカップに盛り付けて提供するまでわずか15秒。アルバイトスタッフでもブレずに美しい盛り付けが可能です。"
        imageSrc="/images/factory_kitchen_craft.webp"
        imageAlt="専用工房で丁寧に仕込まれるSoyStoriesのアイス"
        imageBadge="仕込みゼロ・ディッシャー通り抜群のオペレーション"
        imagePosition="left"
      />

      <div className="mx-auto max-w-4xl px-6">
        <hr className="border-gray-200" />
      </div>

      {/* ── 要素④ 専用工房でコンタミなし ── */}
      <ValueBlock
        label="Reason 04 — Dedicated Workshop & Allergy Safe"
        problem="「食事でアレルゲンに気を配っているのに、デザートでコンタミがあったら取り返しがつかない……」"
        solutionTitle="乳・卵・小麦を持ち込まない専用工房。完全アレルゲンフリーの安心感。"
        highlight="厳格な製造管理で、ヴィーガンやアレルギーのお客様へ自信を持って提供。"
        solutionBody="SoyStoriesのアイスファクトリーでは、乳・卵・小麦を一切持ち込みません。製造ラインの共用によるコンタミネーション（意図しない混入）の心配が一切ないため、スープやパティのアレルギー管理にシビアな現場でも、安心してお客様へご案内いただけます。"
      />

      {/* セクション下部 CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pb-20 text-center md:pb-28"
      >
        <motion.p
          variants={fadeUp}
          custom={0}
          className="text-ink-light mx-auto mb-6 max-w-xl font-sans text-sm md:text-base"
        >
          ラーメンやバーガーとの相性を、ぜひ実際の厨房でお確かめください。
        </motion.p>
        <motion.a
          variants={fadeUp}
          custom={0.1}
          href="#contact-form"
          className="bg-cta hover:bg-cta-hover inline-block rounded-full px-10 py-4 text-base font-bold text-white shadow-sm transition-all hover:shadow-md md:text-lg"
        >
          食後デザート用サンプルを申し込む（無料）
        </motion.a>
      </motion.div>
    </section>
  );
}
