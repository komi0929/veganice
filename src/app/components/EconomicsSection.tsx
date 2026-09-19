"use client";

import { motion } from "framer-motion";
import { RefreshCcw, Wind, TrendingUp, Users } from "lucide-react";

const valuePoints = [
  {
    icon: <TrendingUp className="text-brand h-6 w-6" />,
    title: "メニューの「顔」になるデザート",
    body: "「このアイス、なに？」——お客様が自然と聞きたくなる品質。会話が生まれ、SNS投稿が増え、口コミが店を宣伝してくれます。",
  },
  {
    icon: <Users className="text-brand h-6 w-6" />,
    title: "今まで逃していた客層を取り込む",
    body: "ヴィーガン・アレルギー対応で、グループ全員がデザートを注文できるように。テーブル単価が確実に上がります。",
  },
  {
    icon: <RefreshCcw className="text-brand h-6 w-6" />,
    title: "廃棄ロスゼロ。売れた分だけがコスト",
    body: "冷凍食品のため賞味期限の表示義務なし。注文が入ったときだけすくえばいい。仕入れたものが無駄になりません。",
  },
  {
    icon: <Wind className="text-brand h-6 w-6" />,
    title: "追加の人件費・設備投資は不要",
    body: "冷凍庫とディッシャーさえあれば、今日から提供できます。研修も仕込みもいりません。",
  },
];

export default function EconomicsSection() {
  return (
    <section id="economics" className="bg-bg-white relative overflow-hidden py-24">
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
            Value
          </span>
          <h2 className="text-ink mb-6 font-serif text-3xl md:text-5xl">
            デザート1品で、お店が変わる
          </h2>
          <p className="text-ink-light mx-auto max-w-2xl font-sans text-base leading-relaxed md:text-lg">
            価格は品質に見合ったものです。
            <br className="hidden md:block" />
            でも、それ以上の価値がお店に返ってきます。
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
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
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
            価格の詳細はお問い合わせください。業態に合わせてご提案いたします。
          </p>
          <a
            href="#contact-form"
            className="bg-cta hover:bg-cta-hover inline-block rounded-full px-10 py-4 text-base font-bold text-white shadow-sm transition-all hover:shadow-md md:text-lg"
          >
            価格を含めて相談する
          </a>
        </motion.div>
      </div>
    </section>
  );
}
