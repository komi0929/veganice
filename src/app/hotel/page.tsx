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
import HotelTermsSection from "./components/HotelTermsSection";
import HotelFAQSection from "./components/HotelFAQSection";
import HotelSampleSection from "./components/HotelSampleSection";
import OemCrossLinkBanner from "@/app/components/OemCrossLinkBanner";

const PAGE_TITLE = "ホテル・旅館のインバウンド・多様な食対応に｜業務用 植物性クラフトアイス";
const OG_TITLE = `${PAGE_TITLE} | SoyStories`;
const DESCRIPTION =
  "海外からのお客様（ヴィーガン・グルテンフリー・乳製品不使用）やアレルギーをお持ちの方にも、会席やコースの最後にみんなと同じ一皿を。HappyCow 5.0満点・Google ★4.7（250件以上）と海外ゲストから絶賛される業務用植物性クラフトアイス。1L 2,000円・2L 4,000円（税別）、最小4L〜、無料試食サンプル（6個）受付中。";

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
  { label: "どんなアイス？", href: "#no-extra-prep" },
  { label: "海外からの声", href: "#reviews" },
  { label: "11種の味", href: "#flavors" },
  { label: "分量・大人数対応", href: "#portion" },
  { label: "注文の決まり", href: "#terms" },
  { label: "よくある質問", href: "#faq" },
];

/**
 * ホテル・旅館・婚礼宴会・コース料理店向け 業務用卸LP
 * 構成：何の提案か（Hero） → どこの誰がつくるどんなアイスか＆4つの現場メリット（NoExtraPrep）
 *     → 海外旅行者からの実証口コミ（Reviews） → 会席・コースに合う11種の味と盛り付け方（Flavors）
 *     → 1人分の分量・容器・団体ビュッフェ対応（Portion） → 注文の決まり（Terms） → FAQ → 無料サンプル申込
 */
export default function HotelPage() {
  return (
    <>
      <WholesaleHeader pageHref="/hotel" navItems={navItems} />
      <main className="flex-1">
        {/* 1. 最初の画面 */}
        <HotelHeroSection />

        {/* 2. どんなアイス？｜専門店の紹介・海外ゲストに必要な4要素・専用工房＆製法 */}
        <HotelNoExtraPrepSection />

        {/* 3. 海外からのヴィーガンのお客様の声（直営スイーツ店での実証評価） */}
        <WholesaleReviewsSlider
          eyebrow="HappyCow 5.0満点・Google ★4.7の実績"
          heading="海外からのヴィーガンのお客様の声"
          lead={`私たちの直営スイーツ店（福岡・薬院）には欧米・豪州・アジアから多くの旅行者が訪れ、世界最大のヴィーガンガイドHappyCowで満点 ${WHOLESALE_FACTS.happyCowRating}、Google ${WHOLESALE_FACTS.googleRating}（${WHOLESALE_FACTS.googleReviewCount}）を獲得しています。ヴィーガンやグルテンフリーの方はもちろん、ヴィーガンではないお客様からも「世界中で食べたどんな乳製品よりも美味しい」と高い評価をいただいています。`}
          variant="dark"
        />

        {/* 4. 会席・コースに合う全11種の味と盛り付け方 */}
        <HotelFlavorsSection />

        {/* 5. 盛り付け量の目安・1L/2L容器・国際会議／婚礼／朝食ビュッフェ対応 */}
        <HotelPortionSection />

        {/* 6. 注文の決まり */}
        <HotelTermsSection />

        {/* 7. よくある質問 */}
        <HotelFAQSection />

        {/* 8. 無料試食サンプル6個のお申し込み */}
        <HotelSampleSection />

        {/* 9. OEM・オリジナル水菓子／売店カップ製造のご案内 */}
        <OemCrossLinkBanner context="hotel" />
      </main>
      <WholesaleFooter
        taglineLines={[
          "海外からのお客様にも、食の制限がある方にも、",
          "会席・コースの最後に同じデザートを。",
        ]}
        navItems={navItems}
      />
      <WholesaleFloatingCTA />
    </>
  );
}
