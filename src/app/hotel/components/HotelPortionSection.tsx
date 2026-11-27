import Image from "next/image";
import Link from "next/link";
import HotelMenuCardCopyButton from "./HotelMenuCardCopyButton";

const usageCards = [
  {
    badge: "① 会席の水菓子・コースの締めに",
    metric: "会席の小鉢 約50ml（#18）＝ 1人分 約100円",
    subMetric: "1Lあたり 約20人分 ／ 洋コース皿 約80ml（#12）＝ 約167円（税別）",
    caption:
      "海外のヴィーガンのお客様やアレルギーをお持ちの方がいる日も、果物だけに差し替えず、皆様と同じ器・同じ甘味で会席を締めくくれます。",
    japaneseFive:
      "和の5種との組み合わせ：懐石の余韻に寄り添う「抹茶・ほうじ茶・UMAMIバニラ」、品数の多い食後にもみずみずしい「国産りんご・もも」",
    image: "/images/serving/serving_monaka.jpg",
    objectPosition: "object-[center_70%]",
  },
  {
    badge: "② ルームサービス・お部屋で出す一品に",
    metric: "100ml個食カップ 税別300円（60個〜）",
    subMetric: "1L・2Lバルクでの器盛りにも対応",
    caption:
      "湯上がりのひと息やお夜食、客室冷凍庫への常備・フロントでのお渡しに。個食カップなら盛り付けの手間なくそのままお部屋へお出しいただけます。",
    japaneseFive:
      "和の5種との組み合わせ：海外のお客様が客室で「日本の味」を感じられる「抹茶・ほうじ茶・UMAMIバニラ・りんご・もも」を季節や客層に合わせて常備",
    image: "/images/gelato_spoon_moment.jpg",
    objectPosition: "object-[center_62%]",
  },
  {
    badge: "③ 売店の「屋号入りカップ」に",
    metric: "開発費0円・税別286円／個（1味60個〜）",
    subMetric: "天面丸シール（φ72mm）ご支給・底面法定表示は当社貼付",
    caption:
      "定番11種のカップ天面に、お宿の屋号やロゴ丸シールを貼ってお届けします。館内売店やラウンジで、お宿オリジナルのお土産・湯上がり甘味として販売できます。",
    japaneseFive:
      "和の5種との組み合わせ：「抹茶・ほうじ茶・UMAMIバニラ・りんご・もも」から、お宿の佇まいに合う和の味を1味60個単位で屋号入りに",
    image: "/images/gelato_cup_tower.jpg",
    objectPosition: "object-cover",
  },
] as const;

const JP_MENU_SAMPLE = "植物性クラフトアイス（乳・卵・小麦・白砂糖不使用）";
const EN_MENU_SAMPLE = "Plant-Based Craft Ice Cream (Vegan / Gluten-Free / Dairy & Egg Free)";
const EN_JAPANESE_FIVE_SAMPLE =
  "Matcha / Hojicha (Roasted Green Tea) / UMAMI Vanilla / Japanese Apple / White Peach";

