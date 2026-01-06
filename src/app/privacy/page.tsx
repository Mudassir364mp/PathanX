import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | PATHAN X INDUSTRY",
    description: "Privacy policy outlining how Pathan X Industry collects, stores, and protects user data.",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-brand-navy">
            <PageHeader
                title="Privacy Policy"
                subtitle="Our commitment to protecting your personal and business data."
            />

            <section className="py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-black/20 border border-brand-blue/10 p-10 rounded-2xl backdrop-blur-sm">
                        <div className="space-y-8 text-brand-silver text-lg leading-relaxed">
                            <p className="font-bold text-white">
                                Pathan X Industry respects your privacy.
                            </p>

                            <ul className="list-disc pl-6 space-y-4 marker:text-brand-blue">
                                <li>
                                    We collect basic information such as name, email, phone number, and business details only for communication and service purposes.
                                </li>
                                <li>
                                    Your information is never sold or shared with unauthorized third parties.
                                </li>
                                <li>
                                    All collected data is securely stored and used only to provide requested services and support.
                                </li>
                                <li>
                                    You can request data removal at any time by contacting our official email.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
