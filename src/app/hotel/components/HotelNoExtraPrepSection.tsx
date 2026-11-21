import Image from "next/image";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

const targetScenes = [
  "海外ゲストのヴィーガン・菜食対応",
  "グルテンフリー・乳製品不使用",
  "ホテル・洋食コースのドルチェ",
  "旅館・会席の最後の水菓子",
  "婚礼・国際会議・アレルギー対応",
] as const;

const inboundElements = [
  {
    badge: "01｜食の条件を1つでカバー",
    title: "海外のお客様に多い「ヴィーガン・グルテンフリー・乳卵不使用」にこれ1つで対応",
    body: "欧米・豪州・アジアからのご宿泊や訪日団体では、ヴィーガン・ベジタリアン、グルテンフリー（小麦不使用）、乳製品を控える食習慣、食物アレルギーが日常的に重なります。全11種が100%植物性・乳卵小麦不使用のため、複数のリクエストにも同じアイス1つで対応できます。",
  },
  {
    badge: "02｜日本らしい食体験",
    title: "「カットフルーツだけ」への差し替えをなくし、日本ならではの甘味体験を",
    body: "海外ゲストがコースや会席で最も残念に感じるのが、自分だけ果物盛りや市販シャーベットに差し替えられることです。抹茶・ほうじ茶・UMAMIバニラ（白味噌）や国産果実など、日本の茶葉と伝統発酵素材（甘酒・白味噌）を活かした本格的な一皿をお出しできます。",
  },
  {
    badge: "03｜厨房の省力化・無ロス",
    title: "事前申告の日も、当日の急なリクエストも、別に仕込まず盛るだけ",
    body: "1名分だけ別メニューを仕込む手間や、配膳時の出し間違いリスクがなくなります。米粉の独自製法でシャリシャリ感がなく、冷凍庫の出し入れを繰り返しても滑らかな舌触りが続き、乳脂肪ゼロのためフルコースや会席の後でもすっきり召し上がっていただけます。",
  },
  {
    badge: "04｜スタッフも案内しやすい",
    title: "添加物・白砂糖不使用。原材料が明確で英語でも案内しやすい",
    body: `海外のお客様は原材料（Ingredients）を細かく確認されます。${WHOLESALE_FACTS.freeFromAdditivesAndWhiteSugar}シンプルな素材設計で、味ごとの原材料・アレルゲンも明確なため、フロントやホールでも迷わずご案内いただけます。`,
  },
] as const;

export default function HotelNoExtraPrepSection() {
  return (
    <section id="no-extra-prep" className="bg-[#f7f3ec] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* 導入場面タグ */}
        <div className="mb-7 flex flex-wrap gap-2">
          {targetScenes.map((scene) => (
            <span
              key={scene}
              className="text-ink rounded-full border border-stone-300/70 bg-white px-3.5 py-1 font-sans text-xs font-medium shadow-2xs"
            >
              {scene}
            </span>
          ))}
        </div>

        <p className="text-brand mb-3 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          海外ゲスト対応と厨房のメリット
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl md:text-4xl">
          海外のお客様が増える現場に必要な4つの要素を、ひと皿に。
        </h2>
        <p className="text-ink-light mt-4 max-w-3xl font-sans text-[15px] leading-[1.85] sm:text-base">
          ヴィーガンやグルテンフリー、乳製品不使用を求める海外からのお客様にも、アレルギーをお持ちのお客様にも、そして一般のお客様にも。別々のデザートを用意することなく、全員に同じ一皿をお出しいただけます。
        </p>

        {/* 4つの要素（2×2グリッド） */}
        <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {inboundElements.map((item) => (
            <div
              key={item.badge}
              className="flex flex-col rounded-2xl border border-stone-200/80 bg-white p-5 shadow-2xs sm:p-6"
            >
              <span className="bg-brand/10 text-brand inline-block self-start rounded-full px-3 py-1 font-sans text-xs font-bold">
                {item.badge}
              </span>
              <h3 className="text-ink mt-3 font-serif text-base leading-snug font-bold sm:text-lg">
                {item.title}
              </h3>
              <p className="text-ink-light mt-2 font-sans text-sm leading-[1.85]">{item.body}</p>
            </div>
          ))}
        </div>

        {/* 専用工房の実写とアレルゲン管理 */}
        <div className="mt-6 flex flex-col items-center gap-5 rounded-3xl border border-stone-200/80 bg-white p-5 shadow-2xs sm:flex-row sm:p-6">
          <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-2xl sm:h-32 sm:w-44">
            <Image
              src="/images/factory_kitchen_craft.webp"
              alt="乳・卵・小麦を持ち込まない専用工房での製造風景"
              fill
              sizes="(max-width: 640px) 100vw, 180px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-brand font-sans text-xs font-bold">
              乳・卵・小麦を持ち込まない専用工房（福岡・薬院 SoyStories）
            </p>
            <p className="text-ink mt-1 font-sans text-sm font-bold">
              {WHOLESALE_FACTS.allergenAssurance}製造環境でつくっています
            </p>
            <p className="text-ink-light mt-1.5 font-sans text-xs leading-relaxed">
              {WHOLESALE_FACTS.allergen}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
