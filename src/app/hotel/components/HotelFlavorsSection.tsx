import Image from "next/image";
import WholesaleFlavorGrid, {
  type WholesaleFlavorGroup,
} from "@/app/components/wholesale/WholesaleFlavorGrid";
import { FLAVOR_SPECS } from "@/app/data/flavorSpecs";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";
import HotelMenuCardCopyButton from "./HotelMenuCardCopyButton";

const hotelFlavorGroups: WholesaleFlavorGroup[] = [
  {
    title: "和の5種（会席・お部屋出しで人気）",
    subtitle: "海外のお客様にも「日本の味」として喜ばれる和素材・国産果実",
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
        displayName: "ほうじ茶",
        image: "/images/flavors/houjicha.png",
        note: "香ばしい茶葉の香りと軽い後味",
      },
      {
        displayName: "りんご",
        image: "/images/flavors/apple.png",
        note: "国産りんご果汁のみずみずしい甘み",
      },
      {
        displayName: "もも",
        image: "/images/flavors/peach.png",
        note: "国産白桃のやさしい香りと果汁感",
      },
    ],
  },
  {
    title: "洋コース・朝食ビュッフェに（6種）",
    subtitle: "ケーキ添えやコースのデザート、朝食ビュッフェに合う定番6種",
    items: [
      {
        displayName: "バニラココナッツ",
        image: "/images/flavors/vanilla_coconut.png",
        note: "ココナッツが香るさっぱりした甘さ",
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
      {
        displayName: "ミックスベリー",
        image: "/images/flavors/berry_mix.png",
        note: "苺と木苺の甘酸っぱい果実味",
      },
      {
        displayName: "マンゴー",
        image: "/images/flavors/mango.png",
        note: "完熟マンゴーの濃厚でなめらかな甘み",
      },
      {
        displayName: "ドラゴンフルーツ",
        image: "/images/flavors/dragon_fruit.png",
        note: "パインとココナッツを合わせた果実味",
      },
    ],
  },
];

const ORDERED_SPEC_KEYS = [
  "抹茶",
  "ほうじ茶",
  "UMAMIバニラ",
  "りんご",
  "もも",
  "バニラココナッツ",
  "アールグレイ",
  "ショコラ",
  "マンゴー",
  "ミックスベリー",
  "ドラゴンフルーツ",
] as const;

const JP_MENU_SAMPLE = "植物性クラフトアイス（乳・卵・小麦・白砂糖不使用）";
const EN_MENU_SAMPLE = "Plant-Based Craft Ice Cream (Vegan / Gluten-Free / Dairy & Egg Free)";

const termsRows = [
  {
    label: "卸価格・ロット",
    value:
      "バルク：1L 2,000円・2L 4,000円（税別・最小4L〜味自由）／ 100mlカップ：300円（税別・60個〜）",
  },
  {
    label: "1人分の目安",
    value: "会席の小鉢 約50ml＝約100円（1Lで約20人分）／ コース皿 約80ml＝約167円（税別）",
  },
  {
    label: "保存・日持ち",
    value:
      "−18℃以下で冷凍保存（氷菓）。賞味期限の表示義務がなく、期限切れによる廃棄が出にくい冷凍品です",
  },
  {
    label: "納期・お支払い",
    value:
      "通常5営業日前後でヤマト冷凍便発送（無料サンプルは原則翌日発送）／ 納品月の月末締め・翌月末請求書払い",
  },
  {
    label: "工房・アレルゲン",
    value: `${WHOLESALE_FACTS.freeFromAdditivesAndWhiteSugar}。${WHOLESALE_FACTS.allergen}`,
  },
] as const;

