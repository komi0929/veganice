import Image from "next/image";
import DessertContactForm from "./DessertContactForm";

const badges = [
  "全11種から6個無料（クール便送料のみ着払い）",
  "通常2営業日以内に専用工房から発送",
  "契約義務・お申し込み後の電話営業なし",
] as const;

export default function DessertSampleSection() {
  return (
    <section id="contact-form" className="bg-bg-white scroll-mt-16 py-12 sm:py-18">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-brand mb-1.5 inline-flex items-center gap-2 text-xs font-bold tracking-wide">
              <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
              無料試食サンプル（6個）
            </p>
            <h2 className="text-ink text-2xl leading-snug font-bold tracking-tight sm:text-3xl">
              まずは6個、お料理やお菓子と合わせてお試しください。
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {badges.map((b) => (
                <li
                  key={b}
                  className="text-ink inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-[#fafaf8] px-3 py-1 text-xs font-bold"
                >
                  <span className="text-brand" aria-hidden="true">
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative hidden h-24 w-36 shrink-0 overflow-hidden rounded-2xl border border-gray-200 bg-[#f7f3ec] md:block">
            <Image
              src="/images/gelato_cup_tower.jpg"
              alt="無料試食サンプル6個イメージ"
              fill
              className="object-cover"
              sizes="144px"
            />
          </div>
        </div>

        <DessertContactForm />
      </div>
    </section>
  );
}
