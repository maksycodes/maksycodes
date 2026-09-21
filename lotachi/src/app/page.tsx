import { Nav } from "@/components/Nav";
import { Hero } from "@/components/home/Hero";
import { ModelStepsSection } from "@/components/home/ModelStepsSection";
import { ProviderStepsSection } from "@/components/home/ProviderStepsSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { WhySection } from "@/components/home/WhySection";
import { TrustSection } from "@/components/home/TrustSection";
import { ComingSoonSection } from "@/components/home/ComingSoonSection";
import { EarlyAccessSection } from "@/components/home/EarlyAccessSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <ModelStepsSection />
        <ProviderStepsSection />
        <ProblemSection />
        <WhySection />
        <TrustSection />
        <ComingSoonSection />
        <EarlyAccessSection />
      </main>
      <Footer />
    </>
  );
}
