import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

export default function HotelBanquetSection() {
  return (
    <section id="banquet" className="bg-bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-stone-200/80 bg-[#f7f3ec] p-6 sm:p-10">
          <p className="text-brand mb-2.5 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
            <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
            国際会議・訪日団体・婚礼・朝食ビュッフェにも
          </p>
          <h2 className="text-ink font-serif text-xl leading-snug font-bold sm:text-2xl md:text-3xl">
            多様な国・食習慣ゲストが集まる席でも、全員に同じデザートを出せる。
          </h2>
          <p className="text-ink-light mt-4 max-w-3xl font-sans text-sm leading-[1.9] sm:text-base">
            国際会議（MICE）や訪日インバウンド団体のご会食、婚礼披露宴・ご宴会・ケータリングなど人数の多いお席でも、菜食やグルテンフリー、アレルギーの方だけ別皿に差し替えることなく、皆様に同じ一皿をお出しいただけます。1L・2Lの角型容器のまま
            {WHOLESALE_FACTS.storage}
            しておけるため、海外宿泊客の多いホテル朝食ビュッフェや急なリクエスト対応の常備品としても重宝します。
          </p>
        </div>
      </div>
    </section>
  );
}
