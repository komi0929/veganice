import type { Metadata } from "next";
import WholesaleHeader, { type WholesaleNavItem } from "@/app/components/wholesale/WholesaleHeader";
import WholesaleFooter from "@/app/components/wholesale/WholesaleFooter";
import WholesaleFloatingCTA from "@/app/components/wholesale/WholesaleFloatingCTA";
import WholesaleReviewsSlider from "@/app/components/wholesale/WholesaleReviewsSlider";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";
import CafeHeroSection from "./components/CafeHeroSection";
import CafeServingSection from "./components/CafeServingSection";
import CafePolicySection from "./components/CafePolicySection";
import CafeFlavorsSection from "./components/CafeFlavorsSection";
import CafeTermsSection from "./components/CafeTermsSection";
import CafeFAQSection from "./components/CafeFAQSection";
import CafeSampleSection from "./components/CafeSampleSection";
import OemCrossLinkBanner from "@/app/components/OemCrossLinkBanner";

const PAGE_TITLE = "カフェ・菓子店の添えアイスに｜乳・卵・小麦・白砂糖不使用の業務用アイス";
const OG_TITLE = `${PAGE_TITLE} | SoyStories`;
const DESCRIPTION =
  "ケーキ・タルト・ワッフル・焼き菓子に添えるアイスやフロート・パフェ・アフォガートに。乳・卵・小麦を持ち込まない専用工房製造、乳化安定剤・増粘剤・着色料・白砂糖不使用。最小4L（1L×4など）から味を組み合わせて仕入れ可能。無料試食サンプル（6個）受付中。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: DESCRIPTION,
  keywords: [
    "カフェ 業務用アイス",
    "焼き菓子 添えアイス 卸",
    "グルテンフリー アイス 業務用",
    "乳卵小麦不使用 アイス 仕入れ",
    "白砂糖不使用 業務用アイス",
    "フロート パフェ 業務用アイス",
    "SoyStories",
    "ソイストーリーズ",
  ],
  alternates: {
    canonical: "https://soystories.cafe/cafe",
  },
  openGraph: {
    title: OG_TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ja_JP",
    url: "https://soystories.cafe/cafe",
    siteName: "SoyStories",
    images: [
      {
        url: "/images/soystories_icecream.1.jpg",
        width: 1200,
        height: 630,
        alt: "SoyStories カフェ・ベーカリー・菓子店向け 業務用植物性クラフトアイス",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: DESCRIPTION,
    images: ["/images/soystories_icecream.1.jpg"],
  },
};

const navItems: WholesaleNavItem[] = [
  { label: "添える使い方", href: "#serving" },
  { label: "素材の方針", href: "#policy" },
  { label: "11種の味", href: "#flavors" },
  { label: "注文の決まり", href: "#terms" },
  { label: "よくある質問", href: "#faq" },
];

export default function CafePage() {
  return (
    <>
      <WholesaleHeader pageHref="/cafe" navItems={navItems} />
      <main className="flex-1">
        {/* 1. 最初の画面 */}
        <CafeHeroSection />

        {/* 2. 添える使い方 */}
        <CafeServingSection />

        {/* 3. お店の方針に合う */}
        <CafePolicySection />

        {/* 4. 味（ケーキ・焼き菓子に／ドリンク・フロートに） */}
        <CafeFlavorsSection />

        {/* 5-1. 口コミ */}
        <WholesaleReviewsSlider
          eyebrow="実店舗での評判"
          heading="「世界中で食べた乳製品より美味しい」国内外から届く声"
          lead={`福岡・薬院の実店舗ではGoogle ${WHOLESALE_FACTS.googleRating}（${WHOLESALE_FACTS.googleReviewCount}）・HappyCow ${WHOLESALE_FACTS.happyCowRating}を獲得。素材にこだわるお客様やアレルギーをお持ちの方、ヴィーガンではないお客様からも高く評価されています。`}
          variant="light"
        />

        {/* 5-2. 注文の決まり */}
        <CafeTermsSection />

        {/* 5-3. よくある質問 */}
        <CafeFAQSection />

        {/* 5-4. 無料サンプル申込フォーム */}
        <CafeSampleSection />

        {/* 6. OEM・オリジナル味／ロゴ入りカップ製造のご案内 */}
        <OemCrossLinkBanner context="cafe" />
      </main>
      <WholesaleFooter
        taglineLines={[
          "ケーキや焼き菓子、ドリンクの横に、",
          "乳・卵・小麦・白砂糖不使用のアイスを。",
        ]}
        navItems={navItems}
      />
      <WholesaleFloatingCTA />
    </>
  );
}
