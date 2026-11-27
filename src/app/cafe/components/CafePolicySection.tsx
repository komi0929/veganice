import Image from "next/image";

const policyPillars = [
  {
    title: "氷っぽくない、なめらかな口どけ",
    body: "国産米粉を豆乳や果汁とじっくり炊く独自製法。営業中の出し入れでもシャリシャリになりません。",
    image: "/images/bulk_scoop.jpg",
    alt: "米粉製法によるなめらかなクラフトアイス",
  },
  {
    title: "お菓子や珈琲に合う、コクと軽い後味",
    body: "甘酒と白みそでコクを出しつつ、乳脂肪はゼロ。焼き菓子やドリンクの味を邪魔せず引き立てます。",
    image: "/images/hero_craft_gelato.jpg",
    alt: "素材を活かしたSoyStoriesのクラフトアイス実物",
  },
  {
    title: "乳・卵・小麦を持ち込まない専用工房",
    body: "福岡・薬院の専用工房で手づくり。グルテンフリーや植物性のお菓子と同じ基準で添えられます。",
    image: "/images/factory_kitchen_craft.webp",
    alt: "乳・卵・小麦を持ち込まない専用工房",
  },
] as const;

export default function CafePolicySection() {
  return (
    <section id="policy" className="scroll-mt-14 bg-[#f7f3ec] py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-brand mb-1.5 font-sans text-xs font-bold tracking-wider">
          選ばれる3つの理由
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
          素材にこだわるお店のメニューに、そのままなじむ味です。
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {policyPillars.map((item) => (
            <div
              key={item.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white"
            >
              <div className="relative aspect-[16/10] w-full bg-stone-100">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-ink font-serif text-base leading-snug font-bold">
                  {item.title}
                </h3>
                <p className="text-ink-light mt-1.5 font-sans text-xs leading-relaxed sm:text-[13px]">
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
