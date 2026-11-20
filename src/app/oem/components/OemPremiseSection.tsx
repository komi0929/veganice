import Image from "next/image";
import { SectionHeader } from "@/app/dessert/components/ui";

const QUALITY_POINTS = [
  {
    tag: "専用工房",
    title: "乳・卵・小麦「持ち込みゼロ」",
    body: "乳・卵・小麦を工房内に持ち込まない専用工房で手作り（※ナッツ類を使用した製品は製造しています）。ヴィーガンの方や乳・卵・小麦アレルギーをお持ちの方、海外からのお客様にも安心してお出しいただけます。",
    image: "/images/factory_kitchen_craft.webp",
    alt: "SoyStoriesの専用工房でアイスを仕込む様子",
  },
  {
    tag: "独自食感",
    title: "出し入れしても滑らかさが続く",
    body: "米粉を使った独自製法により、植物性アイスにありがちなシャリシャリ感（シャーベット感）がなく、営業中の冷凍庫の出し入れでも滑らかな舌触りが続きます。",
    image: "/images/bulk_scoop.jpg",
    alt: "米粉製法によるなめらかなクラフトアイス",
  },
  {
    tag: "後味とコク",
    title: "発酵の深いコク × 食後のさっぱり感",
    body: "甘酒・白みそなど日本の発酵素材が食材の香りを引き立てます。乳脂肪ゼロで油分が口に残らず、満足感あるお食事の後でもさっぱり食べきれます。",
    image: "/images/ingredient_miso_amazake.jpg",
    alt: "甘酒と白みそなど日本の発酵素材",
  },
];

/**
 * プラン紹介の前に「そもそもどんな品質のアイスなのか」だけをシンプルに伝えるセクション
 * 容器の話は次の2プランセクションに集約し、重複をゼロにして頭に入りやすくする
 */
export default function OemPremiseSection() {
  return (
    <section id="about-oem" className="scroll-mt-16 bg-[#f7f3ec] py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="アイスの特徴"
          lines={["大切な一皿をお任せいただくための、", "専門店の3つのこだわり。"]}
          lead={[
            "ヴィーガンの方はもちろん、一緒に来店されたノンヴィーガンの方にも「普通のアイスより美味しい」と喜ばれる品質を土台にしています。",
          ]}
        />

        <ol className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
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
                <h3 className="text-ink mt-1 text-[15px] leading-snug font-bold">{item.title}</h3>
                <p className="text-ink-light mt-1.5 text-xs leading-relaxed">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
