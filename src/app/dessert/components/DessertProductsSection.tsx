"use client";

import { useState } from "react";
import Link from "next/link";
import { getFlavorSpec } from "@/app/data/flavorSpecs";
import FlavorSpecModal, { type SelectedFlavorTarget } from "@/app/components/FlavorSpecModal";
import { SectionHeader } from "./ui";
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
    title: "濃厚ミルク・カカオ・茶葉系（6種）",
    note: "クーベルチュールやココナッツ、濃縮甘酒・白みその旨みを重ねた、温かいお菓子にも合う濃密仕立て",
    gridColsClass: "grid-cols-3 sm:grid-cols-6",
    items: [
      { name: "バニラ\nココナッツ", image: "/images/flavors/vanilla_coconut.png" },
      { name: "抹茶", image: "/images/flavors/matcha.png" },
      { name: "ショコラ", image: "/images/flavors/chocolate.png" },
      { name: "ほうじ茶", image: "/images/flavors/houjicha.png" },
      { name: "UMAMI\nバニラ", image: "/images/flavors/umami_vanilla.png" },
      { name: "アール\nグレイ", image: "/images/flavors/earl_gray.png" },
    ],
  },
  {
    title: "完熟ピューレ・国産果汁系（5種）",
    note: "氷っぽいシャーベットではなく、ココナッツクリームや米粉で果肉のようなとろみに仕立てた果実系（豆乳不使用）",
    gridColsClass: "grid-cols-3 sm:grid-cols-5",
    items: [
      { name: "マンゴー", image: "/images/flavors/mango.png" },
      { name: "ミックス\nベリー", image: "/images/flavors/berry_mix.png" },
      { name: "もも", image: "/images/flavors/peach.png" },
      { name: "りんご", image: "/images/flavors/apple.png" },
      { name: "ドラゴン\nフルーツ", image: "/images/flavors/dragon_fruit.png" },
    ],
  },
];

const specs = [
  {
    label: "仕入れ形態",
    value: "① 業務用バルク 1L・2L角型（最小4L〜） ／ ② 定番 100ml個食カップ（最小60個〜）",
  },
  {
    label: "卸価格",
    value:
      "バルク：1L ¥2,000・2L ¥4,000（税別）／ 100mlカップ：1個 ¥300（税別・ラベル貼付済）。全11種同価格・味ミックス自由",
  },
  {
    label: "杯数・原価目安",
    value: "バルク1Lあたり 約20杯（#18・約50ml＝1杯約100円）／約12杯（#12・約80ml＝1杯約167円）",
  },
  { label: "不使用素材", value: "乳・卵・小麦・白砂糖 不使用（全11種共通）" },
  {
    label: "アレルゲン管理",
    value:
      "卵・乳・小麦を持ち込まない専用の工房で製造（工房への持ち込みはアーモンド・くるみ・カシューナッツ・落花生等のナッツ類のみ）。味により大豆・アーモンド（ナッツ使用）・もも・りんごを含みます",
  },
  { label: "保管・分類", value: "−18℃以下で冷凍保存 ／ 氷菓（賞味期限表示義務なし）" },
  {
    label: "配送・お支払い",
    value:
      "通常5営業日前後でヤマトクール冷凍便発送 ／ 月末締め・翌月末払い（請求書振込）または発注ページでのカード決済",
  },
];

