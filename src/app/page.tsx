import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import EconomicsSection from "./components/EconomicsSection";
import CoreValueSection from "./components/CoreValueSection";
import ProductsSection from "./components/ProductsSection";
import ContactForm from "./components/ContactForm";
import SocialProofSection from "./components/SocialProofSection";
import FAQSection from "./components/FAQSection";
import OemCrossLinkBanner from "./components/OemCrossLinkBanner";
import FloatingCTA from "./components/FloatingCTA";
import Footer from "./components/Footer";

/**
 * 総合トップLP
 * 1. FV → 2. 一皿のイメージ → 3. 選ばれる3つの理由
 * → 4. 薬院実店舗の物語・子どものエピソード・実物口コミ → 5. 全11種の味＋取引条件
 * → 6. 無料6個サンプル申込 → 7. よくある質問＋OEM案内
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <EconomicsSection />
        <CoreValueSection />
        <SocialProofSection />
        <ProductsSection />
        <ContactForm />
        <FAQSection />
        <OemCrossLinkBanner context="general" />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
