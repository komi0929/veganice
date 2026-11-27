"use client";

import { useState } from "react";

interface HotelMenuCardCopyButtonProps {
  copyText: string;
}

export default function HotelMenuCardCopyButton({ copyText }: HotelMenuCardCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="text-brand border-brand/30 hover:bg-brand inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border bg-white px-4 py-2 font-sans text-xs font-bold transition-colors hover:text-white"
    >
      {copied ? "表記をコピーしました ✓" : "日英表記をコピーする"}
    </button>
  );
}
