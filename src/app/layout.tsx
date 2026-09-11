import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SoyStories 業務用卸売 | 和ヴィーガンジェラートで貴店のインバウンド売上を最大化",
  description:
    "福岡発の米粉ヴィーガンジェラート専門店SoyStoriesの業務用卸売サービス。乳・卵・小麦・白砂糖不使用。HappyCow Top Rated獲得。すくって添えるだけで高単価メニューが即完成。無料サンプル受付中。",
  keywords: "ヴィーガンジェラート, 業務用, 卸売, インバウンド, 飲食店, カフェ, ホテル, 米粉, アレルゲンフリー, SoyStories",
  openGraph: {
    title: "SoyStories 業務用卸売 | 和ヴィーガンジェラートでインバウンド対応",
    description: "すくって、添えるだけ。世界基準の和ヴィーガンジェラートを貴店のメニューに。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJP.variable} ${notoSansJP.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-ivory text-ink">
        {children}
      </body>
    </html>
  );
}
