import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Refund & Cancellation Policy | PATHAN X INDUSTRY",
    description: "Details regarding refunds and cancellations for Pathan X Industry services.",
};

export default function RefundPage() {
    return (
        <main className="min-h-screen bg-brand-navy">
            <PageHeader
                title="Refund & Cancellation Policy"
                subtitle="Clear and transparent policies regarding service payments and cancellations."
            />

            <section className="py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-black/20 border border-brand-blue/10 p-10 rounded-2xl backdrop-blur-sm">
                        <div className="space-y-8 text-brand-silver text-lg leading-relaxed">
                            <p>
                                Once a project has been started, payments made to <span className="text-white font-bold">Pathan X Industry</span> are non-refundable.
                            </p>

                            <ul className="list-disc pl-6 space-y-4 marker:text-brand-blue">
                                <li>
                                    Refunds are applicable only if a service has not been initiated and cancellation is requested within 24 hours of payment.
                                </li>
                                <li>
                                    Customized technology services are developed specifically for each client and cannot be refunded after development begins.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
