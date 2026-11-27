"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface OemHeaderProps {
  isPlanPage?: boolean;
  isGuidePage?: boolean;
}

function OemHeaderContent({ isPlanPage: propIsPlanPage, isGuidePage = false }: OemHeaderProps) {
  const pathname = usePathname() ?? "/oem";
  const searchParams = useSearchParams();
  const isPlanPage = propIsPlanPage ?? pathname.startsWith("/oem/plan");

  const qs = searchParams.toString();
  const querySuffix = qs ? `?${qs}` : "";
  const logoHref = `${isPlanPage ? "/oem/plan" : "/oem"}${querySuffix}`;

  return (
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
      <Link href={logoHref} className="relative flex h-8 items-center">
        <Image
          src="/images/logo_horizontal.png"
          alt="SoyStories — plant base sweets"
          width={168}
          height={34}
          className="h-7 w-auto sm:h-8"
          priority
        />
      </Link>

      <div className="hidden items-center gap-6 md:flex">
        <nav className="flex items-center gap-5 text-sm text-gray-600" aria-label="OEMページ内ナビ">
          {!isPlanPage && (
            <a
              href={isGuidePage ? "/oem#premise" : "#premise"}
              className="hover:text-brand transition-colors"
            >
              アイスの特徴
            </a>
          )}
          <a
            href={isGuidePage ? "/oem#courses" : "#courses"}
            className="hover:text-brand transition-colors"
          >
            2つのプラン・料金
          </a>
          <a
            href={isGuidePage ? "/oem#simulator" : "#simulator"}
            className="hover:text-brand transition-colors"
          >
            利益試算
          </a>
          <a
            href={isGuidePage ? "/oem#timeline" : "#timeline"}
            className="hover:text-brand transition-colors"
          >
            お届けの流れ
          </a>
          <a href="#faq" className="hover:text-brand transition-colors">
            よくある質問
          </a>
        </nav>
        <a
          href={isGuidePage ? "/oem#contact-form" : "#contact-form"}
          className="bg-cta hover:bg-cta-hover rounded-full px-5 py-2 text-sm font-bold text-white shadow-2xs transition-colors"
        >
          無料で相談する
        </a>
      </div>

      <a
        href={isGuidePage ? "/oem#contact-form" : "#contact-form"}
        className="bg-cta hover:bg-cta-hover rounded-full px-4 py-2 text-xs font-bold text-white md:hidden"
      >
        無料相談する
      </a>
    </div>
  );
}

function OemHeaderFallback({ isPlanPage = false, isGuidePage = false }: OemHeaderProps) {
  return (
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
      <Link href={isPlanPage ? "/oem/plan" : "/oem"} className="relative flex h-8 items-center">
        <Image
          src="/images/logo_horizontal.png"
          alt="SoyStories — plant base sweets"
          width={168}
          height={34}
          className="h-7 w-auto sm:h-8"
          priority
        />
      </Link>

      <div className="hidden items-center gap-6 md:flex">
        <nav className="flex items-center gap-5 text-sm text-gray-600" aria-label="OEMページ内ナビ">
          {!isPlanPage && (
            <a
              href={isGuidePage ? "/oem#premise" : "#premise"}
              className="hover:text-brand transition-colors"
            >
              アイスの特徴
            </a>
          )}
          <a
            href={isGuidePage ? "/oem#courses" : "#courses"}
            className="hover:text-brand transition-colors"
          >
            2つのプラン・料金
          </a>
          <a
            href={isGuidePage ? "/oem#simulator" : "#simulator"}
            className="hover:text-brand transition-colors"
          >
            利益試算
          </a>
          <a
            href={isGuidePage ? "/oem#timeline" : "#timeline"}
            className="hover:text-brand transition-colors"
          >
            お届けの流れ
          </a>
          <a href="#faq" className="hover:text-brand transition-colors">
            よくある質問
          </a>
        </nav>
        <a
          href={isGuidePage ? "/oem#contact-form" : "#contact-form"}
          className="bg-cta hover:bg-cta-hover rounded-full px-5 py-2 text-sm font-bold text-white shadow-2xs transition-colors"
        >
          無料で相談する
        </a>
      </div>

      <a
        href={isGuidePage ? "/oem#contact-form" : "#contact-form"}
        className="bg-cta hover:bg-cta-hover rounded-full px-4 py-2 text-xs font-bold text-white md:hidden"
      >
        無料相談する
      </a>
    </div>
  );
}

/**
 * OEM LP（/oem・/oem/plan）専用のヘッダー
 * クエリパラメータ（c, store 等）を保持し、/oem と /oem/plan で一貫したナビを表示する
 */
export default function OemHeader({ isPlanPage = false, isGuidePage = false }: OemHeaderProps) {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white py-3.5 shadow-xs">
      <Suspense fallback={<OemHeaderFallback isPlanPage={isPlanPage} isGuidePage={isGuidePage} />}>
        <OemHeaderContent isPlanPage={isPlanPage} isGuidePage={isGuidePage} />
      </Suspense>
    </header>
  );
}
