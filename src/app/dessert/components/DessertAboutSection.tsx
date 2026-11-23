import Image from "next/image";

const servingExamples = [
  {
    image: "/images/serving/serving_affogato.jpg",
    objectPosition: "object-center",
    scene: "コース・食後の甘味に",
    name: "バニラ＆珈琲ゼリー仕立て",
    caption: "満足感のあるお食事の後も、すっと軽やかに締まる一皿。",
  },
  {
    image: "/images/serving/serving_waffle_cup.jpg",
    objectPosition: "object-[center_45%]",
    scene: "ドーナツ・焼き菓子店に",
    name: "米粉ワッフル・タルト添え",
    caption: "温かい焼き菓子の上でとろりと緩み、濃密なコクが絡みます。",
  },
  {
    image: "/images/serving/serving_float.jpg",
    objectPosition: "object-[center_35%]",
    scene: "カフェ・ドリンクに",
    name: "マンゴーソーダフロート",
    caption: "完熟マンゴーやミックスベリーでグラスが華やぐ一杯に。",
  },
  {
    image: "/images/serving/serving_monaka.jpg",
    objectPosition: "object-[center_70%]",
    scene: "和食・定食・茶屋に",
    name: "抹茶アイス最中・和甘味",
    caption: "濃縮甘酒が支えるお濃茶仕立て。求肥や最中皮とも好相性。",
  },
] as const;

const meritPills = [
  "1皿（50ml）原価 約100円（税別）",
  "小型冷凍庫に収まる1L角型×4本〜",
  "冷凍保管で仕込み・廃棄ロスゼロ",
] as const;

export default function DessertAboutSection() {
  return (
    <section id="about" className="scroll-mt-16 bg-[#f7f3ec] py-12 sm:py-18">
      <span id="operation" className="-mt-16 block pt-16" aria-hidden="true" />
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-brand mb-2 inline-flex items-center gap-2 text-xs font-bold tracking-wide">
              <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
              一皿のイメージ
            </p>
            <h2 className="text-ink text-2xl leading-snug font-bold tracking-tight sm:text-3xl">
              食後の小鉢から、カフェのフロート、焼き菓子添えまで。
            </h2>
          </div>
          <p className="text-ink-muted text-xs">※直営店（福岡・薬院）での提供実例</p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3.5 sm:gap-5 md:grid-cols-4">
          {servingExamples.map((item) => (
            <figure
              key={item.name}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white p-2.5 shadow-2xs sm:p-3.5"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className={`object-cover transition-transform duration-300 group-hover:scale-105 ${item.objectPosition}`}
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
              className="text-ink inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold shadow-2xs"
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
