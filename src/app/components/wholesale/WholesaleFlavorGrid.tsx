"use client";

import { useState } from "react";
import { getFlavorSpec } from "@/app/data/flavorSpecs";
import FlavorSpecModal, { type SelectedFlavorTarget } from "@/app/components/FlavorSpecModal";
import { FlavorThumbnail } from "@/app/components/FlavorThumbnail";

export interface WholesaleFlavorCardItem {
  /** 画面上の表示名（例：「UMAMIバニラ（白味噌）」） */
  displayName: string;
  /** 仕様データを引く基準名（省略時は displayName をそのまま使用） */
  specKey?: string;
  image: string;
  note: string;
}

export interface WholesaleFlavorGroup {
  title: string;
  subtitle: string;
  items: WholesaleFlavorCardItem[];
}

export interface WholesaleFlavorGridProps {
  groups: WholesaleFlavorGroup[];
}

export default function WholesaleFlavorGrid({ groups }: WholesaleFlavorGridProps) {
  const [selectedFlavor, setSelectedFlavor] = useState<SelectedFlavorTarget | null>(null);

  return (
    <>
      <div className="space-y-10">
        {groups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-stone-200/70 bg-white p-5 sm:p-7"
          >
            <div className="border-b border-stone-100 pb-3.5">
              <h3 className="text-ink text-lg font-bold sm:text-xl">{group.title}</h3>
              <p className="text-ink-light mt-1 font-sans text-xs leading-relaxed sm:text-sm">
                {group.subtitle}
              </p>
            </div>

            <ul
              className={`mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 ${
                group.items.length === 6 ? "lg:grid-cols-6" : "lg:grid-cols-5"
              }`}
            >
              {group.items.map((item) => {
                const lookupKey = item.specKey ?? item.displayName;
                const spec = getFlavorSpec(lookupKey);
                return (
                  <li key={item.displayName} className="flex">
                    <button
                      type="button"
                      onClick={() => {
                        if (spec) {
                          setSelectedFlavor({
                            name: item.displayName,
                            image: item.image,
                            spec,
                          });
                        }
                      }}
                      className="group hover:border-brand/40 flex h-full w-full cursor-pointer flex-col items-center rounded-2xl border border-stone-200/80 bg-[#fafaf8] p-3 text-center transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-sm sm:p-4"
                    >
                      <div className="relative mx-auto aspect-square w-20 overflow-hidden rounded-xl bg-[#f4f0e8] p-1.5 transition-transform duration-200 group-hover:scale-105 sm:w-24">
                        <FlavorThumbnail
                          name={item.displayName}
                          image={item.image}
                          sizes="(max-width: 640px) 96px, 120px"
                        />
                      </div>
                      <p className="text-ink mt-2.5 font-sans text-xs leading-snug font-bold sm:text-sm">
                        {item.displayName}
                      </p>
                      <p className="text-ink-muted mt-1 mb-2.5 font-sans text-[11px] leading-relaxed sm:text-xs">
                        {item.note}
                      </p>
                      <span className="text-brand border-brand/25 bg-brand/5 group-hover:bg-brand group-hover:border-brand mt-auto inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 font-sans text-[10px] font-bold whitespace-nowrap transition-colors group-hover:text-white sm:text-[11px]">
                        原材料・栄養を見る
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <FlavorSpecModal target={selectedFlavor} onClose={() => setSelectedFlavor(null)} />
    </>
  );
}
