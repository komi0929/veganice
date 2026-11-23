import Image from "next/image";
import DessertContactForm from "./DessertContactForm";
import { CheckItem, SectionHeader } from "./ui";

const steps = [
  { title: "フォームまたはLINEから申し込む", note: "味はおまかせ6個でも、1種ずつ選んでもOK" },
  {
    title: "お店でスタッフの皆様とご試食",
    note: "滑らかな口どけや後味の軽さ、お店の料理・お菓子との相性を確認",
  },
  {
    title: "ご納得後に少量からご注文",
    note: "バルク4L〜／個食カップ60個〜。通常5営業日前後でお届け",
  },
];

/** 中盤配置の無料サンプル申込セクション：スマホではフォームへの到達を最速化 */
export default function DessertSampleSection() {
  return (
    <section id="contact-form" className="scroll-mt-16 bg-[#f7f3ec] py-14 sm:py-22">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 md:grid-cols-2 md:gap-12">
        <div>
          <SectionHeader
            eyebrow="無料試食サンプル"
            lines={["まずは6個、気になる味を", "お店でお試しください。"]}
            lead={[
              "スパイス料理や定食のあとにも軽やかに締まる口どけや、温かい焼き菓子にとろりと絡む濃厚なコクを、ぜひお店でお確かめください。",
            ]}
          />

          {/* サンプル内容 */}
          <div className="mt-6 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xs">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/images/gelato_cup_tower.jpg"
                alt="無料試食サンプルのSoyStoriesクラフトアイス6個イメージ"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <ul className="text-ink space-y-2.5 p-5 text-[14.5px] leading-snug">
              <CheckItem>全11種から6個まで選べる（おまかせも可・同じ味を複数でも）</CheckItem>
              <CheckItem>
                商品代金は<strong className="text-cta">無料</strong>（クール冷凍便の送料のみ着払い）
              </CheckItem>
              <CheckItem>自動継続やご契約義務・お申し込み後の電話営業は一切なし</CheckItem>
              <CheckItem>通常2営業日以内に専用工房より発送</CheckItem>
            </ul>
          </div>

          {/* 流れ */}
          <ol className="mt-6 space-y-3.5">
            {steps.map((step, index) => (
              <li key={step.title} className="flex items-center gap-3.5">
                <span className="bg-brand flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <p className="text-ink text-sm font-bold">{step.title}</p>
                  <p className="text-ink-muted text-xs">{step.note}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* 代表のひとこと */}
          <figure className="mt-6 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-2xs">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
              <Image
                src="/images/owner_story.jpg"
                alt="株式会社ヒトコト 代表 小南優作"
                fill
                className="object-cover object-[center_15%]"
                sizes="56px"
              />
            </div>
            <div>
              <blockquote className="text-ink text-[13px] leading-relaxed font-bold">
                「お店自慢の料理やお菓子の隣で、お客様に笑顔で選んでいただける一品を丁寧にお届けします。」
              </blockquote>
              <figcaption className="text-ink-muted mt-1 text-xs">
                株式会社ヒトコト（SoyStories）代表　小南 優作
              </figcaption>
            </div>
          </figure>
        </div>

        <div className="md:pt-1">
          <DessertContactForm />
        </div>
      </div>
    </section>
  );
}
