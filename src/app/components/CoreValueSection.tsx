"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

interface ValueItem {
  label: string;
  problem: string;
  solutionTitle: string;
  solutionBody: string;
  imageSrc: string;
  imageAlt: string;
  imageBadge: string;
  imagePosition: "left" | "right";
}

const VALUE_ITEMS: ValueItem[] = [
  {
    label: "01 — Velvety Rice-Flour Craft",
    problem:
      "「植物性アイスはシャリシャリして水っぽい。出し入れするうちに食感が落ちる」という現場の悩みに。",
    solutionTitle: "米粉を炊き上げる独自製法。スプーンに吸い付く濃密な口どけ。",
    solutionBody:
      "国産米粉を豆乳や果汁とじっくり炊き上げてから冷やし固めるため、営業中の出し入れでも氷に戻らず、最後の一杯までなめらかにほどけます。",
    imageSrc: "/images/craft_scoop_cup.webp",
    imageAlt: "米粉独自製法によるなめらかなクラフトアイス",
    imageBadge: "出し入れしても氷に戻らない濃密な口どけ",
    imagePosition: "right",
  },
  {
    label: "02 — Richness & Clean Finish",
    problem: "「ヴィーガンアイスは味気なく、コクが物足りない」という不満に。",
    solutionTitle: "生チョコや濃茶のように濃厚なのに、あと口はすっと軽やか。",
    solutionBody:
      "クーベルチュールやココナッツに米麹の甘酒と少量の白みそを重ね、深いコクと食後に茶葉・果実の香りだけが残る軽やかな余韻を両立しました。",
    imageSrc: "/images/ingredient_miso_amazake.jpg",
    imageAlt: "甘酒と白みそなど日本の発酵素材",
    imageBadge: "ノンヴィーガンからも「普通のアイスより好き」と好評",
    imagePosition: "left",
  },
  {
    label: "03 — Dedicated Workshop",
    problem: "「製造ラインで乳や小麦を扱っていないか不安」というお店に。",
    solutionTitle: "乳・卵・小麦を一切持ち込まない専用工房で製造。",
    solutionBody:
      "専用工房には乳・卵・小麦を一切持ち込みません（※ナッツ類使用製品はあり）。乳・卵・小麦アレルギーの方や海外ゲストにも安心してお出しいただけます。",
    imageSrc: "/images/factory_kitchen_craft.webp",
    imageAlt: "乳・卵・小麦を持ち込まない専用工房での製造風景",
    imageBadge: "乳・卵・小麦フリーの専用工房製",
    imagePosition: "right",
  },
];

export default function CoreValueSection() {
  return (
    <section id="benefits" className="bg-bg-white scroll-mt-20 py-14 md:py-22">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-10 md:text-center">
          <span className="text-brand mb-2 block font-sans text-xs font-semibold tracking-widest uppercase">
            Why SoyStories
          </span>
          <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl md:text-4xl">
            「植物性だから仕方ない」を覆す、3つの理由。
          </h2>
        </div>

        <div className="space-y-12 md:space-y-16">
          {VALUE_ITEMS.map((item) => (
            <motion.div
              key={item.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 items-center gap-7 md:grid-cols-12 md:gap-12"
            >
              <div
                className={`md:col-span-7 ${
                  item.imagePosition === "left" ? "md:order-2" : "md:order-1"
                }`}
              >
                <motion.p
                  variants={fadeUp}
                  custom={0}
                  className="text-brand mb-2.5 font-sans text-xs font-semibold tracking-[0.18em] uppercase"
                >
                  {item.label}
                </motion.p>
                <motion.div
                  variants={fadeUp}
                  custom={0.05}
                  className="mb-4 rounded-xl border-l-4 border-stone-300 bg-stone-50 px-4 py-2.5"
                >
                  <p className="text-ink-light font-sans text-xs leading-relaxed sm:text-sm">
                    {item.problem}
                  </p>
                </motion.div>
                <motion.h3
                  variants={fadeUp}
                  custom={0.1}
                  className="text-ink mb-2.5 font-serif text-xl leading-snug font-bold sm:text-2xl"
                >
                  {item.solutionTitle}
                </motion.h3>
                <motion.p
                  variants={fadeUp}
                  custom={0.15}
                  className="text-ink-light font-sans text-sm leading-[1.85] sm:text-base"
                >
                  {item.solutionBody}
                </motion.p>
              </div>

              <motion.div
                variants={fadeUp}
                custom={0.1}
                className={`group relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-gray-100 bg-stone-100 shadow-sm md:col-span-5 md:aspect-[4/3] ${
                  item.imagePosition === "left" ? "md:order-1" : "md:order-2"
                }`}
              >
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 440px"
                />
                <div className="absolute right-3 bottom-3 left-3 rounded-xl bg-black/65 px-3 py-1.5 text-center font-sans text-xs font-medium text-white backdrop-blur-xs">
                  {item.imageBadge}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
