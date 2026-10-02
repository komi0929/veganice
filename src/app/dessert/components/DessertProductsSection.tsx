"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* ── フレーバーデータ ── */
const flavors = [
  {
    name: "なめらかショコラ",
    category: "濃厚リッチ系",
    story: "カカオの深い香りと、とろける余韻。バーガーの後に大人気。",
    image: "/images/flavors/chocolate.png",
    recommendedPairing: "ヴィーガンバーガーやスパイシー料理の後に",
  },
  {
    name: "甘酒抹茶",
    category: "和モダン系",
    story: "甘酒が引き立てる奥深い抹茶の渋みとうまみ。",
    image: "/images/flavors/matcha.png",
    recommendedPairing: "醤油・味噌ラーメンの締めくくりに",
  },
  {
    name: "ベリーミックス",
    category: "すっきりリフレッシュ系",
    story: "数種のベリーの甘酸っぱさが口の油分を爽快にリセット。",
    image: "/images/flavors/berry_mix.png",
    recommendedPairing: "濃厚とんこつ風や担々麺の後に",
  },
  {
    name: "ほうじ茶",
    category: "和モダン系",
    story: "焙煎の香ばしさとやさしい甘み。食後のお茶代わりに。",
    image: "/images/flavors/houjicha.png",
    recommendedPairing: "ラーメンや定食スタイルの食後に",
  },
  {
    name: "白桃",
    category: "すっきりリフレッシュ系",
    story: "みずみずしい果実感をそのまま閉じ込めた上品な爽やかさ。",
    image: "/images/flavors/peach.png",
    recommendedPairing: "すべての食事メニューのお口直しに",
  },
  {
    name: "りんご",
    category: "すっきりリフレッシュ系",
    story: "すっきりとした果実の爽快感。後味のキレが抜群。",
    image: "/images/flavors/apple.png",
    recommendedPairing: "バーガーやフライドポテトの後に",
  },
  {
    name: "バニラココナッツ",
    category: "濃厚リッチ系",
    story: "ココナッツミルクのまろやかさと芳醇なバニラの香り。",
    image: "/images/flavors/vanilla_coconut.png",
    recommendedPairing: "エスニック・カレー系の食後に",
  },
  {
    name: "ドラゴンフルーツ",
    category: "すっきりリフレッシュ系",
    story: "鮮やかなルビー色とさっぱりした甘さ。写真映えも抜群。",
    image: "/images/flavors/dragon_fruit.png",
    recommendedPairing: "SNS映えを狙うカフェ・ダイナーに",
  },
];

/* ── B2B 条件データ ── */
const b2bTerms = [
  {
    label: "食品分類",
    value: "氷菓（乳製品・乳脂肪分不使用のため）",
  },
  {
    label: "提供形態",
    value: "冷凍（1Lまたは2Lバルク）/ 最小ロット4Lから",
  },
  {
    label: "1Lあたり提供杯数",
    value: "#12ディッシャー（約80ml）で約12杯 / #18（約50ml・食後ミニデザート向け）で約20杯",
  },
  {
    label: "アレルゲン",
    value:
      "特定原材料8品目（卵・乳・小麦・えび・かに・そば・落花生・くるみ）完全不使用。※一部大豆・アーモンド・もも・りんごを含む",
  },
  {
    label: "添加物",
    value: "乳化安定剤・増粘剤・着色料 すべて不使用",
  },
  {
    label: "保管",
    value: "−18℃以下で冷凍保存（賞味期限の表示義務なし・廃棄ロスゼロ）",
  },
  {
    label: "配送",
    value: "ヤマト運輸 クール冷凍便で全国配送対応",
  },
  {
    label: "価格",
    value: "卸売価格はお気軽にお問い合わせください（サンプル無料）",
  },
];

const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.07,
      ease: "easeOut" as const,
    },
  }),
};

