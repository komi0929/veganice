"use client";

import Image from "next/image";
import Link from "next/link";
import { Calculator, Check, Download } from "lucide-react";
import { LID_STICKER_SPEC, PRICING_CONSTANTS, type OemCourseId } from "../data/oemSpecs";
import { dispatchOemIntent } from "../lib/oemInteraction";

export default function OemCoursesSection() {
  const selectPlanForConsult = (courseId: OemCourseId, formatId?: "cup" | "bulk" | "both") => {
    dispatchOemIntent({ target: "contact", tab: "oem", courseId, formatId });
  };

  const selectPlanForSimulator = (courseId: OemCourseId) => {
    dispatchOemIntent({ target: "simulator", courseId });
  };

  return (
    <section id="courses" className="bg-bg-white scroll-mt-16 py-12 sm:py-18">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-brand mb-2 inline-flex items-center gap-2 text-xs font-bold tracking-wide">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          選べる2つのプランと料金
        </p>
        <h2 className="text-ink text-2xl leading-snug font-bold tracking-tight sm:text-3xl">
          「フタだけ変える」か「オリジナル味をつくる」の2択。
        </h2>

        <div className="mt-8 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          {/* ── プラン①：フタだけお店ロゴ（5カラム幅） ── */}
          <article className="flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xs lg:col-span-5">
            <div className="relative grid h-44 w-full grid-cols-2 border-b border-gray-100 bg-[#faf8f4]">
              <div className="relative h-full w-full border-r border-gray-100">
                <Image
                  src="/images/cup_seal_houjicha_real.jpg"
                  alt="100mlホワイトカップと天面丸シール付きフタ（ほうじ茶）"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 240px"
                />
              </div>
              <div className="relative h-full w-full">
                <Image
                  src="/images/cup_seal_choco_real.jpg"
                  alt="100mlホワイトカップと天面丸シール付きフタ（ショコラ）"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 240px"
                />
              </div>
              <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-gray-800 shadow-2xs">
                定番11種 × お店ロゴ丸シール
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <span className="self-start rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700">
                プラン ①｜一番かんたん
              </span>
              <h3 className="text-ink mt-2.5 text-xl leading-snug font-bold">
                フタだけお店ロゴにする
              </h3>

              <div className="mt-3 rounded-2xl bg-[#f7f3ec] px-4 py-3">
                <span className="text-ink-muted block text-xs">初期の試作・開発費</span>
                <p className="text-brand mt-0.5 text-3xl font-bold">¥0</p>
                <span className="text-ink-light text-xs">試作なしですぐ製造スタート</span>
              </div>

              <p className="text-ink-light mt-3 text-xs leading-relaxed sm:text-[13px]">
                定番11種から味を選び、<strong>フタ丸シール（φ72mm）だけお店ロゴ</strong>
                にするプランです。
              </p>

              <div className="mt-3.5 rounded-2xl border border-gray-200/90 bg-[#fafaf8] p-3">
                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-white">
                    <Image
                      src="/images/gelato_cup_tower.jpg"
                      alt="100ml個食カップ"
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
                  <div className="text-xs">
                    <p className="text-ink font-bold">
                      100mlカップ：税別 ¥{PRICING_CONSTANTS.cupOemPriceExTax}／個
                    </p>
                    <p className="text-ink-light">
                      1味 60個〜（税込目安 ¥{PRICING_CONSTANTS.cupOemPriceTaxIncl}
                      ・シール支給分15円引）
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                <a
                  href={LID_STICKER_SPEC.guidePdfHref}
                  download
                  className="text-brand border-brand/30 hover:bg-brand/8 inline-flex items-center gap-1 rounded-full border bg-[#fafaf8] px-2.5 py-1 text-[11px] font-bold transition-colors"
                >
                  <Download className="h-3 w-3 shrink-0" aria-hidden="true" />
                  作成ガイドPDF（φ72mm）
                </a>
                <a
                  href={LID_STICKER_SPEC.aiTemplateHref}
                  download
                  className="text-brand border-brand/30 hover:bg-brand/8 inline-flex items-center gap-1 rounded-full border bg-[#fafaf8] px-2.5 py-1 text-[11px] font-bold transition-colors"
                >
                  <Download className="h-3 w-3 shrink-0" aria-hidden="true" />
                  {LID_STICKER_SPEC.aiTemplateLabel}
                </a>
              </div>

              <p className="text-ink-muted mt-2.5 text-[11px] leading-relaxed">
                ※定番味の店内皿盛りは
                <Link href="/wholesale" className="text-brand underline">
                  定番卸（4L〜）
                </Link>
                をご覧ください。
              </p>

              <div className="mt-auto pt-4">
                <button
                  type="button"
                  onClick={() => selectPlanForConsult("seal_only", "cup")}
                  className="bg-brand hover:bg-brand-dark min-h-11 w-full cursor-pointer rounded-full px-4 py-2.5 text-sm font-bold text-white transition-colors"
                >
                  プラン①（開発費0円）で相談する →
                </button>
                <button
                  type="button"
                  onClick={() => selectPlanForSimulator("seal_only")}
                  className="text-ink-muted hover:text-brand mt-2 flex w-full cursor-pointer items-center justify-center gap-1 py-1 text-xs font-medium transition-colors"
                >
                  <Calculator className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>利益を試算する</span>
                </button>
              </div>
            </div>
          </article>

          {/* ── プラン②：3万円でオリジナル開発（7カラム幅） ── */}
          <article className="border-brand/55 ring-brand/15 flex flex-col overflow-hidden rounded-3xl border bg-white shadow-sm ring-2 lg:col-span-7">
            <div className="relative grid h-44 w-full grid-cols-2 border-b border-gray-100 bg-white">
              <div className="relative h-full w-full border-r border-gray-100">
                <Image
                  src="/images/strawberry_harvest_ac.jpg"
                  alt="果樹園で収穫された完熟いちご素材"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </div>
              <div className="relative h-full w-full">
                <Image
                  src="/images/tea_leaves_ac.jpg"
                  alt="香り高い日本茶の茶葉素材"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </div>

              <span className="bg-cta absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-bold text-white shadow-2xs">
                おすすめ｜カップもバルクも両方OK
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <span className="bg-brand/10 text-brand self-start rounded-full px-3 py-1 text-xs font-bold">
                プラン ②｜完全オリジナル開発
              </span>
              <h3 className="text-ink mt-2.5 text-xl leading-snug font-bold sm:text-2xl">
                お店の素材でオリジナルアイスをつくる
              </h3>

              <div className="mt-3 rounded-2xl bg-[#f7f3ec] px-4 py-3 sm:flex sm:items-baseline sm:justify-between">
                <div>
                  <span className="text-ink-muted block text-xs font-bold">初期の試作開発費</span>
                  <p className="text-brand mt-0.5 text-3xl font-bold">税別 ¥30,000</p>
                </div>
                <span className="text-ink-light mt-1 block text-xs sm:mt-0 sm:text-right">
                  ＋試作実費（材料 税別1,500円＋資材 税別200円＋60サイズ送料）
                  <br />
                  （A/B 2種×3個食べ比べ ／ 2回戦目まで追加開発費0円）
                </span>
              </div>

              <p className="text-ink-light mt-3 text-xs leading-relaxed sm:text-[13.5px]">
                お店の素材（卵・乳・小麦不含）から専用レシピを開発。完成後はどちらの形態でもご注文いただけます。
              </p>

              <div className="border-brand/25 bg-brand/4 mt-3.5 rounded-2xl border p-3.5">
                <p className="text-brand flex items-center gap-1.5 text-xs font-bold">
                  <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                  用途に合わせて両方・どちらでも納品OK（定番味との混載も可）
                </p>

                <div className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  <div className="flex items-center gap-2.5 rounded-xl bg-white p-2.5 shadow-2xs">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/bulk_2l.jpg"
                        alt="業務用2Lバルク"
                        fill
                        className="object-cover"
                        sizes="44px"
                      />
                    </div>
                    <div className="text-xs">
                      <span className="text-brand block text-[10.5px] font-bold">店内皿盛りに</span>
                      <p className="text-ink font-bold">
                        2Lバルク：税別 ¥{PRICING_CONSTANTS.bulk2LPriceExTax.toLocaleString("ja-JP")}
                      </p>
                      <p className="text-ink-muted text-[11px]">最小 6L（3本）〜・シール不要</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-white p-2.5 shadow-2xs">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/hero_white_cups_real.jpg"
                        alt="100ml個食カップ"
                        fill
                        className="object-cover"
                        sizes="44px"
                      />
                    </div>
                    <div className="text-xs">
                      <span className="text-brand block text-[10.5px] font-bold">店頭物販に</span>
                      <p className="text-ink font-bold">
                        100mlカップ：税別 ¥{PRICING_CONSTANTS.cupOemPriceExTax}／個
                      </p>
                      <p className="text-ink-muted text-[11px]">
                        最小 60個〜（税込目安 ¥{PRICING_CONSTANTS.cupOemPriceTaxIncl}）
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-4">
                <button
                  type="button"
                  onClick={() => selectPlanForConsult("custom_recipe", "both")}
                  className="bg-cta hover:bg-cta-hover min-h-11 w-full cursor-pointer rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-2xs transition-colors"
                >
                  プラン②（オリジナル開発）で無料相談する →
                </button>
                <button
                  type="button"
                  onClick={() => selectPlanForSimulator("custom_recipe")}
                  className="text-ink-muted hover:text-brand mt-2 flex w-full cursor-pointer items-center justify-center gap-1 py-1 text-xs font-medium transition-colors"
                >
                  <Calculator className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>カップ・バルクの利益を試算する</span>
                </button>
              </div>
            </div>
          </article>
        </div>

        <p className="text-ink-muted mt-5 text-center text-xs">
          ※天面丸シール（φ72mm）仕様・お預かり素材条件・法定表示ラベルは
          <a href="#faq" className="text-brand font-bold underline underline-offset-2">
            よくあるご質問
          </a>
          にまとめています。
        </p>
      </div>
    </section>
  );
}
