import Image from "next/image";
import WholesaleFlavorGrid, {
  type WholesaleFlavorGroup,
} from "@/app/components/wholesale/WholesaleFlavorGrid";
import { FLAVOR_SPECS } from "@/app/data/flavorSpecs";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

const hotelFlavorGroups: WholesaleFlavorGroup[] = [
  {
    title: "和の献立・水菓子・お部屋出しに（和の5種）",
    subtitle: "海外のお客様にも「日本の味」として喜ばれる和素材・国産果実の定番5種",
    items: [
      {
        displayName: "UMAMIバニラ（白味噌）",
        specKey: "UMAMIバニラ",
        image: "/images/flavors/umami_vanilla.png",
        note: "【人気No.1】甘酒・白みそが香る王道バニラ",
      },
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
    subtitle: "ガトー添え・アシェットデセール・朝食ビュッフェを彩る6種",
    items: [
      {
        displayName: "バニラココナッツ",
        image: "/images/flavors/vanilla_coconut.png",
        note: "ココナッツが香るさっぱりとした味わい",
      },
      {
        displayName: "アールグレイ",
        image: "/images/flavors/earl_gray.png",
        note: "ベルガモットと紅茶葉が気品高く香る一玉",
      },
      {
        displayName: "ショコラ",
        image: "/images/flavors/chocolate.png",
        note: "クーベルチュール仕立ての濃密カカオ",
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

const JAPANESE_FIVE_SET = new Set<string>(["抹茶", "ほうじ茶", "UMAMIバニラ", "りんご", "もも"]);

const termsRows = [
  {
    label: "1人分の目安",
    value:
      "会席の小鉢 約50ml（#18）＝ 約100円（税別・1Lで約20人分）／ 洋コース皿 約80ml（#12）＝ 約167円（税別・1Lで約12人分）",
  },
  {
    label: "卸価格・ロット",
    value:
      "業務用バルク：1L 税別2,000円・2L 税別4,000円（全11種同価格・最小4L〜、味ミックス自由）／ 100ml個食カップ：税別300円（税込324円・60個〜、120個推奨）／ 屋号ロゴ丸シールOEM：税別286円（開発費0円・天面シールご支給・1味60個〜）",
  },
  {
    label: "保存・賞味期限",
    value:
      "−18℃以下で冷凍保存（種類別：氷菓）。食品表示基準上の賞味期限表示義務なし・期限切れによる廃棄が出にくいため、ご予約に合わせた常備に向いています。",
  },
  {
    label: "納期・送料・決済",
    value:
      "ご注文確定後 通常5営業日前後でヤマト運輸クール冷凍便にて全国発送（福岡発・地域サイズ別契約運賃。無料6個サンプルは原則お申し込みの翌日に発送・送料のみ着払い）／ 納品月の月末締め・翌月末ご請求書払い（銀行振込）",
  },
  {
    label: "不使用素材・工房",
    value: `乳・卵・小麦・白砂糖不使用 ／ 乳化剤・安定剤・増粘剤・着色料 不使用。${WHOLESALE_FACTS.allergen}。`,
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
              全11種のラインナップ
            </p>
            <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
              和の献立にも、洋のコースにも合う全11種（同価格・4L〜）。
            </h2>
          </div>
          <p className="text-ink-muted font-sans text-xs">
            ※カードをタップで栄養成分（100mlあたり）も表示
          </p>
        </div>

        <div className="mt-6">
          <WholesaleFlavorGrid groups={hotelFlavorGroups} />
        </div>

        {/* ── 味ごとの原材料の表（全11種・アルコール由来原料の個別確認案内つき） ── */}
        <div
          id="ingredients"
          className="mt-12 scroll-mt-16 rounded-3xl border border-stone-200/80 bg-[#fafaf8] p-5 sm:p-7"
        >
          <div className="flex flex-col justify-between gap-4 border-b border-stone-200/80 pb-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-brand mb-1.5 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
                <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
                厨房・フロントでの事前確認用
              </p>
              <h3 className="text-ink font-serif text-xl leading-snug font-bold sm:text-2xl">
                全11種 味ごとの原材料・表示アレルゲン一覧
              </h3>
            </div>
            <a
              href="#contact-form"
              className="text-brand hover:text-brand-dark shrink-0 font-sans text-xs font-bold underline underline-offset-4"
            >
              原料の個別確認・サンプル申込へ ↓
            </a>
          </div>

          <div className="mt-4 rounded-2xl border border-stone-200 bg-white px-4 py-3.5 sm:px-5">
            <p className="text-ink font-sans text-xs leading-relaxed font-bold sm:text-sm">
              アルコール由来の原料などは、味ごとに個別にお答えします。
            </p>
            <p className="text-ink-light mt-1 font-sans text-xs leading-relaxed">
              全11種とも乳・卵・小麦・動物性原料・白砂糖は不使用です。アルコール由来の原料や五葷（ごくん）など、ご宿泊のお客様の基準に応じた味ごとの確認は、下部のフォーム備考欄またはお問い合わせより個別にお答えいたします。
            </p>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-stone-200/80 bg-white">
            <table className="w-full border-collapse text-left font-sans">
              <thead className="hidden border-b border-stone-200 bg-[#f7f3ec] text-xs font-bold text-stone-700 sm:table-header-group">
                <tr>
                  <th scope="col" className="w-44 py-3 pr-3 pl-5">
                    味（全11種）
                  </th>
                  <th scope="col" className="px-3 py-3">
                    原材料名
                  </th>
                  <th scope="col" className="w-44 py-3 pr-5 pl-3">
                    表示アレルゲン
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200/80 text-xs sm:text-[13px]">
                {ORDERED_SPEC_KEYS.map((key) => {
                  const spec = FLAVOR_SPECS[key];
                  const allergenText = spec.allergens === "—" ? "（記載なし）" : spec.allergens;
                  const isJapaneseFive = JAPANESE_FIVE_SET.has(key);
                  return (
                    <tr key={key} className="block p-4 sm:table-row sm:p-0">
                      <th
                        scope="row"
                        className="text-ink flex items-center justify-between gap-2 font-bold sm:table-cell sm:py-3.5 sm:pr-3 sm:pl-5 sm:align-top"
                      >
                        <span>
                          {spec.name}
                          {isJapaneseFive ? (
                            <span className="bg-brand/10 text-brand ml-1.5 inline-block rounded px-1.5 py-0.5 text-[10px] font-bold">
                              和の5種
                            </span>
                          ) : null}
                        </span>
                        <span className="text-ink-muted shrink-0 text-[11px] font-normal whitespace-nowrap sm:hidden">
                          アレルゲン：{allergenText}
                        </span>
                      </th>
                      <td className="text-ink-light mt-1.5 block leading-relaxed sm:mt-0 sm:table-cell sm:px-3 sm:py-3.5 sm:align-top">
                        {spec.ingredients}
                      </td>
                      <td className="text-ink hidden sm:table-cell sm:py-3.5 sm:pr-5 sm:pl-3 sm:align-top sm:font-medium">
                        {allergenText}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="text-ink-muted mt-3 font-sans text-[11.5px] leading-relaxed">
            ※卵・乳・小麦を持ち込まない専用工房で製造しています。特定原材料等のうち工房で扱う品目はナッツ類（アーモンド・くるみ・カシューナッツ・落花生等）のみです。アレルゲン欄の「（記載なし）」は食品表示上の対象品目記載なしを示し、アレルギーの安全をお約束するものではありません。
          </p>
        </div>

        {/* ── お取引条件（見出しを引き上げ：定期発注なし・4Lから必要な時だけ・冷凍で常備） ── */}
        <div
          id="terms"
          className="mt-12 scroll-mt-16 rounded-3xl border border-stone-200/80 bg-[#f7f3ec] p-5 sm:p-8"
        >
          <p className="text-brand mb-2 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
            <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
            お取引条件・1人分の原価目安
          </p>
          <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
            定期発注なし・4Lから必要な時だけ・冷凍で常備
          </h2>
          <p className="text-ink-light mt-2 max-w-3xl font-sans text-sm leading-relaxed">
            月間の発注ノルマや定期購入のお約束は一切ございません。小さな宿やオーベルジュ様でも、ご予約状況に合わせて最小4L（または100mlカップ60個）から必要な時だけご注文いただけます。
          </p>

          <div className="mt-6 grid grid-cols-1 items-start gap-5 lg:grid-cols-12">
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
                  1L 角型（約20人分・税別2,000円）
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
                  2L 角型（約40人分・税別4,000円）
                </p>
              </div>
            </div>

            <dl className="divide-y divide-stone-200/70 rounded-2xl bg-white px-4 py-1 sm:px-5 lg:col-span-8">
              {termsRows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 gap-0.5 py-3 sm:grid-cols-[8rem_1fr] sm:gap-3"
                >
                  <dt className="text-brand font-sans text-xs font-bold">{row.label}</dt>
                  <dd className="text-ink font-sans text-xs leading-relaxed sm:text-[13px]">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
