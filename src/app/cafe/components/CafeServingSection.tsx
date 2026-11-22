import Image from "next/image";
import Link from "next/link";
import PhotoSlot from "@/app/components/wholesale/PhotoSlot";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

/** 新規写真を撮影後、パスを設定すると該当カード上部に写真が表示される（未設定時は枠を出さない） */
const BAKED_SWEETS_SIDE_PHOTO_SRC: string | null = null;
const PARFAIT_PHOTO_SRC: string | null = null;

const usageCards = [
  {
    badge: "01｜ドーナツ・焼き菓子・ケーキに",
    title: "ドーナツに挟む／焼き菓子・ガレット・ワッフルに添える",
    body: "焼きドーナツや米粉パンのアイスサンド、ガレット、タルト、ガトーショコラ、スコーン、ワッフルの横に。温かいお菓子に冷たいバニラやアールグレイを合わせる一皿にそのまま使えます。",
    photoSrc: BAKED_SWEETS_SIDE_PHOTO_SRC,
    photoAlt: "焼き菓子やタルトの横にバニラアイスを添えたプレート",
  },
  {
    badge: "02｜ドリンクメニューに",
    title: "ソーダ・珈琲・紅茶のフロートにする",
    body: "自家製レモネードやクラフトソーダ、水出しコーヒー、紅茶の上に浮かべて。乳脂肪を使っていないため氷と接しても油分が浮きにくく、ドリンクの香りにすっきり馴染みます。",
    photoSrc: null,
    photoAlt: "",
  },
  {
    badge: "03｜グラスデザートに",
    title: "パフェやアフォガートに仕立てる",
    body: "旬の果物やグラノーラと重ねる季節のパフェや、熱々のエスプレッソ・濃い抹茶を注ぐアフォガートに。白味噌や甘酒の深いコクが珈琲の苦みを引き立てます。",
    photoSrc: PARFAIT_PHOTO_SRC,
    photoAlt: "季節の果物とグラノーラに重ねたグラスパフェ",
  },
  {
    badge: "04｜カフェランチの締めくくりに",
    title: "ランチの食後デザートに出す",
    body: "プレートランチやパスタの食後に小さな一皿（約50ml＝原価 約100円・税別）として。乳脂肪ゼロで食後も軽やかに食べきれ、冷凍保管のため平日の廃棄ロスも出ません。",
    photoSrc: null,
    photoAlt: "",
  },
] as const;

const platingIdeas = [
  {
    image: "/images/serving/serving_float.jpg",
    objectPosition: "object-[center_35%]",
    title: "季節果実のソーダフロート",
    caption: "マンゴーやミックスベリーを自家製ソーダに浮かべて",
  },
  {
    image: "/images/serving/serving_affogato.jpg",
    objectPosition: "object-center",
    title: "珈琲ゼリー・アフォガート仕立て",
    caption: "珈琲ゼリーやエスプレッソにバニラを添えて",
  },
  {
    image: "/images/serving/serving_monaka.jpg",
    objectPosition: "object-[center_70%]",
    title: "和素材・米粉菓子のアレンジ",
    caption: "抹茶・ほうじ茶を最中皮や求肥、焼き菓子と合わせて",
  },
] as const;

export default function CafeServingSection() {
  return (
    <section id="serving" className="bg-bg-white scroll-mt-14 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-brand mb-3 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          お店での使い方
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl md:text-4xl">
          ドーナツ・焼き菓子の添えから、フロート・持ち帰りカップまで。
        </h2>
        <p className="text-ink-light mt-4 max-w-3xl font-sans text-[15px] leading-[1.85] sm:text-base">
          仕込みの手間や日持ちによるロスを増やさず、カフェ・ベーカリーのメニューを広げられます。1Lあたり50ml（#18）なら約20杯・1杯
          約100円（税別）、80ml（#12）なら約12杯・1杯 約167円（税別）が目安です。
        </p>

        {/* カフェ・菓子店の4つの提供シーン */}
        <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2">
          {usageCards.map((card) => (
            <div
              key={card.badge}
              className="flex flex-col rounded-3xl border border-stone-200/80 bg-[#fafaf8] p-5 sm:p-6"
            >
              <PhotoSlot
                src={card.photoSrc}
                alt={card.photoAlt}
                aspectClassName="aspect-[16/9]"
                wrapperClassName="mb-4"
              />
              <span className="bg-brand/10 text-brand inline-block self-start rounded-full px-3 py-1 font-sans text-xs font-bold">
                {card.badge}
              </span>
              <h3 className="text-ink mt-3 font-serif text-lg font-bold">{card.title}</h3>
              <p className="text-ink-light mt-2 font-sans text-sm leading-[1.85]">{card.body}</p>
            </div>
          ))}
        </div>

        <p className="text-ink-muted mt-3 font-sans text-xs">
          ※1杯あたりの計算：{WHOLESALE_FACTS.costPerScoop}
        </p>

        {/* 盛り付け・アレンジのイメージ（直営店での実写3点・Heroと重複なし） */}
        <div className="mt-10 rounded-3xl border border-stone-200/80 bg-[#f7f3ec] p-5 sm:p-7">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-ink font-serif text-base font-bold sm:text-lg">
              盛り付け・アレンジのイメージ
            </h3>
            <p className="text-ink-muted font-sans text-xs">
              直営カフェで実際にお出ししているメニュー写真です
            </p>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {platingIdeas.map((item) => (
              <figure
                key={item.title}
                className="overflow-hidden rounded-2xl border border-stone-200/70 bg-white p-3"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-stone-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className={`object-cover ${item.objectPosition}`}
                  />
                </div>
                <figcaption className="mt-2.5 px-0.5">
                  <p className="text-ink font-sans text-xs font-bold sm:text-sm">{item.title}</p>
                  <p className="text-ink-muted mt-0.5 font-sans text-[11px] leading-relaxed">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-5 flex flex-col justify-between gap-3 rounded-2xl bg-white px-4 py-3.5 sm:flex-row sm:items-center sm:px-5">
            <p className="text-ink font-sans text-xs leading-relaxed sm:text-sm">
              <strong>テイクアウト専門・ベーカリー店様へ：</strong>
              そのまま店頭販売できる「100ml個食カップ（税別¥300・60個〜）」や「フタ丸シールOEM（開発費¥0）」も選べます。
            </p>
            <div className="flex shrink-0 flex-wrap gap-3 font-sans text-xs font-bold">
              <Link href="/wholesale" className="text-brand underline underline-offset-4">
                100mlカップ案内 →
              </Link>
              <Link
                href="/oem/plan?src=cafe_serving"
                className="text-brand underline underline-offset-4"
              >
                店名ロゴOEM案内 →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
