import Image from "next/image";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";
import { CtaButton } from "./ui";

const trustStats = [
  {
    value: WHOLESALE_FACTS.googleRating,
    label: `Googleの口コミ\n${WHOLESALE_FACTS.googleReviewCount}`,
  },
  { value: WHOLESALE_FACTS.happyCowRating, label: "HappyCow\n海外の口コミ" },
  { value: "4L〜", label: "1L角型×4本から\n少量仕入れOK" },
];

const sceneTags = [
  "乳・卵・小麦・白砂糖不使用",
  "定食・コースの食後に",
  "フロート・パフェに",
  "ドーナツ・焼き菓子添えに",
];

export default function DessertHeroSection() {
  return (
    <section className="bg-bg-white w-full pt-16 sm:pt-[72px]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 md:items-center md:gap-12 md:px-8 md:py-12">
        {/* 写真 */}
        <div className="relative md:order-2">
          <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[4/5] md:rounded-3xl">
            <Image
              src="/images/hero_flagship.jpg"
              alt="ワッフルカップに盛り付けたSoyStoriesの抹茶といちごのクラフトアイス"
              fill
              priority
              className="object-cover object-[center_62%]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute right-4 -bottom-5 flex items-center gap-2.5 rounded-2xl bg-white p-2 pr-4 shadow-lg md:right-auto md:-bottom-5 md:-left-6">
            <div className="relative h-11 w-11 overflow-hidden rounded-xl">
              <Image
                src="/images/bulk_1l.jpg"
                alt="省スペースな1L・2L角型バルク容器"
                fill
                className="object-cover"
                sizes="44px"
              />
            </div>
            <p className="text-ink text-[11.5px] leading-snug font-bold">
              1L・2Lバルク（4L〜）
              <br />
              <span className="text-ink-muted text-[10.5px] font-normal">
                持ち帰り用100mlカップ（60個〜）も対応
              </span>
            </p>
          </div>
        </div>

        {/* テキスト */}
        <div className="px-6 pt-7 pb-10 md:order-1 md:px-0 md:py-0">
          <p className="text-brand text-xs font-bold tracking-wide">
            <span className="inline-block">福岡・薬院の植物性スイーツ専門店</span>
            <span className="mx-1.5 opacity-40">｜</span>
            <span className="inline-block">乳・卵・小麦フリーの専用工房製</span>
          </p>

          <h1 className="text-ink mt-2.5 font-bold tracking-tight">
            <span className="text-brand mb-1 block text-xs font-bold sm:text-base">
              レストラン・定食の食後に。カフェや焼き菓子店の一品にも。
            </span>
            <span className="block text-[22px] leading-snug sm:text-4xl md:text-[42px]">
              「
              <span className="bg-[linear-gradient(transparent_62%,#f9d9e3_62%)]">
                普通のアイスより美味しい
              </span>
              」と
            </span>
            <span className="mt-1 block text-[20px] leading-snug sm:text-4xl md:text-[40px]">
              選ばれる、業務用クラフトアイス。
            </span>
          </h1>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {sceneTags.map((tag, idx) => (
              <span
                key={tag}
                className={
                  idx === 0
                    ? "bg-brand/10 text-brand rounded-full px-3 py-1 text-xs font-bold"
                    : "text-ink-light rounded-full border border-gray-200 bg-[#f7f3ec] px-2.5 py-1 text-[11.5px] font-bold"
                }
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-ink-light mt-3.5 text-[14px] leading-[1.75] sm:text-[15px]">
            定食やコースの食後デザート、カフェのフロート、焼き菓子の添えアイスに。
            <strong className="text-ink">ヴィーガンではないお客様からも選ばれる専門店の味</strong>
            をお届けします。
          </p>

          <div className="mt-5 md:flex md:justify-start">
            <CtaButton href="#contact-form" />
          </div>

          <dl className="mt-6 grid grid-cols-3 divide-x divide-gray-200 border-t border-gray-100 pt-4">
            {trustStats.map((stat) => (
              <div key={stat.value} className="px-2 text-center first:pl-0 last:pr-0">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-ink text-xl font-bold tracking-tight sm:text-2xl">
                  {stat.value}
                </dd>
                <dd className="text-ink-muted mt-1 text-[10.5px] leading-snug whitespace-pre-line sm:text-xs">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
