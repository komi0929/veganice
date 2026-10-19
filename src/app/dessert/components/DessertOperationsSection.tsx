import Image from "next/image";
import { TrendingUp, Sparkles, Clock } from "lucide-react";
import { MidCta, SectionHeader } from "./ui";

const businessBenefits = [
  {
    icon: TrendingUp,
    badge: "収益性・高粗利",
    title: "セット注文で客単価＋350〜500円。廃棄ロスゼロで利益が残る",
    description:
      "ラーメンやバーガーに食後のデザートをプラスするだけで、無理なく客単価が向上。自家製スイーツのような日持ちの心配や仕込みの手間がなく、冷凍保管でフードロスも仕込み人件費もゼロ。高い粗利率を確実に残せます。",
  },
  {
    icon: Sparkles,
    badge: "食後体験・リピート",
    title: "「最後が最高に美味しかった！」でノンヴィーガンの満足度も最大化",
    description:
      "満足感ある食事の後味を決定づけるのは最後の一口。乳脂肪ゼロで口に油分を残さず爽快に食事を終えられるため、ヴィーガンのお客様はもちろん、一緒に来店されたノンヴィーガンの人でも「また来たい！」と感動。Googleクチコミの評価を高めます。",
  },
  {
    icon: Clock,
    badge: "現場オペレーション",
    title: "冷凍庫から出してすぐディッシャーが通る。解凍待ち不要の省スペース設計",
    description:
      "コールドテーブルや小型フリーザーのすき間に収まる1L・2Lの角型バルク。米粉を使った独自製法により、冷凍庫から出してすぐディッシャーがすっと通るため、解凍待ちや削る力は不要。忙しいピーク時のオペレーションを乱しません。",
  },
];

const opsStats = [
  { label: "客単価アップ", value: "＋350", unit: "円〜", note: "セットや単品で手軽にプラス" },
  { label: "仕込み・廃棄ロス", value: "0", unit: "", note: "冷凍長期保管でロスゼロ" },
  { label: "1Lあたりの杯数", value: "約20", unit: "杯", note: "原価計算が明快（約50ml換算）" },
  { label: "最小ロット", value: "4", unit: "L〜", note: "1L×4個など組み合わせ自由" },
];

/** 福岡の実店舗で提供している実例 */
const servingExamples = [
  {
    image: "/images/serving/serving_float.jpg",
    objectPosition: "object-[center_35%]",
    name: "ソーダフロート",
  },
  {
    image: "/images/serving/serving_affogato.jpg",
    objectPosition: "object-center",
    name: "アフォガート",
  },
  {
    image: "/images/serving/serving_waffle_cup.jpg",
    objectPosition: "object-[center_45%]",
    name: "ワッフルカップ",
  },
  {
    image: "/images/serving/serving_monaka.jpg",
    objectPosition: "object-[center_70%]",
    name: "アイス最中",
  },
];

/** 飲食店のビジネスメリットと実店舗提供例 */
export default function DessertOperationsSection() {
  return (
    <section id="operation" className="bg-[#f7f3ec] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="飲食店のビジネスメリット"
          lines={["料理の満足度を高め、", "客単価と利益をしっかり伸ばす。"]}
          lead={[
            "自家製デザートを仕込む負担や廃棄リスクを抱えることなく、",
            "お店の収益向上と顧客満足度の両立を実現する3つの理由です。",
          ]}
        />

        {/* 3つのコアメリットカード */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {businessBenefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.badge}
                className="flex flex-col rounded-3xl bg-white p-6 shadow-sm sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="bg-brand/10 text-brand rounded-full px-3 py-1 text-xs font-bold">
                    {benefit.badge}
                  </span>
                  <div className="bg-brand/10 text-brand flex h-10 w-10 items-center justify-center rounded-2xl">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-ink mt-4 text-[17px] leading-snug font-bold">
                  {benefit.title}
                </h3>
                <p className="text-ink-light mt-3 text-[13.5px] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* 数字で見る安心設計 */}
        <dl className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {opsStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white p-4 shadow-sm">
              <dt className="text-ink-muted text-xs font-bold">{stat.label}</dt>
              <dd className="text-brand mt-1 leading-none font-bold">
                <span className="text-[32px] tracking-tight">{stat.value}</span>
                {stat.unit && <span className="ml-0.5 text-base">{stat.unit}</span>}
              </dd>
              <dd className="text-ink-light mt-2 text-xs leading-relaxed">{stat.note}</dd>
            </div>
          ))}
        </dl>

        {/* 実店舗での提供例（写真付きビジュアルギャラリー） */}
        <div className="mt-14 rounded-3xl bg-white p-6 shadow-sm sm:p-10">
          <div>
            <p className="text-brand text-xs font-bold tracking-wide">実店舗（福岡・薬院）</p>
            <h3 className="text-ink mt-1 text-2xl font-bold tracking-tight">
              私たちの店舗での提供例
            </h3>
            <p className="text-ink-light mt-2 text-sm leading-relaxed">
              福岡・薬院の実店舗「SoyStories」で実際に提供しているメニュー例です。
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {servingExamples.map((item) => (
              <div
                key={item.name}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-[#fdfbf7] p-3 transition-all hover:shadow-md sm:p-4"
              >
                {/* 写真コンテナ（縦横比 4:3 で統一し、美しくトリミング調整） */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className={`object-cover transition-transform duration-300 group-hover:scale-105 ${item.objectPosition}`}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>

                <div className="mt-3 text-center">
                  <h4 className="text-ink text-sm font-bold sm:text-base">{item.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <MidCta message="まずは、お店で実際の味と使いやすさを試してみませんか？" />
      </div>
    </section>
  );
}
