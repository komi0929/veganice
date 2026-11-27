import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.soystories.cafe"),
  title: {
    default: "SoyStories｜業務用プラントベース クラフトアイスクリーム（福岡から全国へ）",
    template: "%s | SoyStories",
  },
  description:
    "乳・卵・小麦・白砂糖不使用のプラントベース クラフトアイスクリーム。乳・卵・小麦を持ち込まない専用工房製造、仕込み不要、4Lの小ロットから仕入れ可能。飲食店のアレルギー・ヴィーガン対応に。福岡のSoyStoriesが製造・卸売。",
  keywords: [
    "クラフトアイス",
    "業務用プラントベース クラフトアイスクリーム",
    "乳卵小麦不使用デザート",
    "乳卵小麦不使用",
    "白砂糖不使用",
    "グルテンフリー",
    "SoyStories",
    "ソイストーリーズ",
    "福岡",
    "飲食店向け",
    "卸売",
    "プラントベース",
    "ヴィーガンスイーツ",
  ],
  openGraph: {
    title: "SoyStories | 業務用プラントベース クラフトアイスクリーム",
    description:
      "乳・卵・小麦・白砂糖不使用。4Lの小ロットから。福岡の直営店HappyCow 5.0・Google ★4.7（270件以上）の実証済みクラフトアイスを、あなたのお店に。",
    type: "website",
    locale: "ja_JP",
    url: "https://www.soystories.cafe",
    siteName: "SoyStories",
    images: [
      {
        url: "/images/soystories_icecream02358icecream.jpg",
        width: 1200,
        height: 630,
        alt: "SoyStories プラントベース クラフトアイスクリーム",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoyStories | 業務用プラントベース クラフトアイスクリーム",
    description:
      "乳・卵・小麦・白砂糖不使用。4Lの小ロットから。レストラン・カフェ・菓子店・宿泊施設のデザート対応に。",
    images: ["/images/soystories_icecream02358icecream.jpg"],
  },
  alternates: {
    canonical: "https://www.soystories.cafe",
  },
  verification: {
    google: "-ubkjleHHXsoPsPxZLF_mNjjDHzlaJldcstg3VbPy5U",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

/* ── JSON-LD 構造化データ ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.soystories.cafe/#organization",
      name: "SoyStories",
      alternateName: "ソイストーリーズ",
      url: "https://www.soystories.cafe",
      logo: "https://www.soystories.cafe/images/logo_square.png",
      sameAs: [
        "https://www.instagram.com/soystories_yakuin",
        "https://www.happycow.net/reviews/soy-stories-fukuoka-298687",
        "https://www.soystories.jp/b2b.html",
        "https://www.soystories.jp/oem.html",
        "https://en.soystories.cafe/",
        "https://www.instagram.com/hitokoto.sogu/",
      ],
      areaServed: { "@type": "Country", name: "Japan" },
      description:
        "福岡発のヴィーガン＆グルテンフリー スイーツ専門店。乳・卵・小麦・白砂糖不使用のクラフトアイスを専用工房で製造し、福岡の実店舗販売と全国の飲食店向け業務用卸・小ロットOEMを展開。",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+81-92-231-0677",
        email: "y.kominami@hitokoto1.co.jp",
        contactType: "sales",
        availableLanguage: ["Japanese", "English"],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.soystories.cafe/#store",
      name: "SoyStories",
      image: "https://www.soystories.cafe/images/store_actual.png",
      url: "https://www.soystories.jp/",
      telephone: "+81-92-231-0677",
      address: {
        "@type": "PostalAddress",
        streetAddress: "薬院2丁目2-24 チサンマンション第3博多 1F",
        addressLocality: "福岡市中央区",
        addressRegion: "福岡県",
        postalCode: "810-0022",
        addressCountry: "JP",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.5818,
        longitude: 130.3967,
      },
      parentOrganization: {
        "@id": "https://www.soystories.cafe/#organization",
      },
    },
    {
      "@type": "Product",
      "@id": "https://www.soystories.cafe/#product",
      name: "SoyStories プラントベース クラフトアイスクリーム（業務用卸売）",
      description:
        "乳・卵・小麦・白砂糖不使用の植物性クラフトアイス（氷菓）。乳脂肪ゼロで後味が軽く、卵・乳・小麦を持ち込まない専用工房で製造。全11フレーバー、冷凍1L・2Lバルク容器（最小4L〜）および100ml個食カップ（最小60個〜）で卸売対応。",
      brand: { "@id": "https://www.soystories.cafe/#organization" },
      category: "業務用氷菓・クラフトアイス",
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
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
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
        {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
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
