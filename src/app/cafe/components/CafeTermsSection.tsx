import Image from "next/image";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

const termsRows = [
  { label: "食品分類", value: "氷菓（乳製品を使っていないため）" },
  { label: "価格", value: WHOLESALE_FACTS.price },
  { label: "最小の量", value: WHOLESALE_FACTS.minLot },
  { label: "1Lあたりの杯数", value: WHOLESALE_FACTS.scoopsPerLiter },
  { label: "1杯あたりの計算", value: WHOLESALE_FACTS.costPerScoop },
  { label: "無料サンプル", value: WHOLESALE_FACTS.sampleTerms },
  { label: "注文から届くまで", value: WHOLESALE_FACTS.leadTime },
  { label: "支払い", value: WHOLESALE_FACTS.payment },
  { label: "保存", value: WHOLESALE_FACTS.storage },
  { label: "不使用素材", value: WHOLESALE_FACTS.freeFromAdditivesAndWhiteSugar },
  { label: "アレルゲン", value: WHOLESALE_FACTS.allergen },
] as const;

export default function CafeTermsSection() {
  return (
    <section id="terms" className="bg-bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-14">
          {/* 左：1L・2Lバルク容器の実物写真（/ と同じパッケージ写真） */}
          <div className="flex w-full flex-col gap-4 lg:w-5/12">
            <p className="text-brand inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
              <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
              お取引条件・容器サイズ
            </p>
            <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
              お店のペースに合わせて、少量4Lから始められます。
            </h2>
            <p className="text-ink-light font-sans text-sm leading-relaxed sm:text-base">
              冷凍庫のスペースに合わせて、1Lと2Lの角型容器をご用意しています。1L×4個で4種類を少しずつ揃えることも、よく出る味を2L×2個で揃えることも可能です。
            </p>

            <div className="mt-2 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-stone-200/80 shadow-2xs">
                <Image
                  src="/images/bulk_2l.jpg"
                  alt="2Lサイズの業務用バルク容器"
                  fill
                  sizes="(max-width: 1024px) 50vw, 40vw"
                  className="object-cover"
                />
                <span className="text-ink absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 font-sans text-xs font-bold shadow-2xs">
                  2L 容器
                </span>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-stone-200/80 shadow-2xs">
                <Image
                  src="/images/bulk_1l.jpg"
                  alt="1Lサイズの業務用バルク容器"
                  fill
                  sizes="(max-width: 1024px) 50vw, 40vw"
                  className="object-cover"
                />
                <span className="text-ink absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 font-sans text-xs font-bold shadow-2xs">
                  1L 容器
                </span>
              </div>
            </div>
          </div>

          {/* 右：注文の決まり一覧 */}
          <div className="w-full lg:w-7/12">
            <div className="overflow-hidden rounded-3xl border border-stone-200/80 bg-[#fafaf8]">
              <dl className="divide-y divide-stone-200/70">
                {termsRows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[10rem_1fr] sm:gap-5 sm:px-7"
                  >
                    <dt className="text-brand font-sans text-xs font-bold sm:text-sm">
                      {row.label}
                    </dt>
                    <dd className="text-ink font-sans text-sm leading-relaxed">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
