"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* ── 素材の物語データ ── */
const ingredientStories = [
  {
    title: "米粉",
    subtitle: "こめこ",
    story:
      "パートナー企業と開発した米粉の製法が、乳製品を使わずになめらかな食感を実現しています。ワッフルにも、アイスにも使っている、SoyStoriesの基本素材です。",
    imageSrc: "/images/ingredient_rice_flour.jpg",
  },
  {
    title: "豆乳",
    subtitle: "とうにゅう",
    story:
      "バターや生クリームの代わりに、濃厚な豆乳でコクを出しています。乳・卵・小麦を扱わない専用の製造ラインで製造しています。",
    imageSrc: "/images/ingredient_soymilk.jpg",
  },
  {
    title: "白みそ・甘酒",
    subtitle: "しろみそ・あまざけ",
    story:
      "日本独自の発酵素材を、一部のフレーバーに配合。コクとうまみをプラスすることで、植物性100％とは思えない深みが生まれます。「本当にヴィーガン？」と驚かれる理由のひとつです。",
    imageSrc: "/images/ingredient_miso_amazake.jpg",
  },
];

/* ── アニメーション設定 ── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export default function ReasonSection() {
  return (
    <section id="reason" className="bg-bg relative overflow-hidden py-20 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── ヘッダー ── */}
        <div className="mx-auto mb-20 max-w-2xl text-center md:mb-32">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-brand mb-4 font-sans text-sm tracking-[0.2em] uppercase"
          >
            Ingredients
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-ink font-serif text-3xl leading-snug tracking-wide sm:text-4xl lg:text-[2.75rem]"
          >
            ひとつひとつの素材に、
            <br />
            物語がある
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-ink-light mt-6 text-base leading-relaxed sm:text-lg"
          >
            乳・卵・小麦・白砂糖不使用。素材の力で、おいしさをつくります。
          </motion.p>
        </div>

        {/* ── 素材の物語 ── */}
        <div className="space-y-24 md:space-y-36">
          {ingredientStories.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.article
                key={item.title}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className={`flex flex-col gap-10 md:gap-16 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-center`}
              >
                {/* 画像エリア */}
                <motion.div
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative aspect-[4/3] w-full flex-shrink-0 overflow-hidden rounded-2xl bg-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.06)] md:w-1/2"
                >
                  <Image
                    src={item.imageSrc}
                    alt={`SoyStoriesのヴィーガン米粉アイスに使用する${item.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>

                {/* テキスト */}
                <div
                  className={`flex-1 ${
                    isEven ? "md:pl-8 lg:pl-12" : "md:pr-8 lg:pr-12"
                  } flex flex-col justify-center`}
                >
                  <p className="text-ink-muted mb-3 font-sans text-xs tracking-[0.15em] uppercase">
                    {item.subtitle}
                  </p>
                  <h3 className="text-ink mb-6 font-serif text-2xl tracking-wide sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="text-ink-light max-w-lg text-base leading-[1.9] tracking-wide sm:text-lg">
                    {item.story}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
