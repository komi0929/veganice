import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://soystories.com"),
  title: {
    default: "SoyStories | 業務用ヴィーガン米粉アイス — 福岡から全国へ",
    template: "%s | SoyStories",
  },
  description:
    "乳・卵・小麦・白砂糖不使用のヴィーガン米粉アイス。コンタミネーションなし、仕込み不要、4Lの小ロットから仕入れ可能。飲食店のアレルギー・ヴィーガン対応に。福岡・薬院のSoyStoriesが製造・卸売。",
  keywords: [
    "ヴィーガンアイス",
    "米粉アイス",
    "業務用アイス",
    "アレルゲンフリー",
    "乳卵小麦不使用",
    "グルテンフリー",
    "SoyStories",
    "ソイストーリーズ",
    "福岡",
    "薬院",
    "飲食店向け",
    "卸売",
    "プラントベース",
    "ヴィーガンスイーツ",
  ],
  openGraph: {
    title: "SoyStories | 業務用ヴィーガン米粉アイス",
    description:
      "乳・卵・小麦フリー。仕込み不要、4Lの小ロットから。直営店HappyCow 5.0・Google 200件超の実証済みクラフトジェラートを、あなたのお店に。",
    type: "website",
    locale: "ja_JP",
    url: "https://soystories.com",
    siteName: "SoyStories",
    images: [
      {
        url: "/images/soystories_icecream02358icecream.jpg",
        width: 1200,
        height: 630,
        alt: "Soy stories プラントベース・クラフトジェラート",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoyStories | 業務用ヴィーガン米粉アイス",
    description:
      "乳・卵・小麦フリー。仕込み不要、4Lの小ロットから。飲食店のアレルギー・ヴィーガン対応に。",
    images: ["/images/soystories_icecream02358icecream.jpg"],
  },
  alternates: {
    canonical: "https://soystories.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ── JSON-LD 構造化データ ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://soystories.com/#organization",
      name: "SoyStories",
      alternateName: "ソイストーリーズ",
      url: "https://soystories.com",
      logo: "https://soystories.com/images/jp_logo.png",
      sameAs: [
        "https://www.instagram.com/soystories_yakuin",
        "https://www.happycow.net/reviews/soystories-fukuoka-289915",
      ],
      description:
        "福岡・薬院発のヴィーガン米粉ジェラート専門店。乳・卵・小麦・白砂糖不使用、専用工房で製造。直営店舗の販売と業務用卸売を展開。",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+81-92-231-0677",
        email: "soystoriesyakuin@gmail.com",
        contactType: "sales",
        availableLanguage: ["Japanese", "English"],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://soystories.com/#store",
      name: "SoyStories 薬院店",
      image: "https://soystories.com/images/store_actual.png",
      url: "https://soystories.com",
      telephone: "+81-92-231-0677",
      address: {
        "@type": "PostalAddress",
        addressLocality: "福岡市中央区",
        addressRegion: "福岡県",
        postalCode: "810-0022",
        addressCountry: "JP",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.5764,
        longitude: 130.3952,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "200",
        bestRating: "5",
        worstRating: "1",
      },
      parentOrganization: {
        "@id": "https://soystories.com/#organization",
      },
    },
    {
      "@type": "Product",
      "@id": "https://soystories.com/#product",
      name: "SoyStories ヴィーガン米粉ジェラート（業務用卸売）",
      description:
        "乳・卵・小麦・白砂糖不使用の植物性ジェラート（氷菓）。乳化安定剤・増粘剤・着色料も不使用。専用工房で製造しコンタミネーションなし。8フレーバー、冷凍1Lまたは2L容器、最小4Lから卸売対応。",
      brand: { "@id": "https://soystories.com/#organization" },
      category: "業務用氷菓・ジェラート",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "JPY",
        eligibleQuantity: {
          "@type": "QuantitativeValue",
          minValue: 4,
          unitCode: "LTR",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://soystories.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "ヴィーガンでないお客様にも喜ばれますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "はい。直営店では「こっちのアイスのほうが好き」とおっしゃるノンビーガンのお客様が多数いらっしゃいます。米粉を使った独自の製法で、植物性とは思えないなめらかさとコクを実現しており、HappyCow 5.0・Googleレビュー200件超という評価がその証拠です。",
          },
        },
        {
          "@type": "Question",
          name: "アレルゲン対応の詳細を教えてください",
          acceptedAnswer: {
            "@type": "Answer",
            text: "全商品、乳・卵・小麦・白砂糖不使用です。乳化安定剤・増粘剤・着色料も使用していません。乳・卵・小麦を一切扱わない専用の製造ラインで製造しており、コンタミネーション（混入）のリスクがありません。フレーバーにより大豆・アーモンド・もも・りんごを含みます。",
          },
        },
        {
          "@type": "Question",
          name: "最小ロットと発注単位は？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "最小4リットル分（1L×4本 または 2L×2本）からご注文いただけます。フレーバーは8種から自由に組み合わせ可能です。",
          },
        },
        {
          "@type": "Question",
          name: "保管条件を教えてください",
          acceptedAnswer: {
            "@type": "Answer",
            text: "−18℃以下で冷凍保存してください。冷凍食品であるため、食品表示基準上、賞味期限の表示義務がありません。適切な温度管理のもとでは品質が長期間維持され、廃棄ロスの心配がありません。",
          },
        },
        {
          "@type": "Question",
          name: "注文から届くまでどのくらいですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ご注文確定後、通常5営業日以内にクール冷凍便（ヤマト運輸）で全国発送いたします。初回のサンプルご注文もお気軽にどうぞ。",
          },
        },
        {
          "@type": "Question",
          name: "支払い方法は？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "銀行振込でのお支払いに対応しております。継続的なお取引の場合は、請求書払い（月末締め翌月払い等）もご相談いただけます。",
          },
        },
        {
          "@type": "Question",
          name: "OEMや専用フレーバーの開発は可能ですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ご相談いただけます。お店のコンセプトに合わせたオリジナルフレーバーの開発や、専用パッケージでのOEM製造もお問い合わせください。",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&family=Noto+Serif+JP:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-ink flex min-h-screen flex-col">
        {children}
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX"} />
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}
