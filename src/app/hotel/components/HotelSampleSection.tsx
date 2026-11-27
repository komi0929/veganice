import Image from "next/image";
import WholesaleContactCard from "@/app/components/wholesale/WholesaleContactCard";
import type { SampleFlavorName } from "@/app/components/SampleFlavorPicker";

const HOTEL_PRESET_FLAVORS: readonly SampleFlavorName[] = [
  "UMAMIバニラ",
  "抹茶",
  "ほうじ茶",
  "バニラココナッツ",
  "りんご",
  "もも",
];

const badges = [
  "全11種から6個無料（クール便送料のみ着払い）",
  "原則お申し込みの翌日に専用工房から発送",
  "定期発注なし・初期登録費0円",
] as const;

export default function HotelSampleSection() {
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
              まずは6個、厨房で器に盛って味をお確かめください。
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
              src="/images/cup_seal_choco_real.jpg"
              alt="無料試食サンプル100mlカップ"
              fill
              sizes="144px"
              className="object-cover"
            />
          </div>
        </div>

        <WholesaleContactCard
          source="hotel"
          companyLabel="施設・店の名前"
          contactNameLabel="お名前"
          companyPlaceholder="例：ホテル〇〇 ／ 〇〇温泉 旅館〇〇 ／ レストラン〇〇"
          emailPlaceholder="example@hotel.jp"
          addressPlaceholder="都道府県・市区町村・番地"
          deliveryDescription="フロントか厨房で受け取れる曜日と時間"
          deliveryNotePlaceholder="例：厨房勝手口へ納品希望／11〜14時は仕込み中など"
          notesLabel="ご施設・お店の業態・試したい場面・確認したい点"
          notesPlaceholder="例：海外宿泊客のヴィーガン・グルテンフリー対応／会席やコースの食後デザートとして試したいです。"
          inquiryPlaceholder="お取引条件や納期、売店用100mlカップ・屋号ロゴOEMなどお気軽にご記入ください。"
          presetTitle="おすすめ6種"
          presetDescription="海外ゲストにも人気の和素材と定番6種（UMAMIバニラ・抹茶・ほうじ茶・バニラココナッツ・りんご・もも）"
          presetFlavors={HOTEL_PRESET_FLAVORS}
        />
      </div>
    </section>
  );
}
