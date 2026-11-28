import OemPillar, { pillarCard, pillarHeading, pillarMetadata } from "../components/OemPillar";

const info = {
  path: "/oem/quality",
  label: "アイスOEMの品質管理・食品表示・冷凍配送",
  title: "専用工房の原料管理・側面法定表示・冷凍配送ガイド｜アイスOEM | SoyStories",
  description:
    "SoyStoriesのアイスOEMにおける専用工房の原料管理、100mlカップの側面食品表示と天面シール仕様、−18℃以下の冷凍保管、ヤマト冷凍便の地域別送料、小ロット製造の納期と支払い条件をご案内します。",
};

export const metadata = pillarMetadata(info);

const sections = [
  ["ingredients", "専用工房と原料管理"],
  ["label", "側面ラベルと天面シール"],
  ["storage", "冷凍保管と賞味期限表示"],
  ["shipping", "ヤマト冷凍便の送料"],
  ["lead-time", "納期と請求条件"],
] as const;

const shippingRates = [
  ["九州・中国", "1,215", "1,710", "2,040"],
  ["四国・関西", "1,325", "1,820", "2,150"],
  ["中部・北陸", "1,435", "1,930", "2,260"],
  ["関東・信越", "1,655", "2,150", "2,480"],
  ["東北", "1,875", "2,370", "2,700"],
  ["北海道・沖縄", "2,205", "2,810", "3,250"],
];

const faq = [
  {
    question: "支給原料の受け入れには何が必要ですか？",
    answer:
      "素材そのものと加工ラインに卵・乳・小麦を含まないことを、原材料規格書等で事前に確認できる素材のみお預かりします。",
  },
  {
    question: "100mlカップの食品表示はどこに貼り、誰が用意しますか？",
    answer:
      "カップ側面の法定一括表示ラベルはSoyStoriesが作成・貼付します。OEMプラン1では、お客様が天面用のφ72mm丸シールをご支給ください。",
  },
  {
    question: "冷凍保管の温度と賞味期限表示の扱いは？",
    answer:
      "種類別は「氷菓」で、−18℃以下で冷凍保存します。食品表示基準上、賞味期限の表示義務はありません。",
  },
  {
    question: "冷凍便の送料はいくらですか？",
    answer:
      "福岡発のヤマト冷凍便の契約運賃は、配送先と60・100・120の荷物サイズで変わります。例えば関東・信越は順に税込1,655円、2,150円、2,480円です。",
  },
  {
    question: "小ロットOEMの初回納品にはどのくらいかかりますか？",
    answer:
      "ご相談への初回提案は通常2〜3営業日以内で、ご相談から初回量産のお届けまでは最短約1か月です。",
  },
];

export default function QualityPage() {
  return (
    <OemPillar
      info={info}
      sections={sections}
      faq={faq}
      secondary={{ href: "/oem/compare", label: "業務用ヴィーガンアイスの選び方を見る" }}
      ctaText="支給予定の原料、希望の納品時期、カップやバルクの希望をお知らせください。"
    >
      <section id="ingredients" className={pillarCard}>
        <h2 className={pillarHeading}>専用工房と支給原料の受け入れ条件</h2>
        <p className="mt-4 leading-relaxed">
          卵・乳・小麦・白砂糖を持ち込まない専用工房で製造しています。特定原材料等のうち工房に持ち込みがあるのはナッツ類のみで、ナッツ使用商品には「ナッツ使用」と明記します。
        </p>
        <p className="mt-3 leading-relaxed">{faq[0].answer}</p>
      </section>

      <section id="label" className={pillarCard}>
        <h2 className={pillarHeading}>100mlカップの側面食品表示と天面シール</h2>
        <dl className="mt-4 space-y-4">
          <div>
            <dt className="font-bold">カップ側面の法定一括表示ラベル</dt>
            <dd className="mt-1 leading-relaxed">SoyStoriesが作成し、カップ側面に貼付します。</dd>
          </div>
          <div>
            <dt className="font-bold">天面のφ72mm丸シール</dt>
            <dd className="mt-1 leading-relaxed">
              OEMプラン1ではお客様が印刷してご支給ください。仕上がりは正円φ72mm、塗り足し込みの直径は78mm、文字・ロゴの安全圏はφ66mm以内です。耐水フィルム系の素材にラミネート加工を施し、冷凍用強粘着の糊を使う仕様を推奨します。
            </dd>
          </div>
        </dl>
      </section>

      <section id="storage" className={pillarCard}>
        <h2 className={pillarHeading}>−18℃以下で冷凍保管</h2>
        <p className="mt-4 leading-relaxed">{faq[2].answer}</p>
      </section>

      <section id="shipping" className={pillarCard}>
        <h2 className={pillarHeading}>ヴィーガンアイスの冷凍配送と送料</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <caption className="mb-2 text-left">福岡発 ヤマト冷凍便の契約運賃（税込）</caption>
            <thead className="bg-[#f7f3ec]">
              <tr>
                <th scope="col" className="p-3">
                  配送地域
                </th>
                {["60", "100", "120"].map((size) => (
                  <th key={size} scope="col" className="p-3 text-right">
                    {size}サイズ
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {shippingRates.map(([region, ...rates]) => (
                <tr key={region}>
                  <th scope="row" className="p-3">
                    {region}
                  </th>
                  {rates.map((rate) => (
                    <td key={rate} className="p-3 text-right tabular-nums">
                      {rate}円
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="lead-time" className={pillarCard}>
        <h2 className={pillarHeading}>小ロット製造の納期と卸の請求条件</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed">
          <li>通常卸は5営業日前後でヤマト冷凍便にて発送します。</li>
          <li>OEMの初回提案は通常2〜3営業日以内、初回量産のお届けはご相談から最短約1か月です。</li>
          <li>無料サンプルは原則、お申し込みの翌日に発送します。</li>
          <li>
            業務用2Lバルクは税別4,000円（税込4,320円）、最小4L〜。定期発注の縛りはありません。
          </li>
          <li>業務用卸のお支払いは納品月末締め・翌月末払い（銀行振込）です。</li>
        </ul>
      </section>
    </OemPillar>
  );
}
