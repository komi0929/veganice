"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "非ヴィーガンのお客様が食べても美味しいですか？",
    a: "はい。実際に「こっちのアイスのほうが好き」とおっしゃるノンビーガンのお客様も多くいらっしゃいます。米粉を使った独自の製法で、植物性とは思えないなめらかさとコクを実現しています。",
  },
  {
    q: "アレルギー対応の詳細を教えてください",
    a: "全商品、乳・卵・小麦・白砂糖不使用です。乳化安定剤・増粘剤・着色料も使用していません。大豆を使用しておりますので、大豆アレルギーの方はご注意ください。",
  },
  {
    q: "卸売の最小ロットはどのくらいですか？",
    a: "最小4リットル分（1L×4または2L×2）からご注文いただけます。大量でなくてもお気軽にご相談ください。価格の詳細はお問い合わせフォームよりどうぞ。",
  },
  {
    q: "配送について教えてください",
    a: "クール冷凍便で全国配送に対応しております。詳細はお問い合わせください。",
  },
  {
    q: "メニュー提案やPOP素材のサポートはありますか？",
    a: "はい、導入店舗様にはメニュー提案やPOP素材のご提供もご相談いただけます。お気軽にお問い合わせください。",
  },
  {
    q: "オンラインストアでも購入できますか？",
    a: "はい、一般のお客様向けにはsoystories.comでアイスセットを販売しております。フレーバーを自由に選べるセットもご用意しています。",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="border-b border-gray-100 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center justify-between py-8 text-left focus:outline-none"
      >
        <span className="text-ink pr-8 font-sans text-base font-bold md:text-lg">{q}</span>
        <span
          className={`text-brand flex-shrink-0 transition-transform duration-300 ease-out ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown size={20} strokeWidth={1.5} />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" as const }}
            className="overflow-hidden"
          >
            <div className="text-ink-light pr-8 pb-8 font-sans text-sm leading-relaxed font-light md:text-base">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="bg-bg py-16 md:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="text-ink font-serif text-3xl sm:text-4xl"
          >
            よくいただくご質問
          </motion.h2>
        </div>

        <div className="w-full">
          {faqs.map((faq, index) => (
            <FAQItem key={index} q={faq.q} a={faq.a} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
