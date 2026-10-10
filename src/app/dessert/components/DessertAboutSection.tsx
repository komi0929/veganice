import Image from "next/image";
import { SectionHeader } from "./ui";

const flow = [
  {
    step: "つくる",
    title: "専用工房で手づくり",
    body: "乳・卵・小麦を一切持ち込まない専用アイスファクトリーで製造。",
    image: "/images/factory_kitchen_craft.webp",
    alt: "SoyStoriesの専用工房でアイスを仕込む様子",
  },
  {
    step: "届く",
    title: "1L・2L容器で届く",
    body: "クール冷凍便で全国発送。最小4Lから必要な分だけ注文可能。",
    image: "/images/bulk_2l.jpg",
    alt: "業務用の2Lバルク容器に入ったアイス",
  },
  {
    step: "提供",
    title: "すぐディッシャーが通る",
    body: "米粉の保水力で−18℃でも固まりすぎず、削る力や解凍待ちなし。",
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
            "SoyStoriesは、福岡・薬院にあるヴィーガン＆グルテンフリーの専門店。",
            "乳・卵・小麦を一切使わず、米粉と発酵素材で手作りする看板アイスは、",
            "ヴィーガンのお客様はもちろん、一般のお客様からも「こっちのほうが好き」と大好評。",
            "厨房のオペレーションを変えずに導入できる、業務用バルクでお届けします。",
          ]}
        />

        <ol className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {flow.map((item, index) => (
            <li
              key={item.step}
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
                  {String(index + 1).padStart(2, "0")}　{item.step}
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
