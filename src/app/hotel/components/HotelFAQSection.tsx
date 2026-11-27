import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

interface HotelFAQItem {
  q: string;
  a: string;
}

const hotelFaqs: HotelFAQItem[] = [
  {
    q: "アルコール由来の原料や、ベースのミルクは味ごとに確認できますか？",
    a: "抹茶・ほうじ茶・バニラ2種・アールグレイは豆乳、ショコラはアーモンドミルク、フルーツ系5種は果実×ココナッツがベースです。アルコール由来の原料などは、味ごとに個別にお答えしますのでフォーム備考欄よりお知らせください。",
  },
  {
    q: "ナッツアレルギーの方への対応はどうなりますか？",
    a: `${WHOLESALE_FACTS.allergen}。「ショコラ」にはアーモンドを含みますので、重度のナッツアレルギーの方へは工房でナッツ類を扱う旨をお伝えのうえご判断ください。`,
  },
  {
    q: "小さな宿ですが、注文頻度の決まりや賞味期限はありますか？",
    a: "定期発注やノルマはありません。最小4L（カップは60個）から必要な時だけご注文いただけます。賞味期限表示義務のない冷凍品（氷菓）のため、期限切れによる廃棄が出にくい設計です。",
  },
  {
    q: "サンプルや本注文は、何日くらいで届きますか？",
    a: `初回の無料サンプル（6個）は原則お申し込みの翌日に発送します。通常の本注文は${WHOLESALE_FACTS.leadTime}へ発送いたします。`,
  },
];

export default function HotelFAQSection() {
  return (
    <section id="faq" className="bg-bg-white scroll-mt-14 py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-brand mb-1.5 font-sans text-xs font-bold tracking-wider">よくある質問</p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
          導入前によくいただくご質問
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
