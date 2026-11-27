"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WHOLESALE_FACTS, WHOLESALE_REVIEWS } from "@/app/data/wholesaleFacts";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  }),
};

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
    <section id="story" className="bg-bg scroll-mt-20 border-t border-gray-100 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── 1. Our Story：福岡・薬院の小さなお店から専用アイス工房設立へ ── */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-22 flex flex-col gap-10 md:gap-14"
        >
          <div className="md:text-center">
            <p className="text-brand mb-3 font-sans text-xs font-bold tracking-[0.22em] uppercase">
              Our Story — 福岡・薬院の実店舗から
            </p>
            <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl md:text-4xl">
              「こっちのほうが美味しい！」
              <br />
              その笑顔を全国のお店から届けたくて。
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14">
            <div className="space-y-3 md:col-span-5">
              <div className="bg-bg relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-stone-200/80 shadow-xs">
                <Image
                  src="/images/store_actual.png"
                  alt="SoyStoriesの実店舗（福岡・薬院）"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 460px"
                />
                <span className="absolute bottom-3 left-3 rounded-lg bg-black/65 px-3 py-1 font-sans text-xs font-bold text-white backdrop-blur-xs">
                  福岡・薬院の実店舗「SoyStories」
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-stone-200/80 bg-stone-100">
                  <Image
                    src="/images/craft_moment.jpg"
                    alt="福岡・薬院店 SoyStories の店内"
                    fill
                    className="object-cover object-[center_35%]"
                    sizes="(max-width: 768px) 48vw, 220px"
                  />
                </div>
                <div className="flex flex-col justify-center rounded-xl border border-stone-200/80 bg-white px-4 py-3">
                  <p className="text-brand font-serif text-lg leading-tight font-bold">
                    Google {WHOLESALE_FACTS.googleRating}
                  </p>
                  <p className="text-ink-muted mt-0.5 font-sans text-[11px] leading-snug">
                    口コミ {WHOLESALE_FACTS.googleReviewCount} ／ HappyCow{" "}
                    {WHOLESALE_FACTS.happyCowRating}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 md:col-span-7">
              <h3 className="text-ink font-serif text-xl leading-[1.6] font-bold sm:text-2xl md:text-3xl">
                小さなお店で生まれた感動を、
                <br className="hidden lg:block" />
                あなたのお店から届けてほしい。
              </h3>
              <div className="text-ink-light space-y-4 font-sans text-[15px] leading-[1.9] sm:text-base">
                <p>
                  私たちSoyStoriesは、アレルギーやヴィーガンなど食に制限がある方も気兼ねなく選べる場所をつくりたいという想いから、福岡・薬院の小さなお店でスタートしました。
                </p>
                <p>
                  乳・卵・小麦・白砂糖を使わずに作るクラフトアイスは、制限のある方だけでなくヴィーガンではないお客様からも
                  <strong className="text-ink">
                    「こっちのほうが好き」「普通のアイスより美味しい」
                  </strong>
                  と選ばれるようになり、全国のお店へ届けるため専用工房を立ち上げました。
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 2. Emotional Episode：子どもの写真ブロック ── */}
        <motion.div
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-22 border-t border-gray-200/80 pt-18"
        >
          <div className="flex flex-col items-center gap-10 md:flex-row-reverse md:gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-stone-200/80 shadow-sm">
                <Image
                  src="/images/child_first_icecream.jpg"
                  alt="初めてクラフトアイスを食べる子どもの様子"
                  fill
                  className="object-cover object-[center_45%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="w-full space-y-5 md:w-1/2">
              <p className="text-brand font-sans text-xs font-bold tracking-[0.2em] uppercase">
                Episode
              </p>
              <h3 className="text-ink font-serif text-2xl leading-relaxed font-bold md:text-3xl">
                「はじめて子どもにアイスを
                <br />
                食べさせることができた」
              </h3>
              <p className="text-brand font-sans text-base font-bold sm:text-lg">
                そう言って涙されたお母さんがいました。
              </p>
              <div className="text-ink-light space-y-4 font-sans text-[15px] leading-[1.9] sm:text-base">
                <p>
                  乳・卵・小麦のアレルギーがあるお子様にとって、「みんなと同じものを気兼ねなく食べられる」ことはご家族の大きな喜びにつながります。同じテーブルの全員が笑顔で囲める一皿としてお役立てください。
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 3. 実店舗の評価スコア ── */}
        <span id="reviews" className="-mt-20 block pt-20" aria-hidden="true" />
        <motion.div
          variants={scaleIn}
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14 flex flex-wrap items-center justify-center gap-10 border-y border-gray-200 py-10 text-center sm:gap-20"
        >
          <div>
            <span className="text-brand block font-serif text-4xl font-bold md:text-6xl">
              {WHOLESALE_FACTS.happyCowRating}
            </span>
            <span className="text-ink-muted mt-2 block font-sans text-xs tracking-wider sm:text-sm">
              薬院のお店 HappyCow 満点評価
            </span>
          </div>
          <div>
            <span className="text-ink block font-serif text-4xl font-bold md:text-6xl">
              {WHOLESALE_FACTS.googleRating}
            </span>
            <span className="text-ink-muted mt-2 block font-sans text-xs tracking-wider sm:text-sm">
              Google マップ クチコミ評価（{WHOLESALE_FACTS.googleReviewCount}）
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative h-14 w-44 sm:h-18 sm:w-52">
              <Image
                src="/images/reviews/google_rating_badge.png"
                alt="Googleクチコミ 4.7 評価スコア"
                fill
                className="object-contain"
                sizes="208px"
              />
            </div>
            <span className="text-ink-muted text-xs tracking-wider">Google マップ公式集計</span>
          </div>
        </motion.div>

        {/* ── 4. 実物のGoogleクチコミスクリーンショット（厳選9件スライダー） ── */}
        <motion.div
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-18"
        >
          <div className="mb-6 text-center">
            <span className="mb-2.5 inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-bold text-emerald-800">
              Google Maps 実物のクチコミ（厳選9件）
            </span>
            <h3 className="text-ink font-serif text-2xl font-bold sm:text-3xl">
              「世界中で食べた乳製品より美味しい」国内外から届く声
            </h3>
            <p className="text-ink-light mx-auto mt-2.5 max-w-2xl text-sm">
              福岡・薬院の実店舗に寄せられた、海外からの観光客やアレルギー・一般のお客様による実際の口コミ画面です。
            </p>
          </div>

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

          <div className="mt-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
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
        </motion.div>

        {/* ── 5. 代表メッセージ ── */}
        <motion.div
          variants={fadeUp}
          custom={0.25}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="flex max-w-4xl flex-col items-center gap-7 rounded-3xl border border-stone-200/80 bg-white p-7 shadow-2xs sm:flex-row sm:p-9">
            <div className="ring-brand/20 relative h-24 w-24 shrink-0 overflow-hidden rounded-full shadow-xs ring-2 sm:h-28 sm:w-28">
              <Image
                src="/images/owner_story.jpg"
                alt="株式会社ヒトコト 代表 小南 優作"
                fill
                className="object-cover object-[center_15%]"
                sizes="112px"
              />
            </div>
            <blockquote className="text-center sm:text-left">
              <p className="text-ink mb-2.5 font-serif text-base leading-relaxed font-bold sm:text-lg">
                「食に制限がある方もない方も、同じテーブルで同じデザートを笑顔で囲める。薬院の小さなお店で見てきたその光景を、今度は全国の飲食店様と一緒に広げていきたいと思っています。あなたのお店のお客様へ、ぜひこの美味しさを届けてください。」
              </p>
              <footer className="text-ink-light font-sans text-xs font-medium sm:text-sm">
                株式会社ヒトコト（店舗 SoyStories） 代表　小南 優作
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
