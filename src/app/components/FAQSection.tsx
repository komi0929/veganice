"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "賞味期限はどのくらいですか？",
    a: "製造日より6ヶ月間です（冷凍保存 -18℃以下）。冷凍保管のため、フードロスの心配がありません。"
  },
  {
    q: "非ヴィーガンのお客様が食べても美味しいですか？",
    a: "はい、多くの非ヴィーガンのお客様にも『普通のジェラートより美味しい』とご好評いただいています。白みそや甘酒などの日本の伝統発酵食材が、植物性とは思えないコクと深みを実現しています。"
  },
  {
    q: "アレルギー対応の詳細を教えてください",
    a: "全商品、乳・卵・小麦・白砂糖不使用です。大豆を使用しておりますので、大豆アレルギーの方はご注意ください。専用工場で製造しており、コンタミネーション対策を徹底しています。"
  },
  {
    q: "最小ロットはどのくらいですか？",
    a: "1バット（2リットル）からご注文いただけます。まずは少量からお試しいただき、お客様の反応を見ながら発注量を調整していただけます。"
  },
  {
    q: "配送エリアと送料について教えてください",
    a: "ヤマト運輸のクール冷凍便で全国配送に対応しております。送料は地域・数量により異なりますので、お気軽にお問い合わせください。"
  },
  {
    q: "メニュー提案やPOP素材のサポートはありますか？",
    a: "はい、導入店舗様には、メニュー提案書・多言語POP素材（日本語・英語）・SNS用素材などを無料でご提供しています。"
  }
];

function FAQItem({ q, a }: { q: string, a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-lg font-bold text-[#2D3A3A] pr-8">{q}</span>
        <span className={`text-[#C67C3E] text-2xl transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-600 leading-relaxed pr-8">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-serif text-[#2D3A3A] sm:text-4xl"
          >
            よくあるご質問
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600"
          >
            導入をご検討中の方からよくいただくご質問
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#FDFBF7] rounded-2xl p-6 md:p-10 shadow-sm"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} q={faq.q} a={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
