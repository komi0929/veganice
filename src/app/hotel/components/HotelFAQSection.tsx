import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

interface HotelFAQItem {
  q: string;
  a: string;
}

const hotelFaqs: HotelFAQItem[] = [
  {
    q: "お品書き・ビュッフェ札（英語表記含む）にはどう書けばよいですか？",
    a: "日本語では「植物性クラフトアイス（乳・卵・小麦・白砂糖不使用）」、英語では「Plant-Based Craft Ice Cream (Vegan / Gluten-Free / Dairy & Egg Free)」とそのまま記載いただけます（上部の献立札見本からワンタップでコピーも可能です）。",
  },
  {
    q: "ベースの植物性ミルクや、アルコール由来の原料・五葷などは味ごとに確認できますか？",
    a: "抹茶・ほうじ茶・バニラ2種・アールグレイは豆乳、ショコラはアーモンドミルク、フルーツ系5種は果実×ココナッツがベースです。全11種の原材料は上の一覧表でご確認いただけるほか、アルコール由来の原料などは、味ごとに個別にお答えしますのでフォームの備考欄よりお知らせください。",
  },
  {
    q: "ナッツアレルギーの方への対応はどうなりますか？",
    a: `${WHOLESALE_FACTS.allergen}。「ショコラ」にはアーモンドを含みます。アレルギーの安全を一律にお約束するものではございませんので、重度のナッツアレルギーの方へは工房でナッツ類を扱う旨をお伝えのうえご判断ください。なお乳・卵・小麦は専用工房内に一切持ち込んでおりません。`,
  },
  {
    q: "小さな宿ですが、定期発注の決まりや賞味期限切れの心配はありませんか？",
    a: `定期発注や月間ノルマは一切ございません。最小4L（または100ml個食カップ60個）から必要な時だけご注文いただけます。また${WHOLESALE_FACTS.storage}で賞味期限表示義務のない冷凍品（氷菓）のため、期限切れによる廃棄が出にくい設計です。通常のご注文は${WHOLESALE_FACTS.leadTime}で発送し、初回の無料6個サンプルは原則お申し込みの翌日に発送いたします。`,
  },
  {
    q: "売店・お部屋出し用の個食カップや、屋号ロゴ・地元食材のOEMはありますか？",
    a: "はい。1L・2Lバルク（最小4L〜）のほか、「定番100ml個食カップ（税別300円・60個〜）」、貴館の屋号ロゴ入り丸シールOEM（開発費0円・税別286円・1味60個〜）、さらに仕入先廃業に伴う代替品や地域特産食材での専用レシピ開発（初期試作開発費 税別30,000円＋試作実費・完成後は60個／6L〜）も承っております。",
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
          女将・料理長・ご担当者様からよくいただくご質問
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
