import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import DessertHeroSection from "./components/DessertHeroSection";
import DessertAboutSection from "./components/DessertAboutSection";
import DessertReasonsSection from "./components/DessertReasonsSection";
import DessertReviewsSection from "./components/DessertReviewsSection";
import DessertOperationsSection from "./components/DessertOperationsSection";
import DessertProductsSection from "./components/DessertProductsSection";
import DessertFAQSection from "./components/DessertFAQSection";
import DessertStorySection from "./components/DessertStorySection";
import DessertSampleSection from "./components/DessertSampleSection";

const TITLE = "ヴィーガン対応・食後デザートの業務用クラフトアイス｜乳・卵・小麦不使用 SoyStories";
const DESCRIPTION =
  "福岡・薬院のヴィーガン＆グルテンフリー専門店SoyStoriesのアイスを業務用1L・2Lでお届け。100%植物性・乳卵小麦不使用。米粉と発酵の独自製法でジェラートのようななめらかさ。専用工房製造で混入ゼロ。−18℃ですぐ提供可能。6種類の無料サンプル受付中。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "ヴィーガンアイス 業務用",
    "プラントベース デザート",
    "食後デザート",
    "業務用アイス",
    "飲食店 デザート 導入",
    "バルクアイス",
    "乳卵小麦不使用",
    "グルテンフリー アイス",
    "アレルギー対応 デザート",
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
        alt: "SoyStories 食後のデザートにぴったりの業務用アイス",
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
 * 食後デザート・ヴィーガン対応 業務用LP
 * 構成：何か → 届く流れ → 3つの製法 → 創業ストーリー＆エピソード → 評判 → お店の手間 → フレーバー → 質問 → 無料サンプル
 */
export default function DessertPage() {
  return (
    <>
      <Header />
      <main className="lp-friendly flex-1">
        {/* ① 3秒で伝わるファーストビュー（100%植物性・米粉クラフトアイス） */}
        <DessertHeroSection />

        {/* ② どんなアイス？（専門店の味を厨房へ：つくる → 届く → 提供） */}
        <DessertAboutSection />

        {/* ③ 3つの独自製法（米粉製法・発酵素材・専用工房） */}
        <DessertReasonsSection />

        {/* ④ 創業の想いと感動のエピソード */}
        <DessertStorySection />

        {/* ⑤ 実店舗の評価・海外のお客様の口コミ */}
        <DessertReviewsSection />

        {/* ⑥ お店の手間・メニュー例 */}
        <DessertOperationsSection />

        {/* ⑦ フレーバー・商品仕様 */}
        <DessertProductsSection />

        {/* ⑧ よくある質問 */}
        <DessertFAQSection />

        {/* ⑨ 無料サンプル・申込フォーム */}
        <DessertSampleSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
