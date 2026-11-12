import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/global";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/home/Hero";
import { ChiChiHowItWorksSection } from "@/components/home/ChiChiHowItWorksSection";
import { ComingSoonSection } from "@/components/home/ComingSoonSection";
import { WhyModelsSection, WhyProvidersSection } from "@/components/home/WhySection";
import { ProviderProblemSection } from "@/components/home/ProviderProblemSection";
import { TrustSection } from "@/components/home/TrustSection";
import { ModelTransparencySection } from "@/components/home/ModelTransparencySection";
import { WhereWeAreSection } from "@/components/home/WhereWeAreSection";
import { FounderSection } from "@/components/home/FounderSection";
import { EarlyAccessSection } from "@/components/home/EarlyAccessSection";
import { Footer } from "@/components/Footer";

export const metadata = pageMetadata("/", `${siteConfig.name} — ${siteConfig.tagline}`, siteConfig.description);

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
        <WhereWeAreSection />
        <FounderSection />
        <EarlyAccessSection />
      </main>
      <Footer />
    </>
  );
}
