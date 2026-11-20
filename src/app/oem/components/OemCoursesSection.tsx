"use client";

import Image from "next/image";
import { ArrowRight, Calculator, Palette, ShieldAlert } from "lucide-react";
import { SectionHeader } from "@/app/dessert/components/ui";
import type { OemCourseId } from "../data/oemSpecs";
import { dispatchOemIntent } from "../lib/oemInteraction";

/**
 * 3つのコース（作り方）セクション
 * ・AI生成イメージを全廃し、「実物写真＋説明と100%一致するパッケージ図解」に変更
 * ・専門用語（完成ベース配合／専用ベース設計 等）をやめ、お客様が自分の手元の素材で即判断できるよう
 *   「①フタだけ変える（0円）」「②お茶・珈琲などの粉を混ぜる（1万円）」「③果物・液体から作る（3万円）」に整理
 */
export default function OemCoursesSection() {
  const selectCourseForConsult = (courseId: OemCourseId) => {
    dispatchOemIntent({ target: "contact", tab: "oem", courseId });
  };

  const selectCourseForSimulator = (courseId: OemCourseId) => {
    dispatchOemIntent({ target: "simulator", courseId });
  };

  return (
    <section id="courses" className="bg-bg-white scroll-mt-16 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="選べる3つの作り方と初期費用"
          lines={["お手元の素材にあわせて、", "3つのプランから選べます。"]}
          lead={[
            "どのプランを選んでも、完成後の商品単価（カップ税込309円／2L税別4,000円）は同じです。",
            "違いは「最初の試作・開発費」だけなので、やりたいことに合わせてシンプルにお選びいただけます。",
          ]}
        />

        <div className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-3">
          {/* ── プラン①：フタだけお店ロゴ（開発費 0円） ── */}
          <article className="flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xs">
            {/* 説明と完全一致するビジュアル：定番カップのフタが「お店ロゴ丸シール」に変わる図解 */}
            <div className="flex aspect-[4/3] w-full flex-col items-center justify-center border-b border-gray-100 bg-[#faf8f4] p-5">
              <p className="text-ink-muted mb-3 text-[11px] font-bold">
                中身は完成された定番味 ➔ フタだけお店仕様に
              </p>
              <div className="flex w-full items-center justify-center gap-3 sm:gap-4">
                {/* 左：実物の定番カップ写真 */}
                <div className="flex flex-col items-center">
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28">
                    <Image
                      src="/images/flavors/matcha.png"
                      alt="SoyStories定番11種のカップアイス実物"
                      fill
                      className="object-contain"
                      sizes="112px"
                    />
                  </div>
                  <span className="text-ink-muted mt-1 text-[11px] font-bold">
                    定番11種から選ぶ
                  </span>
                </div>

                <ArrowRight className="text-brand h-5 w-5 shrink-0" aria-hidden="true" />

                {/* 右：お店オリジナル天面丸シールの実寸イメージ図 */}
                <div className="flex flex-col items-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-[#f3efe6] shadow-md ring-1 ring-gray-200 sm:h-28 sm:w-28">
                    <div className="border-brand/50 flex h-[76px] w-[76px] flex-col items-center justify-center rounded-full border border-dashed bg-white px-2 text-center sm:h-[88px] sm:w-[88px]">
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
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700">
                  プラン ①｜素材持ち込みなし
                </span>
              </div>

              <h3 className="text-ink mt-3 text-xl leading-snug font-bold">
                フタだけお店ロゴにする
              </h3>

              <div className="mt-3 rounded-2xl bg-[#f7f3ec] px-4 py-3">
                <span className="text-ink-muted block text-xs">初期の試作・開発費</span>
                <p className="text-brand mt-0.5 text-2xl font-bold">¥0</p>
                <span className="text-ink-light mt-0.5 block text-[11px]">
                  試作なしですぐ本製造へ進めます
                </span>
              </div>

              <p className="text-ink-light mt-4 text-[13.5px] leading-relaxed">
                薬院店で人気の定番11フレーバー（抹茶・ほうじ茶・ベリー・バニラ等）から味を選び、
                <strong>フタの丸シールだけお店のロゴや屋号</strong>に変える一番手軽なプランです。
              </p>

              <dl className="mt-4 space-y-1.5 border-t border-gray-100 pt-3 text-xs">
                <div className="flex justify-between gap-2">
                  <dt className="text-ink-muted">こんな方に</dt>
                  <dd className="text-ink text-right font-bold">カフェ物販・周年品・お土産に</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-ink-muted">作れる形</dt>
                  <dd className="text-ink text-right font-bold">100mlカップ専用（1味60個〜）</dd>
                </div>
              </dl>

              <div className="mt-auto pt-5">
                <button
                  type="button"
                  onClick={() => selectCourseForConsult("seal_only")}
                  className="bg-brand hover:bg-brand-dark min-h-11 w-full cursor-pointer rounded-full px-4 py-2.5 text-xs font-bold text-white transition-colors sm:text-[13px]"
                >
                  プラン①（開発費0円）で相談する →
                </button>
                <button
                  type="button"
                  onClick={() => selectCourseForSimulator("seal_only")}
                  className="text-ink-muted hover:text-brand mt-2 flex w-full cursor-pointer items-center justify-center gap-1 py-1 text-xs font-medium transition-colors"
                >
                  <Calculator className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>利益を試算する</span>
                </button>
              </div>
            </div>
          </article>

          {/* ── プラン②：お茶・珈琲などの「粉・乾物」を混ぜる（試作費 1万円） ── */}
          <article className="flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xs">
            {/* 実物写真：アイス＋横の粉末素材がそのまま写っているSoyStories実物写真 */}
            <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-gray-100 bg-white">
              <Image
                src="/images/gelato_kinako.jpg"
                alt="なめらかな植物性アイスに粉末素材を合わせた実物写真"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-gray-800 shadow-2xs">
                実物例：茶葉パウダー・珈琲粉・きな粉・ナッツ等
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between gap-2">
                <span className="bg-brand/10 text-brand rounded-full px-3 py-1 text-xs font-bold">
                  プラン ②｜水分を含まない素材
                </span>
              </div>

              <h3 className="text-ink mt-3 text-xl leading-snug font-bold">
                お店の「粉末・具材」を混ぜる
              </h3>

              <div className="mt-3 rounded-2xl bg-[#f7f3ec] px-4 py-3">
                <span className="text-ink-muted block text-xs">
                  初期の試作開発費（2回戦まで調整OK）
                </span>
                <p className="text-brand mt-0.5 text-2xl font-bold">税別 ¥10,000</p>
                <span className="text-ink-light mt-0.5 block text-[11px]">
                  ＋試作材料1,500円・資材・送料実費
                </span>
              </div>

              <p className="text-ink-light mt-4 text-[13.5px] leading-relaxed">
                ほうじ茶粉・抹茶・焙煎コーヒー粉・スパイス・ナッツなど
                <strong>水分のない素材</strong>
                を、完成されたなめらかベースに混ぜ込みます。土台のレシピ比率を変えずに作れるため、1万円でオリジナル味が完成します。
              </p>

              <dl className="mt-4 space-y-1.5 border-t border-gray-100 pt-3 text-xs">
                <div className="flex justify-between gap-2">
                  <dt className="text-ink-muted">こんな方に</dt>
                  <dd className="text-ink text-right font-bold">日本茶・自家焙煎珈琲・乾物店様</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-ink-muted">作れる形</dt>
                  <dd className="text-ink text-right font-bold">100mlカップ ／ 2Lバルク 両方OK</dd>
                </div>
              </dl>

              <div className="mt-auto pt-5">
                <button
                  type="button"
                  onClick={() => selectCourseForConsult("base_arrange")}
                  className="bg-brand hover:bg-brand-dark min-h-11 w-full cursor-pointer rounded-full px-4 py-2.5 text-xs font-bold text-white transition-colors sm:text-[13px]"
                >
                  プラン②（粉末・具材）で相談する →
                </button>
                <button
                  type="button"
                  onClick={() => selectCourseForSimulator("base_arrange")}
                  className="text-ink-muted hover:text-brand mt-2 flex w-full cursor-pointer items-center justify-center gap-1 py-1 text-xs font-medium transition-colors"
                >
                  <Calculator className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>利益を試算する</span>
                </button>
              </div>
            </div>
          </article>

          {/* ── プラン③：果物・果汁などの「水分のある素材」から作る（試作費 3万円） ── */}
          <article className="border-brand/50 ring-brand/15 flex flex-col overflow-hidden rounded-3xl border bg-white shadow-sm ring-2">
            {/* 実物写真：生いちごとストロベリーアイスのSoyStories実物写真 */}
            <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-gray-100 bg-white">
              <Image
                src="/images/gelato_strawberry.jpg"
                alt="果物から専用レシピで仕上げたストロベリーアイスの実物写真"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <span className="bg-cta absolute top-3 left-3 rounded-full px-3 py-1 text-[11px] font-bold text-white shadow-2xs">
                農園・飲食店様に一番人気
              </span>
              <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-gray-800 shadow-2xs">
                実物例：果物・果汁・ピューレ・酒粕・甘酒等
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between gap-2">
                <span className="bg-brand/10 text-brand rounded-full px-3 py-1 text-xs font-bold">
                  プラン ③｜水分・糖分を含む素材
                </span>
              </div>

              <h3 className="text-ink mt-3 text-xl leading-snug font-bold">
                果物・特産品から専用開発する
              </h3>

              <div className="mt-3 rounded-2xl bg-[#f7f3ec] px-4 py-3">
                <span className="text-ink-muted block text-xs">
                  初期の試作開発費（2回戦まで調整OK）
                </span>
                <p className="text-brand mt-0.5 text-2xl font-bold">税別 ¥30,000</p>
                <span className="text-ink-light mt-0.5 block text-[11px]">
                  ＋試作材料1,500円・資材・送料実費
                </span>
              </div>

              <p className="text-ink-light mt-4 text-[13.5px] leading-relaxed">
                果物・果汁・ピューレ・酒粕など<strong>水分を含む素材</strong>
                は、そのまま混ぜると氷っぽくシャリシャリしやすいため、素材の糖度や水分量にあわせて一から専用レシピを組み、なめらかな看板アイスに仕上げます。
              </p>

              <dl className="mt-4 space-y-1.5 border-t border-gray-100 pt-3 text-xs">
                <div className="flex justify-between gap-2">
                  <dt className="text-ink-muted">こんな方に</dt>
                  <dd className="text-ink text-right font-bold">果樹園・農家・レストラン・宿様</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-ink-muted">作れる形</dt>
                  <dd className="text-ink text-right font-bold">100mlカップ ／ 2Lバルク 両方OK</dd>
                </div>
              </dl>

              <div className="mt-auto pt-5">
                <button
                  type="button"
                  onClick={() => selectCourseForConsult("custom_recipe")}
                  className="bg-cta hover:bg-cta-hover min-h-11 w-full cursor-pointer rounded-full px-4 py-2.5 text-xs font-bold text-white transition-colors sm:text-[13px]"
                >
                  プラン③（果物・専用開発）で相談する →
                </button>
                <button
                  type="button"
                  onClick={() => selectCourseForSimulator("custom_recipe")}
                  className="text-ink-muted hover:text-brand mt-2 flex w-full cursor-pointer items-center justify-center gap-1 py-1 text-xs font-medium transition-colors"
                >
                  <Calculator className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>利益を試算する</span>
                </button>
              </div>
            </div>
          </article>
        </div>

        {/* 補足：初見の人が疑問に思いやすい「シール手配」と「試作実費・素材条件」だけを穏やかに整理 */}
        <div className="mt-10 grid grid-cols-1 gap-4 rounded-3xl bg-[#f7f3ec] p-6 sm:grid-cols-2 sm:p-8">
          <div className="rounded-2xl bg-white p-5">
            <p className="text-ink flex items-center gap-2 text-sm font-bold">
              <Palette className="text-brand h-4 w-4 shrink-0" aria-hidden="true" />
              カップの「フタ丸シール」はどう作ればいい？
            </p>
            <p className="text-ink-light mt-2 text-xs leading-relaxed">
              デザインソフトがなくても大丈夫です。
              <strong>Canva対応の丸シール見本テンプレート</strong>
              と推奨の耐水シール印刷案内を無料でお渡しします。お客様にてシールをご用意いただく分、カップ単価を基準価格（税込324円）から
              <strong>税込15円引きの「税込309円」</strong>にしております。
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5">
            <p className="text-ink flex items-center gap-2 text-sm font-bold">
              <ShieldAlert className="text-brand h-4 w-4 shrink-0" aria-hidden="true" />
              お預かりできる素材と試作実費について
            </p>
            <p className="text-ink-light mt-2 text-xs leading-relaxed">
              専用工房の安全を守るため、
              <strong>卵・乳・小麦を含まない素材（加工ライン混入なし）</strong>
              に限ります。プラン②③の試作時は1回あたり「材料費1,500円＋資材200円＋60サイズ冷凍送料」の実費のみ別途ご負担いただき、主役素材は無償ご支給いただくことで本製造の据え置き単価を維持しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
