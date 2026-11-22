import type { ReactNode } from "react";
import { Download } from "lucide-react";
import { SectionHeader } from "@/app/dessert/components/ui";
import { LID_STICKER_SPEC } from "../data/oemSpecs";

const FAQ_ITEMS: { q: string; a: ReactNode }[] = [
  {
    q: "天面シールはどのように準備すればよいですか？",
    a: (
      <div className="space-y-2.5">
        <p>
          仕様は<strong>「{LID_STICKER_SPEC.fullSize}」</strong>、推奨材質は
          <strong>「{LID_STICKER_SPEC.material}」</strong>
          です。底面の法定一括表示ラベルは株式会社ヒトコト側で作成・貼付するため、天面シールに原材料名や栄養成分を入れる必要はなく、お店のロゴや商品名だけで自由にデザインいただけます。お客様にて印刷・ご支給いただく分、カップ単価を基準価格（税込324円）から税込15円お値引きした「税込309円」としております。※ご請求は税別286円基準となります。
        </p>
        <div className="flex flex-wrap gap-2 pt-0.5">
          <a
            href={LID_STICKER_SPEC.guidePdfHref}
            download
            className="text-brand border-brand/30 hover:bg-brand/8 inline-flex items-center gap-1.5 rounded-full border bg-[#fafaf8] px-3.5 py-1.5 text-xs font-bold transition-colors"
          >
            <Download className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {LID_STICKER_SPEC.guidePdfLabel}
          </a>
          <a
            href={LID_STICKER_SPEC.aiTemplateHref}
            download
            className="text-brand border-brand/30 hover:bg-brand/8 inline-flex items-center gap-1.5 rounded-full border bg-[#fafaf8] px-3.5 py-1.5 text-xs font-bold transition-colors"
          >
            <Download className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {LID_STICKER_SPEC.aiTemplateLabel}
          </a>
        </div>
      </div>
    ),
  },
  {
    q: "お預かりする素材で、事前に確認が必要なことはありますか？",
    a: "卵・乳・小麦を持ち込まない専用工房の安全を守るため、お預かりする素材そのものおよび加工ラインに「卵・乳・小麦」が含まれないことを、原材料規格書や商品表示などで事前に確認させていただいております（※アーモンド・くるみ・ピスタチオ等のナッツ類を使用した製造は対応可能です）。なお、主役となるお店の素材は無償ご支給いただくことで、定番卸と同じ据え置き製造単価を実現しております。",
  },
  {
    q: "カップ底面の表示ラベル（製造者・販売者など）はどうなりますか？",
    a: "配合確定後に栄養成分値および原材料表示を当社で算出し、食品表示基準に準拠した「底面の法定一括表示ラベル」を株式会社ヒトコトにて作成・貼付した状態で納品いたします。お客様にはカップ天面（フタ）の丸シール（正円 直径72mm）のみご手配いただく形となりますので、複雑な表示作成のお手間はかかりません。",
  },
  {
    q: "1つのオリジナルレシピで、カップと業務用バルクの両方を注文できますか？",
    a: "はい、可能です。たとえば店内イートインの食後デザートには「2L業務用バルク（6L＝3本単位）」、レジ横のお土産やギフト通販には「100ml個食カップ（60個単位）」といった形で、同じレシピから用途に合わせてお選びいただけます。また定番11フレーバーとの混載注文にも対応しています。",
  },
  {
    q: "お支払い方法は何がありますか？",
    a: "試作開発費用・量産代金ともに、通常の業務用卸と同じ「納品月の月末締め・翌月末払い（ご請求書払い・銀行振込）」を基本としており、専用発注ポータルでのカード決済にも対応しております。普段の食材仕入れと同じ流れでスムーズにお取引いただけます。",
  },
  {
    q: "ベース素材やハラール・五葷など、お店の基準に合わせた調整も相談できますか？",
    a: "はい。定番フレーバーは豆乳ベース・アーモンドミルクベース・果実×ココナッツベースがあり、全品が乳・卵・小麦・白砂糖不使用です。アルコール由来原料や特定素材の有無など、お店の基準に合わせたフレーバー選定やオリジナル配合設計も事前ヒアリングにて個別にご提案いたします。",
  },
  {
    q: "冷凍での保存期間（賞味期限）はどのくらいですか？",
    a: "−18℃以下の冷凍保存において、アイスクリーム類・氷菓には法律上の賞味期限表示義務はございません。米粉を使った独自製法により、営業中の冷凍庫の出し入れでもシャリシャリ感が出にくく、長期間なめらかな口どけを保てるため、廃棄ロスを抑えてお取り扱いいただけます。",
  },
  {
    q: "開発したレシピを自店だけの完全独占にすることはできますか？",
    a: "通常のオリジナル開発プラン（試作費3万円）では、小さなお店でも挑戦しやすい価格でお受けするため配合・製法の権利は当社に帰属いたします（お預かりした素材そのものや屋号の無断使用は一切ございません）。同一配合の他社提供や当社販売を制限する「専属ロック」や、他社工場移管のための「配合書買取」をご希望の場合は、年間最低発注数のご約束または別途専属契約（税別30万円〜）にて承ります。",
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
              <div className="text-ink-light mt-3 border-t border-gray-100 pt-3 text-sm leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
