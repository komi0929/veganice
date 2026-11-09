"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { FlavorSpec } from "@/app/data/flavorSpecs";
import { FlavorThumbnail } from "./FlavorThumbnail";

export interface SelectedFlavorTarget {
  name: string;
  image?: string;
  color?: string;
  spec: FlavorSpec;
}

interface FlavorSpecModalProps {
  target: SelectedFlavorTarget | null;
  onClose: () => void;
}

export default function FlavorSpecModal({ target, onClose }: FlavorSpecModalProps) {
  useEffect(() => {
    if (!target) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [target, onClose]);

  if (!target || typeof document === "undefined") return null;

  const { spec } = target;
  const showAllergens = Boolean(spec.allergens && spec.allergens !== "—");

  const nutritionRows = [
    { label: "熱量", value: spec.nutrition.calories },
    { label: "たんぱく質", value: spec.nutrition.protein },
    { label: "脂質", value: spec.nutrition.fat },
    { label: "炭水化物", value: spec.nutrition.carbs },
    { label: "食塩相当量", value: spec.nutrition.salt },
  ];

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/45 backdrop-blur-[2px] sm:items-center sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="flavor-spec-modal-title"
    >
      <div
        className="max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white p-5 shadow-2xl sm:rounded-3xl sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── ヘッダー ── */}
        <div className="flex items-center justify-between gap-3 border-b border-stone-200 pb-3.5">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-[#f7f3ec] p-1">
              <FlavorThumbnail
                name={spec.name}
                image={target.image}
                color={target.color}
                sizes="48px"
              />
            </div>
            <div>
              <p className="text-brand font-sans text-[11px] font-bold tracking-wider">
                原材料・アレルゲン・栄養成分
              </p>
              <h3
                id="flavor-spec-modal-title"
                className="text-ink font-sans text-lg font-bold sm:text-xl"
              >
                {spec.name}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="閉じる"
            className="text-ink-muted hover:text-ink flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-stone-100 text-lg font-bold transition-colors hover:bg-stone-200"
          >
            ✕
          </button>
        </div>

        {/* ── 仕様リスト（4項目） ── */}
        <dl className="mt-4 divide-y divide-stone-200/80 text-left font-sans">
          {/* 1. 原材料名 */}
          <div className="py-3 first:pt-0">
            <dt className="text-brand text-xs font-bold sm:text-sm">原材料名</dt>
            <dd className="text-ink mt-1 text-[13px] leading-relaxed sm:text-sm">
              {spec.ingredients}
            </dd>
          </div>

          {/* 2. アレルゲン（「—」の味は非表示） */}
          {showAllergens && (
            <div className="py-3">
              <dt className="text-brand text-xs font-bold sm:text-sm">アレルゲン</dt>
              <dd className="text-ink mt-1 text-[13px] font-bold sm:text-sm">{spec.allergens}</dd>
            </div>
          )}

          {/* 3. 栄養成分（1カップ（100ml）あたり） */}
          <div className="py-3">
            <dt className="text-brand text-xs font-bold sm:text-sm">
              栄養成分（1カップ（100ml）あたり）
            </dt>
            <dd className="mt-2">
              <div className="grid grid-cols-5 gap-1.5 rounded-xl bg-stone-50 p-2.5 text-center sm:gap-2 sm:p-3">
                {nutritionRows.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <span className="text-ink-muted text-[10px] leading-tight sm:text-xs">
                      {item.label}
                    </span>
                    <span className="text-ink mt-1 text-xs font-bold tabular-nums sm:text-sm">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </dd>
          </div>

          {/* 4. 保存方法 */}
          <div className="py-3 last:pb-0">
            <dt className="text-brand text-xs font-bold sm:text-sm">保存方法</dt>
            <dd className="text-ink mt-1 text-[13px] leading-relaxed sm:text-sm">
              {spec.storageMethod}
            </dd>
          </div>
        </dl>

        {/* ── フッター（スマホで片手で閉じやすいボタン） ── */}
        <div className="mt-5">
          <button
            type="button"
            onClick={onClose}
            className="bg-brand hover:bg-brand-dark w-full cursor-pointer rounded-full py-3 font-sans text-sm font-bold text-white transition-colors"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
