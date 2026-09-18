"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IceCreamCone, ShieldCheck, PackageCheck } from "lucide-react";

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
    label: "提供形態",
    value: "冷凍（1Lまたは2L）/ 最小4Lから",
  },
  {
    label: "配送",
    value: "全国対応（クール冷凍便）",
  },
  {
    label: "保管温度",
    value: "-18℃以下で長期保存可能",
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
            全8フレーバー、すべて7大アレルゲン不使用。
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

        {/* ── 3つのポイント ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-16 flex max-w-4xl flex-col items-stretch justify-center gap-6 md:flex-row md:gap-8"
        >
          <div className="border-brand flex flex-1 items-center gap-4 border-l-2 py-2 pl-5">
            <div className="flex-shrink-0">
              <IceCreamCone size={20} strokeWidth={1.5} className="text-brand" />
            </div>
            <span className="text-ink text-sm leading-snug sm:text-base">
              仕込み不要
              <br className="sm:hidden" />
              <span className="text-ink-muted">すくうだけ</span>
            </span>
          </div>
          <div className="border-brand flex flex-1 items-center gap-4 border-l-2 py-2 pl-5">
            <div className="flex-shrink-0">
              <ShieldCheck size={20} strokeWidth={1.5} className="text-brand" />
            </div>
            <span className="text-ink text-sm leading-snug sm:text-base">
              乳・卵・小麦フリー
              <br className="sm:hidden" />
              <span className="text-ink-muted">コンタミなし</span>
            </span>
          </div>
          <div className="border-brand flex flex-1 items-center gap-4 border-l-2 py-2 pl-5">
            <div className="flex-shrink-0">
              <PackageCheck size={20} strokeWidth={1.5} className="text-brand" />
            </div>
            <span className="text-ink text-sm leading-snug sm:text-base">
              4Lから
              <br className="sm:hidden" />
              <span className="text-ink-muted">小ロット対応</span>
            </span>
          </div>
        </motion.div>

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
            alt="Soy stories プラントベース・クラフトジェラート全フレーバー"
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
            無料サンプルを申し込む
          </a>
        </div>

        {/* ── B2Bパッケージング ── */}
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* 画像エリア */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm lg:w-1/2"
          >
            <Image
              src="/images/soystories_icecream02081icecream.jpg"
              alt="Soy stories ジェラートのパッケージ・納品仕様"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
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
              お店のこだわりを、
              <br />
              そのまま形に。
            </h3>
            <p className="text-ink-light mb-8 text-base leading-relaxed">
              少量からの仕入れで、リスクなく新しい価値をメニューに加えられます。
              <br />
              専用のパッケージで品質を保ったまま、確実にお届けします。
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
