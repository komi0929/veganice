import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

interface CafeFAQItem {
  q: string;
  a: string;
}

const cafeFaqs: CafeFAQItem[] = [
  {
    q: "メニュー表やお客様への説明はどう伝えればいいですか？",
    a: "メニューには「植物性クラフトアイス（乳・卵・小麦・白砂糖不使用）」などの表記が好評です。味ごとの全原材料・栄養成分はフレーバー一覧の各カードからご確認いただけます。",
  },
  {
    q: "ベースの植物性ミルクや、お店の基準（アルコール・五葷等）は確認できますか？",
    a: "抹茶・ほうじ茶・バニラ2種・アールグレイは豆乳、ショコラはアーモンドミルク、果実系5種は果実×ココナッツがベースです。個別基準に合う味の選定も備考欄やDMでご案内します。",
  },
  {
    q: "テイクアウト販売用の個食カップや、お店ロゴのOEMもありますか？",
    a: "はい。「定番100ml個食カップ（税別300円・60個〜）」のほか、フタ丸シールをお店ロゴにするOEM（開発費0円・1味60個〜）やお店のお茶・果実を使った専用レシピ開発も承っております。",
  },
  {
    q: "営業中の出し入れでシャリシャリになったり、日持ちロスは出ませんか？",
    a: `米粉を炊き上げる独自製法のため開閉を繰り返しても滑らかな口どけが続きます。また氷菓（${WHOLESALE_FACTS.storage}）は賞味期限表示義務がない冷凍品のため、期限切れによる廃棄も出にくい設計です。`,
  },
  {
    q: "ナッツ類などのアレルゲン管理はどうなっていますか？",
    a: `${WHOLESALE_FACTS.allergen}。「ショコラ」はアーモンドを含みます。乳・卵・小麦は工房内に一切持ち込まないため、${WHOLESALE_FACTS.allergenAssurance}体制です。`,
  },
  {
    q: "注文から何日で届きますか？",
    a: `ご注文確定後、${WHOLESALE_FACTS.leadTime}へ発送いたします（初回の無料6個サンプルは原則お申し込みの翌日に発送）。`,
  },
];

export default function CafeFAQSection() {
  return (
    <section id="faq" className="bg-bg-white scroll-mt-14 py-12 sm:py-18">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-brand mb-2 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          よくあるご質問
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
          導入前によくいただくご質問
        </h2>

        <div className="mt-6 space-y-2.5">
          {cafeFaqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-stone-200/80 bg-[#fafaf8]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
                <span className="text-ink flex gap-2.5 font-sans text-sm leading-snug font-bold sm:text-[15px]">
                  <span className="text-brand shrink-0">Q.</span>
                  <span>{faq.q}</span>
                </span>
                <span
                  className="text-brand shrink-0 font-sans text-lg leading-none transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  ＋
                </span>
              </summary>
              <p className="text-ink-light px-5 pb-4 pl-11 font-sans text-xs leading-[1.8] sm:text-sm">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
