import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

const termsRows = [
  { label: "価格", value: WHOLESALE_FACTS.price },
  { label: "最小の量", value: WHOLESALE_FACTS.minLot },
  { label: "1Lあたりの杯数", value: WHOLESALE_FACTS.scoopsPerLiter },
  { label: "1杯あたりの計算", value: WHOLESALE_FACTS.costPerScoop },
  { label: "無料サンプル", value: WHOLESALE_FACTS.sampleTerms },
  { label: "注文から届くまで", value: WHOLESALE_FACTS.leadTime },
  { label: "支払い", value: WHOLESALE_FACTS.payment },
  { label: "保存", value: WHOLESALE_FACTS.storage },
  { label: "アレルゲン", value: WHOLESALE_FACTS.allergen },
  { label: "不使用素材", value: WHOLESALE_FACTS.freeFromAdditivesAndWhiteSugar },
] as const;

export default function RyokanTermsSection() {
  return (
    <section id="terms" className="bg-[#f7f3ec] py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-brand mb-3 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          お取引条件
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
          注文の決まり
        </h2>
        <p className="text-ink-light mt-3 font-sans text-sm leading-relaxed sm:text-base">
          {WHOLESALE_FACTS.minLot}（1L×4個・2L×2個など）。必要な時に必要な分だけご注文いただけます。
        </p>

        <div className="mt-8 overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-2xs">
          <dl className="divide-y divide-stone-100">
            {termsRows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 gap-1.5 px-5 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6 sm:px-7 sm:py-4.5"
              >
                <dt className="text-brand font-sans text-xs font-bold sm:text-sm">{row.label}</dt>
                <dd className="text-ink font-sans text-sm leading-relaxed">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
