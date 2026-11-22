import PhotoSlot from "@/app/components/wholesale/PhotoSlot";
import WholesaleFlavorGrid, {
  type WholesaleFlavorGroup,
} from "@/app/components/wholesale/WholesaleFlavorGrid";
import WholesaleMidCta from "@/app/components/wholesale/WholesaleMidCta";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

/** 新規写真を撮影後、パスを設定すると該当カード上部に写真が表示される（未設定時は枠を出さない） */
const SMALL_BOWL_PHOTO_SRC: string | null = null;
const MIZUGASHI_FRUIT_PHOTO_SRC: string | null = null;

const hotelFlavorGroups: WholesaleFlavorGroup[] = [
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
    subtitle: "ホテルやオーベルジュのコースドルチェ、ケーキ・果物への添え盛り、朝食ビュッフェに",
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

export default function HotelFlavorsSection() {
  return (
    <section id="flavors" className="bg-bg-white scroll-mt-14 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-brand mb-3 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          会席・コースに合う味（全11種）
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl md:text-4xl">
          和の献立にも、洋のコースにも合う全11種。
        </h2>
        <p className="text-ink-light mt-4 max-w-3xl font-sans text-[15px] leading-[1.85] sm:text-base">
          全11種すべて同じ価格で、{WHOLESALE_FACTS.minLot}
          （1L×4個・2L×2個など）。各カードの「原材料・栄養を見る」を押すと、アレルギー確認・献立作成にそのまま使える全原材料名をご確認いただけます。
        </p>

        <div className="mt-8">
          <WholesaleFlavorGrid groups={hotelFlavorGroups} />
        </div>

        {/* 季節の果物・水菓子・ドルチェでの盛り付け方 */}
        <div className="mt-12 rounded-3xl border border-stone-200/80 bg-[#f7f3ec] p-6 sm:p-8">
          <h3 className="text-ink font-serif text-xl font-bold sm:text-2xl">
            単体の一皿にも、ケーキや季節の果物への添えにも
          </h3>
          <p className="text-ink-light mt-2 font-sans text-sm leading-relaxed">
            そのまま器に盛るだけでなく、コースのデザート皿の添えや水菓子としても幅広くお使いいただけます。
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex flex-col rounded-2xl bg-white p-5 shadow-2xs">
              <PhotoSlot
                src={SMALL_BOWL_PHOTO_SRC}
                alt="会席の小鉢に抹茶アイスを盛り付けた例"
                aspectClassName="aspect-[4/3]"
                wrapperClassName="mb-3.5"
              />
              <span className="bg-brand/10 text-brand inline-block self-start rounded-full px-3 py-1 font-sans text-xs font-bold">
                会席・和食に
              </span>
              <h4 className="text-ink mt-3 font-serif text-base font-bold">
                会席の最後の甘味として
              </h4>
              <p className="text-ink-light mt-2 font-sans text-xs leading-[1.8] sm:text-[13px]">
                和の小鉢や豆皿に50mlほど盛り付け、黒豆やきな粉、ミントを少し添えるだけで落ち着いた締めくくりの一皿になります。
              </p>
            </div>

            <div className="flex flex-col rounded-2xl bg-white p-5 shadow-2xs">
              <PhotoSlot
                src={MIZUGASHI_FRUIT_PHOTO_SRC}
                alt="季節の果物・水菓子にりんごやもものアイスを添えた例"
                aspectClassName="aspect-[4/3]"
                wrapperClassName="mb-3.5"
              />
              <span className="bg-brand/10 text-brand inline-block self-start rounded-full px-3 py-1 font-sans text-xs font-bold">
                水菓子・ドルチェ添えに
              </span>
              <h4 className="text-ink mt-3 font-serif text-base font-bold">
                季節の果物やケーキに添えて
              </h4>
              <p className="text-ink-light mt-2 font-sans text-xs leading-[1.8] sm:text-[13px]">
                旬の果物・コンポートの横にりんごやももを添える水菓子や、ホテルのガトー・タルトにバニラやアールグレイを添えるアシェットデセールに。
              </p>
            </div>

            <div className="flex flex-col rounded-2xl bg-white p-5 shadow-2xs">
              <span className="bg-brand/10 text-brand inline-block self-start rounded-full px-3 py-1 font-sans text-xs font-bold">
                和甘味・洋コースに
              </span>
              <h4 className="text-ink mt-3 font-serif text-base font-bold">
                最中・求肥やジュレと合わせて
              </h4>
              <p className="text-ink-light mt-2 font-sans text-xs leading-[1.8] sm:text-[13px]">
                最中皮・求肥と合わせた和甘味や、ガラス器で珈琲ゼリー・ジュレに重ねるコースの締めくくりにもそのまま馴染みます。
              </p>
            </div>
          </div>
        </div>

        <WholesaleMidCta lead="献立に合う味と滑らかな口どけを、まずは6個の無料試食サンプルで厨房にてお確かめください。" />
      </div>
    </section>
  );
}
