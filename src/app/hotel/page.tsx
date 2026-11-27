import type { Metadata } from "next";
import WholesaleHeader, { type WholesaleNavItem } from "@/app/components/wholesale/WholesaleHeader";
import WholesaleFooter from "@/app/components/wholesale/WholesaleFooter";
import WholesaleFloatingCTA from "@/app/components/wholesale/WholesaleFloatingCTA";
import WholesaleReviewsSlider from "@/app/components/wholesale/WholesaleReviewsSlider";
import WholesaleOriginStorySection from "@/app/components/wholesale/WholesaleOriginStorySection";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";
import HotelHeroSection from "./components/HotelHeroSection";
import HotelNoExtraPrepSection from "./components/HotelNoExtraPrepSection";
import HotelPortionSection from "./components/HotelPortionSection";
import HotelFlavorsSection from "./components/HotelFlavorsSection";
import HotelSampleSection from "./components/HotelSampleSection";
import HotelFAQSection from "./components/HotelFAQSection";
import OemCrossLinkBanner from "@/app/components/OemCrossLinkBanner";

const PAGE_TITLE = "ホテル・旅館の食後デザート・インバウンド対応に｜業務用 クラフトアイス";
const OG_TITLE = `${PAGE_TITLE} | SoyStories`;
const DESCRIPTION =
  "海外のヴィーガンのお客様にも、みんなと同じデザートを。夕食の最後が果物だけになりがちな日に、コースや会席のデザートとしてそのままお出しいただけます。乳・卵・小麦・白砂糖不使用、定期発注なし・4Lから必要な時だけ（1皿 約100円〜）。無料試食サンプル（6個・原則翌日発送）受付中。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: DESCRIPTION,
  keywords: [
    "旅館 デザート 業務用アイス",
    "ホテル インバウンド デザート 業務用",
    "旅館 ヴィーガン デザート 業務用",
    "グルテンフリー アイス 業務用",
    "会席 水菓子 乳卵小麦不使用",
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
        alt: "SoyStories ホテル・旅館向け 業務用植物性クラフトアイス",
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
  { label: "3つの理由", href: "#no-extra-prep" },
  { label: "宿での出し方", href: "#portion" },
  { label: "11種の味・条件", href: "#flavors" },
  { label: "直営店と想い", href: "#story" },
  { label: "無料サンプル", href: "#contact-form" },
];

export default function HotelPage() {
  return (
    <>
      <WholesaleHeader pageHref="/hotel" navItems={navItems} />
      <main className="flex-1">
        <HotelHeroSection />
        <HotelNoExtraPrepSection />
        <HotelPortionSection />
        <HotelFlavorsSection />
        <WholesaleOriginStorySection variant="hotel" />
        <WholesaleReviewsSlider
          eyebrow="HappyCow 5.0・Google ★4.7"
          heading="直営店に寄せられたお客様の声"
          lead={`福岡の直営店（Google ${WHOLESALE_FACTS.googleRating}・${WHOLESALE_FACTS.googleReviewCount}）には海外の旅行者やヴィーガンではないお客様も多く来店され、「普通のアイスより美味しい」と選ばれています。`}
          variant="dark"
        />
        <HotelSampleSection />
        <HotelFAQSection />
        <OemCrossLinkBanner context="hotel" />
      </main>
      <WholesaleFooter
        taglineLines={[
          "海外のお客様にも、アレルギーをお持ちの方にも、",
          "みんなと同じ食後のデザートを。",
        ]}
        navItems={navItems}
        oemSrc="hotel_footer"
      />
      <WholesaleFloatingCTA />
    </>
  );
}
