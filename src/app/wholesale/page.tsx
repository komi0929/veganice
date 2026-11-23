import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WholesaleHeader, { type WholesaleNavItem } from "@/app/components/wholesale/WholesaleHeader";
import WholesaleFooter from "@/app/components/wholesale/WholesaleFooter";
import WholesaleFloatingCTA from "@/app/components/wholesale/WholesaleFloatingCTA";
import WholesaleFlavorGrid, {
  type WholesaleFlavorGroup,
} from "@/app/components/wholesale/WholesaleFlavorGrid";
import WholesaleContactCard from "@/app/components/wholesale/WholesaleContactCard";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";
import { PRICING_CONSTANTS } from "@/app/oem/data/oemSpecs";

const PAGE_TITLE = "定番11フレーバー 業務用卸（バルク・個食カップ）のご案内（要点版）";
const PAGE_DESC =
  "飲食店・カフェ・ベーカリー・ショップ様向け。定番11フレーバーを仕入れられる業務用バルク（最小4L〜）とSoyStoriesラベル付き100ml個食カップ（最小60個〜・翌月末請求書払い）の要点案内。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.soystories.cafe/wholesale" },
  openGraph: {
    title: `${PAGE_TITLE} | SoyStories`,
    description: PAGE_DESC,
    type: "website",
    locale: "ja_JP",
    url: "https://www.soystories.cafe/wholesale",
    siteName: "SoyStories",
    images: [
      {
        url: "/images/gelato_cup_tower.jpg",
        width: 1200,
        height: 630,
        alt: "SoyStories 業務用バルク・100ml個食カップ卸のご案内",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | SoyStories`,
    description: PAGE_DESC,
    images: ["/images/gelato_cup_tower.jpg"],
  },
};

const navItems: WholesaleNavItem[] = [
  { label: "2つの仕入れ形態", href: "#formats" },
  { label: "全11種の味", href: "#flavors" },
  { label: "お取引条件", href: "#terms" },
  { label: "無料サンプル申込", href: "#contact-form" },
];

const standardFlavorGroups: WholesaleFlavorGroup[] = [
  {
    title: "濃厚ミルク・カカオ・茶葉系（6種）",
    subtitle: "クーベルチュールやココナッツ、濃縮甘酒・白みその濃密仕立て",
    items: [
      {
        displayName: "バニラココナッツ",
        image: "/images/flavors/vanilla_coconut.png",
        note: "ココナッツと白みそが香る王道バニラ",
      },
      {
        displayName: "UMAMIバニラ",
        image: "/images/flavors/umami_vanilla.png",
        note: "甘酒と白みその塩キャラメル様のコク",
      },
      {
        displayName: "抹茶",
        image: "/images/flavors/matcha.png",
        note: "濃縮甘酒と白みそが支えるお濃茶仕立て",
      },
      {
        displayName: "ほうじ茶",
        image: "/images/flavors/houjicha.png",
        note: "焙煎茶葉の立ち上る薫香と甘酒のコク",
      },
      {
        displayName: "ショコラ",
        image: "/images/flavors/chocolate.png",
        note: "冷たい生チョコのような濃密カカオ",
      },
      {
        displayName: "アールグレイ",
        image: "/images/flavors/earl_gray.png",
        note: "ベルガモットと紅茶葉が華やかに立つ一玉",
      },
    ],
  },
  {
    title: "完熟ピューレ・国産ストレート果汁系（5種・豆乳不使用）",
    subtitle: "ココナッツや米粉で果肉のようなとろみに仕立てた果実系",
    items: [
      {
        displayName: "マンゴー",
        image: "/images/flavors/mango.png",
        note: "完熟果肉を裏ごししたような濃密な甘み",
      },
      {
        displayName: "ミックスベリー",
        image: "/images/flavors/berry_mix.png",
        note: "苺と木苺ピューレの鮮やかな果実味",
      },
      {
        displayName: "もも",
        image: "/images/flavors/peach.png",
        note: "国産白桃をかじったような瑞々しい香り",
      },
      {
        displayName: "りんご",
        image: "/images/flavors/apple.png",
        note: "国産りんご果汁の蜜感と爽やかな酸味",
      },
      {
        displayName: "ドラゴンフルーツ",
        image: "/images/flavors/dragon_fruit.png",
        note: "ルビー色にパインが香る華やかな南国味",
      },
    ],
  },
];

const termsRows = [
  {
    label: "業務用バルク価格",
    value: "1L 税別 ¥2,000 ／ 2L 税別 ¥4,000（全11種同価格・最小4L〜、味ミックス自由）",
  },
  {
    label: "定番カップ価格",
    value: `100mlカップ 税別 ¥${PRICING_CONSTANTS.cupBasePriceExTax}（税込 ¥${PRICING_CONSTANTS.cupBasePriceTaxIncl}・SoyStoriesラベル付・最小60個〜、120個推奨）`,
  },
  { label: "1Lあたりの杯数目安", value: WHOLESALE_FACTS.scoopsPerLiter },
  { label: "無料試食サンプル", value: WHOLESALE_FACTS.sampleTerms },
  { label: "お支払い条件", value: WHOLESALE_FACTS.payment },
  { label: "お届け目安", value: WHOLESALE_FACTS.leadTime },
  {
    label: "保存方法・食品分類",
    value: `${WHOLESALE_FACTS.storage} ／ 氷菓（食品表示基準上の賞味期限表示義務なし）`,
  },
  { label: "不使用素材", value: WHOLESALE_FACTS.freeFromAdditivesAndWhiteSugar },
  { label: "アレルゲン管理", value: WHOLESALE_FACTS.allergen },
] as const;

interface WholesaleBriefPageProps {
  searchParams: Promise<{
    store?: string;
    name?: string;
    email?: string;
    phone?: string;
    c?: string;
    s?: string;
  }>;
}

/**
 * 【LP-D】要点版 定番卸LP（/oem からの遷移・既存商談先への要点共有用）
 * 重複するブランド・製法説明を省き、「①業務用バルク（4L〜）」「②定番100mlカップ（60個〜）」の
 * 仕様・全11フレーバー・取引条件・無料サンプル申込フォームだけを端的にまとめる。
 */
export default async function WholesaleBriefPage({ searchParams }: WholesaleBriefPageProps) {
  const params = await searchParams;
  const storeName = params.store?.trim() || null;

  const oemForward = new URLSearchParams();
  for (const key of ["store", "name", "email", "phone", "c", "s"] as const) {
    const val = params[key]?.trim();
    if (val) {
      oemForward.set(key, val);
    }
  }
  oemForward.set("src", "wholesale");
  const oemPlanHref = `/oem/plan?${oemForward.toString()}`;

  return (
    <>
      <WholesaleHeader pageHref="/wholesale" navItems={navItems} />
      <main className="flex-1 pt-14 sm:pt-16">
        {/* 1. 要点ヘッダー ＆ 選べる2つの仕入れ形態 */}
        <section
          id="formats"
          className="scroll-mt-16 border-b border-stone-200/80 bg-[#f7f3ec] py-10 sm:py-16"
        >
          <div className="mx-auto max-w-5xl px-6">
            {storeName ? (
              <p className="bg-brand/10 text-brand mb-3 inline-block rounded-full px-4 py-1 font-sans text-xs font-bold">
                {storeName} 様 向け 定番フレーバー卸ご案内
              </p>
            ) : (
              <p className="bg-brand/10 text-brand mb-3 inline-block rounded-full px-3.5 py-1 font-sans text-xs font-bold">
                定番11フレーバー 通常卸のご案内（要点版）
              </p>
            )}

            <h1 className="text-ink text-2xl leading-snug font-bold sm:text-3xl">
              店内用の1L・2Lバルク（4L〜）と、販売用の100mlカップ（60個〜）
            </h1>
            <p className="text-ink-light mt-3 max-w-3xl font-sans text-sm leading-relaxed sm:text-[15px]">
              乳・卵・小麦を持ち込まない専用工房の定番全11フレーバーを、用途に合わせて
              <strong>「店内盛り付け用の業務用バルク（4L〜・味ミックス自由）」</strong>または
              <strong>「そのまま販売できるSoyStoriesラベル付き100mlカップ（60個〜）」</strong>
              からお選びいただけます。お支払いは
              <strong>「納品月の月末締め・翌月末ご請求書払い」</strong>です。
            </p>

            {/* 実物写真つき 2形態カード */}
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* ① 業務用バルク */}
              <div className="overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-2xs">
                <div className="relative aspect-[16/9] w-full bg-stone-100">
                  <Image
                    src="/images/bulk_2l.jpg"
                    alt="業務用1L・2Lバルク容器"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <span className="bg-brand absolute top-3 left-3 rounded-full px-3.5 py-1 font-sans text-xs font-bold text-white">
                    店内デザート皿盛り・パフェに
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-ink text-lg font-bold">① 業務用バルク（1L・2L角型）</h2>
                  <p className="text-brand mt-1.5 font-sans text-xl font-bold">
                    1L 税別 ¥2,000 ／ 2L 税別 ¥4,000
                  </p>
                  <p className="text-ink-light mt-2 font-sans text-xs leading-relaxed sm:text-[13px]">
                    1Lあたり約12〜20皿とれ、1皿原価は約100〜167円（税別）。冷凍庫のスペースに合わせて1Lと2Lを取り混ぜてご注文いただけます。
                  </p>
                  <p className="text-ink mt-3 rounded-xl bg-[#faf8f4] px-3.5 py-2 font-sans text-xs font-bold">
                    最小ロット：4L〜（例：1L×4本、2L×2本など11種ミックス自由）
                  </p>
                </div>
              </div>

              {/* ② 定番100ml個食カップ */}
              <div className="overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-2xs">
                <div className="relative aspect-[16/9] w-full bg-stone-100">
                  <Image
                    src="/images/gelato_cup_tower.jpg"
                    alt="SoyStoriesラベル付き100ml個食カップ"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <span className="bg-brand absolute top-3 left-3 rounded-full px-3.5 py-1 font-sans text-xs font-bold text-white">
                    テイクアウト・レジ横物販・売店に
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-ink text-lg font-bold">
                    ② 定番 100ml個食カップ（自社ラベル付）
                  </h2>
                  <p className="text-brand mt-1.5 font-sans text-xl font-bold">
                    1個 税別 ¥{PRICING_CONSTANTS.cupBasePriceExTax}
                    <span className="text-ink-muted ml-1.5 text-xs font-normal">
                      （税込 ¥{PRICING_CONSTANTS.cupBasePriceTaxIncl}）
                    </span>
                  </p>
                  <p className="text-ink-light mt-2 font-sans text-xs leading-relaxed sm:text-[13px]">
                    SoyStoriesのカラーデザイン丸シール＆底面法定表示ラベル貼付済みでお届け。シールの手配なしで届いたその日から店頭販売いただけます。
                  </p>
                  <p className="text-ink mt-3 rounded-xl bg-[#faf8f4] px-3.5 py-2 font-sans text-xs font-bold">
                    最小ロット：60個〜（120個で1箱ぴったり）
                  </p>
                </div>
              </div>
            </div>

            {/* アクション＆相互リンク */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 font-sans text-xs">
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="#contact-form"
                  className="bg-cta hover:bg-cta-hover rounded-full px-5 py-2.5 font-bold text-white transition-colors"
                >
                  無料試食サンプル（6個）を申し込む ↓
                </a>
                <Link
                  href="/dessert"
                  className="text-ink-light hover:text-brand rounded-full border border-stone-300 bg-white px-4 py-2.5 font-bold transition-colors"
                >
                  アイスの製法・特徴も含めた詳しいページを見る
                </Link>
              </div>
              <Link
                href={oemPlanHref}
                className="text-brand font-bold underline underline-offset-4"
              >
                お店ロゴシールやオリジナル味開発（OEM）はこちら →
              </Link>
            </div>
          </div>
        </section>

        {/* 2. 全11フレーバー一覧（タップで原材料・栄養モーダル表示） */}
        <section id="flavors" className="bg-bg-white scroll-mt-16 py-14 sm:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <p className="text-brand font-sans text-xs font-bold tracking-wider">
              全11種のラインナップ
            </p>
            <h2 className="text-ink mt-1 text-2xl font-bold sm:text-3xl">
              全11フレーバー同価格・組み合わせ自由
            </h2>
            <p className="text-ink-light mt-2 font-sans text-sm leading-relaxed">
              各フレーバーを押すと、全原材料・アレルゲン・栄養成分表示をご確認いただけます。
            </p>

            <div className="mt-8">
              <WholesaleFlavorGrid groups={standardFlavorGroups} />
            </div>
          </div>
        </section>

        {/* 3. お取引条件まとめ */}
        <section id="terms" className="scroll-mt-16 bg-[#f7f3ec] py-14 sm:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <p className="text-brand font-sans text-xs font-bold tracking-wider">
              仕様・お取引条件
            </p>
            <h2 className="text-ink mt-1 text-2xl font-bold sm:text-3xl">ご注文・納品の決まり</h2>

            <div className="mt-6 overflow-hidden rounded-3xl border border-stone-200/80 bg-white">
              <dl className="divide-y divide-stone-200/70">
                {termsRows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[11rem_1fr] sm:gap-5 sm:px-7"
                  >
                    <dt className="text-brand font-sans text-xs font-bold sm:text-sm">
                      {row.label}
                    </dt>
                    <dd className="text-ink font-sans text-sm leading-relaxed">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* 4. 無料試食サンプル（6個）・お問い合わせフォーム */}
        <section id="contact-form" className="bg-bg-white scroll-mt-16 py-14 sm:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="mb-8 text-center">
              <p className="text-brand font-sans text-xs font-bold tracking-wider">
                商品代無料・送料のみ着払い
              </p>
              <h2 className="text-ink mt-1.5 text-2xl font-bold sm:text-3xl">
                無料試食サンプル（6個）・お取引のご相談
              </h2>
              <p className="text-ink-light mt-2 font-sans text-sm leading-relaxed">
                まずは6個の無料サンプルで、米粉×発酵製法のなめらかな口どけと食後のさっぱり感をお確かめください。
              </p>
            </div>

            <WholesaleContactCard
              source="wholesale"
              companyLabel="お店・会社のお名前"
              companyPlaceholder="例：レストラン〇〇 ／ カフェ〇〇"
              emailPlaceholder="info@example.jp"
              addressPlaceholder="福岡県福岡市中央区薬院..."
              deliveryDescription="お店でお受け取りになりやすい曜日・時間帯をお選びください（任意）。"
              deliveryNotePlaceholder="例：火曜定休、14〜16時が受け取りやすいです"
              notesLabel="検討中の仕入れ形態・メモ"
              notesPlaceholder="例：2Lバルクでの導入を検討中 ／ 個食カップの物販もあわせて検討中"
              inquiryPlaceholder="例：定番カップ60個と業務用バルクの混載条件について相談したいです。"
              presetTitle="人気の定番バランス6種セット"
              presetDescription="UMAMIバニラ・抹茶・ほうじ茶・ショコラ・マンゴー・ミックスベリーを1個ずつ"
              presetFlavors={[
                "UMAMIバニラ",
                "抹茶",
                "ほうじ茶",
                "ショコラ",
                "マンゴー",
                "ミックスベリー",
              ]}
            />
          </div>
        </section>
      </main>
      <WholesaleFooter
        taglineLines={[
          "定番11フレーバーを、業務用バルク（4L〜）や",
          "個食カップ（60個〜）で手軽にお店へ。",
        ]}
        navItems={navItems}
        oemSrc="wholesale_footer"
      />
      <WholesaleFloatingCTA />
    </>
  );
}
