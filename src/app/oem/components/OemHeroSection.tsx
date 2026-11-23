import Image from "next/image";

const HERO_NUMBERS = [
  { value: "60個 / 6L〜", label: "小ロット製造" },
  { value: "¥0 / ¥30,000", label: "選べる2プラン" },
  { value: "最短 1か月", label: "ご相談〜納品目安" },
];

export default function OemHeroSection() {
  return (
    <section className="bg-bg-white w-full pt-6 pb-12 sm:pt-12 sm:pb-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 md:grid-cols-12 md:gap-12">
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
              店内皿盛り「2Lバルク」も、
              <br />
              お持ち帰り「100mlカップ」も両対応
            </p>
          </div>
        </div>

        <div className="md:order-1 md:col-span-6">
          <p className="text-brand text-xs font-bold tracking-wide">
            福岡・薬院 SoyStories｜乳・卵・小麦フリー専用工房製
          </p>

          <h1 className="text-ink mt-3 text-[22px] leading-[1.42] font-bold tracking-tight sm:text-3xl lg:text-[34px]">
            お店の食材やロゴでつくる、
            <span className="mt-1 block">
              「
              <span className="bg-[linear-gradient(transparent_62%,#f9d9e3_62%)]">
                お店だけのクラフトアイス
              </span>
              」
            </span>
          </h1>

          <p className="text-ink-light mt-3.5 text-[14.5px] leading-[1.8] sm:text-[15.5px]">
            お店のお茶・珈琲・地域の果物やロゴシールを使って、乳・卵・小麦不使用のクラフトアイスを
            <strong className="text-ink">60個・6Lの小ロット</strong>から製造します。
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#courses"
              className="bg-brand hover:bg-brand-dark inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-bold whitespace-nowrap text-white shadow-2xs transition-colors"
            >
              2つのプラン・料金を見る ↓
            </a>
            <a
              href="#contact-form"
              className="bg-cta hover:bg-cta-hover inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-bold whitespace-nowrap text-white shadow-2xs transition-colors"
            >
              無料で相談・試食を申し込む →
            </a>
          </div>

          <dl className="mt-7 grid grid-cols-3 divide-x divide-gray-200 border-t border-gray-100 pt-4">
            {HERO_NUMBERS.map((item) => (
              <div key={item.value} className="px-2 text-center first:pl-0 last:pr-0">
                <dt className="sr-only">{item.label}</dt>
                <dd className="text-ink text-base font-bold tracking-tight sm:text-xl">
                  {item.value}
                </dd>
                <dd className="text-ink-muted mt-1 text-[11px] leading-snug">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
