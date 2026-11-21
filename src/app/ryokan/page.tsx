import type { Metadata } from "next";
import WholesaleHeader, { type WholesaleNavItem } from "@/app/components/wholesale/WholesaleHeader";
import WholesaleFooter from "@/app/components/wholesale/WholesaleFooter";
import WholesaleFloatingCTA from "@/app/components/wholesale/WholesaleFloatingCTA";
import WholesaleReviewsSlider from "@/app/components/wholesale/WholesaleReviewsSlider";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";
import RyokanHeroSection from "./components/RyokanHeroSection";
import RyokanNoExtraPrepSection from "./components/RyokanNoExtraPrepSection";
import RyokanFlavorsSection from "./components/RyokanFlavorsSection";
import RyokanPortionSection from "./components/RyokanPortionSection";
import RyokanBanquetSection from "./components/RyokanBanquetSection";
import RyokanTermsSection from "./components/RyokanTermsSection";
import RyokanFAQSection from "./components/RyokanFAQSection";
import RyokanSampleSection from "./components/RyokanSampleSection";

const PAGE_TITLE = "旅館・ホテル・会席の甘味に｜アレルギー対応の業務用植物性アイス";
const OG_TITLE = `${PAGE_TITLE} | SoyStories`;
const DESCRIPTION =
  "会席・懐石の最後の一皿や婚礼・宴会・コースのデザートに、アレルギーやヴィーガンのお客様にも同じデザートを。乳・卵・小麦を持ち込まない専用工房製造。1L 2,000円・2L 4,000円（税別）、最小4Lから。全11種から選べる無料試食サンプル（6個）受付中。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: DESCRIPTION,
  keywords: [
    "旅館 デザート 業務用",
    "ホテル アレルギー対応 デザート",
    "会席 水菓子 業務用アイス",
    "婚礼 宴会 ヴィーガンデザート",
    "乳卵小麦不使用 業務用アイス",
    "精進料理 甘味",
    "SoyStories",
    "ソイストーリーズ",
  ],
  alternates: {
    canonical: "https://soystories.cafe/ryokan",
  },
  openGraph: {
    title: OG_TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ja_JP",
    url: "https://soystories.cafe/ryokan",
    siteName: "SoyStories",
    images: [
      {
        url: "/images/hero_craft_gelato.jpg",
        width: 1200,
        height: 630,
        alt: "SoyStories 旅館・ホテル・会席向け 業務用植物性クラフトアイス",
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
  { label: "会席に合う味", href: "#flavors" },
  { label: "盛り付けと量", href: "#portion" },
  { label: "注文の決まり", href: "#terms" },
  { label: "よくある質問", href: "#faq" },
];

export default function RyokanPage() {
  return (
    <>
      <WholesaleHeader pageHref="/ryokan" navItems={navItems} />
      <main className="flex-1">
        {/* 1. 最初の画面 */}
        <RyokanHeroSection />

        {/* 2. 申告が来た日も、別に仕込まなくていい */}
        <RyokanNoExtraPrepSection />

        {/* 3. 会席・コースに合う味 */}
        <RyokanFlavorsSection />

        {/* 4. 盛り付けと量 */}
        <RyokanPortionSection />

        {/* 5. 海外からのヴィーガンのお客様の声 */}
        <WholesaleReviewsSlider
          eyebrow="インバウンド・海外ゲストからの評価"
          heading="海外からのヴィーガンのお客様の声"
          lead={`薬院の実店舗ではGoogle ${WHOLESALE_FACTS.googleRating}（${WHOLESALE_FACTS.googleReviewCount}）・ヴィーガンガイドHappyCow ${WHOLESALE_FACTS.happyCowRating}を獲得。海外から訪れるヴィーガンのお客様はもちろん、ヴィーガンではないお客様からも「今まで食べたアイスの中で一番美味しい」と高い評価をいただいています。`}
          variant="dark"
        />

        {/* 6. 宴会・婚礼・ビュッフェ */}
        <RyokanBanquetSection />

        {/* 7. 注文の決まり */}
        <RyokanTermsSection />

        {/* 8. よくある質問 */}
        <RyokanFAQSection />

        {/* 9. サンプルの申込フォーム */}
        <RyokanSampleSection />
      </main>
      <WholesaleFooter
        taglineLines={["会席・コースの最後の一皿に、", "どなたにも同じデザートを。"]}
        navItems={navItems}
      />
      <WholesaleFloatingCTA />
    </>
  );
}
