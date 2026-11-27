"use client";

import { useState } from "react";
import Link from "next/link";
import { getFlavorSpec } from "@/app/data/flavorSpecs";
import FlavorSpecModal, { type SelectedFlavorTarget } from "@/app/components/FlavorSpecModal";
import { FlavorThumbnail } from "@/app/components/FlavorThumbnail";

interface Flavor {
  name: string;
  note: string;
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
    title: "ミルク・カカオ・茶葉系（6種）",
    note: "食後のデザートや焼き菓子添えに人気の定番6種",
    gridColsClass: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
    items: [
      {
        name: "UMAMIバニラ",
        note: "人気No.1。甘酒と白みそのコク",
        image: "/images/flavors/umami_vanilla.png",
      },
      { name: "抹茶", note: "宇治抹茶に甘酒を合わせた濃厚味", image: "/images/flavors/matcha.png" },
      {
        name: "バニラココナッツ",
        note: "ココナッツが香るさっぱりした甘さ",
        image: "/images/flavors/vanilla_coconut.png",
      },
      {
        name: "ほうじ茶",
        note: "香ばしい茶葉の香りと軽い後味",
        image: "/images/flavors/houjicha.png",
      },
      {
        name: "アールグレイ",
        note: "ベルガモットと紅茶の華やかな香り",
        image: "/images/flavors/earl_gray.png",
      },
      {
        name: "ショコラ",
        note: "カカオが濃い生チョコのような食感",
        image: "/images/flavors/chocolate.png",
      },
    ],
  },
  {
    title: "フルーツ系（5種・豆乳不使用）",
    note: "お食事の後やフロートに合う爽やかな果実系5種",
    gridColsClass: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
    items: [
      {
        name: "マンゴー",
        note: "完熟マンゴーの濃厚でなめらかな甘み",
        image: "/images/flavors/mango.png",
      },
      {
        name: "ミックスベリー",
        note: "苺と木苺の甘酸っぱい果実味",
        image: "/images/flavors/berry_mix.png",
      },
      { name: "もも", note: "国産白桃のやさしい香りと果汁感", image: "/images/flavors/peach.png" },
      {
        name: "りんご",
        note: "国産りんご果汁のみずみずしい甘み",
        image: "/images/flavors/apple.png",
      },
      {
        name: "ドラゴンフルーツ",
        note: "器が華やぐパイン＆ピタヤ味",
        image: "/images/flavors/dragon_fruit.png",
      },
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
      "バルク：1L ¥2,000・2L ¥4,000（税別）／ 100mlカップ：1個 ¥300（税別）。全11種同価格・味自由",
  },
  {
    label: "杯数目安",
    value: "1Lあたり 約20杯（#18・50ml＝1杯約100円）／ 約12杯（#12・80ml＝1杯約167円）",
  },
  { label: "不使用素材", value: "乳・卵・小麦・白砂糖 不使用（全11種共通・氷菓）" },
  {
    label: "アレルゲン",
    value:
      "卵・乳・小麦を持ち込まない専用工房製（持ち込みはナッツ類のみ。味により大豆・アーモンド・もも・りんごを含む）",
  },
  {
    label: "配送・支払",
    value: "通常5営業日前後でクール冷凍便発送 ／ 納品月の月末締め・翌月末請求書払い（銀行振込）",
  },
];

