import Image from "next/image";
import Link from "next/link";

const servingScenes = [
  {
    title: "タルト・ワッフル・ドーナツ添えに",
    caption: "温かい焼き菓子やドーナツの添え・アイスサンドに。",
    image: "/images/serving/serving_waffle_cup.jpg",
    objectPosition: "object-[center_45%]",
  },
  {
    title: "ソーダ・水出し珈琲のフロートに",
    caption: "マンゴーやベリー、バニラで季節のドリンクメニューに。",
    image: "/images/serving/serving_float.jpg",
    objectPosition: "object-[center_35%]",
  },
  {
    title: "アフォガート・パフェに",
    caption: "深煎りエスプレッソや自家製グラノーラと重ねるグラスデザートに。",
    image: "/images/serving/serving_affogato.jpg",
    objectPosition: "object-center",
  },
  {
    title: "テイクアウト・店頭販売に",
    caption: "盛り付け不要の100mlカップ（300円・60個〜）や店名ロゴOEMにも対応。",
    image: "/images/gelato_cup_tower.jpg",
    objectPosition: "object-cover",
  },
] as const;

export default function CafeServingSection() {
  return (
    <section id="serving" className="bg-bg-white scroll-mt-14 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-1.5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-brand mb-1.5 font-sans text-xs font-bold tracking-wider">
              お店での出し方
            </p>
            <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
              焼き菓子の添えから、フロート、店頭物販まで。
            </h2>
          </div>
          <p className="text-ink-muted font-sans text-xs">
            1皿 50ml 約100円 ／ 80ml 約167円（税別）
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {servingScenes.map((scene) => (
            <figure
              key={scene.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-[#fafaf8]"
            >
              <div className="relative aspect-[4/3] w-full bg-stone-100">
                <Image
                  src={scene.image}
                  alt={scene.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={`object-cover ${scene.objectPosition}`}
                />
              </div>
              <figcaption className="flex flex-1 flex-col p-4">
                <h3 className="text-ink font-sans text-sm leading-snug font-bold">{scene.title}</h3>
                <p className="text-ink-light mt-1 font-sans text-xs leading-relaxed">
                  {scene.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-4 font-sans text-xs font-bold">
          <Link href="/wholesale" className="text-brand underline underline-offset-4">
            100mlカップ卸の詳細を見る →
          </Link>
          <Link
            href="/oem/plan?src=cafe_serving"
            className="text-brand underline underline-offset-4"
          >
            店名ロゴシール・お店素材OEMを見る →
          </Link>
        </div>
      </div>
    </section>
  );
}
