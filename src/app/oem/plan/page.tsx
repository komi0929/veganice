import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import OemCoursesSection from "../components/OemCoursesSection";
import OemTimelineSection from "../components/OemTimelineSection";
import OemSimulatorSection from "../components/OemSimulatorSection";
import OemFAQSection from "../components/OemFAQSection";
import OemContactSection from "../components/OemContactSection";

const TITLE = "オリジナルアイスOEMの仕組み・料金のご案内（要点版）｜SoyStories";
const DESCRIPTION =
  "すでにSoyStoriesのクラフトアイスをご覧いただいた店舗様・事業者様向けのOEM要点ご案内ページです。天面シール変更（開発費0円）・オリジナル開発（1万円／3万円）・販売イメージ試算・最短1か月の流れをご確認いただけます。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://soystories.cafe/oem/plan",
  },
};

/**
 * 【LP-C】要点版 OEM LP
 * すでに定番バルク営業LP（/ または /dessert）をご覧になったお客様・営業やりとり中の店舗様向け。
 * 重複するブランド紹介を省き、OEMの3コース・料金・販売イメージ試算・最短1か月の流れだけを最短距離で提示する。
 */
export default function OemBriefPlanPage() {
  return (
    <>
      <Header />
      <main className="lp-friendly flex-1 pt-16 sm:pt-20">
        {/* コンパクトな要点版ヘッダー ＋ 初見転送時の1行折りたたみ救済 */}
        <section className="border-b border-gray-200/80 bg-[#f7f3ec] py-10 sm:py-14">
          <div className="mx-auto max-w-5xl px-6">
            <span className="bg-brand/10 text-brand inline-block rounded-full px-3.5 py-1 text-xs font-bold">
              OEM・オリジナル製造 要点ガイド
            </span>
            <h1 className="text-ink mt-3 text-2xl leading-snug font-bold sm:text-3xl">
              お店の屋号シール・オリジナル食材でつくる
              <span className="block">OEMのコース・料金・お届けの流れ</span>
            </h1>
            <p className="text-ink-light mt-3 max-w-3xl text-sm leading-relaxed sm:text-[15px]">
              いつもご覧いただきありがとうございます。このページでは、基本の製法説明を省き、
              <strong>
                「お店の天面シール対応」「お店の食材を使ったオリジナル開発（カップ・2Lバルク）」の条件とご予算目安だけ
              </strong>
              を端的にまとめています。
            </p>

            {/* 知人紹介・URL転送で初めて開いた方のための控えめな1行救済 */}
            <details className="group mt-5 rounded-2xl border border-gray-200/90 bg-white px-4 py-3 text-xs sm:text-[13px]">
              <summary className="text-ink-light flex cursor-pointer list-none items-center justify-between gap-2 font-medium [&::-webkit-details-marker]:hidden">
                <span>
                  ※SoyStoriesのアイス（卵・乳・小麦を持ち込まない専用工房・米粉製法）について初めてご覧になる方はこちら
                </span>
                <span className="text-brand shrink-0 font-bold group-open:rotate-180">▾</span>
              </summary>
              <div className="text-ink-light mt-3 space-y-2 border-t border-gray-100 pt-3 leading-relaxed">
                <p>
                  SoyStories（福岡・薬院／Google
                  ★4.7）は、卵・乳・小麦を一切持ち込まない専用工房で作る植物性クラフトアイス専門店です。乳脂肪ゼロで食後もさっぱり食べきれ、米粉と甘酒・白みその独自製法により、植物性アイスにありがちなシャリシャリ感がなく冷凍庫の出し入れでも滑らかな口どけが続きます。
                </p>
                <p>
                  <Link href="/oem" className="text-brand font-bold underline">
                    詳しい品質・製法紹介つきの完全版OEMページを見る →
                  </Link>
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* ① 3コースと量産価格（カップ＆2Lバルク） */}
        <OemCoursesSection />

        {/* ② 販売イメージ・ご負担目安シミュレーター */}
        <OemSimulatorSection />

        {/* ③ 最短約1か月の流れ */}
        <OemTimelineSection />

        {/* ④ よくあるご質問 */}
        <OemFAQSection />

        {/* ⑤ 事前ヒアリング・ご相談フォーム（顧客トークン・店名自動入力対応） */}
        <Suspense
          fallback={<div className="py-16 text-center text-sm text-gray-500">読み込み中...</div>}
        >
          <OemContactSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
