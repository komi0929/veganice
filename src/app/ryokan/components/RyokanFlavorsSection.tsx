import Image from "next/image";
import PhotoSlot from "@/app/components/wholesale/PhotoSlot";
import WholesaleFlavorGrid, {
  type WholesaleFlavorGroup,
} from "@/app/components/wholesale/WholesaleFlavorGrid";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

/** 撮影後に画像パスを入れると自動で写真表示に切り替わる */
const MIZUGASHI_FRUIT_PHOTO_SRC: string | null = null;
const SMALL_BOWL_PHOTO_SRC: string | null = null;

const ryokanFlavorGroups: WholesaleFlavorGroup[] = [
  {
    title: "和の献立に（5種）",
    subtitle:
      "会席・懐石・精進料理の締めくくりや、季節の果物・水菓子に添えやすい和素材・国産果実の味",
    items: [
      {
        displayName: "抹茶",
        image: "/images/flavors/matcha.png",
        note: "甘酒と白味噌がうまみを支える奥深い抹茶",
      },
      {
        displayName: "ほうじ茶",
        image: "/images/flavors/houjicha.png",
        note: "焙煎茶葉の香ばしい薫香とすっきりした余韻",
      },
      {
        displayName: "UMAMIバニラ（白味噌）",
        specKey: "UMAMIバニラ",
        image: "/images/flavors/umami_vanilla.png",
        note: "白味噌と甘酒が引き出す深いコクと香り",
      },
      {
        displayName: "りんご",
        image: "/images/flavors/apple.png",
        note: "国産りんごのやさしい甘みと爽やかな酸味",
      },
      {
        displayName: "もも",
        image: "/images/flavors/peach.png",
        note: "国産もものみずみずしい果汁感と上品な香り",
      },
    ],
  },
  {
    title: "洋のコース・朝食に（6種）",
    subtitle: "オーベルジュや洋食コースのドルチェ、ケーキ・果物への添え盛り、朝食ビュッフェに",
    items: [
      {
        displayName: "バニラ",
        image: "/images/flavors/vanilla_coconut.png",
        note: "果物やケーキに添えやすいまろやかな定番",
      },
      {
        displayName: "アールグレイ",
        image: "/images/flavors/earl_gray.png",
        note: "ベルガモット華やぐ上品な紅茶の余韻",
      },
      {
        displayName: "ショコラ",
        image: "/images/flavors/chocolate.png",
        note: "カカオの深みを白味噌が引き立てる濃厚仕立て",
      },
      {
        displayName: "ミックスベリー",
        image: "/images/flavors/berry_mix.png",
        note: "苺と木苺の重なる華やかな甘酸っぱさ",
      },
      {
        displayName: "マンゴー",
        image: "/images/flavors/mango.png",
        note: "濃厚なアップルマンゴーの果実味",
      },
      {
        displayName: "ドラゴンフルーツ",
        image: "/images/flavors/dragon_fruit.png",
        note: "器に鮮やかな彩りを添える爽やかな甘み",
      },
    ],
  },
];

export default function RyokanFlavorsSection() {
  return (
    <section id="flavors" className="bg-bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-brand mb-3 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          会席・コースに合う味
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl md:text-4xl">
          和の献立にも、洋のコースにも合う全11種。
        </h2>
        <p className="text-ink-light mt-4 max-w-3xl font-sans text-[15px] leading-[1.85] sm:text-base">
          {WHOLESALE_FACTS.price}。{WHOLESALE_FACTS.minLot}
          （1L×4個・2L×2個など）。各カードを押すと、献立表・アレルギー確認にそのまま使える原材料名と栄養成分をご確認いただけます。
        </p>

        <div className="mt-8">
          <WholesaleFlavorGrid groups={ryokanFlavorGroups} />
        </div>

        {/* 季節の果物・水菓子に添える使い方 */}
        <div className="mt-12 rounded-3xl border border-stone-200/80 bg-[#f7f3ec] p-6 sm:p-8">
          <h3 className="text-ink font-serif text-xl font-bold sm:text-2xl">
            単体の一皿にも、季節の果物・水菓子の添えにも
          </h3>
          <p className="text-ink-light mt-2 font-sans text-sm leading-relaxed">
            そのまま小鉢に盛るだけでなく、季節の果物や和甘味と合わせても献立になじみます。
          </p>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="flex flex-col rounded-2xl bg-white p-4 shadow-2xs">
              <PhotoSlot
                src={SMALL_BOWL_PHOTO_SRC}
                alt="会席の小鉢に抹茶アイスを盛り付けた例"
                placeholderLabel="和の小鉢・豆皿に一皿として"
                placeholderSub="抹茶・ほうじ茶・UMAMIバニラなど（実写撮影枠）"
                aspectClassName="aspect-[4/3]"
              />
              <h4 className="text-ink mt-3.5 font-serif text-base font-bold">会席の最後の甘味に</h4>
              <p className="text-ink-light mt-1.5 font-sans text-xs leading-relaxed">
                小鉢に50mlほど盛り付け、黒豆やきな粉、ミントを少し添えるだけで落ち着いた会席の甘味になります。
              </p>
            </div>

            <div className="flex flex-col rounded-2xl bg-white p-4 shadow-2xs">
              <PhotoSlot
                src={MIZUGASHI_FRUIT_PHOTO_SRC}
                alt="季節の果物・水菓子にりんごやもものアイスを添えた例"
                placeholderLabel="季節の果物・水菓子に添えて"
                placeholderSub="梨・柿・苺などと合わせた水菓子（実写撮影枠）"
                aspectClassName="aspect-[4/3]"
              />
              <h4 className="text-ink mt-3.5 font-serif text-base font-bold">
                季節の果物・水菓子に添えて
              </h4>
              <p className="text-ink-light mt-1.5 font-sans text-xs leading-relaxed">
                旬の果物やゼリー・コンポートの横に、りんご・もも・バニラを小さく添える水菓子仕立てにも合います。
              </p>
            </div>

            <div className="flex flex-col rounded-2xl bg-white p-4 shadow-2xs">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone-100">
                <Image
                  src="/images/serving/serving_monaka.jpg"
                  alt="抹茶とほうじ茶のアイスを最中皮と求肥で挟んだ薬院店の提供例"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-[center_70%]"
                />
              </div>
              <h4 className="text-ink mt-3.5 font-serif text-base font-bold">
                最中・求肥と合わせた和甘味に
              </h4>
              <p className="text-ink-light mt-1.5 font-sans text-xs leading-relaxed">
                最中皮や求肥（餅）と合わせた提供例（薬院店での実物写真）。お迎え菓子や特別なコースの一皿にも。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
