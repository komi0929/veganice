"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" as const, delay },
  }),
};

const reviews = [
  {
    title: "食事の後のキレと満足感がすごい",
    body: "ヴィーガンラーメンを食べた後にいただきました。さっぱりしているのに深みとコクがあって、油分がすっきりとリセットされました。食後にこれがあると満足度が段違いです！",
    author: "Google レビュー (ラーメン店巡りが好きなお客様)",
  },
  {
    title: "バーガーでお腹いっぱいでもペロリ",
    body: "ボリュームのある食事の後でも、乳脂肪を使っていないから胃もたれせず最後までペロリと食べられました。『デザートまでヴィーガンで揃っている』お店は本当にありがたいです。",
    author: "Google レビュー (ヴィーガン志向のお客様)",
  },
  {
    title: "外国人観光客の友人たちが大絶賛",
    body: "インバウンドのヴィーガン友人を連れて行ったところ、『日本でこんなに美味しいプラントベースアイスに出会えるなんて！』と大興奮していました。世界に誇れるクオリティです。",
    author: "HappyCow レビュー (飲食店オーナー様)",
  },
];

export default function DessertSocialProofSection() {
  return (
    <section id="story" className="bg-bg-white border-t border-gray-100 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Story Part: Why Post-Meal Desserts */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24 flex flex-col gap-12 md:gap-16"
        >
          <div className="md:text-center">
            <p className="text-brand mb-3 font-sans text-xs font-bold tracking-[0.25em] uppercase">
              Our Passion for Dining
            </p>
            <h2 className="text-ink font-serif text-2xl font-bold sm:text-3xl md:text-4xl">
              「食事のあとに、このアイスがあって本当に良かった」
              <br className="hidden sm:block" />
              その笑顔を、全国のヴィーガン食事系店舗様と一緒につくりたい。
            </h2>
          </div>

          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
            <div className="bg-bg relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md md:w-1/2">
              <Image
                src="/images/craft_moment.jpg"
                alt="SoyStoriesの工房・仕込み風景"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex w-full flex-col gap-6 md:w-1/2">
              <h3 className="text-ink font-serif text-2xl leading-[1.6] font-bold sm:text-3xl">
                最高のメインディッシュの余韻を、
                <br className="hidden lg:block" />
                完璧なデザートで締めくくる。
              </h3>
              <p className="text-ink-light font-sans text-sm leading-[2] sm:text-base">
                福岡・薬院の小さなお店からスタートしたSoyStories。
                私たちが日々お客様をお迎えする中で痛感したのは、
                <strong className="text-ink font-bold">
                  「しっかりとした食事を楽しんだ後、最後に口にするデザートの記憶が、そのお店の印象を決定づける」
                </strong>
                ということでした。
                <br />
                <br />
                ヴィーガンラーメンやバーガーをこだわり抜いて作られている飲食店様ほど、
                「デザートの仕込みまで手が回らない」「市販のアイスでは納得がいかない」という悩みを抱えていらっしゃいます。
                <br />
                <br />
                私たちが専用工房で仕込むクラフトアイスは、食事の感動をそのまま引き継ぎ、
                「あぁ、美味しかった」とお客様が幸せに席を立つためのラストピースです。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Rating stats */}
        <motion.div
          variants={scaleIn}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 flex flex-wrap justify-center gap-12 border-y border-gray-200 py-12 text-center sm:gap-20"
        >
          <div>
            <span className="text-brand block font-serif text-5xl font-bold md:text-7xl">5.0</span>
            <span className="text-ink-muted mt-2 block font-sans text-xs tracking-wider sm:text-sm">
              HappyCow 評価（最高評価）
            </span>
          </div>
          <div>
            <span className="text-ink block font-serif text-5xl font-bold md:text-7xl">★4.7</span>
            <span className="text-ink-muted mt-2 block font-sans text-xs tracking-wider sm:text-sm">
              Google レビュー評価（200件超）
            </span>
          </div>
          <div>
            <span className="block font-serif text-5xl font-bold text-emerald-700 md:text-7xl">
              0%
            </span>
            <span className="text-ink-muted mt-2 block font-sans text-xs tracking-wider sm:text-sm">
              特定原材料8品目 コンタミ率
            </span>
          </div>
        </motion.div>

        {/* Reviews */}
        <motion.div
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-bg flex flex-col justify-between rounded-2xl border border-gray-100 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <h4 className="text-ink mb-3 font-serif text-base font-bold sm:text-lg">
                    {review.title}
                  </h4>
                  <p className="text-ink-light mb-6 font-sans text-sm leading-[1.8]">
                    &ldquo;{review.body}&rdquo;
                  </p>
                </div>
                <p className="text-ink-muted border-t border-gray-200 pt-3 font-sans text-xs">
                  — {review.author}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Representative Quote */}
        <motion.div
          variants={fadeUp}
          custom={0.4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="bg-bg flex max-w-3xl flex-col items-center gap-8 rounded-3xl border border-gray-100 p-8 shadow-sm sm:flex-row md:p-10">
            <div className="ring-brand/20 relative h-24 w-24 shrink-0 overflow-hidden rounded-full shadow-sm ring-2 sm:h-32 sm:w-32">
              <Image
                src="/images/owner_story.jpg"
                alt="代表 小南 優作"
                fill
                className="object-cover object-[center_15%]"
                sizes="128px"
              />
            </div>
            <blockquote className="text-center sm:text-left">
              <p className="text-ink mb-3 font-serif text-base leading-relaxed font-bold sm:text-lg">
                「食事系店舗の現場の皆様が、仕込みやオペレーションに追われることなく、自信を持ってお客さまにお出しできる『最高の食後デザート』を届けたい。ラーメンやバーガーの満足感をもう一段引き上げるパートナーとして、ぜひSoyStoriesをご活用ください」
              </p>
              <footer className="text-ink-light font-sans text-sm font-medium">
                — SoyStories 代表 小南 優作
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