export default function DessertProductsSection() {
  const [selectedFlavor, setSelectedFlavor] = useState<SelectedFlavorTarget | null>(null);

  return (
    <section id="products" className="scroll-mt-16 bg-[#f7f3ec] py-12 sm:py-18">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-brand mb-2 inline-flex items-center gap-2 text-xs font-bold tracking-wide">
              <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
              全11種の味・お取引条件
            </p>
            <h2 className="text-ink text-2xl leading-snug font-bold tracking-tight sm:text-3xl">
              全11種同価格。1L×4本から自由に組み合わせ。
            </h2>
          </div>
          <p className="text-ink-muted text-xs">※カードをタップで全原材料・栄養成分を表示</p>
        </div>

        <div className="mt-6 space-y-6">
          {flavorGroups.map((group) => (
            <div key={group.title} className="rounded-3xl bg-white p-4 shadow-2xs sm:p-6">
              <p className="text-ink border-b border-gray-100 pb-3 text-sm font-bold sm:text-base">
                {group.title}
                <span className="text-ink-muted mt-0.5 block text-xs font-normal sm:mt-0 sm:ml-2 sm:inline">
                  {group.note}
                </span>
              </p>
              <ul className={`mt-4 grid gap-2.5 sm:gap-3.5 ${group.gridColsClass}`}>
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
                        className="group hover:border-brand/40 flex h-full w-full cursor-pointer flex-col items-center rounded-2xl border border-gray-100 bg-[#fafaf8] p-3 text-center transition-all hover:bg-white hover:shadow-2xs"
                      >
                        <div className="relative mx-auto aspect-square w-20 rounded-xl bg-[#f4f0e8] p-1.5 transition-transform duration-200 group-hover:scale-105 sm:w-22">
                          <FlavorThumbnail
                            name={flavor.name}
                            image={flavor.image}
                            color={flavor.color}
                            sizes="(max-width: 640px) 96px, 112px"
                          />
                        </div>
                        <p className="text-ink mt-2 text-xs leading-snug font-bold">
                          {flavor.name}
                        </p>
                        <p className="text-ink-muted mt-0.5 mb-2 text-[11px] leading-snug">
                          {flavor.note}
                        </p>
                        <span className="text-brand border-brand/25 bg-brand/5 group-hover:bg-brand group-hover:border-brand mt-auto inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-[10px] font-bold whitespace-nowrap transition-colors group-hover:text-white">
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

        {/* 価格＆カップ・OEM早見ボックス */}
        <div className="mt-6 rounded-2xl bg-white p-4 shadow-2xs sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-ink text-sm font-bold sm:text-base">
                業務用バルク：1L ¥2,000 ／ 2L ¥4,000（税別・最小4L〜）
              </p>
              <p className="text-ink-light mt-0.5 text-xs">
                1皿（50ml）原価 約100円（税別）・味の組み合わせ自由
              </p>
            </div>
            <div className="border-t border-gray-100 pt-2.5 text-xs sm:border-t-0 sm:border-l sm:pt-0 sm:pl-4">
              <p className="text-ink font-bold">
                物販用「100ml個食カップ（税別¥300・60個〜）」も対応
              </p>
              <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                <Link
                  href="/wholesale"
                  className="text-brand font-bold underline underline-offset-4"
                >
                  カップ＆バルク一覧 →
                </Link>
                <Link
                  href="/oem/plan?src=dessert_products"
                  className="text-brand font-bold underline underline-offset-4"
                >
                  フタロゴOEM（¥0）→
                </Link>
              </div>
            </div>
          </div>

          <details className="group mt-3 border-t border-gray-100 pt-3">
            <summary className="text-ink flex cursor-pointer list-none items-center justify-between text-xs font-bold [&::-webkit-details-marker]:hidden">
              詳しいお取引条件・アレルゲン管理を開く
              <span
                className="text-brand transition-transform duration-200 group-open:rotate-180"
                aria-hidden="true"
              >
                ▾
              </span>
            </summary>
            <dl className="mt-2 divide-y divide-gray-100">
              {specs.map((spec) => (
                <div key={spec.label} className="grid grid-cols-[5.5rem_1fr] gap-3 py-2 text-xs">
                  <dt className="text-brand font-bold">{spec.label}</dt>
                  <dd className="text-ink-light leading-relaxed">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </details>
        </div>
      </div>

      <FlavorSpecModal target={selectedFlavor} onClose={() => setSelectedFlavor(null)} />
    </section>
  );
}
