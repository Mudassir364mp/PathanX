import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions | PATHAN X INDUSTRY",
    description: "Terms and conditions of use for Pathan X Industry services and website.",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-brand-navy">
            <PageHeader
                title="Terms & Conditions"
                subtitle="Governing policies for using Pathan X services."
            />

            <section className="py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-black/20 border border-brand-blue/10 p-10 rounded-2xl backdrop-blur-sm">
                        <div className="space-y-8 text-brand-silver text-lg leading-relaxed">
                            <p>
                                By accessing Pathan X Industry website, you agree to the following terms:
                            </p>

                            <ul className="list-disc pl-6 space-y-4 marker:text-brand-blue">
                                <li>
                                    Pathan X Industry provides technology development, automation, cyber security, and digital system solutions.
                                </li>
                                <li>
                                    All content, designs, systems, and materials on this website are the intellectual property of Pathan X Industry.
                                </li>
                                <li>
                                    Users must not misuse, copy, reproduce, or distribute any content without written permission.
                                </li>
                                <li>
                                    Service delivery timelines, pricing, and scope are finalized only after official written confirmation between Pathan X Industry and the client.
                                </li>
                                <li>
                                    Pathan X Industry is not responsible for third-party services, hosting providers, payment gateways, or external platforms.
                                </li>
                                <li>
                                    We reserve the right to modify services, pricing, and website content without prior notice.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
