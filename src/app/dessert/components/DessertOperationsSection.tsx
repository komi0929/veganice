import Image from "next/image";
import { TrendingUp, Sparkles, Clock } from "lucide-react";
import { MidCta, SectionHeader } from "./ui";

const businessBenefits = [
  {
    icon: TrendingUp,
    badge: "原価約100円・廃棄ゼロ",
    title: "温かい焼き菓子添えや食後の小鉢で、ロスを出さずに満足度と単価をプラス",
    description:
      "焼きたてのワッフルやタルトの横でとろりと絡む添えアイスや、定食・コースを締める小鉢デザートに。1皿（約50ml）原価は約100円（税別）で、生ケーキのような賞味期限ロスや毎日の仕込み時間に追われません。",
  },
  {
    icon: Sparkles,
    badge: "濃厚さとキレの両立",
    title: "「アレルギー対応用」ではなく、普段のお客様が毎回頼みたくなる看板品質",
    description:
      "お食事の印象を決めるのは最後の一口。生チョコのようなショコラやお濃茶仕立ての抹茶、完熟マンゴーなど、濃厚なのに舌に重たい膜を残さない味わいが、食制限の有無を問わずリピートを生みます。",
  },
  {
    icon: Clock,
    badge: "省スペース・食感キープ",
    title: "小型冷凍庫のすき間に収まる1L角型×4本〜。開け閉めしても氷に戻らない",
    description:
      "コールドテーブルやストッカーに無理なく収まる1L・2L角型容器（最小4L〜）。じっくり炊き上げた米粉ベースの密度により、ピークタイムの出し入れでも最後の一杯までねっとり滑らかな口どけが続きます。",
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
          eyebrow="現場での使いやすさ"
          lines={["毎日の仕込みに追われず、", "お皿の最後の一口で記憶に残るお店に。"]}
          lead={[
            "専用マシンや日持ちリスクを抱えることなく、",
            "冷凍庫のすき間4Lから「専門店のデザート」を常備できる3つの理由です。",
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
