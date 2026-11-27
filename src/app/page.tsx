import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CoreValueSection from "./components/CoreValueSection";
import EconomicsSection from "./components/EconomicsSection";
import ProductsSection from "./components/ProductsSection";
import SocialProofSection from "./components/SocialProofSection";
import ContactForm from "./components/ContactForm";
import FAQSection from "./components/FAQSection";
import OemCrossLinkBanner from "./components/OemCrossLinkBanner";
import FloatingCTA from "./components/FloatingCTA";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";

const homeFaq = {
  "@type": "FAQPage",
  "@id": "https://www.soystories.cafe/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "ヴィーガンでないお客様にも喜ばれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。福岡の実店舗では「普通のアイスより好き」とおっしゃるヴィーガンではないお客様が多数いらっしゃいます。米粉を使った独自製法でシャリシャリ感のない滑らかな舌触りとコクを実現しており、HappyCow 5.0・Google口コミ270件以上（★4.7）という評価がその裏付けです。",
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
        text: "−18℃以下で冷凍保存してください。アイスクリーム類（氷菓）は食品表示基準上、賞味期限の表示義務がない冷凍品です。適切な温度管理のもとで品質が長期間維持され、期限切れによる廃棄が出にくい設計です。",
      },
    },
    {
      "@type": "Question",
      name: "注文から届くまでどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ご注文確定後、通常5営業日前後でクール冷凍便（ヤマト運輸）にて全国発送いたします。初回の無料試食サンプル（6個）は原則お申し込みの翌日に発送いたします。",
      },
    },
    {
      "@type": "Question",
      name: "支払い方法は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "納品月の月末締め・翌月末払い（請求書による銀行振込）に統一しております。",
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
};

export default function Home() {
  return (
    <>
      <StructuredData graph={[homeFaq]} />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CoreValueSection />
        <EconomicsSection />
        <ProductsSection />
        <SocialProofSection />
        <ContactForm />
        <FAQSection />
        <OemCrossLinkBanner context="general" />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
