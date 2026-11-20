import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DessertProductsSection from "../dessert/components/DessertProductsSection";
import DessertSampleSection from "../dessert/components/DessertSampleSection";

const TITLE = "定番11フレーバー業務用卸（バルク・個食カップ）要点ご案内｜SoyStories";
const DESCRIPTION =
  "SoyStoriesの定番11フレーバーをそのままお店に導入いただける通常卸（業務用1L・2Lバルク最小4L〜／自社シール100ml個食カップ最小60個〜）の価格・仕様まとめページです。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://soystories.cafe/wholesale",
  },
};

/**
 * 【LP-D】要点版 定番卸LP
 * 完全版OEM LP（/oem）をご覧になった方が「まずは既存の11種をそのまま仕入れたい」と開いた際に、
 * 重複するブランド説明を省き、①定番バルク と ②定番カップ の仕様・価格・サンプル導線だけを端的に案内する。
 */
export default function WholesaleBriefPage() {
  return (
    <>
      <Header />
      <main className="lp-friendly flex-1 pt-16 sm:pt-20">
        {/* コンパクトな要点版ヘッダー */}
        <section className="border-b border-gray-200/80 bg-[#f7f3ec] py-10 sm:py-14">
          <div className="mx-auto max-w-5xl px-6">
            <span className="bg-brand/10 text-brand inline-block rounded-full px-3.5 py-1 text-xs font-bold">
              定番11フレーバー 通常卸のご案内（要点版）
            </span>
            <h1 className="text-ink mt-3 text-2xl leading-snug font-bold sm:text-3xl">
              開発費0円ですぐに導入できる
              <span className="block">「業務用バルク」と「個食カップ」の2つの仕入れ形態</span>
            </h1>
            <p className="text-ink-light mt-3 max-w-3xl text-sm leading-relaxed sm:text-[15px]">
              薬院の実店舗で人気の全11フレーバーを、お店のオペレーションに合わせて
              <strong>「店内盛り付け用の業務用バルク（4L〜）」</strong>または
              <strong>「そのまま販売・提供できるSoyStoriesシール付き個食カップ（60個〜）」</strong>
              からお選びいただけます。どちらもフレーバーを自由に組み合わせてご注文可能です。
            </p>

            {/* 2形態の比較サマリーカード */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 shadow-2xs">
                <span className="bg-brand/10 text-brand rounded-full px-3 py-0.5 text-xs font-bold">
                  ① 定番 業務用バルク（イートイン向け）
                </span>
                <p className="text-ink mt-3 text-xl font-bold">1L 税別 ¥2,000 ／ 2L 税別 ¥4,000</p>
                <p className="text-ink-light mt-1.5 text-xs leading-relaxed">
                  最小4L（2L×2本 または
                  1L×4本など）から、11種を自由にミックス可能。1Lあたり約12〜20皿ご提供でき、高い粗利率を確保できます。
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-2xs">
                <span className="bg-brand/10 text-brand rounded-full px-3 py-0.5 text-xs font-bold">
                  ② 定番 個食カップ（物販・テイクアウト向け）
                </span>
                <p className="text-ink mt-3 text-xl font-bold">
                  100mlカップ 税別 ¥300
                  <span className="text-ink-muted ml-1.5 text-xs font-normal">（税込 ¥324）</span>
                </p>
                <p className="text-ink-light mt-1.5 text-xs leading-relaxed">
                  SoyStoriesデザインの天面シール付きで手配不要。最小60個（おススメ120個・100サイズ1箱）から、11種を自由にミックスして仕入れられます。
                </p>
              </div>
            </div>

            {/* 初見の方への1行救済リンク */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs">
              <Link href="/dessert" className="text-brand font-bold underline">
                ※SoyStoriesの製法・店舗ストーリー・導入事例も含めた完全版ページはこちら →
              </Link>
              <Link href="/oem/plan" className="text-ink-light hover:text-brand underline">
                お店のロゴシールやオリジナル味（OEM）をご希望の方はこちら →
              </Link>
            </div>
          </div>
        </section>

        {/* 全11フレーバー一覧＆商品仕様 */}
        <DessertProductsSection />

        {/* 無料試食サンプル・お問い合わせフォーム */}
        <DessertSampleSection />
      </main>
      <Footer />
    </>
  );
}
