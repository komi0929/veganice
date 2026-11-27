import Image from "next/image";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

const summaryPoints = [
  "乳・卵・小麦・白砂糖不使用（専用工房製）でどのお客様にも同じ一皿",
  "抹茶・ほうじ茶・UMAMIバニラ・国産りんご・ももなど和洋11種",
  "定期発注なし・4Lから必要な時だけ・1人分 約100円（50ml・税別）",
] as const;

export default function HotelHeroSection() {
  return (
    <section className="bg-bg-white border-b border-stone-200/70 pt-14 pb-9 sm:pt-20 sm:pb-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-5 px-5 md:grid-cols-12 md:gap-10 md:px-8">
        <div className="md:col-span-7">
          <p className="text-brand inline-flex flex-wrap items-center gap-x-2 gap-y-0.5 font-sans text-[11px] font-bold tracking-wide sm:text-xs">
            <span>旅館・ホテル・オーベルジュ・婚礼会場向け</span>
            <span className="opacity-40" aria-hidden="true">
              ｜
            </span>
            <span>業務用 植物性クラフトアイス</span>
          </p>

          <h1 className="text-ink mt-2 font-serif text-[21.5px] leading-[1.38] font-bold tracking-tight sm:mt-3.5 sm:text-4xl sm:leading-[1.38] lg:text-[40px]">
            <span className="block">海外のヴィーガンのお客様にも、</span>
            <span className="block">
              <span className="bg-[linear-gradient(transparent_68%,#e6efe8_68%)]">
                皆さんと同じ締めの甘味
              </span>
              を。
            </span>
          </h1>

          <p className="text-ink-light mt-2.5 font-sans text-[13px] leading-[1.65] sm:mt-3.5 sm:text-[15px] sm:leading-[1.8]">
            夕食の水菓子が果物だけになりがちな日にも、会席の最後に一皿。ヴィーガンを掲げていないお宿でも、食制限の有無を問わずどのお客様にも同じ甘味をお出しいただけます。
          </p>

          <ul className="mt-3 space-y-1.5 rounded-2xl border border-stone-200/80 bg-[#fafaf8] px-3.5 py-2.5 sm:mt-4 sm:space-y-2 sm:px-5 sm:py-3.5">
            {summaryPoints.map((point) => (
              <li key={point} className="flex items-baseline gap-2">
                <span
                  className="bg-brand relative top-[-1px] inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full font-sans text-[10px] font-bold text-white"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <strong className="text-ink font-sans text-[12.5px] leading-snug font-bold sm:text-[14.5px]">
                  {point}
                </strong>
              </li>
            ))}
          </ul>

          <div className="mt-3.5 flex flex-col items-center sm:mt-5 md:items-start">
            <a
              href="#contact-form"
              className="bg-cta hover:bg-cta-hover inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 font-sans text-[15px] font-bold text-white shadow-[0_6px_20px_rgba(212,112,143,0.32)] transition-colors sm:w-auto sm:px-10 sm:py-4 sm:text-base"
            >
              {WHOLESALE_FACTS.ctaLabel}
              <span aria-hidden="true">→</span>
            </a>
            <p className="text-ink-muted mt-1.5 text-center font-sans text-[11px] sm:mt-2 sm:text-xs md:text-left">
              {WHOLESALE_FACTS.ctaCaption}・原則お申し込みの翌日に発送（電話営業なし）
            </p>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="overflow-hidden rounded-3xl border border-stone-200/80 bg-[#f7f3ec] p-2.5 shadow-2xs sm:p-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200 md:aspect-[4/5]">
                <Image
                  src="/images/serving/serving_monaka.jpg"
                  alt="和の黒皿に盛り付けた会席の水菓子・締めの甘味例"
                  fill
                  priority
                  sizes="(max-width: 768px) 46vw, 24vw"
                  className="object-cover object-[center_72%]"
                />
                <span className="backdrop-blur-2xs absolute right-2 bottom-2 left-2 rounded-lg bg-black/65 px-2 py-1 text-center font-sans text-[10px] font-bold text-white sm:text-[11px]">
                  会席の水菓子・甘味例
                </span>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200 md:aspect-[4/5]">
                <Image
                  src="/images/serving/serving_affogato.jpg"
                  alt="ガラス器に盛り付けた洋コース・ドルチェの提供例"
                  fill
                  priority
                  sizes="(max-width: 768px) 46vw, 24vw"
                  className="object-cover object-center"
                />
                <span className="backdrop-blur-2xs absolute right-2 bottom-2 left-2 rounded-lg bg-black/65 px-2 py-1 text-center font-sans text-[10px] font-bold text-white sm:text-[11px]">
                  洋コース・ドルチェ例
                </span>
              </div>
            </div>

            <div className="mt-2.5 flex flex-col gap-1.5 rounded-2xl bg-white px-3.5 py-2.5 sm:flex-row sm:items-center sm:justify-between md:flex-col md:items-start lg:flex-row lg:items-center">
              <div className="min-w-0">
                <p className="text-ink font-sans text-xs leading-tight font-bold">
                  定期発注なし・最小4L〜
                </p>
                <p className="text-ink-muted mt-0.5 font-sans text-[11px] leading-tight">
                  1L・2Lバルク ／ 100mlカップ60個〜
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
