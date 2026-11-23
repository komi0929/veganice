import Image from "next/image";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

const summaryPoints = [
  "ヴィーガン・グルテンフリー・乳卵小麦アレルギーに1つで対応",
  "会席やコース後も軽やかに締まる抹茶・国産白桃・濃厚ショコラなど全11種",
  "別仕込み不要・冷凍常備OK・1人分 約100円〜（50ml・税別）",
] as const;

export default function HotelHeroSection() {
  return (
    <section className="bg-bg-white border-b border-stone-200/70 pt-14 pb-10 sm:pt-20 sm:pb-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-5 md:grid-cols-12 md:gap-10 md:px-8">
        <div className="md:col-span-7">
          <p className="text-brand inline-flex flex-wrap items-center gap-x-2 gap-y-0.5 font-sans text-[11.5px] font-bold tracking-wide sm:text-xs">
            <span>ホテル・旅館・婚礼宴会・コース料理店向け</span>
            <span className="opacity-40" aria-hidden="true">
              ｜
            </span>
            <span>業務用 植物性クラフトアイス</span>
          </p>

          <h1 className="text-ink mt-2.5 font-serif text-[22px] leading-[1.4] font-bold tracking-tight sm:mt-3.5 sm:text-4xl sm:leading-[1.38] lg:text-[40px]">
            <span className="block">会席やコースの最後の一皿に、</span>
            <span className="block">海外のお客様にも喜ばれる</span>
            <span className="block">
              <span className="bg-[linear-gradient(transparent_68%,#e6efe8_68%)]">
                みんなと同じデザート
              </span>
              を。
            </span>
          </h1>

          <ul className="mt-4 space-y-2 rounded-2xl border border-stone-200/80 bg-[#fafaf8] px-4 py-3 sm:mt-5 sm:px-5 sm:py-3.5">
            {summaryPoints.map((point) => (
              <li key={point} className="flex items-baseline gap-2.5">
                <span
                  className="bg-brand relative top-[-1px] inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full font-sans text-[10px] font-bold text-white"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <strong className="text-ink font-sans text-[13.5px] leading-snug font-bold sm:text-[15px]">
                  {point}
                </strong>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col items-center sm:mt-6 md:items-start">
            <a
              href="#contact-form"
              className="bg-cta hover:bg-cta-hover inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 font-sans text-[15px] font-bold text-white shadow-[0_6px_20px_rgba(212,112,143,0.32)] transition-colors sm:w-auto sm:px-10 sm:py-4 sm:text-base"
            >
              {WHOLESALE_FACTS.ctaLabel}
              <span aria-hidden="true">→</span>
            </a>
            <p className="text-ink-muted mt-2 text-center font-sans text-[11.5px] sm:text-xs md:text-left">
              {WHOLESALE_FACTS.ctaCaption}（電話営業なし）
            </p>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="overflow-hidden rounded-3xl border border-stone-200/80 bg-[#f7f3ec] p-2.5 shadow-2xs sm:p-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200 md:aspect-[4/5]">
                <Image
                  src="/images/serving/serving_affogato.jpg"
                  alt="ガラス器に盛り付けたホテル・洋食コース向けの提供例"
                  fill
                  priority
                  sizes="(max-width: 768px) 46vw, 24vw"
                  className="object-cover object-center"
                />
                <span className="backdrop-blur-2xs absolute right-2 bottom-2 left-2 rounded-lg bg-black/65 px-2 py-1 text-center font-sans text-[10px] font-bold text-white sm:text-[11px]">
                  洋コース・ドルチェ例
                </span>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200 md:aspect-[4/5]">
                <Image
                  src="/images/serving/serving_monaka.jpg"
                  alt="和の黒皿に盛り付けた会席・和食向けの提供例"
                  fill
                  priority
                  sizes="(max-width: 768px) 46vw, 24vw"
                  className="object-cover object-[center_72%]"
                />
                <span className="backdrop-blur-2xs absolute right-2 bottom-2 left-2 rounded-lg bg-black/65 px-2 py-1 text-center font-sans text-[10px] font-bold text-white sm:text-[11px]">
                  和食・会席の甘味例
                </span>
              </div>
            </div>

            <div className="mt-2.5 flex flex-col gap-1.5 rounded-2xl bg-white px-3.5 py-2.5 sm:flex-row sm:items-center sm:justify-between md:flex-col md:items-start lg:flex-row lg:items-center">
              <div className="min-w-0">
                <p className="text-ink font-sans text-xs leading-tight font-bold">
                  1L・2L 角型バルク
                </p>
                <p className="text-ink-muted mt-0.5 font-sans text-[11px] leading-tight">
                  最小4L〜・味ミックス自由
                </p>
              </div>
              <div className="border-t border-stone-200 pt-1.5 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-3 sm:text-right md:border-t md:border-l-0 md:pt-1.5 md:pl-0 md:text-left lg:border-t-0 lg:border-l lg:pt-0 lg:pl-3 lg:text-right">
                <p className="text-brand font-sans text-[11px] leading-tight font-bold">
                  HappyCow {WHOLESALE_FACTS.happyCowRating}満点
                </p>
                <p className="text-ink-muted mt-0.5 font-sans text-[10px] leading-tight">
                  Google {WHOLESALE_FACTS.googleRating}（{WHOLESALE_FACTS.googleReviewCount}）
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
