import Image from "next/image";
import { SectionHeader } from "./ui";

const coreValues = [
  {
    num: "01",
    tag: "Rice Flour Method",
    problem:
      "「植物性アイスは美味しくない」「カチカチに凍ってディッシャーが通らない」——そんな飲食店の現場の悩みを解消します。",
    title: "米粉の独自製法で、驚くほどなめらか。−18℃ですぐ使えます。",
    body: [
      "一般的な植物性アイスは乳脂肪がないため、冷凍庫でカチカチに固まり、力任せに削ったり提供に手間取ったりしがちです。",
      "SoyStoriesは、米粉を使った独自製法を開発。ジェラートのようにクリーミーで滑らかな舌触りを実現しました。",
      "2Lバルクでも−18℃の冷凍ストッカーから出してすぐディッシャーが通り、忙しい営業中でも手を止めずに提供できます。",
    ],
    image: "/images/craft_scoop_cup.webp",
    alt: "米粉独自製法によるなめらかなクラフトアイスをカップへ盛り付ける風景",
    badge: "ディッシャー通り抜群・驚くほど滑らかな質感",
    reverse: false,
  },
  {
    num: "02",
    tag: "Japanese Fermentation",
    problem:
      "「ヴィーガンアイスは味気ない」「コクがなく、どれも似たような味になってしまう」という不満に。",
    title: "甘酒、みそ。日本の発酵素材が、深いうまみとコクを生む。",
    body: [
      "乳製品を使わないスイーツは、あっさりしすぎて物足りなさを感じやすいのがこれまでの常識でした。",
      "私たちが着目したのは、甘酒やみそといった日本の伝統発酵素材です。",
      "発酵がもたらす深いうまみと自然な甘みが、クラフトアイスに奥行きのあるリッチなコクをプラス。「これ、本当に植物性なの？」とノンビーガンのお客様からも驚きと絶賛の声をいただいています。",
    ],
    image: "/images/ingredient_miso_amazake.jpg",
    alt: "甘酒やみそなど日本の発酵素材",
    badge: "日本の伝統発酵が生む深いうまみとコク",
    reverse: true,
  },
  {
    num: "03",
    tag: "Dedicated Workshop",
    problem:
      "「本当に安心して出せる？ 製造ラインでの乳や小麦のコンタミ（混入）が心配」というお店の不安に。",
    title: "工房で作るのは、ヴィーガン＆グルテンフリーのアイスだけ。",
    body: [
      "アレルギーやヴィーガン対応を導入する際、飲食店が最も気をつかうのが製造環境での意図しない混入です。",
      "SoyStoriesの専用アイスファクトリーでは、乳製品・卵・小麦を一切持ち込みません。",
      "製造しているのはヴィーガン＆グルテンフリーのクラフトアイスのみ。コンタミネーションの心配が完全にないため、アレルギーをお持ちのお客様にも自信を持ってお出しいただけます。",
    ],
    image: "/images/factory_kitchen_craft.webp",
    alt: "乳・卵・小麦を持ち込まない専用アイスファクトリーでの仕込み風景",
    badge: "乳・卵・小麦フリーの専用工房で製造",
    reverse: false,
  },
];

/** 全国の飲食店に選ばれる3つの技術的裏付け（米粉製法・発酵素材・専用工房） */
export default function DessertReasonsSection() {
  return (
    <section id="reasons" className="bg-bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="3つの独自製法"
          lines={["ラーメンやバーガー店など、", "飲食店の現場で選ばれる理由。"]}
          lead={[
            "「ヴィーガンアイスは美味しくない」「固くて扱いにくい」という飲食店の現場の常識を覆す、",
            "SoyStoriesならではの3つのこだわりです。",
          ]}
        />

        <div className="mt-12 space-y-16 sm:space-y-20">
          {coreValues.map((item) => (
            <div
              key={item.num}
              className={`grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12 ${
                item.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* テキスト側 */}
              <div className={`md:col-span-7 ${item.reverse ? "md:order-2" : "md:order-1"}`}>
                <p className="text-brand font-mono text-xs font-bold tracking-widest uppercase">
                  {item.num} — {item.tag}
                </p>

                {/* 課題提起 */}
                <div className="mt-3 rounded-xl border-l-3 border-amber-300 bg-[#fdfbf7] p-3 pl-4">
                  <p className="text-ink-light text-[13px] leading-relaxed italic">
                    {item.problem}
                  </p>
                </div>

                {/* 解決見出し */}
                <h3 className="text-ink mt-4 text-xl leading-snug font-bold sm:text-2xl">
                  {item.title}
                </h3>

                {/* 本文 */}
                <div className="text-ink-light mt-3 space-y-2 text-[14px] leading-[1.85] sm:text-[15px]">
                  {item.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* 画像側 */}
              <div className={`md:col-span-5 ${item.reverse ? "md:order-1" : "md:order-2"}`}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 bg-[#f7f3ec] shadow-sm sm:aspect-square">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute right-3 bottom-3 left-3 rounded-xl bg-black/70 px-3 py-2 text-center text-xs font-medium text-white shadow-sm backdrop-blur-xs">
                    {item.badge}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
