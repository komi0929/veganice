import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import StructuredData, { breadcrumbs, service } from "../components/StructuredData";
import OemHeader from "./components/OemHeader";
import OemHeroSection from "./components/OemHeroSection";
import OemPremiseSection from "./components/OemPremiseSection";
import OemYakuinProofSection from "./components/OemYakuinProofSection";
import OemCoursesSection from "./components/OemCoursesSection";
import OemSimulatorSection from "./components/OemSimulatorSection";
import OemTimelineSection from "./components/OemTimelineSection";
import OemFAQSection from "./components/OemFAQSection";
import OemContactSection from "./components/OemContactSection";
import OemFloatingCTA from "./components/OemFloatingCTA";
import { OEM_COURSES, PRICING_CONSTANTS } from "./data/oemSpecs";

const TITLE = "飲食店・カフェ・宿のオリジナルアイスOEM｜60個・6Lの小ロットから";
const DESCRIPTION =
  "福岡のヴィーガン＆GFスイーツ専門店SoyStories（Google★4.7・HappyCow★5.0）の専用工房で、お店のロゴ入りカップ（開発費0円・60個〜）や自家焙煎珈琲・お茶・果物を使ったオリジナルアイス（60個／6L〜）を製造。乳・卵・小麦・白砂糖不使用。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.soystories.cafe/oem",
  },
  openGraph: {
    title: `${TITLE} | SoyStories`,
    description: DESCRIPTION,
    type: "website",
    locale: "ja_JP",
    url: "https://www.soystories.cafe/oem",
    siteName: "SoyStories",
    images: [
      {
        url: "/images/gelato_circle_lineup.jpg",
        width: 1200,
        height: 630,
        alt: "SoyStories 専用工房でのオリジナルクラフトアイスOEM製造",
      },
    ],
  },
};

const offerCatalog = {
  "@type": "OfferCatalog",
  "@id": "https://www.soystories.cafe/oem#plans",
  name: "クラフトアイスOEM製造プラン",
  itemListElement: OEM_COURSES.map((course) => {
    const isLabelOnly = course.id === "seal_only";
    const minCups = PRICING_CONSTANTS.cupMinLot;
    const minBulkLiters = PRICING_CONSTANTS.bulkOemMinTubs * 2;

    return {
      "@type": "Offer",
      name: course.title,
      description: isLabelOnly
        ? `お客様がフタの丸シールを支給する場合、100mlカップは1個税別${PRICING_CONSTANTS.cupOemPriceExTax}円。1フレーバー${minCups}個から。`
        : `お店の素材で専用レシピを開発。試作開発費に加えて試作実費がかかります。100mlカップ${minCups}個またはバルク${minBulkLiters}Lから。`,
      priceSpecification: {
        "@type": "CompoundPriceSpecification",
        priceComponent: [
          {
            "@type": "UnitPriceSpecification",
            name: "開発費",
            price: course.devFeeExTax,
            priceCurrency: "JPY",
            valueAddedTaxIncluded: false,
          },
          ...(isLabelOnly
            ? [
                {
                  "@type": "UnitPriceSpecification",
                  name: "100mlカップ単価（フタの丸シール支給時）",
                  price: PRICING_CONSTANTS.cupOemPriceExTax,
                  priceCurrency: "JPY",
                  valueAddedTaxIncluded: false,
                  unitCode: "C62",
                  eligibleQuantity: {
                    "@type": "QuantitativeValue",
                    minValue: minCups,
                    unitCode: "C62",
                  },
                },
              ]
            : []),
        ],
      },
    };
  }),
};

const oemJsonLd = [
  {
    ...service(
      "/oem",
      "ヴィーガン・植物性クラフトアイス小ロットOEM受託製造",
      "お店のロゴ入りカップや、お店の素材を使ったオリジナルの植物性クラフトアイスを小ロットで製造します。"
    ),
    hasOfferCatalog: { "@id": offerCatalog["@id"] },
  },
  offerCatalog,
  {
    "@type": "HowTo",
    name: "オリジナルクラフトアイスのお届けまでの流れ",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "無料相談",
        text: "ご希望の素材や用途を伺い、味の方向性をご提案します。",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "試作2案×各3個",
        text: "配合の異なる2案を各3個、計6個お届けします。",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "最短約1か月全国納品",
        text: "味と表示を確定後、専用工房で製造し、全国へ冷凍便で納品します。",
      },
    ],
  },
  breadcrumbs("/oem", "小ロットOEM"),
];

/**
 * 完全版 OEM LP（シンプル2プラン・一気通貫構成）
 * 1. FV → 2. アイスの特徴 → 3. 福岡直営店の実績と原点 → 4. 選べる2プラン（¥0 vs 税別¥30,000）
 * → 5. 利益シミュレーター → 6. 1か月工程 → 7. 無料相談・試食申込フォーム → 8. 折りたたみFAQ＋定番卸案内
 */
export default function OemFullPage() {
  return (
    <>
      <StructuredData graph={oemJsonLd} />
      <OemHeader isPlanPage={false} />
      <main className="lp-friendly flex-1 pt-14 sm:pt-16">
        <OemHeroSection />
        <OemPremiseSection />
        <OemYakuinProofSection />
        <OemCoursesSection />
        <OemSimulatorSection />
        <OemTimelineSection />
        <Suspense
          fallback={<div className="py-16 text-center text-sm text-gray-500">読み込み中...</div>}
        >
          <OemContactSection />
        </Suspense>
        <OemFAQSection />

        {/* 定番フレーバー通常卸へのご案内 */}
        <section className="border-t border-gray-200 bg-[#f7f3ec] py-12">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex flex-col items-start justify-between gap-5 rounded-3xl bg-white p-6 shadow-2xs sm:flex-row sm:items-center sm:p-7">
              <div>
                <p className="text-brand text-xs font-bold">
                  オリジナル開発の前に、定番品の導入をご検討の方へ
                </p>
                <h2 className="text-ink mt-1 text-base font-bold sm:text-lg">
                  定番11フレーバーの業務用卸（最小4L〜／個食カップ60個〜）もございます
                </h2>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3 sm:flex-col">
                <Link
                  href="/oem/guide"
                  className="text-brand border-brand rounded-full border px-6 py-3 text-center text-sm font-bold hover:bg-[#f7f3ec]"
                >
                  小ロットOEM完全ガイド →
                </Link>
                <Link
                  href="/wholesale"
                  className="bg-brand hover:bg-brand-dark rounded-full px-6 py-3 text-center text-sm font-bold text-white transition-colors"
                >
                  定番フレーバー卸を見る →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <OemFloatingCTA />
    </>
  );
}
