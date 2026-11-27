import Image from "next/image";
import Link from "next/link";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";
import type { WholesaleNavItem } from "./WholesaleHeader";

export interface WholesaleFooterProps {
  taglineLines: string[];
  navItems: WholesaleNavItem[];
  oemSrc?: string;
}

export default function WholesaleFooter({
  taglineLines,
  navItems,
  oemSrc = "wholesale_footer",
}: WholesaleFooterProps) {
  const { store, lineUrl } = WHOLESALE_FACTS;

  return (
    <footer className="bg-ink border-t border-white/10 px-5 pt-14 pb-24 text-white md:px-8 md:pb-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col items-start">
            <Image
              src="/images/logo_square_white.png"
              alt="SoyStories — plant base sweets"
              width={80}
              height={80}
              className="mb-4 h-16 w-auto sm:h-20"
            />
            <p className="font-sans text-sm leading-relaxed text-white/80 sm:text-base">
              {taglineLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>

          <div className="flex flex-col items-start md:items-center">
            <div className="flex flex-col gap-3.5">
              <h2 className="mb-1 font-sans text-xs font-bold tracking-wider text-white/50">
                ページ内メニュー
              </h2>
              {navItems
                .filter((item) => item.href !== "#contact-form")
                .map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="hover:text-cta font-sans text-sm text-white transition-colors sm:text-base"
                  >
                    {item.label}
                  </a>
                ))}
              <a
                href="#contact-form"
                className="hover:text-cta font-sans text-sm text-white transition-colors sm:text-base"
              >
                無料試食サンプル・お問い合わせ
              </a>
              <Link
                href={`/oem?src=${oemSrc}`}
                className="hover:text-cta font-sans text-sm text-white transition-colors sm:text-base"
              >
                OEM・オリジナル製造
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end md:text-right">
            <h2 className="mb-3 font-sans text-xs font-bold tracking-wider text-white/50">
              製造・販売元
            </h2>
            <p className="font-sans text-sm font-bold text-white">{store.name}</p>
            <p className="mt-1 font-sans text-xs leading-relaxed text-white/80 sm:text-sm">
              {store.postalCode} {store.address}
            </p>
            <p className="mt-1 font-sans text-xs text-white/80 sm:text-sm">
              TEL:{" "}
              <a href={store.phoneHref} className="underline-offset-4 hover:underline">
                {store.phone}
              </a>
            </p>
            <a
              href={store.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cta mt-1 font-sans text-xs text-white/80 underline underline-offset-4 transition-colors sm:text-sm"
            >
              店舗サイト：{store.url}
            </a>

            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href="https://instagram.com/soystories_yakuin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cta inline-flex items-center gap-1.5 font-sans text-sm text-white transition-colors"
              >
                @soystories_yakuin
              </a>
              <a
                href={lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cta inline-flex items-center gap-1.5 font-sans text-sm text-white transition-colors"
              >
                LINE公式アカウント
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="font-sans text-xs text-white/40">
            &copy; {new Date().getFullYear()} SoyStories / 株式会社ヒトコト. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 font-sans text-xs text-white/40">
            <a
              href="https://www.soystories.jp/b2b.html"
              className="hover:text-cta transition-colors"
            >
              法人・業務用総合案内（soystories.jp）
            </a>
            <Link href="/company" className="hover:text-cta transition-colors">
              運営会社・特定商取引法に基づく表記
            </Link>
            <Link href="/privacy" className="hover:text-cta transition-colors">
              プライバシーポリシー
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
