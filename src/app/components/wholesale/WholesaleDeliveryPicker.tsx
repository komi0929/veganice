"use client";

import { useState } from "react";
import { RECEIVE_DAYS, RECEIVE_SLOTS } from "@/app/components/DeliveryPreferencePicker";

export interface WholesaleDeliveryPickerProps {
  disabled?: boolean;
  label?: string;
  description: string;
  notePlaceholder?: string;
}

export default function WholesaleDeliveryPicker({
  disabled = false,
  label = "受け取りやすい曜日・時間帯",
  description,
  notePlaceholder = "例：勝手口・厨房口へ納品希望／15時以降は不在など",
}: WholesaleDeliveryPickerProps) {
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

  return (
    <div className="space-y-3 rounded-xl border border-gray-100 bg-[#fafaf8] p-3.5 sm:p-4">
      <input type="hidden" name="receiveDays" value={selectedDays.join(",")} />
      <input type="hidden" name="receiveSlots" value={selectedSlots.join(",")} />

      <div>
        <div className="flex items-center gap-2">
          <span className="text-ink font-sans text-sm font-bold">{label}</span>
          <span className="rounded border border-gray-200 bg-white px-1.5 py-0.5 font-sans text-[10px] text-gray-500">
            任意
          </span>
        </div>
        <p className="text-ink-light mt-0.5 font-sans text-xs leading-relaxed">{description}</p>
      </div>

      <div>
        <span className="text-ink-muted block font-sans text-[11px] font-medium">
          受け取りやすい曜日
        </span>
        <div className="mt-1.5 grid grid-cols-7 gap-1 sm:flex sm:flex-wrap sm:gap-2">
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
                className={`flex h-9 w-full cursor-pointer items-center justify-center rounded-full font-sans text-xs font-bold transition-all disabled:cursor-not-allowed disabled:opacity-50 sm:h-10 sm:w-10 sm:text-sm ${
                  isSelected
                    ? "bg-brand text-white shadow-2xs"
                    : "text-ink border border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <span className="text-ink-muted block font-sans text-[11px] font-medium">
          受け取りやすい時間帯
        </span>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {RECEIVE_SLOTS.map((slot) => {
            const isSelected = selectedSlots.includes(slot.value);
            return (
              <button
                key={slot.value}
                type="button"
                disabled={disabled}
                onClick={() => toggleSlot(slot.value)}
                aria-pressed={isSelected}
                className={`min-h-[38px] cursor-pointer rounded-xl px-3 py-1.5 font-sans text-xs font-bold transition-all disabled:cursor-not-allowed disabled:opacity-50 ${
                  isSelected
                    ? "bg-brand text-white shadow-2xs"
                    : "text-ink border border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {slot.label}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label
          htmlFor="receiveNote"
          className="text-ink-muted block font-sans text-[11px] font-medium"
        >
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
          placeholder={notePlaceholder}
          className="text-ink focus:border-brand focus:ring-brand mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 font-sans text-sm transition-shadow placeholder:text-gray-300 focus:ring-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    </div>
  );
}
