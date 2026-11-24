import type { Metadata } from "next";
import WholesaleHeader, { type WholesaleNavItem } from "@/app/components/wholesale/WholesaleHeader";
import WholesaleFooter from "@/app/components/wholesale/WholesaleFooter";
import WholesaleFloatingCTA from "@/app/components/wholesale/WholesaleFloatingCTA";
import WholesaleReviewsSlider from "@/app/components/wholesale/WholesaleReviewsSlider";
import WholesaleOriginStorySection from "@/app/components/wholesale/WholesaleOriginStorySection";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";
import HotelHeroSection from "./components/HotelHeroSection";
import HotelPortionSection from "./components/HotelPortionSection";
import HotelNoExtraPrepSection from "./components/HotelNoExtraPrepSection";
import HotelFlavorsSection from "./components/HotelFlavorsSection";
import HotelSampleSection from "./components/HotelSampleSection";
import HotelFAQSection from "./components/HotelFAQSection";
import OemCrossLinkBanner from "@/app/components/OemCrossLinkBanner";

const PAGE_TITLE = "ホテル・旅館のインバウンド・多様な食対応に｜業務用 植物性クラフトアイス";
const OG_TITLE = `${PAGE_TITLE} | SoyStories`;
const DESCRIPTION =
  "海外からのお客様（ヴィーガン・グルテンフリー・乳製品不使用）や乳・卵・小麦アレルギーをお持ちの方にも、会席やコースの最後にみんなと同じ一皿を。HappyCow 5.0満点・Google ★4.7（270件以上）と海外ゲストから高く評価される業務用植物性クラフトアイス。1L 2,000円・2L 4,000円（税別）、最小4L〜、無料試食サンプル（6個）受付中。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: DESCRIPTION,
  keywords: [
    "ホテル インバウンド デザート 業務用",
    "旅館 ヴィーガン デザート 業務用",
    "グルテンフリー アイス 業務用",
    "コース料理 ドルチェ 業務用アイス",
    "会席 水菓子 業務用アイス",
    "婚礼 宴会 ヴィーガン対応",
    "乳卵小麦不使用 業務用アイス",
    "SoyStories",
    "ソイストーリーズ",
  ],
  alternates: {
    canonical: "https://soystories.cafe/hotel",
  },
  openGraph: {
    title: OG_TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ja_JP",
    url: "https://soystories.cafe/hotel",
    siteName: "SoyStories",
    images: [
      {
        url: "/images/hero_craft_gelato.jpg",
        width: 1200,
        height: 630,
        alt: "SoyStories ホテル・旅館のインバウンド・コース料理向け 業務用植物性クラフトアイス",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: DESCRIPTION,
    images: ["/images/hero_craft_gelato.jpg"],
  },
};

const navItems: WholesaleNavItem[] = [
  { label: "一皿と分量", href: "#portion" },
  { label: "3つの理由", href: "#no-extra-prep" },
  { label: "薬院店と想い", href: "#story" },
  { label: "海外からの声", href: "#reviews" },
  { label: "11種の味・条件", href: "#flavors" },
  { label: "無料サンプル", href: "#contact-form" },
];

/**
 * ホテル・旅館・婚礼宴会・コース料理店向け 業務用卸LP
 */
export default function HotelPage() {
  return (
    <>
      <WholesaleHeader pageHref="/hotel" navItems={navItems} />
      <main className="flex-1">
        <HotelHeroSection />
        <HotelPortionSection />
        <HotelNoExtraPrepSection />
        <WholesaleOriginStorySection variant="hotel" />
        <WholesaleReviewsSlider
          eyebrow="HappyCow 5.0満点・Google ★4.7の実績"
          heading="海外からのヴィーガンのお客様の声"
          lead={`福岡・薬院の直営店には欧米・豪州・アジアから多くの旅行者が訪れ、HappyCow満点 ${WHOLESALE_FACTS.happyCowRating}・Google ${WHOLESALE_FACTS.googleRating}（${WHOLESALE_FACTS.googleReviewCount}）を獲得。「世界中で食べたどんな乳製品よりも美味しい」と評価されています。`}
          variant="dark"
        />
        <HotelFlavorsSection />
        <HotelSampleSection />
        <HotelFAQSection />
        <OemCrossLinkBanner context="hotel" />
      </main>
      <WholesaleFooter
        taglineLines={[
          "海外からのお客様にも、食の制限がある方にも、",
          "会席・コースの最後に同じデザートを。",
        ]}
        navItems={navItems}
        oemSrc="hotel_footer"
      />
      <WholesaleFloatingCTA />
    </>
  );
}
