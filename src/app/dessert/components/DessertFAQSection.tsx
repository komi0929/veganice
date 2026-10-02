"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "厨房の冷凍スペースに余裕がなくても保管できますか？",
    a: "はい、全く問題ありません。大手メーカーのような大容量（4L〜10L）バルクではなく、省スペースで収まる1Lまたは2Lの小型容器をご用意しております。最小ロットも4L（2L×2個 または 1L×4個）からとなっておりますので、冷凍スペースの限られた厨房でもすきまに無理なくストックいただけます。",
  },
  {
    q: "ランチやディナーのピーク時、提供スピードに影響はありませんか？",
    a: "ご注文から約15秒でご提供いただけます。SoyStoriesのクラフトアイスは米粉独自の保水性により、−18℃の冷凍庫から出してすぐにディッシャーがすっと通る滑らかなテクスチャーを維持します。カチカチに凍って削れないといったトラブルがなく、忙しいオペレーションを一切止めません。",
  },
  {
    q: "ヴィーガン専門店ではなく、一般の飲食店（ラーメン店やダイナー等）でも導入できますか？",
    a: "もちろん大歓迎です！近年は一般のラーメン店様やダイナー様でも『ヴィーガンラーメン』や『ソイバーガー』などのプラントベースメニューを導入されるケースが急増しています。食後デザートまでヴィーガンで揃えることで、健康志向のお客様や訪日外国人観光客（インバウンド）からの支持が格段に高まります。",
  },
  {
    q: "食後デザートとしてのおすすめの提供価格やディッシャーサイズは？",
    a: "食後のミニデザートとしては、小さめの「#18ディッシャー（約50ml）」がおすすめです。1L容器から約20杯分取れるため、セット価格＋¥300〜¥350、単品¥380〜¥480程度でのご提供が一般的です。原価率を抑えつつ、お客様にとって注文しやすい価格設定が可能です。",
  },
  {
    q: "ヴィーガンでない一般のお客様にも美味しく召し上がっていただけますか？",
    a: "はい。薬院の実店舗でも『普通のアイスよりこっちの方が好き！』とおっしゃるノンビーガンのお客様が多数いらっしゃいます。甘酒やみそなどの日本の伝統発酵素材と米粉によって生み出される豊かな風味となめらかさがあり、Googleクチコミでも海外・国内のお客様から「ヴィーガンとは思えないほど美味しい」と絶賛されています。",
  },
  {
    q: "アレルゲン管理やコンタミネーション対策はどうなっていますか？",
    a: "全フレーバーにおいて、特定原材料8品目（乳・卵・小麦・えび・かに・そば・落花生・くるみ）および白砂糖を一切使用していません。さらに乳・卵・小麦を一切持ち込まない専用のアイスファクトリーで製造しているため、製造ラインでの意図しない混入（コンタミ）の心配がありません。※一部フレーバーに大豆・アーモンド・もも・りんごを含みます。",
  },
  {
    q: "メニュー記載やPOPなどの提案はありますか？",
    a: "はい。『食後のクラフトアイス（植物性・乳卵小麦不使用）』といったメニュー記載例や、おすすめのペアリングPOPのデータをご提供可能です。券売機や卓上POPへの掲載方法などもお気軽にご相談ください。",
  },
  {
    q: "サンプルの内容と費用について教えてください",
    a: "おすすめの人気フレーバー6種をサンプルセットとして無料でお届けします。ヤマト運輸のクール冷凍便送料（着払い）のみご負担をお願いしております。事前の購入義務やしつこい営業連絡は一切ございませんので、まずは実際の厨房で味・食後の心地よい後味・すくいやすさをお確かめください。",
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
        className="group flex w-full items-center justify-between py-7 text-left focus:outline-none"
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
            <div className="text-ink-light pr-8 pb-7 font-sans text-sm leading-relaxed font-light md:text-base">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function DessertFAQSection() {
  return (
    <section id="faq" className="bg-bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-12 md:mb-18 md:text-center">
          <span className="text-brand mb-3 block font-sans text-xs font-semibold tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="text-ink font-serif text-2xl font-bold sm:text-3xl md:text-4xl">
            飲食店様からよくあるご質問
          </h2>
          <p className="text-ink-light mt-3 text-sm sm:text-base">
            満足感のある食事メニューを提供する飲食店様の導入に関する疑問にお答えします。
          </p>
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
