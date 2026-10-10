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
import DessertSampleSection from "./components/DessertSampleSection";

const TITLE = "食後のデザートにぴったりの業務用アイス｜福岡・薬院のスイーツ店";
const DESCRIPTION =
  "福岡・薬院のスイーツ店SoyStoriesのアイスを、業務用1L・2Lでお届け。乳脂肪ゼロで重くないから食後にぴったり。すくって盛るだけ、仕込み不要。乳・卵・小麦不使用。最小4Lから。6種類の無料サンプル受付中。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "食後デザート",
    "業務用アイス",
    "飲食店 デザート 導入",
    "バルクアイス",
    "業務用ヴィーガンアイス",
    "乳卵小麦不使用",
    "グルテンフリー",
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
 * 食後デザートLP
 * 構成：何か → なぜ食後に合うか → 評判 → お店の手間 → 味 → 質問 → 無料サンプル
 */
export default function DessertPage() {
  return (
    <>
      <Header />
      <main className="lp-friendly flex-1">
        {/* ① 3秒で「福岡のスイーツ店の業務用アイス／食後のデザートに」 */}
        <DessertHeroSection />

        {/* ② どんなアイス？（つくる → 届く → 出す） */}
        <DessertAboutSection />

        {/* ③ 食後にぴったりな3つの理由 */}
        <DessertReasonsSection />

        {/* ④ 実店舗の評価・海外のお客様の口コミ */}
        <DessertReviewsSection />

        {/* ⑤ お店の手間・メニュー例 */}
        <DessertOperationsSection />

        {/* ⑥ フレーバー・商品仕様 */}
        <DessertProductsSection />

        {/* ⑦ よくある質問 */}
        <DessertFAQSection />

        {/* ⑧ 無料サンプル・申込フォーム */}
        <DessertSampleSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
