import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import DessertReviewsSection from "../dessert/components/DessertReviewsSection";
import OemHeader from "./components/OemHeader";
import OemHeroSection from "./components/OemHeroSection";
import OemPremiseSection from "./components/OemPremiseSection";
import OemCoursesSection from "./components/OemCoursesSection";
import OemMidCtaBanner from "./components/OemMidCtaBanner";
import OemTimelineSection from "./components/OemTimelineSection";
import OemSimulatorSection from "./components/OemSimulatorSection";
import OemFAQSection from "./components/OemFAQSection";
import OemContactSection from "./components/OemContactSection";
import OemFloatingCTA from "./components/OemFloatingCTA";

const TITLE = "オリジナル植物性アイスOEM・PB製造｜小ロット60個・最短1か月｜乳・卵・小麦不使用";
const DESCRIPTION =
  "卵・乳・小麦を持ち込まない専用工房（福岡・薬院 SoyStories）で、お店の素材やロゴシールを使ったオリジナル植物性クラフトアイスを60個／6Lの小ロットからOEM製造。米粉と発酵素材の独自製法で滑らかな口どけ。最短約1か月でお届け。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://soystories.cafe/oem",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ja_JP",
    url: "https://soystories.cafe/oem",
    siteName: "SoyStories",
    images: [
      {
        url: "/images/gelato_circle_lineup.jpg",
        width: 1200,
        height: 630,
        alt: "SoyStories 専用工房でのオリジナルクラフトアイスOEM製造",
      },
    ],
  },
};

/**
 * 【LP-B】完全版 OEM LP（初見のお客様の頭に入る一本道構成 × 100%実物写真・パッケージ図解版）
 * 1. 何屋さんで何ができる？（Hero）
 * 2. どんな形・品質の商品が届く？（Premise：100mlカップ309円 / 2Lバルク4,000円 ＆ 3つの特徴）
 * 3. 手元の素材にあわせた3つの作り方・初期費用（Courses：①フタだけ0円 / ②粉を混ぜる1万円 / ③果物・液体から作る3万円）
 * 4. 実店舗での味の評価（Reviews：Google ★4.7）
 * 5. 検討フェーズ別の入り口（MidCta：無料3案相談 or 6個試食サンプル）
 * 6. ご相談から約1か月の流れ（Timeline）
 * 7. お店の利益シミュレーター（Simulator）
 * 8. よくあるご質問（FAQ）
 * 9. 無料相談・試食申込フォーム（Contact）
 */
export default function OemFullPage() {
  return (
    <>
      <OemHeader />
      <main className="lp-friendly flex-1 pt-14 sm:pt-16">
        <OemHeroSection />
        <OemPremiseSection />
        <OemCoursesSection />
        <DessertReviewsSection />
        <OemMidCtaBanner />
        <OemTimelineSection />
        <OemSimulatorSection />
        <OemFAQSection />
        <Suspense
          fallback={<div className="py-16 text-center text-sm text-gray-500">読み込み中...</div>}
        >
          <OemContactSection />
        </Suspense>

        {/* 定番フレーバー通常卸へのご案内 */}
        <section className="border-t border-gray-200 bg-[#f7f3ec] py-14 pb-24 md:pb-14">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-white p-6 shadow-2xs sm:flex-row sm:items-center sm:p-8">
              <div>
                <p className="text-brand text-xs font-bold">
                  オリジナル開発の前に、定番品の導入をご検討の方へ
                </p>
                <h2 className="text-ink mt-1 text-lg font-bold sm:text-xl">
                  完成された定番11フレーバーの業務用卸（最小4L〜）もございます
                </h2>
                <p className="text-ink-light mt-2 text-sm leading-relaxed">
                  開発費0円ですぐにお店のデザートメニューへ導入いただける定番ラインナップをご覧いただけます。
                </p>
              </div>
              <Link
                href="/dessert"
                className="bg-brand hover:bg-brand-dark shrink-0 rounded-full px-6 py-3.5 text-sm font-bold text-white transition-colors"
              >
                定番フレーバーの卸案内を見る →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <OemFloatingCTA />
    </>
  );
}
