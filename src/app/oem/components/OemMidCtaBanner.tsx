"use client";

import { Sparkles, PackageOpen } from "lucide-react";
import { dispatchOemIntent } from "../lib/oemInteraction";

/**
 * 薬院実店舗の口コミ（★4.7）直後に配置する「検討フェーズ別の2ルート分岐ブリッジ」
 * 「すぐ素材で相談したい層」と「まず植物性ベースの口どけを食べて確かめたい慎重層」の双方を取りこぼさない設計
 */
export default function OemMidCtaBanner() {
  return (
    <section className="bg-[#f7f3ec] py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-brand text-xs font-bold tracking-wider">まずはリスクなく一歩目から</p>
          <h2 className="text-ink mt-1.5 text-xl font-bold sm:text-2xl">
            ご検討の状況にあわせて、2つの入り口をご用意しています
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* ルートA：使いたい素材・イメージがある方（無料3方向提案） */}
          <div className="border-brand/30 flex flex-col justify-between rounded-3xl border bg-white p-6 shadow-2xs sm:p-7">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="bg-brand/10 text-brand inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  使いたい食材・アイデアがある方
                </span>
                <span className="text-brand text-xs font-bold">ご相談 ¥0</span>
              </div>
              <h3 className="text-ink mt-3.5 text-lg leading-snug font-bold">
                お店の素材に合う「3つの味の方向性シート」を無料でお作りします
              </h3>
              <p className="text-ink-light mt-2 text-xs leading-relaxed sm:text-[13px]">
                試作費用をお支払いいただく前に、素材の特性を踏まえた3パターンのアレンジ案と概算スケジュールをご提案します。提案を見てからじっくりご判断いただけます。
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                dispatchOemIntent({
                  target: "contact",
                  tab: "oem",
                })
              }
              className="bg-cta hover:bg-cta-hover mt-5 inline-flex min-h-12 w-full cursor-pointer items-center justify-center rounded-full px-6 py-3 text-sm font-bold text-white shadow-2xs transition-colors"
            >
              無料で「3つの味の方向性」を相談する →
            </button>
          </div>

          {/* ルートB：まずはベースの滑らかさを食べて確かめたい方（6個無料サンプル） */}
          <div className="flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 shadow-2xs sm:p-7">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f4f1ea] px-3 py-1 text-xs font-bold text-gray-800">
                  <PackageOpen className="text-brand h-3.5 w-3.5" aria-hidden="true" />
                  まずは今の味を食べて確かめたい方
                </span>
                <span className="text-ink text-xs font-bold">商品代 ¥0（送料のみ）</span>
              </div>
              <h3 className="text-ink mt-3.5 text-lg leading-snug font-bold">
                定番11種から選べる「6個おためし試食セット」をお届けします
              </h3>
              <p className="text-ink-light mt-2 text-xs leading-relaxed sm:text-[13px]">
                「卵・乳・小麦不使用で本当にコクがあるの？」という疑問を、まずは実物でお確かめください。シール変更の「開発費0円プラン（プラン①）」のフレーバー選びにもそのまま使えます。
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                dispatchOemIntent({
                  target: "contact",
                  tab: "sample",
                })
              }
              className="bg-brand hover:bg-brand-dark mt-5 inline-flex min-h-12 w-full cursor-pointer items-center justify-center rounded-full px-6 py-3 text-sm font-bold text-white shadow-2xs transition-colors"
            >
              試食サンプル（6個・商品代無料）を申し込む →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
