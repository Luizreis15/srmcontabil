import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { ValueProposition } from "@/components/ValueProposition";
import { ServicesPreview } from "@/components/ServicesPreview";
import { SwitchAccountant } from "@/components/SwitchAccountant";
import { FacilitateSection } from "@/components/FacilitateSection";
import { SocialProof } from "@/components/SocialProof";
import { OnlineSection } from "@/components/OnlineSection";
import { ContentSection } from "@/components/ContentSection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <ValueProposition />
        <ServicesPreview />
        <SwitchAccountant />
        <FacilitateSection />
        <SocialProof />
        <OnlineSection />
        <ContentSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default Index;
