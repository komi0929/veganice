"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WHOLESALE_FACTS, WHOLESALE_REVIEWS } from "@/app/data/wholesaleFacts";

export default function SocialProofSection() {
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
    <section id="story" className="bg-bg scroll-mt-20 border-t border-gray-100 py-14 md:py-22">
      <span id="reviews" className="-mt-20 block pt-20" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* 評価スコア＋見出し */}
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-2 inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-800">
              Google Maps 実物のクチコミ（厳選9件）
            </span>
            <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
              「世界中で食べた乳製品より美味しい」国内外から届く声
            </h2>
          </div>

          <div className="flex items-center gap-6 rounded-2xl border border-gray-200/80 bg-white px-5 py-3 shadow-2xs">
            <div className="text-center">
              <span className="text-brand block font-serif text-2xl font-bold sm:text-3xl">
                {WHOLESALE_FACTS.happyCowRating}
              </span>
              <span className="text-ink-muted block text-[11px]">HappyCow 満点</span>
            </div>
            <div className="h-8 w-px bg-gray-200" aria-hidden="true" />
            <div className="text-center">
              <span className="text-ink block font-serif text-2xl font-bold sm:text-3xl">
                {WHOLESALE_FACTS.googleRating}
              </span>
              <span className="text-ink-muted block text-[11px]">
                Google（{WHOLESALE_FACTS.googleReviewCount}）
              </span>
            </div>
          </div>
        </div>

        {/* スライダー操作バー */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-ink-muted text-xs font-medium">
            ← 左右にスライドして実物の口コミを見る（厳選9件）→
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByCards("prev")}
              aria-label="前の口コミへスライド"
              className="border-brand/20 text-ink hover:bg-brand/10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border bg-white shadow-2xs transition active:scale-95"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCards("next")}
              aria-label="次の口コミへスライド"
              className="border-brand/20 text-ink hover:bg-brand/10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border bg-white shadow-2xs transition active:scale-95"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* クチコミスライダー */}
        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory items-start gap-5 overflow-x-auto scroll-smooth pb-4"
        >
          {WHOLESALE_REVIEWS.map((review) => (
            <figure
              key={review.who}
              className="flex w-[84%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xs sm:w-[46%] md:w-[calc(33.333%-14px)]"
            >
              <div className="border-b border-gray-100 p-4 sm:p-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="inline-block rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-800">
                    {review.tag}
                  </span>
                  <span className="text-xs font-bold text-amber-500">★★★★★</span>
                </div>
                <blockquote className="text-ink font-serif text-[15px] leading-snug font-bold">
                  {review.quote.map((line, index) => (
                    <span key={line} className="block">
                      {index === 0 && "「"}
                      {line}
                      {index === review.quote.length - 1 && "」"}
                    </span>
                  ))}
                </blockquote>
                <figcaption className="text-ink-muted mt-1.5 text-xs font-medium">
                  {review.who}
                </figcaption>
              </div>
              <div className="p-3.5">
                <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                  <Image
                    src={review.image}
                    alt={`Googleクチコミ実物スクリーンショット: ${review.who}`}
                    width={review.width}
                    height={review.height}
                    className="h-auto w-full object-contain"
                    sizes="(max-width: 640px) 84vw, (max-width: 768px) 46vw, 320px"
                  />
                </div>
              </div>
            </figure>
          ))}
        </div>

        <div className="mt-3 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <p className="text-ink-muted text-xs">
            ※すべて直営店（福岡・薬院 SoyStories）に投稿された実物のGoogleマップ口コミ画面です
          </p>
          <a
            href={WHOLESALE_FACTS.googleMapsReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand text-xs font-bold underline underline-offset-4 hover:opacity-80"
          >
            Googleマップで全{WHOLESALE_FACTS.googleReviewCount}のクチコミを見る ↗
          </a>
        </div>

        {/* 創業の想い・背景（読みたい方だけ開ける折りたたみカード） */}
        <details className="group mt-8 rounded-2xl border border-stone-200/80 bg-white shadow-2xs">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 sm:px-6 [&::-webkit-details-marker]:hidden">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <Image
                  src="/images/owner_story.jpg"
                  alt="SoyStories 代表 小南優作"
                  fill
                  sizes="40px"
                  className="object-cover object-[center_15%]"
                />
              </div>
              <div>
                <p className="text-brand font-sans text-[11px] font-bold">Our Story</p>
                <p className="text-ink font-serif text-sm font-bold sm:text-base">
                  「はじめて子どもにアイスを食べさせることができた」——専用工房をつくった理由を読む
                </p>
              </div>
            </div>
            <span
              className="text-brand shrink-0 font-sans text-lg leading-none transition-transform duration-200 group-open:rotate-45"
              aria-hidden="true"
            >
              ＋
            </span>
          </summary>
          <div className="border-t border-gray-100 px-5 py-5 sm:px-6">
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
              <div className="grid grid-cols-2 gap-3 md:col-span-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src="/images/craft_moment.jpg"
                    alt="SoyStoriesの専用工房"
                    fill
                    sizes="(max-width: 768px) 45vw, 220px"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src="/images/child_first_icecream.jpg"
                    alt="初めてクラフトアイスを食べる子どもの様子"
                    fill
                    sizes="(max-width: 768px) 45vw, 220px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="text-ink-light space-y-2.5 font-sans text-xs leading-[1.85] sm:text-sm md:col-span-7">
                <p>
                  福岡・薬院の小さなお店で「はじめて子どもにアイスを食べさせることができた」と涙されたお母さんや、ノンヴィーガンのお客様からの「こっちのほうが好き！」という声に背中を押され、乳・卵・小麦を一切持ち込まない専用アイス工房を立ち上げました。
                </p>
                <p className="text-ink font-medium">
                  食に制限がある方もない方も、同じテーブルで同じ一皿を笑顔で囲める時間を、全国のお店と一緒に広げていければ幸いです。（代表　小南
                  優作）
                </p>
              </div>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
