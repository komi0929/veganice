import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import DessertReviewsSection from "../dessert/components/DessertReviewsSection";
import OemHeader from "./components/OemHeader";
import OemHeroSection from "./components/OemHeroSection";
import OemCoursesSection from "./components/OemCoursesSection";
import OemUseCasesSection from "./components/OemUseCasesSection";
import OemStrengthsSection from "./components/OemStrengthsSection";
import OemTimelineSection from "./components/OemTimelineSection";
import OemSimulatorSection from "./components/OemSimulatorSection";
import OemFAQSection from "./components/OemFAQSection";
import OemContactSection from "./components/OemContactSection";
import OemFloatingCTA from "./components/OemFloatingCTA";

const TITLE = "オリジナル植物性アイスOEM・PB製造｜小ロット60個・最短1か月｜乳・卵・小麦不使用";
const DESCRIPTION =
  "卵・乳・小麦を持ち込まない専用工房（福岡・薬院 SoyStories）で、お店の素材や屋号シールを使ったオリジナル植物性クラフトアイスを60個／6Lの小ロットからOEM製造。米粉と発酵素材の独自製法で滑らかな口どけ。最短約1か月でお届け。";

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
        url: "/images/ec_gelato_6set.jpg",
        width: 1200,
        height: 630,
        alt: "SoyStories 専用工房でのオリジナルクラフトアイスOEM製造",
      },
    ],
  },
};

/**
 * 【LP-B】完全版 OEM LP（ビジュアル・図解進化版）
 * 構成順序も「何ができるか（3コース図解・活用シーン）」を最優先で先頭に出し、
 * 直感理解 → 品質の裏付け → 1か月フロー図解 → 収支試算 → 相談フォームへと自然に流れる設計
 */
export default function OemFullPage() {
  return (
    <>
      <OemHeader />
      <main className="lp-friendly flex-1 pt-14 sm:pt-16">
        {/* ① 3秒で全体像が直感できる写真コラージュ＆数字ヒーロー */}
        <OemHeroSection />

        {/* ② 最重要：文字を読まずに「写真＋足し算図解＋比較表」でわかる3つのコース */}
        <OemCoursesSection />

        {/* ③ 写真で見る4つの業態別活用イメージ（農園・カフェ・レストラン・物販） */}
        <OemUseCasesSection />

        {/* ④ 専用工房・米粉製法・発酵素材の3つの品質基盤（写真＋タグ図解） */}
        <OemStrengthsSection />

        {/* ⑤ 薬院実店舗での評価（Google ★4.7・海外のお客様の声） */}
        <DessertReviewsSection />

        {/* ⑥ 最短約1か月の流れ ＆ 初回試作「2種×3個食べ比べBOX」図解 */}
        <OemTimelineSection />

        {/* ⑦ お店での販売イメージと、ご負担の目安シミュレーター */}
        <OemSimulatorSection />

        {/* ⑧ よくあるご質問（アコーディオン） */}
        <OemFAQSection />

        {/* ⑨ 事前ヒアリング・試食サンプル申込フォーム */}
        <Suspense
          fallback={<div className="py-16 text-center text-sm text-gray-500">読み込み中...</div>}
        >
          <OemContactSection />
        </Suspense>

        {/* ⑩ 定番フレーバー通常卸へのご案内 */}
        <section className="border-t border-gray-200 bg-[#f7f3ec] py-14">
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
