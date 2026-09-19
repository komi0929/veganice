import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PainPointSection from "./components/PainPointSection";
import BenefitSection from "./components/BenefitSection";
import ProductsSection from "./components/ProductsSection";
import EconomicsSection from "./components/EconomicsSection";
import SocialProofSection from "./components/SocialProofSection";
import ProblemSection from "./components/ProblemSection";
import ReasonSection from "./components/ReasonSection";
import HowItWorksSection from "./components/HowItWorksSection";
import CaseStudySection from "./components/CaseStudySection";
import FAQSection from "./components/FAQSection";
import ContactForm from "./components/ContactForm";
import FloatingCTA from "./components/FloatingCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ① ファーストビュー — B2B明示・実証済みの信頼 */}
        <HeroSection />

        {/* ② 飲食店の5大課題に共感 */}
        <PainPointSection />

        {/* ②-b 課題の解決策 — 3つのベネフィット */}
        <BenefitSection />

        {/* ③ ソリューション — 業務用スペック・フレーバー・納品仕様 */}
        <ProductsSection />

        {/* ④ 社会的証明 — 「あなたの店でもこうなる」直営店の実食評価 */}
        <SocialProofSection />

        {/* ⑤ 経済性 — 原価・粗利シミュレーション */}
        <EconomicsSection />

        {/* ⑥ ストーリー — 直営店の反響→専用工場設立（凝縮版） */}
        <ProblemSection />

        {/* ⑦ 品質保証 — 素材・専用工場・無添加 */}
        <ReasonSection />

        {/* ⑧ 導入フロー — かんたん3ステップ */}
        <HowItWorksSection />

        {/* ⑧-b 導入事例 — 卸売実績が取れ次第、CaseStudySectionのデータ配列に追加するだけで表示される */}
        <CaseStudySection />

        {/* ⑨ FAQ — B2B専用 */}
        <FAQSection />

        {/* ⑩ お問い合わせ */}
        <ContactForm />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
