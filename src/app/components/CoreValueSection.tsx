import Image from "next/image";

const VALUE_ITEMS = [
  {
    title: "氷っぽくない、なめらかな口どけ",
    body: "国産米粉を使った独自製法。営業中の出し入れでもシャリシャリになりません。",
    imageSrc: "/images/gelato_spoon_moment.jpg",
    imageAlt: "米粉独自製法によるなめらかなSoyStoriesのクラフトアイス実物",
  },
  {
    title: "濃厚なのに、食後はすっきり",
    body: "甘酒と白みそでコクを出しつつ、乳脂肪はゼロ。お食事やお菓子の後でも重くならず、普段乳製品を食べる方にも好評です。",
    imageSrc: "/images/koji_amazake_ac.jpg",
    imageAlt: "国産米と米麹甘酒の発酵素材",
  },
  {
    title: "乳・卵・小麦を持ち込まない専用工房",
    body: "福岡の専用工房で手づくり（※ナッツ類使用製品はあり）。アレルギーをお持ちの方や海外のお客様にも安心です。",
    imageSrc: "/images/gelato_cup_tower.jpg",
    imageAlt: "専用工房で作るSoyStoriesの100mlクラフトアイス実物",
  },
] as const;

export default function CoreValueSection() {
  return (
    <section id="benefits" className="bg-bg-white scroll-mt-20 py-14 md:py-18">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="text-brand mb-1.5 font-sans text-xs font-bold tracking-wider">
          選ばれる3つの理由
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
          植物性とは思えないコクと、すっきりした後味。
        </h2>

        <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">
          {VALUE_ITEMS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-[#fafaf8]"
            >
              <div className="relative aspect-[16/10] w-full bg-stone-100">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-ink font-serif text-base leading-snug font-bold sm:text-lg">
                  {item.title}
                </h3>
                <p className="text-ink-light mt-2 font-sans text-xs leading-relaxed sm:text-sm">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
