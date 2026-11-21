import Image from "next/image";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

const policyPoints = [
  {
    badge: "無添加へのこだわり",
    title: "乳化安定剤・増粘剤・着色料は使っていない",
    body: "素材本来の香りとすっきりした後味を損なわないよう、乳化安定剤・増粘剤・合成着色料に頼らず、米粉が持つ自然な保水力を活かした独自製法でクリーミーな口どけをつくっています。",
  },
  {
    badge: "やさしい甘みと発酵のコク",
    title: "白砂糖は使っていない",
    body: "白砂糖を使わず、甜菜糖やきび砂糖、自家製の甘酒などで穏やかな甘みに仕上げています。さらに白味噌や甘酒といった日本の発酵素材を合わせることで、植物性でも物足りなさのない深いコクを引き出しています。",
  },
  {
    badge: "専用工房での製造",
    title: "乳・卵・小麦を持ち込まない専用工房",
    body: `グルテンフリーやプラントベースの焼き菓子・ケーキを手づくりされているお店でも、原材料の方針を崩さず同じお皿に添えていただけます（${WHOLESALE_FACTS.allergenAssurance}）。`,
  },
] as const;

export default function CafePolicySection() {
  return (
    <section id="policy" className="bg-bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-brand mb-3 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          素材と工房の方針
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl md:text-4xl">
          素材を選ぶお店の方針に、そのまま合うアイスです。
        </h2>
        <p className="text-ink-light mt-4 max-w-3xl font-sans text-[15px] leading-[1.85] sm:text-base">
          全11種とも、{WHOLESALE_FACTS.freeFromAdditivesAndWhiteSugar}
          。お店の焼き菓子やケーキの隣に、安心してお出しいただけます。
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {policyPoints.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-3xl border border-stone-200/80 bg-[#fafaf8] p-6"
            >
              <span className="bg-brand/10 text-brand inline-block self-start rounded-full px-3 py-1 font-sans text-xs font-bold">
                {item.badge}
              </span>
              <h3 className="text-ink mt-4 font-serif text-lg leading-snug font-bold">
                {item.title}
              </h3>
              <p className="text-ink-light mt-3 font-sans text-sm leading-[1.85]">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex items-center gap-4 rounded-2xl border border-stone-200/80 bg-white p-4">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-24">
              <Image
                src="/images/craft_scoop_cup.webp"
                alt="米粉の独自製法による滑らかなクラフトアイス"
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-ink font-sans text-sm font-bold">
                米粉の独自製法で、出し入れしても滑らかさが続く
              </p>
              <p className="text-ink-light mt-1 font-sans text-xs leading-relaxed">
                植物性アイスにありがちなシャリシャリ感（シャーベット感）がなく、カフェ営業中に冷凍庫を出し入れしても滑らかな舌触りが続きます。
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-stone-200/80 bg-white p-4">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-24">
              <Image
                src="/images/factory_kitchen_craft.webp"
                alt="乳・卵・小麦を持ち込まない専用工房での製造風景"
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-ink font-sans text-sm font-bold">アレルゲン管理について</p>
              <p className="text-ink-light mt-1 font-sans text-xs leading-relaxed">
                {WHOLESALE_FACTS.allergen}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
