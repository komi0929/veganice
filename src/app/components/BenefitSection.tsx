"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    icon: "🍨",
    title: "Zero Prep — 仕込みゼロ",
    description:
      "届いた冷凍ジェラートをディッシャーですくうだけ。既存の和スイーツやコーヒーに添えるだけで、高単価メニューが即完成します。",
  },
  {
    icon: "🛡️",
    title: "No Contamination — 安心",
    description:
      "乳・卵・小麦の3大アレルゲン不使用。専用工場で製造しているため、コンタミネーションリスクがありません。",
  },
  {
    icon: "♻️",
    title: "No Food Loss — ロスゼロ",
    description:
      "冷凍保管のため、注文数がブレても廃棄リスクがありません。必要な分だけ、必要な時に。",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function BenefitSection() {
  return (
    <section id="benefits" className="py-24 bg-[#F8FAF8]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif text-[#2D3A3A] mb-4"
          >
            SoyStoriesで変わる、貴店のヴィーガン対応
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#4A5568] text-lg max-w-2xl mx-auto"
          >
            機能ではなく、導入後の現場の変化をお伝えします
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:-translate-y-2 hover:shadow-lg transition-all duration-300 relative group"
            >
              <div className="h-1.5 w-full bg-[#3E6044] absolute top-0 left-0" />
              <div className="p-8">
                <div className="text-5xl mb-6 bg-[#F8FAF8] w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2D3A3A] mb-4 font-serif">
                  {benefit.title}
                </h3>
                <p className="text-[#4A5568] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
