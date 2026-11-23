import Image from "next/image";
import WholesaleContactCard from "@/app/components/wholesale/WholesaleContactCard";
import type { SampleFlavorName } from "@/app/components/SampleFlavorPicker";

const CAFE_PRESET_FLAVORS: readonly SampleFlavorName[] = [
  "バニラココナッツ",
  "UMAMIバニラ",
  "アールグレイ",
  "抹茶",
  "マンゴー",
  "ミックスベリー",
];

const badges = [
  "全11種から6個無料（クール便送料のみ着払い）",
  "通常2営業日以内に専用工房から発送",
  "契約義務・お申し込み後の電話営業なし",
] as const;

export default function CafeSampleSection() {
  return (
    <section id="contact-form" className="scroll-mt-14 bg-[#f7f3ec] py-12 sm:py-18">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-brand mb-1.5 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
              <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
              無料試食サンプル（6個）
            </p>
            <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
              まずはお店のお菓子・ドリンクと合わせてご試食ください。
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {badges.map((b) => (
                <li
                  key={b}
                  className="text-ink inline-flex items-center gap-1.5 rounded-full border border-stone-200/80 bg-white px-3 py-1 font-sans text-xs font-bold"
                >
                  <span className="text-brand" aria-hidden="true">
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative hidden h-24 w-36 shrink-0 overflow-hidden rounded-2xl border border-stone-200/80 bg-white md:block">
            <Image
              src="/images/gelato_cup_tower.jpg"
              alt="無料試食サンプル6個イメージ"
              fill
              sizes="144px"
              className="object-cover"
            />
          </div>
        </div>

        <WholesaleContactCard
          source="cafe"
          companyLabel="店舗名"
          contactNameLabel="ご担当者名"
          companyPlaceholder="例：カフェ〇〇 ／ 米粉ドーナツ〇〇 ／ 焼菓子店〇〇"
          emailPlaceholder="example@cafe.jp"
          addressPlaceholder="福岡市中央区薬院2-2-24 〇〇ビル1F"
          deliveryDescription="お店にどなたかいらっしゃる曜日と時間を教えてください。"
          deliveryNotePlaceholder="例：火曜定休・15時以降は不在など"
          notesLabel="お店の業態・試したい使い方・確認したい点"
          notesPlaceholder="例：焼きドーナツや米粉ケーキの添えアイス、100mlカップ販売を検討しています。"
          inquiryPlaceholder="お取引条件やロット、100mlカップ物販・ロゴシールOEMなどお気軽にご記入ください。"
          presetTitle="おすすめ6種"
          presetDescription="焼き菓子添えとフロートで人気の6種（バニラココナッツ・UMAMIバニラ・アールグレイ・抹茶・マンゴー・ミックスベリー）"
          presetFlavors={CAFE_PRESET_FLAVORS}
        />
      </div>
    </section>
  );
}
