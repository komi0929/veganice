import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

interface CafeFAQItem {
  q: string;
  a: string;
}

const cafeFaqs: CafeFAQItem[] = [
  {
    q: "メニュー表やショーカードにはどう書けばいいですか？",
    a: "たとえば「クラフトアイス（乳・卵・小麦・白砂糖不使用）」や「植物性クラフトアイス添え」のように、お店のお菓子のトーンに合わせて素材の特徴を添えて記載いただくのがおすすめです。味ごとの詳しい原材料・栄養成分は、上のフレーバー一覧の各カードからいつでもご確認いただけます。",
  },
  {
    q: "お客様から聞かれたら、どう説明すればいいですか？",
    a: "「植物性の素材でつくった手づくりのクラフトアイスです。乳製品・卵・小麦・白砂糖を使っていないので、乳・卵・小麦のアレルギーをお持ちの方も安心してお召し上がりいただけます」とお伝えいただくだけで十分です。",
  },
  {
    q: "ベースの植物性ミルクは何を使っていますか？",
    a: "抹茶・ほうじ茶・バニラココナッツ・UMAMIバニラ・アールグレイは豆乳ベース、ショコラはアーモンドミルクベース、フルーツ系5種（マンゴー・ミックスベリー・もも・りんご・ドラゴンフルーツ）は果実とココナッツがベースです。豆乳不使用の味もお選びいただけます。",
  },
  {
    q: "原材料の詳細や、お店の基準（アルコール・五葷等）に合うか確認できますか？",
    a: "上のフレーバー一覧の各カードをタップすると全原材料をご確認いただけます。アルコール由来原料や特定素材の有無など、お店の基準に合わせたフレーバー選定も個別にご案内しますので、フォームの備考欄やDMでお気軽にお尋ねください。",
  },
  {
    q: "テイクアウト販売用の個食カップや、お店ロゴのOEMもありますか？",
    a: "はい。そのままレジ横やお持ち帰り用として販売できる「定番100ml個食カップ（税別300円・最小60個〜、味ミックス自由）」のほか、天面シールをお店ロゴに変更できるOEMプラン（開発費0円・1味60個〜）やオリジナル味開発も承っております。",
  },
  {
    q: "営業中に冷凍庫を出し入れしても、シャリシャリになったり食感が落ちませんか？",
    a: "国産米粉を豆乳や甘酒、果汁と一緒にじっくり火にかけて炊き上げる独自製法でつくっているため、氷の粒が立たず、カフェ営業中に冷凍庫の出し入れを繰り返しても最後の一杯までねっとり滑らかな口どけが続きます。",
  },
  {
    q: "ナッツ類などのアレルゲンはどう管理されていますか？",
    a: `${WHOLESALE_FACTS.allergen}。「ショコラ」には原材料としてアーモンドを含みますので、重度のナッツアレルギーをお持ちのお客様へは工房でナッツ類を扱うことがある旨をお伝えのうえご判断ください。なお、乳・卵・小麦は工房内に一切持ち込まないため、${WHOLESALE_FACTS.allergenAssurance}体制です。`,
  },
  {
    q: "賞味期限はどのくらいありますか？ 平日あまり出ない日があっても大丈夫ですか？",
    a: `${WHOLESALE_FACTS.storage}してください。アイスクリーム類（氷菓）は食品表示基準上、賞味期限の表示義務がない冷凍食品です。−18℃以下の適切な温度管理のもとで保管いただけ、焼き菓子や生ケーキのような日持ちによる廃棄ロスが出ないのも強みです。`,
  },
  {
    q: "週末や連休の前に仕入れたい場合、何日前に注文すれば間に合いますか？",
    a: `ご注文確定後、${WHOLESALE_FACTS.leadTime}へお届けしております。週末や連休前は配送便の混雑も見込まれますので、通常目安（5営業日前後）を基準に少し余裕をもってご注文ください。初回の無料試食サンプル（6個）は通常2営業日以内に発送いたします。`,
  },
];

export default function CafeFAQSection() {
  return (
    <section id="faq" className="scroll-mt-14 bg-[#f7f3ec] py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-brand mb-3 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          よくあるご質問
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
          導入前によくいただくご質問
        </h2>

        <div className="mt-8 space-y-3">
          {cafeFaqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-stone-200/80 bg-white shadow-2xs"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4.5 [&::-webkit-details-marker]:hidden">
                <span className="text-ink flex gap-2.5 font-sans text-[15px] leading-snug font-bold">
                  <span className="text-brand shrink-0">Q.</span>
                  <span>{faq.q}</span>
                </span>
                <span
                  className="text-brand shrink-0 font-sans text-lg leading-none transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  ＋
                </span>
              </summary>
              <p className="text-ink-light px-5 pb-5 pl-11 font-sans text-sm leading-[1.85]">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
