import Image from "next/image";

const servingExamples = [
  {
    image: "/images/serving/serving_affogato.jpg",
    objectPosition: "object-center",
    scene: "レストラン・定食に",
    name: "食後のデザート・アフォガート",
    caption: "しっかりしたお食事の後でも重くならない一皿。",
  },
  {
    image: "/images/serving/serving_waffle_cup.jpg",
    objectPosition: "object-[center_45%]",
    scene: "ドーナツ・焼き菓子店に",
    name: "ワッフル・タルト・ドーナツ添え",
    caption: "温かい焼き菓子やドーナツの添え・サンドに。",
  },
  {
    image: "/images/serving/serving_float.jpg",
    objectPosition: "object-[center_35%]",
    scene: "カフェ・ドリンクに",
    name: "ソーダ・珈琲フロート",
    caption: "マンゴーやベリー、バニラで季節のドリンクに。",
  },
  {
    image: "/images/serving/serving_monaka.jpg",
    objectPosition: "object-[center_70%]",
    scene: "和食・宿泊施設に",
    name: "抹茶・ほうじ茶の和デザート",
    caption: "最中皮や求肥、季節の果物と合わせた一皿に。",
  },
] as const;

const meritPills = [
  "1皿（50ml）約100円（税別）",
  "小型冷凍庫に入る1L角型×4本〜",
  "賞味期限表示義務なし・廃棄が出にくい",
] as const;

export default function DessertAboutSection() {
  return (
    <section id="about" className="bg-bg-white scroll-mt-16 py-12 sm:py-16">
      <span id="operation" className="-mt-16 block pt-16" aria-hidden="true" />
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-1.5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-brand mb-1.5 text-xs font-bold tracking-wide">お店での出し方</p>
            <h2 className="text-ink text-2xl leading-snug font-bold tracking-tight sm:text-3xl">
              食後の小皿から、フロート、焼き菓子添えまで。
            </h2>
          </div>
          <p className="text-ink-muted text-xs">※福岡の直営店での提供実例</p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3.5 sm:gap-5 md:grid-cols-4">
          {servingExamples.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-[#fafaf8] p-2.5 sm:p-3"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className={`object-cover ${item.objectPosition}`}
                  sizes="(max-width: 768px) 48vw, 25vw"
                />
              </div>
              <figcaption className="mt-2.5 px-0.5">
                <span className="text-brand block text-[11px] font-bold">{item.scene}</span>
                <h3 className="text-ink mt-0.5 text-xs font-bold sm:text-sm">{item.name}</h3>
                <p className="text-ink-light mt-1 text-[11px] leading-relaxed sm:text-xs">
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <ul className="mt-5 flex flex-wrap gap-2">
          {meritPills.map((pill) => (
            <li
              key={pill}
              className="text-ink inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-[#fafaf8] px-3.5 py-1.5 text-xs font-bold"
            >
              <span className="text-brand" aria-hidden="true">
                ✓
              </span>
              {pill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
