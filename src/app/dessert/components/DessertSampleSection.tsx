import Image from "next/image";
import DessertContactForm from "./DessertContactForm";
import { CheckItem, SectionHeader } from "./ui";

const steps = [
  { title: "フォームから申し込む", note: "1分で終わります" },
  { title: "お店の厨房で試す", note: "味・かたさ・料理との相性をチェック" },
  { title: "気に入ったら注文", note: "最小4Lから。約5営業日で届きます" },
];

/** 最終CTA：サンプル内容を明確にしてから、その場でフォームへ */
export default function DessertSampleSection() {
  return (
    <section id="contact-form" className="bg-bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:gap-14">
        <div>
          <SectionHeader
            eyebrow="無料サンプル"
            lines={["まずは6種類を、", "無料で試してください。"]}
            lead={["すくって食べてみるのが、いちばん早いです。"]}
          />

          {/* サンプル内容 */}
          <div className="mt-8 overflow-hidden rounded-3xl border border-gray-100 bg-[#f7f3ec]">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/images/gelato_cup_tower.jpg"
                alt="SoyStoriesのアイスのフレーバー"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <ul className="text-ink space-y-2.5 p-5 text-[15px] leading-snug">
              <CheckItem>おすすめの味を6種類お届け</CheckItem>
              <CheckItem>
                商品代は<strong className="text-cta">0円</strong>（送料のみ着払い）
              </CheckItem>
              <CheckItem>購入の義務なし・しつこい営業もなし</CheckItem>
              <CheckItem>申し込みから2営業日以内に発送</CheckItem>
            </ul>
          </div>

          {/* 流れ */}
          <ol className="mt-8 space-y-4">
            {steps.map((step, index) => (
              <li key={step.title} className="flex items-center gap-4">
                <span className="bg-brand flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <p className="text-ink text-[15px] font-bold">{step.title}</p>
                  <p className="text-ink-muted text-xs">{step.note}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* 代表のひとこと */}
          <figure className="mt-8 flex items-center gap-4 rounded-2xl bg-[#f7f3ec] p-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
              <Image
                src="/images/owner_story.jpg"
                alt="SoyStories 代表 小南優作"
                fill
                className="object-cover object-[center_15%]"
                sizes="56px"
              />
            </div>
            <div>
              <blockquote className="text-ink text-[13px] leading-relaxed font-bold">
                <span className="block">「自信をもってお客さんに出せる</span>
                <span className="block">食後デザートを、届けたい。」</span>
              </blockquote>
              <figcaption className="text-ink-muted mt-1 text-xs">
                SoyStories 代表　小南 優作
              </figcaption>
            </div>
          </figure>
        </div>

        <div className="md:pt-2">
          <DessertContactForm />
        </div>
      </div>
    </section>
  );
}
