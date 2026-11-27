import Image from "next/image";
import Link from "next/link";

const usageCards = [
  {
    title: "会席・コースのデザートに",
    price: "小鉢 約50ml＝約100円（税別・1Lで約20人分）",
    caption:
      "果物だけに差し替えず、皆様と同じ器でお出しいただけます。抹茶・ほうじ茶・白桃など和の味も選べます。",
    image: "/images/serving/serving_monaka.jpg",
    objectPosition: "object-[center_70%]",
    linkLabel: null,
    linkHref: null,
  },
  {
    title: "お部屋出し・湯上がりに",
    price: "100mlカップ 300円（税別・60個〜）",
    caption:
      "盛り付けがいらない個食カップ。客室冷凍庫への常備やルームサービス、湯上がり処にもそのまま使えます。",
    image: "/images/gelato_spoon_moment.jpg",
    objectPosition: "object-[center_62%]",
    linkLabel: "100mlカップの詳細 →",
    linkHref: "/wholesale",
  },
  {
    title: "売店の屋号カップ・地元の味づくりに",
    price: "屋号シール変更 開発費0円（286円／個・60個〜）",
    caption:
      "お宿のロゴ入りカップや、地元の果物・お茶を使った専用開発（仕入先廃業の代替等）も60個・6Lから承ります。",
    image: "/images/gelato_cup_tower.jpg",
    objectPosition: "object-cover",
    linkLabel: "屋号ロゴ・地元素材OEMの詳細 →",
    linkHref: "/oem/plan?src=hotel_portion",
  },
] as const;

export default function HotelPortionSection() {
  return (
    <section id="portion" className="bg-bg-white scroll-mt-14 py-12 sm:py-16">
      <span id="banquet" className="-mt-16 block pt-16" aria-hidden="true" />
      <span id="usage" className="-mt-16 block pt-16" aria-hidden="true" />
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-brand mb-1.5 font-sans text-xs font-bold tracking-wider">
          お宿での使い方
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
          夕食のデザートから、お部屋出し、売店のお土産まで。
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {usageCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-[#fafaf8]"
            >
              <div className="relative aspect-[16/10] w-full bg-stone-100">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`object-cover ${card.objectPosition}`}
                />
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="text-ink font-serif text-base font-bold">{card.title}</h3>
                <p className="text-brand mt-1 font-sans text-xs font-bold">{card.price}</p>
                <p className="text-ink-light mt-2 font-sans text-xs leading-relaxed sm:text-[13px]">
                  {card.caption}
                </p>
                {card.linkHref && card.linkLabel ? (
                  <Link
                    href={card.linkHref}
                    className="text-brand mt-auto pt-3 font-sans text-xs font-bold underline underline-offset-4"
                  >
                    {card.linkLabel}
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
