import Image from "next/image";
import Link from "next/link";

/**
 * 完全版OEM LP（/oem）専用のヘッダー
 * 既存のトップ・食後デザートLPの共通Headerには一切影響を与えず独立動作する
 */
export default function OemHeader() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white py-3.5 shadow-xs">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link href="/oem" className="relative flex h-8 items-center">
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
          <nav className="flex items-center gap-5 text-sm text-gray-600">
            <a href="#about-oem" className="hover:text-brand transition-colors">
              アイスの特徴
            </a>
            <a href="#courses" className="hover:text-brand transition-colors">
              2つのプラン・料金
            </a>
            <a href="#timeline" className="hover:text-brand transition-colors">
              お届けの流れ
            </a>
            <a href="#simulator" className="hover:text-brand transition-colors">
              利益試算
            </a>
            <a href="#faq" className="hover:text-brand transition-colors">
              よくある質問
            </a>
          </nav>
          <a
            href="#contact-form"
            className="bg-cta hover:bg-cta-hover rounded-full px-5 py-2 text-sm font-bold text-white shadow-2xs transition-colors"
          >
            無料で相談する
          </a>
        </div>

        <a
          href="#contact-form"
          className="bg-cta hover:bg-cta-hover rounded-full px-4 py-2 text-xs font-bold text-white md:hidden"
        >
          無料相談する
        </a>
      </div>
    </header>
  );
}
