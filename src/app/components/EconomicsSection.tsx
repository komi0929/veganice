"use client";

import { motion } from "framer-motion";
import { RefreshCcw, Wind, TrendingUp, Users } from "lucide-react";

const valuePoints = [
  {
    icon: <TrendingUp className="text-brand h-6 w-6" />,
    title: "メニューの「顔」になれるデザート",
    body: "「このクラフトアイス、美味しいね！」——ひとくちの感動が自然と会話を生み、お客様の思い出に残る。そんな、お店の誇りになるようなデザートをお届けします。",
  },
  {
    icon: <Users className="text-brand h-6 w-6" />,
    title: "「食べられないものがある」を、なくす",
    body: "アレルギーのある方も、そうでない方も。ヴィーガンの方も、お肉好きの方も。メニューを前に「これは大丈夫？」と確認しなくていい——そんな安心を、ひと皿のデザートから。",
  },
  {
    icon: <RefreshCcw className="text-brand h-6 w-6" />,
    title: "お店のフードロスを、すこしでも減らす",
    body: "冷凍でお届けするため、賞味期限を気にして廃棄する必要はありません。ご注文をいただいた分だけ、大切にすくってお出しいただけます。",
  },
  {
    icon: <Wind className="text-brand h-6 w-6" />,
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
          className="mb-16 text-center"
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
              <div className="bg-brand/5 mb-5 flex h-12 w-12 items-center justify-center rounded-xl">
                {point.icon}
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
