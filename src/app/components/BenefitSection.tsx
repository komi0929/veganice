"use client";

import { motion } from "framer-motion";

/* 手描き風SVGアイコン */
const SnowflakeIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand"
  >
    <line x1="16" y1="4" x2="16" y2="28" />
    <line x1="4" y1="16" x2="28" y2="16" />
    <line x1="8" y1="8" x2="24" y2="24" />
    <line x1="24" y1="8" x2="8" y2="24" />
    <circle cx="16" cy="16" r="3" strokeWidth="1" />
  </svg>
);

const SparkleIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand"
  >
    <path d="M16 4 C16 4 18 12 16 16 C14 12 16 4 16 4Z" fill="currentColor" opacity="0.15" />
    <path d="M16 28 C16 28 14 20 16 16 C18 20 16 28 16 28Z" fill="currentColor" opacity="0.15" />
    <path d="M4 16 C4 16 12 14 16 16 C12 18 4 16 4 16Z" fill="currentColor" opacity="0.15" />
    <path d="M28 16 C28 16 20 18 16 16 C20 14 28 16 28 16Z" fill="currentColor" opacity="0.15" />
    <path d="M16 2L16 30M2 16L30 16" strokeWidth="0.8" />
    <circle cx="16" cy="16" r="2" fill="currentColor" opacity="0.3" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand"
  >
    <path d="M16 3L5 8V15C5 22 10 27.5 16 29C22 27.5 27 22 27 15V8L16 3Z" />
    <path d="M11 16L14.5 19.5L21 13" />
  </svg>
);

const benefits = [
  {
    icon: SnowflakeIcon,
    title: "最後の一杯まで、なめらかに。",
    body: "米粉のもつ自然な保水力で、業務用サイズでもふんわりとした食感を保ちます。ディッシャーの抜けもよく、冷凍庫から出してすぐにお客様へお届けできます。",
  },
  {
    icon: SparkleIcon,
    title: "「これ、本当に植物性なの？」と驚かれる味。",
    body: "薬院のお店にいらっしゃるお客様の8割は、アレルギーのない方やノンビーガンの方です。どなたが食べても「美味しい」と思っていただけるよう、素材の風味を大切にしています。",
  },
  {
    icon: ShieldIcon,
    title: "「大丈夫ですよ」と、笑顔で言えるように。",
    body: "乳・卵・小麦を一切扱わない専用の工房で、ひとつひとつ丁寧につくっています。コンタミネーションの心配がないので、安心してテーブルへ運んでいただけます。",
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
        <div className="mb-12 md:mb-20 md:text-center">
          <motion.p
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-brand mb-4 font-sans text-sm tracking-[0.2em] uppercase"
          >
            Our Philosophy
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-ink font-serif text-2xl leading-relaxed font-bold sm:text-3xl md:text-4xl lg:text-[2.6rem]"
          >
            素材の力が、厨房の悩みをやさしく解く。
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-ink-light mx-auto mt-6 max-w-2xl text-base leading-relaxed md:text-lg"
          >
            お米と豆乳。たった2つの素材が、たくさんのことを解決してくれました。
            <br className="hidden md:block" />
            私たちが「米粉」と「豆乳」にこだわる3つの理由です。
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
                  className="group flex flex-1 flex-col items-start text-left md:items-center md:text-center"
                >
                  <div className="border-brand/20 mb-8 flex h-[72px] w-[72px] items-center justify-center rounded-full border bg-white transition-all duration-300 group-hover:scale-105">
                    <Icon />
                  </div>

                  <h3 className="text-ink mb-4 font-serif text-xl leading-snug font-bold md:text-2xl">
                    {benefit.title}
                  </h3>
                  <p className="text-ink-light max-w-[300px] text-base leading-relaxed">
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
          className="mt-20 flex flex-col items-center gap-8"
        >
          <div className="bg-brand/5 border-brand/20 inline-flex items-center gap-3 rounded-full border px-6 py-3">
            <span className="text-brand text-lg" aria-hidden="true">
              ◆
            </span>
            <p className="text-ink text-sm font-medium md:text-base">
              ひとつひとつ手づくりのため、毎月お届けできる数には限りがございます。
            </p>
          </div>
          <a
            href="#contact-form"
            className="bg-cta hover:bg-cta-hover inline-block rounded-full px-10 py-4 text-base font-bold text-white shadow-sm transition-all hover:shadow-md md:text-lg"
          >
            まずは少しだけ、味見してみる
          </a>
        </motion.div>
      </div>
    </section>
  );
}
