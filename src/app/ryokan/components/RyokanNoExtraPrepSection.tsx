import Image from "next/image";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

const kitchenMerits = [
  {
    title: "個別の甘味を、その人の分だけ仕込む手間がなくなる",
    body: "事前相談で「乳・卵・小麦が食べられない」「ヴィーガン」とお申し出があっても、ほかのお客様と同じデザートをお出しできます。除去対応のために別メニューを一人分だけ用意する負担や、配膳時の出し間違いの心配を減らせます。",
  },
  {
    title: "お子さまの夕食にも、ヴィーガンではないお客様にも同じ一皿を",
    body: "アレルギーのあるお子さまのご夕食にも、ご家族と同じ甘味をお出しいただけます。甘酒や白味噌といった日本の発酵素材で深いうまみとコクを引き出しており、乳脂肪ゼロのため品数の多い会席の後でも油分が口に残らず、すっきり召し上がっていただけます。",
  },
  {
    title: "米粉の独自製法で、出し入れしても滑らかな舌触りが続く",
    body: "植物性アイスにありがちなシャリシャリ感（シャーベット感）がなく、米粉の保水力を活かした滑らかな口どけを実現しました。業務用の冷凍庫で出し入れしても滑らかさが続くため、夕食の提供時間を通して安定した品質で盛り付けられます。",
  },
] as const;

export default function RyokanNoExtraPrepSection() {
  return (
    <section id="no-extra-prep" className="bg-[#f7f3ec] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-brand mb-3 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          厨房の手間と安心
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl md:text-4xl">
          申告が来た日も、別に仕込まなくていい。
        </h2>
        <p className="text-ink-light mt-4 max-w-3xl font-sans text-[15px] leading-[1.85] sm:text-base">
          SoyStoriesは福岡・薬院の植物性スイーツ専門店です。乳・卵・小麦を持ち込まない専用工房で製造しているため、
          {WHOLESALE_FACTS.allergenAssurance}甘味として、そのまま献立に組み込んでいただけます。
        </p>

        <div className="mt-10 grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-10">
          <div className="space-y-4 md:col-span-7">
            {kitchenMerits.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-2xl border border-stone-200/80 bg-white p-5 shadow-2xs sm:p-6"
              >
                <p className="text-brand font-sans text-xs font-bold">0{idx + 1}</p>
                <h3 className="text-ink mt-1 font-serif text-base leading-snug font-bold sm:text-lg">
                  {item.title}
                </h3>
                <p className="text-ink-light mt-2 font-sans text-sm leading-[1.85]">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-xs">
              <div className="relative aspect-[4/3] w-full sm:aspect-square">
                <Image
                  src="/images/factory_kitchen_craft.webp"
                  alt="乳・卵・小麦を持ち込まない専用工房での製造風景"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-5">
                <p className="text-brand font-sans text-xs font-bold">専用工房での製造管理</p>
                <p className="text-ink-light mt-1.5 font-sans text-xs leading-relaxed">
                  {WHOLESALE_FACTS.allergen}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
