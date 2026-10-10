import Image from "next/image";
import { SectionHeader } from "./ui";

const features = [
  {
    tag: "安心",
    title: "100%植物性・専用工房",
    body: "乳・卵・小麦を持ち込まない専用工房で手作り。混入の心配がなく、どなたにも安心です。",
    image: "/images/factory_kitchen_craft.webp",
    alt: "SoyStoriesの専用工房でアイスを仕込む様子",
  },
  {
    tag: "規格",
    title: "1L・2Lの角型バルク",
    body: "お店の冷凍ストッカーに入るサイズ。最小4L（1L×4個など）から注文できます。",
    image: "/images/bulk_2l.jpg",
    alt: "業務用の2Lバルク容器に入ったアイス",
  },
  {
    tag: "現場",
    title: "−18℃ですぐディッシャーが通る",
    body: "米粉独自の保水力でカチカチに固まりません。削る力も不要で、ディッシャーがすっと通ります。",
    image: "/images/bulk_scoop.jpg",
    alt: "冷凍庫から出してすぐディッシャーがスムーズに通る様子",
  },
];

/** 「これは何？」に答えるセクション。ヒーロー直後に置き、以降の各論の前提をつくる */
export default function DessertAboutSection() {
  return (
    <section id="about" className="bg-[#f7f3ec] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="どんなアイス？"
          lines={["福岡のヴィーガン専門店の味を、", "そのままあなたのお店へ。"]}
          lead={[
            "福岡・薬院のヴィーガン＆グルテンフリー専門店SoyStories。",
            "乳・卵・小麦を使わず、米粉と発酵素材で仕込む看板アイスです。",
            "ヴィーガンの方も、そうでない方も『これがいい』と選ぶ味を、",
            "厨房でそのまま使える業務用バルクでお届けします。",
          ]}
        />

        <ol className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {features.map((item, index) => (
            <li
              key={item.tag}
              className="flex items-center gap-4 rounded-2xl bg-white p-3 pr-4 shadow-sm md:flex-col md:items-stretch md:p-0 md:pr-0"
            >
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl md:aspect-[4/3] md:h-auto md:w-full md:rounded-t-2xl md:rounded-b-none">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 96px, 33vw"
                />
              </div>
              <div className="md:px-5 md:pb-6">
                <p className="text-brand text-xs font-bold">
                  {String(index + 1).padStart(2, "0")}　{item.tag}
                </p>
                <h3 className="text-ink mt-1 text-base leading-snug font-bold">{item.title}</h3>
                <p className="text-ink-light mt-1 text-[13px] leading-relaxed">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
