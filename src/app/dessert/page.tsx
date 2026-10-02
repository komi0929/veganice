import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import DessertHeroSection from "./components/DessertHeroSection";
import DessertCoreValueSection from "./components/DessertCoreValueSection";
import DessertEconomicsSection from "./components/DessertEconomicsSection";
import DessertComparisonSection from "./components/DessertComparisonSection";
import DessertProductsSection from "./components/DessertProductsSection";
import DessertSocialProofSection from "./components/DessertSocialProofSection";
import DessertHowItWorksSection from "./components/DessertHowItWorksSection";
import DessertFAQSection from "./components/DessertFAQSection";
import DessertContactForm from "./components/DessertContactForm";

export const metadata: Metadata = {
  title:
    "食後のデザートに最適｜ヴィーガンラーメン・バーガー等 食事系店舗向けクラフトアイス — SoyStories",
  description:
    "ヴィーガンラーメンやヴィーガンハンバーガーなど、濃厚な食事の後に「食後のデザート」を。米粉と発酵の独自製法による後味すっきり・濃厚なコク。乳・卵・小麦不使用、仕込みゼロ・ディッシャーですくうだけ。小ロット4L〜。無料サンプル受付中。",
  keywords: [
    "食後デザート",
    "ヴィーガンラーメン デザート",
    "ヴィーガンバーガー デザート",
    "お口直しアイス",
    "業務用ヴィーガンアイス",
    "プラントベース クラフトアイス",
    "乳卵小麦不使用",
    "グルテンフリー",
    "飲食店向け デザート",
    "SoyStories",
    "ソイストーリーズ",
  ],
  openGraph: {
    title: "食後のデザートに最適｜ヴィーガンラーメン・バーガー向けクラフトアイス — SoyStories",
    description:
      "ヴィーガンラーメンやバーガーの後に。乳・卵・小麦フリー、仕込みゼロ・即提供。客単価アップと顧客満足度を叶えるプラントベース クラフトアイス。小ロット4L〜。",
    type: "website",
    locale: "ja_JP",
    url: "https://soystories.cafe/dessert",
    siteName: "SoyStories",
    images: [
      {
        url: "/images/hero_flagship.jpg",
        width: 1200,
        height: 630,
        alt: "SoyStories 食後のデザートに最適なプラントベース クラフトアイス",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "食後のデザートに最適｜ヴィーガンラーメン・バーガー向けクラフトアイス — SoyStories",
    description:
      "ヴィーガンラーメンやバーガーの後に。乳・卵・小麦フリー、仕込みゼロ・即提供。小ロット4L〜。",
    images: ["/images/hero_flagship.jpg"],
  },
  alternates: {
    canonical: "https://soystories.cafe/dessert",
  },
};

export default function DessertPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ① ファーストビュー：食後のデザートに最適です */}
        <DessertHeroSection />

        {/* ② なぜヴィーガンラーメン・バーガーの食後デザートに最適なのか */}
        <DessertCoreValueSection />

        {/* ③ 導入価値・客単価UP＋350〜500円・メニュー事例 */}
        <DessertEconomicsSection />

        {/* ④ 一般的な業務用アイス・シャーベットとの比較 */}
        <DessertComparisonSection />

        {/* ⑤ プロダクト情報（フレーバー・B2B小ロット4L仕様） */}
        <DessertProductsSection />

        {/* ⑥ 導入実績・食後に食べたお客様の声・代表メッセージ */}
        <DessertSocialProofSection />

        {/* ⑦ 導入までの3ステップ */}
        <DessertHowItWorksSection />

        {/* ⑧ 食事系店舗向けFAQ */}
        <DessertFAQSection />

        {/* ⑨ お問い合わせ・食後デザート用無料サンプル申込 */}
        <DessertContactForm />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
