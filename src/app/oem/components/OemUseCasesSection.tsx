"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/app/dessert/components/ui";

const USE_CASES = [
  {
    scene: "果樹園・農家・生産者様",
    courseBadge: "コース③ 専用レシピ開発 × カップ",
    title: "旬の果物や規格外果実を、通年売れる「農園の看板ギフト」に",
    caption:
      "いちご・柑橘・いちじく等のストレート果汁やピューレをご支給いただき、果実感が際立つ専用配合に。",
    image: "/images/gelato_strawberry.jpg",
    alt: "果実を使ったオリジナルアイスのイメージ",
  },
  {
    scene: "自家焙煎珈琲・日本茶カフェ様",
    courseBadge: "コース② 素材プラス × カップ＆バルク",
    title: "自慢のエスプレッソ粉末や茶葉で、店内デザートとお土産を同時展開",
    caption:
      "完成されたなめらかベースにお店の粉末素材をプラス。イートイン用2Lバルクと物販カップの両方で注文可能。",
    image: "/images/serving/serving_affogato.jpg",
    alt: "カフェでのオリジナルアイス提供イメージ",
  },
  {
    scene: "レストラン・ホテル・温浴施設様",
    courseBadge: "コース③ 専用レシピ開発 × 2Lバルク",
    title: "乳・卵・小麦フリーで、海外客やアレルギー客にも同じコースの締めを",
    caption:
      "食後でも油分が残らずさっぱり。地域の特産食材を使った宿・レストランだけの特別な一皿に。",
    image: "/images/serving/serving_monaka.jpg",
    alt: "和食・レストランでのデザート提供イメージ",
  },
  {
    scene: "ショップ物販・百貨店催事・周年企画様",
    courseBadge: "コース① シール変更（開発費0円）× カップ",
    title: "開発費0円。ショップロゴの天面シールだけでオリジナル商品が完成",
    caption:
      "薬院店で人気の定番11フレーバーから選ぶだけ。60個から手軽にお店のブランドアイスが始められます。",
    image: "/images/ec_gelato_8set.jpg",
    alt: "オリジナルロゴシール付きカップセットのイメージ",
  },
];

/**
 * 「どんなお店が、どんなオリジナルアイスを作れるか」が写真で直感できる活用シーンギャラリー
 */
export default function OemUseCasesSection() {
  return (
    <section className="bg-[#fafaf8] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="こんな活用イメージに"
          lines={["お店の業態や食材に合わせて、", "4つのスタイルで選ばれています。"]}
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {USE_CASES.map((item, idx) => (
            <motion.article
              key={item.scene}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-xs transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <span className="bg-brand/90 absolute bottom-3 left-3 rounded-full px-3 py-1 text-[11px] font-bold text-white backdrop-blur-xs">
                  {item.courseBadge}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-brand text-xs font-bold">{item.scene}</p>
                <h3 className="text-ink mt-1.5 text-[15px] leading-snug font-bold">{item.title}</h3>
                <p className="text-ink-light mt-2.5 flex-1 text-xs leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
