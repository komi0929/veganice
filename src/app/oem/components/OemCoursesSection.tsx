import Image from "next/image";
import { SectionHeader, CheckItem } from "@/app/dessert/components/ui";
import { OEM_COURSES, PRICING_CONSTANTS } from "../data/oemSpecs";

/**
 * OEM 3コース比較 ＆ カップ・バルク2形態の説明セクション
 * 完全版OEM LP（/oem）と要点版OEM LP（/oem/plan）の双方で共通利用する
 */
export default function OemCoursesSection() {
  return (
    <section id="courses" className="bg-bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="3つのつくり方（OEMメニュー）"
          lines={["お店の素材や目的に合わせて、", "無理のない形から始められます。"]}
          lead={[
            "ふた（天面）のシールだけお店の屋号にする手軽な形から、",
            "大切に育てた農作物や看板素材を主役にするオリジナル開発まで、3つのコースをご用意しています。",
          ]}
        />

        {/* 3コース比較カード */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {OEM_COURSES.map((course, idx) => (
            <div
              key={course.id}
              className={`flex flex-col rounded-3xl border p-6 shadow-xs sm:p-7 ${
                idx === 2 ? "border-brand/35 bg-[#faf8f4]" : "border-gray-200 bg-white"
              }`}
            >
              <span className="bg-brand/10 text-brand inline-block self-start rounded-full px-3.5 py-1 text-xs font-bold">
                {course.badge}
              </span>
              <h3 className="text-ink mt-4 text-lg leading-snug font-bold">{course.title}</h3>
              <p className="text-ink-light mt-2.5 text-sm leading-relaxed">{course.subtitle}</p>

              <div className="mt-5 rounded-2xl bg-white/90 p-4 ring-1 ring-gray-100">
                <p className="text-brand text-xs font-bold">向いているお店・用途</p>
                <p className="text-ink mt-1 text-[13.5px] leading-relaxed">{course.idealFor}</p>
              </div>

              <ul className="text-ink-light mt-5 flex-1 space-y-2.5 text-[13.5px] leading-relaxed">
                {course.detailPoints.map((pt) => (
                  <CheckItem key={pt}>{pt}</CheckItem>
                ))}
              </ul>

              <div className="mt-6 border-t border-gray-200/80 pt-4">
                <p className="text-ink-muted text-xs">対応する容器形態</p>
                <div className="mt-1.5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700">
                    100ml 個食カップ（お店シール）
                  </span>
                  {course.availableFormats.includes("bulk") && (
                    <span className="bg-brand/10 text-brand rounded-full px-3 py-1 text-xs font-bold">
                      2L 業務用バルク対応
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 量産価格・ロット（カップ vs 2Lバルク） */}
        <div className="mt-14 rounded-3xl bg-[#f7f3ec] p-6 sm:p-10">
          <div className="max-w-2xl">
            <p className="text-brand text-xs font-bold tracking-wide">
              本製造の価格とロット（全コース共通）
            </p>
            <h3 className="text-ink mt-1 text-xl font-bold sm:text-2xl">
              完成後の製造単価は、定番卸と同じ「据え置き価格」です
            </h3>
            <p className="text-ink-light mt-2 text-sm leading-relaxed">
              主役となるお店独自の素材をご支給いただく仕組みにすることで、オリジナル開発でも量産時の単価は上がりません。1つのレシピから「物販用カップ」と「店内提供用バルク」の両方をご注文いただけます。
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* 個食カップ */}
            <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-xs">
              <div className="relative aspect-[16/9] w-full bg-gray-100">
                <Image
                  src="/images/gelato_cup_tower.jpg"
                  alt="100ml 個食カップ（天面オリジナルシール対応）"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3.5 py-1 text-xs font-bold text-gray-800 shadow-xs">
                  テイクアウト・物販・ギフト向け
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h4 className="text-ink text-lg font-bold">100ml 個食カップ（お店シール仕様）</h4>
                <div className="mt-3 flex flex-wrap items-baseline gap-x-2">
                  <span className="text-brand text-2xl font-bold">
                    税込 ¥{PRICING_CONSTANTS.cupOemPriceTaxIncl}
                  </span>
                  <span className="text-ink-light text-xs">／個（税別 約¥286）</span>
                </div>
                <p className="text-ink-muted mt-1 text-xs leading-relaxed">
                  ※基準卸価格 税別¥{PRICING_CONSTANTS.cupBasePriceExTax}（税込¥
                  {PRICING_CONSTANTS.cupBasePriceTaxIncl}
                  ）より、天面シールをお客様にてご手配いただく分として
                  <strong>税込{PRICING_CONSTANTS.cupStickerDiscountTaxIncl}円をお値引き</strong>
                  した価格です。
                </p>
                <dl className="mt-4 space-y-2 border-t border-gray-100 pt-4 text-[13.5px]">
                  <div className="flex justify-between gap-2">
                    <dt className="text-ink-muted">最小ロット</dt>
                    <dd className="text-ink font-bold">1味につき 60個〜（60個単位）</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-ink-muted">おススメ単位</dt>
                    <dd className="text-brand font-bold">120個（100サイズ箱ぴったり・送料半減）</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-ink-muted">表示ラベル</dt>
                    <dd className="text-ink">底面の法定一括表示は当社にて印字・貼付</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* 業務用2Lバルク */}
            <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-xs">
              <div className="relative aspect-[16/9] w-full bg-gray-100">
                <Image
                  src="/images/bulk_2l.jpg"
                  alt="業務用2L角型バルク容器"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3.5 py-1 text-xs font-bold text-gray-800 shadow-xs">
                  店内デザート・パフェ・コース料理向け
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h4 className="text-ink text-lg font-bold">業務用 2L角型バルク（オリジナル味）</h4>
                <div className="mt-3 flex flex-wrap items-baseline gap-x-2">
                  <span className="text-brand text-2xl font-bold">
                    税別 ¥{PRICING_CONSTANTS.bulk2LPriceExTax.toLocaleString("ja-JP")}
                  </span>
                  <span className="text-ink-light text-xs">
                    ／2L 1本（税込 ¥{PRICING_CONSTANTS.bulk2LPriceTaxIncl.toLocaleString("ja-JP")}
                    ・1Lあたり税別¥2,000）
                  </span>
                </div>
                <p className="text-ink-muted mt-1 text-xs leading-relaxed">
                  ※天面シールの準備が不要なため、試作決定後すぐにご注文いただけます。2L
                  1本から約24皿（80ml）〜約40皿（50ml）ご提供可能です。
                </p>
                <dl className="mt-4 space-y-2 border-t border-gray-100 pt-4 text-[13.5px]">
                  <div className="flex justify-between gap-2">
                    <dt className="text-ink-muted">最小ロット</dt>
                    <dd className="text-ink font-bold">1味につき 6L（2L×3本）〜</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-ink-muted">おススメ単位</dt>
                    <dd className="text-brand font-bold">12L（2L×6本・1箱にまとまり送料節約）</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-ink-muted">混載注文</dt>
                    <dd className="text-ink">定番11フレーバーとの組み合わせ発注も可能</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* 天面シール・素材支給・レシピの約束（透明な条件開示） */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-5">
              <p className="text-ink text-sm font-bold">天面シールのご支給について</p>
              <p className="text-ink-light mt-1.5 text-xs leading-relaxed">
                ふたのシールは原則お客様ご支給となります。入稿用ベースデータ（テンプレート）と、冷凍に強い耐水紙の印刷案内をお渡ししますので初めてでも迷わず手配いただけます。
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5">
              <p className="text-ink text-sm font-bold">お預かりできる素材の条件</p>
              <p className="text-ink-light mt-1.5 text-xs leading-relaxed">
                専用工房の安全を守るため、
                <strong>卵・乳・小麦を含まない素材（加工ラインでの混入がないもの）</strong>
                に限らせていただいております。特注素材を当社で仕入れる場合は別途お見積りいたします。
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5">
              <p className="text-ink text-sm font-bold">レシピの扱いと品質保証</p>
              <p className="text-ink-light mt-1.5 text-xs leading-relaxed">
                手頃な試作費でお受けするため配合・製法の権利は当社に帰属し、知見を当社商品の開発・販売に活かす場合がございます（ご支給素材や屋号の無断使用は一切いたしません。専属ロック契約も別途ご相談可能です）。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
