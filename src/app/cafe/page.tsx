import type { Metadata } from "next";
import WholesaleHeader, { type WholesaleNavItem } from "@/app/components/wholesale/WholesaleHeader";
import WholesaleFooter from "@/app/components/wholesale/WholesaleFooter";
import WholesaleFloatingCTA from "@/app/components/wholesale/WholesaleFloatingCTA";
import WholesaleReviewsSlider from "@/app/components/wholesale/WholesaleReviewsSlider";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";
import CafeHeroSection from "./components/CafeHeroSection";
import CafePolicySection from "./components/CafePolicySection";
import CafeServingSection from "./components/CafeServingSection";
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
  { label: "どんなアイス？", href: "#policy" },
  { label: "お店での使い方", href: "#serving" },
  { label: "11種の味", href: "#flavors" },
  { label: "お客様の声", href: "#reviews" },
  { label: "仕入れ条件", href: "#terms" },
  { label: "よくある質問", href: "#faq" },
];

/**
 * カフェ・ベーカリー・菓子店向け 業務用卸LP
 * 構成：何の提案か（Hero） → どこの誰がつくるどんなアイスか（Policy） → お店での4つの使い方（Serving）
 *     → 11種の味（Flavors） → 実際に食べたお客様の声（Reviews） → 仕入れ条件・容器（Terms） → FAQ → 無料サンプル申込
 */
export default function CafePage() {
  return (
    <>
      <WholesaleHeader pageHref="/cafe" navItems={navItems} />
      <main className="flex-1">
        {/* 1. 最初の画面 */}
        <CafeHeroSection />

        {/* 2. どんなアイス？（専門店の紹介・無添加＆白砂糖不使用・米粉製法・専用工房） */}
        <CafePolicySection />

        {/* 3. お店での使い方（焼き菓子横添え・フロート・パフェ・ランチ後＋盛り付け写真） */}
        <CafeServingSection />

        {/* 4. フレーバー全11種（ケーキ・焼き菓子に／ドリンク・フロートに） */}
        <CafeFlavorsSection />

        {/* 5. 直営スイーツ店に寄せられたお客様の声（味の確かな裏づけ） */}
        <WholesaleReviewsSlider
          eyebrow="直営スイーツ店に届くお客様の声"
          heading="「乳製品のアイスより美味しい」国内外から届く評価"
          lead={`私たちの直営スイーツ店（福岡・薬院）では、Google ${WHOLESALE_FACTS.googleRating}（${WHOLESALE_FACTS.googleReviewCount}）・HappyCow ${WHOLESALE_FACTS.happyCowRating}の評価をいただいています。アレルギーやヴィーガンの方はもちろん、普段は乳製品のお菓子を召し上がるヴィーガンではないお客様からも「言われなければ植物性だと気づかない」「後味が軽やかで一番好き」と喜ばれています。`}
          variant="dark"
        />

        {/* 6. 仕入れ条件・容器サイズ */}
        <CafeTermsSection />

        {/* 7. よくあるご質問 */}
        <CafeFAQSection />

        {/* 8. 無料試食サンプル6個のお申し込み */}
        <CafeSampleSection />

        {/* 9. OEM・オリジナル味／店名ロゴ展開のご案内 */}
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
