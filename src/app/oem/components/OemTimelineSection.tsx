"use client";

import { motion } from "framer-motion";
import { MessageSquareText, FlaskConical, FileCheck2, Truck, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/app/dessert/components/ui";

const TIMELINE_STEPS = [
  {
    week: "第1週",
    duration: "3〜5日",
    icon: MessageSquareText,
    title: "ヒアリング＆3方向ご提案",
    shortDesc:
      "フォームから素材を伺い、試作前に「3つの味の方向性」をご提案。1つに絞ってスタートします。",
  },
  {
    week: "第2週",
    duration: "7〜10営業日",
    icon: FlaskConical,
    title: "2パターン食べ比べ試作",
    shortDesc:
      "バランスを変えた「2種×各3個（計6個）」を冷凍便でお届け。比較できるから迷わず選べます。",
  },
  {
    week: "第3週",
    duration: "5〜7日",
    icon: FileCheck2,
    title: "味決定・シールご手配",
    shortDesc:
      "表示確認とWeb合意で確定。カップはテンプレでシール印刷手配（2Lバルクはシール不要）。",
  },
  {
    week: "第4週",
    duration: "7〜10営業日",
    icon: Truck,
    title: "専用工房で製造・納品",
    shortDesc: "1仕込みずつ丁寧に本製造しクール便で発送。2回目以降は専用ページから簡単追加注文。",
  },
];

/**
 * アイコン・プログレス矢印・『初回2種×3個食べ比べ箱』図解つきの直感タイムライン
 */
export default function OemTimelineSection() {
  return (
    <section id="timeline" className="bg-bg-white scroll-mt-16 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="お届けまでの流れ"
          lines={["最短約1か月で、", "オリジナルアイスがお手元に。"]}
          lead={[
            "印刷カップの長い待ち時間をなくし、旬の食材やイベントにも間に合うスピード感で進みます。",
          ]}
          align="center"
        />

        {/* 4ステップ ビジュアルフロー */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-5">
          {TIMELINE_STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.week}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="relative flex flex-col rounded-3xl border border-gray-200/90 bg-[#faf8f4] p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="bg-brand rounded-full px-3.5 py-1 text-xs font-bold text-white">
                    {item.week}
                  </span>
                  <span className="text-brand text-xs font-bold">目安 {item.duration}</span>
                </div>

                <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-2xs ring-1 ring-gray-200/70">
                  <Icon className="text-brand h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="text-ink mt-4 text-base leading-snug font-bold">{item.title}</h3>
                <p className="text-ink-light mt-2 text-xs leading-relaxed">{item.shortDesc}</p>

                {idx < TIMELINE_STEPS.length - 1 && (
                  <div
                    className="text-brand/40 absolute top-1/2 -right-3.5 z-10 hidden -translate-y-1/2 rounded-full bg-white p-1 shadow-2xs ring-1 ring-gray-200 md:flex"
                    aria-hidden="true"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* 図解で1秒理解：「初回試作 60サイズBOXの中身」＆「2回戦調整」 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 overflow-hidden rounded-3xl border border-gray-200 bg-[#f7f3ec] p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
            {/* 左：試作6個セットの視覚図解 */}
            <div className="rounded-2xl bg-white p-5 shadow-2xs lg:col-span-6">
              <div className="flex items-center justify-between">
                <span className="text-brand text-xs font-bold">
                  届く試作品のイメージ（60サイズ冷凍便）
                </span>
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-bold text-gray-700">
                  合計 6カップ入り
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="border-brand/25 bg-brand/5 rounded-2xl border p-3.5 text-center">
                  <p className="text-brand text-xs font-bold">パターン A（3個）</p>
                  <div className="mt-2 flex justify-center gap-1.5" aria-hidden="true">
                    {[1, 2, 3].map((n) => (
                      <span
                        key={n}
                        className="border-brand/40 flex h-9 w-9 items-center justify-center rounded-full border-2 bg-white text-[11px] font-bold text-[#3e6044] shadow-2xs"
                      >
                        A
                      </span>
                    ))}
                  </div>
                  <p className="text-ink-light mt-2 text-[11px]">例：素材感ストレート配合</p>
                </div>

                <div className="rounded-2xl border border-amber-300/60 bg-amber-50/50 p-3.5 text-center">
                  <p className="text-xs font-bold text-amber-900">パターン B（3個）</p>
                  <div className="mt-2 flex justify-center gap-1.5" aria-hidden="true">
                    {[1, 2, 3].map((n) => (
                      <span
                        key={n}
                        className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-amber-400/70 bg-white text-[11px] font-bold text-amber-900 shadow-2xs"
                      >
                        B
                      </span>
                    ))}
                  </div>
                  <p className="text-ink-light mt-2 text-[11px]">例：発酵コク深め配合</p>
                </div>
              </div>
            </div>

            {/* 右：安心のルール図解（短い箇条書き＋詳細は折りたたみ） */}
            <div className="space-y-3 lg:col-span-6">
              <h3 className="text-ink text-lg font-bold">
                「2種類を食べ比べられる」から、納得して決められます
              </h3>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-3.5">
                  <p className="text-brand text-xs font-bold">2回戦目まで基本試作費内</p>
                  <p className="text-ink-light mt-1 text-xs leading-relaxed">
                    5項目のタップ評価で簡単に回答でき、大幅な方向変更も2回戦目まで追加開発費0円で対応します。
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-3.5">
                  <p className="text-brand text-xs font-bold">当社責の不良は無償再試作</p>
                  <p className="text-ink-light mt-1 text-xs leading-relaxed">
                    事前合意からの著しい逸脱や製造不良があった場合は、回数を消費せず当社全額負担で作り直します。
                  </p>
                </div>
              </div>
              <p className="text-ink-muted text-[11.5px]">
                ※2回戦目の調整を行う場合は＋約2週間が目安です（都度の材料1,500円・資材200円・送料のみ実費。3回戦目以降は税別5,000円＋実費）。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
