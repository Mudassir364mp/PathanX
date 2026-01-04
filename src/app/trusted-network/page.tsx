import PageHeader from "@/components/PageHeader";
import TrustedNetworkList from "@/components/TrustedNetworkList";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Trusted Alliance Network | PATHAN X INDUSTRY",
    description: "Official network of verified technology partners, clients, and strategic allies of Pathan X Industry.",
};

export default function TrustedNetworkPage() {
    return (
        <main className="min-h-screen bg-brand-navy">
            <PageHeader
                title="Trusted Alliance Network"
                subtitle="A verified ecosystem of partners powering the future."
            />

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="mb-16 text-center max-w-3xl mx-auto">
                        <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4">Official Network</h2>
                        <p className="text-brand-silver text-lg leading-relaxed">
                            Pathan X Industry collaborates with forward-thinking organizations to build intelligent systems.
                            Below is our live registry of authorized partners and active client deployments.
                        </p>
                    </div>

                    <TrustedNetworkList />
                </div>
            </section>
        </main>
    );
}
