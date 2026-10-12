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

const menuIdeas = [
  {
    name: "食後のお口直しヴィーガンアイス",
    price: "¥480〜",
    note: "ラーメンやバーガーのあとに。乳脂肪ゼロで油分が口に残らず、すっきり完食。",
  },
  {
    name: "食事メニュー＋ミニデザートセット",
    price: "＋¥350",
    note: "セット注文で手軽に客単価アップ。冷凍庫から出してすぐにサーブ可能。",
  },
  {
    name: "季節のクラフトアイス2種盛り（カフェ・ディナー）",
    price: "¥680",
    note: "発酵のコクと素材感を味わうデザート。ヴィーガンの方はもちろん、ノンヴィーガンの人でも大満足の一皿に。",
  },
];

/** 飲食店のビジネスメリットとメニュー例 */
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

        {/* メニュー例 */}
        <div className="mt-12 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-ink text-xl font-bold">たとえば、こんな提供スタイル。</h3>
            <p className="text-ink-muted text-xs">お店のコンセプトに合わせて価格も盛り付けも自由</p>
          </div>
          <ul className="mt-5 divide-y divide-gray-100">
            {menuIdeas.map((menu) => (
              <li key={menu.name} className="flex items-start justify-between gap-4 py-4">
                <div>
                  <p className="text-ink text-[15px] font-bold">{menu.name}</p>
                  <p className="text-ink-light mt-1 text-[13px] leading-relaxed">{menu.note}</p>
                </div>
                <p className="text-cta shrink-0 text-lg font-bold">{menu.price}</p>
              </li>
            ))}
          </ul>
        </div>

        <MidCta message="まずは、お店で実際の味と使いやすさを試してみませんか？" />
      </div>
    </section>
  );
}
