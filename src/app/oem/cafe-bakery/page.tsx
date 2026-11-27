import OemPillar, { pillarCard, pillarHeading, pillarMetadata } from "../components/OemPillar";

const info = {
  path: "/oem/cafe-bakery",
  label: "カフェ・焼き菓子店向けアイスOEM",
  title: "カフェ・焼き菓子店向け植物性アイスOEM・業務用卸（開発費0円〜） | SoyStories",
  description:
    "カフェ、ベーカリー、ドーナツ店の自家製メニューを引き立てる植物性アイスを全国へ。業務用2Lバルクの卸、1味60個からのロゴ入りカップ、自店のコーヒーや果実を使ったオリジナル開発に対応します。",
};

export const metadata = pillarMetadata(info);

const sections = [
  ["menu", "ワッフルや焼き菓子を引き立てる黒子ベース"],
  ["retail", "店頭販売用のお店ロゴ入り100mlカップ"],
  ["development", "自店のコーヒー・紅茶・果実を使う味開発"],
] as const;

const faq = [
  {
    question: "ドーナツや焼き菓子に添えるアイスは少量で仕入れられますか？",
    answer:
      "定番の2Lバルクは最小4L（2L×2本）から仕入れられます。1本税別4,000円（税込4,320円）で、30〜40人前が目安です。",
  },
  {
    question: "ワッフルやアフォガートと一緒に試食できますか？",
    answer:
      "無料サンプルを原則としてお申し込みの翌日に発送します。実際のワッフルやエスプレッソに合わせて、香りや甘さのバランスをご確認いただけます。",
  },
  {
    question: "店名入りのカップを小ロットで販売できますか？",
    answer:
      "定番11種を使うロゴ入り100mlカップは初期開発費0円で、1味60個から（120個推奨）です。天面丸シール（φ72mm）をご支給ください。",
  },
  {
    question: "自店のコーヒー豆や紅茶でオリジナルの味を作れますか？",
    answer:
      "コーヒー、紅茶、果実を使った開発をご相談いただけます。初期試作開発費は税別30,000円＋試作実費です。",
  },
  {
    question: "オリジナルの味を店内提供用のバルクで発注できますか？",
    answer: "2Lバルクは1本税別4,000円（税込4,320円）で、1味6L（3本）から製造します。",
  },
];

export default function CafeBakeryOemPage() {
  return (
    <OemPillar
      info={info}
      sections={sections}
      faq={faq}
      secondary={{ href: "/#contact-form", label: "無料サンプルを申し込む" }}
      ctaText="合わせたい焼き菓子やドリンク、店頭販売の予定、自店の原料を使う場合はその種類をお知らせください。"
    >
      <section id="menu" className={pillarCard}>
        <h2 className={pillarHeading}>ワッフルや焼き菓子を引き立てる黒子ベース</h2>
        <p className="mt-3 leading-relaxed">
          乳脂肪ゼロですっきりした後味に仕上げ、甘酒や白みそなどの発酵素材でコクを出しています。国産米粉の独自製法で、営業中に開閉する業務用冷凍庫でも滑らかさが続きやすい設計です。
        </p>
        <p className="mt-3 leading-relaxed">
          焼きたてのワッフルやドーナツに添えれば生地の香りが立ち、パフェでは果実や焼き菓子を引き立てます。アフォガートでは、エスプレッソの香りや苦味を生かす組み合わせを選べます。
        </p>
        <p className="mt-3 leading-relaxed">
          定番卸の2Lバルクは1本税別4,000円（税込4,320円）、最小4L（2L×2本）から。1本30〜40人前で、1人前の商品代は約108〜144円（税込）です。定期発注の条件はなく、請求書払いは納品月の月末締め・翌月末払いです。
        </p>
      </section>

      <section id="retail" className={pillarCard}>
        <h2 className={pillarHeading}>店頭販売用のお店ロゴ入り100mlカップ</h2>
        <p className="mt-3 leading-relaxed">
          定番11種から選び、お店のロゴを入れた天面丸シール（φ72mm）を使うプランは初期開発費0円。100mlカップは税別286円（税込目安309円）で、1味60個から（120個推奨）製造できます。焼き菓子と一緒に選べる冷凍の持ち帰り商品として始められます。
        </p>
      </section>

      <section id="development" className={pillarCard}>
        <h2 className={pillarHeading}>自店のコーヒー・紅茶・果実を使う味開発</h2>
        <p className="mt-3 leading-relaxed">
          自店のコーヒーや紅茶、季節の果実を使ったオリジナル味は、初期試作開発費が税別30,000円＋試作実費です。量産は100mlカップが税別286円で1味60個から、2Lバルクが1本税別4,000円（税込4,320円）で1味6L（3本）からです。店内メニューと持ち帰り商品の用途に合わせて容器を選べます。
        </p>
      </section>
    </OemPillar>
  );
}
