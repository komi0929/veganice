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
    body: "豆乳のソフトクリームが本当に美味しい！ヴィーガンスイーツとは思えないほど濃厚で、子どもも大喜びでした。",
    author: "Google レビュー (ご家族連れのお客様)",
  },
  {
    body: "小麦アレルギーがあるので、こういったお店は本当に重宝します。どれを食べても美味しくて、安心して通えるお店です。",
    author: "Google レビュー (アレルギーをお持ちのお客様)",
  },
  {
    body: "福岡でこんなに美味しいプラントベースのスイーツが食べられるなんて。県外からでも絶対に行く価値があります！",
    author: "Google レビュー (ヴィーガン思考のお客様)",
  },
];

export default function SocialProofSection() {
  return (
    <section id="story-and-proof" className="bg-bg border-t border-gray-100 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Story Part: Why We Manufacture */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24 flex flex-col gap-12 md:gap-16"
        >
          <div className="text-center">
            <p className="text-ink-muted mb-4 font-sans text-xs tracking-[0.25em] uppercase">
              Our Story
            </p>
            <h2 className="text-ink font-serif text-3xl sm:text-4xl">
              「こっちのほうが美味しい！」——その一言が嬉しくて、私たちは大きな決断をしました
            </h2>
          </div>

          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
            <div className="bg-bg relative aspect-[4/3] w-full overflow-hidden rounded-2xl md:w-1/2">
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
                小さなお店で生まれた感動を、
                <br className="hidden lg:block" />
                あなたのお店から届けてほしい。
              </h3>
              <p className="text-ink-light font-sans text-base leading-[2] sm:text-lg">
                私たちSoyStoriesは、福岡・薬院にある小さなお店から始まりました。米粉と豆乳で作った手作りのクラフトアイスは、アレルギーをお持ちの方だけでなく、ノンビーガンのお客様からも「こっちのほうが好き！」と嬉しいお声をいただくようになりました。
                <br />
                <br />
                「この笑顔を、全国の飲食店でも作れるはず」。そう信じて、私たちは小さなキッチンを飛び出し、コンタミネーションのない専用の製造所を作りました。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Emotional Episode */}
        <motion.div
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex flex-col items-center gap-10 md:flex-row-reverse md:gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src="/images/child_first_icecream.jpg"
                  alt="初めてクラフトアイスを食べる子どもの様子"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="w-full space-y-6 md:w-1/2">
              <p className="text-ink-muted font-sans text-xs tracking-[0.2em] uppercase">Episode</p>
              <h2 className="text-ink font-serif text-2xl leading-relaxed md:text-3xl">
                「はじめて子どもにアイスを
                <br />
                食べさせることができた」
              </h2>
              <p className="text-ink-light text-base leading-[2]">
                そう言って涙されたお母さんがいました。
                <br />
                <br />
                アレルギーのあるお子さんを持つご家族にとって、「みんなと同じものを食べられる」ことは、私たちが思う以上に大きな意味があります。
                <br />
                <br />
                あなたのお店にも、きっと同じような想いを抱えたご家族がいらっしゃるかもしれません。
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
          className="mb-16 flex flex-wrap justify-center gap-16 border-y border-gray-200 py-12 text-center md:gap-24"
        >
          <div>
            <span className="text-brand block font-serif text-5xl font-bold md:text-7xl">5.0</span>
            <span className="text-ink-muted mt-3 block font-sans text-sm tracking-wider">
              薬院のお店 HappyCow 評価
            </span>
          </div>
          <div>
            <span className="text-ink block font-serif text-5xl font-bold md:text-7xl">
              200<span className="text-4xl">+</span>
            </span>
            <span className="text-ink-muted mt-3 block font-sans text-sm tracking-wider">
              Google レビュー
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
                className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-ink mb-6 font-serif text-sm leading-[1.8] md:text-base">
                  &ldquo;{review.body}&rdquo;
                </p>
                <p className="text-ink-muted font-sans text-xs">— {review.author}</p>
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
          className="flex flex-col items-center gap-12"
        >
          <div className="flex max-w-3xl flex-col items-center gap-8 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm sm:flex-row">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full sm:h-32 sm:w-32">
              <Image
                src="/images/craft_moment.jpg"
                alt="代表"
                fill
                className="object-cover object-bottom"
                sizes="128px"
              />
            </div>
            <blockquote className="text-center sm:text-left">
              <p className="text-ink mb-3 font-serif text-lg leading-relaxed font-bold">
                「食べられないものがある人にとって、『あなたも食べられますよ』という一言は、想像以上にあたたかい。——その一言を、あなたのお店から届けてほしい」
              </p>
              <footer className="text-ink-light font-sans text-sm">— 代表 小南 優作</footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
