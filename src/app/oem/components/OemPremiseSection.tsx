import Image from "next/image";

const QUALITY_POINTS = [
  {
    tag: "専用工房",
    title: "乳・卵・小麦「持ち込みゼロ」",
    body: "乳・卵・小麦を持ち込まない専用工房製（※ナッツ類使用製品はあり）。アレルギーをお持ちの方や海外のお客様にも安心です。",
    image: "/images/factory_kitchen_craft.webp",
    alt: "SoyStoriesの専用工房でアイスを仕込む様子",
  },
  {
    tag: "なめらかな食感",
    title: "じっくり炊く米粉製法で氷っぽくならない",
    body: "国産米粉を豆乳や果汁と炊き上げる独自製法。冷凍庫で出し入れしてもシャリシャリにならず、なめらかさが続きます。",
    image: "/images/bulk_scoop.jpg",
    alt: "米粉製法によるなめらかなクラフトアイス",
  },
  {
    tag: "素材が引き立つ",
    title: "果物やお茶・珈琲の香りがまっすぐ立つ",
    body: "甘酒・白みそでコクを支えつつ乳脂肪はゼロ。お預かりした果物や茶葉・珈琲そのものの風味がきれいに広がります。",
    image: "/images/soystories_icecream.1.jpg",
    alt: "素材の色と香りを活かしたSoyStoriesのクラフトアイス実物",
  },
];

export default function OemPremiseSection() {
  return (
    <section id="about-oem" className="scroll-mt-16 bg-[#f7f3ec] py-12 sm:py-16">
      <span id="premise" className="-mt-16 block pt-16" aria-hidden="true" />
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-brand mb-2 inline-flex items-center gap-2 text-xs font-bold tracking-wide">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          アイスの特徴
        </p>
        <h2 className="text-ink text-2xl leading-snug font-bold tracking-tight sm:text-3xl">
          大切な一皿をお任せいただく、専門店の3つの土台。
        </h2>

        <ol className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
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
              <div className="md:p-4">
                <p className="text-brand text-xs font-bold">
                  0{idx + 1}　{item.tag}
                </p>
                <h3 className="text-ink mt-1 text-sm leading-snug font-bold sm:text-[15px]">
                  {item.title}
                </h3>
                <p className="text-ink-light mt-1.5 text-xs leading-relaxed">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
