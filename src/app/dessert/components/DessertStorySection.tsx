import Image from "next/image";
import { SectionHeader } from "./ui";

/**
 * 創業ストーリー＆感動エピソードセクション
 * ブランドの想い（ミッション）と、プロの現場で扱いたくなる情緒的価値を届ける
 */
export default function DessertStorySection() {
  return (
    <section id="story" className="bg-[#fdfbf7] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* ── 1. Our Story（創業の想いと決断） ── */}
        <div>
          <SectionHeader
            eyebrow="Our Story"
            lines={["「こっちのほうが美味しい！」", "その一言が、私たちの原点です。"]}
          />

          <div className="mt-10 grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 shadow-sm sm:aspect-square md:col-span-5">
              <Image
                src="/images/craft_moment.jpg"
                alt="SoyStoriesの工房・仕込み風景"
                fill
                className="object-cover object-[center_35%]"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>

            <div className="space-y-4 md:col-span-7">
              <h3 className="text-ink text-xl leading-snug font-bold sm:text-2xl">
                料理に全力を注ぐ飲食店様へ。
                <br />
                デザートは、スイーツ専門店の私たちが担います。
              </h3>
              <div className="text-ink-light space-y-3 text-[14px] leading-[1.9] sm:text-[15px]">
                <p>
                  私たちSoyStoriesは、福岡・薬院でヴィーガン＆グルテンフリーのスイーツだけを追求してきた専門店です。
                </p>
                <p>
                  ラーメンやバーガーなど、メインのお料理を極める飲食店様にとって、デザートを一から自家製で仕込むのは大きな負担です。
                  私たちは食事の競合ではなく、スイーツ専門のパートナーとして、お店自慢のお料理の後味を最高に締めくくるデザートをお手伝いしたいと考えています。
                </p>
                <p>
                  実店舗で「普通のアイスより美味しい！」と絶賛された手作りのクラフトアイスを、乳・卵・小麦を持ち込まない専用工房から全国のお店へお届けします。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 境界線 */}
        <hr className="my-16 border-gray-200 sm:my-20" />

        {/* ── 2. Episode（心温まるエピソード） ── */}
        <div>
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
            <div className="space-y-4 md:order-1 md:col-span-7">
              <p className="text-brand font-mono text-xs font-bold tracking-widest uppercase">
                Episode
              </p>
              <h3 className="text-ink text-2xl leading-snug font-bold sm:text-3xl">
                「はじめて子どもにアイスを
                <br />
                食べさせることができた」
              </h3>
              <p className="text-brand text-base font-bold sm:text-lg">
                そう言って涙されたお母さんがいました。
              </p>
              <div className="text-ink-light space-y-3 text-[14px] leading-[1.9] sm:text-[15px]">
                <p>
                  アレルギーのあるお子さんを持つご家族にとって、「みんなと同じデザートを食べられる」ことは、私たちが思う以上に大きな意味があります。
                </p>
                <p>
                  ヴィーガンの方も、アレルギーをお持ちの方も、そうでない方も、同じテーブルを囲んで「おいしいね」と笑い合える時間。
                </p>
                <p>
                  あなたのお店にも、きっと同じような想いを抱えたご家族や、美味しいヴィーガンメニューを求めるお客様がいらっしゃるはずです。その大切なひと皿を、私たちのアイスでお手伝いさせてください。
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 shadow-sm sm:aspect-square md:order-2 md:col-span-5">
              <Image
                src="/images/child_first_icecream.jpg"
                alt="初めてクラフトアイスを食べる子どもの様子"
                fill
                className="object-cover object-[center_45%]"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
