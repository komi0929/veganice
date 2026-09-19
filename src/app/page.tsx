import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PainPointSection from "./components/PainPointSection";
import BenefitSection from "./components/BenefitSection";
import SocialProofSection from "./components/SocialProofSection";
import TextureProofSection from "./components/TextureProofSection";
import ProductsSection from "./components/ProductsSection";
import ComparisonSection from "./components/ComparisonSection";
import EconomicsSection from "./components/EconomicsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import FAQSection from "./components/FAQSection";
import ContactForm from "./components/ContactForm";
import FloatingCTA from "./components/FloatingCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ① ファーストビュー */}
        <HeroSection />

        {/* ② 飲食店のペインポイント */}
        <PainPointSection />

        {/* ③ 課題の解決策 — このアイスでなければならない理由 */}
        <BenefitSection />

        {/* ④ 実績とストーリー（旧SocialProof + Problem統合） */}
        <SocialProofSection />

        {/* ⑤ 証拠 — 「固くならない」技術的裏付け */}
        <TextureProofSection />

        {/* ⑥ プロダクト情報（フレーバー・仕様） */}
        <ProductsSection />

        {/* ⑦ 競合比較 — 安い代替品 vs SoyStories */}
        <ComparisonSection />

        {/* ⑧ 導入価値（旧Economics: 原価非公開・価値訴求） */}
        <EconomicsSection />

        {/* ⑨ 導入フロー */}
        <HowItWorksSection />

        {/* ⑩ FAQ */}
        <FAQSection />

        {/* ⑪ お問い合わせ */}
        <ContactForm />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
