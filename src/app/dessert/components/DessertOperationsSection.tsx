import Image from "next/image";
import { TrendingUp, Sparkles, Clock } from "lucide-react";
import { MidCta, SectionHeader } from "./ui";

const businessBenefits = [
  {
    icon: TrendingUp,
    badge: "客単価アップ・無ロス",
    title: "セットの一品や添え盛りで客単価アップ。冷凍保管で廃棄ロスも出ない",
    description:
      "定食・コースの食後の小鉢デザート、カフェのプレート、ドーナツや焼き菓子への添え盛り（アイスサンド）など幅広く活用可能。1皿（約50ml）原価は約100円（税別）で、生ケーキのような日持ちの心配や仕込みの手間がかかりません。",
  },
  {
    icon: Sparkles,
    badge: "食後体験・リピート",
    title: "乳脂肪ゼロで後味すっきり。ノンヴィーガンのお客様の満足度も高める",
    description:
      "満足感あるお食事の後味を決定づけるのは最後の一口。乳脂肪ゼロで口に油分を残さず軽やかに食べきれるため、ヴィーガンの方はもちろん、一緒に来店されたノンヴィーガンのお客様からも喜ばれ、クチコミ評価を高めます。",
  },
  {
    icon: Clock,
    badge: "省スペース・品質維持",
    title: "1L角型×4本から収まる省スペース。出し入れしても滑らかさが続く",
    description:
      "コールドテーブルや小型冷凍庫のすき間に収まりやすい1L・2Lの角型バルク（最小4L〜）。米粉を使った独自製法により、営業中に冷凍庫の出し入れを繰り返しても最後まで滑らかな舌触りで提供できます。",
  },
];

/** 福岡の実店舗で提供している実例（業態ごとの活用シーン付き） */
const servingExamples = [
  {
    image: "/images/serving/serving_float.jpg",
    objectPosition: "object-[center_35%]",
    scene: "カフェ・ドリンクに",
    name: "マンゴーソーダフロート",
  },
  {
    image: "/images/serving/serving_affogato.jpg",
    objectPosition: "object-center",
    scene: "コース・食後の甘味に",
    name: "バニラ＆珈琲ゼリー仕立て",
  },
  {
    image: "/images/serving/serving_waffle_cup.jpg",
    objectPosition: "object-[center_45%]",
    scene: "ドーナツ・焼き菓子店に",
    name: "米粉ワッフル・焼き菓子添え",
  },
  {
    image: "/images/serving/serving_monaka.jpg",
    objectPosition: "object-[center_70%]",
    scene: "和食・定食・茶屋に",
    name: "抹茶アイス最中・和甘味",
  },
];

/** 飲食店のビジネスメリットと実店舗提供例 */
export default function DessertOperationsSection() {
  return (
    <section id="operation" className="scroll-mt-16 bg-[#f7f3ec] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="現場での導入メリット"
          lines={["お店のメニューの魅力を高め、", "無理なく客単価と満足度を伸ばす。"]}
          lead={[
            "自家製デザートを一から仕込む負担や日持ちリスクを抱えることなく、",
            "お店の収益向上とお客様満足度の両立を支える3つのポイントです。",
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

        {/* 実店舗での提供例（写真付きビジュアルギャラリー） */}
        <div className="mt-14 rounded-3xl bg-white p-6 shadow-sm sm:p-10">
          <div>
            <p className="text-brand text-xs font-bold tracking-wide">
              業態別のメニュー活用イメージ
            </p>
            <h3 className="text-ink mt-1 text-2xl font-bold tracking-tight">
              直営店（福岡・薬院）での提供例
            </h3>
            <p className="text-ink-light mt-2 text-sm leading-relaxed">
              小鉢への盛り付けから、ドリンクフロート、焼きドーナツ・ワッフルへの添え盛りまで幅広くアレンジいただけます。
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {servingExamples.map((item) => (
              <div
                key={item.name}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-[#fdfbf7] p-3 transition-all hover:shadow-md sm:p-4"
              >
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
                  <span className="text-brand block text-[11px] font-bold">{item.scene}</span>
                  <h4 className="text-ink mt-0.5 text-sm font-bold sm:text-base">{item.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <MidCta message="まずは6個の無料サンプルで、お店のお料理・お菓子との相性をお確かめください。" />
      </div>
    </section>
  );
}
