import OemPillar, { pillarCard, pillarHeading, pillarMetadata } from "../components/OemPillar";

const info = {
  path: "/oem/regional",
  label: "ご当地食材・農産物のアイスOEM",
  title:
    "ご当地食材・農産物の植物性アイスOEM（小ロット60個〜）｜道の駅・ホテル・自治体向け | SoyStories",
  description:
    "地域の果実や茶葉、規格外の農産物を使い、100％植物性のクラフトジェラートを企画・製造します。乳・卵・小麦不使用で、100mlカップは1味60個から。福岡市の専用工房から全国へ冷凍配送します。",
};

export const metadata = pillarMetadata(info);

const sections = [
  {
    id: "ingredients",
    heading: "果実・茶葉・酒粕を使ったご当地アイスの開発",
    paragraphs: [
      "地元の果実、茶葉、酒粕、焙煎した穀物を使って、素材の風味を活かしたアイスを試作します。形や大きさが出荷規格に合わない農産物も、受け入れ条件を満たす加工原料としてご相談いただけます。",
      "道の駅や観光農園では地域の素材を紹介するカップ商品に、ホテルでは食後のデザートに、自治体では特産品の企画に活用できます。植物性で乳・卵・小麦を使わない配合は、国内観光客に加え、ヴィーガンやグルテンフリーの選択肢を探す訪日旅行者向けのメニューにも活用できます。",
    ],
  },
  {
    id: "intake",
    heading: "委託加工でお預かりする原料の条件",
    paragraphs: [
      "原料と加工ラインに乳・卵・小麦を含まないことを確認できる原材料規格書が必要です。ピューレ、粉末、ペーストなど、配合しやすい加工形態を推奨します。原料の形態、数量、調達時期をお知らせください。",
    ],
  },
  {
    id: "production",
    heading: "試作開発費と最小製造ロット",
    paragraphs: [
      "初期試作開発費は税別30,000円（＋試作実費）です。試作品で味や食感を確認し、仕様を決めてから量産に進みます。試作実費や送料は見積もりでご確認ください。",
      "物販用の100mlカップは1味60個から、店内提供向けの2Lバルクは1味6L（3本）からです。カップには特産品名や施設ロゴを載せた正円φ72mmの天面シールをご支給いただけます。",
    ],
  },
];

const faq = [
  {
    question: "道の駅や観光農園で販売するご当地アイスは何個から作れますか？",
    answer: "100mlカップは1味60個から、2Lバルクは1味6L（3本）から製造します。",
  },
  {
    question: "規格外の果実をアイスに加工できますか？",
    answer:
      "乳・卵・小麦に関する受け入れ条件を満たす原料でご相談いただけます。果実はピューレなどの加工形態を推奨します。",
  },
  {
    question: "原料を支給する前に何を用意しますか？",
    answer:
      "原料と加工ラインに乳・卵・小麦を含まないことを確認できる原材料規格書をご用意ください。粉末やペーストも受け入れのご相談が可能です。",
  },
  {
    question: "オリジナルの試作開発費はいくらですか？",
    answer:
      "初期試作開発費は税別30,000円（＋試作実費）です。試作品で味と食感を確認し、量産の仕様を決めます。試作実費や送料は見積もりでご確認ください。",
  },
  {
    question: "カップに地域名やロゴを入れられますか？",
    answer:
      "はい。正円φ72mmの天面シールに地域名、商品名、施設ロゴなどを入れられます。印刷したシールをご支給ください。",
  },
];

export default function RegionalOemPage() {
  return (
    <OemPillar
      info={info}
      sections={sections.map(({ id, heading }) => [id, heading])}
      faq={faq}
      secondary={{ href: "/oem/guide", label: "原料量・シール仕様のガイドを見る" }}
      ctaText="原料の種類と加工形態、販売先、ご希望のロットと納期をお知らせください。"
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
