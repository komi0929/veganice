"use client";

import { motion } from "framer-motion";
import { Package, ClipboardList, UtensilsCrossed } from "lucide-react";
import Link from "next/link";

export default function DessertHowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "食後デザート用サンプルをお試し",
      description:
        "下のフォームからお気軽にお申し込みください。おすすめフレーバー6種をサンプルとしてお届けします（商品代無料・ヤマト運輸クール冷凍便送料着払い）。実際の厨房で、ラーメンやバーガーとの相性・後味・ディッシャーの通りをご確認いただけます。",
      icon: <Package className="text-brand h-8 w-8" />,
    },
    {
      number: "02",
      title: "フレーバー・サイズを決定",
      description:
        "8種類から貴店のメニューに合わせて自由に組み合わせ。冷凍庫のスペースに応じて1Lまたは2Lをお選びいただけます。最小ロットは4L（2L×2個 または 1L×4個）から、少量発注が可能です。",
      icon: <ClipboardList className="text-brand h-8 w-8" />,
    },
    {
      number: "03",
      title: "届いたその日から、食後メニューに",
      description:
        "ヤマト運輸クール冷凍便で全国発送。届いたその日から「食後のミニデザート」やセットメニューとして即座に提供開始いただけます。専用機材や仕込み作業は一切不要です。",
      icon: <UtensilsCrossed className="text-brand h-8 w-8" />,
    },
  ];

  return (
    <section id="flow" className="bg-bg relative overflow-hidden py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 md:text-center"
        >
          <span className="text-brand mb-3 block text-sm font-semibold tracking-widest uppercase">
            Simple 3 Steps
          </span>
          <h2 className="text-ink font-serif text-2xl font-bold sm:text-3xl md:text-5xl">
            導入までの流れ
          </h2>
          <p className="text-ink-light mx-auto mt-4 max-w-xl text-sm sm:text-base">
            初期費用・導入コストはゼロ。サンプルの確認から最短5営業日でメニュー化いただけます。
          </p>
        </motion.div>

        <div className="relative mb-20">
          {/* Connecting line for desktop */}
          <div className="bg-brand/20 absolute top-12 right-[15%] left-[15%] z-0 hidden h-0.5 md:block" />

          <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-bg relative flex flex-col items-center px-4 text-center"
              >
                <div className="border-brand/20 relative z-10 mb-6 flex h-20 w-20 flex-col items-center justify-center rounded-full border bg-white shadow-md sm:h-24 sm:w-24">
                  <span className="text-brand/60 mb-0.5 block font-serif text-xs font-bold sm:text-sm">
                    {step.number}
                  </span>
                  {step.icon}
                </div>
                <h3 className="text-ink mb-3 font-serif text-lg font-bold sm:text-xl">
                  {step.title}
                </h3>
                <p className="text-ink-light font-sans text-xs leading-relaxed sm:text-sm md:text-base">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="#contact-form"
            className="bg-cta hover:bg-cta-hover inline-block transform rounded-full px-10 py-4 font-bold text-white shadow-lg transition-colors duration-200 hover:-translate-y-1 hover:shadow-xl md:text-lg"
          >
            食後デザート用サンプルを申し込む（無料）
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
