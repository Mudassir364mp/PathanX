import PageHeader from "@/components/PageHeader";
import TechnologiesList from "@/components/TechnologiesList";

export const metadata = {
    title: "Technologies | PATHAN X INDUSTRY",
    description: "Explore our core technologies: AI, Automation, Smart Hardware, and Cyber Security.",
};

export default function TechnologiesPage() {
    return (
        <main className="min-h-screen bg-brand-navy">
            <PageHeader
                title="Our Technologies"
                subtitle="The building blocks of the future. Engineered for performance, security, and scale."
            />

            <section className="py-24">
                <TechnologiesList />
            </section>
        </main>
    );
}
