"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getFlavorSpec } from "@/app/data/flavorSpecs";
import FlavorSpecModal, { type SelectedFlavorTarget } from "./FlavorSpecModal";
import { FlavorThumbnail } from "./FlavorThumbnail";

/* ── フレーバーデータ ── */
const flavors: {
  name: string;
  story: string;
  image?: string;
  color?: string;
}[] = [
  {
    name: "もも",
    story:
      "国産ももストレート果汁をベースに、ココナッツクリームとレモンで白桃をかじった瞬間のみずみずしい香りを閉じ込めた一玉。",
    image: "/images/flavors/peach.png",
  },
  {
    name: "りんご",
    story:
      "国産りんご果汁の蜜のような甘みとキュッと締まった酸味。コースや食事のあとの口の中をさらりと整える上品な味わい。",
    image: "/images/flavors/apple.png",
  },
  {
    name: "ミックスベリー",
    story:
      "甘酸っぱい苺ピューレと華やかな木苺にココナッツクリームを重ねた、濃厚な果実味と鮮やかな酸味。",
    image: "/images/flavors/berry_mix.png",
  },
  {
    name: "ドラゴンフルーツ",
    story:
      "鮮やかなルビー色の果実にパインアップルとココナッツミルクを合わせた、器が一気に華やぐ南国仕立て。",
    image: "/images/flavors/dragon_fruit.png",
  },
  {
    name: "マンゴー",
    story:
      "完熟アップルマンゴーピューレを贅沢に使い、熟れた果肉をそのまま裏ごししたようなとろりと濃密な味わい。",
    image: "/images/flavors/mango.png",
  },
  {
    name: "ショコラ",
    story:
      "クーベルチュールチョコと純ココアを贅沢に溶かし込み、隠し味の白みそで輪郭を引き締めた、冷たい生チョコのような濃密さ。",
    image: "/images/flavors/chocolate.png",
  },
  {
    name: "抹茶",
    story:
      "低温殺菌で守った鮮やかな抹茶のほろ苦さを、たっぷりの濃縮甘酒と白みそ、きび砂糖の旨みが支えるお濃茶仕立て。",
    image: "/images/flavors/matcha.png",
  },
  {
    name: "ほうじ茶",
    story:
      "香ばしく焙煎した茶葉の立ち上る薫香に、濃縮甘酒と白みそのまろやかなコクを重ねた芳醇な味わい。",
    image: "/images/flavors/houjicha.png",
  },
  {
    name: "バニラココナッツ",
    story:
      "国産豆乳にココナッツミルクの甘いコクとほんのり白みそを合わせた、焼き菓子にも果物にも寄り添うミルキーな王道バニラ。",
    image: "/images/flavors/vanilla_coconut.png",
  },
  {
    name: "UMAMIバニラ",
    story:
      "玄米粉と甘酒・白みそ・りんごピューレの旨みにバニラビーンズが香る、塩キャラメルのように奥深くあとを引くバニラ。",
    image: "/images/flavors/umami_vanilla.png",
  },
  {
    name: "アールグレイ",
    story:
      "ベルガモットと紅茶葉の気品ある香りを豆乳とてんさい糖のやさしい甘みで包んだ、タルトや焼き菓子と好相性な一玉。",
    image: "/images/flavors/earl_gray.png",
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
    value: "業務用バルク 1L・2L（最小4L〜） ／ 定番100ml個食カップ（最小60個〜）",
  },
  {
    label: "1Lあたり提供杯数",
    value: "#12ディッシャー（80ml）で約12杯 / #18（50ml）で約20杯",
  },
  {
    label: "アレルゲン",
    value:
      "卵・乳・小麦を持ち込まない専用の工房で製造（乳・卵・小麦のアレルギーの方にも安心してお出しいただけます）。工房への持ち込みがあるのはナッツ類（アーモンド・くるみ・カシューナッツ・落花生等）のみ。フレーバーにより大豆・アーモンド（ナッツ使用）・もも・りんごを含む",
  },
  {
    label: "不使用素材",
    value: "乳・卵・小麦・白砂糖 不使用（全11種共通）",
  },
  {
    label: "保管",
    value: "−18℃以下で冷凍保存（賞味期限の表示義務なし）",
  },
  {
    label: "配送",
    value: "通常5営業日前後でヤマトクール冷凍便にて全国発送",
  },
  {
    label: "卸価格",
    value: "バルク：1L ¥2,000／2L ¥4,000（税別）・100mlカップ：¥300（税別）。全11種同価格",
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
  const [selectedFlavor, setSelectedFlavor] = useState<SelectedFlavorTarget | null>(null);

  return (
    <section id="products" className="bg-bg-white relative overflow-hidden py-20 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── ヘッダー ── */}
        <div className="mx-auto mb-12 max-w-2xl md:mb-16 md:text-center">
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
            className="text-ink font-serif text-2xl leading-snug tracking-wide sm:text-3xl lg:text-[2.5rem]"
          >
            全11フレーバー、乳・卵・小麦 不使用。
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-ink-light mt-6 text-base leading-relaxed sm:text-lg"
          >
            温かいタルトやドーナツにとろりと絡む濃厚なバニラやショコラ、
            <br className="hidden sm:block" />
            会席やスパイス料理のあとにもすっと軽やかに食べきれる抹茶や国産白桃まで、11種を自由に組み合わせられます。
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
            {flavors.map((flavor, index) => {
              const spec = getFlavorSpec(flavor.name);
              return (
                <motion.button
                  type="button"
                  key={flavor.name}
                  custom={index}
                  variants={itemVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  onClick={() => {
                    if (spec) {
                      setSelectedFlavor({
                        name: flavor.name,
                        image: flavor.image,
                        color: flavor.color,
                        spec,
                      });
                    }
                  }}
                  className="group hover:border-brand/40 flex cursor-pointer flex-col items-center rounded-2xl border border-stone-200/80 bg-white/90 p-4 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative mb-3 aspect-square w-28 overflow-hidden transition-transform duration-300 group-hover:scale-105 sm:w-32">
                    <FlavorThumbnail
                      name={flavor.name}
                      image={flavor.image}
                      color={flavor.color}
                      sizes="(max-width: 640px) 120px, 140px"
                    />
                  </div>
                  <h3 className="text-ink mb-1 font-serif text-sm font-bold whitespace-nowrap sm:text-lg">
                    {flavor.name}
                  </h3>
                  <p className="text-ink-muted mb-3 text-xs leading-relaxed sm:text-sm">
                    {flavor.story}
                  </p>
                  <span className="text-brand border-brand/25 bg-brand/5 group-hover:bg-brand group-hover:border-brand mt-auto inline-flex items-center justify-center rounded-full border px-3 py-1 font-sans text-[11px] font-bold transition-colors group-hover:text-white sm:text-xs">
                    原材料・栄養
                  </span>
                </motion.button>
              );
            })}
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
              お店のペースに合わせて、
              <br />
              少量から始められます。
            </h3>
            <p className="text-ink-light mb-8 text-base leading-relaxed">
              お店の冷凍庫のスペースに合わせて、1Lと2Lの角型バルクをご用意しています。
              <br />
              最小ロット4L（1L×4本、または2L×2本など）から組み合わせ自由。持ち帰り販売用の100ml個食カップ（60個〜）にも対応しています。
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

      <FlavorSpecModal target={selectedFlavor} onClose={() => setSelectedFlavor(null)} />
    </section>
  );
}
