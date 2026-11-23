import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://soystories.cafe"),
  title: {
    default: "SoyStories | 業務用プラントベース クラフトアイスクリーム — 福岡から全国へ",
    template: "%s | SoyStories",
  },
  description:
    "乳・卵・小麦・白砂糖不使用のプラントベース クラフトアイスクリーム。乳・卵・小麦を持ち込まない専用工房製造、仕込み不要、4Lの小ロットから仕入れ可能。飲食店のアレルギー・ヴィーガン対応に。福岡・薬院のSoyStoriesが製造・卸売。",
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
    "薬院",
    "飲食店向け",
    "卸売",
    "プラントベース",
    "ヴィーガンスイーツ",
  ],
  openGraph: {
    title: "SoyStories | 業務用プラントベース クラフトアイスクリーム",
    description:
      "乳・卵・小麦・白砂糖不使用。4Lの小ロットから。薬院の直営店HappyCow 5.0・Google ★4.7（270件以上）の実証済みクラフトアイスを、あなたのお店に。",
    type: "website",
    locale: "ja_JP",
    url: "https://soystories.cafe",
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
    canonical: "https://soystories.cafe",
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
      "@id": "https://soystories.cafe/#organization",
      name: "SoyStories",
      alternateName: "ソイストーリーズ",
      url: "https://soystories.cafe",
      logo: "https://soystories.cafe/images/logo_square.png",
      sameAs: [
        "https://www.instagram.com/soystories_yakuin",
        "https://www.happycow.net/reviews/soystories-fukuoka-289915",
      ],
      description:
        "福岡・薬院発のヴィーガン＆グルテンフリー スイーツ専門店。乳・卵・小麦・白砂糖不使用のクラフトアイスを専用工房で製造し、薬院の実店舗販売と全国の飲食店向け業務用卸・小ロットOEMを展開。",
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
      "@id": "https://soystories.cafe/#store",
      name: "SoyStories 薬院店",
      image: "https://soystories.cafe/images/store_actual.png",
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
        "@id": "https://soystories.cafe/#organization",
      },
    },
    {
      "@type": "Product",
      "@id": "https://soystories.cafe/#product",
      name: "SoyStories プラントベース クラフトアイスクリーム（業務用卸売）",
      description:
        "乳・卵・小麦・白砂糖不使用の植物性クラフトアイス（氷菓）。乳脂肪ゼロで後味が軽く、卵・乳・小麦を持ち込まない専用工房で製造。全11フレーバー、冷凍1L・2Lバルク容器（最小4L〜）および100ml個食カップ（最小60個〜）で卸売対応。",
      brand: { "@id": "https://soystories.cafe/#organization" },
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
    {
      "@type": "FAQPage",
      "@id": "https://soystories.cafe/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "ヴィーガンでないお客様にも喜ばれますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "はい。薬院の実店舗では「普通のアイスより好き」とおっしゃるヴィーガンではないお客様が多数いらっしゃいます。米粉を使った独自製法でシャリシャリ感のない滑らかな舌触りとコクを実現しており、HappyCow 5.0・Google口コミ270件以上（★4.7）という評価がその裏付けです。",
          },
        },
        {
          "@type": "Question",
          name: "アレルゲン対応の詳細を教えてください",
          acceptedAnswer: {
            "@type": "Answer",
            text: "全商品、乳・卵・小麦・白砂糖不使用です。卵・乳・小麦を一切持ち込まない専用の工房で製造しているため、乳・卵・小麦のアレルギーの方にも安心してお召し上がりいただけます。工房への持ち込みがあるのはナッツ類（アーモンド・くるみ・カシューナッツ・落花生等）のみで、フレーバーにより大豆・アーモンド（ナッツ使用）・もも・りんごを含みます。",
          },
        },
        {
          "@type": "Question",
          name: "ベースの植物性ミルクは何を使っていますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "抹茶・ほうじ茶・バニラココナッツ・UMAMIバニラ・アールグレイは豆乳ベース、ショコラはアーモンドミルクベース、フルーツ系5種（マンゴー・ミックスベリー・もも・りんご・ドラゴンフルーツ）は果実とココナッツがベースです。豆乳不使用の味もお選びいただけます。",
          },
        },
        {
          "@type": "Question",
          name: "最小ロットと発注単位は？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "業務用バルクは最小4リットル分（1L×4本 または 2L×2本）から、100ml個食カップは最小60個からご注文いただけます。フレーバーは11種から自由に組み合わせ可能です。",
          },
        },
        {
          "@type": "Question",
          name: "保管条件を教えてください",
          acceptedAnswer: {
            "@type": "Answer",
            text: "−18℃以下で冷凍保存してください。アイスクリーム類（氷菓）は食品表示基準上、賞味期限の表示義務がない冷凍品です。適切な温度管理のもとで品質が長期間維持され、日持ちによる廃棄ロスが出ません。",
          },
        },
        {
          "@type": "Question",
          name: "注文から届くまでどのくらいですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ご注文確定後、通常5営業日前後でクール冷凍便（ヤマト運輸）にて全国発送いたします。初回の無料試食サンプル（6個）は通常2営業日以内に発送いたします。",
          },
        },
        {
          "@type": "Question",
          name: "支払い方法は？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "納品月の月末締め・翌月末払い（請求書による銀行振込）、または専用発注ポータルでのクレジットカード決済に対応しております。",
          },
        },
        {
          "@type": "Question",
          name: "OEMや専用フレーバーの開発は可能ですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "はい。定番フレーバーにお店のロゴ丸シールを貼るプラン（開発費0円・1味60個〜）や、お店の食材を使ったオリジナル味開発（1味60個／6L〜）を承っております。",
          },
        },
      ],
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
