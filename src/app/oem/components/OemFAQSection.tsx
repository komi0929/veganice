import { SectionHeader } from "@/app/dessert/components/ui";

const FAQ_ITEMS = [
  {
    q: "天面シールはどのように準備すればよいですか？",
    a: "お申し込み後、入稿用のベースデータ（Illustrator／Canva対応テンプレート）と、冷凍庫でも剥がれにくい推奨耐水紙（ユポ紙等）のネット印刷案内をお渡しします。お客様にて印刷・当社工房へお送りいただく形をとっており、そのご負担分としてカップ単価から税込15円をお値引きしています。底面の法定一括表示ラベルは当社で作成・貼付いたします。",
  },
  {
    q: "1つのオリジナルレシピで、カップと業務用バルクの両方を注文できますか？",
    a: "はい、可能です。たとえば店内イートインの食後デザートには「2L業務用バルク（6L＝3本単位）」、レジ横のお土産やギフト通販には「100ml個食カップ（60個単位）」といった形で、同じレシピから用途に合わせてお選びいただけます。また定番11フレーバーとの混載注文にも対応しています。",
  },
  {
    q: "お支払い方法は何がありますか？",
    a: "クレジットカード決済、または銀行振込（お客様専用の振込口座による自動確認）の2通りからお選びいただけます。試作費用および初回の本製造代金は、専用仕込みとなるため前払いにてお願いしております。",
  },
  {
    q: "冷凍での保存期間（賞味期限）はどのくらいですか？",
    a: "−18℃以下の冷凍保存において、アイスクリーム類・氷菓には法律上の賞味期限表示義務はございません。米粉を使った独自製法により、営業中の冷凍庫の出し入れでもシャリシャリ感が出にくく、長期間なめらかな口どけを保てるため、廃棄ロスを気にせずお取り扱いいただけます。",
  },
  {
    q: "開発したレシピを自店だけの完全独占にすることはできますか？",
    a: "通常プラン（試作費1万・3万円）では、小さなお店でも挑戦しやすい価格でお受けするため配合・製法の権利は当社に帰属いたします（お預かりした素材そのものや屋号の無断使用は一切ございません）。同一配合の他社提供や当社販売を制限する「専属ロック」や、他社工場移管のための「配合書買取」をご希望の場合は、年間最低発注数のご約束または別途専属契約（税別30万円〜）にて承ります。",
  },
];

export default function OemFAQSection() {
  return (
    <section id="faq" className="scroll-mt-16 bg-[#fafaf8] py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          eyebrow="よくあるご質問"
          lines={["ご検討にあたって、", "よくいただくご質問にお答えします。"]}
        />

        <div className="mt-10 space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-gray-200 bg-white px-6 py-5"
            >
              <summary className="text-ink flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-bold [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span
                  className="text-brand shrink-0 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                >
                  ▾
                </span>
              </summary>
              <p className="text-ink-light mt-3 border-t border-gray-100 pt-3 text-sm leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
