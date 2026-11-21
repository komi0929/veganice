import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

interface HotelFAQItem {
  q: string;
  a: string;
}

const hotelFaqs: HotelFAQItem[] = [
  {
    q: "献立表・メニューやアレルギー表にどう書けばよいですか？（原材料とアレルゲンの見方）",
    a: `お品書きやメニュー表には「植物性クラフトアイス（乳・卵・小麦不使用）」などと記載いただけます。${WHOLESALE_FACTS.allergen}。味ごとの詳しい原材料名・対象アレルゲン・栄養成分は、上の「会席・コースに合う味」の各カードにある「原材料・栄養を見る」ボタンから一覧でご確認いただけます。`,
  },
  {
    q: "ナッツのアレルギーの方には出せますか？",
    a: "工房ではナッツ類を扱うことがあるほか、「ショコラ」には原材料としてアーモンドを含みます（特定原材料8品目は原材料として使っていないため落花生・くるみ等は原材料に含みませんが、工房内で扱うことがあります）。重度のナッツアレルギーをお持ちのお客様へは、工房でナッツ類を扱うことがある旨を事前にお伝えのうえご判断ください。なお、乳・卵・小麦は工房に持ち込まないため、乳・卵・小麦アレルギーの方にも安心して出せる体制です。",
  },
  {
    q: "繁忙期・連休前は何日前に頼めばよいですか？",
    a: `ご注文から届くまでは「${WHOLESALE_FACTS.leadTime}」でお届けしております。連休前や繁忙期は配送便の混雑も見込まれますので、この通常目安（5営業日前後）を基準に余裕をもってご注文ください。${WHOLESALE_FACTS.storage}いただけるため、前もって納品・保管しておくことも可能です。`,
  },
  {
    q: "冷凍庫にどれくらい置いておけますか？",
    a: `${WHOLESALE_FACTS.storage}してください。氷菓（アイスクリーム類）は食品表示基準上、賞味期限の表示義務がない冷凍食品です。−18℃以下の適切な温度管理のもとで保管いただけ、米粉を使った独自製法により冷凍庫の出し入れをしても滑らかな舌触りが続きます。`,
  },
  {
    q: "個包装・カップはありますか？",
    a: `ございません。業務用のお取り扱いは1L・2Lの容器だけです（${WHOLESALE_FACTS.price}／${WHOLESALE_FACTS.minLot}）。`,
  },
];

export default function HotelFAQSection() {
  return (
    <section id="faq" className="bg-bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-brand mb-3 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          よくある質問
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
          料理長・ご担当者様からよくいただくご質問
        </h2>

        <div className="mt-8 space-y-3">
          {hotelFaqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-stone-200/80 bg-[#fafaf8] open:bg-white open:shadow-2xs"
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
