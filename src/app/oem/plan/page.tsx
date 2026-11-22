import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import OemHeader from "../components/OemHeader";
import OemCoursesSection from "../components/OemCoursesSection";
import OemTimelineSection from "../components/OemTimelineSection";
import OemSimulatorSection from "../components/OemSimulatorSection";
import OemFAQSection from "../components/OemFAQSection";
import OemContactSection from "../components/OemContactSection";
import OemFloatingCTA from "../components/OemFloatingCTA";

const PLAN_TITLE = "OEM・ロゴ入りカップ製造プランのご案内（要点版）｜SoyStories";
const PLAN_DESC =
  "飲食店・カフェ・菓子店・生産者様向け。開発費0円のフタ丸シール変更プラン（60個〜）と、お店の素材で作るオリジナル開発プラン（6L/60個〜・翌月末請求書払い）の要点案内。";

export const metadata: Metadata = {
  title: PLAN_TITLE,
  description: PLAN_DESC,
  robots: { index: false, follow: true },
  alternates: { canonical: "https://soystories.cafe/oem/plan" },
  openGraph: {
    title: PLAN_TITLE,
    description: PLAN_DESC,
    type: "website",
    locale: "ja_JP",
    url: "https://soystories.cafe/oem/plan",
    siteName: "SoyStories",
    images: [
      {
        url: "/images/gelato_circle_lineup.jpg",
        width: 1200,
        height: 630,
        alt: "SoyStories お店ロゴ入りカップ・オリジナルクラフトアイスOEMのご案内",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PLAN_TITLE,
    description: PLAN_DESC,
    images: ["/images/gelato_circle_lineup.jpg"],
  },
};

interface OemPlanPageProps {
  searchParams: Promise<{
    store?: string;
    name?: string;
    email?: string;
    phone?: string;
    c?: string;
    src?: string;
  }>;
}

/**
 * 【LP-C】要点版 OEM案内ページ（営業・顧客カルテからの専用URL着地用）
 * 前提説明を省き、2つのプラン・料金・利益試算・お支払い条件（翌月末請求書払い）・申込フォームへ直結する。
 */
export default async function OemPlanPage({ searchParams }: OemPlanPageProps) {
  const params = await searchParams;
  const storeName = params.store?.trim() || null;

  const forwardedQuery = new URLSearchParams();
  for (const key of ["store", "name", "email", "phone", "c", "src"] as const) {
    const val = params[key]?.trim();
    if (val) {
      forwardedQuery.set(key, val);
    }
  }
  if (!forwardedQuery.has("src")) {
    forwardedQuery.set("src", "oem_plan");
  }
  const fullOemHref = `/oem?${forwardedQuery.toString()}`;

  return (
    <>
      <OemHeader />
      <main className="lp-friendly flex-1 pt-14 sm:pt-16">
        <section
          id="about-oem"
          className="scroll-mt-16 border-b border-gray-200 bg-[#f7f3ec] py-10 sm:py-14"
        >
          <div className="mx-auto max-w-4xl px-6">
            {storeName && (
              <p className="bg-brand/10 text-brand mb-3 inline-block rounded-full px-4 py-1 text-xs font-bold">
                {storeName} 様 向け 要点ご案内ページ
              </p>
            )}
            <h1 className="text-ink text-2xl leading-snug font-bold sm:text-3xl">
              お店仕様のカップ製造・オリジナル味開発（OEM）のご案内
            </h1>
            <p className="text-ink-light mt-3 text-sm leading-relaxed sm:text-[15px]">
              乳・卵・小麦を持ち込まない専用工房の米粉クラフトアイスを、
              <strong>①「フタだけお店ロゴ（開発費¥0・60個〜）」</strong>
              または
              <strong>②「お店の素材でオリジナル開発（60個／2L×3本〜）」</strong>
              の2プランでお作りします。お支払いは通常の卸と同じ
              <strong>「納品月の月末締め・翌月末ご請求書払い」</strong>
              です。
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-xs">
              <a
                href="#contact-form"
                className="bg-cta hover:bg-cta-hover rounded-full px-5 py-2.5 font-bold text-white transition-colors"
              >
                そのまま事前相談・サンプル申込へ進む ↓
              </a>
              <Link
                href={fullOemHref}
                className="text-ink-light hover:text-brand rounded-full border border-gray-300 bg-white px-4 py-2.5 font-bold transition-colors"
              >
                アイスの特徴も含めた詳しいページを見る
              </Link>
            </div>
          </div>
        </section>

        <OemCoursesSection />
        <OemSimulatorSection />
        <OemTimelineSection />
        <OemFAQSection />

        <Suspense
          fallback={<div className="py-16 text-center text-sm text-gray-500">読み込み中...</div>}
        >
          <OemContactSection />
        </Suspense>
      </main>
      <Footer />
      <OemFloatingCTA />
    </>
  );
}
