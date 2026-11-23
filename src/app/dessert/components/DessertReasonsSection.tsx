import Image from "next/image";

const coreValues = [
  {
    num: "01",
    problem: "「植物性アイスはシャリシャリして、出し入れで食感が落ちる」という悩みに",
    title: "米粉を炊き上げる独自製法。スプーンに吸い付く濃密な口どけ。",
    body: "豆乳や果汁と国産米粉をとろりと炊き上げてから冷やし固めるため、営業中の出し入れでも氷に戻らず、最後の一杯までなめらかにほどけます。",
    image: "/images/craft_scoop_cup.webp",
    alt: "米粉独自製法によるなめらかなクラフトアイス",
  },
  {
    num: "02",
    problem: "「ヴィーガンアイスは味気なく、コクが物足りない」という不満に",
    title: "生チョコや濃茶のように濃厚なのに、あと口はすっと軽やか。",
    body: "クーベルチュールやココナッツに米麹の甘酒と少量の白みそを重ね、深いコクと食後に茶葉・果実の香りだけが残る心地よい余韻を両立しました。",
    image: "/images/ingredient_miso_amazake.jpg",
    alt: "甘酒やみそなど日本の発酵素材",
  },
  {
    num: "03",
    problem: "「製造ラインでの乳や小麦のコンタミ（混入）が心配」というお店に",
    title: "乳・卵・小麦を一切持ち込まない専用工房で製造。",
    body: "専用工房には乳・卵・小麦を一切持ち込みません（※ナッツ類使用製品はあり）。乳・卵・小麦アレルギーの方や海外ゲストにも安心してお出しいただけます。",
    image: "/images/factory_kitchen_craft.webp",
    alt: "乳・卵・小麦を持ち込まない専用アイスファクトリーでの仕込み風景",
  },
] as const;

export default function DessertReasonsSection() {
  return (
    <section id="reasons" className="bg-bg-white scroll-mt-16 py-12 sm:py-18">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-brand mb-2 inline-flex items-center gap-2 text-xs font-bold tracking-wide">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          選ばれる3つの理由
        </p>
        <h2 className="text-ink text-2xl leading-snug font-bold tracking-tight sm:text-3xl">
          プロの現場で選ばれる、3つのこだわり。
        </h2>

        <ol className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {coreValues.map((item) => (
            <li
              key={item.num}
              className="flex flex-col overflow-hidden rounded-3xl border border-gray-200/80 bg-[#fafaf8]"
            >
              <div className="relative aspect-[16/10] w-full bg-[#f7f3ec]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="bg-brand absolute top-2.5 left-2.5 rounded-full px-2.5 py-0.5 font-mono text-[11px] font-bold text-white">
                  {item.num}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-brand text-[11.5px] leading-snug font-bold">{item.problem}</p>
                <h3 className="text-ink mt-1.5 text-base leading-snug font-bold">{item.title}</h3>
                <p className="text-ink-light mt-2 text-xs leading-[1.78] sm:text-[13px]">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
