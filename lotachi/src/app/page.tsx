import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { WhyLotachi } from "@/components/WhyLotachi";
import { HowItWorks } from "@/components/HowItWorks";
import { ProviderSection } from "@/components/ProviderSection";
import { ModelWaitlistSection } from "@/components/ModelWaitlistSection";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <WhyLotachi />
        <HowItWorks />
        <ProviderSection />
        <ModelWaitlistSection />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
