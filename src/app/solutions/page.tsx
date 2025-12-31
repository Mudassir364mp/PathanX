import PageHeader from "@/components/PageHeader";
import SolutionsView from "@/components/SolutionsView";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enterprise Automation & Smart Technology Solutions",
    description: "Explore Pathan X smart automation, AI, cyber security and digital infrastructure solutions for modern businesses.",
};

export default function SolutionsPage() {
    return (
        <main className="min-h-screen bg-brand-navy">
            <PageHeader
                title="Solutions & Services"
                subtitle="Tailored strategies and systems to elevate your business or lifestyle."
            />

            <section className="py-24">
                <SolutionsView />
            </section>
        </main>
    );
}
