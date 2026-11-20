"use client";

import { useEffect, useState } from "react";

/**
 * スマホ閲覧時にいつでも1タップで「3コース図解」または「無料事前相談」へ移動できる下部バー
 */
export default function OemFloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 360);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200/90 bg-white/95 px-4 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] backdrop-blur-xs md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2.5">
        <a
          href="#simulator"
          className="text-brand border-brand/35 flex min-h-11 items-center justify-center rounded-full border bg-white text-xs font-bold"
        >
          料金・利益を試算
        </a>
        <a
          href="#contact-form"
          className="bg-cta flex min-h-11 items-center justify-center rounded-full text-xs font-bold text-white shadow-2xs"
        >
          無料で事前相談 →
        </a>
      </div>
    </div>
  );
}
