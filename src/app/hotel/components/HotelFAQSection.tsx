import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

interface HotelFAQItem {
  q: string;
  a: string;
}

const hotelFaqs: HotelFAQItem[] = [
  {
    q: "お品書き・ビュッフェ札（英語表記含む）にはどう書けばよいですか？",
    a: "「植物性クラフトアイス（乳・卵・小麦不使用）」、英語では「Plant-Based Craft Ice Cream (Vegan / Gluten-Free / Dairy & Egg Free)」と記載いただけます。味別の全原材料はフレーバー一覧の各カードからご確認いただけます。",
  },
  {
    q: "ナッツアレルギーの方への対応はどうなりますか？",
    a: `${WHOLESALE_FACTS.allergen}。「ショコラ」にはアーモンドを含みますので、重度のナッツアレルギーの方へは工房でナッツ類を扱う旨をお伝えのうえご判断ください。乳・卵・小麦は一切持ち込まないため、${WHOLESALE_FACTS.allergenAssurance}体制です。`,
  },
  {
    q: "ベースの植物性ミルクや、ハラール・五葷などの基準確認はできますか？",
    a: "抹茶・ほうじ茶・バニラ2種・アールグレイは豆乳、ショコラはアーモンドミルク、フルーツ系5種は果実×ココナッツがベースです。アルコール由来原料や特定素材の有無など、ご宿泊客の基準に合わせた選定も備考欄にて個別にご案内します。",
  },
  {
    q: "保存期間や、繁忙期の発注リードタイムはどのくらいですか？",
    a: `${WHOLESALE_FACTS.storage}で賞味期限表示義務のない冷凍品（氷菓）のため、事前納品・長期常備が可能です。発送は${WHOLESALE_FACTS.leadTime}が目安です（初回の無料6個サンプルは通常2営業日以内に発送）。`,
  },
  {
    q: "売店・お部屋菓子用の個食カップや、屋号ロゴOEMはありますか？",
    a: "はい。1L・2Lバルク（最小4L〜）のほか、「定番100ml個食カップ（税別300円・60個〜）」や、貴館の屋号ロゴ入り丸シールOEM（開発費0円・1味60個〜）、地域特産食材での専用開発（6L／60個〜）も承っております。",
  },
];

export default function HotelFAQSection() {
  return (
    <section id="faq" className="bg-bg-white scroll-mt-14 py-12 sm:py-18">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-brand mb-2 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          よくある質問
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
          料理長・ご担当者様からよくいただくご質問
        </h2>

        <div className="mt-6 space-y-2.5">
          {hotelFaqs.map((faq) => (
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
