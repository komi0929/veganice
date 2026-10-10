import { SectionHeader } from "./ui";

const faqs = [
  {
    q: "冷凍庫がせまくても大丈夫？",
    a: "大丈夫です。1Lか2Lの小さめ容器なので、すき間に入ります。最小4L（1L×4個など）から注文できます。",
  },
  {
    q: "忙しい時間でも、すぐ出せる？",
    a: "はい。かたく凍りにくいので、冷凍庫から出してすぐすくえます。1杯15秒ほどで出せます。",
  },
  {
    q: "ふつうのお店でも使える？",
    a: "もちろんです。薬院のお店でも、ヴィーガンではないお客さんから「ふつうのアイスよりこっちが好き」とよく言われます。",
  },
  {
    q: "1杯いくらで出すのがいい？",
    a: "小さめディッシャー（約50ml）なら1Lで約20杯とれます。単品380〜480円、セットなら＋300〜350円くらいがおすすめです。",
  },
  {
    q: "アレルギー表示は？",
    a: "特定原材料8品目（卵・乳・小麦・えび・かに・そば・落花生・くるみ）は使っていません。一部の味に大豆・アーモンド・もも・りんごを含みます。",
  },
  {
    q: "卸値はいくら？",
    a: "量によって変わるため、フォームかLINEでお気軽にお問い合わせください。",
  },
  {
    q: "注文から、どのくらいで届く？",
    a: "通常5営業日以内に、ヤマト運輸のクール冷凍便でお届けします。お支払いは月末締め・翌月末の銀行振込です。",
  },
];

export default function DessertFAQSection() {
  return (
    <section id="faq" className="bg-[#f7f3ec] py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeader eyebrow="よくある質問" lines={["気になるところに、", "お答えします。"]} />

        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-2xl bg-white shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
                <span className="text-ink flex gap-2 text-[15px] leading-snug font-bold">
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
              <p className="text-ink-light px-5 pb-5 pl-11 text-[14px] leading-[1.8]">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
