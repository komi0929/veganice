import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";
import PhotoSlot from "@/app/components/wholesale/PhotoSlot";

/** 撮影後に画像パス（例: "/images/ryokan/hero_kaiseki.jpg"）を入れると自動で写真表示に切り替わる */
const HERO_KAISEKI_PHOTO_SRC: string | null = null;

const summaryPoints = [
  {
    main: "卵・乳・小麦を持ち込まない専用工房",
    sub: null,
  },
  {
    main: "盛り付けるだけ・冷凍で保存",
    sub: null,
  },
  {
    main: "1人分 約100円から",
    sub: "50mlで盛った場合・税別（1L 2,000円÷約20杯）",
  },
] as const;

export default function RyokanHeroSection() {
  return (
    <section className="bg-bg-white border-b border-stone-200/70 pt-14 pb-10 sm:pt-20 sm:pb-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-5 md:grid-cols-12 md:gap-12 md:px-8">
        {/* テキスト・3行・CTA（スマホ375pxの最初の1画面に収まる構成） */}
        <div className="md:col-span-7">
          <p className="text-brand inline-flex flex-wrap items-center gap-x-2 gap-y-0.5 font-sans text-[11.5px] font-bold tracking-wide sm:text-xs">
            <span>旅館・ホテル・会席料理店向け</span>
            <span className="opacity-40" aria-hidden="true">
              ｜
            </span>
            <span>業務用 植物性クラフトアイス（1L・2L）</span>
          </p>

          <h1 className="text-ink mt-2.5 font-serif text-[22px] leading-[1.42] font-bold tracking-tight sm:mt-3.5 sm:text-4xl sm:leading-[1.38] lg:text-[42px]">
            <span className="block">会席の最後の一皿に、</span>
            <span className="block">アレルギーのお客様にも</span>
            <span className="block">
              <span className="bg-[linear-gradient(transparent_68%,#e6efe8_68%)]">
                同じデザート
              </span>
              を。
            </span>
          </h1>

          <ul className="mt-4 space-y-2 rounded-2xl border border-stone-200/80 bg-[#fafaf8] px-4 py-3.5 sm:mt-6 sm:space-y-2.5 sm:px-5 sm:py-4">
            {summaryPoints.map((point) => (
              <li key={point.main} className="flex items-baseline gap-2.5">
                <span
                  className="bg-brand relative top-[-1px] inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full font-sans text-[10px] font-bold text-white"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span className="font-sans text-[14px] leading-snug text-stone-800 sm:text-base">
                  <strong className="text-ink font-bold">{point.main}</strong>
                  {point.sub && (
                    <span className="text-ink-muted ml-1.5 block text-[11px] font-normal sm:inline sm:text-xs">
                      {point.sub}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col items-center sm:mt-7 md:items-start">
            <a
              href="#contact-form"
              className="bg-cta hover:bg-cta-hover inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 font-sans text-[15px] font-bold text-white shadow-[0_6px_20px_rgba(212,112,143,0.32)] transition-colors sm:w-auto sm:px-10 sm:py-4 sm:text-base"
            >
              {WHOLESALE_FACTS.ctaLabel}
              <span aria-hidden="true">→</span>
            </a>
            <p className="text-ink-muted mt-2 text-center font-sans text-[11.5px] sm:text-xs md:text-left">
              {WHOLESALE_FACTS.ctaCaption}
            </p>
          </div>
        </div>

        {/* 写真（和の器に小さく盛ったアイス：撮影後に差し替え） */}
        <div className="md:col-span-5">
          <PhotoSlot
            src={HERO_KAISEKI_PHOTO_SRC}
            alt="和の小鉢に小さく盛り付けたSoyStoriesの植物性クラフトアイス"
            placeholderLabel="和の器に小さく盛ったアイス（約50ml）"
            placeholderSub="会席・水菓子の一皿イメージ（実写撮影枠）"
            aspectClassName="aspect-[16/9] md:aspect-[4/3]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
