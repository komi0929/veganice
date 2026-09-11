import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
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
        {/* ① ファーストビュー (Hero) */}
        <HeroSection />

        {/* ② 問題提起 (Problem & Veto Vote) */}
        <ProblemSection />

        {/* ③ ベネフィット (導入後の変化) */}
        <BenefitSection />

        {/* ④ 実績・事例 (Social Proof) */}
        <SocialProofSection />

        {/* ⑤ 選ばれる理由 (Reason to Believe) */}
        <ReasonSection />

        {/* ⑥ 商品ラインナップ & B2B取引条件 */}
        <ProductsSection />

        {/* ⑦ FAQ */}
        <FAQSection />

        {/* ⑧ クロージングCTA & フォーム */}
        <ContactForm />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
