import Image from "next/image";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

const policyPillars = [
  {
    step: "01",
    badge: "白砂糖不使用・発酵のコク",
    title: "乳・卵・小麦・白砂糖を使わず、発酵素材で深いコクを",
    body: "甜菜糖やきび砂糖、甘酒で穏やかな甘みに仕上げています。さらに白味噌などの発酵素材を合わせることで、焼き菓子や珈琲の香りに負けない深いコクを引き出しています。",
    image: "/images/ingredient_miso_amazake.jpg",
    alt: "甘酒や白味噌など日本の伝統発酵素材",
  },
  {
    step: "02",
    badge: "米粉の独自製法",
    title: "シャリシャリ感がなく、出し入れしても滑らかさが続く",
    body: "米粉が持つ自然な保水力を活かした独自製法により、植物性アイスにありがちな氷のシャリシャリ感（シャーベット感）のないクリーミーな口どけを実現。営業中の出し入れでも滑らかな舌触りが続きます。",
    image: "/images/bulk_scoop.jpg",
    alt: "米粉の独自製法による滑らかな植物性クラフトアイス",
  },
  {
    step: "03",
    badge: "専用工房で手づくり",
    title: "乳・卵・小麦を持ち込まない専用工房",
    body: `グルテンフリーやプラントベースの焼き菓子・ケーキを手づくりされているお店でも、素材の方針を崩さず同じお皿に添えていただけます（${WHOLESALE_FACTS.allergenAssurance}）。`,
    image: "/images/factory_kitchen_craft.webp",
    alt: "乳・卵・小麦を持ち込まない専用工房での製造風景",
  },
] as const;

export default function CafePolicySection() {
  return (
    <section id="policy" className="scroll-mt-14 bg-[#f7f3ec] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-brand mb-3 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          どんなアイス？
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl md:text-4xl">
          素材を選ぶお店のお菓子に、
          <br className="hidden sm:inline" />
          そのまま寄り添うクラフトアイスです。
        </h2>
        <div className="text-ink-light mt-4 max-w-3xl space-y-2.5 font-sans text-[15px] leading-[1.85] sm:text-base">
          <p>
            私たちSoyStories（ソイストーリーズ）は、100%植物性・グルテンフリーのお菓子とアイスを手づくりしている福岡・薬院のスイーツ専門店です。
          </p>
          <p>
            「自家製のドーナツや焼き菓子、ケーキは素材を選んでいるのに、横に添える市販アイスだけ乳製品や白砂糖入りになってしまう」——そんなカフェ・ベーカリー・菓子店様へ向けて、専用工房で仕込んだクラフトアイスを業務用の1L・2L容器（および持ち帰り用100mlカップ）でお届けしています。
          </p>
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
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
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <span className="bg-brand/10 text-brand inline-block self-start rounded-full px-3 py-1 font-sans text-xs font-bold">
                  {item.step}｜{item.badge}
                </span>
                <h3 className="text-ink mt-3 font-serif text-base leading-snug font-bold sm:text-lg">
                  {item.title}
                </h3>
                <p className="text-ink-light mt-2.5 font-sans text-sm leading-[1.85]">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6 rounded-2xl border border-stone-200/80 bg-white px-5 py-4 sm:px-6">
          <p className="text-ink font-sans text-xs leading-relaxed sm:text-sm">
            <strong className="text-brand mr-2 font-bold">アレルゲン・不使用素材について：</strong>
            {WHOLESALE_FACTS.freeFromAdditivesAndWhiteSugar}。{WHOLESALE_FACTS.allergen}。
          </p>
        </div>
      </div>
    </section>
  );
}
