import Image from "next/image";
import { SectionHeader } from "@/app/dessert/components/ui";
import { PRICING_CONSTANTS } from "../data/oemSpecs";

const QUALITY_POINTS = [
  {
    tag: "専用工房",
    title: "乳・卵・小麦「持ち込みゼロ」",
    body: "製造ラインでの混入リスクがない専用工房で手作り。アレルギーをお持ちの方や海外客にも安心です。",
    image: "/images/factory_kitchen_craft.webp",
    alt: "SoyStoriesの専用工房でアイスを仕込む様子",
  },
  {
    tag: "独自食感",
    title: "出し入れしても滑らかさが続く",
    body: "米粉を使った独自製法で、植物性アイスにありがちなシャリシャリ感がなく、冷凍庫の開閉でも滑らかな舌触りが続きます。",
    image: "/images/bulk_scoop.jpg",
    alt: "米粉製法によるなめらかなクラフトアイス",
  },
  {
    tag: "後味とコク",
    title: "発酵の深いコク × 食後のさっぱり感",
    body: "甘酒・白みそなど日本の発酵素材が素材の香りを引き立て、乳脂肪ゼロで食後でも油分が残らずさっぱり食べきれます。",
    image: "/images/ingredient_miso_amazake.jpg",
    alt: "甘酒と白みそなど日本の発酵素材",
  },
];

/**
 * コース料金を見る前に「そもそもどんな商品（形・単価）が届き、どんなアイスなのか」の前提を
 * 実物写真だけですっと頭に入れるセクション（これがあることで次の3コースが一瞬で理解できる）
 */
export default function OemPremiseSection() {
  return (
    <section id="about-oem" className="scroll-mt-16 bg-[#f7f3ec] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="まずは基本のかたち"
          lines={["完成する商品は、", "用途にあわせた「2つの形」から選べます。"]}
          lead={[
            "店頭で売るお土産カップも、店内で盛り付ける業務用サイズも対応しています（同じ味で両方作ることも可能です）。",
          ]}
        />

        {/* 1. どんな形で届くか（実物写真2枚で一目瞭然） */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* A. 100ml 個食カップ */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xs">
            <div className="relative aspect-[16/10] w-full bg-gray-100">
              <Image
                src="/images/gelato_cup_tower.jpg"
                alt="100ml個食カップの実物写真"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <span className="bg-brand absolute top-3 left-3 rounded-full px-3.5 py-1 text-xs font-bold text-white">
                店頭販売・お土産・ギフト通販に
              </span>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-ink text-lg font-bold">① 100ml 個食カップ</h3>
                <p className="text-brand text-xl font-bold">
                  1個 税込 ¥{PRICING_CONSTANTS.cupOemPriceTaxIncl}
                </p>
              </div>
              <p className="text-ink-light mt-2.5 text-[13.5px] leading-relaxed">
                白い清潔なカップの<strong>「フタ天面」にお店のオリジナル丸シール</strong>
                を貼ってお届けします（底面の原材料表示ラベルは当社で作成・貼付します）。
              </p>
              <p className="text-ink mt-3 rounded-xl bg-[#faf8f4] px-3.5 py-2.5 text-xs font-bold">
                最小ロット：1味 60個〜（120個で1箱ぴったりになり送料がお得です）
              </p>
            </div>
          </div>

          {/* B. 2L 業務用バルク */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xs">
            <div className="relative aspect-[16/10] w-full bg-gray-100">
              <Image
                src="/images/bulk_2l.jpg"
                alt="業務用2L角型バルクの実物写真"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <span className="bg-brand absolute top-3 left-3 rounded-full px-3.5 py-1 text-xs font-bold text-white">
                店内デザート皿盛り・パフェに
              </span>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-ink text-lg font-bold">② 業務用 2Lバルク</h3>
                <p className="text-brand text-xl font-bold">
                  2L 税別 ¥{PRICING_CONSTANTS.bulk2LPriceExTax.toLocaleString("ja-JP")}
                </p>
              </div>
              <p className="text-ink-light mt-2.5 text-[13.5px] leading-relaxed">
                お店の冷凍ストッカーに収まる角型容器です。シールの手配が不要で、
                <strong>1本から約24〜40皿分</strong>盛り付けられるため高い利益率を確保できます。
              </p>
              <p className="text-ink mt-3 rounded-xl bg-[#faf8f4] px-3.5 py-2.5 text-xs font-bold">
                最小ロット：1味 6L（2L×3本）〜（12L＝6本まで1箱にまとまります）
              </p>
            </div>
          </div>
        </div>

        {/* 2. ベースとなるアイスの品質（/dessert と同じ明快な3枚構成） */}
        <div className="mt-14">
          <p className="text-brand text-xs font-bold">土台となるアイスの特徴</p>
          <h3 className="text-ink mt-1 text-lg font-bold sm:text-xl">
            専門店ならではの「おいしさと安心」がベースにあります
          </h3>

          <ol className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {QUALITY_POINTS.map((item, idx) => (
              <li
                key={item.tag}
                className="flex items-center gap-4 rounded-2xl bg-white p-3 pr-4 shadow-2xs md:flex-col md:items-stretch md:p-0 md:pr-0"
              >
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl md:aspect-[16/10] md:h-auto md:w-full md:rounded-t-2xl md:rounded-b-none">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 96px, 33vw"
                  />
                </div>
                <div className="md:p-5">
                  <p className="text-brand text-xs font-bold">
                    0{idx + 1}　{item.tag}
                  </p>
                  <h4 className="text-ink mt-1 text-[15px] leading-snug font-bold">{item.title}</h4>
                  <p className="text-ink-light mt-1.5 text-xs leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
