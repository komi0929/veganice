import Link from "next/link";

const links = [
  ["/oem/allergen-free", "乳・卵・小麦不使用のアイスOEM"],
  ["/oem/regional", "ご当地食材・農産物のアイスOEM"],
  ["/oem/cost", "アイスOEMの費用と最小ロット"],
];

export default function OemDetailLinks() {
  return (
    <nav
      aria-label="OEM詳細ガイド"
      className="flex flex-wrap items-baseline gap-x-5 gap-y-2 rounded-3xl bg-white px-5 py-4 text-sm shadow-2xs sm:px-8"
    >
      <p className="text-ink font-bold">OEM詳細ガイド</p>
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {links.map(([href, label]) => (
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
