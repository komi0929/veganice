"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "ヴィーガンでないお客様にも喜ばれますか？",
    a: "はい。薬院の直営店（Google ★4.7・HappyCow 5.0）でも「普通のアイスより好き」とおっしゃるノンヴィーガンのお客様が多数いらっしゃいます。米粉を炊き上げる独自製法で、シャリシャリ感のない濃密な口どけに仕上げています。",
  },
  {
    q: "アレルゲン対応・専用工房の管理体制は？",
    a: "全11種が乳・卵・小麦・白砂糖不使用です。卵・乳・小麦を一切持ち込まない専用工房で製造しているため、乳・卵・小麦アレルギーの方にも安心してお出しいただけます（工房持ち込みがある特定原材料等はナッツ類のみ。味により大豆・アーモンド・もも・りんごを含みます）。",
  },
  {
    q: "ベースの植物性ミルクや、ハラール・五葷等の基準確認はできますか？",
    a: "抹茶・ほうじ茶・バニラ2種・アールグレイは豆乳、ショコラはアーモンドミルク、フルーツ系5種は果実×ココナッツがベースです。各カードから全原材料をご確認いただけるほか、個別基準に合う選定もフォーム備考欄でご案内します。",
  },
  {
    q: "最小ロットや、100ml個食カップ・お店ロゴOEMの条件は？",
    a: "業務用バルクは最小4L（1L×4本・2L×2本など）から、物販用100ml個食カップ（税別300円）は60個から味自由でご注文いただけます。フタ丸シールをお店ロゴにするOEM（開発費0円・1味60個〜）やお店食材での専用開発（6L／60個〜）にも対応しています。",
  },
  {
    q: "保管条件・納期・お支払い方法は？",
    a: "−18℃以下の冷凍保存（氷菓・賞味期限表示義務なし）で期限切れによる廃棄が出にくい設計です。通常5営業日前後でクール冷凍便発送（無料サンプル6個は原則お申し込みの翌日に発送）。お支払いは納品月の月末締め・翌月末請求書払い（銀行振込）です。",
  },
  {
    q: "メニュー表にはどう記載すればいいですか？",
    a: "「クラフトアイス（乳・卵・小麦・白砂糖不使用）」や「植物性クラフトアイス添え」など、お店のお料理・お菓子のトーンに合わせて素材の特徴を添える表記が好評です。",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200/80 last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full cursor-pointer items-center justify-between py-5 text-left focus:outline-none"
      >
        <span className="text-ink pr-6 font-sans text-sm font-bold sm:text-base">{q}</span>
        <span
          className={`text-brand flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown size={18} strokeWidth={1.8} />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" as const }}
            className="overflow-hidden"
          >
            <div className="text-ink-light pr-6 pb-5 font-sans text-xs leading-[1.85] sm:text-sm">
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
    <section id="faq" className="bg-bg-white scroll-mt-20 py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-8 md:text-center">
          <h2 className="text-ink font-serif text-2xl font-bold sm:text-3xl">よくいただくご質問</h2>
        </div>

        <div className="rounded-2xl border border-stone-200/80 bg-[#fafaf8] px-5 sm:px-7">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
