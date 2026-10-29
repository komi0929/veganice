import type { ReactNode } from "react";
import { SectionHeader } from "./ui";

interface FAQItem {
  q: string;
  a: ReactNode;
}

const faqs: FAQItem[] = [
  {
    q: "お店の冷凍スペースが限られていますが保管できますか？",
    a: "はい、問題ありません。省スペースな1Lまたは2Lの角型バルク容器を採用しているため、お店のコールドテーブルやすき間にもすっきり収まります。最小4L（1L×4個など）からご注文いただけます。",
  },
  {
    q: "営業中に冷凍庫を出し入れしても、食感は変わりませんか？",
    a: "はい。米粉を使った独自製法により、植物性アイスにありがちなシャリシャリ感（シャーベット感）がなく、業務用のバルク容器で冷凍庫の出し入れを繰り返しても、最後まで滑らかな舌触りが続きます。",
  },
  {
    q: "ヴィーガン専門店以外でも導入できますか？",
    a: "もちろんです。ヴィーガンレストランをはじめ、ラーメン店、バーガーショップ、カフェ、エスニックダイナーなど、満足感ある食事を提供する幅広い飲食店様にご導入いただけます。薬院の実店舗でも、ヴィーガン当事者だけでなく一緒に来店されたノンヴィーガンの方から「食後に油分が残らず後味がすっきりする」「普通のアイスよりむしろ好き」と大変好評です。",
  },
  {
    q: "提供価格や杯数の目安は？",
    a: "標準的なディッシャー（約50ml）で1Lあたり約20杯とれます。単品480円〜、セットデザートなら＋350円前後でのご提供例が多く、原価コントロールもしやすい設計です。",
  },
  {
    q: "アレルゲン対応・コンタミネーション対策は？",
    a: "特定原材料8品目（乳・卵・小麦・えび・かに・そば・落花生・くるみ）を一切持ち込まない専用工房で製造しています。一部フレーバーに大豆・アーモンド・もも・りんごを使用しています。",
  },
  {
    q: "卸価格・お取引条件について知りたい",
    a: (
      <>
        1L ¥2,000／2L
        ¥4,000（税別）、全11種同じ価格です。最小4Lから、味の組み合わせは自由。送料は地域とサイズで決まり、商品代金と一緒に月末締め・翌月末払いの請求書でご請求します。価格表とご注文は{" "}
        <a
          href="https://order.soystories.cafe/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand underline hover:opacity-80"
        >
          https://order.soystories.cafe/
        </a>{" "}
        からどうぞ。
      </>
    ),
  },
  {
    q: "注文からどのくらいで届きますか？",
    a: "ご注文確定後、通常5営業日以内にヤマト運輸のクール冷凍便でお届けします。お支払いは月末締め・翌月末の銀行振込（請求書払い）に対応しています。",
  },
];

export default function DessertFAQSection() {
  return (
    <section id="faq" className="bg-[#f7f3ec] py-16 sm:py-24">
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
              <p className="text-ink-light px-5 pb-5 pl-11 text-[14px] leading-[1.8]">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
