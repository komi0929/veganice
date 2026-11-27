"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getFlavorSpec } from "@/app/data/flavorSpecs";
import FlavorSpecModal, { type SelectedFlavorTarget } from "./FlavorSpecModal";
import { FlavorThumbnail } from "./FlavorThumbnail";

const flavors: {
  name: string;
  story: string;
  image?: string;
  color?: string;
}[] = [
  {
    name: "UMAMIバニラ",
    story: "人気No.1。甘酒と白みそのコク",
    image: "/images/flavors/umami_vanilla.png",
  },
  {
    name: "抹茶",
    story: "宇治抹茶に甘酒を合わせた濃厚味",
    image: "/images/flavors/matcha.png",
  },
  {
    name: "バニラココナッツ",
    story: "ココナッツが香るさっぱりした甘さ",
    image: "/images/flavors/vanilla_coconut.png",
  },
  {
    name: "ほうじ茶",
    story: "香ばしい茶葉の香りと軽い後味",
    image: "/images/flavors/houjicha.png",
  },
  {
    name: "アールグレイ",
    story: "ベルガモットと紅茶の華やかな香り",
    image: "/images/flavors/earl_gray.png",
  },
  {
    name: "ショコラ",
    story: "カカオが濃い生チョコのような食感",
    image: "/images/flavors/chocolate.png",
  },
  {
    name: "マンゴー",
    story: "完熟マンゴーの濃厚でなめらかな甘み",
    image: "/images/flavors/mango.png",
  },
  {
    name: "ミックスベリー",
    story: "苺と木苺の甘酸っぱい果実味",
    image: "/images/flavors/berry_mix.png",
  },
  {
    name: "もも",
    story: "国産白桃のやさしい香りと果汁感",
    image: "/images/flavors/peach.png",
  },
  {
    name: "りんご",
    story: "国産りんご果汁のみずみずしい甘み",
    image: "/images/flavors/apple.png",
  },
  {
    name: "ドラゴンフルーツ",
    story: "器が華やぐパイン＆ピタヤ味",
    image: "/images/flavors/dragon_fruit.png",
  },
];

const b2bTerms = [
  {
    label: "卸価格・ロット",
    value:
      "バルク：1L ¥2,000・2L ¥4,000（税別・最小4L〜味自由）／ 100ml個食カップ：¥300（税別・60個〜）",
  },
  {
    label: "1Lあたり杯数",
    value: "#18（50ml）で約20杯＝1杯 約100円 ／ #12（80ml）で約12杯＝1杯 約167円",
  },
  {
    label: "不使用素材",
    value: "乳・卵・小麦・白砂糖 不使用（全11種共通・氷菓）",
  },
  {
    label: "アレルゲン管理",
    value:
      "卵・乳・小麦を持ち込まない専用工房製（持ち込みはナッツ類のみ。味により大豆・アーモンド・もも・りんごを含む）",
  },
  {
    label: "配送・お支払い",
    value: "通常5営業日前後でクール冷凍便発送 ／ 納品月の月末締め・翌月末請求書払い（銀行振込）",
  },
];

const itemVariant = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.05,
      ease: "easeOut" as const,
    },
  }),
};

export default function ProductsSection() {
  const [selectedFlavor, setSelectedFlavor] = useState<SelectedFlavorTarget | null>(null);

  return (
    <section id="products" className="bg-bg relative scroll-mt-20 overflow-hidden py-14 md:py-22">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-brand mb-2 font-sans text-xs font-semibold tracking-[0.2em] uppercase">
              Product Lineup
            </p>
            <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
              全11フレーバー同価格。4L（1L×4本など）から自由に組み合わせ。
            </h2>
          </div>
          <p className="text-ink-muted font-sans text-xs">
            ※各カードをタップで全原材料・栄養成分を表示
          </p>
        </div>

        {/* フレーバーグリッド */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
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
                className="group hover:border-brand/40 flex cursor-pointer flex-col items-center rounded-2xl border border-stone-200/80 bg-white p-3.5 text-center shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div className="relative mb-2.5 aspect-square w-24 overflow-hidden transition-transform duration-200 group-hover:scale-105 sm:w-28">
                  <FlavorThumbnail
                    name={flavor.name}
                    image={flavor.image}
                    color={flavor.color}
                    sizes="(max-width: 640px) 104px, 120px"
                  />
                </div>
                <h3 className="text-ink font-serif text-sm font-bold whitespace-nowrap sm:text-base">
                  {flavor.name}
                </h3>
                <p className="text-ink-muted mt-1 mb-2.5 text-[11.5px] leading-relaxed sm:text-xs">
                  {flavor.story}
                </p>
                <span className="text-brand border-brand/25 bg-brand/5 group-hover:bg-brand group-hover:border-brand mt-auto inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 font-sans text-[10.5px] font-bold transition-colors group-hover:text-white">
                  原材料・栄養
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* 容器写真＋お取引条件コンパクトカード */}
        <div className="mt-10 rounded-3xl border border-stone-200/80 bg-white p-5 shadow-2xs sm:p-7">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
            <div className="grid grid-cols-2 gap-3 lg:col-span-4">
              <div className="overflow-hidden rounded-2xl border border-stone-200/70 bg-[#fafaf8] p-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/bulk_1l.jpg"
                    alt="1L角型バルク容器"
                    fill
                    sizes="(max-width: 1024px) 45vw, 18vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-ink mt-1.5 text-center font-sans text-xs font-bold">
                  1L 角型（約20杯分）
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-stone-200/70 bg-[#fafaf8] p-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/bulk_2l.jpg"
                    alt="2L角型バルク容器"
                    fill
                    sizes="(max-width: 1024px) 45vw, 18vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-ink mt-1.5 text-center font-sans text-xs font-bold">
                  2L 角型（約40杯分）
                </p>
              </div>
            </div>

            <dl className="divide-y divide-gray-100 lg:col-span-8">
              {b2bTerms.map((term) => (
                <div
                  key={term.label}
                  className="grid grid-cols-1 gap-0.5 py-2.5 sm:grid-cols-[7.5rem_1fr] sm:gap-4"
                >
                  <dt className="text-brand font-sans text-xs font-bold">{term.label}</dt>
                  <dd className="text-ink-light font-sans text-xs leading-relaxed sm:text-[13px]">
                    {term.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <FlavorSpecModal target={selectedFlavor} onClose={() => setSelectedFlavor(null)} />
    </section>
  );
}
