import Image from "next/image";

const coreValues = [
  {
    title: "氷っぽくない、なめらかな口どけ",
    body: "国産米粉を豆乳や果汁とじっくり炊く独自製法。営業中の出し入れでもシャリシャリになりません。",
    image: "/images/gelato_spoon_moment.jpg",
    alt: "米粉製法によるなめらかなSoyStoriesのクラフトアイス実物",
  },
  {
    title: "濃厚なのに、食後はすっきり",
    body: "甘酒と白みそでコクを出しつつ、乳脂肪はゼロ。お食事やお菓子の後でも重くなりません。",
    image: "/images/koji_amazake_ac.jpg",
    alt: "国産米と米麹甘酒の発酵素材",
  },
  {
    title: "乳・卵・小麦を持ち込まない専用工房",
    body: "専用工房で手づくり（※ナッツ類使用製品はあり）。アレルギーをお持ちの方や海外のお客様にも安心です。",
    image: "/images/cup_seal_houjicha_real.jpg",
    alt: "専用工房で作るSoyStoriesのクラフトアイス実物カップ",
  },
] as const;

export default function DessertReasonsSection() {
  return (
    <section id="reasons" className="scroll-mt-16 bg-[#f7f3ec] py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-brand mb-1.5 text-xs font-bold tracking-wide">選ばれる3つの理由</p>
        <h2 className="text-ink text-2xl leading-snug font-bold tracking-tight sm:text-3xl">
          植物性とは思えないコクと、すっきりした後味。
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {coreValues.map((item) => (
            <div
              key={item.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white"
            >
              <div className="relative aspect-[16/10] w-full bg-[#f7f3ec]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-ink text-base leading-snug font-bold">{item.title}</h3>
                <p className="text-ink-light mt-1.5 text-xs leading-relaxed sm:text-[13px]">
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
