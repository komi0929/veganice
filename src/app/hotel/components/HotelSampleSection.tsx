import Image from "next/image";
import WholesaleContactCard from "@/app/components/wholesale/WholesaleContactCard";
import type { SampleFlavorName } from "@/app/components/SampleFlavorPicker";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

const HOTEL_PRESET_FLAVORS: readonly SampleFlavorName[] = [
  "抹茶",
  "ほうじ茶",
  "UMAMIバニラ",
  "バニラ",
  "りんご",
  "もも",
];

const steps = [
  { title: "フォームまたはLINEから申し込む", note: "約1分で入力完了（おすすめ6種は選択済み）" },
  {
    title: "厨房で料理長・スタッフの皆様でご試食",
    note: "味・滑らかな舌触り・器に盛った見た目やコース・会席との相性を確認",
  },
  {
    title: "ご納得後に必要な分だけご注文",
    note: `${WHOLESALE_FACTS.minLot}・通常5営業日前後でお届け`,
  },
] as const;

export default function HotelSampleSection() {
  return (
    <section id="contact-form" className="bg-[#f7f3ec] py-16 sm:py-24">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:gap-12">
        <div>
          <p className="text-brand mb-3 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
            <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
            無料試食サンプル
          </p>
          <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
            まずは6個、厨房で味をお確かめください。
          </h2>
          <p className="text-ink-light mt-3 font-sans text-sm leading-[1.85] sm:text-[15px]">
            海外からのお客様にも一般のお客様にも同じ一皿として出せる味わいか、食後のすっきり感や滑らかな口どけを実際の器に盛ってお確かめいただけます。
          </p>

          <div className="mt-7 overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-2xs">
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
                ※継続のご契約義務やお申し込み後の電話営業は一切ございません。
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

          <figure className="mt-7 flex items-center gap-4 rounded-2xl border border-stone-200/80 bg-white p-4">
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
                「海外からのお客様も、食の制限がある方も、皆様が同じデザートで日本の食事を笑顔で締めくくれるよう、専用工房から丁寧にお届けします。」
              </blockquote>
              <figcaption className="text-ink-muted mt-1 font-sans text-xs">
                SoyStories（株式会社ヒトコト）代表　小南 優作
              </figcaption>
            </div>
          </figure>
        </div>

        <div className="md:pt-2">
          <p className="text-ink-light mb-3 text-center font-sans text-xs sm:text-sm">
            <a
              href="#flavors"
              className="text-brand font-medium underline underline-offset-4 hover:opacity-80"
            >
              各味の原材料・アレルゲンは、上の味のカードからご確認いただけます
            </a>
          </p>
          <WholesaleContactCard
            source="hotel"
            companyLabel="施設・店の名前"
            contactNameLabel="お名前"
            companyPlaceholder="例：ホテル〇〇 ／ 〇〇温泉 旅館〇〇 ／ レストラン〇〇"
            emailPlaceholder="example@hotel.jp"
            addressPlaceholder="福岡市中央区薬院2-2-24"
            deliveryDescription="フロントか厨房で受け取れる曜日と時間"
            deliveryNotePlaceholder="例：厨房勝手口・サービスヤードへ納品希望／11〜14時は仕込み中など"
            notesLabel="ご施設・お店の業態・試したい場面など"
            notesPlaceholder="例：海外宿泊客のヴィーガン・グルテンフリー対応／コースや会席の甘味として試したいです。"
            inquiryPlaceholder="お取引条件や納期、インバウンド対応・献立での使い方の相談など、お気軽にご記入ください。"
            presetTitle="おすすめ6種"
            presetDescription="海外ゲストにも人気の和素材と定番6種をお届けします（抹茶・ほうじ茶・UMAMIバニラ・バニラ・りんご・もも 各1個）"
            presetFlavors={HOTEL_PRESET_FLAVORS}
          />
        </div>
      </div>
    </section>
  );
}
