"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus, Sparkles, Check, Tag, ShieldAlert, FileSpreadsheet } from "lucide-react";
import { SectionHeader, CheckItem } from "@/app/dessert/components/ui";
import { PRICING_CONSTANTS } from "../data/oemSpecs";

const VISUAL_COURSES = [
  {
    id: "seal_only",
    stepTag: "COURSE 01",
    feeBadge: "開発費 ¥0",
    feeSub: "試作なしですぐ作れる",
    image: "/images/oem/course_1_sticker.jpg",
    imageAlt: "既存のクラフトアイスにお店のオリジナル天面シールを貼ったイメージ",
    title: "今ある11種の味 ＋ お店のシール",
    oneLiner: "人気の定番フレーバーを選び、ふたシールだけお店のロゴにする一番手軽な形。",
    leftBox: { sub: "SoyStories", label: "定番11種の味" },
    operator: "+",
    rightBox: { sub: "お店でご用意", label: "天面ロゴシール" },
    resultLabel: "お店ブランドのカップが完成",
    formats: [
      { label: "100mlカップ 税込¥309", active: true },
      { label: "バルクは定番卸(4L〜)", active: false },
    ],
    details: [
      "開発費0円。事前に6種おためしサンプルで味を確かめられます",
      "天面シールをご支給いただく分、基準価格から税込15円引き（税込309円/個）",
      "1味60個単位（120個で100サイズ箱ぴったりになり送料が半減します）",
    ],
  },
  {
    id: "base_arrange",
    stepTag: "COURSE 02",
    feeBadge: "試作費 ¥10,000",
    feeSub: "税別 ＋ 試作材料・送料実費",
    image: "/images/oem/course_2_blend.jpg",
    imageAlt: "完成された植物性ベースにお店の茶葉粉末や珈琲・具材を混ぜ込むイメージ",
    title: "完成ベース ＋ お店の粉末・具材",
    oneLiner: "なめらかな既存ベースの配合比率はそのまま、お店の茶葉や珈琲粉末・具材をプラス。",
    leftBox: { sub: "SoyStories", label: "完成ベース配合" },
    operator: "+",
    rightBox: { sub: "無償ご支給", label: "粉末・茶葉・具材" },
    resultLabel: "手頃にオリジナルアレンジ味",
    formats: [
      { label: "100mlカップ 税込¥309", active: true },
      { label: "2Lバルク 税別¥4,000", active: true },
    ],
    details: [
      "茶葉微粉末・焙煎珈琲粉・スパイス・機能性パウダー・ナッツ等の固形具材に対応",
      "事前に3つの方向性をご提案後、バランス違い2種×3個（計6個）をお届け",
      "2回戦目まで基本試作費内で調整可能。完成後の単価は定番と同額据え置き",
    ],
  },
  {
    id: "custom_recipe",
    stepTag: "COURSE 03",
    feeBadge: "試作費 ¥30,000",
    feeSub: "税別 ＋ 試作材料・送料実費",
    image: "/images/oem/course_3_original.jpg",
    imageAlt: "お店の果物や特産品から専用レシピを設計するオリジナルアイスのイメージ",
    title: "お店の素材で「専用ベース」開発",
    oneLiner: "果物・果汁・ピューレ・酒粕など、素材の水分や糖度に合わせて土台から専用設計。",
    leftBox: { sub: "無償ご支給", label: "果物・果汁など" },
    operator: "×",
    rightBox: { sub: "土台から構築", label: "専用ベース設計" },
    resultLabel: "世界に一つの看板クラフトアイス",
    formats: [
      { label: "100mlカップ 税込¥309", active: true },
      { label: "2Lバルク 税別¥4,000", active: true },
    ],
    highlight: true,
    details: [
      "果汁・ピューレ・ペースト・抽出液等の水分・糖度・酸味に合わせ、固くならない配合を専用設計",
      "初回2種×3個の食べ比べ＋大幅な方向転換も含め2回戦目まで基本試作費内で対応",
      "1つの完成レシピから「物販用カップ」と「店内用2Lバルク」の両方を注文可能",
    ],
  },
];

