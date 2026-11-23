import Image from "next/image";
import WholesaleContactCard from "@/app/components/wholesale/WholesaleContactCard";
import type { SampleFlavorName } from "@/app/components/SampleFlavorPicker";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

const CAFE_PRESET_FLAVORS: readonly SampleFlavorName[] = [
  "バニラココナッツ",
  "UMAMIバニラ",
  "アールグレイ",
  "抹茶",
  "マンゴー",
  "ミックスベリー",
];

const steps = [
  { title: "フォームまたはLINEから申し込む", note: "約1分で入力完了（おすすめ6種は選択済み）" },
  {
    title: "お店のケーキやドリンクと合わせてご試食",
    note: "焼き菓子・ワッフルへの添え盛りや、フロート・アフォガートの相性を確認",
  },
  {
    title: "ご納得後に少量4Lからご注文",
    note: `${WHOLESALE_FACTS.minLot}・通常5営業日前後でお届け`,
  },
] as const;

export default function CafeSampleSection() {
  return (
    <section id="contact-form" className="bg-bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:gap-12">
        <div>
          <p className="text-brand mb-3 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
            <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
            無料試食サンプル
          </p>
          <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
            まずは、味を確かめてみてください。
          </h2>
          <p className="text-ink-light mt-3 font-sans text-sm leading-[1.85] sm:text-[15px]">
            焼きたての温かいタルトやドーナツにとろりと絡む口どけや、深煎り珈琲・自家製ソーダと合わせたときの香りの広がりを、ぜひお店でお確かめください。
          </p>

          <div className="mt-7 overflow-hidden rounded-3xl border border-stone-200/80 bg-[#f7f3ec]">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/images/gelato_cup_tower.jpg"
                alt="無料試食サンプルのクラフトアイス6個イメージ"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <p className="text-brand font-sans text-xs font-bold">サンプルの条件</p>
              <p className="text-ink mt-1.5 font-sans text-sm leading-relaxed font-bold">
                {WHOLESALE_FACTS.sampleTerms}
              </p>
              <p className="text-ink-muted mt-2 font-sans text-xs leading-relaxed">
                ※事前の購入義務やお申し込み後の電話営業は一切ございません。
              </p>
            </div>
          </div>

          <ol className="mt-7 space-y-3.5">
            {steps.map((step, index) => (
              <li key={step.title} className="flex items-center gap-3.5">
                <span className="bg-brand flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-sans text-xs font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <p className="text-ink font-sans text-sm font-bold">{step.title}</p>
                  <p className="text-ink-muted font-sans text-xs">{step.note}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="mt-7 flex items-center gap-4 rounded-2xl border border-stone-200/80 bg-[#f7f3ec] p-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
              <Image
                src="/images/owner_story.jpg"
                alt="SoyStories 代表 小南優作"
                fill
                sizes="56px"
                className="object-cover object-[center_15%]"
              />
            </div>
            <div>
              <blockquote className="text-ink font-sans text-xs leading-relaxed font-bold sm:text-[13px]">
                「手づくりの焼き菓子やドリンクを大切にされているお店の隣に、安心して添えられる一皿をお届けします。」
              </blockquote>
              <figcaption className="text-ink-muted mt-1 font-sans text-xs">
                SoyStories（株式会社ヒトコト）代表　小南 優作
              </figcaption>
            </div>
          </figure>
        </div>

        <div className="md:pt-2">
          <WholesaleContactCard
            source="cafe"
            companyLabel="店舗名"
            contactNameLabel="ご担当者名"
            companyPlaceholder="例：カフェ〇〇 ／ 米粉ドーナツ〇〇 ／ 焼菓子店〇〇"
            emailPlaceholder="example@cafe.jp"
            addressPlaceholder="福岡市中央区薬院2-2-24 〇〇ビル1F"
            deliveryDescription="お店にどなたかいらっしゃる曜日と時間を教えてください。サンプルとご注文を、その時間にお届けします。"
            deliveryNotePlaceholder="例：搬入口は裏手です／火曜定休・15時以降は不在など"
            notesLabel="お店の業態・試したい使い方・確認したい点"
            notesPlaceholder="例：焼きドーナツや米粉ケーキの添えアイス、100mlカップ販売を検討しています。"
            inquiryPlaceholder="お取引条件やロット、100mlカップ物販・ロゴシールOEM、メニューへの添え方のご相談などお気軽にご記入ください。"
            presetTitle="おすすめ6種"
            presetDescription="焼き菓子への添え盛りとフロートで人気の定番6種をお届けします（バニラココナッツ・UMAMIバニラ・アールグレイ・抹茶・マンゴー・ミックスベリー 各1個）"
            presetFlavors={CAFE_PRESET_FLAVORS}
          />
        </div>
      </div>
    </section>
  );
}
