import Image from "next/image";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

const hotelReasons = [
  {
    step: "01",
    empathy: "「1名だけ別甘味を用意する手間や、アレルゲン混入の不安」に",
    title: "乳・卵・小麦・白砂糖不使用。1つで多様な食制限に対応",
    body: `乳・卵・小麦を持ち込まない専用工房で製造し、乳化剤・安定剤・増粘剤・着色料も不使用です。海外ゲストの食制限やお子さまのアレルギー対応も、皆様と同じ一皿でお出しいただけます（${WHOLESALE_FACTS.allergenAssurance}）。`,
    image: "/images/factory_kitchen_craft.webp",
    alt: "乳・卵・小麦を持ち込まない専用工房での製造風景",
  },
  {
    step: "02",
    empathy: "「植物性アイスは味が薄くて物足りない」という印象に",
    title: "甘酒と白みその深いコクと、会席後も軽やかな後味",
    body: "米麹の甘酒と白みそで厚みのある旨みを支えつつ、乳脂肪ゼロのため油分が口に重たく残りません。品数の多い会席やコース料理の締めくくりでも、どのお客様にも満足いただけます。",
    image: "/images/ingredient_miso_amazake.jpg",
    alt: "甘酒と白味噌など日本の伝統発酵素材",
  },
  {
    step: "03",
    empathy: "「シャリシャリ感や、賞味期限切れによる廃棄」の悩みに",
    title: "じっくり炊く米粉製法で、滑らかな舌触りと長期常備を両立",
    body: "国産米粉を豆乳や果汁と火にかけて炊き上げる独自製法で、氷結晶感のない滑らかさが続きます。賞味期限の表示義務もないため、期限切れによる廃棄が出にくい冷凍品です。",
    image: "/images/bulk_scoop.jpg",
    alt: "米粉の独自製法による滑らかな植物性クラフトアイス",
  },
] as const;

export default function HotelNoExtraPrepSection() {
  return (
    <section id="no-extra-prep" className="scroll-mt-14 bg-[#f7f3ec] py-12 sm:py-18">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-brand mb-2 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          選ばれる3つの理由
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
          「ヴィーガン専用」ではなく、どのお客様にも同じ一皿として出せる甘味を。
        </h2>
        <p className="text-ink-light mt-3 max-w-3xl font-sans text-sm leading-[1.85] sm:text-[15px]">
          私たちSoyStories（ソイストーリーズ）は、欧米・豪州・アジアからも多くの旅行者が訪れる福岡・薬院の植物性＆グルテンフリースイーツ専門店です。ヴィーガンを掲げていないお宿様でも普段の献立にそのまま組み込める品質を、専用工房から全国へお届けしています。
        </p>

        <ol className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {hotelReasons.map((item) => (
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