export default function HotelFlavorsSection() {
  return (
    <section
      id="flavors"
      className="bg-bg-white scroll-mt-14 border-t border-stone-200/70 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-brand mb-1.5 font-sans text-xs font-bold tracking-wider">
              全11種のラインナップ
            </p>
            <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
              和食にも洋食にも合う全11種（同価格・4L〜）。
            </h2>
          </div>
          <p className="text-ink-muted font-sans text-xs">※タップで栄養成分を表示</p>
        </div>

        <div className="mt-6">
          <WholesaleFlavorGrid groups={hotelFlavorGroups} />
        </div>

        {/* ── 必要な方だけ開ける2つの実務引き出し（原材料一覧 ／ 日英献立札見本） ── */}
        <div className="mt-6 space-y-2.5">
          <details
            id="ingredients"
            className="group scroll-mt-16 rounded-2xl border border-stone-200/80 bg-[#fafaf8]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
              <div>
                <span className="text-ink block font-sans text-sm font-bold sm:text-[15px]">
                  全11種の原材料・アレルゲン一覧を見る
                </span>
                <span className="text-ink-muted mt-0.5 block font-sans text-xs">
                  アルコール由来の原料などは、味ごとに個別にお答えします
                </span>
              </div>
              <span
                className="text-brand shrink-0 font-sans text-lg leading-none transition-transform duration-200 group-open:rotate-45"
                aria-hidden="true"
              >
                ＋
              </span>
            </summary>

            <div className="border-t border-stone-200/70 px-4 pt-4 pb-5 sm:px-6">
              <p className="text-ink-light mb-3 font-sans text-xs leading-relaxed">
                ご宿泊客の基準（アルコール由来原料や五葷等）に合わせた詳細確認は、下部のフォーム備考欄より味名とあわせてお知らせください。
              </p>

              <div className="overflow-hidden rounded-xl border border-stone-200/80 bg-white">
                <table className="w-full border-collapse text-left font-sans">
                  <thead className="hidden border-b border-stone-200 bg-[#f7f3ec] text-xs font-bold text-stone-700 sm:table-header-group">
                    <tr>
                      <th scope="col" className="w-40 py-2.5 pr-3 pl-4">
                        味
                      </th>
                      <th scope="col" className="px-3 py-2.5">
                        原材料名
                      </th>
                      <th scope="col" className="w-40 py-2.5 pr-4 pl-3">
                        表示アレルゲン
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200/80 text-xs">
                    {ORDERED_SPEC_KEYS.map((key) => {
                      const spec = FLAVOR_SPECS[key];
                      const allergenText = spec.allergens === "—" ? "（記載なし）" : spec.allergens;
                      return (
                        <tr key={key} className="block p-3.5 sm:table-row sm:p-0">
                          <th
                            scope="row"
                            className="text-ink flex items-center justify-between gap-2 font-bold sm:table-cell sm:py-3 sm:pr-3 sm:pl-4 sm:align-top"
                          >
                            <span>{spec.name}</span>
                            <span className="text-ink-muted shrink-0 text-[11px] font-normal whitespace-nowrap sm:hidden">
                              アレルゲン：{allergenText}
                            </span>
                          </th>
                          <td className="text-ink-light mt-1 block leading-relaxed sm:mt-0 sm:table-cell sm:px-3 sm:py-3 sm:align-top">
                            {spec.ingredients}
                          </td>
                          <td className="text-ink hidden sm:table-cell sm:py-3 sm:pr-4 sm:pl-3 sm:align-top">
                            {allergenText}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <p className="text-ink-muted mt-2.5 font-sans text-[11px] leading-relaxed">
                ※特定原材料等のうち工房で扱う品目はナッツ類のみです。「（記載なし）」は表示対象品目の記載なしを示し、アレルギーの安全をお約束するものではありません。
              </p>
            </div>
          </details>

          <details
            id="menu-card"
            className="group scroll-mt-16 rounded-2xl border border-stone-200/80 bg-[#fafaf8]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
              <div>
                <span className="text-ink block font-sans text-sm font-bold sm:text-[15px]">
                  お品書き・ビュッフェ札の日英表記見本を見る
                </span>
                <span className="text-ink-muted mt-0.5 block font-sans text-xs">
                  そのままコピーしてお品書きや卓上札にお使いいただけます
                </span>
              </div>
              <span
                className="text-brand shrink-0 font-sans text-lg leading-none transition-transform duration-200 group-open:rotate-45"
                aria-hidden="true"
              >
                ＋
              </span>
            </summary>

            <div className="border-t border-stone-200/70 px-4 pt-4 pb-5 sm:px-6">
              <div className="flex flex-col justify-between gap-3 rounded-xl border border-stone-200 bg-white p-4 sm:flex-row sm:items-center">
                <div>
                  <p className="text-ink font-serif text-sm font-bold">{JP_MENU_SAMPLE}</p>
                  <p className="text-ink mt-1 font-sans text-xs font-bold sm:text-sm">
                    {EN_MENU_SAMPLE}
                  </p>
                </div>
                <HotelMenuCardCopyButton copyText={`${JP_MENU_SAMPLE}\n${EN_MENU_SAMPLE}`} />
              </div>
            </div>
          </details>
        </div>

        {/* ── お取引条件 ── */}
        <div
          id="terms"
          className="mt-10 scroll-mt-16 rounded-3xl border border-stone-200/80 bg-[#f7f3ec] p-5 sm:p-7"
        >
          <p className="text-brand mb-1 font-sans text-xs font-bold tracking-wider">お取引条件</p>
          <h2 className="text-ink font-serif text-xl leading-snug font-bold sm:text-2xl">
            定期発注なし・4Lから必要な時だけ・冷凍で常備
          </h2>

          <div className="mt-5 grid grid-cols-1 items-center gap-5 lg:grid-cols-12">
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
              {termsRows.map((row) => (
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
