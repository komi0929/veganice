import Image from "next/image";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";
import { SectionHeader } from "./ui";

/**
 * 創業ストーリー・薬院実店舗の背景・子どもの写真エピソードセクション（折りたたみせず全文表示）
 */
export default function DessertStorySection() {
  return (
    <section id="story" className="scroll-mt-16 bg-[#fdfbf7] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* ── 1. Our Story（薬院の小さなお店と専用工房設立の背景） ── */}
        <div>
          <SectionHeader
            eyebrow="Our Story — 福岡・薬院の実店舗から"
            lines={["「全部食べれるなんて夢みたい！」", "その一言が、私たちの原点です。"]}
          />

          <div className="mt-10 grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
            <div className="space-y-3 md:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                <Image
                  src="/images/store_actual.png"
                  alt="SoyStoriesの実店舗（福岡・薬院）"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <span className="absolute bottom-2.5 left-2.5 rounded-lg bg-black/65 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-xs">
                  福岡・薬院の実店舗「SoyStories」
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-gray-100">
                  <Image
                    src="/images/craft_moment.jpg"
                    alt="SoyStoriesの専用工房・仕込み風景"
                    fill
                    className="object-cover object-[center_35%]"
                    sizes="(max-width: 768px) 48vw, 200px"
                  />
                </div>
                <div className="flex flex-col justify-center rounded-xl border border-gray-200/80 bg-white px-3.5 py-2.5">
                  <p className="text-brand text-base leading-tight font-bold sm:text-lg">
                    Google {WHOLESALE_FACTS.googleRating}
                  </p>
                  <p className="text-ink-muted mt-0.5 text-[11px] leading-snug">
                    口コミ {WHOLESALE_FACTS.googleReviewCount} ／ HappyCow{" "}
                    {WHOLESALE_FACTS.happyCowRating}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:col-span-7">
              <h3 className="text-ink text-xl leading-snug font-bold sm:text-2xl">
                お料理やお菓子に心を込めるお店へ。
                <br />
                アイスの一品は、専門店の私たちが担います。
              </h3>
              <div className="text-ink-light space-y-3 text-[14px] leading-[1.9] sm:text-[15px]">
                <p>
                  私たちSoyStoriesは、食に制限がある方やそのご家族にとって「ユメミタイ」と思える場所をつくりたいという想いから、福岡・薬院の小さなお店でスタートしました。
                </p>
                <p>
                  乳・卵・小麦・白砂糖を使わない手作りのアイスに、制限のあるお客様だけでなく、一緒に来店されたヴィーガンではないお客様からも
                  <strong className="text-ink">
                    「こっちのほうが美味しい！」「普通のアイスより好き」
                  </strong>
                  と多くの笑顔をいただくようになり、全国のお店へ届けるための専用工房を立ち上げました。
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-16 border-gray-200 sm:my-20" />

        {/* ── 2. Episode（子どもの写真と心温まるエピソード） ── */}
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
            <div className="text-ink-light space-y-3.5 text-[14px] leading-[1.95] sm:text-[15px]">
              <p>
                乳や卵・小麦のアレルギーがあるお子さんを持つご家族にとって、「みんなと同じデザートを気兼ねなく選べる」ことは、私たちが思う以上に大きな意味があります。
              </p>
              <p>
                ヴィーガンの方も、乳・卵・小麦アレルギーをお持ちの方も、そして一緒にテーブルを囲むご家族やご友人も。誰もが妥協せず「おいしいね！」と笑い合える時間。
              </p>
              <p>
                あなたのお店にも、食の制限があるお客様だけでなく、そのご友人やご家族がたくさん訪れるはずです。「全員が同じ一皿を心から楽しめるデザート」として、私たちのクラフトアイスをお役立ていただければ幸いです。
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

        {/* ── 3. 代表メッセージ ── */}
        <div className="mt-14 flex flex-col items-center gap-6 rounded-3xl border border-gray-200/80 bg-white p-6 shadow-2xs sm:flex-row sm:p-8">
          <div className="ring-brand/20 relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 sm:h-24 sm:w-24">
            <Image
              src="/images/owner_story.jpg"
              alt="株式会社ヒトコト 代表 小南 優作"
              fill
              sizes="96px"
              className="object-cover object-[center_15%]"
            />
          </div>
          <blockquote className="text-center sm:text-left">
            <p className="text-ink text-sm leading-relaxed font-bold sm:text-base">
              「食に制限がある方もない方も、同じテーブルで同じデザートを笑顔で囲める——薬院の小さなお店で見てきたそんな『ユメミタイ』な体験を、今度は全国の飲食店様と一緒に広げていきたいと思っています。まずは無料サンプルでお店の味との相性をお確かめください。」
            </p>
            <footer className="text-ink-muted mt-2 text-xs font-medium">
              株式会社ヒトコト（店舗 SoyStories） 代表　小南 優作
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
