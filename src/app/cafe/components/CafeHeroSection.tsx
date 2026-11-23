import PhotoSlot from "@/app/components/wholesale/PhotoSlot";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

const HERO_CAFE_PLATE_PHOTO_SRC: string | null = "/images/hero_flagship.jpg";

const summaryPoints = [
  "卵・乳・小麦を持ち込まない専用工房製（白砂糖不使用）",
  "最小4L（1L×4本など）から味を組み合わせて仕入れOK",
  "100ml個食カップ（60個〜）・開発費0円の店名ロゴOEMも対応",
] as const;

export default function CafeHeroSection() {
  return (
    <section className="bg-bg-white border-b border-stone-200/70 pt-14 pb-10 sm:pt-20 sm:pb-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-5 md:grid-cols-12 md:gap-10 md:px-8">
        <div className="md:col-span-7">
          <p className="text-brand inline-flex flex-wrap items-center gap-x-2 gap-y-0.5 font-sans text-[11.5px] font-bold tracking-wide sm:text-xs">
            <span>カフェ・ベーカリー・菓子店向け</span>
            <span className="opacity-40" aria-hidden="true">
              ｜
            </span>
            <span>業務用 植物性クラフトアイス</span>
          </p>

          <h1 className="text-ink mt-2.5 font-serif text-[22px] leading-[1.42] font-bold tracking-tight sm:mt-3.5 sm:text-4xl sm:leading-[1.38] lg:text-[40px]">
            <span className="block">焼き菓子やドーナツ、カフェの一皿に、</span>
            <span className="block">
              <span className="bg-[linear-gradient(transparent_68%,#f9d9e3_68%)]">
                乳・卵・小麦を使わない
              </span>
            </span>
            <span className="block">濃密なクラフトアイスを。</span>
          </h1>

          <p className="text-ink-light mt-3 font-sans text-[13.5px] leading-[1.75] sm:mt-3.5 sm:text-[15px]">
            温かいタルトにとろりと絡む濃厚バニラから、深煎り珈琲のアフォガート、完熟果実のフロートまで。
          </p>

          <ul className="mt-4 space-y-2 rounded-2xl border border-stone-200/80 bg-[#fafaf8] px-4 py-3 sm:mt-4 sm:px-5 sm:py-3.5">
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
            <PhotoSlot
              src={HERO_CAFE_PLATE_PHOTO_SRC}
              alt="米粉ワッフルに添えたSoyStoriesの植物性クラフトアイス"
              aspectClassName="aspect-[16/9] md:aspect-[4/3]"
              objectPositionClassName="object-cover object-[center_62%]"
              priority
            />

            <div className="mt-2.5 flex flex-col gap-1.5 rounded-2xl bg-white px-3.5 py-2.5 sm:flex-row sm:items-center sm:justify-between md:flex-col md:items-start lg:flex-row lg:items-center">
              <div className="min-w-0">
                <p className="text-ink font-sans text-xs leading-tight font-bold">
                  1L・2L 角型バルク
                </p>
                <p className="text-ink-muted mt-0.5 font-sans text-[11px] leading-tight">
                  50ml 約100円〜・最小4L〜
                </p>
              </div>
              <div className="border-t border-stone-200 pt-1.5 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-3 sm:text-right md:border-t md:border-l-0 md:pt-1.5 md:pl-0 md:text-left lg:border-t-0 lg:border-l lg:pt-0 lg:pl-3 lg:text-right">
                <p className="text-brand font-sans text-[11px] leading-tight font-bold">
                  Google {WHOLESALE_FACTS.googleRating}・HappyCow {WHOLESALE_FACTS.happyCowRating}
                </p>
                <p className="text-ink-muted mt-0.5 font-sans text-[10px] leading-tight">
                  全11種・100mlカップも可
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
