import { MidCta, SectionHeader } from "./ui";

const opsStats = [
  { label: "仕込み", value: "0", unit: "分", note: "自家製仕込みの手間なし" },
  { label: "提供", value: "すぐ", unit: "", note: "ディッシャーがすっと通る" },
  { label: "最小ロット", value: "4", unit: "L〜", note: "1L×4個など組み合わせ自由" },
  { label: "1Lで", value: "約20", unit: "杯", note: "1杯 約50mlの場合" },
];

const menuIdeas = [
  {
    name: "食後のお口直しヴィーガンアイス",
    price: "¥480〜",
    note: "ラーメンやバーガーのあとに。乳脂肪ゼロで油分が口に残らず、すっきり完食。",
  },
  {
    name: "食事メニュー＋ミニデザートセット",
    price: "＋¥350",
    note: "セット注文で手軽に客単価アップ。冷凍庫から出してすぐにサーブ可能。",
  },
  {
    name: "季節のクラフトアイス2種盛り（カフェ・ディナー）",
    price: "¥680",
    note: "発酵のコクと素材感を味わうデザート。ヴィーガン・一般客問わず高い満足度に。",
  },
];

/** お店側の手間とメニュー例。「導入できそう」と具体的に想像してもらうためのセクション */
export default function DessertOperationsSection() {
  return (
    <section id="operation" className="bg-[#f7f3ec] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="お店でのオペレーション"
          lines={["仕込みゼロ・即提供で、", "お店の負担を増やしません。"]}
          lead={[
            "米粉を使った独自製法により、−18℃の冷凍庫から出してすぐにディッシャーがすっと通ります。自家製仕込みの手間や解凍待ちがなく、忙しいピーク時でもスタッフの手を止めずに提供できます。",
          ]}
        />

        <dl className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {opsStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white p-4 shadow-sm">
              <dt className="text-ink-muted text-xs font-bold">{stat.label}</dt>
              <dd className="text-brand mt-1 leading-none font-bold">
                <span className="text-[34px] tracking-tight">{stat.value}</span>
                {stat.unit && <span className="ml-0.5 text-base">{stat.unit}</span>}
              </dd>
              <dd className="text-ink-light mt-2 text-xs leading-relaxed">{stat.note}</dd>
            </div>
          ))}
        </dl>

        {/* メニュー例 */}
        <div className="mt-12 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <h3 className="text-ink text-xl font-bold">たとえば、こんな出し方。</h3>
          <ul className="mt-5 divide-y divide-gray-100">
            {menuIdeas.map((menu) => (
              <li key={menu.name} className="flex items-start justify-between gap-4 py-4">
                <div>
                  <p className="text-ink text-[15px] font-bold">{menu.name}</p>
                  <p className="text-ink-light mt-1 text-[13px] leading-relaxed">{menu.note}</p>
                </div>
                <p className="text-cta shrink-0 text-lg font-bold">{menu.price}</p>
              </li>
            ))}
          </ul>
          <p className="text-ink-muted mt-2 text-xs">※価格は一例です。自由に決められます。</p>
        </div>

        <MidCta message="まずは、お店で実際の味と使いやすさを試してみませんか？" />
      </div>
    </section>
  );
}
