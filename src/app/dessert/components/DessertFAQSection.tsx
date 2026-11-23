import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface FAQItem {
  q: string;
  a: ReactNode;
}

const faqs: FAQItem[] = [
  {
    q: "お店の冷凍スペースが限られていますが保管できますか？",
    a: "はい。省スペースな1L・2Lの角型容器のため、コールドテーブルや小型冷凍庫のすき間にすっきり収まります。最小4L（1L×4本など）から味自由でご注文いただけます。",
  },
  {
    q: "ベースの植物性ミルクや、ハラール・五葷等の基準確認はできますか？",
    a: "抹茶・ほうじ茶・バニラ2種・アールグレイは豆乳、ショコラはアーモンドミルク、フルーツ系5種は果実×ココナッツがベースです。各カードから全原材料をご確認いただけるほか、個別基準に合う選定も備考欄やDMでご案内します。",
  },
  {
    q: "アレルゲン対応・専用工房の管理体制は？",
    a: "卵・乳・小麦を一切持ち込まない専用工房製のため、乳・卵・小麦アレルギーの方にも安心してお出しいただけます（工房持ち込みがある特定原材料等はナッツ類のみ。味により大豆・アーモンド・もも・りんごを含みます）。",
  },
  {
    q: "テイクアウト用の個食カップや、お店ロゴのOEMもできますか？",
    a: (
      <>
        はい。「定番100ml個食カップ（税別¥300・60個〜）」のほか、開発費0円で天面シールをお店ロゴにできるOEM（1味60個〜）やオリジナル味開発も承っております。詳しくは{" "}
        <Link href="/wholesale" className="text-brand font-bold underline hover:opacity-80">
          定番卸一覧ページ
        </Link>{" "}
        または{" "}
        <Link
          href="/oem/plan?src=dessert_faq"
          className="text-brand font-bold underline hover:opacity-80"
        >
          OEMプラン案内
        </Link>{" "}
        をご覧ください。
      </>
    ),
  },
  {
    q: "卸価格・納期・お支払い条件について知りたい",
    a: (
      <>
        バルクは1L ¥2,000／2L ¥4,000（税別）、通常5営業日前後でクール冷凍便発送です。リピート注文は{" "}
        <a
          href="https://order.soystories.cafe/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand underline hover:opacity-80"
        >
          専用発注ページ
        </a>{" "}
        から1分で手配でき、お支払いは「納品月の月末締め・翌月末請求書払い（銀行振込）」です。
      </>
    ),
  },
];

export default function DessertFAQSection() {
  return (
    <section id="faq" className="scroll-mt-16 bg-[#f7f3ec] py-12 sm:py-18">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-brand mb-2 inline-flex items-center gap-2 text-xs font-bold tracking-wide">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          よくある質問
        </p>
        <h2 className="text-ink text-2xl leading-snug font-bold tracking-tight sm:text-3xl">
          導入前によくいただくご質問
        </h2>

        <div className="mt-6 space-y-2.5">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-2xl bg-white shadow-2xs">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
                <span className="text-ink flex gap-2 text-sm leading-snug font-bold sm:text-[15px]">
                  <span className="text-brand">Q.</span>
                  {faq.q}
                </span>
                <span
                  className="text-brand shrink-0 text-lg leading-none transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  ＋
                </span>
              </summary>
              <div className="text-ink-light px-5 pb-4 pl-11 text-xs leading-[1.8] sm:text-sm">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        {/* 創業の想い・背景（読みたい方だけ開ける折りたたみ） */}
        <div id="story" className="mt-6 scroll-mt-20">
          <details className="group rounded-2xl border border-stone-200/80 bg-white shadow-2xs">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/images/owner_story.jpg"
                    alt="SoyStories 代表 小南優作"
                    fill
                    sizes="40px"
                    className="object-cover object-[center_15%]"
                  />
                </div>
                <div>
                  <p className="text-brand text-[11px] font-bold">Our Story</p>
                  <p className="text-ink text-xs font-bold sm:text-sm">
                    「はじめて子どもにアイスを食べさせることができた」——専用工房をつくった理由を読む
                  </p>
                </div>
              </div>
              <span
                className="text-brand shrink-0 text-lg leading-none transition-transform duration-200 group-open:rotate-45"
                aria-hidden="true"
              >
                ＋
              </span>
            </summary>
            <div className="border-t border-gray-100 px-5 py-4">
              <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-12">
                <div className="grid grid-cols-2 gap-2.5 sm:col-span-5">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src="/images/craft_moment.jpg"
                      alt="SoyStoriesの専用工房"
                      fill
                      sizes="180px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src="/images/child_first_icecream.jpg"
                      alt="初めてクラフトアイスを食べる子どもの様子"
                      fill
                      sizes="180px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-ink-light text-xs leading-[1.85] sm:col-span-7">
                  薬院の小さなお店で「はじめて子どもにアイスを食べさせることができた」と涙されたお母さんや、ノンヴィーガンのお客様からの「普通のアイスより好き！」という声をきっかけに、乳・卵・小麦を持ち込まない専用工房を立ち上げました。お料理やお菓子に全力を注ぐお店の一皿を、専門店の私たちが支えます。
                </p>
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
