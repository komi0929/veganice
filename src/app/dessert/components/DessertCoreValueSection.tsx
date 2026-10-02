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
          飲食店様のよくあるお悩み
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
          Why SoyStories for Your Dessert Menu
        </span>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl md:text-5xl">
          海外のお客様から店舗で絶賛されるアイスを、
          <br />
          なぜ貴店の「食後デザート」に選ぶべきなのか？
        </h2>
        <p className="text-ink-light mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed md:text-lg">
          満足感のある食事メニューを提供する飲食店様へ。
          仕込みの手間を一切増やさず、客単価UPと外国人・健康志向のお客様の満足度を同時に獲得できる理由があります。
        </p>
      </div>

      {/* ── 要素① [メイン] 乳脂肪ゼロで重たくない＆米粉のなめらかさ ── */}
      <ValueBlock
        isMain
        label="Reason 01 — Light Finish & Gelato Texture"
        problem="「食後に重たいアイスは敬遠される。かといって市販の氷菓シャーベットだと水っぽく、デザートとしての満足感が薄い……」"
        solutionTitle="乳脂肪ゼロだから食後も重たくない。ジェラートのような極上のなめらかさ。"
        highlight="乳脂肪のもたつきを一切残さず、米粉の自然な保水力でリッチな食後感を演出。"
        solutionBody="動物性の乳脂肪を使用していないため、しっかりした食事の後でも油分が口に残らず、驚くほど軽やかに召し上がっていただけます。さらにSoyStoriesは米粉が持つ自然な保水力を活かした独自製法により、氷菓のようなシャリシャリ感ではなく、まるでジェラートのようにクリーミーで滑らかな舌触りを実現。海外のお客様からも『ジェラートそっくりで驚くほど滑らか』と絶賛される極上の口当たりで、食事の余韻を美しく締めくくります。"
        imageSrc="/images/craft_scoop_cup.webp"
        imageAlt="ディッシャーですっとすくえる滑らかな米粉クラフトアイス"
        imageBadge="食後でも重たく残らない、ジェラートのようになめらかな質感"
        imagePosition="right"
      />

      <div className="mx-auto max-w-4xl px-6">
        <hr className="border-gray-200" />
      </div>

      {/* ── 要素② 日本の発酵素材による自然な深み ── */}
      <ValueBlock
        label="Reason 02 — Japanese Fermentation & Universal Appeal"
        problem="「プラントベースのアイスは味気ないのでは？ ノンビーガンのお客様にも満足していただけるか不安……」"
        solutionTitle="甘酒・みその発酵の力。ノンビーガンのお客様も絶賛する美味しさ。"
        highlight="実際のGoogleクチコミでも『ビーガンでない方にも絶対おすすめ』と多数の高評価。"
        solutionBody="ヴィーガンやプラントベースのメニューを注文されるお客様の中には、健康や環境に配慮する方はもちろん、シンプルに『美味しい食事』を求めるノンビーガンの方も多くいらっしゃいます。SoyStoriesは甘酒や味噌といった日本の伝統発酵素材を隠し味に用いることで、乳製品に頼ることなく自然な深みと豊かな風味を引き出しています。実店舗のGoogleクチコミでも『ビーガン食を実践していない方にもぜひおすすめ』と絶賛される味わいです。"
      />

      <div className="mx-auto max-w-4xl px-6">
        <hr className="border-gray-200" />
      </div>

      {/* ── 要素③ 仕込みゼロ・提供15秒 ── */}
      <ValueBlock
        label="Reason 03 — Zero Prep & Fast Operation"
        problem="「ピーク時、厨房は調理で手一杯。デザートの仕込みや盛り付けに時間や人手を割けない」"
        solutionTitle="仕込み不要・15秒で提供完了。厨房の負担を一切増やしません。"
        highlight="冷凍庫から出してすぐディッシャーが通る。カチカチにならない米粉の特性。"
        solutionBody="一般的なアイスは冷凍庫でカチカチに固まりやすく、提供時に解凍待ちや力が必要になるのが現場の大きな悩みでした。SoyStoriesは米粉の独自製法により、−18℃の冷凍庫から取り出してすぐにディッシャーですっとすくえます。オーダーが入ったらカップに盛り付けて提供するまでわずか15秒。アルバイトスタッフでもブレずに美しい盛り付けが可能です。"
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
        solutionBody="SoyStoriesのアイスファクトリーでは、乳・卵・小麦を一切持ち込みません。製造ラインの共用によるコンタミネーション（意図しない混入）の心配が一切ないため、アレルギー管理にシビアな現場でも、安心してお客様へご案内いただけます。"
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
          満足感のある食事との相性を、ぜひ実際の厨房でお確かめください。
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
