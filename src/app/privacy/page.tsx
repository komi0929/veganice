import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "プライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-3xl px-5 py-24 md:px-8">
        <h1 className="mb-8 font-serif text-3xl font-bold">プライバシーポリシー</h1>
        <div className="text-ink-light space-y-6 text-sm leading-relaxed md:text-base">
          <p>
            株式会社ヒトコト（ブランド・屋号：SoyStories、以下「当社」）は、お客様の個人情報の保護を重要な責務と認識し、本プライバシーポリシーに則り、個人情報の適切な取り扱いと保護に努めます。
          </p>

          <h2 className="text-ink mt-8 text-xl font-bold">1. 個人情報の収集</h2>
          <p>
            当社は、お問い合わせフォームや無料試食サンプルお申し込み等のご利用に際し、店舗名・会社名、ご担当者名、郵便番号・ご住所、メールアドレス、お電話番号などの個人情報をご提供いただく場合があります。
          </p>

          <h2 className="text-ink mt-8 text-xl font-bold">2. 個人情報の利用目的</h2>
          <p>お預かりした個人情報は、以下の目的で利用いたします。</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>お問い合わせへの回答、無料サンプルおよび商品の発送・ご請求連絡</li>
            <li>お取引に関するご案内（ご希望された場合）</li>
            <li>サービス向上のための統計データの作成（個人を特定できない形式）</li>
          </ul>

          <h2 className="text-ink mt-8 text-xl font-bold">3. 個人情報の第三者提供</h2>
          <p>
            当社は、配送業務の委託（ヤマト運輸株式会社等）および法令に基づく場合を除き、事前にお客様の同意を得ることなく、個人情報を第三者に提供いたしません。
          </p>

          <h2 className="text-ink mt-8 text-xl font-bold">4. アクセス解析ツールについて</h2>
          <p>
            当サイトでは、サービスの向上・改善のために Google Analytics
            などのアクセス解析ツールを使用しています。これらはトラフィックデータの収集のためにCookieを使用していますが、データは匿名で収集されており、個人を特定するものではありません。
          </p>

          <h2 className="text-ink mt-8 text-xl font-bold">5. 事業者情報・お問い合わせ窓口</h2>
          <p>
            個人情報の取り扱いに関するお問い合わせは、下記窓口または当サイトのお問い合わせフォームよりお願いいたします。
          </p>
          <div className="rounded-2xl border border-stone-200/80 bg-[#fafaf8] p-5 text-sm leading-relaxed">
            <p className="text-ink font-bold">株式会社ヒトコト（SoyStories）</p>
            <p className="mt-1">個人情報保護管理者：代表取締役 小南 優作</p>
            <p>〒810-0022 福岡県福岡市中央区薬院2丁目2-24 チサンマンション第3博多 1F</p>
            <p>TEL：092-231-0677 ／ E-mail：y.kominami@hitokoto1.co.jp</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
