"use client";

import React, { useState } from "react";

export const SAMPLE_FLAVORS = [
  "もも",
  "りんご",
  "ミックスベリー",
  "ドラゴンフルーツ",
  "マンゴー",
  "ショコラ",
  "抹茶",
  "ほうじ茶",
  "バニラ",
  "UMAMIバニラ",
  "アールグレイ",
] as const;

export type SampleFlavorName = (typeof SAMPLE_FLAVORS)[number];
export type SampleMode = "omakase" | "custom";

export const MAX_SAMPLE_QTY = 6;

interface SampleFlavorPickerProps {
  disabled?: boolean;
  error?: string[];
}

export default function SampleFlavorPicker({ disabled = false, error }: SampleFlavorPickerProps) {
  const [mode, setMode] = useState<SampleMode>("omakase");
  const [counts, setCounts] = useState<Record<SampleFlavorName, number>>(() => {
    const initial = {} as Record<SampleFlavorName, number>;
    for (const flavor of SAMPLE_FLAVORS) {
      initial[flavor] = 0;
    }
    return initial;
  });

  const totalSelected = SAMPLE_FLAVORS.reduce((sum, flavor) => sum + counts[flavor], 0);
  const remaining = MAX_SAMPLE_QTY - totalSelected;

  const selectedItems =
    mode === "omakase"
      ? []
      : SAMPLE_FLAVORS.filter((flavor) => counts[flavor] > 0).map((flavor) => ({
          flavor,
          qty: counts[flavor],
        }));

  const handleDecrement = (flavor: SampleFlavorName) => {
    setCounts((prev) => ({
      ...prev,
      [flavor]: Math.max(0, prev[flavor] - 1),
    }));
  };

  const handleIncrement = (flavor: SampleFlavorName) => {
    setCounts((prev) => {
      const currentTotal = SAMPLE_FLAVORS.reduce((sum, f) => sum + prev[f], 0);
      if (currentTotal >= MAX_SAMPLE_QTY) return prev;
      return {
        ...prev,
        [flavor]: prev[flavor] + 1,
      };
    });
  };

  return (
    <div>
      <input type="hidden" name="sampleMode" value={mode} />
      <input type="hidden" name="sampleFlavors" value={JSON.stringify(selectedItems)} />

      <div className="mb-2 flex items-center gap-2">
        <span className="text-ink text-sm font-bold">サンプルの味（6個）</span>
        <span className="text-cta border-cta/30 rounded border px-1.5 py-0.5 text-[10px] font-bold">
          必須
        </span>
      </div>

      {/* モード選択（2択） */}
      <div className="grid grid-cols-2 gap-2.5">
        <button
          type="button"
          disabled={disabled}
          onClick={() => setMode("omakase")}
          aria-pressed={mode === "omakase"}
          className={`flex min-h-[44px] items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
            mode === "omakase"
              ? "border-brand bg-brand/5 text-ink"
              : "text-ink-light hover:text-ink border-gray-200 bg-white"
          }`}
        >
          <span
            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
              mode === "omakase" ? "border-brand" : "border-gray-300"
            }`}
            aria-hidden="true"
          >
            {mode === "omakase" && <span className="bg-brand h-2 w-2 rounded-full" />}
          </span>
          <span>おまかせ6個</span>
        </button>

        <button
          type="button"
          disabled={disabled}
          onClick={() => setMode("custom")}
          aria-pressed={mode === "custom"}
          className={`flex min-h-[44px] items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
            mode === "custom"
              ? "border-brand bg-brand/5 text-ink"
              : "text-ink-light hover:text-ink border-gray-200 bg-white"
          }`}
        >
          <span
            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
              mode === "custom" ? "border-brand" : "border-gray-300"
            }`}
            aria-hidden="true"
          >
            {mode === "custom" && <span className="bg-brand h-2 w-2 rounded-full" />}
          </span>
          <span>自分で選ぶ</span>
        </button>
      </div>

      {mode === "omakase" ? (
        <p className="text-ink-light mt-2 text-xs leading-relaxed">
          全11種の中から、バランスよく6個をお選びしてお届けします。
        </p>
      ) : (
        <div className="mt-3 rounded-xl border border-gray-200 bg-white p-3 sm:p-4">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-2.5">
            <span className="text-ink-light text-xs">
              全11種から合計{MAX_SAMPLE_QTY}個まで（同じ味を複数でも可）
            </span>
            <span className="text-ink text-xs font-bold">
              選択中：{totalSelected} / {MAX_SAMPLE_QTY}個
            </span>
          </div>

          <ul className="divide-y divide-gray-100">
            {SAMPLE_FLAVORS.map((flavor) => {
              const qty = counts[flavor];
              const canDecrement = !disabled && qty > 0;
              const canIncrement = !disabled && totalSelected < MAX_SAMPLE_QTY;

              return (
                <li key={flavor} className="flex items-center justify-between gap-2 py-2">
                  <span className={`text-sm ${qty > 0 ? "text-ink font-bold" : "text-ink"}`}>
                    {flavor}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => handleDecrement(flavor)}
                      disabled={!canDecrement}
                      aria-label={`${flavor}を減らす`}
                      className="text-ink flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 bg-white text-base font-bold transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-35"
                    >
                      −
                    </button>
                    <span
                      aria-live="polite"
                      className={`w-7 text-center text-sm tabular-nums ${
                        qty > 0 ? "text-brand font-bold" : "text-ink-muted"
                      }`}
                    >
                      {qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleIncrement(flavor)}
                      disabled={!canIncrement}
                      aria-label={`${flavor}を増やす`}
                      className="text-ink flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 bg-white text-base font-bold transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-35"
                    >
                      ＋
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          {remaining > 0 && (
            <p className="text-ink-light mt-3 rounded-lg bg-gray-50 px-3 py-2 text-xs">
              残り{remaining}個はおまかせでお選びします
            </p>
          )}
        </div>
      )}

      {error && error.length > 0 && <p className="mt-1.5 text-xs text-red-500">{error[0]}</p>}
    </div>
  );
}
