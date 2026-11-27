import Image from "next/image";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

interface WholesaleOriginStorySectionProps {
  variant?: "dessert" | "cafe" | "hotel" | "oem";
  fontTone?: "serif" | "sans";
}

const VARIANT_COPY = {
  dessert: {
    eyebrow: "私たちの原点（福岡・薬院 SoyStories）",
    headingLines: ["「全部食べれるなんて夢みたい！」", "その一言が、私たちの原点です。"],
    subHeading: "お料理やお菓子に心を込めるお店へ。アイスの一品は、専門店の私たちが担います。",
    closingLine:
      "食の制限がある方も、一緒にテーブルを囲むご家族やご友人も、全員が同じ一皿を楽しめるデザートとしてお役立てください。",
  },
  cafe: {
    eyebrow: "私たちの原点（福岡・薬院 SoyStories）",
    headingLines: [
      "「全部食べれるなんて夢みたい！」",
      "小さなお店で生まれた笑顔から始まりました。",
    ],
    subHeading:
      "お菓子やドリンクに心を込めるお店へ。アイスのひとさじは、専門店の私たちが担います。",
    closingLine:
      "ドーナツや焼き菓子、パフェを楽しみに来店されるすべてのお客様が、同じテーブルで気兼ねなく「おいしいね」と笑い合える一皿をお届けできれば幸いです。",
  },
  hotel: {
    eyebrow: "私たちの原点（福岡・薬院 SoyStories）",
    headingLines: [
      "「同じテーブルで、みんなと同じデザートを」",
      "福岡・薬院の小さなお店から始まりました。",
    ],
    subHeading: "料理に心を込めるお宿へ。デザートのひと皿は専門店の私たちが担います。",
    closingLine:
      "ご宿泊やご婚礼の大切な席で、1人だけ別メニューにすることなく、テーブルの皆様が同じデザートを囲める時間をお手伝いできれば幸いです。",
  },
  oem: {
    eyebrow: "私たちの原点（福岡・薬院 SoyStories）",
    headingLines: ["なぜ私たちが、専用工房をつくり", "小ロットOEMをお引き受けしているのか。"],
    subHeading: "福岡・薬院の直営店で磨いた製法を、貴店だけのオリジナル商品としてお届けします。",
    closingLine:
      "農家様が育てた大切な果物や、お店こだわりの茶葉・素材の魅力をまっすぐ引き出し、誰もが安心して笑顔になれるアイスを一釜ずつ丁寧にお作りします。",
  },
} as const;

export default function WholesaleOriginStorySection({
  variant = "cafe",
  fontTone = "serif",
}: WholesaleOriginStorySectionProps) {
  const copy = VARIANT_COPY[variant];
  const headingFont = fontTone === "sans" ? "font-sans" : "font-serif";

  return (
    <section
      id="story"
      className="scroll-mt-16 border-t border-stone-200/70 bg-[#fdfbf7] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* ── 1. 福岡・薬院の実店舗と専用工房設立の背景 ── */}
        <div>
          <p className="text-brand mb-2.5 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
            <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
            {copy.eyebrow}
          </p>
          <h2
            className={`text-ink ${headingFont} text-2xl leading-snug font-bold sm:text-3xl md:text-4xl`}
          >
            {copy.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <div className="mt-10 grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
            <div className="space-y-3 md:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-100 shadow-xs">
                <Image
                  src="/images/store_actual.png"
                  alt="福岡・薬院の実店舗 SoyStories"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover"
                />
                <span className="absolute bottom-2.5 left-2.5 rounded-lg bg-black/65 px-2.5 py-1 font-sans text-[11px] font-bold text-white backdrop-blur-xs">
                  福岡・薬院の実店舗「SoyStories」
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-stone-200/80 bg-stone-100">
                  <Image
                    src="/images/craft_moment.jpg"
                    alt="福岡・薬院店 SoyStories の店内"
                    fill
                    sizes="(max-width: 768px) 48vw, 200px"
                    className="object-cover object-[center_35%]"
                  />
                </div>
                <div className="flex flex-col justify-center rounded-xl border border-stone-200/80 bg-white px-3.5 py-2.5">
                  <p className={`text-brand ${headingFont} text-lg leading-tight font-bold`}>
                    Google {WHOLESALE_FACTS.googleRating}
                  </p>
                  <p className="text-ink-muted mt-0.5 font-sans text-[11px] leading-snug">
                    口コミ {WHOLESALE_FACTS.googleReviewCount} ／ HappyCow{" "}
                    {WHOLESALE_FACTS.happyCowRating}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:col-span-7">
              <h3
                className={`text-ink ${headingFont} text-lg leading-relaxed font-bold sm:text-2xl`}
              >
                {copy.subHeading}
              </h3>
              <div className="text-ink-light space-y-3.5 font-sans text-sm leading-[1.9] sm:text-[15px]">
                <p>
                  私たちSoyStories（ソイストーリーズ）は、アレルギーやヴィーガンなど食に制限がある方も気兼ねなく選べる場所をつくりたいという想いから、福岡・薬院の小さなお店でスタートしました。
                </p>
                <p>
                  乳・卵・小麦・白砂糖を使わずに作るクラフトアイスは、制限のある方だけでなくヴィーガンではないお客様からも
                  <strong className="text-ink">
                    「こっちのほうが美味しい！」「普通のアイスより好き！」
                  </strong>
                  と選ばれるようになり、全国のお店へ届けるため専用工房を立ち上げました。
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-14 border-stone-200/80 sm:my-18" />

        {/* ── 2. 子どもの写真エピソード（「はじめて子どもにアイスを食べさせることができた」） ── */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
          <div className="space-y-4 md:order-1 md:col-span-7">
            <p className="text-brand font-sans text-xs font-bold tracking-widest uppercase">
              Episode
            </p>
            <h3 className={`text-ink ${headingFont} text-2xl leading-snug font-bold sm:text-3xl`}>
              「はじめて子どもにアイスを
              <br />
              食べさせることができた」
            </h3>
            <p className="text-brand font-sans text-base font-bold sm:text-lg">
              そう言って涙されたお母さんがいました。
            </p>
            <div className="text-ink-light space-y-3.5 font-sans text-sm leading-[1.9] sm:text-[15px]">
              <p>
                乳・卵・小麦のアレルギーがあるお子さんを持つご家族にとって、「みんなと同じものを気兼ねなく食べられる」ことは大きな意味があります。
              </p>
              <p>{copy.closingLine}</p>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-stone-200/80 shadow-sm sm:aspect-square md:order-2 md:col-span-5">
            <Image
              src="/images/child_first_icecream.jpg"
              alt="初めてクラフトアイスを食べる子どもの様子"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover object-[center_45%]"
            />
          </div>
        </div>

        {/* ── 3. 代表メッセージ ── */}
        <div className="mt-12 flex flex-col items-center gap-6 rounded-3xl border border-stone-200/80 bg-white p-6 shadow-2xs sm:flex-row sm:p-8">
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
            <p className={`text-ink ${headingFont} text-sm leading-relaxed font-bold sm:text-base`}>
              「食に制限がある方もない方も、同じテーブルで同じデザートを笑顔で囲める。薬院の小さなお店で日々見てきたその光景を、全国のお店と一緒に広げていきたいと思っています。まずはご試食サンプルで、貴店のお料理やお菓子との相性をお確かめください。」
            </p>
            <footer className="text-ink-muted mt-2 font-sans text-xs font-medium">
              株式会社ヒトコト（店舗 SoyStories） 代表　小南 優作
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
