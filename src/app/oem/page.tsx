import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import DessertReasonsSection from "../dessert/components/DessertReasonsSection";
import DessertReviewsSection from "../dessert/components/DessertReviewsSection";
import OemHeader from "./components/OemHeader";
import OemCoursesSection from "./components/OemCoursesSection";
import OemTimelineSection from "./components/OemTimelineSection";
import OemSimulatorSection from "./components/OemSimulatorSection";
import OemFAQSection from "./components/OemFAQSection";
import OemContactSection from "./components/OemContactSection";

const TITLE =
  "オリジナル植物性アイスOEM・PB製造｜小ロット60個・最短1か月｜乳・卵・小麦不使用 SoyStories";
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
        url: "/images/factory_kitchen_craft.webp",
        width: 1200,
        height: 630,
        alt: "SoyStories 専用工房でのオリジナルクラフトアイスOEM製造",
      },
    ],
  },
};

/**
 * 【LP-B】完全版 OEM LP（単体公開・確認用）
 * 既存の公開ページ（/ や /dessert）には一切リンクや変更を出さず、/oem 単体で確認できる構成
 */
export default function OemFullPage() {
  return (
    <>
      <OemHeader />
      <main className="lp-friendly flex-1 pt-16 sm:pt-20">
        {/* ① ファーストビュー */}
        <section className="bg-[#f7f3ec] py-14 sm:py-22">
          <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-brand inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold shadow-2xs">
                卵・乳・小麦を持ち込まない専用工房 ｜ 小ロット 60個・6L〜
              </p>
              <h1 className="text-ink mt-5 text-[26px] leading-[1.38] font-bold tracking-tight sm:text-4xl sm:leading-[1.35]">
                お店の大切な食材と名前で、
                <span className="block">記憶に残るクラフトアイスを。</span>
              </h1>
              <p className="text-ink-light mt-5 text-[15px] leading-[1.85] sm:text-base">
                福岡・薬院の実店舗でGoogle
                ★4.7の評価をいただく植物性クラフトアイス工房「SoyStories」が、あなたのお店のオリジナルアイス（OEM・PB）をお作りします。
                乳脂肪ゼロで食後でもさっぱり食べきれ、米粉と発酵素材の独自製法により滑らかな舌触りが続く一品を、
                <strong>最短約1か月・60個（バルクは6L）</strong>からお届けします。
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contact-form"
                  className="bg-cta hover:bg-cta-hover inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white shadow-xs transition-colors"
                >
                  無料で事前相談・方向性提案を受ける
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href="#simulator"
                  className="text-ink hover:border-brand inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-4 text-sm font-bold transition-colors"
                >
                  料金・販売イメージを試算する
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-white shadow-md">
                <Image
                  src="/images/factory_kitchen_craft.webp"
                  alt="卵・乳・小麦を持ち込まないSoyStories専用工房"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <p className="text-ink-muted mt-2.5 text-center text-xs">
                福岡・薬院の専用工房にて1仕込みずつ丁寧にお作りしています
              </p>
            </div>
          </div>
        </section>

        {/* ② SoyStoriesの3つの独自製法・専用工房の安心（初見向け品質証明） */}
        <DessertReasonsSection />

        {/* ③ 実店舗での評価（Google ★4.7・海外客の声） */}
        <DessertReviewsSection />

        {/* ④ OEM 3つのコースと量産価格（カップ＆2Lバルク据え置き） */}
        <OemCoursesSection />

        {/* ⑤ 最短約1か月の流れ */}
        <OemTimelineSection />

        {/* ⑥ 穏やかなトーンの販売・ご負担目安シミュレーター */}
        <OemSimulatorSection />

        {/* ⑦ よくあるご質問 */}
        <OemFAQSection />

        {/* ⑧ 事前ヒアリング・試食サンプル申込フォーム */}
        <Suspense
          fallback={<div className="py-16 text-center text-sm text-gray-500">読み込み中...</div>}
        >
          <OemContactSection />
        </Suspense>

        {/* ⑨ 定番フレーバー通常卸へのご案内 */}
        <section className="border-t border-gray-200 bg-[#f7f3ec] py-14">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-white p-6 shadow-xs sm:flex-row sm:items-center sm:p-8">
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
    </>
  );
}
