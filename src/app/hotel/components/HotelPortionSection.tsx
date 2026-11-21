import Image from "next/image";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

export default function HotelPortionSection() {
  return (
    <section id="portion" className="bg-[#f7f3ec] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-brand mb-3 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          盛り付けと量・原価の目安
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl md:text-4xl">
          小鉢・添え盛りなら1Lで約20人分、ドルチェ皿なら約12人分。
        </h2>
        <p className="text-ink-light mt-4 max-w-3xl font-sans text-[15px] leading-[1.85] sm:text-base">
          {WHOLESALE_FACTS.scoopsPerLiter}
          。コースの構成や器の大きさに合わせて、1人あたりの提供量を無駄なく調整いただけます。
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* 50ml 目安 */}
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 shadow-2xs sm:p-7">
            <span className="bg-brand/10 text-brand inline-block rounded-full px-3 py-1 font-sans text-xs font-bold">
              会席の小鉢・水菓子・ケーキ添え・朝食ビュッフェに
            </span>
            <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <p className="text-ink font-serif text-2xl font-bold sm:text-3xl">約50ml（#18）</p>
              <p className="text-brand font-sans text-base font-bold">1Lあたり 約20人分</p>
            </div>
            <p className="text-ink mt-3 font-sans text-lg font-bold">
              1人分 約100円
              <span className="text-ink-muted ml-2 text-xs font-normal">
                （税別。1L 2,000円÷20杯）
              </span>
            </p>
            <p className="text-ink-light mt-3 font-sans text-sm leading-[1.8]">
              品数の多い会席・懐石の小鉢や、季節の果物・ケーキの横に添える一玉に収まりのよい上品な量です。2L容器（4,000円・税別）なら約40人分とれます。
            </p>
          </div>

          {/* 80ml 目安 */}
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 shadow-2xs sm:p-7">
            <span className="inline-block rounded-full bg-stone-100 px-3 py-1 font-sans text-xs font-bold text-stone-700">
              洋食コースのドルチェ・婚礼宴会のメイン甘味に
            </span>
            <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <p className="text-ink font-serif text-2xl font-bold sm:text-3xl">約80ml（#12）</p>
              <p className="text-brand font-sans text-base font-bold">1Lあたり 約12人分</p>
            </div>
            <p className="text-ink mt-3 font-sans text-lg font-bold">
              1人分 約167円
              <span className="text-ink-muted ml-2 text-xs font-normal">
                （税別。1L 2,000円÷12杯）
              </span>
            </p>
            <p className="text-ink-light mt-3 font-sans text-sm leading-[1.8]">
              ホテル・オーベルジュのコースドルチェ皿や、お子さま夕食のデザートとしてしっかり一皿でお出ししたい時に適した量です。
            </p>
          </div>
        </div>

        <p className="text-ink-muted mt-3 font-sans text-xs">
          ※1杯あたりの計算：{WHOLESALE_FACTS.costPerScoop}
        </p>

        {/* 業務用1L・2L容器の実物写真 */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-3">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/bulk_1l.jpg"
                alt="業務用 1L角型バルク容器"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <p className="text-ink mt-2.5 text-center font-sans text-xs font-bold">
              1L 角型容器（2,000円・税別）
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-3">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/bulk_2l.jpg"
                alt="業務用 2L角型バルク容器"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <p className="text-ink mt-2.5 text-center font-sans text-xs font-bold">
              2L 角型容器（4,000円・税別）
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-3">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/bulk_scoop.jpg"
                alt="滑らかな舌触りのクラフトアイスを盛り付ける様子"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <p className="text-ink mt-2.5 text-center font-sans text-xs font-bold">
              出し入れしても滑らかな舌触り
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
