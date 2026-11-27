import OemPillar, { pillarCard, pillarHeading, pillarMetadata } from "../components/OemPillar";

const info = {
  path: "/oem/allergen-free",
  label: "乳・卵・小麦不使用のアイスOEM",
  title: "乳・卵・小麦不使用アイスのOEM・業務用製造｜専用工房で小ロット60個から | SoyStories",
  description:
    "乳・卵・小麦不使用のヴィーガンアイスを、福岡市の植物性アイス専用工房で100mlカップ1味60個から製造し、全国へ冷凍配送します。工房で扱う原料と、業務用メニューに選べるフレーバーをご案内します。",
};

export const metadata = pillarMetadata(info);

const sections = [
  {
    id: "facility",
    heading: "福岡市の専用工房でのアレルゲン管理",
    paragraphs: [
      "工房には乳・卵・小麦・白砂糖を持ち込みません。同じ工房でナッツ類・大豆・ごま・果実を扱っており、微量の交差接触の可能性をお伝えしています。メニューや商品を企画する際は、フレーバーごとの原材料と工房で扱う原料の両方をご確認ください。",
    ],
  },
  {
    id: "flavors",
    heading: "大豆・ナッツを原材料に使わない果実系4種と定番のクリーミー系",
    paragraphs: [
      "果実系はベリーミックス、ジューシードラゴンフルーツ、さっぱりリンゴ、桃すぎた桃の4種です。いずれも配合に大豆・ナッツを使わず、同じ工房で製造します。",
      "定番のクリーミー系は、国産米粉をベースに甘酒や白味噌を使い、なめらかな食感に仕上げています。原材料はフレーバーによって異なります。",
    ],
  },
  {
    id: "uses",
    heading: "ホテル・カフェ・施設での業務用アイスの使い方",
    paragraphs: [
      "ホテル・旅館のコースやカフェのデザート、キッズメニュー、婚礼のデザートに。福祉施設や保育施設の行事、売店の物販・ギフト向けには、個食カップをご検討いただけます。店内提供向けにオリジナルの味を開発する場合は、2Lバルク3本（6L）から製造します。",
    ],
  },
];

const faq = [
  {
    question: "乳・卵・小麦不使用のアイスを製造委託できますか？",
    answer:
      "はい。乳・卵・小麦を持ち込まない福岡市の植物性アイス専用工房で製造します。100mlカップは1味60個から承ります。",
  },
  {
    question: "工房で扱う原料と交差接触の可能性は確認できますか？",
    answer:
      "同じ工房でナッツ類・大豆・ごま・果実を扱います。微量の交差接触の可能性と、商品ごとの原材料をお伝えします。",
  },
  {
    question: "大豆とナッツを配合に使わない味はありますか？",
    answer:
      "ベリーミックス、ジューシードラゴンフルーツ、さっぱりリンゴ、桃すぎた桃の4種があります。いずれも大豆・ナッツを扱う工房で製造します。",
  },
  {
    question: "カフェやホテルの店内提供用にバルクで発注できますか？",
    answer:
      "オリジナルの味は1味6L（2L容器3本）から製造します。提供方法と必要量をお知らせください。",
  },
  {
    question: "試食用の無料サンプルはありますか？",
    answer:
      "業務用卸トップから無料サンプルをお申し込みいただけます。原則として翌営業日に発送します。",
  },
];

export default function AllergenFreeOemPage() {
  return (
    <OemPillar
      info={info}
      sections={sections.map(({ id, heading }) => [id, heading])}
      faq={faq}
      secondary={{ href: "/#contact-form", label: "無料サンプルを申し込む" }}
      ctaText="ご希望のフレーバー、提供先、確認したい原料をお知らせください。無料サンプルは原則として翌営業日に発送します。"
    >
      {sections.map(({ id, heading, paragraphs }) => (
        <section key={id} id={id} className={pillarCard}>
          <h2 className={pillarHeading}>{heading}</h2>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-3 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </OemPillar>
  );
}
