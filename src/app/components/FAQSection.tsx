"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "ヴィーガンでないお客様にも喜ばれますか？",
    a: "はい。薬院のお店では「こっちのアイスのほうが好き」とおっしゃるノンビーガンのお客様が多数いらっしゃいます。米粉を使った独自の製法で、植物性とは思えないなめらかさとコクを実現しており、HappyCow 5.0・Googleレビュー200件超という評価がその証拠です。",
  },
  {
    q: "アレルゲン対応の詳細を教えてください",
    a: "全商品、乳・卵・小麦・白砂糖不使用です。乳化安定剤・増粘剤・着色料も使用していません。乳・卵・小麦を一切扱わない専用の製造ラインで製造しており、コンタミネーション（混入）のリスクがありません。大豆を使用しておりますので、大豆アレルギーの方はご注意ください。",
  },
  {
    q: "最小ロットと発注単位は？",
    a: "最小4リットル分（1L×4本 または 2L×2本）からご注文いただけます。フレーバーは8種から自由に組み合わせ可能です。大量でなくてもお気軽にご相談ください。",
  },
  {
    q: "保管条件を教えてください",
    a: "−18℃以下で冷凍保存してください。冷凍食品であるため、食品表示基準上、賞味期限の表示義務がありません。適切な温度管理のもとでは品質が長期間維持され、廃棄ロスの心配がありません。",
  },
  {
    q: "注文から届くまでどのくらいですか？",
    a: "ご注文確定後、通常5営業日以内にクール冷凍便（ヤマト運輸）で全国発送いたします。初回のサンプルご注文もお気軽にどうぞ。",
  },
  {
    q: "支払い方法は？",
    a: "銀行振込でのお支払いに対応しております。継続的なお取引の場合は、請求書払い（月末締め翌月払い等）もご相談いただけます。",
  },
  {
    q: "メニュー提案やPOP素材のサポートはありますか？",
    a: "はい、導入店舗様にはメニュー記載例やPOP素材のご提供もご相談いただけます。「ヴィーガン対応」「乳・卵・小麦不使用」等の訴求ポイントを活かしたご提案をいたします。",
  },
  {
    q: "OEMや専用フレーバーの開発は可能ですか？",
    a: "ご相談いただけます。お店のコンセプトに合わせたオリジナルフレーバーの開発や、専用パッケージでのOEM製造もお問い合わせください。",
  },
  {
    q: "夏以外にクラフトアイスは売れますか？",
    a: "はい、通年で売れます。薬院のお店では冬場でもデザートの注文率はほぼ変わりません。和食コースの口直し、ディナーの〆、バレンタイン・クリスマスなど特別な日のデザートとして、季節に合ったフレーバー（秋のほうじ茶、冬の濃厚抹茶など）を提案することで、むしろ「特別感」が増します。",
  },
  {
    q: "メニューにはどう記載すればいいですか？",
    a: "たとえば「クラフトアイス（乳・卵・小麦不使用）¥○○○」のように、アレルギー対応であることを明記するのがおすすめです。「プラントベース」「クラフトアイス」といった表現も効果的です。導入店舗様にはメニュー記載例のテンプレートもご提供しています。",
  },
  {
    q: "お客様にどう説明すればいいですか？",
    a: "「植物性の素材だけで作った、濃厚な手づくりクラフトアイスです。乳製品・卵・小麦を使っていないので、アレルギーの方も安心してお召し上がりいただけます」——これだけで十分です。「ヴィーガン」という言葉に馴染みのないお客様には「植物性」「プラントベース」がおすすめです。",
  },
  {
    q: "導入して売れなかった場合のリスクは？",
    a: "リスクは極めて小さいです。最小ロットは4Lから、冷凍保存で廃棄ロスはゼロ。売れなければ次回の発注を控えるだけです。初期投資もゼロなので、「まず試してみる」が可能な仕組みになっています。",
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
            className="text-ink font-serif text-2xl sm:text-3xl md:text-4xl"
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
