import Image from "next/image";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

const inboundElements = [
  {
    badge: "01｜食の条件を1つでカバー",
    title: "海外のお客様に多い「ヴィーガン・グルテンフリー・乳卵不使用」にこれ1つで対応",
    body: "欧米・豪州・アジアからのご宿泊や訪日団体では、ヴィーガン・ベジタリアン、グルテンフリー（小麦不使用）、乳製品を控える食習慣、乳・卵・小麦アレルギーが日常的に重なります。全11種が100%植物性・乳卵小麦不使用のため、複数のリクエストにもお子さまの夕食にも同じアイス1つで対応できます。",
  },
  {
    badge: "02｜カットフルーツからの卒業",
    title: "「その方だけ果物盛り」の心苦しさをなくし、濃密でキレのある甘味を",
    body: "アレルギーのお子さまや海外ゲストが最も寂しく感じるのが、同席者の華やかなデザートの横で自分だけ果物盛りや氷シャーベットに差し替えられることです。お濃茶のような抹茶や生チョコのようなショコラ、国産果実など、全員に同じメイン甘味として堂々とお出しできる濃密さに仕立てました。",
  },
  {
    badge: "03｜厨房の省力化・無ロス",
    title: "事前申告の日も、当日の急なリクエストも、別仕込み・廃棄ロスゼロ",
    body: "1名分だけ専用デザートを仕込む手間や、通常厨房でのコンタミ不安・出し間違いを減らせます。食べている最中はしっかり濃厚でありながら舌に重たい膜を残さないため、品数の多い会席やフルコースの締めくくりに心地よく収まります。",
  },
  {
    badge: "04｜スタッフも案内しやすい",
    title: "乳・卵・小麦・白砂糖不使用。原材料が明確で英語でも案内しやすい",
    body: "海外のお客様は原材料（Ingredients）を細かく確認されます。全11種が乳・卵・小麦・白砂糖不使用で、味ごとの全原材料・アレルゲンを一覧公開しているため、フロントやホールでも迷わずご案内いただけます。",
  },
] as const;

const craftProofs = [
  {
    tag: "専用工房",
    title: "乳・卵・小麦 持ち込みゼロ",
    caption: "コンタミリスクを抑えた専用環境で手づくり製造",
    image: "/images/factory_kitchen_craft.webp",
    alt: "乳・卵・小麦を持ち込まない専用工房での製造風景",
  },
  {
    tag: "日本の発酵素材",
    title: "甘酒・白味噌が生む深いコク",
    caption: "植物性でも物足りなさのない奥行きある味わい",
    image: "/images/ingredient_miso_amazake.jpg",
    alt: "甘酒と白味噌など日本の伝統発酵素材",
  },
  {
    tag: "米粉の独自製法",
    title: "出し入れしても滑らかさが続く",
    caption: "シャリシャリ感がなく営業中もクリーミーな舌触り",
    image: "/images/bulk_scoop.jpg",
    alt: "米粉の独自製法による滑らかな植物性クラフトアイス",
  },
] as const;

export default function HotelNoExtraPrepSection() {
  return (
    <section id="no-extra-prep" className="scroll-mt-14 bg-[#f7f3ec] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-brand mb-3 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          どんなアイス？｜海外ゲスト対応と厨房のメリット
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl md:text-4xl">
          「1人だけ別メニュー」の手間をなくし、
          <br className="hidden sm:inline" />
          全員に同じ本格デザートを。
        </h2>
        <div className="text-ink-light mt-4 max-w-3xl space-y-2.5 font-sans text-[15px] leading-[1.85] sm:text-base">
          <p>
            私たちSoyStories（ソイストーリーズ）は、100%植物性・グルテンフリーのお菓子とアイスを手づくりしている福岡・薬院のスイーツ専門店です。
          </p>
          <p>
            乳・卵・小麦を持ち込まない専用工房で仕込んだクラフトアイスを、全国のホテル・旅館・コース料理店様へ業務用の1L・2L容器でお届けしています。海外からのご宿泊客や食の制限の申告がある日も、別メニューを仕込むことなく皆様に同じ一皿をお出しいただけます。
          </p>
        </div>

        {/* 海外のお客様が増える現場に必要な4つの要素（2×2グリッド） */}
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

        {/* 品質を支える3つの製法・環境（写真付き） */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {craftProofs.map((proof) => (
            <div
              key={proof.tag}
              className="flex items-center gap-3.5 rounded-2xl border border-stone-200/80 bg-white p-3.5 shadow-2xs sm:flex-col sm:items-stretch sm:p-4"
            >
              <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl bg-stone-100 sm:aspect-[16/10] sm:h-auto sm:w-full">
                <Image
                  src={proof.image}
                  alt={proof.alt}
                  fill
                  sizes="(max-width: 640px) 96px, 33vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-brand font-sans text-[11px] font-bold">{proof.tag}</p>
                <p className="text-ink mt-0.5 font-sans text-sm font-bold">{proof.title}</p>
                <p className="text-ink-muted mt-1 font-sans text-xs leading-relaxed">
                  {proof.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-stone-200/80 bg-white px-5 py-4 sm:px-6">
          <p className="text-ink font-sans text-xs leading-relaxed sm:text-sm">
            <strong className="text-brand mr-2 font-bold">アレルゲン管理（専用工房）：</strong>
            {WHOLESALE_FACTS.allergenAssurance}製造環境です。{WHOLESALE_FACTS.allergen}。
          </p>
        </div>
      </div>
    </section>
  );
}
