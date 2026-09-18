import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PainPointSection from "./components/PainPointSection";
import ProblemSection from "./components/ProblemSection";
import BenefitSection from "./components/BenefitSection";
import SocialProofSection from "./components/SocialProofSection";
import ReasonSection from "./components/ReasonSection";
import ProductsSection from "./components/ProductsSection";
import FAQSection from "./components/FAQSection";
import ContactForm from "./components/ContactForm";
import FloatingCTA from "./components/FloatingCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ① ファーストビュー — 課題を突く */}
        <HeroSection />

        {/* ② 飲食店の課題に共感（PASのP・A） */}
        <PainPointSection />

        {/* ③ ソリューション — 商品で課題を解決 */}
        <ProductsSection />

        {/* ④ ブランドストーリー — なぜ製造を始めたのか？ */}
        <ProblemSection />

        {/* ⑤ 社会的証明 — 店舗での極めて高い評判（ストーリーの裏付け） */}
        <SocialProofSection />

        {/* ⑥ 素材のこだわり */}
        <ReasonSection />

        {/* ⑦ 導入メリット + B2B条件 */}
        <BenefitSection />

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
