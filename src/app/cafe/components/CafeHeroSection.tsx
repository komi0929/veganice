import Image from "next/image";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

const summaryPoints = [
  "乳・卵・小麦・白砂糖不使用（専用工房製）",
  "4L（1L×4本など）から味を組み合わせて仕入れOK",
  "100mlカップ（60個〜）・店名ロゴOEMも対応",
] as const;

export default function CafeHeroSection() {
  return (
    <section className="bg-bg-white border-b border-stone-200/70 pt-14 pb-10 sm:pt-20 sm:pb-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-5 md:grid-cols-12 md:gap-12 md:px-8">
        <div className="md:col-span-7">
          <p className="text-brand font-sans text-xs font-bold tracking-wide">
            カフェ・ベーカリー・焼き菓子店向け｜業務用クラフトアイス
          </p>

          <h1 className="text-ink mt-2.5 font-serif text-[23px] leading-[1.38] font-bold tracking-tight sm:mt-3.5 sm:text-4xl sm:leading-[1.36] lg:text-[40px]">
            <span className="block">焼き菓子やドーナツ、カフェの一皿に、</span>
            <span className="block">
              <span className="bg-[linear-gradient(transparent_68%,#f9d9e3_68%)]">
                乳・卵・小麦を使わない
              </span>
              アイスを。
            </span>
          </h1>

          <p className="text-ink-light mt-3 font-sans text-[13.5px] leading-[1.7] sm:text-[15px]">
            国産米粉の炊き上げと甘酒・白みそでコクを出した乳脂肪ゼロの植物性アイス。タルトやワッフルの添え、フロート、アフォガートまで素材にこだわるお店の一皿にそのまま合わせられます。
          </p>

          <ul className="mt-3.5 space-y-1.5 sm:mt-4">
            {summaryPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span
                  className="bg-brand inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full font-sans text-[10px] font-bold text-white"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span className="text-ink font-sans text-[13px] font-bold sm:text-[14.5px]">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col items-center sm:mt-6 md:items-start">
            <a
              href="#contact-form"
              className="bg-cta hover:bg-cta-hover inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 font-sans text-[15px] font-bold text-white shadow-[0_6px_20px_rgba(212,112,143,0.3)] transition-colors sm:w-auto sm:px-10 sm:py-4 sm:text-base"
            >
              {WHOLESALE_FACTS.ctaLabel}
              <span aria-hidden="true">→</span>
            </a>
            <p className="text-ink-muted mt-2 text-center font-sans text-[11.5px] sm:text-xs md:text-left">
              6個無料・送料のみ着払い・原則お申し込みの翌日に発送
            </p>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="overflow-hidden rounded-3xl border border-stone-200/80 bg-[#f7f3ec] p-2.5 sm:p-3">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone-100">
              <Image
                src="/images/soystories_icecream02358icecream.jpg"
                alt="SoyStoriesの100mlクラフトアイス実物（苺・抹茶・ほうじ茶・バニラなど）"
                fill
                priority
                sizes="(max-width: 768px) 92vw, 420px"
                className="object-cover object-center"
              />
            </div>
            <p className="text-ink-muted mt-2 px-2 py-1 text-center font-sans text-xs">
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
