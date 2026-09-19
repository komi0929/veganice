"use client";

import { motion } from "framer-motion";
import { Calculator, Percent, TrendingUp, Utensils, RefreshCcw, Wind } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  }),
};

interface StatItem {
  label: string;
  value: string;
  note?: string;
  icon: React.ReactNode;
}

export default function EconomicsSection() {
  const stats: StatItem[] = [
    {
      label: "1スクープあたり原価目安",
      value: "約100〜150円",
      note: "#12ディッシャー（80ml）使用時",
      icon: <Calculator className="text-brand h-6 w-6" />,
    },
    {
      label: "想定メニュー価格",
      value: "550〜900円",
      note: "業態・盛り付けにより調整可",
      icon: <TrendingUp className="text-brand h-6 w-6" />,
    },
    {
      label: "想定原価率",
      value: "約15〜25%",
      note: "飲食店デザート目標30%以下を大幅クリア",
      icon: <Percent className="text-brand h-6 w-6" />,
    },
    {
      label: "1Lあたり提供杯数",
      value: "約12〜20杯",
      note: "#12で約12杯 / #18（50ml）で約20杯",
      icon: <Utensils className="text-brand h-6 w-6" />,
    },
    {
      label: "廃棄ロス",
      value: "実質ゼロ",
      note: "賞味期限の表示義務なし（−18℃以下保存）",
      icon: <RefreshCcw className="text-brand h-6 w-6" />,
    },
    {
      label: "オーバーラン（空気含有率）",
      value: "低オーバーラン",
      note: "素材が詰まった濃厚な味わい。溶けにくく提供しやすい",
      icon: <Wind className="text-brand h-6 w-6" />,
    },
  ];

  return (
    <section id="economics" className="bg-bg-white relative overflow-hidden py-24">
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
            仕込み不要・人件費ゼロ・廃棄ロスなし。
            <br className="hidden md:block" />
            飲食店デザートの原価率目標30%を大幅にクリアする収益性。
          </p>
        </motion.div>

        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-bg border-brand/10 flex flex-col items-center rounded-2xl border p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                {stat.icon}
              </div>
              <p className="text-ink-muted mb-2 text-sm font-medium">{stat.label}</p>
              <p className="text-ink mb-2 font-serif text-2xl">{stat.value}</p>
              {stat.note && <p className="text-ink-muted text-xs leading-relaxed">{stat.note}</p>}
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-brand/5 mx-auto max-w-3xl rounded-2xl p-8 text-center md:p-10"
        >
          <p className="text-ink-light mb-4 font-sans leading-relaxed">
            冷凍食品には賞味期限の表示義務がありません。廃棄ロスは実質ゼロ。
            <br className="hidden md:block" />
            生菓子やケーキと違い、注文が入ったときだけすくえばいい。
            <br className="hidden md:block" />
            仕込みの人件費もかからない、高利益率のデザートメニューです。
          </p>
          <p className="text-ink-muted text-xs">
            ※ 上記は目安です。卸価格・提供杯数は業態やディッシャーサイズにより異なります。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
