import Image from "next/image";
import { TrendingUp, Sparkles, Clock, UtensilsCrossed } from "lucide-react";
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
    title: "−18℃から10秒でサーブ。狭い店舗でも安心の省スペース設計",
    description:
      "コールドテーブルや小型フリーザーのすき間に収まる1L・2Lの角型バルク。米粉を使った独自製法により、冷凍庫から出してすぐディッシャーがすっと通るため、解凍待ちや削る力は不要。忙しいピーク時のオペレーションを一切乱しません。",
  },
];

const opsStats = [
  { label: "客単価アップ", value: "＋350", unit: "円〜", note: "セットや単品で手軽にプラス" },
  { label: "仕込み・廃棄ロス", value: "0", unit: "", note: "冷凍長期保管でロスゼロ" },
  { label: "1Lあたりの杯数", value: "約20", unit: "杯", note: "原価計算が明快（約50ml換算）" },
  { label: "最小ロット", value: "4", unit: "L〜", note: "1L×4個など組み合わせ自由" },
];

/** 福岡の実店舗で人気の提供スタイル実例 */
const servingExamples = [
  {
    image: "/images/serving/serving_float.jpg",
    objectPosition: "object-[center_35%]",
    name: "クラフトソーダフロート",
    category: "ドリンクデザート",
    target: "バーガー店・カフェ・ダイナー・ラーメン店",
    price: "¥650〜¥780",
    description:
      "炭酸ソーダや自家製シロップにアイスを1スクープ。ラーメンやバーガーなど満足感ある食事の後味をすっきりリセットする、高単価ドリンクメニュー。",
    operation: "炭酸を注いでアイスを乗せるだけ（提供15秒）",
  },
  {
    image: "/images/serving/serving_affogato.jpg",
    objectPosition: "object-center",
    name: "自家製アフォガート仕立て",
    category: "食後デザート",
    target: "カフェ・ビストロ・ラーメン店・洋食",
    price: "¥580〜¥680",
    description:
      "ガラスの器にアイスを盛り、エスプレッソや黒蜜・ほうじ茶シロップを回しかけて。大人の食後を贅沢に締めくくる、高満足度の一皿。",
    operation: "器に盛ってシロップを添えるだけ（提供30秒）",
  },
  {
    image: "/images/serving/serving_waffle_cup.jpg",
    objectPosition: "object-[center_45%]",
    name: "ワッフル＆クラフトアイスカップ",
    category: "カフェ・テイクアウト",
    target: "カフェ・バーガー店・テイクアウト",
    price: "¥480〜¥580",
    description:
      "クラフトカップに盛り付けて、イートインにもテイクアウトにも即座に対応。写真映えする見た目で若い客層やインバウンドに圧倒的人気。",
    operation: "カップにすくってトッピングを添えるだけ",
  },
  {
    image: "/images/serving/serving_monaka.jpg",
    objectPosition: "object-[center_65%]",
    name: "和モダン アイス最中（求肥添え）",
    category: "和モダンデザート",
    target: "ラーメン店・和食・うどん蕎麦・カフェ",
    price: "¥520〜¥620",
    description:
      "香ばしい最中の皮に求肥と濃厚な和アイスをサンド。パリッとした食感と滑らかなアイスのコントラストで、食事の格を引き上げる逸品。",
    operation: "最中の皮に挟むだけ（仕込み0分・ロスなし）",
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
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <p className="text-brand text-xs font-bold tracking-wide">
                実店舗（福岡・薬院）での提供例
              </p>
              <h3 className="text-ink mt-1 text-2xl font-bold tracking-tight">
                盛り付けるだけで、お店の看板デザートに。
              </h3>
            </div>
            <p className="text-ink-muted text-xs">
              ※価格は一例です。お店のコンセプトに合わせて自由に設定できます。
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {servingExamples.map((item) => (
              <div
                key={item.name}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-[#fdfbf7] p-4 transition-shadow hover:shadow-md sm:p-5"
              >
                {/* 写真コンテナ（縦横比 4:3 で統一し、美しくトリミング調整） */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className={`object-cover ${item.objectPosition}`}
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur-xs">
                    {item.category}
                  </span>
                  <span className="absolute right-3 bottom-3 rounded-full bg-white/95 px-3 py-1 text-sm font-bold text-cta shadow-sm">
                    想定価格 {item.price}
                  </span>
                </div>

                <div className="mt-4">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-ink text-lg font-bold">{item.name}</h4>
                  </div>
                  <p className="text-brand mt-1 text-xs font-semibold">
                    おすすめ業態：{item.target}
                  </p>
                  <p className="text-ink-light mt-2 text-[13px] leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-medium text-ink">
                    <UtensilsCrossed className="text-brand h-3.5 w-3.5 shrink-0" />
                    <span>オペレーション：{item.operation}</span>
                  </div>
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
