import Image from "next/image";
import WholesaleFlavorGrid, {
  type WholesaleFlavorGroup,
} from "@/app/components/wholesale/WholesaleFlavorGrid";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

const cafeFlavorGroups: WholesaleFlavorGroup[] = [
  {
    title: "ミルク・カカオ・茶葉系（6種）",
    subtitle: "焼き菓子や珈琲に合う定番6種",
    items: [
      {
        displayName: "UMAMIバニラ",
        image: "/images/flavors/umami_vanilla.png",
        note: "人気No.1。甘酒と白みそのコク",
      },
      {
        displayName: "抹茶",
        image: "/images/flavors/matcha.png",
        note: "抹茶のほろ苦さに甘酒のコク",
      },
      {
        displayName: "バニラココナッツ",
        image: "/images/flavors/vanilla_coconut.png",
        note: "ココナッツが香るさっぱりした甘さ",
      },
      {
        displayName: "ほうじ茶",
        image: "/images/flavors/houjicha.png",
        note: "香ばしい茶葉の香りと軽い後味",
      },
      {
        displayName: "アールグレイ",
        image: "/images/flavors/earl_gray.png",
        note: "ベルガモットと紅茶の華やかな香り",
      },
      {
        displayName: "ショコラ",
        image: "/images/flavors/chocolate.png",
        note: "カカオが濃い生チョコのような食感",
      },
    ],
  },
  {
    title: "フルーツ系（5種・豆乳不使用）",
    subtitle: "フロートや食後に合う果実系5種",
    items: [
      {
        displayName: "マンゴー",
        image: "/images/flavors/mango.png",
        note: "完熟マンゴーの濃厚でなめらかな甘み",
      },
      {
        displayName: "ミックスベリー",
        image: "/images/flavors/berry_mix.png",
        note: "苺と木苺の甘酸っぱい果実味",
      },
      {
        displayName: "もも",
        image: "/images/flavors/peach.png",
        note: "国産白桃のやさしい香りと果汁感",
      },
      {
        displayName: "りんご",
        image: "/images/flavors/apple.png",
        note: "国産りんご果汁のみずみずしい甘み",
      },
      {
        displayName: "ドラゴンフルーツ",
        image: "/images/flavors/dragon_fruit.png",
        note: "パインとココナッツを合わせた果実味",
      },
    ],
  },
];

const compactTerms = [
  {
    label: "卸価格・ロット",
    value: "1L ¥2,000・2L ¥4,000（税別・4L〜味自由）／ 100mlカップ ¥300（税別・60個〜）",
  },
  {
    label: "1Lあたり杯数",
    value: "#18（50ml）約20杯＝約100円 ／ #12（80ml）約12杯＝約167円",
  },
  {
    label: "配送・お支払い",
    value: "通常5営業日前後で冷凍便発送 ／ 月末締め・翌月末請求書払い（銀行振込）",
  },
  {
    label: "アレルゲン管理",
    value: `${WHOLESALE_FACTS.freeFromAdditivesAndWhiteSugar}。${WHOLESALE_FACTS.allergen}`,
  },
] as const;

export default function CafeFlavorsSection() {
  return (
    <section id="flavors" className="bg-bg-white scroll-mt-14 py-12 sm:py-18">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-brand mb-2 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
              <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
              全11種の味・仕入れ条件
            </p>
            <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
              全11種同価格。4L（1L×4本など）から自由に組み合わせ。
            </h2>
          </div>
          <p className="text-ink-muted font-sans text-xs">※タップで原材料・栄養を表示</p>
        </div>

        <div className="mt-6">
          <WholesaleFlavorGrid groups={cafeFlavorGroups} />
        </div>

        {/* 仕入れ条件・容器サイズを直下にコンパクト統合 */}
        <div
          id="terms"
          className="mt-8 scroll-mt-16 rounded-3xl border border-stone-200/80 bg-[#f7f3ec] p-5 sm:p-6"
        >
          <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-12">
            <div className="grid grid-cols-2 gap-3 lg:col-span-4">
              <div className="overflow-hidden rounded-2xl border border-stone-200/70 bg-white p-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/bulk_1l.jpg"
                    alt="1L角型バルク容器"
                    fill
                    sizes="(max-width: 1024px) 45vw, 18vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-ink mt-1.5 text-center font-sans text-[11px] font-bold">
                  1L 角型（約20杯分）
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-stone-200/70 bg-white p-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/bulk_2l.jpg"
                    alt="2L角型バルク容器"
                    fill
                    sizes="(max-width: 1024px) 45vw, 18vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-ink mt-1.5 text-center font-sans text-[11px] font-bold">
                  2L 角型（約40杯分）
                </p>
              </div>
            </div>

            <dl className="divide-y divide-stone-200/70 rounded-2xl bg-white px-4 py-1 sm:px-5 lg:col-span-8">
              {compactTerms.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 gap-0.5 py-2.5 sm:grid-cols-[7.5rem_1fr] sm:gap-3"
                >
                  <dt className="text-brand font-sans text-xs font-bold">{row.label}</dt>
                  <dd className="text-ink font-sans text-xs leading-relaxed">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
