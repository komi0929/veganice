import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CoreValueSection from "./components/CoreValueSection";
import SocialProofSection from "./components/SocialProofSection";
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

        {/* ② 3つの「問題→解決」— 米粉製法・発酵素材・専用工房 */}
        <CoreValueSection />

        {/* ③ 導入実績・お客様の声 */}
        <SocialProofSection />

        {/* ④ プロダクト情報（フレーバー・仕様） */}
        <ProductsSection />

        {/* ⑤ 競合比較 */}
        <ComparisonSection />

        {/* ⑥ 導入価値 */}
        <EconomicsSection />

        {/* ⑦ 導入フロー */}
        <HowItWorksSection />

        {/* ⑧ FAQ */}
        <FAQSection />

        {/* ⑨ お問い合わせ */}
        <ContactForm />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
