import { MidCta, SectionHeader } from "./ui";

const opsStats = [
  { label: "仕込み", value: "0", unit: "分", note: "届いたらそのまま冷凍庫へ" },
  { label: "提供", value: "約15", unit: "秒", note: "解凍待ち不要ですぐ提供" },
  { label: "注文", value: "4", unit: "L〜", note: "1L×4個から注文OK" },
  { label: "1Lで", value: "約20", unit: "杯", note: "1杯 約50mlの場合" },
];

const menuIdeas = [
  {
    name: "ヴィーガン＆グルテンフリーアイス",
    price: "¥480〜",
    note: "アレルギー対応やインバウンド・ヴィーガン客への看板デザートに。",
  },
  {
    name: "ランチ・コースデザートのセット",
    price: "＋¥350",
    note: "乳脂肪ゼロで油分が残らず、満足感ある食事の後でもさっぱり完食。",
  },
  {
    name: "季節のクラフトアイス2種盛り",
    price: "¥680",
    note: "発酵のコクと豊かな香りで、カフェタイムやディナーの満足度を高める一皿に。",
  },
];

/** お店側の手間とメニュー例。「導入できそう」と具体的に想像してもらうためのセクション */
export default function DessertOperationsSection() {
  return (
    <section id="operation" className="bg-[#f7f3ec] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="お店の手間"
          lines={["忙しいお店でも、", "手間はほぼゼロ。"]}
          lead={["米粉の保水力で−18℃でも固まりすぎず、削る力や解凍待ちが不要です。"]}
        />

        <dl className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {opsStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white p-4 shadow-sm">
              <dt className="text-ink-muted text-xs font-bold">{stat.label}</dt>
              <dd className="text-brand mt-1 leading-none font-bold">
                <span className="text-[34px] tracking-tight">{stat.value}</span>
                <span className="ml-0.5 text-base">{stat.unit}</span>
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

        <MidCta message="まずは、お店の冷凍庫で試してみませんか？" />
      </div>
    </section>
  );
}
