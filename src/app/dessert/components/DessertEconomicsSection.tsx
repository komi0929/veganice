"use client";

import { motion } from "framer-motion";

const TrendingIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const UtensilsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand"
  >
    <path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" />
    <path d="M15 11v11" />
    <path d="M6 2v20" />
    <path d="M3 2v4a3 3 0 0 0 6 0V2" />
  </svg>
);

const ShieldBoxIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const GlobeHeartIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const valuePoints = [
  {
    icon: TrendingIcon,
    tag: "客単価UP",
    title: "手軽に ＋350円〜500円 の単価アップ",
    body: "ラーメンやバーガーをご注文いただいたお客様へ、「食後のミニデザート」としておすすめしやすい価格設定が可能。追加の仕込みコストなしで、自然な客単価アップを実現します。",
  },
  {
    icon: UtensilsIcon,
    tag: "セット提案",
    title: "「ラーメン/バーガー＋アイス」セットで選ばれる",
    body: "「ヴィーガンバーガー＋ミニクラフトアイスセット」「特製ラーメン＋お口直しアイスセット」など、セットメニュー化することで注文率が大幅に向上します。",
  },
  {
    icon: ShieldBoxIcon,
    tag: "省スペース・ロスゼロ",
    title: "狭小な冷凍庫でも安心の最小4Lロット・廃棄ゼロ",
    body: "スープやパティで冷凍スペースに余裕がないラーメン・バーガー店でも導入しやすい1Lまたは2Lの小型容器。賞味期限の心配がない冷凍保管で、廃棄ロスは0%です。",
  },
  {
    icon: GlobeHeartIcon,
    tag: "インバウンド集客",
    title: "「デザートまでヴィーガン対応」で高評価レビュー獲得",
    body: "「ラーメンはヴィーガン対応なのに、デザートがなくて残念……」という訪日外国人やヴィーガン客の機会損失を解消。GoogleやHappyCowで圧倒的な高評価レビューにつながります。",
  },
];

const menuPatterns = [
  {
    storeType: "ヴィーガンラーメン店様 例",
    menuName: "「食後のお口直し ミニクラフトアイス」",
    price: "¥380",
    description:
      "濃厚な味噌ラーメンや担々麺の後に。白桃やりんごの果汁系で、口の中の油分をすっきりリセット。",
    badge: "人気No.1提案",
  },
  {
    storeType: "ヴィーガンバーガー店様 例",
    menuName: "「バーガー＋本日のクラフトアイス コンボ」",
    price: "セット価格 ＋¥350（単品 ¥480）",
    description:
      "ジューシーなソイミートパティの後に。なめらかショコラや抹茶の濃厚リッチな味わいで満足感を最大化。",
    badge: "セット率UP",
  },
  {
    storeType: "プラントベースカフェ・ダイナー様 例",
    menuName: "「クラフトアイス 2種盛り合わせ プレート」",
    price: "¥680",
    description:
      "季節のフレーバー2種を美しく盛り付け。カフェタイムの単体デザートとしても主力商品に。",
    badge: "高粗利メニュー",
  },
];

export default function DessertEconomicsSection() {
  return (
    <section id="value" className="bg-bg relative overflow-hidden py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        {/* ── ヘッダー ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20 md:text-center"
        >
          <span className="text-brand mb-4 block text-sm font-semibold tracking-widest uppercase">
            Business Value
          </span>
          <h2 className="text-ink mb-6 font-serif text-2xl font-bold sm:text-3xl md:text-5xl">
            ラーメン・バーガー店における、
            <br />
            「食後デザート」の圧倒的な導入メリット
          </h2>
          <p className="text-ink-light mx-auto max-w-2xl font-sans text-base leading-relaxed md:text-lg">
            ただのアイスではなく、「食事の満足度を最高潮で締めくくる演出」。
            お店のオペレーションを一切邪魔せず、売上とリピート率を引き上げます。
          </p>
        </motion.div>

        {/* ── 4つの価値グリッド ── */}
        <div className="mx-auto mb-20 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          {valuePoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="border-brand/20 bg-brand/5 flex h-12 w-12 items-center justify-center rounded-xl border">
                  <point.icon />
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 font-sans text-xs font-semibold text-emerald-700">
                  {point.tag}
                </span>
              </div>
              <h3 className="text-ink mb-3 font-serif text-lg font-bold sm:text-xl">
                {point.title}
              </h3>
              <p className="text-ink-light text-sm leading-relaxed sm:text-base">{point.body}</p>
            </motion.div>
          ))}
        </div>

        {/* ── 食事系店舗のメニュー導入例 ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-gray-200/80 bg-white p-8 shadow-sm md:p-12"
        >
          <div className="mb-10 text-center">
            <span className="text-brand font-sans text-xs font-bold tracking-widest uppercase">
              Menu Idea
            </span>
            <h3 className="text-ink mt-2 font-serif text-2xl font-bold sm:text-3xl">
              実際の店舗様での「食後デザート」メニュー例
            </h3>
            <p className="text-ink-light mt-3 text-sm sm:text-base">
              お店のオペレーションに合わせて、届いたその日から展開いただけます。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {menuPatterns.map((item, idx) => (
              <div
                key={idx}
                className="bg-bg hover:border-brand/40 flex flex-col justify-between rounded-2xl border border-gray-100 p-6 transition-all"
              >
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-ink-muted text-xs font-semibold">{item.storeType}</span>
                    <span className="bg-brand rounded-md px-2 py-0.5 text-[11px] font-bold text-white">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="text-ink mb-2 font-serif text-lg font-bold">{item.menuName}</h4>
                  <p className="text-brand-dark mb-4 font-sans text-base font-bold">{item.price}</p>
                  <p className="text-ink-light text-xs leading-relaxed sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-ink-muted mb-6 text-sm sm:text-base">
            貴店の客層やメニュー構成に合わせたフレーバー選びも、お気軽にご相談ください。
          </p>
          <a
            href="#contact-form"
            className="bg-cta hover:bg-cta-hover inline-block rounded-full px-10 py-4 text-base font-bold text-white shadow-sm transition-all hover:shadow-md md:text-lg"
          >
            食後デザート用サンプルで試してみる
          </a>
        </motion.div>
      </div>
    </section>
  );
}
