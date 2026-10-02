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

/* ── 実際のGoogleクチコミデータ（実在する海外のお客様の投稿スクリーンショット） ── */
const realGoogleReviews = [
  {
    author: "Merrick Clay",
    tag: "ノンビーガン・一般客目線",
    point: "「ヴィーガンでない方にも、このアイスは絶対おすすめ」",
    image: "/images/reviews/google_review_merrick_clay.png",
    alt: "Googleクチコミ実物スクショ: Merrick Clay様のレビュー",
    summary:
      "「私はグルテンフリーやビーガン食を実践しているわけではありませんが、試したデザートはどれも本当に美味しく、アイスクリームはとてもクリーミーでした。ビーガンでない方にもぜひおすすめします」",
  },
  {
    author: "Jodi Clay",
    tag: "ご家族連れ・セリアック病",
    point: "「乳製品不使用とは思えないほどクリーミーで味も最高」",
    image: "/images/reviews/google_review_jodi_clay.png",
    alt: "Googleクチコミ実物スクショ: Jodi Clay様のレビュー",
    summary:
      "「セリアック病の私と、そうではない夫と息子と一緒に来ました。アイスクリームはクリーミーで乳製品不使用とは思えないほど味も最高。タクシーで行く価値は間違いなくあります！」",
  },
  {
    author: "amanda weidman",
    tag: "外国人観光客・アイス目当て",
    point: "「今まで食べた抹茶の中で最高の味！最高の体験でした」",
    image: "/images/reviews/google_review_amanda_weidman.png",
    alt: "Googleクチコミ実物スクショ: amanda weidman様のレビュー",
    summary:
      "「今まで食べた抹茶の中で最高の味！豆乳アイスクリーム目当てで来店しました。アイスとワッフルのセットは絶対におすすめ。最高の体験でした。また必ず来ます！」",
  },
];

export default function SocialProofSection() {
  return (
    <section id="story" className="bg-bg border-t border-gray-100 py-20 md:py-28">
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
          <div className="md:text-center">
            <p className="text-ink-muted mb-4 font-sans text-xs tracking-[0.25em] uppercase">
              Our Story
            </p>
            <h2 className="text-ink font-serif text-2xl font-bold sm:text-3xl md:text-4xl">
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
                私たちSoyStoriesのミッションは、アレルギーやヴィーガンなど食に制限がある方、素材にこだわる方にとって「ユメミタイ」と思える場所をつくること。
                <br />
                <br />
                「みんなで一緒に食べられる幸せ」をカタチにするため、福岡・薬院の小さなお店でお客様をお迎えしてきました。そこで生まれた手作りのクラフトアイスは、アレルギーをお持ちの方だけでなく、ノンビーガンのお客様からも「こっちのほうが好き！」「美味しい！」とたくさんの笑顔をいただくようになりました。
                <br />
                <br />
                この「ユメミタイ」な体験を福岡のみならず、もっと多くのエリアで広げていくために、私たちは小さなお店のキッチンを飛び出し、コンタミネーションのないアイスファクトリー（専用製造所）を立ち上げました。
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
              <h2 className="text-ink font-serif text-2xl leading-relaxed font-bold md:text-3xl">
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
          className="mb-16 flex flex-wrap items-center justify-center gap-12 border-y border-gray-200 py-12 text-center sm:gap-20"
        >
          <div>
            <span className="text-brand block font-serif text-5xl font-bold md:text-7xl">5.0</span>
            <span className="text-ink-muted mt-3 block font-sans text-sm tracking-wider">
              薬院のお店 HappyCow 評価
            </span>
          </div>
          <div>
            <span className="text-ink block font-serif text-5xl font-bold md:text-7xl">4.7</span>
            <span className="text-ink-muted mt-3 block font-sans text-sm tracking-wider">
              Google マップ クチコミ評価（240件超）
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative h-16 w-48 sm:h-20 sm:w-56">
              <Image
                src="/images/reviews/google_rating_badge.png"
                alt="Googleクチコミ 4.7 評価スコア"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-ink-muted text-xs tracking-wider">Google マップ公式集計</span>
          </div>
        </motion.div>

        {/* ── 実際のGoogleクチコミスクリーンショット掲載セクション ── */}
        <motion.div
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-bold text-blue-700">
              Google Maps 実際のクチコミ画面
            </span>
            <h3 className="text-ink font-serif text-2xl font-bold sm:text-3xl">
              海外の方・ノンビーガンの方からも、
              <br className="hidden sm:block" />
              実際のアイスに絶賛の声をいただいています
            </h3>
            <p className="text-ink-light mx-auto mt-3 max-w-2xl text-sm sm:text-base">
              薬院の実店舗に寄せられた、海外からのお客様やアレルギーをお持ちのご家族による実際のGoogleクチコミ画面です。
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
            {realGoogleReviews.map((item, index) => (
              <div
                key={index}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-block rounded-md bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-800">
                    {item.tag}
                  </span>
                  <span className="text-xs font-bold text-gray-400">★★★★★</span>
                </div>
                <h4 className="text-ink mb-3 font-serif text-sm leading-snug font-bold">
                  {item.point}
                </h4>

                {/* 実際のGoogleクチコミスクリーンショット */}
                <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden rounded-xl border border-gray-100 bg-gray-50 shadow-inner">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-contain object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <p className="text-ink-muted rounded-lg bg-gray-50 p-3 text-xs leading-relaxed">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.google.com/maps/place/%E3%82%B0%E3%83%AB%E3%83%86%E3%83%B3%E3%83%95%E3%83%AA%E3%83%BC%EF%BC%86100%EF%BC%85%E6%A4%8D%E7%89%A9%E6%80%A7%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%84+Soy+Stories%EF%BC%88vegan%EF%BC%86gluten+free%EF%BC%89/@33.5818211,130.3966611,17z/data=!4m8!3m7!1s0x354191585d44c62f:0xa127c6cfc075e381!8m2!3d33.5818211!4d130.3966611!9m1!1b1!16s%2Fg%2F11r783v2pc?hl=ja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand inline-flex items-center gap-1.5 text-xs font-semibold hover:underline"
            >
              <span>Google マップで実際の全240件超のクチコミを見る</span>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
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
              <p className="text-ink mb-3 font-serif text-lg leading-relaxed font-bold">
                「食に制限がある方もない方も、同じテーブルで同じデザートを笑顔で囲める——薬院の小さなお店で見てきたそんな『ユメミタイ』な体験を、今度は全国の飲食店様と一緒に広げていきたい。あなたのお店のお客様へ、ぜひこの美味しさを届けてください」
              </p>
              <footer className="text-ink-light font-sans text-sm font-medium">
                — 代表 小南 優作
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
