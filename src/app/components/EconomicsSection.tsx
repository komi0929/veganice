"use client";

import { motion } from "framer-motion";
import { Calculator, Percent, TrendingUp, Utensils, RefreshCcw } from "lucide-react";

export default function EconomicsSection() {
  const stats = [
    {
      label: "1スクープ（約90ml）原価目安",
      value: "約100〜130円",
      icon: <Calculator className="text-brand h-6 w-6" />,
    },
    {
      label: "想定メニュー価格",
      value: "650〜900円",
      icon: <TrendingUp className="text-brand h-6 w-6" />,
    },
    {
      label: "想定粗利率",
      value: "約80〜85%",
      icon: <Percent className="text-brand h-6 w-6" />,
    },
    {
      label: "1Lあたり提供杯数",
      value: "約10〜12杯",
      icon: <Utensils className="text-brand h-6 w-6" />,
    },
    {
      label: "廃棄ロス",
      value: "実質ゼロ（冷凍長期保存）",
      icon: <RefreshCcw className="text-brand h-6 w-6" />,
    },
  ];

  return (
    <section className="bg-bg-white relative overflow-hidden py-24">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-brand mb-4 block text-sm font-semibold tracking-widest uppercase">
            Economics
          </span>
          <h2 className="text-ink mb-6 font-serif text-3xl md:text-5xl">
            高単価デザートの新定番。
          </h2>
          <p className="text-ink-light mx-auto max-w-2xl font-sans text-lg md:text-xl">
            原価率15%以下で、メニューの収益性を変える。
          </p>
        </motion.div>

        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bg border-brand/10 flex flex-col items-center rounded-2xl border p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                {stat.icon}
              </div>
              <p className="text-ink-muted mb-3 text-sm font-medium">{stat.label}</p>
              <p className="text-ink font-serif text-2xl">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-brand/5 mx-auto max-w-3xl rounded-2xl p-8 text-center md:p-10"
        >
          <p className="text-ink-light mb-4 text-left font-sans leading-relaxed md:text-center">
            冷凍保存で廃棄ロスはほぼゼロ。
            <br className="hidden md:block" />
            生菓子やケーキと違い、注文が入ったときだけすくえばいい。
            <br className="hidden md:block" />
            仕込みの人件費もかからない、高利益率のデザートメニューです。
          </p>
          <p className="text-ink-muted text-left text-xs md:text-center">
            ※ 上記は目安です。詳しくはお問い合わせください。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