export default function DessertProductsSection() {
  return (
    <section id="products" className="bg-bg relative overflow-hidden py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── ヘッダー ── */}
        <div className="mx-auto mb-14 max-w-3xl md:mb-18 md:text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-brand mb-3 font-sans text-sm font-bold tracking-[0.2em] uppercase"
          >
            Product Lineup for After-Meal
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-ink font-serif text-2xl leading-snug font-bold tracking-wide sm:text-3xl lg:text-[2.5rem]"
          >
            食後の満足感を高める、全8フレーバー。
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-ink-light mt-5 text-base leading-relaxed sm:text-lg"
          >
            すべて乳・卵・小麦・白砂糖不使用。添加物（乳化安定剤・増粘剤・着色料）不使用。
            <br className="hidden sm:block" />
            ラーメンやバーガーの油分をすっきりさせる「果実系」から、深い余韻を残す「濃厚系」まで、
            貴店のメニューに合わせて最小4Lから自由にお選びいただけます。
          </motion.p>
        </div>

        {/* ── フレーバーグリッド ── */}
        <div className="mx-auto mb-24 max-w-5xl md:mb-32">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {flavors.map((flavor, index) => (
              <motion.div
                key={flavor.name}
                custom={index}
                variants={itemVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="group flex flex-col justify-between rounded-2xl border border-stone-200/80 bg-white p-4 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <div className="mb-2">
                    <span className="inline-block rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                      {flavor.category}
                    </span>
                  </div>
                  <div className="relative mx-auto mb-3 aspect-square w-24 overflow-hidden transition-transform duration-300 group-hover:scale-105 sm:w-28">
                    <Image
                      src={flavor.image}
                      alt={flavor.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 110px, 130px"
                    />
                  </div>
                  <h3 className="text-ink mb-1 font-serif text-sm font-bold sm:text-base">
                    {flavor.name}
                  </h3>
                  <p className="text-ink-muted line-clamp-2 text-xs leading-relaxed">
                    {flavor.story}
                  </p>
                </div>
                <div className="text-brand-dark mt-3 border-t border-gray-100 pt-2 text-[11px] font-medium">
                  💡 {flavor.recommendedPairing}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── B2Bパッケージング・仕様 ── */}
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
                2L バルク容器
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
                1L バルク容器
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
            <div className="mb-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
              狭小スペースにも対応
            </div>
            <h3 className="text-ink mb-5 font-serif text-2xl font-bold tracking-wide sm:text-3xl">
              ラーメン・バーガー店の厨房に合わせて、
              <br />
              最小4Lから省スペース納品。
            </h3>
            <p className="text-ink-light mb-6 text-sm leading-relaxed sm:text-base">
              お店の冷凍庫の隙間スペースに合わせて、1Lまたは2Lのコンパクト容器をお選びいただけます。
              <br />
              最小4L（例: 2L×2個、1L×4個）から、フレーバーの自由な組み合わせが可能です。
            </p>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xs sm:p-8">
              <div className="space-y-4">
                {b2bTerms.map((term, index) => (
                  <div
                    key={term.label}
                    className={`flex flex-col gap-1 pb-3 sm:flex-row sm:items-baseline sm:gap-6 ${
                      index < b2bTerms.length - 1 ? "border-b border-gray-100" : ""
                    }`}
                  >
                    <span className="text-brand flex-shrink-0 font-serif text-xs font-bold sm:w-28 sm:text-sm">
                      {term.label}
                    </span>
                    <span className="text-ink-light text-xs leading-relaxed sm:text-sm">
                      {term.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-16 text-center">
          <a
            href="#contact-form"
            className="bg-cta hover:bg-cta-hover inline-block rounded-full px-10 py-4 text-base font-bold text-white shadow-sm transition-all hover:shadow-md md:text-lg"
          >
            食後デザート用サンプルを取り寄せる
          </a>
        </div>
      </div>
    </section>
  );
}
