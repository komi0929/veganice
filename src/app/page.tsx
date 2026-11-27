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

export default function Home() {
  return (
    <>
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
