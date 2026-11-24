import type { Metadata } from "next";
import WholesaleHeader, { type WholesaleNavItem } from "@/app/components/wholesale/WholesaleHeader";
import WholesaleFooter from "@/app/components/wholesale/WholesaleFooter";
import WholesaleFloatingCTA from "@/app/components/wholesale/WholesaleFloatingCTA";
import WholesaleReviewsSlider from "@/app/components/wholesale/WholesaleReviewsSlider";
import WholesaleOriginStorySection from "@/app/components/wholesale/WholesaleOriginStorySection";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";
import CafeHeroSection from "./components/CafeHeroSection";
import CafeServingSection from "./components/CafeServingSection";
import CafePolicySection from "./components/CafePolicySection";
import CafeFlavorsSection from "./components/CafeFlavorsSection";
import CafeSampleSection from "./components/CafeSampleSection";
import CafeFAQSection from "./components/CafeFAQSection";
import OemCrossLinkBanner from "@/app/components/OemCrossLinkBanner";

const PAGE_TITLE = "カフェ・ベーカリー・焼き菓子店の業務用アイス｜乳・卵・小麦・白砂糖不使用";
const OG_TITLE = `${PAGE_TITLE} | SoyStories`;
const DESCRIPTION =
  "ドーナツ・米粉パン・タルト・ワッフル・焼き菓子に添える（挟む）アイスや、フロート・パフェ・アフォガートに。乳・卵・小麦を持ち込まない専用工房製造、白砂糖不使用。最小4L（1L×4本など）から味を組み合わせて仕入れ可能。100ml個食カップ（60個〜）にも対応。無料試食サンプル（6個）受付中。";

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
  { label: "一皿のイメージ", href: "#serving" },
  { label: "3つのこだわり", href: "#policy" },
  { label: "薬院店と想い", href: "#story" },
  { label: "お客様の声", href: "#reviews" },
  { label: "11種の味・条件", href: "#flavors" },
  { label: "無料サンプル", href: "#contact-form" },
];

/**
 * カフェ・ベーカリー・菓子店向け 業務用卸LP
 */
export default function CafePage() {
  return (
    <>
      <WholesaleHeader pageHref="/cafe" navItems={navItems} />
      <main className="flex-1">
        <CafeHeroSection />
        <CafeServingSection />
        <CafePolicySection />
        <WholesaleOriginStorySection variant="cafe" />
        <WholesaleReviewsSlider
          eyebrow="直営スイーツ店に届く声"
          heading="「乳製品のアイスより美味しい」国内外から届く評価"
          lead={`福岡・薬院の直営店ではGoogle ${WHOLESALE_FACTS.googleRating}（${WHOLESALE_FACTS.googleReviewCount}）・HappyCow ${WHOLESALE_FACTS.happyCowRating}を獲得。普段は乳製品のお菓子を召し上がるお客様からも「言われなければ植物性だと気づかない」と喜ばれています。`}
          variant="dark"
        />
        <CafeFlavorsSection />
        <CafeSampleSection />
        <CafeFAQSection />
        <OemCrossLinkBanner context="cafe" />
      </main>
      <WholesaleFooter
        taglineLines={[
          "ケーキや焼き菓子、ドリンクの横に、",
          "乳・卵・小麦・白砂糖不使用のアイスを。",
        ]}
        navItems={navItems}
        oemSrc="cafe_footer"
      />
      <WholesaleFloatingCTA />
    </>
  );
}
