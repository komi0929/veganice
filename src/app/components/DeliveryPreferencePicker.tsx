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

  return (
    <div className="space-y-4 rounded-xl border border-gray-100 bg-white/80 p-4 sm:p-5">
      {/* hidden inputs for form submission */}
      <input type="hidden" name="receiveDays" value={receiveDaysValue} />
      <input type="hidden" name="receiveSlots" value={receiveSlotsValue} />

      <div>
        <div className="flex items-center gap-2">
          <span className="text-ink font-sans text-sm font-bold">受け取りやすい曜日・時間帯</span>
          <span className="rounded border border-gray-200 px-1.5 py-0.5 text-[10px] text-gray-400">
            任意
          </span>
        </div>
        <p className="text-ink-light mt-1 text-xs leading-relaxed">
          お店にどなたかいらっしゃる曜日と時間を教えてください。サンプルとご注文を、その時間にお届けします。
        </p>
      </div>

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
                className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-sm font-bold transition-all disabled:cursor-not-allowed disabled:opacity-50 ${
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
                className={`min-h-[42px] cursor-pointer rounded-xl px-3.5 py-2 text-xs font-bold transition-all disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm ${
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
          placeholder="例：搬入口は裏手です／15時以降は不在"
          className="text-ink focus:border-brand focus:ring-brand mt-1.5 w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 font-sans text-sm transition-shadow placeholder:text-gray-300 focus:ring-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    </div>
  );
}
