import Image from "next/image";
import { SectionHeader } from "./ui";

const coreValues = [
  {
    num: "01",
    tag: "Velvety Rice-Flour Craft",
    problem:
      "「植物性アイスはシャリシャリして水っぽい」「冷凍庫を出し入れするうちに食感が落ちてしまう」——そんな飲食店の悩みを解消します。",
    title: "米粉をじっくり炊き上げる独自製法。スプーンに吸い付く濃密な口どけ。",
    body: [
      "国産米粉を豆乳や甘酒、果汁と一緒にじっくり火にかけ、とろりとしたベースに炊き上げてから冷やし固めることで、体温でなめらかにほどける濃密な舌触りに仕立てています。",
      "業務用のバルク容器で営業中に冷凍庫の出し入れを繰り返しても氷に戻らず、最後の一杯まで豊かな口どけが続きます。",
    ],
    image: "/images/craft_scoop_cup.webp",
    alt: "米粉独自製法によるなめらかなクラフトアイスをカップへ盛り付ける風景",
    badge: "スプーンに吸い付くような、濃密でなめらかな口どけ",
    reverse: false,
  },
  {
    num: "02",
    tag: "Richness & Clean Finish",
    problem:
      "「ヴィーガンアイスは味気ない」「コクがなく、どれも似たような味になってしまう」という不満に。",
    title: "生チョコや濃茶のように濃厚なのに、あと口はすっと軽やか。",
    body: [
      "クーベルチュールチョコレートやココナッツクリームのリッチな口どけに、てんさい糖・きび砂糖のまろやかな甘み、そして米麹の甘酒と少量の白みそを重ねています。",
      "発酵由来の旨みとほのかな塩気が奥行きのあるコクを生み出しつつ、食後には茶葉や果実の鮮やかな香りだけを残してすっと消える、心地よい余韻を楽しめます。",
    ],
    image: "/images/ingredient_miso_amazake.jpg",
    alt: "甘酒やみそなど日本の発酵素材",
    badge: "濃密なコクと、すっと消える軽やかな余韻",
    reverse: true,
  },
  {
    num: "03",
    tag: "Dedicated Workshop",
    problem:
      "「本当に安心して出せる？ 製造ラインでの乳や小麦のコンタミ（混入）が心配」というお店の不安に。",
    title: "乳・卵・小麦を一切持ち込まない専用工房で製造。",
    body: [
      "SoyStoriesの専用アイス工房では、乳製品・卵・小麦を一切持ち込みません（※ナッツ類を使用した製品は製造しています）。",
      "乳・卵・小麦の混入リスクを抑えた専用環境のため、乳・卵・小麦アレルギーをお持ちのお客様や海外からのヴィーガンのお客様にも安心してお出しいただけます。",
    ],
    image: "/images/factory_kitchen_craft.webp",
    alt: "乳・卵・小麦を持ち込まない専用アイスファクトリーでの仕込み風景",
    badge: "乳・卵・小麦フリーの専用工房で製造",
    reverse: false,
  },
];

/** 全国の飲食店・カフェ・菓子店に選ばれる3つの技術的裏付け（米粉製法・発酵素材・専用工房） */
export default function DessertReasonsSection() {
  return (
    <section id="reasons" className="bg-bg-white scroll-mt-16 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="3つの独自製法"
          lines={["レストラン・カフェ・菓子店、", "プロの現場で選ばれる3つの理由。"]}
          lead={[
            "「植物性アイスはシャリシャリして物足りない」「出し入れで食感が落ちる」というこれまでの常識を覆す、",
            "SoyStoriesならではの3つのこだわりです。",
          ]}
        />

        <div className="mt-12 space-y-16 sm:space-y-20">
          {coreValues.map((item) => (
            <div
              key={item.num}
              className={`grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12 ${
                item.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* テキスト側 */}
              <div className={`md:col-span-7 ${item.reverse ? "md:order-2" : "md:order-1"}`}>
                <p className="text-brand font-mono text-xs font-bold tracking-widest uppercase">
                  {item.num} — {item.tag}
                </p>

                {/* 課題提起 */}
                <div className="mt-3 rounded-xl border-l-3 border-amber-300 bg-[#fdfbf7] p-3 pl-4">
                  <p className="text-ink-light text-[13px] leading-relaxed italic">
                    {item.problem}
                  </p>
                </div>

                {/* 解決見出し */}
                <h3 className="text-ink mt-4 text-xl leading-snug font-bold sm:text-2xl">
                  {item.title}
                </h3>

                {/* 本文 */}
                <div className="text-ink-light mt-3 space-y-2 text-[14px] leading-[1.85] sm:text-[15px]">
                  {item.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* 画像側 */}
              <div className={`md:col-span-5 ${item.reverse ? "md:order-1" : "md:order-2"}`}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 bg-[#f7f3ec] shadow-sm sm:aspect-square">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute right-3 bottom-3 left-3 rounded-xl bg-black/70 px-3 py-2 text-center text-xs font-medium text-white shadow-sm backdrop-blur-xs">
                    {item.badge}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
