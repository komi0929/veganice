"use client";

import { motion } from "framer-motion";

const seasons = [
  {
    emoji: "🌸",
    name: "春",
    theme: "お花見・歓送迎会",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    flavors: ["白桃", "ベリーミックス"],
    menuIdeas: [
      "お花見コースの〆デザートに",
      "歓送迎会の特別メニューとして",
      "春限定パフェのベースに",
    ],
  },
  {
    emoji: "🌻",
    name: "夏",
    theme: "夏季限定・テラス席",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    flavors: ["ドラゴンフルーツ", "りんご"],
    menuIdeas: [
      "夏季限定デザートメニューとして",
      "テラス席のアフタヌーンティーに",
      "ランチセットのプチデザートに",
    ],
  },
  {
    emoji: "🍁",
    name: "秋",
    theme: "和食・コース料理",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    flavors: ["ほうじ茶", "濃厚ショコラ"],
    menuIdeas: ["和食コースの口直しとして", "秋の夜長のバーメニューに", "ハロウィン限定デザートに"],
  },
  {
    emoji: "❄️",
    name: "冬",
    theme: "ディナー・特別な日",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    flavors: ["濃厚抹茶", "バニラココナッツ"],
    menuIdeas: [
      "クリスマスディナーの〆に",
      "年末年始の特別コースに",
      "バレンタインのペアリングデザートに",
    ],
  },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

export default function SeasonalMenuSection() {
  return (
    <section className="bg-bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-brand mb-4 block text-sm font-semibold tracking-widest uppercase">
            Seasonal Menu
          </span>
          <h2 className="text-ink mb-6 font-serif text-3xl md:text-4xl">
            アイスは、一年中売れます。
          </h2>
          <p className="text-ink-light mx-auto max-w-2xl font-sans text-base leading-relaxed md:text-lg">
            「夏しか売れないのでは？」——いいえ。
            <br className="hidden md:block" />
            季節ごとのメニュー提案で、通年デザートとして活躍します。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {seasons.map((season, index) => (
            <motion.div
              key={season.name}
              variants={fadeUp}
              custom={index * 0.1 + 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className={`${season.bgColor} ${season.borderColor} rounded-2xl border p-6`}
            >
              <div className="mb-4 text-center">
                <span className="text-4xl">{season.emoji}</span>
                <h3 className="text-ink mt-2 font-serif text-xl font-bold">{season.name}</h3>
                <p className="text-ink-muted mt-1 text-xs">{season.theme}</p>
              </div>

              <div className="mb-4">
                <p className="text-ink mb-2 text-xs font-bold">おすすめフレーバー</p>
                <div className="flex flex-wrap gap-2">
                  {season.flavors.map((flavor) => (
                    <span
                      key={flavor}
                      className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium"
                    >
                      {flavor}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-ink mb-2 text-xs font-bold">メニュー提案</p>
                <ul className="space-y-1.5">
                  {season.menuIdeas.map((idea, i) => (
                    <li
                      key={i}
                      className="text-ink-light flex items-start gap-1.5 text-xs leading-relaxed"
                    >
                      <span className="text-brand mt-0.5 text-[10px]">●</span>
                      {idea}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
