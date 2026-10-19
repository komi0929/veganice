"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "./ui";

const GOOGLE_MAPS_REVIEWS_URL =
  "https://www.google.com/maps/place/%E3%82%B0%E3%83%AB%E3%83%86%E3%83%B3%E3%83%95%E3%83%AA%E3%83%BC%EF%BC%86100%EF%BC%85%E6%A4%8D%E7%89%A9%E6%80%A7%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%84+Soy+Stories%EF%BC%88vegan%EF%BC%86gluten+free%EF%BC%89/@33.5818211,130.3966611,17z/data=!4m8!3m7!1s0x354191585d44c62f:0xa127c6cfc075e381!8m2!3d33.5818211!4d130.3966611!9m1!1b1!16s%2Fg%2F11r783v2pc?hl=ja";

interface ReviewItem {
  quote: string[];
  who: string;
  tag: string;
  image: string;
  width: number;
  height: number;
}

/* 実在するお客様のGoogleクチコミ9選（スクリーンショットはすべて実物・トリミングなし） */
const reviews: ReviewItem[] = [
  {
    quote: ["食事制限はないけれど、今まで食べた", "アイスの中で一番バランスが良くて美味しかった。"],
    who: "Cristina Paulo さん",
    tag: "ノンヴィーガン・夕食後に来店",
    image: "/images/reviews/google_review_cristina_paulo.png",
    width: 402,
    height: 434,
  },
  {
    quote: ["今まで食べた中で最高。", "世界中で食べたどんな乳製品よりも美味しい。"],
    who: "Shannon Barkley-Nakajima さん",
    tag: "アイス＆ワッフルを絶賛",
    image: "/images/reviews/google_review_shannon_barkley.png",
    width: 402,
    height: 497,
  },
  {
    quote: ["今まで食べた中で一番美味しい", "ストロベリーアイスクリーム！"],
    who: "Lauren Baker さん",
    tag: "ニューヨークから来店",
    image: "/images/reviews/google_review_lauren_baker.png",
    width: 402,
    height: 455,
  },
  {
    quote: ["イタリアで食べた本場のジェラートと", "同じくらい美味しかった。"],
    who: "Gamze Erdogan さん",
    tag: "ヴィーガン歴のあるお客様",
    image: "/images/reviews/google_review_gamze_erdogan.png",
    width: 402,
    height: 476,
  },
  {
    quote: ["13年間ヴィーガンだけど、今まで食べた", "ヴィーガンアイスの中で一番好きかも！"],
    who: "Audrey Price さん",
    tag: "アメリカから来店（ヴィーガン歴13年）",
    image: "/images/reviews/google_review_audrey_price.png",
    width: 402,
    height: 369,
  },
  {
    quote: ["豆乳で作られているなんて全く気づかない。", "絶品すぎて2回も食べてしまいました。"],
    who: "Poonam Parekh さん",
    tag: "グルテン不耐症・リピート来店",
    image: "/images/reviews/google_review_poonam_parekh.png",
    width: 402,
    height: 539,
  },
  {
    quote: ["ヴィーガンじゃない人にも", "ぜひすすめたい。"],
    who: "Merrick Clay さん",
    tag: "ヴィーガンではない方",
    image: "/images/reviews/google_review_merrick_clay.png",
    width: 408,
    height: 547,
  },
  {
    quote: ["乳製品なしとは思えない", "クリーミーさ。"],
    who: "Jodi Clay さん",
    tag: "ご家族で来店",
    image: "/images/reviews/google_review_jodi_clay.png",
    width: 402,
    height: 570,
  },
  {
    quote: ["今まで食べた抹茶で、", "いちばんおいしい！"],
    who: "amanda weidman さん",
    tag: "旅行中に来店",
    image: "/images/reviews/google_review_amanda_weidman.png",
    width: 402,
    height: 518,
  },
];

/** 実店舗の評価・口コミ。スマホ・PCともに横スライドで9件の実物クチコミを閲覧可能 */
export default function DessertReviewsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (direction: "prev" | "next") => {
    const container = sliderRef.current;
    if (!container) return;
    const scrollAmount = Math.max(container.clientWidth * 0.75, 320);
    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="reviews" className="bg-brand-dark overflow-hidden py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          tone="light"
          eyebrow="実店舗での評判"
          lines={["「今まで食べたアイスで一番美味しい」", "世界中から届く本物の声。"]}
          lead={[
            "Google ★4.7（250件超）、ヴィーガンガイドHappyCowで満点5.0を獲得。",
            "海外からのヴィーガンのお客様はもちろん、ノンヴィーガンの人でも「どんな乳製品のアイスより美味しい」「今までで一番バランスが良い」と絶賛されています。",
          ]}
        />

        {/* 評価スコア */}
        <div className="mt-8 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white/10 px-4 py-5 text-center">
            <p className="text-3xl font-bold text-white sm:text-4xl">★4.7</p>
            <p className="mt-1 text-xs leading-snug text-white/75">
              Googleの口コミ
              <br />
              250件以上
            </p>
          </div>
          <div className="rounded-2xl bg-white/10 px-4 py-5 text-center">
            <p className="text-3xl font-bold text-white sm:text-4xl">5.0</p>
            <p className="mt-1 text-xs leading-snug text-white/75">
              HappyCow
              <br />
              満点評価
            </p>
          </div>
        </div>

        {/* スライダー操作ヘッダー */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-xs font-medium text-white/80">
            ← 横にスライドして実物の口コミを見る（厳選9件）→
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByCards("prev")}
              aria-label="前の口コミへスライド"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/25 active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCards("next")}
              aria-label="次の口コミへスライド"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/25 active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* 口コミカード：スマホ・PC共通で横スライド、画像は見切れなしで全体表示 */}
      <div
        ref={sliderRef}
        className="mx-auto mt-4 flex max-w-5xl snap-x snap-mandatory items-start gap-5 overflow-x-auto scroll-smooth px-6 pb-4"
      >
        {reviews.map((review) => (
          <figure
            key={review.who}
            className="flex w-[84%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white shadow-lg sm:w-[46%] md:w-[calc(33.333%-14px)]"
          >
            <blockquote className="px-5 pt-5">
              <p className="text-sm text-amber-500" aria-label="星5つ">
                ★★★★★
              </p>
              <p className="text-ink mt-2 text-[16px] leading-snug font-bold">
                {review.quote.map((line, index) => (
                  <span key={line} className="block">
                    {index === 0 && "「"}
                    {line}
                    {index === review.quote.length - 1 && "」"}
                  </span>
                ))}
              </p>
            </blockquote>
            <figcaption className="text-ink-muted px-5 pt-2 text-xs font-medium">
              {review.who}・{review.tag}
            </figcaption>
            <div className="mx-4 mt-3 mb-4 overflow-hidden rounded-xl border border-gray-200 bg-white">
              <Image
                src={review.image}
                alt={`Googleの口コミ実物スクリーンショット：${review.who}`}
                width={review.width}
                height={review.height}
                className="h-auto w-full object-contain"
                sizes="(max-width: 640px) 84vw, (max-width: 768px) 46vw, 310px"
              />
            </div>
          </figure>
        ))}
      </div>

      <div className="mx-auto mt-3 flex max-w-5xl items-center justify-between px-6">
        <p className="text-xs text-white/60">※すべてGoogleマップに投稿された実際の口コミ画面です</p>
        <a
          href={GOOGLE_MAPS_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-white underline underline-offset-4 hover:text-white/80"
        >
          Googleマップで全250件以上の口コミを見る ↗
        </a>
      </div>
    </section>
  );
}
