import Link from "next/link";

const links = [
  ["/oem/allergen-free", "乳・卵・小麦不使用のアイスOEM"],
  ["/oem/regional", "ご当地食材・農産物のアイスOEM"],
  ["/oem/cost", "アイスOEMの費用と最小ロット"],
  ["/oem/hotel-ryokan", "ホテル・旅館向けヴィーガンアイスOEM"],
  ["/oem/cafe-bakery", "カフェ・焼き菓子店向け植物性アイスOEM"],
  ["/oem/gift-ec", "EC・ギフト・ウェディング向け植物性アイスOEM"],
  ["/oem/quality", "アイスOEMの品質管理・食品表示・冷凍配送"],
  ["/oem/compare", "植物性アイスと乳製品アイスの違い・業務用選定"],
];

export default function OemDetailLinks({ currentPath }: { currentPath?: string }) {
  return (
    <nav
      aria-label="OEM詳細ガイド"
      className="flex flex-wrap items-baseline gap-x-5 gap-y-2 rounded-3xl bg-white px-5 py-4 text-sm shadow-2xs sm:px-8"
    >
      <p className="text-ink font-bold">OEM詳細ガイド</p>
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {links
          .filter(([href]) => href !== currentPath)
          .map(([href, label]) => (
            <li key={href}>
              <Link href={href} className="text-brand font-bold underline underline-offset-4">
                {label}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
