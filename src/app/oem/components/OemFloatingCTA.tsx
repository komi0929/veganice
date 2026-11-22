"use client";

import { useEffect, useState } from "react";

/**
 * スマホ閲覧時にいつでも1タップで「利益試算」または「無料相談（60秒）」へ移動できる下部バー
 * #contact-form または footer が画面内に入ったら自動でフェードアウト非表示にする
 */
export default function OemFloatingCTA() {
  const [pastHero, setPastHero] = useState(false);
  const [targetInView, setTargetInView] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setPastHero(window.scrollY > 360);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const intersectingMap = new Map<Element, boolean>();
    const observedElements = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          intersectingMap.set(entry.target, entry.isIntersecting);
        }
        const anyVisible = Array.from(intersectingMap.values()).some(Boolean);
        setTargetInView(anyVisible);
      },
      { threshold: 0.05 }
    );

    const attachTargets = () => {
      const contactEl = document.getElementById("contact-form");
      const footerEl = document.querySelector("footer");
      for (const el of [contactEl, footerEl]) {
        if (el && !observedElements.has(el)) {
          observedElements.add(el);
          observer.observe(el);
        }
      }
    };

    attachTargets();

    // Suspense 解決後に #contact-form がマウントされた場合にも自動検知する
    const mutationObserver = new MutationObserver(() => {
      attachTargets();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  const shouldShow = pastHero && !targetInView;

  return (
    <div
      aria-hidden={!shouldShow}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-gray-200/90 bg-white/95 px-4 pt-2 pb-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] backdrop-blur-xs transition-all duration-300 md:hidden ${
        shouldShow
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <p className="text-ink-muted mb-1.5 text-center text-[10.5px]">
        相談・3方向案のご提案 0円 ／ 営業電話なし
      </p>
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2.5">
        <a
          href="#simulator"
          tabIndex={shouldShow ? 0 : -1}
          className="text-brand border-brand/35 flex min-h-11 items-center justify-center rounded-full border bg-white text-xs font-bold"
        >
          料金・利益を試算
        </a>
        <a
          href="#contact-form"
          tabIndex={shouldShow ? 0 : -1}
          className="bg-cta flex min-h-11 items-center justify-center rounded-full text-xs font-bold text-white shadow-2xs"
        >
          無料相談・試食申込 →
        </a>
      </div>
    </div>
  );
}
