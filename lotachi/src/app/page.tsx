import { Nav } from "@/components/Nav";
import { Hero } from "@/components/home/Hero";
import { ChiChiHowItWorksSection } from "@/components/home/ChiChiHowItWorksSection";
import { ComingSoonSection } from "@/components/home/ComingSoonSection";
import { WhyModelsSection, WhyProvidersSection } from "@/components/home/WhySection";
import { ProviderProblemSection } from "@/components/home/ProviderProblemSection";
import { TrustSection } from "@/components/home/TrustSection";
import { ModelTransparencySection } from "@/components/home/ModelTransparencySection";
import { FounderSection } from "@/components/home/FounderSection";
import { EarlyAccessSection } from "@/components/home/EarlyAccessSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <ChiChiHowItWorksSection />
        <ComingSoonSection />
        <WhyModelsSection />
        <ProviderProblemSection />
        <WhyProvidersSection />
        <TrustSection />
        <ModelTransparencySection />
        <FounderSection />
        <EarlyAccessSection />
      </main>
      <Footer />
    </>
  );
}
