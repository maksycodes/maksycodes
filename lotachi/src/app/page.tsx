import { Nav } from "@/components/Nav";
import { Hero } from "@/components/home/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { WhySection } from "@/components/home/WhySection";
import { ComingSoonSection } from "@/components/home/ComingSoonSection";
import { TrustSection } from "@/components/home/TrustSection";
import { ModelTransparencySection } from "@/components/home/ModelTransparencySection";
import { EarlyAccessSection } from "@/components/home/EarlyAccessSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <ProblemSection />
        <WhySection />
        <ComingSoonSection />
        <TrustSection />
        <ModelTransparencySection />
        <EarlyAccessSection />
      </main>
      <Footer />
    </>
  );
}
