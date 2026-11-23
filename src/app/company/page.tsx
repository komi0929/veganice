import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "運営会社・特定商取引法に基づく表記",
};

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-3xl px-5 py-24 md:px-8">
        <h1 className="mb-8 font-serif text-2xl font-bold sm:text-3xl">
          運営会社・特定商取引法に基づく表記
        </h1>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full border-collapse text-left text-sm md:text-base">
            <tbody>
              <tr className="border-b border-gray-100">
                <th className="text-ink w-1/3 bg-gray-50 px-6 py-4 font-bold">
                  販売事業者（運営会社）
                </th>
                <td className="text-ink-light px-6 py-4">株式会社ヒトコト</td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="text-ink w-1/3 bg-gray-50 px-6 py-4 font-bold">運営統括責任者</th>
                <td className="text-ink-light px-6 py-4">代表取締役　小南 優作</td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="text-ink w-1/3 bg-gray-50 px-6 py-4 font-bold">ブランド / 屋号</th>
                <td className="text-ink-light px-6 py-4">SoyStories（ソイストーリーズ）</td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="text-ink w-1/3 bg-gray-50 px-6 py-4 font-bold">所在地</th>
                <td className="text-ink-light px-6 py-4">
                  〒810-0022
                  <br />
                  福岡県福岡市中央区薬院2丁目2-24 チサンマンション第3博多 1F
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="text-ink w-1/3 bg-gray-50 px-6 py-4 font-bold">電話番号</th>
                <td className="text-ink-light px-6 py-4">092-231-0677</td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="text-ink w-1/3 bg-gray-50 px-6 py-4 font-bold">メールアドレス</th>
                <td className="text-ink-light px-6 py-4">y.kominami@hitokoto1.co.jp</td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="text-ink w-1/3 bg-gray-50 px-6 py-4 font-bold">販売価格</th>
                <td className="text-ink-light px-6 py-4">
                  各ご案内ページに記載の卸価格・OEM料金に基づきます（例：業務用バルク 1L
                  税別2,000円／2L 税別4,000円、定番100mlカップ 税別300円、OEMプラン① 100mlカップ
                  税別286円、OEMプラン② 初期試作開発費
                  税別30,000円＋試作実費）。無料試食サンプルは商品代無料です。
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="text-ink w-1/3 bg-gray-50 px-6 py-4 font-bold">
                  商品代金以外の必要料金
                </th>
                <td className="text-ink-light px-6 py-4">
                  消費税（食品は軽減税率8%、送料・資材費・開発費は標準税率10%）、ヤマト運輸クール冷凍便送料（無料試食サンプルは着払い）、銀行振込時の振込手数料。
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="text-ink w-1/3 bg-gray-50 px-6 py-4 font-bold">
                  お支払い方法・時期
                </th>
                <td className="text-ink-light px-6 py-4">
                  納品月の月末締め・翌月末払い（ご請求書払い・銀行振込）。
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="text-ink w-1/3 bg-gray-50 px-6 py-4 font-bold">商品の引渡時期</th>
                <td className="text-ink-light px-6 py-4">
                  通常の業務用卸はご注文確定後5営業日前後、無料試食サンプルは通常2営業日以内に発送いたします。OEM製造はご合意・資材受領後、約2週間〜1か月が目安となります。
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="text-ink w-1/3 bg-gray-50 px-6 py-4 font-bold">
                  返品・交換・キャンセル
                </th>
                <td className="text-ink-light px-6 py-4">
                  冷凍食品の性質上、出荷後のお客様都合による返品・交換はお受けできません。配送中の破損・溶け・品違いや当社責による不良があった場合は、到着後速やかにご連絡いただければ当社負担にて代替品を発送いたします。
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="text-ink w-1/3 bg-gray-50 px-6 py-4 font-bold">事業内容</th>
                <td className="text-ink-light px-6 py-4">
                  <ul className="list-disc space-y-1 pl-5">
                    <li>ヴィーガン＆グルテンフリー スイーツ・クラフトアイスの製造・販売</li>
                    <li>飲食店・宿泊施設向け業務用卸売および小ロットOEM製造</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  );
}
