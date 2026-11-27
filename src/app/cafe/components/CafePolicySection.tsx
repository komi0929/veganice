import Image from "next/image";

const policyPillars = [
  {
    title: "氷っぽくない、なめらかな口どけ",
    body: "国産米粉を炊き上げる独自製法。出し入れでもシャリシャリになりません。",
    image: "/images/gelato_spoon_moment.jpg",
    alt: "米粉製法によるなめらかなクラフトアイス",
  },
  {
    title: "お菓子や珈琲に合う、コクと軽い後味",
    body: "甘酒・白みそでコクを出しつつ乳脂肪ゼロ。お菓子や珈琲の味を邪魔しません。",
    image: "/images/koji_amazake_ac.jpg",
    alt: "米麹甘酒と国産米の発酵素材",
  },
  {
    title: "乳・卵・小麦を持ち込まない専用工房",
    body: "福岡・薬院の専用工房製造。グルテンフリーや植物性のお菓子と揃えて出せます。",
    image: "/images/cup_seal_houjicha_real.jpg",
    alt: "専用工房で作るクラフトアイス",
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
          素材にこだわるお店の味に、自然になじみます。
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
