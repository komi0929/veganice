"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" as const, delay },
  }),
};

const GOOGLE_MAPS_REVIEWS_URL =
  "https://www.google.com/maps/place/%E3%82%B0%E3%83%AB%E3%83%86%E3%83%B3%E3%83%95%E3%83%AA%E3%83%BC%EF%BC%86100%EF%BC%85%E6%A4%8D%E7%89%A9%E6%80%A7%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%84+Soy+Stories%EF%BC%88vegan%EF%BC%86gluten+free%EF%BC%89/@33.5818211,130.3966611,17z/data=!4m8!3m7!1s0x354191585d44c62f:0xa127c6cfc075e381!8m2!3d33.5818211!4d130.3966611!9m1!1b1!16s%2Fg%2F11r783v2pc?hl=ja";

interface ReviewItem {
  quote: string[];
  who: string;
  tag: string;
  image: string;
  width: number;
  height: number;
  summary: string;
}

/* ── 実在するお客様のGoogleクチコミ9選（/dessertの厳選素材を完全網羅） ── */
const reviews: ReviewItem[] = [
  {
    quote: ["食事制限はないけれど、今まで食べた", "アイスの中で一番バランスが良くて美味しかった。"],
    who: "Cristina Paulo さん",
    tag: "ノンヴィーガン・夕食後に来店",
    image: "/images/reviews/google_review_cristina_paulo.png",
    width: 402,
    height: 434,
    summary:
      "食事制限のない一般のお客様からも、市販のどんな乳製品アイスより美味しくバランスが良いと絶賛。",
  },
  {
    quote: ["今まで食べた中で最高。", "世界中で食べたどんな乳製品よりも美味しい。"],
    who: "Shannon Barkley-Nakajima さん",
    tag: "アイス＆ワッフルを絶賛",
    image: "/images/reviews/google_review_shannon_barkley.png",
    width: 402,
    height: 497,
    summary: "世界中を巡りあらゆる乳製品アイスを食べてきた海外の美食家を唸らせた感動のクチコミ。",
  },
  {
    quote: ["今まで食べた中で一番美味しい", "ストロベリーアイスクリーム！"],
    who: "Lauren Baker さん",
    tag: "ニューヨークから来店",
    image: "/images/reviews/google_review_lauren_baker.png",
    width: 402,
    height: 455,
    summary: "本場ニューヨークからの観光客が旅の中で最も印象に残った味として高く評価。",
  },
  {
    quote: ["イタリアで食べた本場のジェラートと", "同じくらい美味しかった。"],
    who: "Gamze Erdogan さん",
    tag: "ヴィーガン歴のあるお客様",
    image: "/images/reviews/google_review_gamze_erdogan.png",
    width: 402,
    height: 476,
    summary: "本場イタリアのジェラートに匹敵するリッチで滑らかな舌触りと味わいを絶賛。",
  },
  {
    quote: ["13年間ヴィーガンだけど、今まで食べた", "ヴィーガンアイスの中で一番好きかも！"],
    who: "Audrey Price さん",
    tag: "アメリカから来店（ヴィーガン歴13年）",
    image: "/images/reviews/google_review_audrey_price.png",
    width: 402,
    height: 369,
    summary: "13年のヴィーガン歴を持つアメリカからのお客様が「過去一番好き」と太鼓判を押す品質。",
  },
  {
    quote: ["豆乳で作られているなんて全く気づかない。", "絶品すぎて2回も食べてしまいました。"],
    who: "Poonam Parekh さん",
    tag: "グルテン不耐症・リピート来店",
    image: "/images/reviews/google_review_poonam_parekh.png",
    width: 402,
    height: 539,
    summary: "豆乳特有のクセがなく、植物性素材と気づかないほどの完成度に魅了され連続来店。",
  },
  {
    quote: ["ヴィーガンじゃない人にも", "ぜひすすめたい。"],
    who: "Merrick Clay さん",
    tag: "ヴィーガンではない一般のお客様",
    image: "/images/reviews/google_review_merrick_clay.png",
    width: 408,
    height: 547,
    summary:
      "食事制限なしの一般客目線でも、通常のアイス以上に美味しくクリーミーで誰にでも薦めたい逸品。",
  },
  {
    quote: ["乳製品なしとは思えない", "クリーミーさ。"],
    who: "Jodi Clay さん",
    tag: "ご家族連れ・セリアック病",
    image: "/images/reviews/google_review_jodi_clay.png",
    width: 402,
    height: 570,
    summary: "セリアック病をお持ちの方も、そうでないご家族も、全員が同じテーブルで笑顔になれる味。",
  },
  {
    quote: ["今まで食べた抹茶で、", "いちばんおいしい！"],
    who: "amanda weidman さん",
    tag: "外国人観光客・アイス目当て",
    image: "/images/reviews/google_review_amanda_weidman.png",
    width: 402,
    height: 518,
    summary: "旅行中にアイス目当てで来店し、濃厚な抹茶の風味と滑らかなテクスチャーに心から感動。",
  },
];

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
    <section id="story" className="bg-bg border-t border-gray-100 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Story Part: Why We Manufacture */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24 flex flex-col gap-12 md:gap-16"
        >
          <div className="md:text-center">
            <p className="text-ink-muted mb-4 font-sans text-xs tracking-[0.25em] uppercase">
              Our Story
            </p>
            <h2 className="text-ink font-serif text-2xl font-bold sm:text-3xl md:text-4xl">
              「こっちのほうが美味しい！」——その一言が嬉しくて、私たちは大きな決断をしました
            </h2>
          </div>

          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
            <div className="bg-bg relative aspect-[4/3] w-full overflow-hidden rounded-2xl md:w-1/2">
              <Image
                src="/images/craft_moment.jpg"
                alt="SoyStoriesの工房・仕込み風景"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex w-full flex-col gap-6 md:w-1/2">
              <h3 className="text-ink font-serif text-2xl leading-[1.6] font-bold sm:text-3xl">
                小さなお店で生まれた感動を、
                <br className="hidden lg:block" />
                あなたのお店から届けてほしい。
              </h3>
              <p className="text-ink-light font-sans text-base leading-[2] sm:text-lg">
                私たちSoyStoriesのミッションは、アレルギーやヴィーガンなど食に制限がある方、素材にこだわる方にとって「ユメミタイ」と思える場所をつくること。
                <br />
                <br />
                「みんなで一緒に食べられる幸せ」をカタチにするため、福岡・薬院の小さなお店でお客様をお迎えしてきました。そこで生まれた手作りのクラフトアイスは、アレルギーをお持ちの方だけでなく、ノンビーガンのお客様からも「こっちのほうが好き！」「美味しい！」とたくさんの笑顔をいただくようになりました。
                <br />
                <br />
                この「ユメミタイ」な体験を福岡のみならず、もっと多くのエリアで広げていくために、私たちは小さなお店のキッチンを飛び出し、コンタミネーションのないアイスファクトリー（専用製造所）を立ち上げました。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Emotional Episode */}
        <motion.div
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex flex-col items-center gap-10 md:flex-row-reverse md:gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src="/images/child_first_icecream.jpg"
                  alt="初めてクラフトアイスを食べる子どもの様子"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="w-full space-y-6 md:w-1/2">
              <p className="text-ink-muted font-sans text-xs tracking-[0.2em] uppercase">Episode</p>
              <h2 className="text-ink font-serif text-2xl leading-relaxed font-bold md:text-3xl">
                「はじめて子どもにアイスを
                <br />
                食べさせることができた」
              </h2>
              <p className="text-ink-light text-base leading-[2]">
                そう言って涙されたお母さんがいました。
                <br />
                <br />
                アレルギーのあるお子さんを持つご家族にとって、「みんなと同じものを食べられる」ことは、私たちが思う以上に大きな意味があります。
                <br />
                <br />
                あなたのお店にも、きっと同じような想いを抱えたご家族がいらっしゃるかもしれません。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Rating stats */}
        <motion.div
          variants={scaleIn}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 flex flex-wrap items-center justify-center gap-12 border-y border-gray-200 py-12 text-center sm:gap-20"
        >
          <div>
            <span className="text-brand block font-serif text-5xl font-bold md:text-7xl">5.0</span>
            <span className="text-ink-muted mt-3 block font-sans text-sm tracking-wider">
              薬院のお店 HappyCow 満点評価
            </span>
          </div>
          <div>
            <span className="text-ink block font-serif text-5xl font-bold md:text-7xl">★4.7</span>
            <span className="text-ink-muted mt-3 block font-sans text-sm tracking-wider">
              Google マップ クチコミ評価（250件超）
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative h-16 w-48 sm:h-20 sm:w-56">
              <Image
                src="/images/reviews/google_rating_badge.png"
                alt="Googleクチコミ 4.7 評価スコア"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-ink-muted text-xs tracking-wider">Google マップ公式集計</span>
          </div>
        </motion.div>

        {/* ── 実際のGoogleクチコミスクリーンショット掲載セクション（9件スライダー） ── */}
        <motion.div
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mb-8 text-center">
            <span className="mb-3 inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-bold text-emerald-800">
              Google Maps 実物のクチコミ（厳選9件）
            </span>
            <h3 className="text-ink font-serif text-2xl font-bold sm:text-3xl md:text-4xl">
              「世界中で食べた乳製品より美味しい」
              <br className="hidden sm:block" />
              国内外から届くリアルな絶賛の声
            </h3>
            <p className="text-ink-light mx-auto mt-3 max-w-2xl text-sm sm:text-base">
              福岡・薬院の実店舗に寄せられた、海外からの観光客やアレルギー・一般のお客様による実際のGoogleクチコミです。
            </p>
          </div>

          {/* スライダー操作バー */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-ink-muted text-xs font-medium">
              ← 左右にスライドして実物の口コミをご覧いただけます（全9件）→
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollByCards("prev")}
                aria-label="前の口コミへスライド"
                className="border-brand/20 text-ink hover:bg-brand/10 flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-sm transition active:scale-95"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCards("next")}
                aria-label="次の口コミへスライド"
                className="border-brand/20 text-ink hover:bg-brand/10 flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-sm transition active:scale-95"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* クチコミスライダー */}
          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory items-start gap-6 overflow-x-auto scroll-smooth pb-6"
          >
            {reviews.map((review) => (
              <figure
                key={review.who}
                className="flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:w-[48%] md:w-[360px]"
              >
                <div className="border-b border-gray-100 p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="inline-block rounded-md bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-800">
                      {review.tag}
                    </span>
                    <span className="text-xs font-bold text-amber-500">★★★★★</span>
                  </div>
                  <blockquote className="text-ink font-serif text-base leading-snug font-bold">
                    {review.quote.map((line, index) => (
                      <span key={line} className="block">
                        {index === 0 && "「"}
                        {line}
                        {index === review.quote.length - 1 && "」"}
                      </span>
                    ))}
                  </blockquote>
                  <figcaption className="text-ink-muted mt-2 text-xs font-medium">
                    {review.who}
                  </figcaption>
                </div>

                {/* 実際のGoogleクチコミスクリーンショット（見切れなしで完全表示） */}
                <div className="p-4">
                  <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-gray-50 shadow-inner">
                    <Image
                      src={review.image}
                      alt={`Googleクチコミ実物スクリーンショット: ${review.who}`}
                      width={review.width}
                      height={review.height}
                      className="h-auto w-full object-contain"
                      sizes="(max-width: 640px) 85vw, (max-width: 768px) 48vw, 360px"
                    />
                  </div>
                  <p className="text-ink-muted mt-3 rounded-lg bg-gray-50 p-3 text-xs leading-relaxed">
                    {review.summary}
                  </p>
                </div>
              </figure>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-ink-muted text-xs">
              ※すべてGoogleマップ・店舗公式ページに投稿された実物の口コミ画面です
            </p>
            <a
              href={GOOGLE_MAPS_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand inline-flex items-center gap-1.5 text-xs font-semibold hover:underline"
            >
              <span>Google マップで全250件以上のクチコミを見る</span>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Representative Quote */}
        <motion.div
          variants={fadeUp}
          custom={0.4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-12"
        >
          <div className="flex max-w-3xl flex-col items-center gap-8 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm sm:flex-row">
            <div className="ring-brand/20 relative h-24 w-24 shrink-0 overflow-hidden rounded-full shadow-sm ring-2 sm:h-32 sm:w-32">
              <Image
                src="/images/owner_story.jpg"
                alt="代表 小南 優作"
                fill
                className="object-cover object-[center_15%]"
                sizes="128px"
              />
            </div>
            <blockquote className="text-center sm:text-left">
              <p className="text-ink mb-3 font-serif text-lg leading-relaxed font-bold">
                「食に制限がある方もない方も、同じテーブルで同じデザートを笑顔で囲める——薬院の小さなお店で見てきたそんな『ユメミタイ』な体験を、今度は全国の飲食店様と一緒に広げていきたい。あなたのお店のお客様へ、ぜひこの美味しさを届けてください」
              </p>
              <footer className="text-ink-light font-sans text-sm font-medium">
                — 代表 小南 優作
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
