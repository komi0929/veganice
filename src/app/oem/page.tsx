import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
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

const TITLE = "飲食店・カフェ・宿のオリジナルアイスOEM｜60個・6Lの小ロットから｜SoyStories";
const DESCRIPTION =
  "福岡のヴィーガン＆GFスイーツ専門店SoyStories（Google★4.7・HappyCow★5.0）の専用工房で、お店のロゴ入りカップ（開発費0円・60個〜）や自家焙煎珈琲・お茶・果物を使ったオリジナルアイス（60個／6L〜）を製造。乳・卵・小麦・白砂糖不使用。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.soystories.cafe/oem",
  },
  openGraph: {
    title: TITLE,
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

const oemJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.soystories.cafe/oem#service",
      name: "飲食店・カフェ・宿泊施設向け クラフトアイス小ロットOEM（60個・6L〜）",
      provider: {
        "@type": "Organization",
        name: "株式会社ヒトコト",
        url: "https://www.soystories.jp/company.html",
      },
      areaServed: "JP",
      description: DESCRIPTION,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "業務用卸トップ",
          item: "https://www.soystories.cafe/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "小ロットOEM",
          item: "https://www.soystories.cafe/oem",
        },
      ],
    },
  ],
};

/**
 * 完全版 OEM LP（シンプル2プラン・一気通貫構成）
 * 1. FV → 2. アイスの特徴 → 3. 福岡直営店の実績と原点 → 4. 選べる2プラン（¥0 vs 税別¥30,000）
 * → 5. 利益シミュレーター → 6. 1か月工程 → 7. 無料相談・試食申込フォーム → 8. 折りたたみFAQ＋定番卸案内
 */
export default function OemFullPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(oemJsonLd) }}
      />
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
              <Link
                href="/wholesale"
                className="bg-brand hover:bg-brand-dark shrink-0 rounded-full px-6 py-3 text-sm font-bold text-white transition-colors"
              >
                定番フレーバー卸を見る →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <OemFloatingCTA />
    </>
  );
}
