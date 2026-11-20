import { SectionHeader } from "@/app/dessert/components/ui";

const TIMELINE_STEPS = [
  {
    week: "第1週",
    duration: "目安：3〜5日",
    title: "事前ヒアリング・3つの方向性ご提案",
    description:
      "フォームから使いたい素材や目指す味わいを伺い、過去の知見と製法データをもとに「3つの味の方向性・アレンジ案」をご提案します。方向性を1つに絞ってから試作お申し込み・素材発送へ進みます。",
  },
  {
    week: "第2週",
    duration: "素材到着から 7〜10営業日",
    title: "初回ご試作（2パターン×各3個お届け）",
    description:
      "絞った方向性の中で、バランスを変えた2種類（計6個）を60サイズ冷凍便でお届けします。食べ比べていただくことで仕上がりのイメージが掴みやすく、スムーズにお選びいただけます。",
  },
  {
    week: "第3週",
    duration: "目安：5〜7日",
    title: "仕様確定・表示ご確認・シールご手配",
    description:
      "味が決まりましたら、法定表示内容のご確認とお取引合意・ご注文へ進みます。カップの場合はテンプレートを使って天面シールをネット印刷等でご手配いただきます（2Lバルクの場合はシール不要です）。",
  },
  {
    week: "第4週",
    duration: "素材・シール到着から 7〜10営業日",
    title: "専用工房での本製造・冷凍便でお届け",
    description:
      "卵・乳・小麦を持ち込まない専用工房で丁寧に仕込み、全国へクール冷凍便でお届けします。2回目以降は専用ページから定番フレーバーと合わせていつでも追加ご注文いただけます。",
  },
];

/**
 * 最短約1か月でお手元に届く4週間スケジュールセクション
 */
export default function OemTimelineSection() {
  return (
    <section id="timeline" className="bg-[#fafaf8] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="お届けまでの流れ"
          lines={["最短約1か月で、", "お店のオリジナルアイスがお手元に。"]}
          lead={[
            "印刷カップの長い納期を待たず「無地カップ＋天面シール（または業務用バルク）」を採用し、",
            "試作前に味の方向性を一緒に整理することで、旬の食材や季節の企画にも間に合うスピードを実現しています。",
          ]}
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TIMELINE_STEPS.map((item, idx) => (
            <div
              key={item.week}
              className="relative flex flex-col rounded-3xl border border-gray-200/80 bg-white p-6 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="bg-brand rounded-full px-3 py-1 text-xs font-bold text-white">
                  {item.week}
                </span>
                <span className="text-ink-muted text-xs font-medium">STEP {idx + 1}</span>
              </div>
              <h3 className="text-ink mt-4 text-base leading-snug font-bold">{item.title}</h3>
              <p className="text-brand mt-1 text-xs font-semibold">{item.duration}</p>
              <p className="text-ink-light mt-3 flex-1 text-[13px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* 2回戦目・品質保証の穏やかな補足 */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
          <div className="grid grid-cols-1 gap-4 text-[13.5px] leading-relaxed md:grid-cols-2">
            <div>
              <p className="text-ink font-bold">味の調整（2回戦目）を行う場合について</p>
              <p className="text-ink-light mt-1">
                ご試食後は専用フォームの5項目評価で簡単にご感想をお送りいただけます。大幅な方向変更も含め、2回戦目まで基本試作費内で対応いたします（その際は＋約2週間が目安となります。3回戦目以降は1回税別5,000円＋材料・送料実費）。
              </p>
            </div>
            <div>
              <p className="text-ink font-bold">安心の試作保証とスケジュール目安</p>
              <p className="text-ink-light mt-1">
                万一、事前の合意方向性からの著しい逸脱や製造上の不良があった場合は、試作回数を消費せず当社負担にて無償でお作り直しいたします。※最短約1か月は1回目のご試作で決定し手配が順調に進んだ場合の目安です（夏季繁忙期等は製造枠順にご案内いたします）。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
