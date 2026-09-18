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
    rating: 5,
  },
  {
    body: "小麦アレルギーがあるので、こういったお店は本当に重宝します。どれを食べても美味しくて、安心して通えるお店です。",
    author: "Google レビュー (アレルギーをお持ちのお客様)",
    rating: 5,
  },
  {
    body: "福岡でこんなに美味しいプラントベースのスイーツが食べられるなんて。県外からでも絶対に行く価値があります！",
    author: "Google レビュー (ヴィーガン思考のお客様)",
    rating: 5,
  },
];

export default function SocialProofSection() {
  return (
    <section id="reviews" className="bg-bg border-t border-gray-100 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Heading */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-ink-muted mb-4 font-sans text-xs tracking-[0.25em] uppercase">
            Proven Results
          </p>
          <h2 className="text-ink font-serif text-3xl sm:text-4xl">
            直営店で実証済み。このアイスを出したお店で、何が起きたか。
          </h2>
        </motion.div>

        {/* Top Emotional Episode */}
        <motion.div
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src="/images/soystories_icecream02187icecream 1.jpg"
                  alt="Soy storiesのジェラートをスプーンで味わう至福のひととき"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="w-full space-y-6 md:w-1/2">
              <p className="text-ink-muted font-sans text-xs tracking-[0.2em] uppercase">Episode</p>
              <h2 className="text-ink font-serif text-2xl leading-relaxed md:text-3xl">
                はじめて子どもにアイスクリームを
                <br />
                食べさせることができた——
                <br />
                そう言って涙されたお母さんがいました。
              </h2>
              <p className="text-ink-light text-base leading-[2]">
                アレルギーのあるお子さんを持つご家族にとって、
                <br />
                「みんなと同じものを食べられる」ことは、私たちが思う以上に大きな意味があります。
                <br />
                <br />
                あなたのお店でも、この体験を届けることができます。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Reviews */}
        <motion.div
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="text-ink-muted mb-10 text-center font-sans text-xs tracking-[0.25em] uppercase">
            直営店のお客様の声
          </p>
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
          <div className="mt-12 text-center">
            <p className="text-ink font-serif text-lg leading-relaxed">
              これは直営店での実際のお客様の声です。
              <br />
              あなたのお店のメニューに加えれば、同じ反応が起きます。
            </p>
          </div>
        </motion.div>

        {/* Rating stats */}
        <motion.div
          variants={scaleIn}
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 flex flex-wrap justify-center gap-16 border-y border-gray-200 py-12 text-center md:gap-24"
        >
          <div>
            <span className="text-brand block font-serif text-5xl font-bold md:text-7xl">5.0</span>
            <span className="text-ink-muted mt-3 block font-sans text-sm tracking-wider">
              直営店 HappyCow 評価
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

        {/* International reach */}
        <motion.div
          variants={fadeUp}
          custom={0.4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-ink-light mx-auto max-w-xl text-base leading-relaxed">
            韓国、台湾、香港、アメリカ、ヨーロッパ——
            <br />
            世界中からお客様が直営店に足を運んでくださっています。
            <br />
            滞在中に2回、3回と通ってくださる海外のお客様も。
          </p>
        </motion.div>

        {/* Second Episode */}
        <motion.div
          variants={fadeUp}
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center md:p-10">
            <p className="text-ink mb-4 font-serif text-lg leading-[2] md:text-xl">
              インバウンドのお客様に
              <br className="md:hidden" />
              「ここにはヴィーガンデザートがある」と選ばれるお店になる——
            </p>
            <p className="text-ink-muted text-sm">その可能性を、あなたのメニューにも。</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
