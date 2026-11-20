"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/app/dessert/components/ui";

const STRENGTH_CARDS = [
  {
    num: "01",
    title: "卵・乳・小麦「持ち込みゼロ」の専用工房",
    visualPills: ["卵 不使用", "乳 不使用", "小麦 不使用"],
    summary:
      "製造ラインでの意図しない混入（コンタミ）がない専用工房。アレルギーをお持ちの方や海外のお客様にも安心してお出しいただけます。",
    image: "/images/factory_kitchen_craft.webp",
    alt: "卵・乳・小麦を持ち込まない専用工房",
  },
  {
    num: "02",
    title: "米粉の独自製法で、出し入れしても滑らか",
    visualPills: ["シャリシャリ感なし", "冷凍庫の開閉に強い"],
    summary:
      "植物性アイスにありがちな氷っぽいシャーベット感を、超微粉米粉の保水力で解消。営業中の出し入れでもクリーミーな舌触りが続きます。",
    image: "/images/craft_scoop_cup.webp",
    alt: "米粉製法によるなめらかな口どけのクラフトアイス",
  },
  {
    num: "03",
    title: "発酵素材の深いコク × 食後のさっぱり感",
    visualPills: ["甘酒・白みその旨み", "乳脂肪ゼロで軽やか"],
    summary:
      "日本の伝統発酵素材がリッチな奥行きを生み出し、お店の素材の香りを引き立てます。油分が口に残らず食後でもぺろりと食べきれる後味です。",
    image: "/images/ingredient_miso_amazake.jpg",
    alt: "甘酒と白みそなど日本の発酵素材",
  },
];

/**
 * 文字量を大幅に絞り、写真＋タグ図解で直感的に伝える「SoyStories OEMの3つの品質土台」
 */
export default function OemStrengthsSection() {
  return (
    <section className="bg-bg-white border-t border-gray-100 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="選ばれる3つの品質基盤"
          lines={["大切な素材を預けていただくための、", "専用工房と独自製法。"]}
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STRENGTH_CARDS.map((card, idx) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col overflow-hidden rounded-3xl border border-gray-200/80 bg-[#faf8f4] shadow-2xs"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="bg-ink/85 absolute top-3 left-3 rounded-full px-3 py-1 font-mono text-xs font-bold text-white">
                  POINT {card.num}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap gap-1.5">
                  {card.visualPills.map((pill) => (
                    <span
                      key={pill}
                      className="bg-brand/10 text-brand rounded-full px-2.5 py-0.5 text-[11px] font-bold"
                    >
                      ✓ {pill}
                    </span>
                  ))}
                </div>
                <h3 className="text-ink mt-3 text-lg leading-snug font-bold">{card.title}</h3>
                <p className="text-ink-light mt-2 text-[13.5px] leading-relaxed">{card.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
