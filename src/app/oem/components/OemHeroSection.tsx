"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Clock, Package } from "lucide-react";

const HERO_STATS = [
  { icon: Sparkles, value: "¥0〜", label: "開発費\n（シール変更なら0円）" },
  { icon: Package, value: "60個〜", label: "小ロット製造\n（バルクは6L〜）" },
  { icon: Clock, value: "最短 1か月", label: "ご相談から\nお手元まで" },
  { icon: ShieldCheck, value: "★4.7", label: "薬院実店舗の\nGoogle評価" },
];

/**
 * 3秒で直感理解できる OEM 完全版ファーストビュー
 * LCP最適化のためメイン写真と見出しはSSR直後から即描画し、フローティング要素に心地よいモーションを添える
 */
export default function OemHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3ec] pt-8 pb-16 sm:pt-14 sm:pb-24">
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* メインビジュアルコラージュ */}
          <div className="relative lg:order-2 lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-white shadow-lg ring-4 ring-white">
              <Image
                src="/images/oem/course_3_original.jpg"
                alt="旬の果実やお店のこだわり食材からつくる植物性クラフトアイス"
                fill
                priority
                fetchPriority="high"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-3 left-3 rounded-full bg-black/70 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-xs">
                卵・乳・小麦 持ち込みゼロ専用工房
              </div>
            </div>

            {/* フローティング写真カード2枚（お店シールカップ ＆ 2Lバルク） */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-3 grid grid-cols-2 gap-2.5 sm:mt-0"
            >
              <div className="flex items-center gap-2.5 rounded-2xl bg-white p-2.5 pr-3.5 shadow-md sm:absolute sm:-bottom-6 sm:left-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src="/images/oem/course_1_sticker.jpg"
                    alt="お店ロゴシール対応の100ml個食カップ"
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="text-brand text-[10.5px] font-bold">お店ロゴ対応</p>
                  <p className="text-ink text-xs leading-snug font-bold">100mlカップ</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-2xl bg-white p-2.5 pr-3.5 shadow-md sm:absolute sm:right-3 sm:-bottom-6">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src="/images/bulk_2l.jpg"
                    alt="2L業務用バルク容器"
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="text-brand text-[10.5px] font-bold">店内皿盛り用も</p>
                  <p className="text-ink text-xs leading-snug font-bold">2Lバルク対応</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* コピー ＋ 4つの数字カード */}
          <div className="lg:order-1 lg:col-span-6">
            <span className="bg-brand inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold text-white shadow-2xs">
              植物性クラフトアイスの小ロットOEM・PB製造
            </span>

            <h1 className="text-ink mt-4 text-[23px] leading-[1.38] font-bold tracking-tight sm:text-4xl lg:text-[40px]">
              お店の食材と名前で、
              <span className="mt-1 block">
                「
                <span className="bg-[linear-gradient(transparent_62%,#f9d9e3_62%)]">
                  ここにしかない一皿
                </span>
                」を。
              </span>
            </h1>

            <p className="text-ink-light mt-4 text-[15px] leading-[1.8] sm:text-base">
              ふたシールを変えるだけの<strong>開発費0円プラン</strong>
              から、自慢の農作物・茶葉でつくる<strong>専用レシピ開発</strong>
              まで。福岡・薬院の専用工房から全国へお届けします。
            </p>

            {/* 4つの直感数字グリッド */}
            <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {HERO_STATS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.value}
                    className="flex flex-col items-center rounded-2xl bg-white p-3.5 text-center shadow-2xs ring-1 ring-gray-200/60"
                  >
                    <Icon className="text-brand h-4 w-4" aria-hidden="true" />
                    <p className="text-ink mt-1.5 text-lg leading-none font-bold sm:text-xl">
                      {item.value}
                    </p>
                    <p className="text-ink-muted mt-1.5 text-[11px] leading-tight whitespace-pre-line">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* 48px以上のタップしやすいCTAボタン */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#courses"
                className="bg-brand hover:bg-brand-dark inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-colors sm:text-base"
              >
                3つのコースを図で見る ↓
              </a>
              <a
                href="#contact-form"
                className="bg-cta hover:bg-cta-hover inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-colors sm:text-base"
              >
                無料で事前相談する →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
