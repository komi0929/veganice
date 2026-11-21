import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

export interface WholesaleMidCtaProps {
  lead: string;
}

export default function WholesaleMidCta({ lead }: WholesaleMidCtaProps) {
  return (
    <div className="mt-10 rounded-3xl border border-stone-200/80 bg-white px-5 py-6 text-center shadow-2xs sm:px-8 sm:py-7">
      <p className="text-ink font-sans text-sm leading-relaxed font-bold sm:text-base">{lead}</p>
      <div className="mt-4 flex flex-col items-center">
        <a
          href="#contact-form"
          className="bg-cta hover:bg-cta-hover inline-flex w-full items-center justify-center gap-1.5 rounded-full px-5 py-3.5 font-sans text-sm font-bold whitespace-nowrap text-white shadow-[0_6px_20px_rgba(212,112,143,0.3)] transition-colors sm:w-auto sm:gap-2 sm:px-10 sm:py-4 sm:text-base"
        >
          {WHOLESALE_FACTS.ctaLabel}
          <span aria-hidden="true">→</span>
        </a>
        <p className="text-ink-muted mt-2 font-sans text-xs">
          {WHOLESALE_FACTS.ctaCaption}（お申し込み後の電話営業なし）
        </p>
      </div>
    </div>
  );
}
