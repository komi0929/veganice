import Image from "next/image";
import { SectionHeader } from "./ui";

const reasons = [
  {
    number: "01",
    title: "重くない",
    body: ["乳脂肪を使わないので、後味さっぱり。", "お腹いっぱいでも、するっと食べきれます。"],
  },
  {
    number: "02",
    title: "なのに、なめらか",
    body: ["米粉を使って、ジェラートのような口どけに。", "甘酒やみその隠し味で、コクもしっかり。"],
  },
  {
    number: "03",
    title: "だれにでも出せる",
    body: [
      "乳・卵・小麦は使っていません。",
      "専用工房でつくるので、混ざる心配もなし。",
      "アレルギーのある方にも安心です。",
    ],
  },
];

/** 食後のデザートに向いている理由（3つに絞る） */
export default function DessertReasonsSection() {
  return (
    <section id="reasons" className="bg-bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:items-center md:gap-14">
        <div>
          <SectionHeader
            eyebrow="食後にぴったりな理由"
            lines={["お腹いっぱいでも、", "もうひと口。"]}
          />

          <ul className="mt-8 space-y-7">
            {reasons.map((reason) => (
              <li key={reason.number}>
                <h3 className="text-ink flex items-baseline gap-3 text-lg leading-snug font-bold">
                  <span className="text-brand text-sm font-bold">{reason.number}</span>
                  {reason.title}
                </h3>
                <div className="text-ink-light mt-2 space-y-0.5 border-l-2 border-[#e8dfd0] pl-4 text-[15px] leading-[1.8]">
                  {reason.body.map((sentence) => (
                    <p key={sentence}>{sentence}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-square w-full overflow-hidden rounded-3xl md:aspect-[4/5]">
          <Image
            src="/images/craft_scoop_cup.webp"
            alt="ジェラートのようになめらかなSoyStoriesのアイス"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <p className="text-ink absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-bold shadow-sm backdrop-blur-sm">
            シャリシャリではなく、とろっとなめらか
          </p>
        </div>
      </div>
    </section>
  );
}
