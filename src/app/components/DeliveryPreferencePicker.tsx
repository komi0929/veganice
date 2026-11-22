"use client";

import { useState } from "react";

export const RECEIVE_DAYS = ["月", "火", "水", "木", "金", "土", "日"] as const;

export const RECEIVE_SLOTS = [
  { label: "午前中", value: "午前中（8:00〜12:00）" },
  { label: "14〜16時", value: "14:00〜16:00" },
  { label: "16〜18時", value: "16:00〜18:00" },
  { label: "18〜20時", value: "18:00〜20:00" },
  { label: "19〜21時", value: "19:00〜21:00" },
] as const;

interface DeliveryPreferencePickerProps {
  disabled?: boolean;
}

export default function DeliveryPreferencePicker({
  disabled = false,
}: DeliveryPreferencePickerProps) {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);
  const [note, setNote] = useState("");

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const toggleSlot = (slotValue: string) => {
    setSelectedSlots((prev) =>
      prev.includes(slotValue) ? prev.filter((s) => s !== slotValue) : [...prev, slotValue]
    );
  };

  const receiveDaysValue = selectedDays.join(",");
  const receiveSlotsValue = selectedSlots.join(",");
  const hasSelection =
    selectedDays.length > 0 || selectedSlots.length > 0 || note.trim().length > 0;

  return (
    <details className="group rounded-xl border border-gray-200/80 bg-[#fafaf8] px-4 py-3.5">
      {/* hidden inputs for form submission */}
      <input type="hidden" name="receiveDays" value={receiveDaysValue} />
      <input type="hidden" name="receiveSlots" value={receiveSlotsValue} />

      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 [&::-webkit-details-marker]:hidden">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-ink font-sans text-sm font-bold">
            ＋ 受け取りやすい曜日・時間帯を指定する
          </span>
          <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] text-gray-500">
            任意・定休日がある場合
          </span>
          {hasSelection && (
            <span className="bg-brand/10 text-brand rounded-full px-2 py-0.5 text-[10px] font-bold">
              指定あり
            </span>
          )}
        </div>
        <span
          className="text-brand shrink-0 text-sm transition-transform duration-200 group-open:rotate-180"
          aria-hidden="true"
        >
          ▾
        </span>
      </summary>

      <div className="mt-4 space-y-4 border-t border-gray-200/70 pt-3.5">
        <p className="text-ink-light text-xs leading-relaxed">
          お店にどなたかいらっしゃる曜日と時間を教えてください。サンプルとご注文を、その時間にお届けします。
        </p>

        {/* 曜日選択 (月〜日 7つの丸いボタン 直径40px以上) */}
        <div>
          <span className="text-ink-muted block text-xs font-medium">受け取りやすい曜日</span>
          <div className="mt-2 flex flex-wrap gap-2 sm:gap-2.5">
            {RECEIVE_DAYS.map((day) => {
              const isSelected = selectedDays.includes(day);
              return (
                <button
                  key={day}
                  type="button"
                  disabled={disabled}
                  onClick={() => toggleDay(day)}
                  aria-pressed={isSelected}
                  aria-label={`${day}曜日`}
                  className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-sm font-bold transition-all disabled:cursor-not-allowed disabled:opacity-50 ${
                    isSelected
                      ? "bg-brand text-white shadow-xs"
                      : "text-ink border border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* 時間帯選択 (5つのボタン) */}
        <div>
          <span className="text-ink-muted block text-xs font-medium">受け取りやすい時間帯</span>
          <div className="mt-2 flex flex-wrap gap-2">
            {RECEIVE_SLOTS.map((slot) => {
              const isSelected = selectedSlots.includes(slot.value);
              return (
                <button
                  key={slot.value}
                  type="button"
                  disabled={disabled}
                  onClick={() => toggleSlot(slot.value)}
                  aria-pressed={isSelected}
                  className={`min-h-[40px] cursor-pointer rounded-xl px-3.5 py-2 text-xs font-bold transition-all disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm ${
                    isSelected
                      ? "bg-brand text-white shadow-xs"
                      : "text-ink border border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {slot.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* メモ (1行入力欄・100文字まで) */}
        <div>
          <label htmlFor="receiveNote" className="text-ink-muted block text-xs font-medium">
            受け取りのメモ
          </label>
          <input
            type="text"
            id="receiveNote"
            name="receiveNote"
            disabled={disabled}
            maxLength={100}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="例：火曜定休／搬入口は裏手／15時以降は不在"
            className="text-ink focus:border-brand focus:ring-brand mt-1.5 w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 font-sans text-sm transition-shadow placeholder:text-gray-300 focus:ring-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      </div>
    </details>
  );
}
