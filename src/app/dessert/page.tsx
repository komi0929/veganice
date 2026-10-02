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
  title: "食後のデザートに最適｜海外客絶賛のクラフトアイスで単価UP＆満足度向上 — SoyStories",
  description:
    "海外のお客様から店舗にて高い評価を受けているアイスを、お店でデザートとして取り扱うことで、単価UPと満足度向上を狙いませんか。乳脂肪不使用で食後も重たく残らず、極上のなめらかさ。乳・卵・小麦不使用、仕込みゼロ・ディッシャーですくうだけ。小ロット4L〜。無料サンプル受付中。",
  keywords: [
    "食後デザート",
    "飲食店 デザート 導入",
    "単価アップ デザート",
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
    title: "食後のデザートに最適｜海外客絶賛のクラフトアイスで単価UP＆満足度向上 — SoyStories",
    description:
      "海外のお客様から店舗にて高い評価を受けているアイスを、お店でデザートとして取り扱うことで、単価UPと満足度向上を狙いませんか。乳・卵・小麦フリー、仕込みゼロ・即提供。小ロット4L〜。",
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
    title: "食後のデザートに最適｜海外客絶賛のクラフトアイスで単価UP＆満足度向上 — SoyStories",
    description:
      "海外のお客様から店舗にて高い評価を受けているアイスを、お店でデザートとして取り扱うことで、単価UPと満足度向上を狙いませんか。乳・卵・小麦フリー、仕込みゼロ・即提供。小ロット4L〜。",
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

        {/* ② 海外客から絶賛されるアイスをなぜ食後デザートに選ぶべきなのか */}
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
