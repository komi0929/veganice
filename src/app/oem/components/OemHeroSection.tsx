import Image from "next/image";

const HERO_NUMBERS = [
  { value: "60個 / 6L〜", label: "小ロットから\n製造できます" },
  { value: "開発費 ¥0〜", label: "フタシール変更なら\n初期開発費なし" },
  { value: "最短 1か月", label: "ご相談から\n納品までの目安" },
];

/**
 * 初見の人に3秒で「何屋さんで、何ができるのか」がスッと伝わるファーストビュー
 * AI生成イラストは使わず、SoyStories実物のカップアイス写真とシンプルな言葉だけで構成
 */
export default function OemHeroSection() {
  return (
    <section className="bg-bg-white w-full pt-6 pb-14 sm:pt-12 sm:pb-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 md:grid-cols-12 md:gap-12">
        {/* 実物写真（スマホでは最初に目に入るよう上部に配置） */}
        <div className="relative md:order-2 md:col-span-6">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[#f7f3ec] shadow-sm">
            <Image
              src="/images/gelato_circle_lineup.jpg"
              alt="SoyStoriesの専用工房で製造する100%植物性クラフトアイス"
              fill
              priority
              fetchPriority="high"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* 業務用2Lバルクも選べることを実物写真1つでシンプルに補足 */}
          <div className="mt-3 inline-flex items-center gap-3 rounded-2xl border border-gray-200/80 bg-white p-2 pr-4 shadow-sm sm:absolute sm:-bottom-5 sm:left-4 sm:mt-0">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-gray-100">
              <Image
                src="/images/bulk_2l.jpg"
                alt="業務用の2Lバルク容器"
                fill
                className="object-cover"
                sizes="44px"
              />
            </div>
            <p className="text-ink text-xs leading-snug font-bold">
              お土産用の「100mlカップ」も、
              <br />
              店内皿盛り用の「2Lバルク」も作れます
            </p>
          </div>
        </div>

        {/* テキスト（初見の人が迷わないよう、要素を詰め込みすぎず一本道で伝える） */}
        <div className="md:order-1 md:col-span-6">
          <p className="text-brand text-xs font-bold tracking-wide">
            福岡・薬院の植物性スイーツ専門店 SoyStories｜乳・卵・小麦不使用
          </p>

          <h1 className="text-ink mt-3 text-[22px] leading-[1.42] font-bold tracking-tight sm:text-3xl lg:text-[34px]">
            お店の素材やロゴでつくる、
            <span className="mt-1 block whitespace-nowrap">
              「
              <span className="bg-[linear-gradient(transparent_62%,#f9d9e3_62%)]">
                お店だけのクラフトアイス
              </span>
              」
            </span>
          </h1>

          <p className="text-ink-light mt-4 text-[15px] leading-[1.85] sm:text-base">
            農園で育てた果物、カフェ自慢のお茶やコーヒー、あるいはお店のロゴシールを使って、オリジナルの植物性アイスを
            <strong>60個・6Lの小ロット</strong>から製造いたします。
          </p>
          <p className="text-ink-light mt-2 text-[15px] leading-[1.85] sm:text-base">
            乳・卵・小麦を一切持ち込まない福岡・薬院の専用工房から、冷凍便で全国へお届けします。
          </p>

          {/* シンプルで迷わない2ボタン */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#courses"
              className="bg-brand hover:bg-brand-dark inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3.5 text-sm font-bold whitespace-nowrap text-white shadow-2xs transition-colors"
            >
              3つの作り方・料金を見る ↓
            </a>
            <a
              href="#contact-form"
              className="bg-cta hover:bg-cta-hover inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3.5 text-sm font-bold whitespace-nowrap text-white shadow-2xs transition-colors"
            >
              無料で相談・試食を申し込む →
            </a>
          </div>

          {/* 3つの基本数字（箱で囲わずすっきり配置） */}
          <dl className="mt-8 grid grid-cols-3 divide-x divide-gray-200 border-t border-gray-100 pt-5">
            {HERO_NUMBERS.map((item) => (
              <div key={item.value} className="px-2 text-center first:pl-0 last:pr-0">
                <dt className="sr-only">{item.label}</dt>
                <dd className="text-ink text-base font-bold tracking-tight sm:text-xl">
                  {item.value}
                </dd>
                <dd className="text-ink-muted mt-1 text-[11px] leading-snug whitespace-pre-line">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
