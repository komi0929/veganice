"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const servingScenes = [
  {
    badge: "カフェ・菓子店に",
    title: "温かいタルトや焼き菓子の添えに",
    caption: "焼きたてのお菓子にとろりと絡む濃厚バニラやアールグレイ。",
    image: "/images/serving/serving_waffle_cup.jpg",
    objectPosition: "object-[center_45%]",
    href: "/cafe",
  },
  {
    badge: "レストラン・コースに",
    title: "食後の小皿・アフォガートに",
    caption: "スパイス料理やコースのあとにも軽やかに締まる一皿。",
    image: "/images/serving/serving_affogato.jpg",
    objectPosition: "object-center",
    href: "/dessert",
  },
  {
    badge: "ドリンク・パフェに",
    title: "自家製ソーダや珈琲のフロートに",
    caption: "完熟マンゴーやミックスベリーでグラスが華やぐ一杯。",
    image: "/images/serving/serving_float.jpg",
    objectPosition: "object-[center_35%]",
    href: "/cafe",
  },
  {
    badge: "和食・宿泊施設に",
    title: "会席の水菓子・インバウンド対応に",
    caption: "お濃茶仕立ての抹茶や白桃。海外客にも同じ一皿で。",
    image: "/images/serving/serving_monaka.jpg",
    objectPosition: "object-[center_70%]",
    href: "/hotel",
  },
] as const;

export default function EconomicsSection() {
  return (
    <section id="value" className="bg-bg scroll-mt-20 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-brand mb-2 block font-sans text-xs font-semibold tracking-widest uppercase">
              Serving Ideas
            </span>
            <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
              焼き菓子の横から、会席やコースの締めくくりまで。
            </h2>
          </div>
          <p className="text-ink-muted font-sans text-xs font-medium">
            1皿 50ml（#18）約100円〜 ／ 賞味期限表示義務なし・長期冷凍で廃棄が出にくい
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {servingScenes.map((scene, index) => (
            <motion.div
              key={scene.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-3 shadow-2xs"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-stone-100">
                <Image
                  src={scene.image}
                  alt={scene.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={`object-cover ${scene.objectPosition}`}
                />
                <span className="absolute top-2.5 left-2.5 rounded-full bg-white/95 px-2.5 py-0.5 font-sans text-[11px] font-bold text-stone-800 shadow-2xs">
                  {scene.badge}
                </span>
              </div>
              <div className="mt-3 flex flex-1 flex-col px-1 pb-1">
                <h3 className="text-ink font-serif text-sm leading-snug font-bold sm:text-[15px]">
                  {scene.title}
                </h3>
                <p className="text-ink-light mt-1 font-sans text-xs leading-relaxed">
                  {scene.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-stone-200/70 bg-white px-4 py-3 font-sans text-xs sm:px-5">
          <span className="text-ink-light font-medium">
            業態別の詳しいご案内ページもご用意しています：
          </span>
          <div className="flex flex-wrap gap-x-4 gap-y-1 font-bold">
            <Link href="/cafe" className="text-brand hover:underline">
              カフェ・菓子店向け →
            </Link>
            <Link href="/dessert" className="text-brand hover:underline">
              レストラン・飲食店向け →
            </Link>
            <Link href="/hotel" className="text-brand hover:underline">
              ホテル・旅館向け →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
