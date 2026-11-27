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
import HotelPartnerVoicesSection from "./components/HotelPartnerVoicesSection";
import HotelSampleSection from "./components/HotelSampleSection";
import HotelFAQSection from "./components/HotelFAQSection";
import OemCrossLinkBanner from "@/app/components/OemCrossLinkBanner";

const PAGE_TITLE = "旅館・ホテルの会席水菓子・インバウンド対応に｜業務用 植物性クラフトアイス";
const OG_TITLE = `${PAGE_TITLE} | SoyStories`;
const DESCRIPTION =
  "海外のヴィーガンのお客様にも、皆さんと同じ締めの甘味を。夕食の水菓子が果物だけになりがちな日にも、会席の最後に一皿。乳・卵・小麦・白砂糖不使用、定期発注なし・4Lから必要な時だけ・冷凍常備（1人分 約50ml＝約100円・税別）。無料試食サンプル（6個・原則翌日発送）受付中。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: DESCRIPTION,
  keywords: [
    "旅館 水菓子 業務用アイス",
    "ホテル インバウンド デザート 業務用",
    "旅館 ヴィーガン デザート 業務用",
    "グルテンフリー アイス 業務用",
    "会席 甘味 乳卵小麦不使用",
    "売店 屋号入り カップアイス OEM",
    "SoyStories",
    "ソイストーリーズ",
  ],
  alternates: {
    canonical: "https://www.soystories.cafe/hotel",
  },
  openGraph: {
    title: OG_TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ja_JP",
    url: "https://www.soystories.cafe/hotel",
    siteName: "SoyStories",
    images: [
      {
        url: "/images/hero_craft_gelato.jpg",
        width: 1200,
        height: 630,
        alt: "SoyStories 旅館・ホテルの会席水菓子・コース料理向け 業務用植物性クラフトアイス",
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
  { label: "3つの使い方・献立札", href: "#portion" },
  { label: "全11種・原材料表", href: "#ingredients" },
  { label: "お取引条件", href: "#terms" },
  { label: "薬院店と想い", href: "#story" },
  { label: "無料サンプル", href: "#contact-form" },
];

/**
 * 旅館・ホテル・オーベルジュ・婚礼会場向け 業務用卸LP
 */
export default function HotelPage() {
  return (
    <>
      <WholesaleHeader pageHref="/hotel" navItems={navItems} />
      <main className="flex-1">
        <HotelHeroSection />
        <HotelPortionSection />
        <HotelNoExtraPrepSection />
        <HotelFlavorsSection />
        <WholesaleOriginStorySection variant="hotel" />
        <WholesaleReviewsSlider
          eyebrow="HappyCow 5.0満点・Google ★4.7の実績"
          heading="薬院の実店舗に寄せられたお客様・旅行者の声"
          lead={`福岡・薬院の直営店には欧米・豪州・アジアからの旅行者やヴィーガンではないお客様も多く来店され、HappyCow満点 ${WHOLESALE_FACTS.happyCowRating}・Google ${WHOLESALE_FACTS.googleRating}（${WHOLESALE_FACTS.googleReviewCount}）を獲得。「世界中で食べたどんな乳製品よりも美味しい」と評価されています。`}
          variant="dark"
        />
        <HotelPartnerVoicesSection />
        <HotelSampleSection />
        <HotelFAQSection />
        <OemCrossLinkBanner context="hotel" />
      </main>
      <WholesaleFooter
        taglineLines={[
          "海外のヴィーガンのお客様にも、どのお客様にも、",
          "会席・コースの最後に同じ締めの甘味を。",
        ]}
        navItems={navItems}
        oemSrc="hotel_footer"
      />
      <WholesaleFloatingCTA />
    </>
  );
}
