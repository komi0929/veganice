import Image from "next/image";

const hotelReasons = [
  {
    title: "氷っぽくない、なめらかな口どけ",
    body: "国産米粉を豆乳や果汁とじっくり炊く独自製法。出し入れしてもシャリシャリになりません。",
    image: "/images/bulk_scoop.jpg",
    alt: "米粉製法によるなめらかなクラフトアイス",
  },
  {
    title: "濃厚なのに、食後はすっきり",
    body: "甘酒と白みそでコクを出しつつ、乳脂肪はゼロ。品数の多いお食事の後でも重くなりません。",
    image: "/images/ingredient_miso_amazake.jpg",
    alt: "甘酒と白みそなど日本の発酵素材",
  },
  {
    title: "乳・卵・小麦を持ち込まない工房",
    body: "福岡・薬院の専用工房で手づくり。乳化剤・安定剤・増粘剤・着色料も使っていません。",
    image: "/images/factory_kitchen_craft.webp",
    alt: "乳・卵・小麦を持ち込まない専用工房",
  },
] as const;

export default function HotelNoExtraPrepSection() {
  return (
    <section id="no-extra-prep" className="scroll-mt-14 bg-[#f7f3ec] py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-brand mb-1.5 font-sans text-xs font-bold tracking-wider">
          選ばれる3つの理由
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
          「ヴィーガン用」ではなく、普段のデザートとして出せる味です。
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {hotelReasons.map((item) => (
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
