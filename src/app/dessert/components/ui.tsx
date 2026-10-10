import type { ReactNode } from "react";

/**
 * 食後デザートLP 共通パーツ
 * - 見出しは「1行＝1フレーズ」の配列で受け取り、スマホで意図しない位置で改行されないようにする
 * - 本文も1文ずつ受け取り、短い文を積み重ねるリズムで読ませる
 */

interface SectionHeaderProps {
  eyebrow: string;
  /** 見出しの各行（スマホ幅で1行に収まる 12 文字前後を目安に分割） */
  lines: string[];
  /** リード文（1要素＝1文） */
  lead?: string[];
  align?: "left" | "center";
  tone?: "dark" | "light";
}

export function SectionHeader({
  eyebrow,
  lines,
  lead,
  align = "left",
  tone = "dark",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const titleColor = tone === "dark" ? "text-ink" : "text-white";
  const leadColor = tone === "dark" ? "text-ink-light" : "text-white/85";
  const eyebrowColor = tone === "dark" ? "text-brand" : "text-[#a7d7b5]";
  const eyebrowBar = tone === "dark" ? "bg-brand" : "bg-[#a7d7b5]";

  return (
    <div className={`flex flex-col ${alignClass}`}>
      <p
        className={`${eyebrowColor} mb-3 inline-flex items-center gap-2 text-[13px] font-bold tracking-wide`}
      >
        <span className={`${eyebrowBar} inline-block h-px w-5`} aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        className={`${titleColor} text-[23px] leading-[1.4] font-bold tracking-tight sm:text-3xl sm:leading-[1.4] md:text-4xl`}
      >
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>
      {lead && lead.length > 0 && (
        <div className={`${leadColor} mt-5 space-y-1 text-[15px] leading-[1.85] sm:text-base`}>
          {lead.map((sentence) => (
            <p key={sentence}>{sentence}</p>
          ))}
        </div>
      )}
    </div>
  );
}

interface CtaButtonProps {
  label?: string;
  caption?: string;
  href?: string;
  fullWidthOnMobile?: boolean;
}

/** サンプル申込への主CTA。ボタン内の文言は短く、補足は下のキャプションへ逃がす */
export function CtaButton({
  label = "無料でサンプルを試す",
  caption = "6種類のおためしセット・商品代0円（送料のみ着払い）",
  href = "#contact-form",
  fullWidthOnMobile = true,
}: CtaButtonProps) {
  return (
    <div className={`flex flex-col items-center ${fullWidthOnMobile ? "w-full sm:w-auto" : ""}`}>
      <a
        href={href}
        className={`bg-cta hover:bg-cta-hover inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white shadow-[0_6px_20px_rgba(212,112,143,0.35)] transition-colors ${
          fullWidthOnMobile ? "w-full sm:w-auto sm:px-12" : ""
        }`}
      >
        {label}
        <span aria-hidden="true">→</span>
      </a>
      {caption && <p className="text-ink-muted mt-2.5 text-center text-xs">{caption}</p>}
    </div>
  );
}

interface MidCtaProps {
  message: string;
}

/** セクション間に置く小さなCTA帯 */
export function MidCta({ message }: MidCtaProps) {
  return (
    <div className="mx-auto mt-12 flex max-w-md flex-col items-center gap-4 text-center">
      <p className="text-ink text-[15px] font-bold">{message}</p>
      <CtaButton />
    </div>
  );
}

interface CheckItemProps {
  children: ReactNode;
}

export function CheckItem({ children }: CheckItemProps) {
  return (
    <li className="flex items-start gap-2.5">
      <span
        className="bg-brand mt-[3px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
        aria-hidden="true"
      >
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}
