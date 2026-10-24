import { MidCta, SectionHeader } from "./ui";
import { FlavorThumbnail } from "@/app/components/FlavorThumbnail";

interface Flavor {
  name: string;
  image?: string;
  color?: string;
}

const flavorGroups: {
  title: string;
  note: string;
  gridColsClass: string;
  items: Flavor[];
}[] = [
  {
    title: "さっぱり系",
    note: "食後のお口直しや、爽やかなフルーツ感に",
    gridColsClass: "grid-cols-3 sm:grid-cols-5",
    items: [
      { name: "もも", image: "/images/flavors/peach.png" },
      { name: "りんご", image: "/images/flavors/apple.png" },
      { name: "ミックス\nベリー", image: "/images/flavors/berry_mix.png" },
      { name: "ドラゴン\nフルーツ", image: "/images/flavors/dragon_fruit.png" },
      { name: "マンゴー", color: "#e9a23b" },
    ],
  },
  {
    title: "コクあり系",
    note: "発酵のコクと素材感を味わう濃厚デザートに",
    gridColsClass: "grid-cols-3 sm:grid-cols-6",
    items: [
      { name: "ショコラ", image: "/images/flavors/chocolate.png" },
      { name: "抹茶", image: "/images/flavors/matcha.png" },
      { name: "ほうじ茶", image: "/images/flavors/houjicha.png" },
      { name: "バニラ", image: "/images/flavors/vanilla_coconut.png" },
      { name: "UMAMI\nバニラ", color: "#c9a66b" },
      { name: "アール\nグレイ", color: "#9c7a5b" },
    ],
  },
];

const specs = [
  { label: "容器", value: "1L または 2L（冷凍）" },
  { label: "最小ロット", value: "4L〜（2L×2個、1L×4個など。味の組み合わせは自由）" },
  {
    label: "杯数の目安",
    value: "1Lあたり 約20杯（#18ディッシャー・約50ml）／約12杯（#12・約80ml）",
  },
  { label: "不使用", value: "乳・卵・小麦・白砂糖・乳化安定剤・増粘剤・着色料" },
  {
    label: "アレルゲン",
    value: "特定原材料8品目は不使用。一部の味に大豆・アーモンド・もも・りんごを含みます",
  },
  { label: "保管", value: "−18℃以下で冷凍保存" },
  { label: "配送", value: "ヤマト運輸 クール冷凍便で全国へ" },
  { label: "分類", value: "氷菓（乳製品を使っていないため）" },
];

/** フレーバー一覧と商品仕様。仕様は折りたたんで、ページを短く保つ */
export default function DessertProductsSection() {
  return (
    <section id="products" className="bg-bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="フレーバー"
          lines={["全11種類から、", "お店に合う味を。"]}
          lead={["料理に合わせて、好きな組み合わせで選べます。"]}
        />

        <div className="mt-8 space-y-8">
          {flavorGroups.map((group) => (
            <div key={group.title}>
              <p className="text-ink text-[15px] font-bold">
                {group.title}
                <span className="text-ink-muted ml-2 text-xs font-normal">{group.note}</span>
              </p>
              <ul className={`mt-3 grid gap-2 sm:gap-4 ${group.gridColsClass}`}>
                {group.items.map((flavor) => (
                  <li key={flavor.name} className="group text-center">
                    <div className="relative mx-auto aspect-square w-full rounded-2xl bg-[#f7f3ec] p-1.5 transition-transform duration-200 group-hover:scale-[1.02]">
                      <FlavorThumbnail
                        name={flavor.name}
                        image={flavor.image}
                        color={flavor.color}
                        sizes="(max-width: 640px) 30vw, 160px"
                      />
                    </div>
                    <p className="text-ink mt-1.5 text-[11px] leading-tight font-bold whitespace-pre-line sm:text-sm">
                      {flavor.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 商品仕様（折りたたみ） */}
        <details className="group mt-10 rounded-2xl border border-gray-200 bg-white">
          <summary className="text-ink flex cursor-pointer list-none items-center justify-between px-5 py-4 text-[15px] font-bold [&::-webkit-details-marker]:hidden">
            商品の仕様を見る
            <span
              className="text-brand transition-transform duration-200 group-open:rotate-180"
              aria-hidden="true"
            >
              ▾
            </span>
          </summary>
          <dl className="divide-y divide-gray-100 border-t border-gray-100 px-5">
            {specs.map((spec) => (
              <div key={spec.label} className="grid grid-cols-[5.5rem_1fr] gap-3 py-3 text-[13px]">
                <dt className="text-brand font-bold">{spec.label}</dt>
                <dd className="text-ink-light leading-relaxed">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </details>

        <MidCta message="どの味が合うか、実際に試してみてください。" />
      </div>
    </section>
  );
}
