import Image from "next/image";
import { CtaButton } from "./ui";

const trustStats = [
  { value: "★4.7", label: "Googleの口コミ\n240件以上" },
  { value: "5.0", label: "HappyCow\n海外の口コミ" },
  { value: "4L〜", label: "少量から\n注文できます" },
];

/**
 * ファーストビュー
 * 3秒で「何か（福岡のスイーツ店の業務用アイス）」「何に良いか（食後のデザート）」が伝わることを最優先。
 * スマホでは「写真 → 見出し → CTA」の順に縦積み。
 */
export default function DessertHeroSection() {
  return (
    <section className="bg-bg-white w-full pt-16 sm:pt-[72px]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 md:items-center md:gap-12 md:px-8 md:py-16">
        {/* 写真 */}
        <div className="relative md:order-2">
          <div className="relative aspect-[3/2] w-full overflow-hidden md:aspect-[4/5] md:rounded-3xl">
            <Image
              src="/images/hero_flagship.jpg"
              alt="ワッフルカップに盛り付けたSoyStoriesの抹茶といちごのアイス"
              fill
              priority
              className="object-cover object-[center_62%]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* 業務用で届くことを写真で補足 */}
          <div className="absolute right-4 -bottom-6 flex items-center gap-2.5 rounded-2xl bg-white p-2 pr-4 shadow-lg md:right-auto md:-bottom-5 md:-left-6">
            <div className="relative h-12 w-12 overflow-hidden rounded-xl">
              <Image
                src="/images/bulk_2l.jpg"
                alt="業務用の2Lバルク容器"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <p className="text-ink text-xs leading-snug font-bold">
              業務用
              <br />
              1L・2Lで届きます
            </p>
          </div>
        </div>

        {/* テキスト */}
        <div className="px-6 pt-8 pb-12 md:order-1 md:px-0 md:py-0">
          <p className="text-brand text-xs font-bold tracking-wide">
            <span className="inline-block">福岡・薬院発</span>
            <span className="mx-1 opacity-50">｜</span>
            <span className="inline-block">乳・卵・小麦不使用</span>
            <span className="mx-1 opacity-50">｜</span>
            <span className="inline-block">ヴィーガン＆グルテンフリー スイーツ専門店</span>
          </p>

          <h1 className="text-ink mt-3 font-bold tracking-tight">
            <span className="text-brand mb-1 block text-sm font-bold sm:text-lg">
              ヴィーガン飲食店・カフェの食後デザートに。
            </span>
            <span className="block text-[22px] leading-snug sm:text-4xl md:text-5xl">
              「
              <span className="bg-[linear-gradient(transparent_62%,#f9d9e3_62%)]">
                普通のアイスより美味しい
              </span>
              」と
            </span>
            <span className="mt-1 block text-[21px] leading-snug sm:text-4xl md:text-5xl">
              選ばれる、専門店のクラフトアイス。
            </span>
          </h1>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-brand/10 text-brand rounded-full px-3 py-1 text-xs font-bold">
              100%植物性（乳・卵・小麦不使用）
            </span>
            <span className="text-ink-light rounded-full border border-gray-200 bg-[#f7f3ec] px-3 py-1 text-xs font-bold">
              スイーツ専門店の本格レシピ
            </span>
            <span className="text-ink-light rounded-full border border-gray-200 bg-[#f7f3ec] px-3 py-1 text-xs font-bold">
              専用工房製造（コンタミゼロ）
            </span>
          </div>

          <div className="text-ink-light mt-4 space-y-1.5 text-[15px] leading-[1.8] sm:text-base">
            <p>
              私たちは福岡・薬院でヴィーガン＆グルテンフリーのスイーツだけを追求してきた専門店です。
            </p>
            <p>
              ラーメンやバーガーなど自慢の料理に情熱を注ぐ飲食店様へ。食後のデザートは、スイーツ専門店の私たちが担います。
            </p>
            <p>
              乳脂肪ゼロで油分が口に残らず、満足感ある食事の後でも最高にすっきり。ヴィーガンの方はもちろん、
              <strong>
                一緒に来店されたノンヴィーガンの人でも「普通のアイスより断然美味しい！」と全員が完食できる本格クオリティ
              </strong>
              です。
            </p>
            <p className="text-ink font-bold">
              米粉を使った独自製法により、植物性アイスにありがちなシャリシャリ感がなく、業務用で冷凍庫を出し入れしても滑らかな舌触りが続きます。
            </p>
          </div>

          <div className="mt-6 md:flex md:justify-start">
            <CtaButton />
          </div>

          {/* 実績（数字で一目で） */}
          <dl className="mt-9 grid grid-cols-3 divide-x divide-gray-200 border-t border-gray-100 pt-6">
            {trustStats.map((stat) => (
              <div key={stat.value} className="px-2 text-center first:pl-0 last:pr-0">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-ink text-xl font-bold tracking-tight sm:text-2xl">
                  {stat.value}
                </dd>
                <dd className="text-ink-muted mt-1 text-[10.5px] leading-snug whitespace-pre-line sm:text-xs">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
