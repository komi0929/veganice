import Link from "next/link";

export type OemBannerContext = "general" | "dessert" | "hotel" | "cafe";

interface OemCrossLinkBannerProps {
  context?: OemBannerContext;
}

const COPY_BY_CONTEXT: Record<
  OemBannerContext,
  { eyebrow: string; heading: string; description: string }
> = {
  general: {
    eyebrow: "オリジナル開発・店名ロゴ入りカップ製造（OEM）のご案内",
    heading: "お店の食材やロゴを使った「小ロットOEM（60個／6L〜）」も承っています",
    description:
      "定番11種のフタをお店ロゴに変える「開発費0円プラン」と、お店の食材から専用レシピをつくる「オリジナル開発プラン（2Lバルク・100mlカップ両対応）」をご用意しています。",
  },
  dessert: {
    eyebrow: "オリジナル開発・店名ロゴ入りカップ製造（OEM）のご案内",
    heading: "お店のこだわり食材やロゴでつくる「小ロットOEM（60個／6L〜）」もございます",
    description:
      "地産地消の食材を使った食後デザート用2Lバルクの開発や、お持ち帰り・物販用の店名ロゴ入り100mlカップ製造（開発費0円〜）を小ロットから承っております。",
  },
  hotel: {
    eyebrow: "宿・ホテル限定フレーバー開発・売店用カップ製造（OEM）",
    heading: "地域の特産食材を使った「オリジナル水菓子・館内売店カップ」も製造可能です",
    description:
      "その土地ならではの果物やお茶を使ったコース用2Lバルクの専用開発（6L〜）や、ホテル・旅館の屋号ロゴ入り100mlカップ製造（開発費0円〜・60個〜）を承っております。",
  },
  cafe: {
    eyebrow: "自家焙煎珈琲・茶葉での専用開発・店名カップ製造（OEM）",
    heading: "お店のお茶・珈琲を使ったオリジナル味や、ロゴ入りカップ製造（60個〜）にも対応",
    description:
      "定番11種のフタをお店のロゴシールにする「開発費0円プラン（60個〜）」と、自慢の茶葉・珈琲・季節果実でつくる「専用レシピ開発（2Lバルク・カップ両対応）」からお選びいただけます。",
  },
};

const SRC_BY_CONTEXT: Record<OemBannerContext, string> = {
  general: "home_banner",
  dessert: "dessert_banner",
  hotel: "hotel_banner",
  cafe: "cafe_banner",
};

/**
 * 既存の業務用卸LP（/ , /dessert , /hotel , /cafe）の最下部に配置するOEM要点ページ（/oem/plan）への導線
 * メインの試食サンプル申込フォームより下に配置することで、通常卸のCVを妨げずにOEMニーズを拾い上げる
 */
export default function OemCrossLinkBanner({ context = "general" }: OemCrossLinkBannerProps) {
  const copy = COPY_BY_CONTEXT[context];
  const src = SRC_BY_CONTEXT[context];

  return (
    <section className="border-t border-gray-200 bg-[#f7f3ec] py-12 sm:py-14">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-white p-6 shadow-2xs sm:flex-row sm:items-center sm:p-8">
          <div className="max-w-2xl">
            <p className="text-brand text-xs font-bold">{copy.eyebrow}</p>
            <h2 className="text-ink mt-1.5 text-lg leading-snug font-bold sm:text-xl">
              {copy.heading}
            </h2>
            <p className="text-ink-light mt-2 text-xs leading-relaxed sm:text-sm">
              {copy.description}
            </p>
          </div>
          <Link
            href={`/oem/plan?src=${src}`}
            className="bg-brand hover:bg-brand-dark inline-flex min-h-12 shrink-0 items-center justify-center rounded-full px-6 py-3 text-sm font-bold whitespace-nowrap text-white transition-colors"
          >
            OEMの料金・プランを見る →
          </Link>
        </div>
      </div>
    </section>
  );
}
