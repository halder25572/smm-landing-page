import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { PaymentSection } from "@/components/home/PaymentSection";
import { PricingSection } from "@/components/home/PricingSection";
import { AdvantagesSection } from "@/components/home/AdvantagesSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <ProcessSection />
        <PaymentSection />
        <PricingSection />
        <AdvantagesSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
