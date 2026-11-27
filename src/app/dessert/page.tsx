import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import DessertHeroSection from "./components/DessertHeroSection";
import DessertReasonsSection from "./components/DessertReasonsSection";
import DessertAboutSection from "./components/DessertAboutSection";
import DessertProductsSection from "./components/DessertProductsSection";
import WholesaleOriginStorySection from "@/app/components/wholesale/WholesaleOriginStorySection";
import WholesaleReviewsSlider from "@/app/components/wholesale/WholesaleReviewsSlider";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";
import DessertSampleSection from "./components/DessertSampleSection";
import DessertFAQSection from "./components/DessertFAQSection";
import OemCrossLinkBanner from "../components/OemCrossLinkBanner";

const TITLE = "飲食店・カフェ・菓子店の業務用クラフトアイス｜乳・卵・小麦・白砂糖不使用";
const DESCRIPTION =
  "福岡の専門店SoyStoriesのクラフトアイスを業務用1L・2Lバルク（4L〜）および100mlカップ（60個〜）でお届け。定食・レストランの食後デザートや、カフェのフロート、焼き菓子の添えアイスに。全11種から選べる無料サンプル（6個・原則翌日発送）受付中。";

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
    title: `${TITLE} | SoyStories`,
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
        <WholesaleOriginStorySection variant="dessert" fontTone="sans" />
        <WholesaleReviewsSlider
          eyebrow="実店舗での評判"
          heading="「今まで食べたアイスで一番美味しい」世界中から届く本物の声。"
          lead={`Google ${WHOLESALE_FACTS.googleRating}（${WHOLESALE_FACTS.googleReviewCount}）・HappyCow満点 ${WHOLESALE_FACTS.happyCowRating}。ヴィーガンではないお客様からも「世界中で食べたどんな乳製品よりも美味しい」と評価されています。`}
          variant="dark"
        />
        <DessertSampleSection />
        <DessertFAQSection />
        <OemCrossLinkBanner context="dessert" />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
