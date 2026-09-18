export const metadata = {
  title: "運営会社",
};

export default function CompanyPage() {
  return (
    <main className="container mx-auto max-w-3xl px-5 py-24 md:px-8">
      <h1 className="mb-8 font-serif text-3xl font-bold">運営会社・事業概要</h1>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full border-collapse text-left text-sm md:text-base">
          <tbody>
            <tr className="border-b border-gray-100">
              <th className="text-ink w-1/3 bg-gray-50 px-6 py-4 font-bold">屋号 / 運営</th>
              <td className="text-ink-light px-6 py-4">SoyStories（ソイストーリーズ）</td>
            </tr>
            <tr className="border-b border-gray-100">
              <th className="text-ink w-1/3 bg-gray-50 px-6 py-4 font-bold">所在地</th>
              <td className="text-ink-light px-6 py-4">
                〒810-0022
                <br />
                福岡県福岡市中央区薬院（※詳細は取引時に開示）
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <th className="text-ink w-1/3 bg-gray-50 px-6 py-4 font-bold">事業内容</th>
              <td className="text-ink-light px-6 py-4">
                <ul className="list-disc space-y-1 pl-5">
                  <li>ヴィーガン米粉アイスの製造・販売</li>
                  <li>飲食店向け卸売事業</li>
                  <li>アレルギー対応メニューの開発支援</li>
                </ul>
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <th className="text-ink w-1/3 bg-gray-50 px-6 py-4 font-bold">お問い合わせ先</th>
              <td className="text-ink-light px-6 py-4">
                本サイトの「お問い合わせフォーム」よりご連絡ください。
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
