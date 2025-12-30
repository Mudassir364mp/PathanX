import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import TechSection from "@/components/TechSection";
import ServicesSection from "@/components/ServicesSection";
import FutureProducts from "@/components/FutureProducts";
import CTASection from "@/components/CTASection";
import ConsultationCTA from "@/components/ConsultationCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-navy selection:bg-brand-blue selection:text-brand-navy">
      <Hero />
      <IntroSection />
      <TechSection />
      <ConsultationCTA />
      <ServicesSection />
      <FutureProducts />
      <CTASection />
    </main>
  );
}
