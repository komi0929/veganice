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
 * 飲食店・カフェ・ベーカリー／菓子店向け 定番卸フラッグシップLP
 * 構成：FV → 3秒概要（1L×4本省スペース＆カップ併記） → 全11種の味＆価格 → 無料サンプル申込フォーム
 *     → 実店舗の口コミ → 3つの独自製法 → 現場メリット・提供例 → 創業ストーリー → よくある質問 → OEM案内
 */
export default function DessertPage() {
  return (
    <>
      <Header />
      <main className="lp-friendly flex-1">
        {/* ① 3秒で伝わるファーストビュー（食後デザートにも、カフェ・焼き菓子の一品にも） */}
        <DessertHeroSection />

        {/* ② どんなアイス？（専用工房・1L角型×4本からの省スペース規格・滑らかな食感） */}
        <DessertAboutSection />

        {/* ③ 全11フレーバー・原材料モーダル・卸価格＆100mlカップ案内 */}
        <DessertProductsSection />

        {/* ④ 無料試食サンプル（6個）申込フォーム（最短距離で到達できる中盤配置） */}
        <DessertSampleSection />

        {/* ⑤ 実店舗の評価・国内外のお客様の口コミ */}
        <DessertReviewsSection />

        {/* ⑥ 選ばれる3つの技術的裏付け（米粉製法・発酵素材・専用工房） */}
        <DessertReasonsSection />

        {/* ⑦ お店の収益メリット・業態別の提供メニュー例 */}
        <DessertOperationsSection />

        {/* ⑧ 創業の想いとエピソード */}
        <DessertStorySection />

        {/* ⑨ よくある質問（ベースミルク・アルコール/基準確認・カップ/OEM含む） */}
        <DessertFAQSection />

        {/* ⑩ OEM・オリジナル製造のご案内（要点版 /oem/plan へ直結） */}
        <OemCrossLinkBanner context="dessert" />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
