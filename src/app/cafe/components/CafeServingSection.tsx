import Image from "next/image";
import PhotoSlot from "@/app/components/wholesale/PhotoSlot";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

/** 撮影後に画像パスを入れると自動で写真表示に切り替わる */
const BAKED_SWEETS_SIDE_PHOTO_SRC: string | null = null;
const PARFAIT_PHOTO_SRC: string | null = null;

const flagshipExamples = [
  {
    image: "/images/serving/serving_float.jpg",
    objectPosition: "object-[center_35%]",
    name: "マンゴーソーダフロート",
  },
  {
    image: "/images/serving/serving_affogato.jpg",
    objectPosition: "object-center",
    name: "ココナッツバニラ＆コーヒーゼリー",
  },
  {
    image: "/images/serving/serving_waffle_cup.jpg",
    objectPosition: "object-[center_45%]",
    name: "米粉ワッフルアイス",
  },
  {
    image: "/images/serving/serving_monaka.jpg",
    objectPosition: "object-[center_70%]",
    name: "抹茶アイス最中",
  },
] as const;

export default function CafeServingSection() {
  return (
    <section id="serving" className="bg-[#f7f3ec] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-brand mb-3 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          添える使い方
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl md:text-4xl">
          お店のケーキやドリンクに、ひと皿の広がりを。
        </h2>
        <p className="text-ink-light mt-4 max-w-3xl font-sans text-[15px] leading-[1.85] sm:text-base">
          1Lあたり50mlなら約20杯（1杯 約100円・税別）、80mlなら約12杯（1杯
          約167円・税別）。自家製の焼き菓子やドリンクにそのまま添えられます。
        </p>

        {/* 先頭：薬院店の実物提供例4点 */}
        <div className="mt-8 rounded-3xl border border-stone-200/80 bg-white p-5 shadow-2xs sm:p-8">
          <p className="text-brand font-sans text-xs font-bold">福岡・薬院の実店舗での提供例</p>
          <h3 className="text-ink mt-1 font-serif text-lg font-bold sm:text-xl">
            SoyStories 薬院店で実際にお出ししているメニュー
          </h3>

          <div className="mt-5 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
            {flagshipExamples.map((item) => (
              <div
                key={item.name}
                className="group overflow-hidden rounded-2xl border border-stone-100 bg-[#fafaf8] p-3"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-stone-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className={`object-cover transition-transform duration-300 group-hover:scale-105 ${item.objectPosition}`}
                  />
                </div>
                <h4 className="text-ink mt-2.5 text-center font-sans text-xs font-bold sm:text-sm">
                  {item.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* フロート・パフェ・アフォガート・焼き菓子に添える使い方 */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex flex-col rounded-3xl border border-stone-200/80 bg-white p-5 shadow-2xs sm:p-6">
            <PhotoSlot
              src={BAKED_SWEETS_SIDE_PHOTO_SRC}
              alt="焼き菓子やタルトの横にバニラアイスを添えたプレート"
              placeholderLabel="ケーキ・タルト・焼き菓子に添えて"
              placeholderSub="パウンドケーキ・ガトーショコラ・ワッフル等の横に（実写撮影枠）"
              aspectClassName="aspect-[16/9]"
            />
            <h3 className="text-ink mt-4 font-serif text-lg font-bold">焼き菓子に添える</h3>
            <p className="text-ink-light mt-2 font-sans text-sm leading-[1.8]">
              ガトーショコラ、タルト、シフォン、パウンドケーキ、スコーン、パンケーキ、ワッフルの横に。温かい焼き菓子に冷たいバニラやアールグレイを添えるデザートプレートに。
            </p>
          </div>

          <div className="flex flex-col rounded-3xl border border-stone-200/80 bg-white p-5 shadow-2xs sm:p-6">
            <PhotoSlot
              src={PARFAIT_PHOTO_SRC}
              alt="季節の果物とグラノーラに重ねたグラスパフェ"
              placeholderLabel="季節のパフェに重ねて"
              placeholderSub="グラスパフェの上段・中段のベースとして（実写撮影枠）"
              aspectClassName="aspect-[16/9]"
            />
            <h3 className="text-ink mt-4 font-serif text-lg font-bold">パフェに重ねる</h3>
            <p className="text-ink-light mt-2 font-sans text-sm leading-[1.8]">
              旬の果物やグラノーラ、ゼリーと重ねる季節のパフェに。米粉の独自製法でシャリシャリ感がなく、冷凍庫の出し入れを繰り返しても滑らかな舌触りが続きます。
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200/80 bg-white p-5 shadow-2xs sm:p-6">
            <span className="bg-brand/10 text-brand inline-block rounded-full px-3 py-1 font-sans text-xs font-bold">
              ドリンクメニューに
            </span>
            <h3 className="text-ink mt-3 font-serif text-lg font-bold">フロートにする</h3>
            <p className="text-ink-light mt-2 font-sans text-sm leading-[1.8]">
              自家製レモネードやクラフトソーダ、水出しコーヒー、紅茶の上に浮かべて。乳脂肪を使っていないため氷と接しても油分が浮きにくく、ドリンクの香りを邪魔せずすっきり馴染みます。
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200/80 bg-white p-5 shadow-2xs sm:p-6">
            <span className="bg-brand/10 text-brand inline-block rounded-full px-3 py-1 font-sans text-xs font-bold">
              エスプレッソ・日本茶と
            </span>
            <h3 className="text-ink mt-3 font-serif text-lg font-bold">アフォガートにする</h3>
            <p className="text-ink-light mt-2 font-sans text-sm leading-[1.8]">
              バニラやUMAMIバニラに、お店自慢のエスプレッソや濃いめに点てた抹茶・ほうじ茶を熱々で注いで。白味噌や甘酒がもたらす深いコクが、珈琲やお茶の苦みを引き立てます。
            </p>
          </div>
        </div>

        <p className="text-ink-muted mt-4 font-sans text-xs">
          ※1杯あたりの計算：{WHOLESALE_FACTS.costPerScoop}
        </p>
      </div>
    </section>
  );
}
