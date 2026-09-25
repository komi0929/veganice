"use client";

import { motion } from "framer-motion";

/* 手描き風SVGアイコン */
const StarIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand"
  >
    <path d="M12 2L14.5 9H22L16 13.5L18 21L12 16.5L6 21L8 13.5L2 9H9.5L12 2Z" />
  </svg>
);

const HandsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand"
  >
    <path d="M7 12C7 12 5 8 5 6C5 4 7 4 7 6C7 8 7 12 7 12Z" />
    <path d="M17 12C17 12 19 8 19 6C19 4 17 4 17 6C17 8 17 12 17 12Z" />
    <path d="M7 12C7 12 9 14 12 14C15 14 17 12 17 12" />
    <path d="M8 16C8 16 10 20 12 20C14 20 16 16 16 16" />
  </svg>
);

const CycleIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand"
  >
    <path d="M17 2L21 6L17 10" />
    <path d="M3 6H21" />
    <path d="M7 22L3 18L7 14" />
    <path d="M21 18H3" />
  </svg>
);

const SpoonIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand"
  >
    <path d="M12 3C8 3 5 5.5 5 9C5 12 8 13 12 13C16 13 19 12 19 9C19 5.5 16 3 12 3Z" />
    <line x1="12" y1="13" x2="12" y2="22" />
  </svg>
);

const valuePoints = [
  {
    icon: StarIcon,
    title: "メニューの「顔」になれるデザート",
    body: "「このクラフトアイス、美味しいね！」——ひとくちの感動が自然と会話を生み、お客様の思い出に残る。そんな、お店の誇りになるようなデザートをお届けします。",
  },
  {
    icon: HandsIcon,
    title: "「食べられないものがある」を、なくす",
    body: "アレルギーのある方も、そうでない方も。ヴィーガンの方も、お肉好きの方も。メニューを前に「これは大丈夫？」と確認しなくていい——そんな安心を、ひと皿のデザートから。",
  },
  {
    icon: CycleIcon,
    title: "お店のフードロスを、すこしでも減らす",
    body: "冷凍でお届けするため、賞味期限を気にして廃棄する必要はありません。ご注文をいただいた分だけ、大切にすくってお出しいただけます。",
  },
  {
    icon: SpoonIcon,
    title: "新しい機材や、難しい仕込みはいりません",
    body: "冷凍庫とディッシャーさえあれば、届いたその日からお店のメニューに。厨房のオペレーションを複雑にすることなく、新しい価値を添えられます。",
  },
];

export default function EconomicsSection() {
  return (
    <section id="value" className="bg-bg-white relative overflow-hidden py-24">
      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-12">
        {/* ── ヘッダー ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 md:text-center"
        >
          <span className="text-brand mb-4 block text-sm font-semibold tracking-widest uppercase">
            Value for you
          </span>
          <h2 className="text-ink mb-6 font-serif text-2xl sm:text-3xl md:text-5xl">
            ひとくちのデザートが、
            <br className="md:hidden" />
            お店とお客様をもっと繋ぐ。
          </h2>
          <p className="text-ink-light mx-auto max-w-2xl font-sans text-base leading-relaxed md:text-lg">
            クラフトアイスをきっかけに、
            <br className="hidden md:block" />
            あなたのお店の「思い遣り」が、お客様にそっと伝わりますように。
          </p>
        </motion.div>

        {/* ── バリューポイント ── */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {valuePoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="border-brand/20 mb-5 flex h-12 w-12 items-center justify-center rounded-xl border bg-white">
                <point.icon />
              </div>
              <h3 className="text-ink mb-3 font-serif text-lg font-bold">{point.title}</h3>
              <p className="text-ink-light text-sm leading-relaxed">{point.body}</p>
            </motion.div>
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <p className="text-ink-muted mb-6 text-sm">
            価格や納品のペースなど、お店のスタイルに合わせてご相談に乗ります。
          </p>
          <a
            href="#contact-form"
            className="bg-cta hover:bg-cta-hover inline-block rounded-full px-10 py-4 text-base font-bold text-white shadow-sm transition-all hover:shadow-md md:text-lg"
          >
            まずは気軽に相談してみる
          </a>
        </motion.div>
      </div>
    </section>
  );
}