export default function HotelPortionSection() {
  return (
    <section id="portion" className="bg-bg-white scroll-mt-14 py-12 sm:py-18">
      <span id="banquet" className="-mt-16 block pt-16" aria-hidden="true" />
      <span id="usage" className="-mt-16 block pt-16" aria-hidden="true" />
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-brand mb-2 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          お宿での3つの使い方
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
          会席の水菓子から、お部屋出し、売店の屋号入りカップまで。
        </h2>
        <p className="text-ink-light mt-2.5 max-w-3xl font-sans text-sm leading-relaxed sm:text-[15px]">
          海外のお客様にも「日本の味」として喜ばれる和の5種（抹茶・ほうじ茶・UMAMIバニラ・りんご・もも）を中心に、厨房・客室・売店のそれぞれの場面でお使いいただけます。
        </p>

        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {usageCards.map((card) => (
            <div
              key={card.badge}
              className="flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-[#fafaf8] p-3.5"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-stone-100">
                <Image
                  src={card.image}
                  alt={card.badge}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`object-cover ${card.objectPosition}`}
                />
                <span className="absolute top-2.5 left-2.5 rounded-full bg-white/95 px-2.5 py-0.5 font-sans text-[11px] font-bold text-stone-800 shadow-2xs">
                  {card.badge}
                </span>
              </div>
              <div className="mt-3 flex flex-1 flex-col px-0.5">
                <p className="text-ink font-sans text-sm font-bold sm:text-[15px]">{card.metric}</p>
                <p className="text-brand mt-0.5 font-sans text-[11.5px] leading-snug font-bold">
                  {card.subMetric}
                </p>
                <p className="text-ink-light mt-2 font-sans text-xs leading-relaxed">
                  {card.caption}
                </p>
                <p className="text-ink mt-auto pt-3 font-sans text-[11.5px] leading-relaxed">
                  <span className="bg-brand/10 text-brand mr-1.5 inline-block rounded px-1.5 py-0.5 text-[10.5px] font-bold">
                    和の5種
                  </span>
                  {card.japaneseFive.replace("和の5種との組み合わせ：", "")}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 地元素材での専用の味（OEM：仕入先廃業の代替・地産開発） */}
        <div className="mt-5 flex flex-col justify-between gap-3 rounded-2xl border border-stone-200/80 bg-[#f7f3ec] px-4 py-4 sm:flex-row sm:items-center sm:px-6">
          <div className="max-w-3xl">
            <p className="text-brand font-sans text-xs font-bold">
              地元素材での専用の味（小ロットOEM・60個／6L〜）
            </p>
            <p className="text-ink mt-1 font-sans text-xs leading-relaxed sm:text-[13.5px]">
              <strong>
                「客室や売店で出していた地元アイスの製造元が廃業し、代わりを探している」「地域の果物やお茶で宿だけの味を作りたい」
              </strong>
              というご相談も承っております。初期試作開発費
              税別30,000円（＋試作実費）にて専用レシピを開発し、100mlカップ（60個〜）・2Lバルク（6L〜）の両方でお届け可能です（※卵・乳・小麦を含まない素材に対応）。
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3 font-sans text-xs font-bold sm:flex-col sm:items-end sm:gap-2">
            <Link
              href="/oem/plan?src=hotel_portion"
              className="text-brand underline underline-offset-4"
            >
              屋号ロゴ・地元素材OEMを見る →
            </Link>
            <Link
              href="/wholesale"
              className="text-ink-light hover:text-brand underline underline-offset-4"
            >
              100mlカップ通常卸を見る →
            </Link>
          </div>
        </div>

        {/* そのまま使える英語・日本語の献立札／ビュッフェ札 見本 */}
        <div
          id="menu-card"
          className="mt-6 scroll-mt-16 rounded-3xl border border-stone-300/80 bg-[#fdfbf7] p-5 shadow-2xs sm:p-6"
        >
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <p className="text-brand font-sans text-xs font-bold tracking-wider">
                お品書き・ビュッフェ札・客室案内にそのまま使える表記見本
              </p>
              <h3 className="text-ink mt-1 font-serif text-lg leading-snug font-bold sm:text-xl">
                海外のお客様にも一目で伝わる「英語の献立札」見本
              </h3>
            </div>
            <HotelMenuCardCopyButton copyText={`${JP_MENU_SAMPLE}\n${EN_MENU_SAMPLE}`} />
          </div>

          <div className="mt-4 rounded-2xl border border-stone-200 bg-white px-4 py-4 sm:px-6 sm:py-5">
            <p className="text-ink font-serif text-sm font-bold sm:text-base">{JP_MENU_SAMPLE}</p>
            <p className="text-ink mt-1.5 font-sans text-sm leading-snug font-bold tracking-wide sm:text-base">
              {EN_MENU_SAMPLE}
            </p>
            <p className="text-ink-muted mt-2.5 border-t border-stone-100 pt-2.5 font-sans text-[11.5px] leading-relaxed sm:text-xs">
              <strong className="text-ink-light">和の5種の英語表記例：</strong>
              {EN_JAPANESE_FIVE_SAMPLE}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
