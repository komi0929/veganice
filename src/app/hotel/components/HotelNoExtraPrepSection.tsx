import Image from "next/image";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

const targetScenes = [
  "ホテル・洋食コースのドルチェ",
  "旅館・会席の最後の水菓子",
  "事前相談のアレルギー・菜食対応",
  "婚礼・宴会・訪日団体の会食",
  "朝食ビュッフェ・ケーキや果物添え",
] as const;

const kitchenMerits = [
  {
    title: "除去用の別メニューを、その人の分だけ仕込む手間がなくなる",
    body: "事前相談や予約時に「乳・卵・小麦が食べられない」「ヴィーガン」とお申し出があっても、ほかのお客様と同じデザートをお出しできます。1名分だけ別の甘味を仕込む負担や、サービス時の配膳ミス・出し間違いの心配を減らせます。",
  },
  {
    title: "乳脂肪ゼロのすっきりした食後感と、発酵素材が生む深いコク",
    body: "品数の多いフルコースや会席のあとでも、乳脂肪を使っていないため口に油分が残らず、最後まで心地よく召し上がっていただけます。甘酒や白味噌といった日本の発酵素材で深いうまみを引き出しており、お子さまの夕食やヴィーガンではないお客様にも満足いただける味わいです。",
  },
  {
    title: "米粉の独自製法でシャリシャリ感がなく、出し入れしても滑らかさが続く",
    body: "一般的な植物性アイスにありがちな氷っぽいシャリシャリ感（シャーベット感）がなく、米粉の保水力を活かしたクリーミーな口どけを実現しました。ディナータイムや宴会の提供中に冷凍庫を出し入れしても、滑らかな舌触りが続きます。",
  },
] as const;

export default function HotelNoExtraPrepSection() {
  return (
    <section id="no-extra-prep" className="bg-[#f7f3ec] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* 導入場面タグ */}
        <div className="mb-7 flex flex-wrap gap-2">
          {targetScenes.map((scene) => (
            <span
              key={scene}
              className="text-ink rounded-full border border-stone-300/70 bg-white px-3.5 py-1 font-sans text-xs font-medium shadow-2xs"
            >
              {scene}
            </span>
          ))}
        </div>

        <p className="text-brand mb-3 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          厨房の手間と安心
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl md:text-4xl">
          申告が来た日も、別に仕込まなくていい。
        </h2>
        <p className="text-ink-light mt-4 max-w-3xl font-sans text-[15px] leading-[1.85] sm:text-base">
          SoyStoriesは福岡・薬院の植物性スイーツ専門店です。乳・卵・小麦を持ち込まない専用工房で製造しているため、
          {WHOLESALE_FACTS.allergenAssurance}
          食後のデザートとして、ホテル・旅館・レストランのコース献立にそのまま組み込んでいただけます。
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
