"use client";

import { motion } from "framer-motion";
import { Package, ClipboardList, UtensilsCrossed } from "lucide-react";
import Link from "next/link";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "サンプルでお試し",
      description:
        "下のフォームからお申し込みください。実際のフレーバーをサンプルとしてお届けします。厨房で味・食感・ディッシャーの扱いやすさをお確かめください。",
      icon: <Package className="text-brand h-8 w-8" />,
    },
    {
      number: "02",
      title: "フレーバー・数量を決定",
      description:
        "8種から自由に組み合わせ。季節のおすすめもご提案します。最小4L（2L×2本）から、お店のペースに合わせて。",
      icon: <ClipboardList className="text-brand h-8 w-8" />,
    },
    {
      number: "03",
      title: "届いたその日から、メニューに",
      description:
        "クール冷凍便で全国配送。届いたその日からメニューに加えられます。POP素材・メニュー記載のご提案もサポートします。",
      icon: <UtensilsCrossed className="text-brand h-8 w-8" />,
    },
  ];

  return (
    <section className="bg-bg relative overflow-hidden py-24">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 md:text-center"
        >
          <span className="text-brand mb-4 block text-sm font-semibold tracking-widest uppercase">
            How It Works
          </span>
          <h2 className="text-ink font-serif text-2xl sm:text-3xl md:text-5xl">
            導入は、かんたん3ステップ
          </h2>
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
                <div className="border-brand/10 relative z-10 mb-8 flex h-24 w-24 flex-col items-center justify-center rounded-full border bg-white shadow-md">
                  <span className="text-brand/50 mb-1 block font-serif text-sm font-bold">
                    {step.number}
                  </span>
                  {step.icon}
                </div>
                <h3 className="text-ink mb-4 font-serif text-xl">{step.title}</h3>
                <p className="text-ink-light font-sans text-sm leading-relaxed md:text-base">
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
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="#contact-form"
            className="bg-cta hover:bg-cta-hover inline-block transform rounded-full px-10 py-4 font-medium text-white shadow-lg transition-colors duration-200 hover:-translate-y-1 hover:shadow-xl"
          >
            今すぐサンプルを申し込む
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
