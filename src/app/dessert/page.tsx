import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import DessertHeroSection from "./components/DessertHeroSection";
import DessertReasonsSection from "./components/DessertReasonsSection";
import DessertAboutSection from "./components/DessertAboutSection";
import DessertProductsSection from "./components/DessertProductsSection";
import DessertStorySection from "./components/DessertStorySection";
import DessertReviewsSection from "./components/DessertReviewsSection";
import DessertSampleSection from "./components/DessertSampleSection";
import DessertFAQSection from "./components/DessertFAQSection";

const TITLE = "飲食店・カフェ・菓子店の業務用クラフトアイス｜乳・卵・小麦・白砂糖不使用 SoyStories";
const DESCRIPTION =
  "福岡・薬院の専門店SoyStoriesのクラフトアイスを業務用1L・2Lバルク（4L〜）および100mlカップ（60個〜）でお届け。定食・レストランの食後デザートや、カフェのフロート、焼き菓子の添えアイスに。全11種から選べる無料サンプル（6個・原則翌日発送）受付中。";

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
    "福岡",
    "SoyStories",
    "ソイストーリーズ",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ja_JP",
    url: "https://www.soystories.cafe/dessert",
    siteName: "SoyStories",
    images: [
      {
        url: "/images/hero_flagship.jpg",
        width: 1200,
        height: 630,
        alt: "SoyStories 飲食店・カフェ・菓子店向け 業務用クラフトアイス",
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
    canonical: "https://www.soystories.cafe/dessert",
  },
};

export default function DessertPage() {
  return (
    <>
      <Header />
      <main className="lp-friendly flex-1">
        <DessertHeroSection />
        <DessertReasonsSection />
        <DessertAboutSection />
        <DessertProductsSection />
        <DessertStorySection />
        <DessertReviewsSection />
        <DessertSampleSection />
        <DessertFAQSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
