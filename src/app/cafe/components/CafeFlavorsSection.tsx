import WholesaleFlavorGrid, {
  type WholesaleFlavorGroup,
} from "@/app/components/wholesale/WholesaleFlavorGrid";
import WholesaleMidCta from "@/app/components/wholesale/WholesaleMidCta";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

const cafeFlavorGroups: WholesaleFlavorGroup[] = [
  {
    title: "濃厚ミルク・カカオ・茶葉系（6種）",
    subtitle: "温かいタルトやガトーショコラ、焼きドーナツの横でとろりと絡む、コクと余韻の深い6種",
    items: [
      {
        displayName: "バニラココナッツ",
        image: "/images/flavors/vanilla_coconut.png",
        note: "豆乳にココナッツミルクの甘いコクと隠し味の白みそを重ねた、ミルキーで王道のバニラ",
      },
      {
        displayName: "UMAMIバニラ",
        image: "/images/flavors/umami_vanilla.png",
        note: "玄米粉と甘酒・白みそ・りんごの旨みにバニラビーンズが香る、塩キャラメルのように奥深い一玉",
      },
      {
        displayName: "アールグレイ",
        image: "/images/flavors/earl_gray.png",
        note: "ベルガモットと紅茶葉の華やかな香りが口いっぱいに広がる、タルトやスコーンの相棒",
      },
      {
        displayName: "ショコラ",
        image: "/images/flavors/chocolate.png",
        note: "クーベルチュールチョコと純ココアを贅沢に溶かし込んだ、冷たい生チョコのような濃密さ",
      },
      {
        displayName: "抹茶",
        image: "/images/flavors/matcha.png",
        note: "低温殺菌で守った鮮やかな茶葉のほろ苦さを、たっぷりの濃縮甘酒と白みその旨みが支えるお濃茶仕立て",
      },
      {
        displayName: "ほうじ茶",
        image: "/images/flavors/houjicha.png",
        note: "焙煎茶葉の香ばしい薫香と濃縮甘酒のやさしい甘みが重なる、和洋どちらのお菓子にも合う芳醇な味",
      },
    ],
  },
  {
    title: "完熟ピューレ・国産ストレート果汁系（5種）",
    subtitle:
      "氷っぽいシャーベットではなく、ココナッツクリームや米粉で果肉そのもののようなとろみに仕立てた果実系（豆乳不使用）",
    items: [
      {
        displayName: "マンゴー",
        image: "/images/flavors/mango.png",
        note: "完熟アップルマンゴーピューレを贅沢に使い、果肉をそのまま裏ごししたような濃密でとろける甘み",
      },
      {
        displayName: "ミックスベリー",
        image: "/images/flavors/berry_mix.png",
        note: "甘酸っぱい苺と華やかな木苺ピューレにココナッツのまろやかさを重ねた、鮮やかな酸味",
      },
      {
        displayName: "もも",
        image: "/images/flavors/peach.png",
        note: "国産もものストレート果汁をベースに、白桃をかじった瞬間のみずみずしい香りを閉じ込めた一玉",
      },
      {
        displayName: "りんご",
        image: "/images/flavors/apple.png",
        note: "国産りんご果汁の蜜のような甘みとキュッと締まった酸味が、食後の口の中を心地よく整える味わい",
      },
      {
        displayName: "ドラゴンフルーツ",
        image: "/images/flavors/dragon_fruit.png",
        note: "鮮やかなルビー色の果実にパインアップルとココナッツミルクを合わせた、華やかな南国仕立て",
      },
    ],
  },
];

export default function CafeFlavorsSection() {
  return (
    <section id="flavors" className="scroll-mt-14 bg-[#f7f3ec] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-brand mb-3 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          フレーバー（全11種）
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl md:text-4xl">
          4L（1L×4個など）から、好きな味を組み合わせて。
        </h2>
        <p className="text-ink-light mt-4 max-w-3xl font-sans text-[15px] leading-[1.85] sm:text-base">
          全11種すべて同じ価格で、{WHOLESALE_FACTS.minLot}
          。各カードを押すと、全原材料とアレルゲン・栄養成分をご確認いただけます。
        </p>

        <div className="mt-8">
          <WholesaleFlavorGrid groups={cafeFlavorGroups} />
        </div>

        <WholesaleMidCta lead="お店の焼き菓子やドリンクとの相性を、まずは6個の無料試食サンプルでお確かめください。" />
      </div>
    </section>
  );
}
