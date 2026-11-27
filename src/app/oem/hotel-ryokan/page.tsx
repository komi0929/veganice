import OemPillar, { pillarCard, pillarHeading, pillarMetadata } from "../components/OemPillar";

const info = {
  path: "/oem/hotel-ryokan",
  label: "ホテル・旅館向けアイスOEM",
  title: "ホテル・旅館向けヴィーガンアイスOEM・部屋出しカップ製造（60個〜） | SoyStories",
  description:
    "ホテル・旅館の会席料理には業務用2Lバルク、部屋出しや売店には100mlのヴィーガンアイス。宿のロゴ入りカップを初期開発費0円、1味60個から製造し、全国に冷凍便でお届けします。",
};

export const metadata = pillarMetadata(info);

const sections = [
  ["service", "ホテル・旅館での3つの使い方"],
  ["inbound", "インバウンド対応に使える原材料情報"],
] as const;

const faq = [
  {
    question: "会席用の2Lバルクは何本から仕入れられますか？",
    answer:
      "定番卸は最小4L（2L×2本）からです。定期発注の条件はありません。請求書払いは納品月の月末締め・翌月末払いです。",
  },
  {
    question: "部屋出し用のカップは客室冷蔵庫で保管できますか？",
    answer:
      "要冷凍のため、客室で保管する場合は冷凍室をご使用ください。館内の冷凍庫に保管して提供時にお届けする運用も可能です。",
  },
  {
    question: "旅館のロゴ入りカップはいくつから作れますか？",
    answer:
      "定番11種から選ぶロゴ入り100mlカップは1味60個から（120個推奨）です。初期開発費は0円で、カップは税別286円（税込目安309円）です。",
  },
  {
    question: "海外からのお客様に原材料を案内できますか？",
    answer:
      "味ごとに原材料をご確認いただけます。アルコール由来の原材料については個別確認に対応します。大豆・ナッツを原材料に使わない果実味は4種です。",
  },
  {
    question: "料理との相性を確認するため試食できますか？",
    answer: "無料サンプルをご用意しています。原則としてお申し込みの翌日に発送します。",
  },
];

export default function HotelRyokanOemPage() {
  return (
    <OemPillar
      info={info}
      sections={sections}
      faq={faq}
      secondary={{ href: "/#contact-form", label: "無料サンプルを申し込む" }}
      ctaText="会席、客室、売店の用途と、提供予定数・納品希望日をお知らせください。インバウンドのお客様に案内したい原材料もご相談いただけます。"
    >
      <section id="service" className={pillarCard}>
        <h2 className={pillarHeading}>ホテル・旅館での3つの使い方</h2>
        <div className="mt-5">
          <h3 className="text-brand font-bold">会席・コース料理の水菓子</h3>
          <p className="mt-2 leading-relaxed">
            業務用の定番2Lバルクは1本税別4,000円（税込4,320円）。乳脂肪ゼロですっきりとした後味のため、会席やコース料理の締めくくりに使えます。1本30〜40人前で、商品代は1人前約108〜144円（税込）が目安です。
          </p>
        </div>
        <div className="mt-5">
          <h3 className="text-brand font-bold">部屋出し・客室で提供する100ml個食カップ</h3>
          <p className="mt-2 leading-relaxed">
            カットフルーツに代わる水菓子の予備として、個食カップを館内の冷凍庫に常備できます。部屋出しは提供時にお届けし、客室冷蔵庫に置く場合は冷凍室で保管します。
          </p>
        </div>
        <div className="mt-5">
          <h3 className="text-brand font-bold">売店・お土産用の宿ロゴ入りカップ</h3>
          <p className="mt-2 leading-relaxed">
            定番11種から味を選び、宿のロゴ入り天面丸シール（φ72mm）を使うOEMは初期開発費0円。100mlカップは税別286円（税込目安309円）で、1味60個から（120個推奨）製造できます。
          </p>
        </div>
      </section>

      <section id="inbound" className={pillarCard}>
        <h2 className={pillarHeading}>インバウンド対応に使える原材料情報</h2>
        <p className="mt-3 leading-relaxed">
          乳・卵・小麦を持ち込まない専用工房で製造しています。大豆・ナッツを原材料に使わない果実味が4種あり、アルコール由来の原材料もご希望の味ごとに個別確認に対応します。予約時に伺った食事条件と、提供する味の原材料を照合できます。
        </p>
      </section>
    </OemPillar>
  );
}
