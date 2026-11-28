import OemPillar, { pillarCard, pillarHeading, pillarMetadata } from "../components/OemPillar";

const info = {
  path: "/oem/gift-ec",
  label: "EC・ギフト・ウェディング向けアイスOEM",
  title: "EC・ギフト・ウェディング向け植物性アイスOEM（60個から製造委託） | SoyStories",
  description:
    "ヴィーガンアイスのEC販売、冷凍ギフト、結婚式のデザート向けに、植物性の100mlカップを1味60個から全国向けに製造します。ブランドの天面シールをご支給いただき、側面の食品表示はSoyStoriesが作成・貼付します。",
};

export const metadata = pillarMetadata(info);

const sections = [
  ["plans", "EC・ギフト・結婚式の小ロット製造"],
  ["label", "天面シールの支給と側面の法定表示"],
  ["storage", "家族向けギフトの原材料と冷凍在庫"],
] as const;

const faq = [
  {
    question: "ヴィーガンアイスのギフトを何個から製造委託できますか？",
    answer:
      "100mlカップは1味60個からです。定番11種から選ぶロゴ入りカップは初期開発費0円、税別286円（税込目安309円）で、1味120個を推奨しています。",
  },
  {
    question: "カップ側面の食品表示は誰が用意しますか？",
    answer:
      "SoyStoriesが名称（氷菓）、原材料名、栄養成分表示、製造所などを記載した側面ラベルを作成・貼付します。天面は印刷済みのφ72mm丸シールをご支給ください。",
  },
  {
    question: "子どものいる家庭向けに原材料を確認できますか？",
    answer:
      "乳・卵・小麦を持ち込まない専用工房で製造しています。贈り先の食事条件に合わせ、詰め合わせる味ごとに原材料をご確認いただけます。",
  },
  {
    question: "冷凍ギフト用の氷菓には賞味期限表示がありますか？",
    answer:
      "食品表示基準により、氷菓の賞味期限表示は省略できます。商品に表示された保存方法に従って冷凍保管してください。",
  },
  {
    question: "結婚式用にオリジナルの味を開発できますか？",
    answer:
      "初期試作開発費は税別30,000円＋試作実費です。100mlカップは税別286円で1味60個から製造します。ご相談時に式の日程と必要数をお知らせください。",
  },
];

export default function GiftEcOemPage() {
  return (
    <OemPillar
      info={info}
      sections={sections}
      faq={faq}
      secondary={{ href: "/#contact-form", label: "無料サンプルを申し込む" }}
      ctaText="ECの販売開始日や結婚式の日程、1セットあたりの味数とカップ数、希望納品数をお知らせください。"
    >
      <section id="plans" className={pillarCard}>
        <h2 className={pillarHeading}>EC・ギフト・結婚式の小ロット製造</h2>
        <div className="mt-5">
          <h3 className="text-brand font-bold">ECのテスト販売や季節限定ギフト</h3>
          <p className="mt-2 leading-relaxed">
            定番11種から選ぶロゴ入り100mlカップは、初期開発費0円、税別286円（税込目安309円）で1味60個から（120個推奨）。複数の味を詰め合わせる場合も、味ごとに必要な数量を見積もれます。
          </p>
        </div>
        <div className="mt-5">
          <h3 className="text-brand font-bold">ウェディングのデザートやブランド独自の味</h3>
          <p className="mt-2 leading-relaxed">
            結婚式の個食デザートには、式のデザインを使った天面シールでカップを用意できます。独自の味を製造委託する場合、初期試作開発費は税別30,000円＋試作実費。100mlカップは税別286円で1味60個からです。
          </p>
        </div>
      </section>

      <section id="label" className={pillarCard}>
        <h2 className={pillarHeading}>天面シールの支給と側面の法定表示</h2>
        <p className="mt-3 leading-relaxed">
          パッケージのラベルは、印刷済みの天面丸シール（φ72mm）をご支給ください。SoyStoriesが名称（氷菓）、原材料名、栄養成分表示、製造所などを記載した側面の法定表示ラベルを作成し、カップに貼付します。
        </p>
      </section>

      <section id="storage" className={pillarCard}>
        <h2 className={pillarHeading}>家族向けギフトの原材料と冷凍在庫</h2>
        <p className="mt-3 leading-relaxed">
          乳・卵・小麦を持ち込まない専用工房で製造しています。お子さまのいるご家庭へのギフトでは、味ごとの原材料を確認して詰め合わせを選べます。
        </p>
        <p className="mt-3 leading-relaxed">
          食品表示法に基づく食品表示基準では、氷菓の賞味期限表示は省略できます。表示された方法に従って冷凍保管することで、期限切れによる廃棄が出にくく、季節のギフトや婚礼の予定に合わせて在庫を管理できます。
        </p>
      </section>
    </OemPillar>
  );
}
