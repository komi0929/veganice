import type { ReactNode } from "react";
import { Download } from "lucide-react";
import { LID_STICKER_SPEC } from "../data/oemSpecs";

const FAQ_ITEMS: { q: string; a: ReactNode }[] = [
  {
    q: "天面丸シールと底面の法定表示ラベルはどう分担しますか？",
    a: (
      <div className="space-y-2">
        <p>
          底面の法定一括表示ラベル（原材料・栄養成分等）は当社で作成・貼付します。お客様には天面丸シール（
          <strong>{LID_STICKER_SPEC.fullSize}</strong>／推奨：{LID_STICKER_SPEC.material}
          ）のみ店ロゴ等で印刷・ご支給いただきます（基準税込324円から税込15円引の税込309円・ご請求は税別286円基準）。
        </p>
        <div className="flex flex-wrap gap-2 pt-0.5">
          <a
            href={LID_STICKER_SPEC.guidePdfHref}
            download
            className="text-brand border-brand/30 hover:bg-brand/8 inline-flex items-center gap-1.5 rounded-full border bg-[#fafaf8] px-3 py-1 text-xs font-bold transition-colors"
          >
            <Download className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {LID_STICKER_SPEC.guidePdfLabel}
          </a>
          <a
            href={LID_STICKER_SPEC.aiTemplateHref}
            download
            className="text-brand border-brand/30 hover:bg-brand/8 inline-flex items-center gap-1.5 rounded-full border bg-[#fafaf8] px-3 py-1 text-xs font-bold transition-colors"
          >
            <Download className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {LID_STICKER_SPEC.aiTemplateLabel}
          </a>
        </div>
      </div>
    ),
  },
  {
    q: "お預かりする素材の事前確認ルールはありますか？",
    a: "専用工房の安全を守るため、素材および加工ラインに「卵・乳・小麦」を含まないことを原材料規格書等で事前確認できる素材のみお受けしております（ナッツ類は対応可）。主役素材は無償ご支給となります。",
  },
  {
    q: "1つのオリジナルレシピで、カップと2Lバルクの両方を頼めますか？",
    a: "はい。店内デザート用「2Lバルク（6L＝3本単位）」と物販用「100mlカップ（60個単位）」の両方に対応しており、定番11フレーバーとの混載注文も可能です。",
  },
  {
    q: "お支払い条件や冷凍保存期間（賞味期限）は？",
    a: "試作費・量産代金ともに「納品月の月末締め・翌月末請求書払い（銀行振込）」です。氷菓（−18℃以下保存）のため食品表示基準上の賞味期限表示義務はなく、期限切れによる廃棄が出にくい冷凍品です。",
  },
  {
    q: "アルコール由来原料・五葷等の基準相談や、レシピの専属ロックは可能ですか？",
    a: "アルコール由来の原料や特定素材の有無など、個別基準に合わせた設計も承ります。また小ロット・低開発費（税別3万円）のため配合権利は当社帰属（お預かり素材・屋号の無断使用なし）ですが、同一配合の専属ロックや処方買取も年間発注合意または有償オプション（税別30万円〜）で対応可能です。",
  },
];

export default function OemFAQSection() {
  return (
    <section id="faq" className="scroll-mt-16 bg-[#fafaf8] py-12 sm:py-18">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-brand mb-2 inline-flex items-center gap-2 text-xs font-bold tracking-wide">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          よくあるご質問
        </p>
        <h2 className="text-ink text-2xl leading-snug font-bold tracking-tight sm:text-3xl">
          OEMご検討時によくいただくご質問
        </h2>

        <div className="mt-6 space-y-3">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-gray-200 bg-white px-5 py-4"
            >
              <summary className="text-ink flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold sm:text-[15px] [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span
                  className="text-brand shrink-0 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                >
                  ▾
                </span>
              </summary>
              <div className="text-ink-light mt-2.5 border-t border-gray-100 pt-2.5 text-xs leading-relaxed sm:text-sm">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
