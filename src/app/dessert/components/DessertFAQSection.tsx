import type { ReactNode } from "react";
import Link from "next/link";
import { SectionHeader } from "./ui";

interface FAQItem {
  q: string;
  a: ReactNode;
}

const faqs: FAQItem[] = [
  {
    q: "お店の冷凍スペースが限られていますが保管できますか？",
    a: "はい。省スペースな1Lまたは2Lの角型バルク容器を採用しているため、コールドテーブルや小型冷凍庫のすき間にもすっきり収まります。最小4L（1L×4本など）から味を組み合わせてご注文いただけます。",
  },
  {
    q: "どんな業態のお店に向いていますか？",
    a: "ヴィーガン・オーガニック・薬膳・精進などのレストランや定食店をはじめ、カフェ・喫茶、ドーナツ・米粉パン・焼き菓子・ガレット専門店まで幅広くご導入いただいています。食後の小鉢デザート、フロート・パフェ、焼き菓子への添え盛り（アイスサンド）、さらに100ml個食カップでの店頭販売にも対応しています。",
  },
  {
    q: "ベースの植物性ミルクは何を使っていますか？",
    a: "抹茶・ほうじ茶・バニラココナッツ・UMAMIバニラ・アールグレイは豆乳ベース、ショコラはアーモンドミルクベース、フルーツ系5種（マンゴー・ミックスベリー・もも・りんご・ドラゴンフルーツ）は果実とココナッツがベースです。豆乳不使用のフレーバーもお選びいただけます。",
  },
  {
    q: "原材料の詳細や、ハラール・五葷などお店の基準に合うか確認できますか？",
    a: "全11種すべて乳・卵・小麦・白砂糖不使用で、各フレーバーカードをタップすると全原材料をご確認いただけます。アルコール由来原料や特定素材の有無など、お店の基準に合わせたフレーバー選定も個別にご案内いたしますので、フォームの備考欄やDMでお気軽にお尋ねください。",
  },
  {
    q: "アレルゲン対応・専用工房の管理体制は？",
    a: "卵・乳・小麦を一切持ち込まない専用の工房で製造しているため、乳・卵・小麦のアレルギーの方にも安心してお召し上がりいただけます。工房に持ち込みがあるのはナッツ類（アーモンド・くるみ・カシューナッツ・落花生等）のみで、味により大豆・アーモンド（ナッツ使用）・もも・りんごを含みます。",
  },
  {
    q: "テイクアウト用の個食カップや、お店ロゴのOEMもできますか？",
    a: (
      <>
        はい。そのまま店頭・レジ横で販売できる「定番100ml個食カップ（税別¥300・60個〜、味ミックス可）」のほか、開発費0円で天面シールをお店ロゴにできるOEMプラン（1味60個〜）やオリジナル味開発も承っております。詳しくは{" "}
        <Link href="/wholesale" className="text-brand font-bold underline hover:opacity-80">
          定番卸（バルク・カップ）要点ページ
        </Link>{" "}
        または{" "}
        <Link
          href="/oem/plan?src=dessert_faq"
          className="text-brand font-bold underline hover:opacity-80"
        >
          OEMプラン案内ページ
        </Link>{" "}
        をご覧ください。
      </>
    ),
  },
  {
    q: "卸価格・送料・お支払い条件について知りたい",
    a: (
      <>
        業務用バルクは1L ¥2,000／2L
        ¥4,000（税別）、全11種同価格・最小4Lから組み合わせ自由です。送料は地域と箱サイズに応じた実費で、お支払いは「納品月の月末締め・翌月末払い（請求書による銀行振込）」または{" "}
        <a
          href="https://order.soystories.cafe/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand underline hover:opacity-80"
        >
          専用発注ページ
        </a>{" "}
        でのカード決済に対応しています。通常5営業日前後でヤマトクール冷凍便にて発送いたします。
      </>
    ),
  },
];

export default function DessertFAQSection() {
  return (
    <section id="faq" className="scroll-mt-16 bg-[#f7f3ec] py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeader eyebrow="よくある質問" lines={["気になるところに、", "お答えします。"]} />

        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-2xl bg-white shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
                <span className="text-ink flex gap-2 text-[15px] leading-snug font-bold">
                  <span className="text-brand">Q.</span>
                  {faq.q}
                </span>
                <span
                  className="text-brand shrink-0 text-lg leading-none transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  ＋
                </span>
              </summary>
              <div className="text-ink-light px-5 pb-5 pl-11 text-[14px] leading-[1.8]">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
