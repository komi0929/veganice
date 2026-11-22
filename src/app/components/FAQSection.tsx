"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "ヴィーガンでないお客様にも喜ばれますか？",
    a: "はい。薬院のお店では「普通のアイスより好き」とおっしゃるノンヴィーガンのお客様が多数いらっしゃいます。米粉を使った独自の製法で、植物性アイスにありがちなシャリシャリ感（シャーベット感）のない滑らかな舌触りとコクを実現しており、HappyCow 5.0・Googleレビュー270件以上（★4.7）という評価がその証拠です。",
  },
  {
    q: "アレルゲン対応の詳細を教えてください",
    a: "全商品、乳・卵・小麦・白砂糖不使用です。卵・乳・小麦を一切持ち込まない専用の工房で製造しているため、乳・卵・小麦のアレルギーの方にも安心してお召し上がりいただけます。工房への持ち込みがあるのはナッツ類（落花生・くるみ・カシューナッツ・アーモンド等）のみで、フレーバーにより大豆・アーモンド（ナッツ使用）・もも・りんごを含みます。",
  },
  {
    q: "ベースの植物性ミルクは何を使っていますか？",
    a: "抹茶・ほうじ茶・バニラココナッツ・UMAMIバニラ・アールグレイは豆乳ベース、ショコラはアーモンドミルクベース、フルーツ系5種（マンゴー・ミックスベリー・もも・りんご・ドラゴンフルーツ）は果実とココナッツがベースです。豆乳不使用のフレーバーもお選びいただけます。",
  },
  {
    q: "原材料の詳細や、ハラール・五葷などお店の基準に合うか確認できますか？",
    a: "上の商品ラインナップの各フレーバーカードをタップすると全原材料をご確認いただけます。アルコール由来原料や特定素材の有無など、お店の基準に合わせたフレーバー選定も個別にご案内いたしますので、フォームの備考欄にてお気軽にお尋ねください。",
  },
  {
    q: "最小ロットと発注単位は？",
    a: "業務用バルクは最小4リットル分（1L×4本 または 2L×2本）から、持ち帰り・物販用の100ml個食カップ（税別300円）は最小60個からご注文いただけます。フレーバーは11種から自由に組み合わせ可能です。",
  },
  {
    q: "保管条件を教えてください",
    a: "−18℃以下で冷凍保存してください。アイスクリーム類（氷菓）は食品表示基準上、賞味期限の表示義務がない冷凍品です。適切な温度管理のもとで品質が長期間維持され、日持ちによる廃棄ロスが出ません。",
  },
  {
    q: "注文から届くまでどのくらいですか？",
    a: "ご注文確定後、通常5営業日前後でクール冷凍便（ヤマト運輸）にて全国発送いたします。初回の無料試食サンプル（6個）は通常2営業日以内に発送いたします。",
  },
  {
    q: "支払い方法は？",
    a: "納品月の月末締め・翌月末払い（請求書による銀行振込）、または専用発注ページでのクレジットカード決済に対応しております。",
  },
  {
    q: "OEMや専用フレーバーの開発は可能ですか？",
    a: "はい。定番フレーバーにお店のロゴ丸シールを貼るプラン（開発費0円・1味60個〜）や、お店の食材を使ったオリジナルフレーバー開発（1味60個／6L〜）も承っております。",
  },
  {
    q: "メニューにはどう記載すればいいですか？",
    a: "たとえば「クラフトアイス（乳・卵・小麦・白砂糖不使用）¥○○○」のように、素材の特徴を明記するのがおすすめです。「プラントベース」「植物性クラフトアイス」といった表現も好評です。",
  },
  {
    q: "お客様にどう説明すればいいですか？",
    a: "「植物性の素材でつくった手づくりのクラフトアイスです。乳製品・卵・小麦を使っていないので、乳・卵・小麦のアレルギーをお持ちの方も安心してお召し上がりいただけます」——これだけで十分伝わります。",
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
        <div className="mb-12 md:mb-20 md:text-center">
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
