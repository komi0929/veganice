import Image from "next/image";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";
import { CtaButton } from "./ui";

const summaryPoints = [
  "乳・卵・小麦・白砂糖不使用（専用工房製）",
  "最小4L（1L角型×4本〜）・1皿約100円〜（税別）",
  "100ml個食カップ（60個〜）・店名ロゴOEMも対応",
] as const;

export default function DessertHeroSection() {
  return (
    <section className="bg-bg-white w-full border-b border-gray-200/70 pt-16 pb-10 sm:pt-20 sm:pb-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-5 md:grid-cols-12 md:gap-12 md:px-8">
        {/* テキスト */}
        <div className="md:col-span-7">
          <p className="text-brand text-xs font-bold tracking-wide">
            レストラン・定食・カフェ・菓子店向け｜業務用クラフトアイス
          </p>

          <h1 className="text-ink mt-2.5 font-bold tracking-tight sm:mt-3.5">
            <span className="block text-[23px] leading-[1.38] sm:text-4xl sm:leading-[1.36] lg:text-[40px]">
              「
              <span className="bg-[linear-gradient(transparent_62%,#f9d9e3_62%)]">
                普通のアイスより美味しい
              </span>
              」と
            </span>
            <span className="mt-1 block text-[22px] leading-[1.38] sm:text-4xl sm:leading-[1.36] lg:text-[40px]">
              選ばれる、業務用クラフトアイス。
            </span>
          </h1>

          <p className="text-ink-light mt-3 text-[13.5px] leading-[1.7] sm:text-[15px]">
            国産米粉を炊き上げて甘酒・白みそでコクを出した、乳脂肪ゼロで後味すっきりの植物性クラフトアイス。定食・コースの食後から、カフェ・焼き菓子添えまで幅広くお使いいただけます。
          </p>

          <ul className="mt-3.5 space-y-1.5 sm:mt-4">
            {summaryPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span
                  className="bg-brand inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span className="text-ink text-[13px] font-bold sm:text-[14.5px]">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col items-center sm:mt-6 md:items-start">
            <CtaButton href="#contact-form" />
          </div>
        </div>

        {/* 写真 */}
        <div className="md:col-span-5">
          <div className="overflow-hidden rounded-3xl border border-gray-200/80 bg-[#f7f3ec] p-2.5 sm:p-3">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone-100">
              <Image
                src="/images/hero_craft_gelato.jpg"
                alt="素材を活かしたSoyStoriesの業務用クラフトアイス全種"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 92vw, 420px"
              />
            </div>
            <p className="text-ink-muted mt-2 px-2 py-1 text-center text-xs">
              福岡・薬院の直営店：
              <strong className="text-ink ml-1">
                Google {WHOLESALE_FACTS.googleRating}（{WHOLESALE_FACTS.googleReviewCount}）・
                HappyCow {WHOLESALE_FACTS.happyCowRating}
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
