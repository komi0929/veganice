import Image from "next/image";
import WholesaleFlavorGrid, {
  type WholesaleFlavorGroup,
} from "@/app/components/wholesale/WholesaleFlavorGrid";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

const hotelFlavorGroups: WholesaleFlavorGroup[] = [
  {
    title: "和の献立・水菓子に（5種）",
    subtitle: "会席・懐石・精進料理の締めくくりに余韻を残す和素材・国産果実",
    items: [
      {
        displayName: "抹茶",
        image: "/images/flavors/matcha.png",
        note: "濃縮甘酒と白みそが支えるお濃茶仕立て",
      },
      {
        displayName: "ほうじ茶",
        image: "/images/flavors/houjicha.png",
        note: "焙煎茶葉の立ち上る薫香と甘酒のコク",
      },
      {
        displayName: "UMAMIバニラ（白味噌）",
        specKey: "UMAMIバニラ",
        image: "/images/flavors/umami_vanilla.png",
        note: "甘酒・白みそが香る和食にも合うバニラ",
      },
      {
        displayName: "りんご",
        image: "/images/flavors/apple.png",
        note: "国産りんご果汁の蜜感と爽やかな酸味",
      },
      {
        displayName: "もも",
        image: "/images/flavors/peach.png",
        note: "国産白桃のみずみずしい香りと甘み",
      },
    ],
  },
  {
    title: "洋のコース・朝食ビュッフェに（6種）",
    subtitle: "ガトー添え・アシェットデセール・インバウンド朝食に華やぐ6種",
    items: [
      {
        displayName: "バニラココナッツ",
        image: "/images/flavors/vanilla_coconut.png",
        note: "ココナッツと白みそが香る王道バニラ",
      },
      {
        displayName: "アールグレイ",
        image: "/images/flavors/earl_gray.png",
        note: "ベルガモットと紅茶葉が気品高く香る一玉",
      },
      {
        displayName: "ショコラ",
        image: "/images/flavors/chocolate.png",
        note: "冷たいガナッシュのような濃密カカオ",
      },
      {
        displayName: "ミックスベリー",
        image: "/images/flavors/berry_mix.png",
        note: "苺と木苺ピューレの鮮やかな酸味と果実味",
      },
      {
        displayName: "マンゴー",
        image: "/images/flavors/mango.png",
        note: "完熟果肉を裏ごししたような濃厚な甘み",
      },
      {
        displayName: "ドラゴンフルーツ",
        image: "/images/flavors/dragon_fruit.png",
        note: "ルビー色にパインが香る華やかな南国味",
      },
    ],
  },
];

const compactTerms = [
  {
    label: "卸価格・ロット",
    value:
      "バルク：1L ¥2,000・2L ¥4,000（税別・最小4L〜味自由）／ 100ml個食カップ：¥300（税別・60個〜）",
  },
  {
    label: "1Lあたり人数",
    value: "約20人分（#18・50ml＝1人分 約100円）／ 約12人分（#12・80ml＝1人分 約167円）",
  },
  {
    label: "配送・お支払い",
    value: "通常5営業日前後でクール冷凍便発送 ／ 納品月の月末締め・翌月末請求書払い（銀行振込）",
  },
  {
    label: "アレルゲン管理",
    value: `${WHOLESALE_FACTS.freeFromAdditivesAndWhiteSugar}。${WHOLESALE_FACTS.allergen}`,
  },
] as const;

export default function HotelFlavorsSection() {
  return (
    <section id="flavors" className="bg-bg-white scroll-mt-14 py-12 sm:py-18">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-brand mb-2 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
              <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
              全11種の味・お取引条件
            </p>
            <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
              和の献立にも、洋のコースにも合う全11種（同価格・4L〜）。
            </h2>
          </div>
          <p className="text-ink-muted font-sans text-xs">
            ※カードをタップで全原材料・アレルゲンを表示
          </p>
        </div>

        <div className="mt-6">
          <WholesaleFlavorGrid groups={hotelFlavorGroups} />
        </div>

        {/* お取引条件一覧を直下にコンパクト統合 */}
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
                    alt="業務用 1L角型バルク容器"
                    fill
                    sizes="(max-width: 1024px) 45vw, 18vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-ink mt-1.5 text-center font-sans text-[11px] font-bold">
                  1L 角型（約20人分）
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-stone-200/70 bg-white p-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/bulk_2l.jpg"
                    alt="業務用 2L角型バルク容器"
                    fill
                    sizes="(max-width: 1024px) 45vw, 18vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-ink mt-1.5 text-center font-sans text-[11px] font-bold">
                  2L 角型（約40人分）
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
