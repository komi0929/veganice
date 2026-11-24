import Image from "next/image";
import Link from "next/link";

const servingScenes = [
  {
    badge: "焼き菓子・ドーナツに",
    title: "温かいタルトやワッフルの添え・サンドに",
    caption: "焼きたてのお菓子の上でとろりと緩み、濃厚なコクが絡み合います。",
    image: "/images/serving/serving_waffle_cup.jpg",
    objectPosition: "object-[center_45%]",
  },
  {
    badge: "ドリンクメニューに",
    title: "自家製ソーダや水出し珈琲のフロートに",
    caption: "完熟マンゴーやミックスベリー、濃厚バニラで華やかな一杯に。",
    image: "/images/serving/serving_float.jpg",
    objectPosition: "object-[center_35%]",
  },
  {
    badge: "グラスデザートに",
    title: "エスプレッソのアフォガート・パフェに",
    caption: "甘酒と白みそが香るUMAMIバニラが、深煎り珈琲のほろ苦さと溶け合います。",
    image: "/images/serving/serving_affogato.jpg",
    objectPosition: "object-center",
  },
  {
    badge: "ランチ後・和素材に",
    title: "最中・米粉菓子のアレンジや食後の小皿に",
    caption: "お濃茶仕立ての抹茶やほうじ茶。食後も軽やかで長期冷凍保管にも向いています。",
    image: "/images/serving/serving_monaka.jpg",
    objectPosition: "object-[center_70%]",
  },
] as const;

export default function CafeServingSection() {
  return (
    <section id="serving" className="bg-bg-white scroll-mt-14 py-12 sm:py-18">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-brand mb-2 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
              <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
              一皿のイメージ
            </p>
            <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
              温かいタルトの添えから、珈琲アフォガートまで。
            </h2>
          </div>
          <p className="text-ink-muted font-sans text-xs font-medium">
            1玉 50ml（#18）約100円 ／ 80ml（#12）約167円（税別）
          </p>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {servingScenes.map((scene) => (
            <figure
              key={scene.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-[#fafaf8] p-3"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-stone-100">
                <Image
                  src={scene.image}
                  alt={scene.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={`object-cover ${scene.objectPosition}`}
                />
                <span className="absolute top-2.5 left-2.5 rounded-full bg-white/92 px-2.5 py-0.5 font-sans text-[11px] font-bold text-stone-800 shadow-2xs">
                  {scene.badge}
                </span>
              </div>
              <figcaption className="mt-3 flex flex-1 flex-col px-1 pb-1">
                <h3 className="text-ink font-sans text-sm leading-snug font-bold">{scene.title}</h3>
                <p className="text-ink-light mt-1 font-sans text-xs leading-relaxed">
                  {scene.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-5 flex flex-col justify-between gap-2.5 rounded-2xl border border-stone-200/70 bg-[#f7f3ec] px-4 py-3 sm:flex-row sm:items-center sm:px-5">
          <p className="text-ink font-sans text-xs leading-relaxed">
            <strong>テイクアウト・レジ横物販にも：</strong>
            「100ml個食カップ（税別¥300・60個〜）」や「フタ丸シールOEM（開発費¥0）」も選べます。
          </p>
          <div className="flex shrink-0 flex-wrap gap-3 font-sans text-xs font-bold">
            <Link href="/wholesale" className="text-brand underline underline-offset-4">
              100mlカップ案内 →
            </Link>
            <Link
              href="/oem/plan?src=cafe_serving"
              className="text-brand underline underline-offset-4"
            >
              店名ロゴOEM →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
