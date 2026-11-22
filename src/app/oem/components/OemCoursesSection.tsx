"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calculator, Check, Palette, ShieldAlert } from "lucide-react";
import { SectionHeader } from "@/app/dessert/components/ui";
import { PRICING_CONSTANTS, type OemCourseId } from "../data/oemSpecs";
import { dispatchOemIntent } from "../lib/oemInteraction";

/**
 * 迷わせない「シンプル2プラン」セクション
 * ① 一番かんたん：フタのシールだけお店仕様にする（開発費 0円 ／ 100mlカップ）
 * ② おすすめ本命：3万円でオリジナルアイスを開発する（完成後は 2Lバルク も 100mlカップ もどちらでもOK！）
 */
export default function OemCoursesSection() {
  const selectPlanForConsult = (courseId: OemCourseId, formatId?: "cup" | "bulk" | "both") => {
    dispatchOemIntent({ target: "contact", tab: "oem", courseId, formatId });
  };

  const selectPlanForSimulator = (courseId: OemCourseId) => {
    dispatchOemIntent({ target: "simulator", courseId });
  };

  return (
    <section id="courses" className="bg-bg-white scroll-mt-16 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="選べる2つのプランと料金"
          lines={[
            "選び方はとてもシンプル。",
            "「フタだけ変える」か「オリジナル味をつくる」の2択。",
          ]}
          lead={[
            "一番手軽なのは開発費0円のシール変更。おすすめは、初期試作費3万円（税別）でお店の素材を使った専用レシピを開発し、店内用バルクや物販用カップで自由に展開するプランです。",
          ]}
        />

        <div className="mt-12 grid grid-cols-1 items-stretch gap-7 lg:grid-cols-12">
          {/* ── プラン①：一番かんたん・フタだけお店ロゴ（5カラム幅） ── */}
          <article className="flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xs lg:col-span-5">
            {/* パッケージ図解 */}
            <div className="flex h-52 w-full flex-col items-center justify-center border-b border-gray-100 bg-[#faf8f4] px-5">
              <p className="text-ink-muted mb-3 text-[11px] font-bold">
                中身は人気の定番11種 ➔ フタだけお店仕様に
              </p>
              <div className="flex w-full items-center justify-center gap-3 sm:gap-4">
                <div className="flex flex-col items-center">
                  <div className="relative h-24 w-24">
                    <Image
                      src="/images/flavors/matcha.png"
                      alt="SoyStories定番11種のカップアイス実物"
                      fill
                      className="object-contain"
                      sizes="96px"
                    />
                  </div>
                  <span className="text-ink-muted mt-1 text-[11px] font-bold">
                    定番11種から選ぶ
                  </span>
                </div>

                <ArrowRight className="text-brand h-5 w-5 shrink-0" aria-hidden="true" />

                <div className="flex flex-col items-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-[#f3efe6] shadow-md ring-1 ring-gray-200">
                    <div className="border-brand/50 flex h-[76px] w-[76px] flex-col items-center justify-center rounded-full border border-dashed bg-white px-2 text-center">
                      <span className="text-brand text-[9px] font-bold tracking-wider">
                        YOUR LOGO
                      </span>
                      <span className="text-ink mt-0.5 text-xs leading-tight font-bold">
                        お店の
                        <br />
                        丸シール
                      </span>
                    </div>
                  </div>
                  <span className="text-brand mt-1 text-[11px] font-bold">お店ブランドで完成</span>
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700">
                  プラン ①｜一番かんたん
                </span>
                <h3 className="text-ink mt-3 text-xl leading-snug font-bold">
                  フタだけお店ロゴにする
                </h3>
              </div>

              <div className="mt-3.5 rounded-2xl bg-[#f7f3ec] px-4 py-3.5">
                <span className="text-ink-muted block text-xs">初期の試作・開発費</span>
                <p className="text-brand mt-0.5 text-3xl font-bold">¥0</p>
                <span className="text-ink-light mt-0.5 block text-xs">
                  試作なしですぐに製造スタートできます
                </span>
              </div>

              <p className="text-ink-light mt-4 text-[13.5px] leading-relaxed">
                薬院店で人気の定番11フレーバー（抹茶・ほうじ茶・ショコラ・バニラココナッツ・フルーツ系など）から味を選び、
                <strong>フタの丸シールだけお店のロゴデザイン</strong>にするプランです。
              </p>

              {/* 納品スタイル（カップのみ） */}
              <div className="mt-4 rounded-2xl border border-gray-200/90 bg-[#fafaf8] p-3.5">
                <p className="text-ink-muted text-[11px] font-bold">お届けする商品のかたち</p>
                <div className="mt-2 flex items-center gap-3">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-white">
                    <Image
                      src="/images/gelato_cup_tower.jpg"
                      alt="100ml個食カップ"
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div className="text-xs">
                    <p className="text-ink font-bold">
                      100ml 個食カップ：税込 ¥{PRICING_CONSTANTS.cupOemPriceTaxIncl}／個
                    </p>
                    <p className="text-ink-light mt-0.5">最小ロット：1味 60個〜（120個で1箱）</p>
                    <p className="text-ink-muted mt-0.5 text-[10.5px]">
                      ※ご請求は税別286円基準（税込目安309円）
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-ink-muted mt-3 text-[11.5px] leading-relaxed">
                ※シール不要で定番味を店内皿盛りしたい場合は、
                <Link href="/wholesale" className="text-brand underline">
                  通常の業務用バルク卸（4L〜）
                </Link>
                をご利用いただけます。
              </p>

              <div className="mt-auto pt-5">
                <button
                  type="button"
                  onClick={() => selectPlanForConsult("seal_only", "cup")}
                  className="bg-brand hover:bg-brand-dark min-h-12 w-full cursor-pointer rounded-full px-4 py-3 text-sm font-bold text-white transition-colors"
                >
                  プラン①（開発費0円）で相談する →
                </button>
                <button
                  type="button"
                  onClick={() => selectPlanForSimulator("seal_only")}
                  className="text-ink-muted hover:text-brand mt-2 flex w-full cursor-pointer items-center justify-center gap-1 py-1 text-xs font-medium transition-colors"
                >
                  <Calculator className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>このプランで利益を試算する</span>
                </button>
              </div>
            </div>
          </article>

          {/* ── プラン②：おすすめ本命・3万円でオリジナル開発（カップもバルクもOK！・7カラム幅） ── */}
          <article className="border-brand/55 ring-brand/15 flex flex-col overflow-hidden rounded-3xl border bg-white shadow-sm ring-2 lg:col-span-7">
            {/* 実物写真2枚並び（果物・地域食材 × お茶・珈琲など幅広い素材に対応することが一目でわかる） */}
            <div className="relative grid h-52 w-full grid-cols-2 border-b border-gray-100 bg-white">
              <div className="relative h-full w-full border-r border-gray-100">
                <Image
                  src="/images/gelato_strawberry.jpg"
                  alt="旬の果物や地域の食材からつくったオリジナルアイスの実物"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </div>
              <div className="relative h-full w-full">
                <Image
                  src="/images/gelato_kinako.jpg"
                  alt="お茶や焙煎素材からつくったオリジナルアイスの実物"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </div>

              <span className="bg-cta absolute top-3 left-3 rounded-full px-3.5 py-1 text-xs font-bold text-white shadow-2xs">
                おすすめ｜カップもバルクも両方OK
              </span>
              <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-gray-800 shadow-2xs">
                地域の食材・果物・お茶・珈琲・発酵素材など幅広く対応
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <div>
                <span className="bg-brand/10 text-brand rounded-full px-3 py-1 text-xs font-bold">
                  プラン ②｜完全オリジナル開発
                </span>
                <h3 className="text-ink mt-3 text-xl leading-snug font-bold sm:text-2xl">
                  お店の素材でオリジナルアイスをつくる
                </h3>
              </div>

              <div className="mt-3.5 rounded-2xl bg-[#f7f3ec] px-4 py-3.5 sm:flex sm:items-baseline sm:justify-between">
                <div>
                  <span className="text-ink-muted block text-xs font-bold">
                    初期の試作開発費（対象素材すべて一律）
                  </span>
                  <p className="text-brand mt-0.5 text-3xl font-bold">税別 ¥30,000</p>
                </div>
                <span className="text-ink-light mt-1 block text-xs sm:mt-0 sm:text-right">
                  ＋試作材料1,500円・資材・送料実費
                  <br />
                  （2種×3個の食べ比べ ／ 2回戦まで調整OK）
                </span>
              </div>

              <p className="text-ink-light mt-4 text-sm leading-relaxed">
                <strong>
                  初期試作費3万円（税別）で、お店の素材を使った専用レシピを開発します。
                </strong>
                乳・卵・小麦を含まない幅広い食材で、素材の水分・糖度・香りにあわせた滑らかな口どけに仕上げます。
              </p>

              {/* 最大の魅力：完成したオリジナル味は「バルク」でも「カップ」でもどちらでもOK！ */}
              <div className="border-brand/25 bg-brand/4 mt-4 rounded-2xl border p-4">
                <p className="text-brand flex items-center gap-1.5 text-xs font-bold sm:text-[13px]">
                  <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                  完成したオリジナルアイスは、用途に合わせてどちらの形でも納品OK！（両方でもOK）
                </p>

                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {/* 業務用2Lバルク */}
                  <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-2xs">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/bulk_2l.jpg"
                        alt="業務用2Lバルク"
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div className="text-xs">
                      <span className="text-brand block text-[10.5px] font-bold">
                        店内デザート・パフェに
                      </span>
                      <p className="text-ink font-bold">
                        2Lバルク：税別 ¥{PRICING_CONSTANTS.bulk2LPriceExTax.toLocaleString("ja-JP")}
                      </p>
                      <p className="text-ink-muted text-[11px]">最小 6L（3本）〜・シール不要</p>
                    </div>
                  </div>

                  {/* 100mlカップ */}
                  <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-2xs">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/gelato_cup_tower.jpg"
                        alt="100ml個食カップ"
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div className="text-xs">
                      <span className="text-brand block text-[10.5px] font-bold">
                        お持ち帰り・店頭物販に
                      </span>
                      <p className="text-ink font-bold">
                        100mlカップ：税込 ¥{PRICING_CONSTANTS.cupOemPriceTaxIncl}／個
                      </p>
                      <p className="text-ink-muted text-[11px]">最小 60個〜・お店シール貼付</p>
                      <p className="text-ink-muted text-[10px]">※税別286円基準</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-5">
                <button
                  type="button"
                  onClick={() => selectPlanForConsult("custom_recipe", "both")}
                  className="bg-cta hover:bg-cta-hover min-h-12 w-full cursor-pointer rounded-full px-5 py-3 text-sm font-bold text-white shadow-2xs transition-colors"
                >
                  プラン②（オリジナル開発）で無料相談する →
                </button>
                <button
                  type="button"
                  onClick={() => selectPlanForSimulator("custom_recipe")}
                  className="text-ink-muted hover:text-brand mt-2 flex w-full cursor-pointer items-center justify-center gap-1 py-1 text-xs font-medium transition-colors"
                >
                  <Calculator className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>カップ・バルクそれぞれの利益を試算する</span>
                </button>
              </div>
            </div>
          </article>
        </div>

        {/* 補足：天面シールの支給ルール＆素材条件（穏やかな2ボックス） */}
        <div className="mt-10 grid grid-cols-1 gap-4 rounded-3xl bg-[#f7f3ec] p-6 sm:grid-cols-2 sm:p-8">
          <div className="rounded-2xl bg-white p-5">
            <p className="text-ink flex items-center gap-2 text-sm font-bold">
              <Palette className="text-brand h-4 w-4 shrink-0" aria-hidden="true" />
              カップの「フタ丸シール」のご支給について
            </p>
            <p className="text-ink-light mt-2 text-xs leading-relaxed">
              当社より規定サイズの<strong>テンプレート（Illustrator .aiデータ）を支給</strong>
              いたします。そちらをもとにお客様にてデザイン制作・シール印刷までご手配いただき、当工房へご納品いただく形となります。お客様にてシールをご手配いただく分、カップ単価を基準価格（税込324円）から
              <strong>税込15円引きの「税込309円」</strong>
              にしております（底面の法定一括表示ラベルは当社で貼付。※ご請求は税別286円基準（税込目安309円））。
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5">
            <p className="text-ink flex items-center gap-2 text-sm font-bold">
              <ShieldAlert className="text-brand h-4 w-4 shrink-0" aria-hidden="true" />
              お預かりできる素材の条件について
            </p>
            <p className="text-ink-light mt-2 text-xs leading-relaxed">
              専用工房の安全を守るため、
              <strong>卵・乳・小麦を含まない素材（加工ライン混入なし）</strong>
              に限ります（※アーモンド・ピスタチオ・くるみ等のナッツ類を使った製造は対応可能です）。主役となるお店の素材は無償ご支給いただく形で、定番品と同じ据え置き製造単価を実現しています（当社で素材仕入れを代行する場合は別途お見積りとなります）。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
