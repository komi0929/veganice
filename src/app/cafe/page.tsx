import type { Metadata } from "next";
import WholesaleHeader, { type WholesaleNavItem } from "@/app/components/wholesale/WholesaleHeader";
import WholesaleFooter from "@/app/components/wholesale/WholesaleFooter";
import WholesaleFloatingCTA from "@/app/components/wholesale/WholesaleFloatingCTA";
import WholesaleReviewsSlider from "@/app/components/wholesale/WholesaleReviewsSlider";
import WholesaleOriginStorySection from "@/app/components/wholesale/WholesaleOriginStorySection";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";
import CafeHeroSection from "./components/CafeHeroSection";
import CafePolicySection from "./components/CafePolicySection";
import CafeServingSection from "./components/CafeServingSection";
import CafeFlavorsSection from "./components/CafeFlavorsSection";
import CafeSampleSection from "./components/CafeSampleSection";
import CafeFAQSection from "./components/CafeFAQSection";
import OemCrossLinkBanner from "@/app/components/OemCrossLinkBanner";

const PAGE_TITLE = "カフェ・ベーカリー・焼き菓子店の業務用アイス｜乳・卵・小麦・白砂糖不使用";
const OG_TITLE = `${PAGE_TITLE} | SoyStories`;
const DESCRIPTION =
  "焼き菓子やドーナツの添えアイスや、フロート・パフェ・アフォガートに。乳・卵・小麦を持ち込まない専用工房製造、白砂糖不使用。4L（1L×4本など）から組み合わせ自由。100mlカップ（60個〜）にも対応。無料試食サンプル（6個・原則翌日発送）受付中。";

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
    canonical: "https://www.soystories.cafe/cafe",
  },
  openGraph: {
    title: OG_TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ja_JP",
    url: "https://www.soystories.cafe/cafe",
    siteName: "SoyStories",
    images: [
      {
        url: "/images/soystories_icecream.1.jpg",
        width: 1200,
        height: 630,
        alt: "SoyStories カフェ・ベーカリー・菓子店向け 業務用クラフトアイス",
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
  { label: "3つの理由", href: "#policy" },
  { label: "お店での出し方", href: "#serving" },
  { label: "11種の味・条件", href: "#flavors" },
  { label: "薬院店と想い", href: "#story" },
  { label: "無料サンプル", href: "#contact-form" },
];

export default function CafePage() {
  return (
    <>
      <WholesaleHeader pageHref="/cafe" navItems={navItems} />
      <main className="flex-1">
        <CafeHeroSection />
        <CafePolicySection />
        <CafeServingSection />
        <CafeFlavorsSection />
        <WholesaleOriginStorySection variant="cafe" />
        <WholesaleReviewsSlider
          eyebrow="HappyCow 5.0・Google ★4.7"
          heading="直営店に寄せられたお客様の声"
          lead={`福岡・薬院の直営店（Google ${WHOLESALE_FACTS.googleRating}・${WHOLESALE_FACTS.googleReviewCount}）では、普段は乳製品のお菓子を召し上がるお客様からも「普通のアイスより好き」と選ばれています。`}
          variant="dark"
        />
        <CafeSampleSection />
        <CafeFAQSection />
        <OemCrossLinkBanner context="cafe" />
      </main>
      <WholesaleFooter
        taglineLines={[
          "焼き菓子やドーナツ、ドリンクの横に、",
          "乳・卵・小麦・白砂糖不使用のアイスを。",
        ]}
        navItems={navItems}
        oemSrc="cafe_footer"
      />
      <WholesaleFloatingCTA />
    </>
  );
}
