"use client";

import { motion } from "framer-motion";
import { Timer, Wind, CheckCircle2 } from "lucide-react";

const evidence = [
  {
    icon: <Timer className="text-brand h-8 w-8" />,
    title: "冷凍庫から出して、すぐにすくえる",
    desc: "「植物性アイスは固くて、溶けるまで待たなきゃいけない」。そんな常識を変えたくて。独自の米粉製法により、-18℃の冷凍庫から出した直後でも、なめらかにディッシャーが入るように仕立てています。",
  },
  {
    icon: <Wind className="text-brand h-8 w-8" />,
    title: "空気を抱かせすぎないから、味が濃い",
    desc: "空気をたくさん含ませてかさ増しするのではなく、素材のおいしさをそのまま味わってほしくて。空気含有量を抑えた作りなので、溶けにくく、最後までしっかりとした風味を楽しんでいただけます。",
  },
  {
    icon: <CheckCircle2 className="text-brand h-8 w-8" />,
    title: "添加物ではなく、お米本来の粘りで",
    desc: "安定剤や増粘剤で人工的になめらかさを作ることはしません。米粉が本来持っている自然な「保水力」と「粘り」を活かし、昔ながらの手作りのような優しい口溶けを実現しました。",
  },
];

export default function TextureProofSection() {
  return (
    <section className="bg-bg-white py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-brand mb-4 block font-sans text-sm font-semibold tracking-widest uppercase">
            Craftsmanship
          </span>
          <h2 className="text-ink mb-6 font-serif text-3xl md:text-4xl">
            ディッシャーがすっと入る。
            <br className="md:hidden" />
            その秘密は、お米の力。
          </h2>
          <p className="text-ink-light mx-auto max-w-2xl font-sans text-base leading-relaxed md:text-lg">
            厨房でお客様を待たせることなく、最高の状態で提供できるように。
            <br className="hidden md:block" />
            私たちがたどり着いた、ひとつの答えです。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {evidence.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="border-brand/10 bg-brand/[0.02] flex flex-col items-start rounded-2xl border p-8 transition-colors hover:bg-white"
            >
              <div className="bg-brand/10 mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                {item.icon}
              </div>
              <h3 className="text-ink mb-4 font-serif text-xl leading-snug font-bold">
                {item.title}
              </h3>
              <p className="text-ink-light font-sans text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-ink-muted mb-4 text-sm font-medium">
            言葉でお伝えするよりも、ぜひ実際の厨房で感じてみてください。
          </p>
          <a
            href="#contact-form"
            className="bg-cta hover:bg-cta-hover inline-block rounded-full px-10 py-4 text-base font-bold text-white shadow-sm transition-all hover:shadow-md"
          >
            無料でサンプルをお届けします
          </a>
        </motion.div>
      </div>
    </section>
  );
}
