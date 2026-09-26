"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* 手描き風SVGアイコン */
const ScoopIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand"
  >
    <path d="M14 4C9 4 5 8 5 13C5 16 7 18 10 18H18C21 18 23 16 23 13C23 8 19 4 14 4Z" />
    <line x1="14" y1="18" x2="14" y2="25" />
    <line x1="10" y1="25" x2="18" y2="25" />
  </svg>
);

const LeafIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand"
  >
    <path d="M6 22C6 22 8 8 22 4C22 4 20 20 6 22Z" />
    <path d="M6 22C10 18 14 12 22 4" strokeWidth="0.8" />
  </svg>
);

const GrainIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand"
  >
    <path d="M14 4C14 4 8 10 8 16C8 20 11 24 14 24C17 24 20 20 20 16C20 10 14 4 14 4Z" />
    <line x1="14" y1="12" x2="14" y2="24" strokeWidth="0.8" />
    <path d="M10 16C12 15 14 16 14 16" strokeWidth="0.8" />
    <path d="M18 16C16 15 14 16 14 16" strokeWidth="0.8" />
  </svg>
);

const evidence = [
  {
    icon: <ScoopIcon />,
    title: "冷凍庫から出して、すぐにすくえる",
    desc: "「クラフトアイスは固くて、溶けるまで待たなきゃいけない」。そんな常識を変えたくて。独自の米粉製法により、-18℃の冷凍庫から出した直後でも、なめらかにディッシャーが入るように仕立てています。",
  },
  {
    icon: <LeafIcon />,
    title: "空気に頼らないから、素材の味がまっすぐ届く",
    desc: "空気をたくさん含ませてかさ増しするのではなく、素材のおいしさをそのまま味わってほしくて。空気含有量を抑えた作りなので、溶けにくく、最後までしっかりとした風味を楽しんでいただけます。",
  },
  {
    icon: <GrainIcon />,
    title: "添加物ではなく、お米本来の力で",
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
          className="mb-12 md:mb-16 md:text-center"
        >
          <span className="text-brand mb-4 block font-sans text-sm font-semibold tracking-widest uppercase">
            Craftsmanship
          </span>
          <h2 className="text-ink mb-6 font-serif text-2xl sm:text-3xl md:text-4xl">
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

        <div className="mt-16 flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* 左側：証拠の大きな写真 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/images/bulk_scoop.jpg"
                alt="ディッシャーですっとすくえる、なめらかなクラフトアイス"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* 右側：3つの理由 */}
          <div className="flex w-full flex-col gap-8 lg:w-1/2">
            {evidence.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="border-brand/10 bg-brand/[0.02] flex flex-col items-start gap-5 rounded-2xl border p-8 transition-colors hover:bg-white sm:flex-row sm:items-start"
              >
                <div className="border-brand/20 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border bg-white">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-ink mb-2 font-serif text-lg font-bold sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-ink-light font-sans text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
            無料のサンプルでお確かめください
          </a>
        </motion.div>
      </div>
    </section>
  );
}
