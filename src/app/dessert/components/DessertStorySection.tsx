import Image from "next/image";
import { SectionHeader } from "./ui";

/**
 * 創業ストーリー＆感動エピソードセクション
 * ブランドの想い（ミッション）と、プロの現場で扱いたくなる情緒的価値を届ける
 */
export default function DessertStorySection() {
  return (
    <section id="story" className="scroll-mt-16 bg-[#fdfbf7] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* ── 1. Our Story（創業の想いと決断） ── */}
        <div>
          <SectionHeader
            eyebrow="Our Story"
            lines={["「全部食べれるなんて夢みたい！」", "その一言が、私たちの原点です。"]}
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
                お料理やお菓子に全力を注ぐお店へ。
                <br />
                アイスの一品は、専門店の私たちが担います。
              </h3>
              <div className="text-ink-light space-y-3 text-[14px] leading-[1.9] sm:text-[15px]">
                <p>
                  私たちSoyStoriesの想いは、食の制限がある方やそのご家族にとって「ユメミタイ」と思える幸せな時間をつくること。
                </p>
                <p>
                  「みんなで一緒に美味しく食べられる幸せ」を届けるため、福岡・薬院の小さなお店でお客様をお迎えしてきました。
                  私たちがこだわったのは、ヴィーガンの方や乳・卵・小麦のアレルギーをお持ちの方はもちろん、
                  <strong>
                    一緒に来店されたノンヴィーガンのお客様からも「普通のアイスより好き」と喜んでいただける本物の美味しさ
                  </strong>
                  です。
                </p>
                <p>
                  日々の料理を極めるお店や、粉と砂糖を選んで焼き菓子に打ち込むお店にとって、ジェラート専用マシンを置いて一から濃厚な植物性アイスを仕込むのは現実的ではありません。
                  だからこそ私たちが乳・卵・小麦を持ち込まない専用工房で一釜ずつ丁寧に炊き上げ、「お皿の最後の一口まで妥協したくない」全国のお店へお届けしています。
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
                  乳や卵・小麦のアレルギーがあるお子さんを持つご家族にとって、「みんなと同じデザートを気兼ねなく選べる」ことは、私たちが思う以上に大きな意味があります。
                </p>
                <p>
                  ヴィーガンの方も、乳・卵・小麦アレルギーをお持ちの方も、そして一緒にテーブルを囲むノンヴィーガンの方も。誰もが妥協せず「おいしいね！」と笑い合える時間。
                </p>
                <p>
                  あなたのお店にも、食の制限があるお客様だけでなく、そのご友人やご家族がたくさん訪れるはずです。
                  「全員が同じ一皿を心から楽しめるデザート」として、私たちのクラフトアイスをお役立ていただければ幸いです。
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