/** フレーバー一覧と商品仕様（すぐ下のサンプル申込フォームへ直結） */
export default function DessertProductsSection() {
  const [selectedFlavor, setSelectedFlavor] = useState<SelectedFlavorTarget | null>(null);

  return (
    <section id="products" className="bg-bg-white scroll-mt-16 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="全11フレーバー・卸価格"
          lines={["全11種類すべて同価格。", "1L×4本から自由に組み合わせ。"]}
          lead={["各フレーバーをタップすると、全原材料・アレルゲン・栄養成分をご覧いただけます。"]}
        />

        <div className="mt-8 space-y-8">
          {flavorGroups.map((group) => (
            <div key={group.title}>
              <p className="text-ink text-[15px] font-bold">
                {group.title}
                <span className="text-ink-muted ml-2 block text-xs font-normal sm:inline">
                  {group.note}
                </span>
              </p>
              <ul className={`mt-3 grid gap-2 sm:gap-4 ${group.gridColsClass}`}>
                {group.items.map((flavor) => {
                  const spec = getFlavorSpec(flavor.name);
                  return (
                    <li key={flavor.name} className="flex">
                      <button
                        type="button"
                        onClick={() => {
                          if (spec) {
                            setSelectedFlavor({
                              name: flavor.name,
                              image: flavor.image,
                              color: flavor.color,
                              spec,
                            });
                          }
                        }}
                        className="group flex h-full w-full cursor-pointer flex-col items-center text-center"
                      >
                        <div className="relative mx-auto aspect-square w-full rounded-2xl bg-[#f7f3ec] p-1.5 transition-transform duration-200 group-hover:scale-[1.02]">
                          <FlavorThumbnail
                            name={flavor.name}
                            image={flavor.image}
                            color={flavor.color}
                            sizes="(max-width: 640px) 30vw, 160px"
                          />
                        </div>
                        <p className="text-ink mt-1.5 mb-1.5 text-[11px] leading-tight font-bold whitespace-pre-line sm:text-sm">
                          {flavor.name}
                        </p>
                        <span className="text-brand border-brand/25 bg-brand/5 group-hover:bg-brand group-hover:border-brand mt-auto inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-[10px] font-bold whitespace-nowrap transition-colors group-hover:text-white sm:px-2.5 sm:text-[11px]">
                          原材料・栄養
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* 価格＆カップ・OEM案内ボックス */}
        <div className="mt-8 rounded-2xl border border-gray-200/90 bg-[#faf8f4] p-4 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-ink text-[15px] font-bold sm:text-base">
                業務用バルク価格：1L ¥2,000 ／ 2L ¥4,000（税別）
              </p>
              <p className="text-ink-light mt-0.5 text-xs leading-relaxed">
                最小4L（1L×4本・2L×2本など）から組み合わせ自由・1皿（50ml）原価 約100円（税別）
              </p>
            </div>
            <div className="border-t border-gray-200 pt-2.5 text-xs sm:border-t-0 sm:border-l sm:pt-0 sm:pl-4">
              <p className="text-ink font-bold">
                持ち帰り・物販用「100ml個食カップ（税別¥300・60個〜）」も対応
              </p>
              <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                <Link
                  href="/wholesale"
                  className="text-brand font-bold underline underline-offset-4"
                >
                  カップ＆バルク要点一覧 →
                </Link>
                <Link
                  href="/oem/plan?src=dessert_products"
                  className="text-brand font-bold underline underline-offset-4"
                >
                  フタだけお店ロゴOEM（開発費¥0）→
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 商品仕様（折りたたみ） */}
        <details className="group mt-4 rounded-2xl border border-gray-200 bg-white">
          <summary className="text-ink flex cursor-pointer list-none items-center justify-between px-5 py-3.5 text-sm font-bold [&::-webkit-details-marker]:hidden">
            詳しいお取引条件・仕様を開く
            <span
              className="text-brand transition-transform duration-200 group-open:rotate-180"
              aria-hidden="true"
            >
              ▾
            </span>
          </summary>
          <dl className="divide-y divide-gray-100 border-t border-gray-100 px-5">
            {specs.map((spec) => (
              <div key={spec.label} className="grid grid-cols-[6rem_1fr] gap-3 py-3 text-[13px]">
                <dt className="text-brand font-bold">{spec.label}</dt>
                <dd className="text-ink-light leading-relaxed">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </details>
      </div>

      <FlavorSpecModal target={selectedFlavor} onClose={() => setSelectedFlavor(null)} />
    </section>
  );
}
