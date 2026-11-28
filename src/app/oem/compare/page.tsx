import OemPillar, { pillarCard, pillarHeading, pillarMetadata } from "../components/OemPillar";

const info = {
  path: "/oem/compare",
  label: "植物性アイスと乳製品アイスの違い・業務用選定",
  title: "植物性（ヴィーガン）アイスと乳製品アイスの違い・業務用選定ガイド | SoyStories",
  description:
    "乳脂肪ゼロの軽い後味、国産米粉の滑らかさ、甘酒や白みそのコク、専用工房での原料管理を比較の軸に、飲食店・ホテル・カフェ・小売で使う業務用ヴィーガンアイスの選び方を紹介します。",
};

export const metadata = pillarMetadata(info);

const sections = [
  ["differences", "乳製品アイスとの違い"],
  ["selection", "業態別の選び方"],
  ["orders", "価格と最小ロット"],
] as const;

const selection = [
  ["飲食店", "皿盛りのデザート", "個包装での提供", "コースや店の食材を使った専用の味"],
  [
    "ホテル・旅館",
    "ビュッフェやレストラン",
    "客室や売店での個包装提供",
    "宿の名前や地域の食材を生かした専用の味",
  ],
  [
    "カフェ",
    "ドリンクや焼き菓子へのトッピング",
    "店頭での個包装販売",
    "自店のコーヒーや茶を使った専用の味",
  ],
  [
    "小売",
    "店頭で取り分けて提供",
    "冷凍売場での個包装販売",
    "自社ブランドや地域食材を生かした専用の味",
  ],
];

const faq = [
  {
    question: "SoyStoriesのヴィーガンアイスと乳製品アイスは、後味がどう違いますか？",
    answer: "SoyStoriesの植物性アイスは乳脂肪ゼロで、食後に油分が残らない軽い後味が特長です。",
  },
  {
    question: "国産米粉を使った植物性ジェラートの食感は？",
    answer:
      "国産米粉を使った独自製法で、氷結晶のシャリシャリ感がない滑らかな舌触りに仕上げています。業務用冷凍庫を開閉して商品を出し入れしても、その滑らかさが続きます。",
  },
  {
    question: "専用工房ではどのように原料を管理していますか？",
    answer:
      "卵・乳・小麦・白砂糖を持ち込まない専用工房で製造しています。特定原材料等のうち工房に持ち込みがあるのはナッツ類のみで、ナッツ使用商品には「ナッツ使用」と明記します。",
  },
  {
    question: "業務用バルクと100mlカップはそれぞれ何個から注文できますか？",
    answer:
      "通常卸の2Lバルクは合計4Lから注文できます。既存11種から選ぶ100mlカップOEMプラン1は、1味60個からで120個を推奨しています。",
  },
  {
    question: "オリジナルの味はカップとバルクの両方で注文できますか？",
    answer:
      "OEMプラン2で開発した味は100mlカップと2Lバルクの両方で注文できます。初期試作開発費は税別30,000円＋試作実費です。",
  },
];

export default function ComparePage() {
  return (
    <OemPillar
      info={info}
      sections={sections}
      faq={faq}
      secondary={{ href: "/oem/quality", label: "品質管理・食品表示・冷凍配送を確認する" }}
      ctaText="提供方法、予定数量、オリジナルの味づくりのご希望をお知らせください。"
    >
      <section id="differences" className={pillarCard}>
        <h2 className={pillarHeading}>植物性アイスと乳製品アイスを比較する4つの視点</h2>
        <p className="mt-4 leading-relaxed">
          乳製品を使ったアイスと比較する際は、後味、冷凍庫から出し入れするときの食感、味のコク、製造工房での原料管理を確認すると、提供するメニューに合う商品を選びやすくなります。
        </p>
        <dl className="mt-4 space-y-4">
          <div>
            <dt className="font-bold">乳脂肪ゼロの軽い後味</dt>
            <dd className="mt-1 leading-relaxed">{faq[0].answer}</dd>
          </div>
          <div>
            <dt className="font-bold">国産米粉の独自製法による滑らかさ</dt>
            <dd className="mt-1 leading-relaxed">{faq[1].answer}</dd>
          </div>
          <div>
            <dt className="font-bold">甘酒・白みそなどの発酵素材のコク</dt>
            <dd className="mt-1 leading-relaxed">
              甘酒や白みそなどの発酵素材が、深いうまみとコクを生みます。
            </dd>
          </div>
          <div>
            <dt className="font-bold">専用工房での製造と福岡の直営店での提供実績</dt>
            <dd className="mt-1 leading-relaxed">
              {faq[2].answer}
              福岡の直営店でも提供しており、海外のお客様からも高い評価をいただいています。
            </dd>
          </div>
        </dl>
      </section>

      <section id="selection" className={pillarCard}>
        <h2 className={pillarHeading}>業務用ヴィーガンアイスの選び方</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <caption className="mb-2 text-left">業態ごとの提供・販売方法の例</caption>
            <thead className="bg-[#f7f3ec]">
              <tr>
                {["業態", "2Lバルク（4L〜）", "100mlカップ（1味60個〜）", "オリジナル開発"].map(
                  (heading) => (
                    <th key={heading} scope="col" className="p-3">
                      {heading}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {selection.map(([business, bulk, cup, custom]) => (
                <tr key={business} className="align-top">
                  <th scope="row" className="p-3 whitespace-nowrap">
                    {business}
                  </th>
                  <td className="p-3">{bulk}</td>
                  <td className="p-3">{cup}</td>
                  <td className="p-3">{custom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="orders" className={pillarCard}>
        <h2 className={pillarHeading}>卸・OEMの価格と最小ロット</h2>
        <dl className="mt-4 space-y-4">
          <div>
            <dt className="font-bold">通常卸の2Lバルク</dt>
            <dd className="mt-1 leading-relaxed">
              2Lあたり税別4,000円（税込4,320円）、最小4L〜。定期発注の縛りはありません。
            </dd>
          </div>
          <div>
            <dt className="font-bold">OEMプラン1 ／ 既存11種と天面丸シール</dt>
            <dd className="mt-1 leading-relaxed">
              開発費0円。100mlカップ1個あたり税別286円（税込目安309円）、1味60個〜（120個推奨）。天面のφ72mm丸シールはお客様にご支給いただきます。
            </dd>
          </div>
          <div>
            <dt className="font-bold">OEMプラン2 ／ オリジナル開発</dt>
            <dd className="mt-1 leading-relaxed">
              初期試作開発費は税別30,000円＋試作実費。試作は1回1.5Lで、A・B各3個の計6個をお送りします。2回戦目まで追加開発費は0円です。量産時の最小ロットは1味あたり100mlカップ60個（120個推奨）、2Lバルクは3本で6Lです。
            </dd>
          </div>
        </dl>
      </section>
    </OemPillar>
  );
}
