import type { Metadata } from "next";
import WholesaleHeader, { type WholesaleNavItem } from "@/app/components/wholesale/WholesaleHeader";
import WholesaleFooter from "@/app/components/wholesale/WholesaleFooter";
import WholesaleFloatingCTA from "@/app/components/wholesale/WholesaleFloatingCTA";
import WholesaleReviewsSlider from "@/app/components/wholesale/WholesaleReviewsSlider";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";
import HotelHeroSection from "./components/HotelHeroSection";
import HotelNoExtraPrepSection from "./components/HotelNoExtraPrepSection";
import HotelFlavorsSection from "./components/HotelFlavorsSection";
import HotelPortionSection from "./components/HotelPortionSection";
import HotelBanquetSection from "./components/HotelBanquetSection";
import HotelTermsSection from "./components/HotelTermsSection";
import HotelFAQSection from "./components/HotelFAQSection";
import HotelSampleSection from "./components/HotelSampleSection";

const PAGE_TITLE = "ホテル・旅館・コース料理の食後デザートに｜アレルギー対応の業務用植物性アイス";
const OG_TITLE = `${PAGE_TITLE} | SoyStories`;
const DESCRIPTION =
  "ホテル・オーベルジュ・旅館の会席やコースの最後の一皿、婚礼・宴会・朝食ビュッフェのデザートに、アレルギーやヴィーガンのお客様にも同じデザートを。乳・卵・小麦を持ち込まない専用工房製造。1L 2,000円・2L 4,000円（税別）、最小4Lから。無料試食サンプル（6個）受付中。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: DESCRIPTION,
  keywords: [
    "ホテル デザート 業務用",
    "旅館 デザート 業務用",
    "アレルギー対応 デザート 業務用",
    "コース料理 ドルチェ 業務用アイス",
    "会席 水菓子 業務用アイス",
    "婚礼 宴会 ヴィーガンデザート",
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
        alt: "SoyStories ホテル・旅館・コース料理向け 業務用植物性クラフトアイス",
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
  { label: "厨房でのメリット", href: "#no-extra-prep" },
  { label: "11種の味", href: "#flavors" },
  { label: "盛り付けと量", href: "#portion" },
  { label: "注文の決まり", href: "#terms" },
  { label: "よくある質問", href: "#faq" },
];

export default function HotelPage() {
  return (
    <>
      <WholesaleHeader pageHref="/hotel" navItems={navItems} />
      <main className="flex-1">
        {/* 1. 最初の画面 */}
        <HotelHeroSection />

        {/* 2. 申告が来た日も、別に仕込まなくていい */}
        <HotelNoExtraPrepSection />

        {/* 3. 会席・コースに合う味 */}
        <HotelFlavorsSection />

        {/* 4. 盛り付けと量 */}
        <HotelPortionSection />

        {/* 5. 海外からのヴィーガンのお客様の声 */}
        <WholesaleReviewsSlider
          eyebrow="インバウンド・海外ゲストからの評価"
          heading="海外からのヴィーガンのお客様の声"
          lead={`薬院の実店舗ではGoogle ${WHOLESALE_FACTS.googleRating}（${WHOLESALE_FACTS.googleReviewCount}）・ヴィーガンガイドHappyCow ${WHOLESALE_FACTS.happyCowRating}を獲得。海外から訪れるヴィーガンのお客様はもちろん、ヴィーガンではないお客様からも「今まで食べたアイスの中で一番美味しい」と高い評価をいただいています。`}
          variant="dark"
        />

        {/* 6. 宴会・婚礼・ビュッフェ */}
        <HotelBanquetSection />

        {/* 7. 注文の決まり */}
        <HotelTermsSection />

        {/* 8. よくある質問 */}
        <HotelFAQSection />

        {/* 9. サンプルの申込フォーム */}
        <HotelSampleSection />
      </main>
      <WholesaleFooter
        taglineLines={["ホテル・旅館・コースの最後の一皿に、", "どなたにも同じデザートを。"]}
        navItems={navItems}
      />
      <WholesaleFloatingCTA />
    </>
  );
}
