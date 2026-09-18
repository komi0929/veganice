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
      "乳・卵・小麦フリー。仕込み不要、4Lの小ロットから。すべてのお客様に出せるアイスを、あなたのお店に。",
    type: "website",
    locale: "ja_JP",
    url: "https://soystories.com",
    siteName: "SoyStories",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoyStories | 業務用ヴィーガン米粉アイス",
    description:
      "乳・卵・小麦フリー。仕込み不要、4Lの小ロットから。飲食店のアレルギー・ヴィーガン対応に。",
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
      "@id": "https://soystories.com/#org",
      name: "SoyStories（ソイストーリーズ）",
      url: "https://soystories.com",
      sameAs: [
        "https://www.instagram.com/soystories_yakuin",
        "https://www.happycow.net/reviews/soystories-fukuoka-289915",
      ],
      description:
        "福岡・薬院発のヴィーガン米粉アイス専門店。乳・卵・小麦・白砂糖不使用。店舗販売と業務用卸売を展開。",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://soystories.com/#store",
      name: "SoyStories 薬院店",
      image: "https://soystories.com/images/dummy_store_front.jpg",
      url: "https://soystories.com",
      telephone: "",
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
      parentOrganization: { "@id": "https://soystories.com/#org" },
    },
    {
      "@type": "Product",
      "@id": "https://soystories.com/#product",
      name: "SoyStories ヴィーガン米粉アイス（業務用）",
      description:
        "乳・卵・小麦・白砂糖不使用。コンタミネーションなしの専用工房で製造。8フレーバーから選択可能。冷凍1Lまたは2L容器、最小4Lから仕入れ可能。",
      brand: { "@id": "https://soystories.com/#org" },
      category: "業務用アイスクリーム",
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
          name: "非ヴィーガンのお客様が食べても美味しいですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "はい。実際に「こっちのアイスのほうが好き」とおっしゃるノンビーガンのお客様も多くいらっしゃいます。米粉を使った独自の製法で、植物性とは思えないなめらかさとコクを実現しています。",
          },
        },
        {
          "@type": "Question",
          name: "アレルギー対応の詳細を教えてください",
          acceptedAnswer: {
            "@type": "Answer",
            text: "全商品、乳・卵・小麦・白砂糖不使用です。乳化安定剤・増粘剤・着色料も使用していません。大豆を使用しておりますので、大豆アレルギーの方はご注意ください。",
          },
        },
        {
          "@type": "Question",
          name: "卸売の最小ロットはどのくらいですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "最小4リットル分（1L×4または2L×2）からご注文いただけます。価格の詳細はお問い合わせフォームよりどうぞ。",
          },
        },
        {
          "@type": "Question",
          name: "配送について教えてください",
          acceptedAnswer: {
            "@type": "Answer",
            text: "クール冷凍便で全国配送に対応しております。",
          },
        },
        {
          "@type": "Question",
          name: "メニュー提案やPOP素材のサポートはありますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "はい、導入店舗様にはメニュー提案やPOP素材のご提供もご相談いただけます。",
          },
        },
        {
          "@type": "Question",
          name: "オンラインストアでも購入できますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "はい、一般のお客様向けにはsoystories.comでアイスセットを販売しております。フレーバーを自由に選べるセットもご用意しています。",
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
