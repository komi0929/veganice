export const metadata = {
  title: "プライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <main className="container mx-auto max-w-3xl px-5 py-24 md:px-8">
      <h1 className="mb-8 font-serif text-3xl font-bold">プライバシーポリシー</h1>
      <div className="text-ink-light space-y-6 text-sm leading-relaxed md:text-base">
        <p>
          SoyStories（以下、「当方」）は、お客様の個人情報の保護を最も重要な責務と認識し、本プライバシーポリシーに則り、個人情報の適切な取り扱いと保護に努めます。
        </p>

        <h2 className="text-ink mt-8 text-xl font-bold">1. 個人情報の収集</h2>
        <p>
          当方は、お問い合わせフォーム等のご利用に際し、会社名、氏名、メールアドレス、電話番号などの個人情報をご提供いただく場合があります。
        </p>

        <h2 className="text-ink mt-8 text-xl font-bold">2. 個人情報の利用目的</h2>
        <p>お預かりした個人情報は、以下の目的で利用いたします。</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>お問い合わせへの返信およびサンプルのご案内・発送</li>
          <li>商品・サービスに関する情報提供（ご希望された場合）</li>
          <li>サービス向上のための統計データの作成（個人を特定できない形式）</li>
        </ul>

        <h2 className="text-ink mt-8 text-xl font-bold">3. 個人情報の第三者提供</h2>
        <p>
          当方は、法令に基づく場合を除き、事前にお客様の同意を得ることなく、個人情報を第三者に提供いたしません。
        </p>

        <h2 className="text-ink mt-8 text-xl font-bold">4. アクセス解析ツールについて</h2>
        <p>
          当サイトでは、サービスの向上・改善のために Google Analytics
          などのアクセス解析ツールを使用しています。これらはトラフィックデータの収集のためにCookieを使用していますが、データは匿名で収集されており、個人を特定するものではありません。
        </p>

        <h2 className="text-ink mt-8 text-xl font-bold">5. お問い合わせ窓口</h2>
        <p>
          本ポリシーに関するお問い合わせは、当サイトの「お問い合わせフォーム」よりお願いいたします。
        </p>
      </div>
    </main>
  );
}
