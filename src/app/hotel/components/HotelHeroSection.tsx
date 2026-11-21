import Image from "next/image";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

const summaryPoints = [
  {
    main: "ヴィーガン・グルテンフリーに1つで対応",
    sub: "乳・卵・小麦フリーの専用工房（アレルギーも安心）",
  },
  {
    main: "海外ゲストが絶賛する和素材・果実11種",
    sub: `HappyCow ${WHOLESALE_FACTS.happyCowRating}満点・Google ${WHOLESALE_FACTS.googleRating}（${WHOLESALE_FACTS.googleReviewCount}）`,
  },
  {
    main: "盛り付けるだけ・冷凍保存・1人分 約100円〜",
    sub: "50mlで盛った場合・税別（1L 2,000円÷約20杯）",
  },
] as const;

export default function HotelHeroSection() {
  return (
    <section className="bg-bg-white border-b border-stone-200/70 pt-14 pb-10 sm:pt-20 sm:pb-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-5 md:grid-cols-12 md:gap-10 md:px-8">
        {/* テキスト・3行・CTA（スマホ375pxの最初の1画面に収まる構成） */}
        <div className="md:col-span-7">
          <p className="text-brand inline-flex flex-wrap items-center gap-x-2 gap-y-0.5 font-sans text-[11.5px] font-bold tracking-wide sm:text-xs">
            <span>ホテル・旅館・婚礼宴会・コース料理店向け</span>
            <span className="opacity-40" aria-hidden="true">
              ｜
            </span>
            <span>インバウンド・多様な食対応の業務用アイス</span>
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

          <ul className="mt-3.5 space-y-2 rounded-2xl border border-stone-200/80 bg-[#fafaf8] px-3.5 py-3 sm:mt-5 sm:space-y-2.5 sm:px-5 sm:py-4">
            {summaryPoints.map((point) => (
              <li key={point.main} className="flex items-start gap-2">
                <span
                  className="bg-brand mt-[3px] inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full font-sans text-[10px] font-bold text-white"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span className="font-sans text-[13px] leading-snug text-stone-800 sm:text-[15px]">
                  <strong className="text-ink block font-bold">{point.main}</strong>
                  <span className="text-ink-muted mt-0.5 block text-[11px] font-normal sm:text-xs">
                    {point.sub}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col items-center sm:mt-6 md:items-start">
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

        {/* 右ビジュアル：洋コース盛り＆和食会席盛りの実写2点＋業務用1L・2L容器＋海外口コミ評価 */}
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

            {/* 業務用1L・2L容器＋HappyCow / Google 評価バッジ */}
            <div className="mt-2.5 flex items-center justify-between gap-2 rounded-2xl bg-white px-3 py-2.5">
              <div className="flex min-w-0 items-center gap-2.5">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-stone-100">
                  <Image
                    src="/images/bulk_2l.jpg"
                    alt="業務用1L・2L角型バルク容器"
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
                    最小4L〜・味組み合わせ自由
                  </p>
                </div>
              </div>
              <div className="border-l border-stone-200 pl-2.5 text-right">
                <p className="text-brand font-sans text-[11px] leading-tight font-bold whitespace-nowrap sm:text-xs">
                  HappyCow {WHOLESALE_FACTS.happyCowRating}
                </p>
                <p className="text-ink-muted mt-0.5 font-sans text-[10px] leading-tight whitespace-nowrap">
                  Google {WHOLESALE_FACTS.googleRating}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
