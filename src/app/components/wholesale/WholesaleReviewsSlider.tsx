"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WHOLESALE_FACTS, WHOLESALE_REVIEWS } from "@/app/data/wholesaleFacts";

export interface WholesaleReviewsSliderProps {
  eyebrow: string;
  heading: string;
  lead: string;
  variant?: "dark" | "light";
}

export default function WholesaleReviewsSlider({
  eyebrow,
  heading,
  lead,
  variant = "dark",
}: WholesaleReviewsSliderProps) {
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

  const isDark = variant === "dark";

  return (
    <section
      id="reviews"
      className={
        isDark
          ? "bg-brand-dark overflow-hidden py-16 sm:py-24"
          : "overflow-hidden border-t border-stone-200/70 bg-[#f7f3ec] py-16 sm:py-24"
      }
    >
      <div className="mx-auto max-w-5xl px-6">
        <p
          className={`mb-3 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider ${
            isDark ? "text-[#a7d7b5]" : "text-brand"
          }`}
        >
          <span
            className={`inline-block h-px w-5 ${isDark ? "bg-[#a7d7b5]" : "bg-brand"}`}
            aria-hidden="true"
          />
          {eyebrow}
        </p>
        <h2
          className={`text-2xl leading-snug font-bold tracking-tight sm:text-3xl md:text-4xl ${
            isDark ? "text-white" : "text-ink"
          }`}
        >
          {heading}
        </h2>
        <p
          className={`mt-4 max-w-3xl font-sans text-sm leading-[1.85] sm:text-base ${
            isDark ? "text-white/85" : "text-ink-light"
          }`}
        >
          {lead}
        </p>

        {/* 評価スコア */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:max-w-lg">
          <div
            className={`rounded-2xl px-4 py-5 text-center ${
              isDark ? "bg-white/10" : "border border-stone-200/80 bg-white shadow-2xs"
            }`}
          >
            <p className={`text-3xl font-bold sm:text-4xl ${isDark ? "text-white" : "text-ink"}`}>
              {WHOLESALE_FACTS.googleRating}
            </p>
            <p
              className={`mt-1 font-sans text-xs leading-snug ${
                isDark ? "text-white/80" : "text-ink-muted"
              }`}
            >
              Googleの口コミ（{WHOLESALE_FACTS.googleReviewCount}）
            </p>
          </div>
          <div
            className={`rounded-2xl px-4 py-5 text-center ${
              isDark ? "bg-white/10" : "border border-stone-200/80 bg-white shadow-2xs"
            }`}
          >
            <p className={`text-3xl font-bold sm:text-4xl ${isDark ? "text-white" : "text-brand"}`}>
              {WHOLESALE_FACTS.happyCowRating}
            </p>
            <p
              className={`mt-1 font-sans text-xs leading-snug ${
                isDark ? "text-white/80" : "text-ink-muted"
              }`}
            >
              HappyCow 満点評価
            </p>
          </div>
        </div>

        {/* スライダー操作バー */}
        <div className="mt-8 flex items-center justify-between">
          <p
            className={`font-sans text-xs font-medium ${
              isDark ? "text-white/80" : "text-ink-muted"
            }`}
          >
            ← 横にスライドして実物の口コミを見る（厳選9件）→
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByCards("prev")}
              aria-label="前の口コミへスライド"
              className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border transition active:scale-95 ${
                isDark
                  ? "border-white/25 bg-white/10 text-white hover:bg-white/25"
                  : "border-brand/20 text-ink hover:bg-brand/10 bg-white shadow-2xs"
              }`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCards("next")}
              aria-label="次の口コミへスライド"
              className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border transition active:scale-95 ${
                isDark
                  ? "border-white/25 bg-white/10 text-white hover:bg-white/25"
                  : "border-brand/20 text-ink hover:bg-brand/10 bg-white shadow-2xs"
              }`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* 口コミカード */}
      <div
        ref={sliderRef}
        className="mx-auto mt-4 flex max-w-5xl snap-x snap-mandatory items-start gap-5 overflow-x-auto scroll-smooth px-6 pb-4"
      >
        {WHOLESALE_REVIEWS.map((review) => (
          <figure
            key={review.who}
            className="flex w-[84%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-stone-200/70 bg-white shadow-md sm:w-[46%] md:w-[calc(33.333%-14px)]"
          >
            <blockquote className="px-5 pt-5">
              <p className="text-sm text-amber-500" aria-label="星5つ">
                ★★★★★
              </p>
              <p className="text-ink mt-2 font-sans text-[15px] leading-snug font-bold sm:text-base">
                {review.quote.map((line, index) => (
                  <span key={line} className="block">
                    {index === 0 ? "「" : ""}
                    {line}
                    {index === review.quote.length - 1 ? "」" : ""}
                  </span>
                ))}
              </p>
            </blockquote>
            <figcaption className="text-ink-muted px-5 pt-2 font-sans text-xs font-medium">
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

      <div className="mx-auto mt-3 flex max-w-5xl flex-col justify-between gap-2 px-6 sm:flex-row sm:items-center">
        <p className={`font-sans text-xs ${isDark ? "text-white/65" : "text-ink-muted"}`}>
          ※すべて薬院の実店舗（SoyStories 薬院店）に投稿された実際のGoogleマップ口コミ画面です
        </p>
        <a
          href={WHOLESALE_FACTS.googleMapsReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-sans text-xs font-bold underline underline-offset-4 ${
            isDark ? "text-white hover:text-white/80" : "text-brand hover:opacity-80"
          }`}
        >
          Googleマップで全{WHOLESALE_FACTS.googleReviewCount}の口コミを見る ↗
        </a>
      </div>
    </section>
  );
}
