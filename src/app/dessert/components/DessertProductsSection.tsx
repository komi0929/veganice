"use client";

import { useState } from "react";
import Link from "next/link";
import { getFlavorSpec } from "@/app/data/flavorSpecs";
import FlavorSpecModal, { type SelectedFlavorTarget } from "@/app/components/FlavorSpecModal";
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
      { name: "マンゴー", image: "/images/flavors/mango.png" },
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
      { name: "UMAMI\nバニラ", image: "/images/flavors/umami_vanilla.png" },
      { name: "アール\nグレイ", image: "/images/flavors/earl_gray.png" },
    ],
  },
];

const specs = [
  { label: "提供形態", value: "① 業務用バルク（1L・2L）／ ② 個食カップ（100ml・自社シール付）" },
  {
    label: "最小ロット",
    value:
      "バルク：4L〜（2L×2本、1L×4本など） ／ カップ：60個〜（おススメ120個）。味の組み合わせ自由",
  },
  {
    label: "価格（税別）",
    value: "バルク：1L ¥2,000・2L ¥4,000 ／ 個食カップ：1個 ¥300（税込¥324）。全11種同価格",
  },
  {
    label: "杯数の目安",
    value: "バルク1Lあたり 約20杯（#18ディッシャー・約50ml）／約12杯（#12・約80ml）",
  },
  { label: "不使用", value: "乳・卵・小麦・白砂糖・乳化安定剤・増粘剤・着色料" },
  {
    label: "アレルゲン",
    value:
      "特定原材料8品目は原材料として不使用（乳・卵・小麦は工房への持ち込みもなし／工房内で落花生・くるみ・カシューナッツ等のナッツ類を扱う場合あり）。一部の味に大豆・アーモンド・もも・りんごを含みます",
  },
  { label: "保管", value: "−18℃以下で冷凍保存" },
  { label: "配送", value: "ヤマト運輸 クール冷凍便で全国へ" },
  { label: "分類", value: "氷菓（乳製品を使っていないため）" },
];

/** フレーバー一覧と商品仕様。仕様は折りたたんで、ページを短く保つ */
export default function DessertProductsSection() {
  const [selectedFlavor, setSelectedFlavor] = useState<SelectedFlavorTarget | null>(null);

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

        <div className="mt-8 rounded-2xl border border-gray-200/80 bg-[#faf8f4] p-5">
          <p className="text-ink flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[15px] font-bold">
            <span>① 業務用バルク：1L ¥2,000 ／ 2L ¥4,000（税別・最小4L〜）</span>
            <span className="text-brand">｜</span>
            <span>② 個食カップ（自社シール）：1個 ¥300（税別・最小60個〜）</span>
          </p>
          <p className="text-ink-muted mt-1.5 text-xs">
            全11種同価格。味の組み合わせ（アソート）は自由にお選びいただけます。
          </p>
        </div>

        {/* 商品仕様（折りたたみ） */}
        <details className="group mt-6 rounded-2xl border border-gray-200 bg-white">
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

        {/* OEM（要点版LP）への相互補完ブリッジ */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-5 sm:flex-row sm:items-center sm:p-6">
          <div>
            <p className="text-brand text-xs font-bold">
              お店の屋号シール・オリジナル味をご希望の方へ
            </p>
            <p className="text-ink mt-1 text-sm font-bold sm:text-[15px]">
              天面シール変更（開発費0円）や、お店の素材を使ったOEM製造（60個／6L〜）も承っています
            </p>
          </div>
          <Link
            href="/oem/plan"
            className="text-brand border-brand/30 hover:bg-brand shrink-0 rounded-full border px-5 py-2.5 text-xs font-bold transition-colors hover:text-white sm:text-sm"
          >
            OEMの仕組み・料金を見る →
          </Link>
        </div>

        <MidCta message="どの味が合うか、実際に試してみてください。" />
      </div>

      <FlavorSpecModal target={selectedFlavor} onClose={() => setSelectedFlavor(null)} />
    </section>
  );
}
