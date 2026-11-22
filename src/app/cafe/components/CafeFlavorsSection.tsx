import WholesaleFlavorGrid, {
  type WholesaleFlavorGroup,
} from "@/app/components/wholesale/WholesaleFlavorGrid";
import WholesaleMidCta from "@/app/components/wholesale/WholesaleMidCta";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

const cafeFlavorGroups: WholesaleFlavorGroup[] = [
  {
    title: "ケーキ・焼き菓子に（6種）",
    subtitle:
      "ガトーショコラ、タルト、ワッフル、パンケーキ、スコーン、最中など焼き菓子の横に添えやすい濃厚・お茶系",
    items: [
      {
        displayName: "バニラ",
        image: "/images/flavors/vanilla_coconut.png",
        note: "どの焼き菓子にも寄り添うまろやかな定番",
      },
      {
        displayName: "UMAMIバニラ",
        image: "/images/flavors/umami_vanilla.png",
        note: "白味噌と甘酒の深いコク。アフォガートにも",
      },
      {
        displayName: "アールグレイ",
        image: "/images/flavors/earl_gray.png",
        note: "ベルガモット香る紅茶アイス。シフォンやタルトに",
      },
      {
        displayName: "ショコラ",
        image: "/images/flavors/chocolate.png",
        note: "カカオの深みを白味噌が引き立てる濃厚ショコラ",
      },
      {
        displayName: "抹茶",
        image: "/images/flavors/matcha.png",
        note: "甘酒と白味噌が調和するほろ苦い濃厚抹茶",
      },
      {
        displayName: "ほうじ茶",
        image: "/images/flavors/houjicha.png",
        note: "香ばしい焙煎茶葉の薫香。和パフェや米粉菓子に",
      },
    ],
  },
  {
    title: "ドリンク・フロートに（5種）",
    subtitle:
      "ソーダフロート、ティーフロート、季節のグラスパフェやランチ後の小さなデザートに映える果実系",
    items: [
      {
        displayName: "マンゴー",
        image: "/images/flavors/mango.png",
        note: "ソーダフロートやパフェに映える濃厚果実味",
      },
      {
        displayName: "ミックスベリー",
        image: "/images/flavors/berry_mix.png",
        note: "苺と木苺の甘酸っぱさ。ワッフルや紅茶フロートに",
      },
      {
        displayName: "もも",
        image: "/images/flavors/peach.png",
        note: "国産もものみずみずしい果汁感と爽やかな後味",
      },
      {
        displayName: "りんご",
        image: "/images/flavors/apple.png",
        note: "国産りんごのやさしい甘みとすっきりした酸味",
      },
      {
        displayName: "ドラゴンフルーツ",
        image: "/images/flavors/dragon_fruit.png",
        note: "グラスに鮮やかなルビー色が映える爽快な甘さ",
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
