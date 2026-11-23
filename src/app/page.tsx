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
 * 総合トップLP（6段ビジュアルカタログ構成）
 * 1. FV → 2. 一皿のイメージ（写真4枚） → 3. 選ばれる3つの理由 → 4. 全11種の味＋取引条件
 * → 5. 無料6個サンプル申込 → 6. 実物口コミ＋折りたたみ創業背景＋FAQ＋OEM案内
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <EconomicsSection />
        <CoreValueSection />
        <ProductsSection />
        <ContactForm />
        <SocialProofSection />
        <FAQSection />
        <OemCrossLinkBanner context="general" />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
