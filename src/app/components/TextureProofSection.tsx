"use client";

import { motion } from "framer-motion";
import { Timer, Wind, CheckCircle2 } from "lucide-react";

const evidence = [
  {
    icon: <Timer className="text-brand h-8 w-8" />,
    title: "冷凍庫から出して、待ち時間0分",
    desc: "植物性アイスにありがちな「ガチガチに固まって、溶けるまで20分待つ」という問題。SoyStoriesは独自の米粉製法により、-18℃の冷凍庫から出した直後でも、なめらかにディッシャーが入ります。",
  },
  {
    icon: <Wind className="text-brand h-8 w-8" />,
    title: "低オーバーランだから、溶けにくい",
    desc: "空気を過剰に抱き込ませない（低オーバーラン）製法のため、素材がぎっしり詰まっています。そのため、お客様のテーブルに運んだ後もドロドロに溶け崩れることがありません。",
  },
  {
    icon: <CheckCircle2 className="text-brand h-8 w-8" />,
    title: "添加物に頼らない「本物の粘り」",
    desc: "安定剤や増粘剤で無理やり作ったテクスチャーではなく、米粉が本来持つ保水力と粘りを活かしています。だからこそ、機械的な不自然さがない、手作りのようななめらかさを維持できます。",
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
            The Evidence
          </span>
          <h2 className="text-ink mb-6 font-serif text-3xl md:text-4xl">
            「固くならない」には、技術的理由があります。
          </h2>
          <p className="text-ink-light mx-auto max-w-2xl font-sans text-base leading-relaxed md:text-lg">
            安い業務用ヴィーガンアイスで失敗した方にこそ、試してほしい。
            <br className="hidden md:block" />
            プロのサービスを止めない、圧倒的な操作性。
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
              className="border-brand/10 bg-brand/[0.02] flex flex-col items-start rounded-2xl border p-8"
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
            論より証拠。実際の厨房でお確かめください。
          </p>
          <a
            href="#contact-form"
            className="bg-cta hover:bg-cta-hover inline-block rounded-full px-10 py-4 text-base font-bold text-white shadow-sm transition-all hover:shadow-md"
          >
            無料でサンプルを取り寄せる
          </a>
        </motion.div>
      </div>
    </section>
  );
}
