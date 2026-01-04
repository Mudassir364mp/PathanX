import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import TechSection from "@/components/TechSection";
import ServicesSection from "@/components/ServicesSection";
import FutureProducts from "@/components/FutureProducts";
import CTASection from "@/components/CTASection";
import ConsultationCTA from "@/components/ConsultationCTA";
import TrustedNetworkCTA from "@/components/TrustedNetworkCTA";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Automation, AI & Cyber Security Company in India",
  description: "Pathan X Industry is a future-focused technology company delivering AI, automation, cyber security and smart digital systems for businesses and smart living environments.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-navy selection:bg-brand-blue selection:text-brand-navy">
      <Hero />
      <IntroSection />
      <TechSection />
      <ConsultationCTA />
      <ServicesSection />
      <FutureProducts />
      <TrustedNetworkCTA />
      <CTASection />
    </main>
  );
}
