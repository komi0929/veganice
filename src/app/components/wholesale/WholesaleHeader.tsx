import Image from "next/image";
import Link from "next/link";

export interface WholesaleNavItem {
  label: string;
  href: string;
}

export interface WholesaleHeaderProps {
  pageHref: string;
  navItems: WholesaleNavItem[];
  ctaLabel?: string;
}

export default function WholesaleHeader({
  pageHref,
  navItems,
  ctaLabel = "無料サンプル申込",
}: WholesaleHeaderProps) {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-xs">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:h-14 sm:px-6">
        <Link href={pageHref} className="relative flex items-center">
          <Image
            src="/images/logo_horizontal.png"
            alt="SoyStories — plant base sweets"
            width={160}
            height={32}
            priority
            className="h-6 w-auto sm:h-7"
          />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <nav
            className="flex items-center gap-5 text-sm text-gray-600"
            aria-label="ページ内メニュー"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-brand font-sans whitespace-nowrap transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact-form"
            className="bg-cta hover:bg-cta-hover rounded-full px-5 py-2 font-sans text-sm font-bold whitespace-nowrap text-white shadow-2xs transition-colors"
          >
            無料で試食サンプルを取り寄せる
          </a>
        </div>

        <a
          href="#contact-form"
          className="bg-cta hover:bg-cta-hover rounded-full px-3.5 py-1.5 font-sans text-xs font-bold whitespace-nowrap text-white shadow-2xs transition-colors md:hidden"
        >
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}
