import Image from "next/image";
import { SectionHeader } from "./ui";

const features = [
  {
    tag: "安心",
    title: "乳・卵・小麦フリーの専用工房",
    body: "卵・乳・小麦を一切持ち込まない専用工房で手づくり。乳・卵・小麦アレルギーの方や海外のお客様にも安心してお出しいただけます。",
    image: "/images/factory_kitchen_craft.webp",
    alt: "SoyStoriesの専用工房でアイスを仕込む様子",
  },
  {
    tag: "省スペース規格",
    title: "1L角型×4本から・個食カップも対応",
    body: "コールドテーブルや小型冷凍庫にも収まりやすい1L・2Lの角型バルク（最小4L〜）。持ち帰り・物販用の100ml個食カップ（60個〜）も選べます。",
    image: "/images/bulk_1l.jpg",
    alt: "省スペースで保管しやすい1L角型バルク容器",
  },
  {
    tag: "食感",
    title: "出し入れしても滑らかさが続く",
    body: "米粉を使った独自製法により、植物性アイスにありがちな氷のシャリシャリ感がなく、営業中の出し入れでも最後まで滑らかな舌触りが続きます。",
    image: "/images/bulk_scoop.jpg",
    alt: "米粉の独自製法による滑らかなクラフトアイス",
  },
];

/** 「これは何？」に答えるセクション。ヒーロー直後に置き、どんな業態でも導入しやすい規格を伝える */
export default function DessertAboutSection() {
  return (
    <section id="about" className="scroll-mt-16 bg-[#f7f3ec] py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="スイーツ専門店のクラフトアイス"
          lines={[
            "せっかく美味しい料理やお菓子のあとを、",
            "ありきたりなアイスで終わらせないために。",
          ]}
          lead={[
            "私たちSoyStoriesは、福岡・薬院のヴィーガン＆グルテンフリー スイーツ専門店です。",
            "料理や焼き菓子の仕込みで手一杯の厨房でも、冷凍庫のすき間に入る4L（1L×4本）から常備でき、",
            "一口食べた瞬間に「最後のアイスまでちゃんと美味しいお店だ」と記憶に残る一玉をお届けします。",
          ]}
        />

        <ol className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {features.map((item, index) => (
            <li
              key={item.tag}
              className="flex items-center gap-4 rounded-2xl bg-white p-3 pr-4 shadow-sm md:flex-col md:items-stretch md:p-0 md:pr-0"
            >
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl md:aspect-[4/3] md:h-auto md:w-full md:rounded-t-2xl md:rounded-b-none">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 96px, 33vw"
                />
              </div>
              <div className="md:px-5 md:pb-6">
                <p className="text-brand text-xs font-bold">
                  {String(index + 1).padStart(2, "0")}　{item.tag}
                </p>
                <h3 className="text-ink mt-1 text-base leading-snug font-bold">{item.title}</h3>
                <p className="text-ink-light mt-1 text-[13px] leading-relaxed">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
