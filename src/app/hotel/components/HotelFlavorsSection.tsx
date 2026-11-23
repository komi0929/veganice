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
    title: "和の献立・水菓子に（5種）",
    subtitle:
      "会席・懐石・精進料理の締めくくりに、品数のあとでも重たくならず深い余韻を残す和素材・国産果実の5種",
    items: [
      {
        displayName: "抹茶",
        image: "/images/flavors/matcha.png",
        note: "低温殺菌で守った鮮やかな抹茶のほろ苦さを、濃縮甘酒と白みその旨みが支えるお濃茶仕立て",
      },
      {
        displayName: "ほうじ茶",
        image: "/images/flavors/houjicha.png",
        note: "香ばしく焙煎した茶葉の立ち上る薫香に、濃縮甘酒のまろやかな甘みを重ねた芳醇な一玉",
      },
      {
        displayName: "UMAMIバニラ（白味噌）",
        specKey: "UMAMIバニラ",
        image: "/images/flavors/umami_vanilla.png",
        note: "玄米粉と甘酒・白みそ・りんごの旨みにバニラビーンズが香る、和の献立にも馴染む奥深いバニラ",
      },
      {
        displayName: "りんご",
        image: "/images/flavors/apple.png",
        note: "国産りんごストレート果汁の蜜のような甘みとキュッと締まった酸味で、お口直しにも最適な味わい",
      },
      {
        displayName: "もも",
        image: "/images/flavors/peach.png",
        note: "国産ももストレート果汁をベースに、白桃のみずみずしい香りととろける甘みを閉じ込めた上品な一玉",
      },
    ],
  },
  {
    title: "洋のコース・朝食ビュッフェに（6種）",
    subtitle: "オーベルジュやホテルのアシェットデセール、ガトー添え、インバウンド朝食に華やぐ6種",
    items: [
      {
        displayName: "バニラココナッツ",
        image: "/images/flavors/vanilla_coconut.png",
        note: "国産豆乳にココナッツミルクの甘いコクとほんのり白みそを重ねた、ケーキや果物に寄り添う定番",
      },
      {
        displayName: "アールグレイ",
        image: "/images/flavors/earl_gray.png",
        note: "ベルガモットと紅茶葉の気品ある香りが華やかに立ち上る、洋コースのドルチェに好相性な味わい",
      },
      {
        displayName: "ショコラ",
        image: "/images/flavors/chocolate.png",
        note: "クーベルチュールチョコと純ココアを贅沢に溶かし込んだ、冷たいガナッシュのように濃密な一玉",
      },
      {
        displayName: "ミックスベリー",
        image: "/images/flavors/berry_mix.png",
        note: "甘酸っぱい苺と木苺ピューレにココナッツクリームを重ねた、鮮やかな酸味と果実味",
      },
      {
        displayName: "マンゴー",
        image: "/images/flavors/mango.png",
        note: "完熟アップルマンゴーピューレを贅沢に使い、熟れた果肉を裏ごししたようなとろりと濃厚な甘み",
      },
      {
        displayName: "ドラゴンフルーツ",
        image: "/images/flavors/dragon_fruit.png",
        note: "鮮やかなルビー色の果実にパインアップルとココナッツミルクを合わせた、器が華やぐ南国仕立て",
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
            単体の水菓子としてはもちろん、コースのデザート皿の添えとしても幅広くお使いいただけます。
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
                会席の締めくくりの甘味として
              </h4>
              <p className="text-ink-light mt-2 font-sans text-xs leading-[1.8] sm:text-[13px]">
                旬の会席のあとにもすっと軽やかに食べきれるお濃茶仕立ての抹茶やほうじ茶を和の小鉢に。黒豆やきな粉、ミントを添えて、海外やアレルギーのお客様にも同じ一皿でお出しいただけます。
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
                季節の果物や温かいガトーに添えて
              </h4>
              <p className="text-ink-light mt-2 font-sans text-xs leading-[1.8] sm:text-[13px]">
                旬の果物・コンポートに国産白桃やりんごの瑞々しい甘味を添える水菓子や、温かいガトー・タルトにとろりと絡む濃厚なバニラやショコラのアシェットデセールに。
              </p>
            </div>

            <div className="flex flex-col rounded-2xl bg-white p-5 shadow-2xs">
              <span className="bg-brand/10 text-brand inline-block self-start rounded-full px-3 py-1 font-sans text-xs font-bold">
                和甘味・洋コースに
              </span>
              <h4 className="text-ink mt-3 font-serif text-base font-bold">
                最中・求肥や珈琲ゼリーと重ねて
              </h4>
              <p className="text-ink-light mt-2 font-sans text-xs leading-[1.8] sm:text-[13px]">
                香ばしい最中皮や求肥と合わせる和甘味や、ガラス器でほろ苦い珈琲ゼリー・季節のジュレと溶け合うコースの締めくくりにも美しく馴染みます。
              </p>
            </div>
          </div>
        </div>

        <WholesaleMidCta lead="献立に合う味と滑らかな口どけを、まずは6個の無料試食サンプルで厨房にてお確かめください。" />
      </div>
    </section>
  );
}
