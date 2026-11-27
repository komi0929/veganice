"use client";

import Image from "next/image";
import Link from "next/link";

const servingScenes = [
  {
    badge: "カフェ・菓子店に",
    title: "タルトや焼き菓子の添えに",
    caption: "温かいお菓子やドーナツの添え・サンドに。",
    image: "/images/serving/serving_waffle_cup.jpg",
    objectPosition: "object-[center_45%]",
  },
  {
    badge: "レストラン・定食に",
    title: "食後の小皿・アフォガートに",
    caption: "しっかりしたお食事の後でも重くならない一皿。",
    image: "/images/serving/serving_affogato.jpg",
    objectPosition: "object-center",
  },
  {
    badge: "ドリンク・パフェに",
    title: "ソーダや珈琲のフロートに",
    caption: "マンゴーやベリー、バニラで季節のドリンクに。",
    image: "/images/serving/serving_float.jpg",
    objectPosition: "object-[center_35%]",
  },
  {
    badge: "ホテル・旅館に",
    title: "会席のデザート・海外客対応に",
    caption: "抹茶・ほうじ茶・白桃など、皆様と同じ器で。",
    image: "/images/serving/serving_monaka.jpg",
    objectPosition: "object-[center_70%]",
  },
] as const;

export default function EconomicsSection() {
  return (
    <section id="value" className="bg-bg scroll-mt-20 py-14 md:py-18">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-brand mb-1.5 font-sans text-xs font-bold tracking-wider">
              お店での出し方
            </p>
            <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
              焼き菓子の添えから、食後のデザートまで。
            </h2>
          </div>
          <p className="text-ink-muted font-sans text-xs font-medium">
            1皿 50ml 約100円〜 ／ 賞味期限表示義務なし・廃棄が出にくい
          </p>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {servingScenes.map((scene) => (
            <div
              key={scene.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-3"
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
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-stone-200/70 bg-white px-4 py-3 font-sans text-xs sm:px-5">
          <span className="text-ink-light font-medium">業態別のご案内ページ：</span>
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
