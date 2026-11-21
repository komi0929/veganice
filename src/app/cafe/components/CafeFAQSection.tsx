import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

interface CafeFAQItem {
  q: string;
  a: string;
}

const cafeFaqs: CafeFAQItem[] = [
  {
    q: "ヴィーガンでないお客様にも喜ばれますか？",
    a: `はい。薬院のお店では「こっちのアイスのほうが好き」とおっしゃるヴィーガンではないお客様が多数いらっしゃいます。米粉を使った独自の製法で、植物性アイスにありがちなシャリシャリ感（シャーベット感）のない滑らかな舌触りとコクを実現しており、HappyCow ${WHOLESALE_FACTS.happyCowRating}・Googleの口コミ${WHOLESALE_FACTS.googleReviewCount}（${WHOLESALE_FACTS.googleRating}）という評価がその裏づけです。`,
  },
  {
    q: "アレルゲン対応の詳細を教えてください",
    a: `${WHOLESALE_FACTS.allergen}。また、${WHOLESALE_FACTS.freeFromAdditivesAndWhiteSugar}。${WHOLESALE_FACTS.allergenAssurance}体制で製造しています。`,
  },
  {
    q: "最小ロットと発注単位は？",
    a: `${WHOLESALE_FACTS.minLot}（1L×4本 または 2L×2本など）。${WHOLESALE_FACTS.price}です。大量でなくてもお店のペースに合わせてご注文いただけます。`,
  },
  {
    q: "保管条件を教えてください",
    a: `${WHOLESALE_FACTS.storage}してください。冷凍食品（氷菓）であるため、食品表示基準上、賞味期限の表示義務がありません。適切な温度管理のもとで保管いただけ、廃棄ロスの心配がありません。`,
  },
  {
    q: "注文から届くまでどのくらいですか？",
    a: `ご注文確定後、${WHOLESALE_FACTS.leadTime}へお届けいたします。初回の無料試食サンプル（6個）は通常2営業日以内に発送いたします。`,
  },
  {
    q: "支払い方法は？",
    a: `お支払いは「${WHOLESALE_FACTS.payment}」です。納品月の月末締め・翌月末に指定口座へのお振込みをお願いしております。`,
  },
  {
    q: "メニューにはどう記載すればいいですか？",
    a: "たとえば「クラフトアイス（乳・卵・小麦・白砂糖不使用）」のように、素材の特徴を添えて記載いただくのがおすすめです。ケーキプレートの添えアイスや季節のフロートにもそのままお使いいただけます。",
  },
  {
    q: "お客様にどう説明すればいいですか？",
    a: "「植物性の素材だけでつくった手づくりのクラフトアイスです。乳製品・卵・小麦・白砂糖を使っていないので、アレルギーの方も安心してお召し上がりいただけます」とお伝えいただくだけで十分です。",
  },
  {
    q: "初めての導入でも安心ですか？",
    a: `はい。${WHOLESALE_FACTS.minLot}でお試しいただけます。${WHOLESALE_FACTS.storage}で廃棄ロスもなく、特別な機材も必要ありません。まずは6個の無料試食サンプルでお店のケーキやドリンクとの相性をお確かめください。`,
  },
];

export default function CafeFAQSection() {
  return (
    <section id="faq" className="bg-[#f7f3ec] py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-brand mb-3 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          よくあるご質問
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
          よくいただくご質問
        </h2>

        <div className="mt-8 space-y-3">
          {cafeFaqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-stone-200/80 bg-white shadow-2xs"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4.5 [&::-webkit-details-marker]:hidden">
                <span className="text-ink flex gap-2.5 font-sans text-[15px] leading-snug font-bold">
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
              <p className="text-ink-light px-5 pb-5 pl-11 font-sans text-sm leading-[1.85]">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