/**
 * 読み込まなくても「写真 ＋ 足し算ブロック図解 ＋ 早見比較表」で直感理解でき、
 * タップすると詳細条件まで深く読める3コースセクション
 */
export default function OemCoursesSection() {
  return (
    <section id="courses" className="bg-bg-white scroll-mt-16 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="3つのコース（できること）"
          lines={["「どこまでお店仕様にするか」で選べる、", "わかりやすい3つのコース。"]}
          lead={[
            "まずは写真と図でイメージを掴んでみてください。完成後の製造単価はどのコースも同じ据え置き価格です。",
          ]}
          align="center"
        />

        {/* ── LEVEL 1：写真＋足し算図解で3秒理解できる3カード ── */}
        <div className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-3">
          {VISUAL_COURSES.map((course, idx) => (
            <motion.article
              key={course.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col overflow-hidden rounded-3xl border transition-shadow hover:shadow-md ${
                course.highlight
                  ? "border-brand/45 bg-[#faf8f4] shadow-sm"
                  : "border-gray-200 bg-white shadow-2xs"
              }`}
            >
              {/* コース写真 ＋ 価格ビッグバッジ */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                  src={course.image}
                  alt={course.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 rounded-full bg-black/70 px-3 py-1 font-mono text-[11px] font-bold tracking-wider text-white backdrop-blur-xs">
                  {course.stepTag}
                </div>
                <div className="absolute right-3 bottom-3 rounded-2xl bg-white/95 px-3.5 py-2 text-right shadow-md backdrop-blur-xs">
                  <p className="text-brand text-base leading-none font-bold sm:text-lg">
                    {course.feeBadge}
                  </p>
                  <p className="text-ink-muted mt-0.5 text-[10px]">{course.feeSub}</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-ink text-lg leading-snug font-bold sm:text-[19px]">
                  {course.title}
                </h3>
                <p className="text-ink-light mt-1.5 text-xs leading-relaxed sm:text-[13px]">
                  {course.oneLiner}
                </p>

                {/* 直感ブロック図解（A ＋ B ＝ 完成） */}
                <div className="mt-4 rounded-2xl bg-[#f4f1ea] p-3.5">
                  <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-1.5 text-center">
                    <div className="rounded-xl bg-white px-2 py-2.5 shadow-2xs">
                      <span className="text-ink-muted block text-[10px]">{course.leftBox.sub}</span>
                      <span className="text-ink mt-0.5 block text-xs font-bold">
                        {course.leftBox.label}
                      </span>
                    </div>

                    <span className="bg-brand flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white">
                      {course.operator === "+" ? (
                        <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                      ) : (
                        "×"
                      )}
                    </span>

                    <div className="border-brand/30 rounded-xl border bg-white px-2 py-2.5 shadow-2xs">
                      <span className="text-brand block text-[10px] font-bold">
                        {course.rightBox.sub}
                      </span>
                      <span className="text-ink mt-0.5 block text-xs font-bold">
                        {course.rightBox.label}
                      </span>
                    </div>
                  </div>

                  <div className="bg-brand mt-2.5 flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold text-white">
                    <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>{course.resultLabel}</span>
                  </div>
                </div>

                {/* 対応容器ピル */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {course.formats.map((f) => (
                    <span
                      key={f.label}
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold ${
                        f.active ? "bg-brand/10 text-brand" : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {f.active && <Check className="h-3 w-3" aria-hidden="true" />}
                      {f.label}
                    </span>
                  ))}
                </div>

                {/* LEVEL 3：読み込む人向けの段階開示アコーディオン */}
                <details className="group mt-5 border-t border-gray-200/80 pt-3.5">
                  <summary className="text-brand flex cursor-pointer list-none items-center justify-between text-xs font-bold [&::-webkit-details-marker]:hidden">
                    <span>くわしい条件・特徴を見る</span>
                    <span className="transition-transform duration-200 group-open:rotate-180">
                      ▾
                    </span>
                  </summary>
                  <ul className="text-ink-light mt-3 space-y-2 text-xs leading-relaxed">
                    {course.details.map((pt) => (
                      <CheckItem key={pt}>{pt}</CheckItem>
                    ))}
                  </ul>
                </details>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ── LEVEL 2：一目で比較できる早見マトリクス表 ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xs"
        >
          <div className="bg-[#f7f3ec] px-6 py-4">
            <h3 className="text-ink text-center text-base font-bold sm:text-lg">
              3コース ひと目比較表
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[580px] border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/70 text-gray-600">
                  <th className="w-1/4 px-5 py-3.5 font-bold">比較項目</th>
                  <th className="w-1/4 px-4 py-3.5 font-bold">① 既存味＋シール</th>
                  <th className="w-1/4 px-4 py-3.5 font-bold">② ベース＋粉末具材</th>
                  <th className="bg-brand/5 text-brand w-1/4 px-4 py-3.5 font-bold">
                    ③ 専用ベース開発
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="text-ink px-5 py-3.5 font-bold">初期の試作・開発費</td>
                  <td className="px-4 py-3.5 font-bold">¥0</td>
                  <td className="px-4 py-3.5 font-bold">税別 ¥10,000 ＋実費</td>
                  <td className="bg-brand/5 text-brand px-4 py-3.5 font-bold">
                    税別 ¥30,000 ＋実費
                  </td>
                </tr>
                <tr>
                  <td className="text-ink px-5 py-3.5 font-bold">使えるお店の素材</td>
                  <td className="text-ink-muted px-4 py-3.5">なし（ふたシールのみ）</td>
                  <td className="px-4 py-3.5">茶葉粉・珈琲粉・スパイス・固形具材</td>
                  <td className="bg-brand/5 px-4 py-3.5 font-bold">
                    果物・果汁・ピューレ・酒粕など全般
                  </td>
                </tr>
                <tr>
                  <td className="text-ink px-5 py-3.5 font-bold">個食カップ（60個〜）</td>
                  <td className="px-4 py-3.5 font-bold text-emerald-700">● 税込 ¥309 / 個</td>
                  <td className="px-4 py-3.5 font-bold text-emerald-700">● 税込 ¥309 / 個</td>
                  <td className="bg-brand/5 px-4 py-3.5 font-bold text-emerald-700">
                    ● 税込 ¥309 / 個
                  </td>
                </tr>
                <tr>
                  <td className="text-ink px-5 py-3.5 font-bold">2Lバルク（6L〜）</td>
                  <td className="text-ink-muted px-4 py-3.5">定番卸（4L〜）で対応</td>
                  <td className="px-4 py-3.5 font-bold text-emerald-700">● 税別 ¥4,000 / 2L</td>
                  <td className="bg-brand/5 px-4 py-3.5 font-bold text-emerald-700">
                    ● 税別 ¥4,000 / 2L
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* ── 選べる2つの納品スタイル（カップ vs バルク）＋ シール15円引き図解 ── */}
        <div className="mt-14 rounded-3xl bg-[#f7f3ec] p-6 sm:p-10">
          <div className="text-center">
            <p className="text-brand text-xs font-bold tracking-wide">本製造の価格とロット</p>
            <h3 className="text-ink mt-1 text-xl font-bold sm:text-2xl">
              完成後の製造単価は、定番卸と同じ「据え置き」です
            </h3>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* カップ */}
            <div className="overflow-hidden rounded-3xl bg-white shadow-2xs">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/images/gelato_cup_tower.jpg"
                  alt="100ml個食カップ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3.5 py-1 text-xs font-bold text-gray-800 shadow-2xs">
                  物販・お土産・ECギフトに
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="text-ink text-lg font-bold">100ml 個食カップ</h4>
                  <span className="text-brand text-2xl font-bold">
                    税込 ¥{PRICING_CONSTANTS.cupOemPriceTaxIncl}
                    <span className="text-ink-muted text-xs font-normal">／個</span>
                  </span>
                </div>

                {/* シール15円引きの視覚バー */}
                <div className="mt-3 flex flex-wrap items-center gap-1.5 rounded-xl bg-[#faf8f4] px-3 py-2 text-xs">
                  <Tag className="text-brand h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span className="text-ink-muted line-through">基準 税込¥324</span>
                  <span>→</span>
                  <span className="text-brand font-bold">天面シールご支給で 税込15円OFF</span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2.5 text-center text-xs">
                  <div className="rounded-xl border border-gray-100 bg-gray-50/70 p-2.5">
                    <span className="text-ink-muted block text-[11px]">最小ロット</span>
                    <span className="text-ink mt-0.5 block font-bold">1味 60個〜</span>
                  </div>
                  <div className="border-brand/25 bg-brand/5 rounded-xl border p-2.5">
                    <span className="text-brand block text-[11px] font-bold">
                      おススメ（送料半減）
                    </span>
                    <span className="text-brand mt-0.5 block font-bold">120個（1箱ぴったり）</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2Lバルク */}
            <div className="overflow-hidden rounded-3xl bg-white shadow-2xs">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/images/bulk_2l.jpg"
                  alt="2L業務用バルク"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3.5 py-1 text-xs font-bold text-gray-800 shadow-2xs">
                  店内デザート皿盛り・パフェに
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="text-ink text-lg font-bold">業務用 2L角型バルク</h4>
                  <span className="text-brand text-2xl font-bold">
                    税別 ¥{PRICING_CONSTANTS.bulk2LPriceExTax.toLocaleString("ja-JP")}
                    <span className="text-ink-muted text-xs font-normal">／2L</span>
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-1.5 rounded-xl bg-[#faf8f4] px-3 py-2 text-xs">
                  <Sparkles className="text-brand h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span className="text-ink-light">
                    シール手配不要・1本から<strong>約24〜40皿</strong>取れて高粗利
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2.5 text-center text-xs">
                  <div className="rounded-xl border border-gray-100 bg-gray-50/70 p-2.5">
                    <span className="text-ink-muted block text-[11px]">最小ロット</span>
                    <span className="text-ink mt-0.5 block font-bold">6L（2L×3本）〜</span>
                  </div>
                  <div className="border-brand/25 bg-brand/5 rounded-xl border p-2.5">
                    <span className="text-brand block text-[11px] font-bold">
                      おススメ（1箱集約）
                    </span>
                    <span className="text-brand mt-0.5 block font-bold">12L（2L×6本）</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 詳細ルールは折りたたみにして見た目を軽やかに保つ */}
          <details className="group mt-6 rounded-2xl bg-white px-5 py-4">
            <summary className="text-ink flex cursor-pointer list-none items-center justify-between text-xs font-bold sm:text-sm [&::-webkit-details-marker]:hidden">
              <span className="flex items-center gap-2">
                <FileSpreadsheet className="text-brand h-4 w-4 shrink-0" aria-hidden="true" />
                シールの入稿データ・お預かりできる素材・レシピの扱いについて詳しく見る
              </span>
              <span className="text-brand transition-transform duration-200 group-open:rotate-180">
                ▾
              </span>
            </summary>
            <div className="mt-4 grid grid-cols-1 gap-4 border-t border-gray-100 pt-4 text-xs leading-relaxed sm:grid-cols-3">
              <div>
                <p className="text-ink font-bold">天面シールと法定表示</p>
                <p className="text-ink-light mt-1">
                  入稿用テンプレートと推奨耐水紙のご案内をWebからお渡しします。底面の法定一括表示ラベルは当社にて印字・貼付いたします。
                </p>
              </div>
              <div>
                <p className="text-ink flex items-center gap-1 font-bold">
                  <ShieldAlert className="text-brand h-3.5 w-3.5" aria-hidden="true" />
                  素材のアレルゲン条件
                </p>
                <p className="text-ink-light mt-1">
                  専用工房のため、<strong>卵・乳・小麦を含まない素材（加工ライン混入なし）</strong>
                  に限ります。主役素材は無償ご支給、当社仕入れが必要な場合は別途お見積りとなります。
                </p>
              </div>
              <div>
                <p className="text-ink font-bold">レシピの権利と専属契約</p>
                <p className="text-ink-light mt-1">
                  手頃な試作費でお受けするため配合・製法の権利は当社に帰属し、知見を当社商品等に活かす場合がございます（ご支給素材や屋号の無断使用はいたしません。専属ロック契約も別途ご相談可能です）。
                </p>
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
