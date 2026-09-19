import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PainPointSection from "./components/PainPointSection";
import BenefitSection from "./components/BenefitSection";
import ProductsSection from "./components/ProductsSection";
import SocialProofSection from "./components/SocialProofSection";
import EconomicsSection from "./components/EconomicsSection";
import ComparisonSection from "./components/ComparisonSection";
import ProblemSection from "./components/ProblemSection";
import ReasonSection from "./components/ReasonSection";
import SeasonalMenuSection from "./components/SeasonalMenuSection";
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

        {/* ③ 課題の解決策 — 3つのベネフィット */}
        <BenefitSection />

        {/* ④ ソリューション — 業務用スペック・フレーバー・納品仕様 */}
        <ProductsSection />

        {/* ⑤ 社会的証明 — 直営店の実食評価・感情エピソード */}
        <SocialProofSection />

        {/* ⑥ 利益シミュレーター — インタラクティブ計算ツール */}
        <EconomicsSection />

        {/* ⑦ 「自作 vs SoyStories」比較テーブル */}
        <ComparisonSection />

        {/* ⑧ ストーリー — 直営店の反響→専用工場設立 */}
        <ProblemSection />

        {/* ⑨ 品質保証 — 素材・専用工場・無添加 */}
        <ReasonSection />

        {/* ⑩ 季節メニュー提案 — 通年デザートのポジショニング */}
        <SeasonalMenuSection />

        {/* ⑪ 導入フロー — かんたん3ステップ */}
        <HowItWorksSection />

        {/* ⑫ 導入事例 — 実績が取れ次第データ追加で表示 */}
        <CaseStudySection />

        {/* ⑬ FAQ — B2B専用（12問） */}
        <FAQSection />

        {/* ⑭ お問い合わせ */}
        <ContactForm />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
