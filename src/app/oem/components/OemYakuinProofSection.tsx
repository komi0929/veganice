import Image from "next/image";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

const CURATED_REVIEWS = [
  {
    quote: "食事制限はないけれど、今まで食べたアイスの中で一番バランスが良くて美味しかった。",
    who: "Cristina Paulo さん",
    tag: "ヴィーガンではないお客様・夕食後に来店",
    image: "/images/reviews/google_review_cristina_paulo.png",
    width: 402,
    height: 434,
  },
  {
    quote: "今まで食べた中で最高。世界中で食べたどんな乳製品よりも美味しい。",
    who: "Shannon Barkley-Nakajima さん",
    tag: "海外から来店のお客様",
    image: "/images/reviews/google_review_shannon_barkley.png",
    width: 402,
    height: 497,
  },
  {
    quote: "豆乳で作られているなんて全く気づかない。絶品すぎて2回も食べてしまいました。",
    who: "Poonam Parekh さん",
    tag: "グルテンを控えているお客様・再来店",
    image: "/images/reviews/google_review_poonam_parekh.png",
    width: 402,
    height: 539,
  },
] as const;

export default function OemYakuinProofSection() {
  return (
    <section
      id="story"
      className="scroll-mt-16 border-y border-gray-200/70 bg-[#faf8f4] py-12 sm:py-16"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-brand mb-2 inline-flex items-center gap-2 text-xs font-bold tracking-wide">
              <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
              福岡の直営店実績と原点
            </p>
            <h2 className="text-ink text-xl leading-snug font-bold tracking-tight sm:text-2xl">
              「制限がある方もない方も、同じテーブルで同じデザートを」
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-bold">
            <span className="text-brand rounded-full border border-gray-200 bg-white px-3 py-1">
              Google {WHOLESALE_FACTS.googleRating}（{WHOLESALE_FACTS.googleReviewCount}）
            </span>
            <span className="text-brand rounded-full border border-gray-200 bg-white px-3 py-1">
              HappyCow {WHOLESALE_FACTS.happyCowRating}
            </span>
            <span className="text-ink-light rounded-full border border-gray-200 bg-white px-3 py-1">
              福岡市公式ガイド掲載
            </span>
          </div>
        </div>

        {/* 直営店の原点＋子どもエピソード＋代表メッセージ */}
        <div className="mt-6 grid grid-cols-1 items-start gap-6 rounded-2xl border border-gray-200/80 bg-white p-4 shadow-2xs sm:p-6 md:grid-cols-12">
          <div className="space-y-2.5 md:col-span-5">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gray-100">
              <Image
                src="/images/store_actual.png"
                alt="福岡の実店舗 SoyStories"
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover"
              />
              <span className="absolute bottom-2 left-2 rounded-md bg-black/65 px-2 py-0.5 text-[11px] font-bold text-white">
                福岡の実店舗「SoyStories」
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src="/images/craft_moment.jpg"
                  alt="福岡の直営店での仕込みと接客の様子"
                  fill
                  sizes="(max-width: 768px) 48vw, 180px"
                  className="object-cover object-[center_35%]"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src="/images/child_first_icecream.jpg"
                  alt="初めてクラフトアイスを食べる子ども"
                  fill
                  sizes="(max-width: 768px) 48vw, 180px"
                  className="object-cover object-[center_45%]"
                />
              </div>
            </div>
          </div>

          <div className="space-y-3 md:col-span-7">
            <p className="text-ink-light text-xs leading-relaxed sm:text-sm">
              福岡の直営店で磨いた乳・卵・小麦・白砂糖不使用の製法を、全国のお店向けに専用工房から小ロットでお届けしています。ヴィーガンではないお客様からも「普通のアイスより好き」と支持され、「はじめて子どもにアイスを食べさせることができた」というお母さんの笑顔が原点です。
            </p>
            <div className="flex items-center gap-3.5 rounded-xl bg-[#f7f3ec] p-3.5">
              <div className="ring-brand/20 relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2">
                <Image
                  src="/images/owner_story.jpg"
                  alt="株式会社ヒトコト 代表 小南優作"
                  fill
                  sizes="56px"
                  className="object-cover object-[center_15%]"
                />
              </div>
              <div className="text-xs leading-relaxed">
                <p className="text-ink font-bold">
                  「食に制限がある方もない方も、同じテーブルで同じデザートを笑顔で囲める。福岡の小さなお店で見てきたその光景を、全国のお店と一緒に広げていきたいと思っています。」
                </p>
                <p className="text-ink-muted mt-1">株式会社ヒトコト（SoyStories）代表 小南優作</p>
              </div>
            </div>
          </div>
        </div>

        {/* Googleマップ実物口コミ 3選 */}
        <div className="mt-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-ink text-xs font-bold sm:text-sm">
              福岡の直営店に届いたGoogleマップ実物口コミ（食事制限の有無を問わず高評価）
            </p>
            <a
              href={WHOLESALE_FACTS.googleMapsReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand text-xs font-bold underline underline-offset-4 hover:opacity-80"
            >
              Googleマップで全{WHOLESALE_FACTS.googleReviewCount}を見る ↗
            </a>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-3">
            {CURATED_REVIEWS.map((review) => (
              <figure
                key={review.who}
                className="flex flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-4 shadow-2xs"
              >
                <blockquote className="text-ink text-xs leading-relaxed font-bold sm:text-[13px]">
                  <span className="mr-1.5 text-amber-500" aria-label="星5つ">
                    ★★★★★
                  </span>
                  「{review.quote}」
                </blockquote>
                <figcaption className="text-ink-muted mt-1.5 text-[11px]">
                  {review.who}・{review.tag}
                </figcaption>
                <div className="mt-3 overflow-hidden rounded-xl border border-gray-200 bg-white">
                  <Image
                    src={review.image}
                    alt={`Googleマップ口コミ：${review.who}`}
                    width={review.width}
                    height={review.height}
                    className="h-auto w-full object-contain"
                    sizes="(max-width: 768px) 92vw, 310px"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
