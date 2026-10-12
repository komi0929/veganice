import Image from "next/image";
import { SectionHeader } from "./ui";

const GOOGLE_MAPS_REVIEWS_URL =
  "https://www.google.com/maps/place/%E3%82%B0%E3%83%AB%E3%83%86%E3%83%B3%E3%83%95%E3%83%AA%E3%83%BC%EF%BC%86100%EF%BC%85%E6%A4%8D%E7%89%A9%E6%80%A7%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%84+Soy+Stories%EF%BC%88vegan%EF%BC%86gluten+free%EF%BC%89/@33.5818211,130.3966611,17z/data=!4m8!3m7!1s0x354191585d44c62f:0xa127c6cfc075e381!8m2!3d33.5818211!4d130.3966611!9m1!1b1!16s%2Fg%2F11r783v2pc?hl=ja";

/* 実在する海外のお客様のGoogleクチコミ（スクリーンショットは実物） */
const reviews = [
  {
    quote: ["ヴィーガンじゃない人にも", "ぜひすすめたい。"],
    who: "Merrick Clay さん",
    tag: "ヴィーガンではない方",
    image: "/images/reviews/google_review_merrick_clay.png",
  },
  {
    quote: ["乳製品なしとは思えない", "クリーミーさ。"],
    who: "Jodi Clay さん",
    tag: "ご家族で来店",
    image: "/images/reviews/google_review_jodi_clay.png",
  },
  {
    quote: ["今まで食べた抹茶で、", "いちばんおいしい！"],
    who: "amanda weidman さん",
    tag: "旅行中に来店",
    image: "/images/reviews/google_review_amanda_weidman.png",
  },
];

/** 実店舗の評価・口コミ。スマホでは横スワイプで省スペースに */
export default function DessertReviewsSection() {
  return (
    <section id="reviews" className="bg-brand-dark overflow-hidden py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          tone="light"
          eyebrow="実店舗での評判"
          lines={["国籍や食習慣を越えて、", "世界中から高い評価。"]}
          lead={[
            "Google ★4.7（240件超）、ヴィーガンガイドHappyCowで満点5.0を獲得。",
            "海外からのヴィーガンのお客様はもちろん、ノンヴィーガンの人でも「乳製品なしとは思えない」「普通のアイスより後味が軽くて好き」と絶賛されています。",
          ]}
        />

        {/* 評価スコア */}
        <div className="mt-8 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white/10 px-4 py-5 text-center">
            <p className="text-3xl font-bold text-white sm:text-4xl">★4.7</p>
            <p className="mt-1 text-xs leading-snug text-white/75">
              Googleの口コミ
              <br />
              240件以上
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
      </div>

      {/* 口コミカード：スマホは横スワイプ、PCは3列 */}
      <div className="no-scrollbar mx-auto mt-8 flex max-w-5xl snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:grid md:grid-cols-3 md:overflow-visible">
        {reviews.map((review) => (
          <figure
            key={review.who}
            className="w-[80%] shrink-0 snap-center overflow-hidden rounded-2xl bg-white md:w-auto"
          >
            <blockquote className="px-5 pt-5">
              <p className="text-sm text-amber-500" aria-label="星5つ">
                ★★★★★
              </p>
              <p className="text-ink mt-2 text-[17px] leading-snug font-bold">
                {review.quote.map((line, index) => (
                  <span key={line} className="block">
                    {index === 0 && "「"}
                    {line}
                    {index === review.quote.length - 1 && "」"}
                  </span>
                ))}
              </p>
            </blockquote>
            <figcaption className="text-ink-muted px-5 pt-2 text-xs">
              {review.who}・{review.tag}
            </figcaption>
            <div className="relative mx-5 mt-4 mb-5 h-44 overflow-hidden rounded-lg border border-gray-100">
              <Image
                src={review.image}
                alt={`Googleの口コミ画面：${review.who}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 80vw, 300px"
              />
            </div>
          </figure>
        ))}
      </div>

      <div className="mx-auto mt-3 flex max-w-5xl items-center justify-between px-6">
        <p className="text-xs text-white/60 md:hidden">← 横にスワイプできます</p>
        <a
          href={GOOGLE_MAPS_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-white underline underline-offset-4"
        >
          Googleマップで口コミを見る ↗
        </a>
      </div>
    </section>
  );
}
