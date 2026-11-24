import Image from "next/image";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

const policyPillars = [
  {
    step: "01",
    empathy: "「植物性アイスはあっさりして物足りない」という印象に",
    title: "甘酒と白みそが支える、濃密なコクと軽やかな後口",
    body: "てんさい糖・きび砂糖のまろやかな甘みに米麹の甘酒と少量の白みそを重ね、塩キャラメルのように奥深い厚みとキレのある余韻を両立しました。",
    image: "/images/ingredient_miso_amazake.jpg",
    alt: "甘酒や白味噌など日本の伝統発酵素材",
  },
  {
    step: "02",
    empathy: "「シャリシャリ感や、出し入れによる食感劣化」の悩みに",
    title: "じっくり炊く米粉製法。最後まで氷に戻らない",
    body: "国産米粉を豆乳や果汁と火にかけて炊き上げてから冷やし固めるため、スプーンに吸い付く濃密な口どけが営業中の開閉でも続きます。",
    image: "/images/bulk_scoop.jpg",
    alt: "米粉の独自製法による滑らかな植物性クラフトアイス",
  },
  {
    step: "03",
    empathy: "「共用ラインでの乳・小麦混入が心配」というお店に",
    title: "乳・卵・小麦を持ち込まない専用工房で製造",
    body: `福岡・薬院の専用工房で一釜ずつ手づくり。グルテンフリーやプラントベースのお菓子と同じ基準のまま添えていただけます（${WHOLESALE_FACTS.allergenAssurance}）。`,
    image: "/images/factory_kitchen_craft.webp",
    alt: "乳・卵・小麦を持ち込まない専用工房での製造風景",
  },
] as const;

export default function CafePolicySection() {
  return (
    <section id="policy" className="scroll-mt-14 bg-[#f7f3ec] py-12 sm:py-18">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-brand mb-2 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          選ばれる3つの理由
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
          素材を選ぶお店のお菓子に寄り添う、3つのこだわり。
        </h2>
        <p className="text-ink-light mt-3 max-w-3xl font-sans text-sm leading-[1.85] sm:text-[15px]">
          私たちSoyStories（ソイストーリーズ）は、福岡・薬院で100%植物性・グルテンフリーのお菓子とアイスを手づくりしているスイーツ専門店です。乳・卵・小麦を持ち込まない専用工房から、全国のカフェ・ベーカリー・菓子店様へお届けしています。
        </p>

        <ol className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {policyPillars.map((item) => (
            <li
              key={item.step}
              className="flex flex-col overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-2xs"
            >
              <div className="relative aspect-[16/10] w-full bg-stone-100">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <span className="bg-brand absolute top-2.5 left-2.5 rounded-full px-2.5 py-0.5 font-sans text-[11px] font-bold text-white">
                  {item.step}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-brand font-sans text-[11.5px] leading-snug font-bold">
                  {item.empathy}
                </p>
                <h3 className="text-ink mt-1.5 font-serif text-base leading-snug font-bold">
                  {item.title}
                </h3>
                <p className="text-ink-light mt-2 font-sans text-xs leading-[1.75] sm:text-[13px]">
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
