import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import DessertHeroSection from "./components/DessertHeroSection";
import DessertAboutSection from "./components/DessertAboutSection";
import DessertReasonsSection from "./components/DessertReasonsSection";
import DessertProductsSection from "./components/DessertProductsSection";
import DessertSampleSection from "./components/DessertSampleSection";
import DessertReviewsSection from "./components/DessertReviewsSection";
import DessertFAQSection from "./components/DessertFAQSection";
import OemCrossLinkBanner from "../components/OemCrossLinkBanner";

const TITLE = "飲食店・カフェ・菓子店の業務用クラフトアイス｜乳・卵・小麦・白砂糖不使用 SoyStories";
const DESCRIPTION =
  "福岡・薬院のヴィーガン＆グルテンフリー専門店SoyStoriesのクラフトアイスを業務用1L・2Lバルク（4L〜）および100ml個食カップ（60個〜）でお届け。定食・レストランの食後デザートや、カフェのフロート、ドーナツ・焼き菓子の添えアイスに。全11種から選べる無料サンプル（6個）受付中。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "ヴィーガンアイス 業務用",
    "プラントベース デザート",
    "食後デザート 業務用",
    "焼き菓子 添えアイス 卸",
    "業務用アイス 小ロット",
    "バルクアイス",
    "乳卵小麦不使用",
    "白砂糖不使用 アイス",
    "グルテンフリー アイス",
    "乳・卵・小麦不使用 デザート",
    "福岡",
    "SoyStories",
    "ソイストーリーズ",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ja_JP",
    url: "https://soystories.cafe/dessert",
    siteName: "SoyStories",
    images: [
      {
        url: "/images/hero_flagship.jpg",
        width: 1200,
        height: 630,
        alt: "SoyStories 飲食店・カフェ・菓子店向け 業務用植物性クラフトアイス",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/hero_flagship.jpg"],
  },
  alternates: {
    canonical: "https://soystories.cafe/dessert",
  },
};

/**
 * 飲食店・カフェ・ベーカリー／菓子店向け 定番卸フラッグシップLP（6段ビジュアルカタログ構成）
 * 1. FV → 2. 一皿のイメージ（写真4枚＋省スペース規格） → 3. 選ばれる3つの理由 → 4. 全11種の味＋価格・取引条件
 * → 5. 無料6個サンプル申込 → 6. 実物口コミ＋折りたたみFAQ＆創業背景＋OEM案内
 */
export default function DessertPage() {
  return (
    <>
      <Header />
      <main className="lp-friendly flex-1">
        <DessertHeroSection />
        <DessertAboutSection />
        <DessertReasonsSection />
        <DessertProductsSection />
        <DessertSampleSection />
        <DessertReviewsSection />
        <DessertFAQSection />
        <OemCrossLinkBanner context="dessert" />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
