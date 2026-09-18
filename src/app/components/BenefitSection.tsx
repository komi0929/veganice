"use client";

import { motion } from "framer-motion";
import { IceCreamCone, ShieldCheck, PackageCheck } from "lucide-react";

const benefits = [
  {
    icon: IceCreamCone,
    title: "届いたら、すぐ提供できます",
    body: "冷凍庫から出してディッシャーですくうだけ。仕込みも調理も不要で、既存メニューにすぐ一品加えられます。",
  },
  {
    icon: ShieldCheck,
    title: "アレルギー対応も、安心です",
    body: "乳・卵・小麦・白砂糖不使用。コンタミネーションなしの環境で製造しています。",
  },
  {
    icon: PackageCheck,
    title: "4Lの小ロットから仕入れ可能",
    body: "最小ロットは4リットル分。大量仕入れの必要はありません。こだわりのあるお店にこそ、使っていただきたい。",
  },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const, delay },
  }),
};

export default function BenefitSection() {
  return (
    <section id="benefits" className="bg-bg-white overflow-hidden py-20 md:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── ヘッダー ── */}
        <div className="mb-16 text-center md:mb-20">
          <motion.p
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-brand mb-4 font-sans text-sm tracking-[0.2em] uppercase"
          >
            Reasons
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-ink font-serif text-3xl leading-relaxed font-bold md:text-4xl lg:text-[2.6rem]"
          >
            選ばれる理由
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-ink-light mx-auto mt-6 max-w-2xl text-base leading-relaxed md:text-lg"
          >
            食の制限がある方もない方も、みんなで同じ美味しさを共有できる喜びを。
            <br className="hidden md:block" />
            ヴィーガン米粉アイスが、あなたのお店のメニューに新しい価値を加えます。
          </motion.p>
        </div>

        {/* ── ベネフィット ── */}
        <div className="relative mx-auto max-w-5xl">
          {/* Connecting line — desktop */}
          <div className="absolute top-[36px] right-[16%] left-[16%] z-0 hidden h-px bg-gray-200 md:block" />

          <div className="relative z-10 flex flex-col justify-between gap-16 md:flex-row md:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  custom={index * 0.15 + 0.3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className="group flex flex-1 flex-col items-center text-center"
                >
                  <div className="group-hover:border-brand/40 mb-8 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-gray-200 bg-white transition-all duration-300 hover:scale-105">
                    <Icon size={28} strokeWidth={1.5} className="text-brand" />
                  </div>

                  <h3 className="text-ink mb-4 font-serif text-xl leading-snug font-bold md:text-2xl">
                    {benefit.title}
                  </h3>
                  <p className="text-ink-light max-w-[280px] text-base leading-relaxed">
                    {benefit.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── 希少性 & CTA ── */}
        <motion.div
          variants={fadeUp}
          custom={0.6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-ink-muted mb-8 text-sm md:text-base">
            手づくり少量生産のため、月の製造数には限りがあります。
          </p>
          <a
            href="#contact-form"
            className="bg-cta hover:bg-cta-hover inline-block rounded-full px-10 py-4 text-base font-bold text-white shadow-sm transition-all hover:shadow-md md:text-lg"
          >
            まず味見してみる
          </a>
        </motion.div>
      </div>
    </section>
  );
}
