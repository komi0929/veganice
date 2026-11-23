"use client";

import { motion } from "framer-motion";
import { MessageSquareText, FlaskConical, FileCheck2, Truck, ArrowRight } from "lucide-react";

const TIMELINE_STEPS = [
  {
    week: "第1週",
    duration: "3〜5日",
    icon: MessageSquareText,
    title: "ヒアリング・3方向提案",
    shortDesc: "素材を伺い、試作前に3つの味の方向性をご提案します。",
  },
  {
    week: "第2週",
    duration: "7〜10営業日",
    icon: FlaskConical,
    title: "A/B 2種食べ比べ試作",
    shortDesc: "配合を変えた「2種×各3個（計6個）」を冷凍便でお届けします。",
  },
  {
    week: "第3週",
    duration: "5〜7日",
    icon: FileCheck2,
    title: "味決定・シールご納品",
    shortDesc: "表示確定。カップは.ai型紙で制作した丸シールをご支給（バルク不要）。",
  },
  {
    week: "第4週",
    duration: "7〜10営業日",
    icon: Truck,
    title: "専用工房で本製造・納品",
    shortDesc: "クール冷凍便で発送。2回目以降は発注ページから追加注文OK。",
  },
];

export default function OemTimelineSection() {
  return (
    <section id="timeline" className="bg-bg-white scroll-mt-16 py-12 sm:py-18">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-brand mb-1.5 text-xs font-bold tracking-wide">お届けまでの流れ</p>
          <h2 className="text-ink text-2xl leading-snug font-bold tracking-tight sm:text-3xl">
            最短約1か月で、オリジナルアイスがお手元に。
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3.5 md:grid-cols-4 md:gap-4">
          {TIMELINE_STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.week}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative flex flex-col rounded-2xl border border-gray-200/90 bg-[#faf8f4] p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="bg-brand rounded-full px-3 py-0.5 text-xs font-bold text-white">
                    {item.week}
                  </span>
                  <span className="text-brand text-xs font-bold">目安 {item.duration}</span>
                </div>

                <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-2xs ring-1 ring-gray-200/70">
                  <Icon className="text-brand h-5 w-5" aria-hidden="true" />
                </div>

                <h3 className="text-ink mt-3 text-sm leading-snug font-bold sm:text-base">
                  {item.title}
                </h3>
                <p className="text-ink-light mt-1.5 text-xs leading-relaxed">{item.shortDesc}</p>

                {idx < TIMELINE_STEPS.length - 1 && (
                  <div
                    className="text-brand/40 absolute top-1/2 -right-3 z-10 hidden -translate-y-1/2 rounded-full bg-white p-1 shadow-2xs ring-1 ring-gray-200 md:flex"
                    aria-hidden="true"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* 初回試作6個セット図解（コンパクト横並び） */}
        <div className="mt-6 rounded-3xl border border-gray-200 bg-[#f7f3ec] p-5 sm:p-6">
          <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-12">
            <div className="grid grid-cols-2 gap-3 rounded-2xl bg-white p-4 shadow-2xs lg:col-span-5">
              <div className="border-brand/25 bg-brand/5 rounded-xl border p-2.5 text-center">
                <p className="text-brand text-xs font-bold">パターン A（3個）</p>
                <p className="text-ink-light mt-1 text-[11px]">例：素材感ストレート</p>
              </div>
              <div className="rounded-xl border border-amber-300/60 bg-amber-50/50 p-2.5 text-center">
                <p className="text-xs font-bold text-amber-900">パターン B（3個）</p>
                <p className="text-ink-light mt-1 text-[11px]">例：発酵コク深め</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-ink text-sm font-bold sm:text-base">
                「2種類×3個の食べ比べ」＋ 2回戦目まで追加開発費0円で調整OK
              </p>
              <p className="text-ink-light mt-1 text-xs leading-relaxed">
                都度の試作実費は材料費税別1,500円＋資材費税別200円＋60サイズ送料のみ（3回戦目以降は調整費税別5,000円＋実費。当社責の製造不良時は無償再試作）。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
