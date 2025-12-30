import PageHeader from "@/components/PageHeader";
import SolutionsView from "@/components/SolutionsView";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Solutions & Services | PATHAN X INDUSTRY",
    description: "Comprehensive solutions tailored for enterprise and smart living ecosystems.",
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
