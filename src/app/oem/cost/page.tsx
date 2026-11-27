import OemPillar, { pillarCard, pillarHeading, pillarMetadata } from "../components/OemPillar";

const info = {
  path: "/oem/cost",
  label: "アイスOEMの費用と最小ロット",
  title: "ヴィーガンアイスOEMの費用・最小ロット・原価目安まとめ（開発費0円〜） | SoyStories",
  description:
    "ヴィーガンアイスの小ロットOEMを、開発費・最小ロット・1食あたりの原価で比較します。定番フレーバーのロゴ入りカップは開発費0円、1味60個から。オリジナルの味は100mlカップまたは2Lバルクで製造します。",
};

export const metadata = pillarMetadata(info);

const sections = [
  ["pricing", "プラン別の費用と最小ロット"],
  ["estimate", "1食あたりの原価と別途費用"],
  ["timeline", "サンプルから初回納品まで"],
] as const;

const plans = [
  [
    "プラン① 定番11種＋お店ロゴの天面丸シール（φ72mm）",
    "0円",
    "100mlカップ1味60個〜（税別286円／個）",
  ],
  [
    "プラン② オリジナルの味を開発",
    "税別30,000円＋試作実費",
    "100mlカップ1味60個〜（税別286円／個）、または2Lバルク1味6L（3本）〜（2L税別4,000円）",
  ],
  ["定番卸 業務用2Lバルク", "0円", "最小4L（2L×2本）〜（2L税別4,000円／税込4,320円）"],
];

const faq = [
  {
    question: "開発費0円でロゴ入りアイスを作れますか？",
    answer:
      "定番11種から味を選び、天面にお店のロゴを入れた正円φ72mmのシールを貼るプランは開発費0円です。100mlカップを1味60個から（税別286円・税込目安309円／個）承ります。",
  },
  {
    question: "オリジナルのヴィーガンアイスの開発費とロットは？",
    answer:
      "初期試作開発費は税別30,000円（＋試作実費）です。量産は100mlカップ1味60個、または2Lバルク1味6L（3本）から承ります。",
  },
  {
    question: "定番卸の2Lバルクは1人前いくらですか？",
    answer:
      "2Lバルクは1本税別4,000円（税込4,320円）です。1本を30〜40人前に分けると、商品代のみで1人前約108〜144円（税込）が目安です。送料やトッピング代は別途ご計算ください。",
  },
  {
    question: "開発費と商品代以外にどんな費用がかかりますか？",
    answer:
      "冷凍便の送料、カップの天面シールの印刷費、オリジナル開発での試作実費をご確認ください。送料はお届け先や荷物のサイズによって変わります。",
  },
  {
    question: "定番バルク卸に定期発注の条件はありますか？",
    answer:
      "定期発注の条件はありません。最小4L（2L×2本）から発注でき、請求書払いは納品月の月末締め・翌月末払いです。",
  },
];

const flow = [
  "無料サンプルを申し込む。原則としてお申し込みの翌日に発送します。",
  "味、容器、数量、お届け先、希望納期を相談する。",
  "オリジナル開発の場合は試作品で味と食感を確認する。",
  "確定した仕様と数量で製造する。",
  "福岡市の工房からヤマト冷凍便で納品する。",
];

export default function CostOemPage() {
  return (
    <OemPillar
      info={info}
      sections={sections}
      faq={faq}
      secondary={{ href: "/#contact-form", label: "無料サンプルを申し込む" }}
      ctaText="ご希望のプラン、容器、数量、お届け先をお知らせください。送料などを含めた費用をお見積もりします。"
    >
      <section id="pricing" className={pillarCard}>
        <h2 className={pillarHeading}>アイスOEM・定番卸の費用と最小ロット</h2>
        <table className="mt-4 w-full table-fixed text-left text-xs leading-relaxed sm:text-sm">
          <caption className="pb-3 text-left">
            定番フレーバーで始めるOEM、オリジナル開発、業務用卸の比較
          </caption>
          <thead className="bg-[#f7f3ec]">
            <tr>
              <th scope="col" className="w-[38%] p-2 sm:p-3">
                プラン
              </th>
              <th scope="col" className="p-2 sm:p-3">
                初期開発費
              </th>
              <th scope="col" className="p-2 sm:p-3">
                最小ロット
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {plans.map(([name, fee, lot]) => (
              <tr key={name} className="align-top">
                <th scope="row" className="p-2 sm:p-3">
                  {name}
                </th>
                <td className="p-2 sm:p-3">{fee}</td>
                <td className="p-2 sm:p-3">{lot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="estimate" className={pillarCard}>
        <h2 className={pillarHeading}>定番2Lバルクの原価目安と初回費用</h2>
        <p className="mt-3 leading-relaxed">
          定番卸の2Lバルクは1本税別4,000円（税込4,320円）です。1本で目安30〜40人前を取る場合、商品代のみで1人前約108〜144円（税込）が目安です。最小4L（2L×2本）の商品代は税別8,000円（税込8,640円）です。送料は別途、定期発注の条件はなく、請求書払いは納品月の月末締め・翌月末払いです。
        </p>
        <p className="mt-3 leading-relaxed">
          OEMの初回総額を試算する際は、開発費と量産品の商品代に、冷凍便送料、天面シールの印刷費、オリジナル開発の試作実費（原材料・梱包資材・試作便送料）を加えます。カップの天面シールは印刷したものをご支給ください。
        </p>
      </section>

      <section id="timeline" className={pillarCard}>
        <h2 className={pillarHeading}>無料サンプルから初回納品まで</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 leading-relaxed">
          {flow.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </OemPillar>
  );
}
