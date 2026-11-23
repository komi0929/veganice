import Image from "next/image";
import Link from "next/link";

const servingCards = [
  {
    badge: "会席の小鉢・水菓子に",
    metric: "約50ml（#18）＝ 1人分 約100円",
    subMetric: "1Lあたり 約20人分（税別）",
    caption: "品数の多い会席の締めくくりや、旬の果物・最中皮と合わせる上品な一玉に。",
    image: "/images/serving/serving_monaka.jpg",
    objectPosition: "object-[center_70%]",
  },
  {
    badge: "洋コース・婚礼ドルチェに",
    metric: "約80ml（#12）＝ 1人分 約167円",
    subMetric: "1Lあたり 約12人分（税別）",
    caption: "温かいガトーへの添え盛りや、珈琲ゼリー・ジュレと重ねるメイン甘味に。",
    image: "/images/serving/serving_affogato.jpg",
    objectPosition: "object-center",
  },
  {
    badge: "団体・朝食ビュッフェ・常備に",
    metric: "1L・2L角型で省スペース常備",
    subMetric: "2L容器1本で約40人分（50ml）",
    caption: "MICEや訪日団体でも1名だけ別皿に差し替えず、全員に同じ一皿を出せます。",
    image: "/images/bulk_2l.jpg",
    objectPosition: "object-cover",
  },
] as const;

export default function HotelPortionSection() {
  return (
    <section id="portion" className="bg-bg-white scroll-mt-14 py-12 sm:py-18">
      <span id="banquet" className="-mt-16 block pt-16" aria-hidden="true" />
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-brand mb-2 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          一皿のイメージと1人分目安
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
          会席の小鉢なら1Lで約20人分、コース皿なら約12人分。
        </h2>

        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {servingCards.map((card) => (
            <div
              key={card.badge}
              className="flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-[#fafaf8] p-3.5"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-stone-100">
                <Image
                  src={card.image}
                  alt={card.badge}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`object-cover ${card.objectPosition}`}
                />
                <span className="absolute top-2.5 left-2.5 rounded-full bg-white/95 px-2.5 py-0.5 font-sans text-[11px] font-bold text-stone-800 shadow-2xs">
                  {card.badge}
                </span>
              </div>
              <div className="mt-3 px-0.5">
                <p className="text-ink font-sans text-sm font-bold sm:text-[15px]">{card.metric}</p>
                <p className="text-brand mt-0.5 font-sans text-xs font-bold">{card.subMetric}</p>
                <p className="text-ink-light mt-1.5 font-sans text-xs leading-relaxed">
                  {card.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-col justify-between gap-2.5 rounded-2xl border border-stone-200/70 bg-[#f7f3ec] px-4 py-3 sm:flex-row sm:items-center sm:px-5">
          <p className="text-ink font-sans text-xs leading-relaxed">
            <strong>売店・お部屋菓子・個別予約日のお守り常備にも：</strong>
            「100ml個食カップ（税別¥300・60個〜）」や「屋号ロゴOEM（開発費¥0）」も選べます。
          </p>
          <div className="flex shrink-0 flex-wrap gap-3 font-sans text-xs font-bold">
            <Link href="/wholesale" className="text-brand underline underline-offset-4">
              100mlカップ案内 →
            </Link>
            <Link
              href="/oem/plan?src=hotel_portion"
              className="text-brand underline underline-offset-4"
            >
              屋号ロゴOEM →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
