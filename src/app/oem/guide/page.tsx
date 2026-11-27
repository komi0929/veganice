import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import StructuredData from "../../components/StructuredData";
import OemHeader from "../components/OemHeader";
import { PRICING_CONSTANTS } from "../data/oemSpecs";

const site = "https://www.soystories.cafe";
const canonical = site + "/oem/guide";
const updated = "2026-11-27";
const title = "ヴィーガン・植物性アイス小ロットOEM完全ガイド（60個〜の費用・比較・アレルゲン管理）";
const description =
  "ヴィーガンアイス・グルテンフリージェラートの小ロットOEMを全国へ。乳・卵・小麦を持ち込まない福岡市の専用工房で1味60個（100ml）または6Lから製造。定番卸とOEMの料金、原料の必要量、カップシールの寸法、納期をSoyStoriesが解説します。";
const image = site + "/images/gelato_circle_lineup.jpg";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: "SoyStories",
    type: "article",
    locale: "ja_JP",
    modifiedTime: updated,
    images: [{ url: image, alt: "SoyStoriesの植物性クラフトアイス" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

const trail = [
  { name: "業務用卸トップ", path: "/" },
  { name: "小ロットOEM", path: "/oem" },
  { name: "小ロットOEM完全ガイド", path: "/oem/guide" },
];

const faq = [
  {
    question: "ヴィーガンアイスの小ロットOEMは何個から依頼できますか？",
    answer:
      "100mlカップは1味60個からです。オリジナル開発の業務用バルクは1味6L（2L×3本）から製造します。",
  },
  {
    question: "お店のロゴ入りアイスにはいくらかかりますか？",
    answer:
      "OEM①は開発費0円で、天面の丸シールをご支給いただく場合、100mlカップは1個税別286円です。最小60個の商品代は税別17,160円で、送料は別途かかります。",
  },
  {
    question: "オリジナルの味を開発する場合、試作費はいくらですか？",
    answer:
      "OEM②は初期試作開発費が税別30,000円です。試作ごとに原材料費税別1,500円、梱包資材費税別200円、60サイズの冷凍便送料がかかります。初回は配合の異なる2案を各3カップお届けします。",
  },
  {
    question: "乳・卵・小麦不使用のアイスやグルテンフリージェラートを製造委託できますか？",
    answer:
      "はい。SoyStoriesは乳・卵・小麦を持ち込まない福岡市の専用工房で製造します。工房に持ち込む特定原材料等は、アーモンドやくるみなどのナッツ類のみです。ナッツ使用商品には「ナッツ使用」と明記します。",
  },
  {
    question: "自社の果実や茶葉を使う場合、どのくらい原料が必要ですか？",
    answer:
      "1味あたり、初回試作1.5Lでは果実ピューレ・果汁が約400〜800g、茶葉粉末が約40〜90gです。量産60個（約6L）では果実ピューレ・果汁が約1.8〜3.2kg、茶葉粉末が約180〜360gです。素材と加工ラインに卵・乳・小麦を含まないことを、受け入れ前に原材料規格書等で確認します。",
  },
  {
    question: "カップの丸シールと食品表示は誰が用意しますか？",
    answer:
      "天面の正円φ72mm丸シールはお客様にご支給いただきます。塗り足しは直径78mm、文字とロゴの安全圏はφ66mmです。底面の法定一括表示ラベルはSoyStoriesが作成して貼付します。",
  },
  {
    question: "全国に配送できますか？初回納品まで何日かかりますか？",
    answer:
      "福岡市の工房から全国へヤマト運輸のクール冷凍便でお届けします。初回提案は通常2〜3営業日以内、ご相談から初回量産品のお届けまでは最短約1か月です。",
  },
  {
    question: "試作開発費と量産代金はいつ支払いますか？",
    answer:
      "試作開発費・量産代金ともに、納品月の月末締め・翌月末払いです。請求書に基づき銀行振込でお支払いいただきます。",
  },
];

const organization = { "@id": site + "/#organization" };
const graph = [
  {
    "@type": "Article",
    "@id": canonical + "#article",
    headline: title,
    description,
    mainEntityOfPage: canonical,
    inLanguage: "ja",
    author: organization,
    publisher: organization,
    dateModified: updated,
    image,
  },
  {
    "@type": "FAQPage",
    "@id": canonical + "#faq",
    mainEntity: faq.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  },
  {
    "@type": "BreadcrumbList",
    itemListElement: trail.map(({ name, path }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: site + path,
    })),
  },
];

const comparison = [
  ["最小ロット", "500〜3,000個程度から", "100mlカップ1味60個／2Lバルク1味6Lから"],
  ["カップ資材", "特注カップ資材が必要な場合あり", "汎用100mlカップ＋天面正円φ72mm丸シール"],
  [
    "アレルゲン管理",
    "乳・卵・小麦を扱う共用ラインの場合あり",
    "乳・卵・小麦の持ち込みゼロ。特定原材料等の持ち込みはナッツ類のみ",
  ],
  ["初回開発費", "仕様に応じて見積もり", "OEM① 0円／OEM② 税別30,000円＋試作実費"],
  ["支払い", "委託先の取引条件を確認", "納品月末締め・翌月末請求書払い（銀行振込）"],
  ["初回納期", "試作・資材手配を含めて確認", "ご相談から初回量産品のお届けまで最短約1か月"],
];

const price = PRICING_CONSTANTS;
const yen = (amount: number) => `税別${amount.toLocaleString("ja-JP")}円`;
const plans = [
  {
    name: "定番A｜業務用バルク",
    lot: "4Lから（味の組み合わせ自由）",
    terms: `1L ${yen(price.bulk1LPriceExTax)}／2L ${yen(price.bulk2LPriceExTax)}。初期費用0円。`,
    use: "店内のデザートに定番フレーバーを使いたいとき。",
  },
  {
    name: "定番B｜100ml個食カップ",
    lot: `${price.cupMinLot}個から`,
    terms: `1個 ${yen(price.cupBasePriceExTax)}。初期費用0円。`,
    use: "SoyStoriesのラベル付きカップを仕入れたいとき。",
  },
  {
    name: "OEM①｜フタだけお店ロゴ",
    lot: `1味${price.cupMinLot}個から`,
    terms: `100mlカップ1個 ${yen(price.cupOemPriceExTax)}。開発費0円。`,
    use: "定番の味を選び、支給した丸シールで自店ブランドの商品を作りたいとき。",
  },
  {
    name: "OEM②｜お店の素材でオリジナル開発",
    lot: `1味${price.cupMinLot}個または6Lから`,
    terms: `100mlカップ1個 ${yen(price.cupOemPriceExTax)}／2Lバルク1本 ${yen(price.bulk2LPriceExTax)}。初期試作開発費は税別30,000円＋試作実費。`,
    use: "自社の果実や茶葉など、主役素材を支給して専用レシピを作りたいとき。",
  },
];

const sections = [
  ["comparison", "製造委託先の比較"],
  ["plans", "4プランと費用"],
  ["ingredients", "果実・茶葉の原料量"],
  ["labels", "カップシールと表示"],
  ["faq", "よくある質問"],
];

const card = "scroll-mt-24 rounded-3xl bg-white p-5 shadow-2xs sm:p-8";
const heading = "text-ink text-xl font-bold tracking-tight sm:text-2xl";

export default function OemGuidePage() {
  return (
    <>
      <StructuredData graph={graph} />
      <OemHeader isGuidePage />
      <main className="lp-friendly text-ink flex-1 bg-[#f7f3ec] pt-16">
        <article className="mx-auto max-w-5xl space-y-8 px-4 py-8 sm:px-6 sm:py-12">
          <nav aria-label="パンくずリスト" className="text-sm">
            <ol className="flex flex-wrap gap-2">
              {trail.slice(0, -1).map(({ name, path }) => (
                <li key={path} className="flex items-center gap-2">
                  <Link href={path} className="text-brand underline underline-offset-4">
                    {name}
                  </Link>
                  <span aria-hidden="true">›</span>
                </li>
              ))}
              <li aria-current="page">{trail[2].name}</li>
            </ol>
          </nav>

          <header className={card}>
            <h1 className="text-2xl leading-tight font-bold tracking-tight sm:text-4xl">{title}</h1>
            <p className="text-brand mt-4 text-sm font-bold">
              SoyStories（株式会社ヒトコト） · <time dateTime={updated}>2026年11月27日更新</time>
            </p>
            <p className="mt-5 leading-relaxed">
              SoyStoriesは、乳・卵・小麦不使用のヴィーガンアイスを
              <strong>1味60個（100mlカップ）または2Lバルク×3本（6L）</strong>
              から製造し、福岡市の専用工房から全国へクール冷凍便でお届けします。
            </p>
            <p className="mt-3 leading-relaxed">
              カップは汎用の100ml容器にお客様の丸シールを貼るため、特注容器を手配せずに自店ブランドで販売できます。
              店内提供向けのオリジナル開発は、2L容器3本から発注できます。小ロットで販売を始めたいカフェや、地元の果実・茶葉を使った商品を作りたい事業者に向けた製造サービスです。
            </p>
            <nav aria-label="ガイドの目次" className="mt-6">
              <ul className="flex flex-wrap gap-2">
                {sections.map(([id, label]) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="text-brand block rounded-full bg-[#f7f3ec] px-4 py-2 text-sm font-bold hover:underline"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </header>

          <section id="comparison" className={card}>
            <h2 className={heading}>アイスOEM工場の比較とアレルゲン管理</h2>
            <p className="mt-3 text-sm leading-relaxed">
              最小ロットに加え、資材の手配、製造ラインで扱う原材料、初回にかかる費用を見積もり時に確認しましょう。
            </p>
            <table className="mt-4 w-full table-fixed text-left text-xs leading-relaxed sm:text-sm">
              <caption className="pb-3 text-left">
                一般的なアイスOEM工場は比較用の一例です。条件は委託先や仕様によって異なります。
              </caption>
              <thead className="bg-[#f7f3ec]">
                <tr>
                  <th scope="col" className="w-[23%] p-2 sm:p-3">
                    比較項目
                  </th>
                  <th scope="col" className="p-2 sm:p-3">
                    一般的なアイスOEM工場
                  </th>
                  <th scope="col" className="text-brand p-2 sm:p-3">
                    SoyStories専用工房
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparison.map(([label, typical, soy]) => (
                  <tr key={label} className="align-top">
                    <th scope="row" className="p-2 sm:p-3">
                      {label}
                    </th>
                    <td className="p-2 sm:p-3">{typical}</td>
                    <td className="p-2 font-medium sm:p-3">{soy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 leading-relaxed">
              グルテンフリーのジェラートを製造委託する際は、配合と工房の原料管理を確認してください。
              SoyStoriesの植物性クラフトアイスは国産米粉を使った独自製法で、滑らかな口当たりに仕上げています。ナッツ使用商品には「ナッツ使用」と明記します。
            </p>
          </section>

          <section id="plans" className={card}>
            <h2 className={heading}>定番卸・小ロットOEMの4プランと費用</h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {plans.map(({ name, lot, terms, use }) => (
                <li key={name} className="rounded-2xl bg-[#f7f3ec] p-5">
                  <h3 className="font-bold">{name}</h3>
                  <p className="text-brand mt-2 font-bold">{lot}</p>
                  <p className="mt-2 text-sm leading-relaxed">{terms}</p>
                  <p className="mt-2 text-sm leading-relaxed">{use}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed">
              OEM①で100mlカップ60個を発注した場合、商品代は税別17,160円です。OEM②で初回に2Lバルク3本を発注する場合、初期試作開発費と商品代の合計は税別42,000円です。いずれも送料は別途で、OEM②には試作実費もかかります。
            </p>
          </section>

          <section id="ingredients" className={card}>
            <h2 className={heading}>農産物・茶葉OEMに必要な原料量</h2>
            <table className="mt-4 w-full table-fixed text-left text-sm leading-relaxed">
              <caption className="pb-3 text-left">
                1味あたりの目安。果実の糖度・水分量などに応じて調整します。
              </caption>
              <thead className="bg-[#f7f3ec]">
                <tr>
                  <th scope="col" className="p-2 sm:p-3">
                    製造段階
                  </th>
                  <th scope="col" className="p-2 sm:p-3">
                    果実ピューレ・果汁
                  </th>
                  <th scope="col" className="p-2 sm:p-3">
                    茶葉粉末
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <th scope="row" className="p-2 sm:p-3">
                    初回試作（1.5L）
                  </th>
                  <td className="p-2 sm:p-3">約400〜800g</td>
                  <td className="p-2 sm:p-3">約40〜90g</td>
                </tr>
                <tr>
                  <th scope="row" className="p-2 sm:p-3">
                    量産60個（約6L）
                  </th>
                  <td className="p-2 sm:p-3">約1.8〜3.2kg</td>
                  <td className="p-2 sm:p-3">約180〜360g</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-4 leading-relaxed">
              素材そのものと加工ラインに卵・乳・小麦を含まないことを、原材料規格書等で事前に確認できる素材のみお預かりします。主役素材は原則としてお客様から無償でご支給いただきます。
            </p>
          </section>

          <section id="labels" className={card}>
            <h2 className={heading}>100mlカップの天面丸シールと底面表示</h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                ["仕上がり", "正円φ72mm"],
                ["塗り足し", "直径78mm（周囲3mm）"],
                ["文字・ロゴの安全圏", "φ66mm以内"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-[#f7f3ec] p-4">
                  <dt className="text-sm">{label}</dt>
                  <dd className="text-brand mt-1 font-bold">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 leading-relaxed">
              天面シールは耐水フィルム系素材、ラミネート加工、冷凍用強粘着を推奨します。発注数に予備5〜10％（最低10枚）を加えてご支給ください。
            </p>
            <p className="mt-3 leading-relaxed">
              原材料名・内容量・アレルゲン・栄養成分などを記載した法定一括表示は、SoyStoriesが作成しカップ底面に貼付します。天面シールはロゴや商品名などのデザインに使えます。
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              <li>
                <a
                  href="/downloads/soystories-oem-lid-sticker-72mm.ai"
                  download
                  className="text-brand font-bold underline underline-offset-4"
                >
                  丸シール入稿用テンプレート（AI）
                </a>
              </li>
              <li>
                <a
                  href="/downloads/soystories-oem-lid-sticker-guide-72mm.pdf"
                  download
                  className="text-brand font-bold underline underline-offset-4"
                >
                  丸シール寸法ガイド（PDF）
                </a>
              </li>
            </ul>
          </section>

          <section id="faq" className={card}>
            <h2 className={heading}>ヴィーガンアイスOEMのよくある質問</h2>
            <dl className="mt-4 divide-y divide-gray-200">
              {faq.map(({ question, answer }) => (
                <div key={question} className="py-4">
                  <dt className="text-brand font-bold">{question}</dt>
                  <dd className="mt-2 leading-relaxed">{answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className={card}>
            <h2 className={heading}>小ロットOEMのご相談・定番卸のご案内</h2>
            <p className="mt-3 leading-relaxed">
              OEMのご相談では、ご希望の味・原料、カップまたはバルクの数量、希望納期をお知らせください。
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/oem#contact-form"
                className="bg-brand hover:bg-brand-dark rounded-full px-6 py-3 text-center text-sm font-bold text-white transition-colors"
              >
                小ロットOEMを相談する
              </Link>
              <Link
                href="/wholesale"
                className="text-brand border-brand rounded-full border px-6 py-3 text-center text-sm font-bold hover:bg-[#f7f3ec]"
              >
                定番フレーバーの業務用卸を見る
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
