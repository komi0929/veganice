import Image from "next/image";
import PhotoSlot from "@/app/components/wholesale/PhotoSlot";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

/** ケーキ・ワッフル横添えの皿盛り写真が撮れたらパスを差し替える（現在は実写「米粉ワッフルアイス」を表示） */
const HERO_CAFE_PLATE_PHOTO_SRC: string | null = "/images/hero_flagship.jpg";

const summaryPoints = [
  "卵・乳・小麦を持ち込まない専用工房",
  "4L（1L×4など）から味を組み合わせて",
  "盛るだけ・仕込みなし",
] as const;

export default function CafeHeroSection() {
  return (
    <section className="bg-bg-white border-b border-stone-200/70 pt-14 pb-10 sm:pt-20 sm:pb-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-5 md:grid-cols-12 md:gap-10 md:px-8">
        {/* テキスト・3行・CTA（スマホ375pxの最初の1画面に収まる構成） */}
        <div className="md:col-span-7">
          <p className="text-brand inline-flex flex-wrap items-center gap-x-2 gap-y-0.5 font-sans text-[11.5px] font-bold tracking-wide sm:text-xs">
            <span>カフェ・ベーカリー・菓子店向け</span>
            <span className="opacity-40" aria-hidden="true">
              ｜
            </span>
            <span>業務用 植物性クラフトアイス（1L・2L）</span>
          </p>

          <h1 className="text-ink mt-2.5 font-serif text-[22px] leading-[1.42] font-bold tracking-tight sm:mt-3.5 sm:text-4xl sm:leading-[1.38] lg:text-[42px]">
            <span className="block">ケーキやワッフルの横に、</span>
            <span className="block">
              <span className="bg-[linear-gradient(transparent_68%,#f9d9e3_68%)]">
                乳・卵・小麦を使わない
              </span>
            </span>
            <span className="block">アイスを。</span>
          </h1>

          <ul className="mt-4 space-y-2 rounded-2xl border border-stone-200/80 bg-[#fafaf8] px-4 py-3.5 sm:mt-5 sm:space-y-2.5 sm:px-5 sm:py-4">
            {summaryPoints.map((point) => (
              <li key={point} className="flex items-baseline gap-2.5">
                <span
                  className="bg-brand relative top-[-1px] inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full font-sans text-[10px] font-bold text-white"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <strong className="text-ink font-sans text-[14px] leading-snug font-bold sm:text-base">
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

        {/* 右ビジュアル：薬院店の実写＋業務用1L・2L容器＆1杯原価目安＋口コミ評価 */}
        <div className="md:col-span-5">
          <div className="overflow-hidden rounded-3xl border border-stone-200/80 bg-[#f7f3ec] p-2.5 shadow-2xs sm:p-3">
            <PhotoSlot
              src={HERO_CAFE_PLATE_PHOTO_SRC}
              alt="米粉ワッフルに盛り付けたSoyStoriesの抹茶とミックスベリーのクラフトアイス"
              aspectClassName="aspect-[16/9] md:aspect-[4/3]"
              objectPositionClassName="object-cover object-[center_62%]"
              priority
            />

            <div className="mt-2.5 flex items-center justify-between gap-2.5 rounded-2xl bg-white px-3 py-2.5">
              <div className="flex items-center gap-2.5">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-stone-100">
                  <Image
                    src="/images/bulk_1l.jpg"
                    alt="業務用1L角型バルク容器"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-ink font-sans text-xs leading-tight font-bold whitespace-nowrap">
                    業務用 1L・2L角型容器
                  </p>
                  <p className="text-ink-muted mt-0.5 font-sans text-[10.5px] leading-tight whitespace-nowrap sm:text-[11px]">
                    50ml 約100円〜・白砂糖不使用
                  </p>
                </div>
              </div>
              <div className="border-l border-stone-200 pl-2.5 text-right">
                <p className="text-brand font-sans text-xs leading-tight font-bold whitespace-nowrap">
                  Google {WHOLESALE_FACTS.googleRating}
                </p>
                <p className="text-ink-muted mt-0.5 font-sans text-[10px] leading-tight whitespace-nowrap">
                  {WHOLESALE_FACTS.googleReviewCount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
