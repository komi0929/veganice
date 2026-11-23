"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const signaturePoints = [
  {
    label: "01｜口どけ",
    title: "じっくり炊き上げた米粉が生む、スプーンに吸い付く濃密さ",
    body: "国産米粉を豆乳や甘酒、果汁と一緒に火にかけてとろりと炊き上げてから冷やし固める独自製法。体温でなめらかにほどけるリッチな舌触りに仕立てています。",
  },
  {
    label: "02｜コクと余韻",
    title: "甘酒と白みそを忍ばせた奥深いコクと、すっと軽やかな後口",
    body: "てんさい糖やきび砂糖のまろやかな甘みに、米麹の甘酒とほんのり塩気のある白みそを重ねました。濃厚な満足感がありながら、食後でも重たくならず心地よく消える余韻が魅力です。",
  },
  {
    label: "03｜素材の輪郭",
    title: "クーベルチュール、一番茶葉、完熟果実の鮮やかな香り",
    body: "冷たい生チョコのように濃密なショコラ、お濃茶のように旨み深い抹茶、果肉をそのまま裏ごししたようなマンゴーや国産白桃など、主役の香りがまっすぐ立ち上がります。",
  },
  {
    label: "04｜ボーダレスな美味しさ",
    title: "普段乳製品を食べる方からも「このアイスが一番好き」と選ばれる味",
    body: "全11種が乳・卵・小麦・白砂糖不使用でありながら、福岡・薬院の実店舗では国内外のアイス好きのお客様から高い評価（Google ★4.7・HappyCow ★5.0）をいただいています。",
  },
  {
    label: "05｜専用工房の手仕事",
    title: "乳・卵・小麦を一切持ち込まない専用工房で、一釜ずつ丁寧に",
    body: "アレルギーをお持ちのお子さまから海外のヴィーガンゲスト、一緒にテーブルを囲むご家族まで、全員が同じ一皿を気兼ねなく「おいしいね」と囲める時間をつくります。",
  },
  {
    label: "06｜現場での美しさ",
    title: "営業中の出し入れでも氷に戻らず、最後の一杯までなめらか",
    body: "業務用の冷凍庫で開け閉めを繰り返しても食感が痩せにくく、温かい焼き菓子の横やコースの締めくくりに、いつでも美しい状態でお出しいただけます。",
  },
] as const;

export default function ComparisonSection() {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 md:text-center"
        >
          <span className="text-brand mb-4 block text-sm font-semibold tracking-widest uppercase">
            Six Signatures
          </span>
          <h2 className="text-ink mb-6 font-serif text-2xl sm:text-3xl md:text-4xl">
            ひと口目で心をつかむ、6つの魅力。
          </h2>
          <p className="text-ink-light mx-auto max-w-2xl font-sans text-base leading-relaxed md:text-lg">
            植物性であること以上に、純粋に「もう一度食べたくなるクラフトアイス」であることを何より大切にしています。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {signaturePoints.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-xs sm:p-7"
            >
              <div className="mb-2.5 flex items-center gap-2">
                <Sparkles className="text-brand h-4 w-4 shrink-0" />
                <span className="text-brand font-sans text-xs font-bold tracking-wider">
                  {item.label}
                </span>
              </div>
              <h3 className="text-ink font-serif text-base leading-snug font-bold sm:text-lg">
                {item.title}
              </h3>
              <p className="text-ink-light mt-2.5 font-sans text-sm leading-[1.85]">{item.body}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-ink-light mb-6 font-sans text-sm">
            まずは6個の無料試食サンプルで、口どけと余韻をお確かめください。
          </p>
          <a
            href="#contact-form"
            className="bg-cta hover:bg-cta-hover inline-block rounded-full px-10 py-4 text-base font-bold text-white shadow-sm transition-all hover:shadow-md md:text-lg"
          >
            無料でサンプルを取り寄せる
          </a>
        </motion.div>
      </div>
    </section>
  );
}
