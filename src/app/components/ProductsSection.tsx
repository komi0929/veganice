"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* ── フレーバーデータ ── */
const flavors = [
  {
    name: "濃厚ショコラ",
    story: "カカオの深い香りと濃厚な味わい",
    image: "/images/flavors/chocolate.png",
  },
  {
    name: "濃厚抹茶",
    story: "甘酒配合。奥深い抹茶の余韻",
    image: "/images/flavors/matcha.png",
  },
  {
    name: "ベリーミックス",
    story: "数種のベリーの甘酸っぱさ",
    image: "/images/flavors/berry_mix.png",
  },
  {
    name: "ほうじ茶",
    story: "焙煎の香ばしさとやさしい甘み",
    image: "/images/flavors/houjicha.png",
  },
  {
    name: "白桃",
    story: "果実感をそのまま閉じ込めた爽やかさ",
    image: "/images/flavors/peach.png",
  },
  {
    name: "りんご",
    story: "すっきりとした果実の爽快感",
    image: "/images/flavors/apple.png",
  },
  {
    name: "バニラココナッツ",
    story: "ココナッツミルクのまろやかさ",
    image: "/images/flavors/vanilla_coconut.png",
  },
  {
    name: "ドラゴンフルーツ",
    story: "鮮やかな彩りとさっぱりした甘さ",
    image: "/images/flavors/dragon_fruit.png",
  },
];

/* ── B2B 条件データ ── */
const b2bTerms = [
  {
    label: "食品分類",
    value: "氷菓（乳製品不使用のため）",
  },
  {
    label: "提供形態",
    value: "冷凍（1Lまたは2L）/ 最小4Lから",
  },
  {
    label: "1Lあたり提供杯数",
    value: "#12ディッシャー（80ml）で約12杯 / #18（50ml）で約20杯",
  },
  {
    label: "アレルゲン",
    value:
      "特定原材料7品目（卵・乳・小麦・えび・かに・そば・落花生）不使用。フレーバーにより大豆・アーモンド・もも・りんごを含む",
  },
  {
    label: "添加物",
    value: "乳化安定剤・増粘剤・着色料 すべて不使用",
  },
  {
    label: "保管",
    value: "−18℃以下で冷凍保存（賞味期限の表示義務なし）",
  },
  {
    label: "配送",
    value: "クール冷凍便で全国対応",
  },
  {
    label: "価格",
    value: "お問い合わせください",
  },
];

/* ── アニメーション ── */
const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: "easeOut" as const,
    },
  }),
};

export default function ProductsSection() {
  return (
    <section id="products" className="bg-bg-white relative overflow-hidden py-20 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── ヘッダー ── */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-brand mb-4 font-sans text-sm tracking-[0.2em] uppercase"
          >
            Product Lineup
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-ink font-serif text-3xl leading-snug tracking-wide sm:text-4xl lg:text-[2.5rem]"
          >
            全8フレーバー、乳・卵・小麦 不使用。
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-ink-light mt-6 text-base leading-relaxed sm:text-lg"
          >
            すべて乳・卵・小麦・白砂糖不使用。乳化安定剤・増粘剤・着色料も不使用。
            <br className="hidden sm:block" />
            8種から自由に組み合わせ。和食・洋食・カフェ、どの業態にも合うラインナップです。
          </motion.p>
        </div>

        {/* ── 実商品写真 ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="relative mx-auto mb-16 aspect-[16/10] w-full max-w-4xl overflow-hidden rounded-2xl shadow-md md:aspect-[21/9]"
        >
          <Image
            src="/images/soystories_icecream.1.jpg"
            alt="Soy stories プラントベース クラフトアイスクリーム全フレーバー"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </motion.div>

        {/* ── フレーバーグリッド（画像付きカード） ── */}
        <div className="mx-auto mb-28 max-w-5xl md:mb-36">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {flavors.map((flavor, index) => (
              <motion.div
                key={flavor.name}
                custom={index}
                variants={itemVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="group flex flex-col items-center rounded-2xl border border-stone-200/80 bg-white/90 p-4 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative mb-3 aspect-square w-28 overflow-hidden transition-transform duration-300 group-hover:scale-105 sm:w-32">
                  <Image
                    src={flavor.image}
                    alt={flavor.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 120px, 140px"
                  />
                </div>
                <h3 className="text-ink mb-1 font-serif text-base font-bold sm:text-lg">
                  {flavor.name}
                </h3>
                <p className="text-ink-muted text-xs leading-relaxed sm:text-sm">{flavor.story}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mb-28 text-center md:mb-36">
          <a
            href="#contact-form"
            className="bg-cta hover:bg-cta-hover inline-block rounded-full px-10 py-4 text-base font-bold text-white shadow-sm transition-all hover:shadow-md md:text-lg"
          >
            この味を、あなたのお店で試してみる
          </a>
        </div>

        {/* ── B2Bパッケージング ── */}
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* 画像エリア (バルク写真) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="flex w-full flex-col gap-4 lg:w-1/2"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="/images/bulk_2l.jpg"
                alt="2Lサイズの業務用バルク容器"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-bold text-gray-800 shadow-sm backdrop-blur-sm">
                2L バルク
              </div>
            </div>
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl shadow-sm md:aspect-[4/3]">
              <Image
                src="/images/bulk_1l.jpg"
                alt="1Lサイズの業務用バルク容器"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-bold text-gray-800 shadow-sm backdrop-blur-sm">
                1L バルク
              </div>
            </div>
          </motion.div>

          {/* 情報エリア */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-ink mb-6 font-serif text-2xl tracking-wide sm:text-3xl">
              限られた冷凍庫にも、
              <br />
              すっきり収まる使いやすさ。
            </h3>
            <p className="text-ink-light mb-8 text-base leading-relaxed">
              お店の冷蔵庫のスペースに合わせて、1Lと2Lの2サイズをご用意しています。
              <br />
              最小ロット4L（2L×2個、または1L×4個など）から、フレーバーを自由に組み合わせてご注文いただけます。
            </p>

            <div className="bg-bg rounded-xl border border-gray-100 p-6 sm:p-8">
              <div className="space-y-4">
                {b2bTerms.map((term, index) => (
                  <div
                    key={term.label}
                    className={`flex flex-col gap-1 pb-4 sm:flex-row sm:items-baseline sm:gap-6 ${
                      index < b2bTerms.length - 1 ? "border-b border-gray-200" : ""
                    }`}
                  >
                    <span className="text-brand flex-shrink-0 font-serif text-sm font-medium sm:w-24 sm:text-base">
                      {term.label}
                    </span>
                    <span className="text-ink-light text-sm leading-relaxed sm:text-base">
                      {term.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
