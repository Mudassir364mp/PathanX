"use client";

import { useState } from "react";
import Button from "./Button";
import ServiceInquiryModal from "./ServiceInquiryModal";
import { ArrowRight } from "lucide-react";

export default function ConsultationCTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-20 bg-brand-navy border-y border-brand-blue/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-blue/5 to-transparent skew-x-12" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 uppercase tracking-wide">
                            Get a Free Technology Consultation
                        </h2>
                        <p className="text-brand-silver text-lg max-w-2xl">
                            Speak with our system architects to design a custom solution for your specific requirements.
                        </p>
                    </div>

                    <div>
                        <Button
                            variant="primary"
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-2"
                        >
                            Start Consultation <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>

            <ServiceInquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                defaultService="Consultation"
            />
        </section>
    );
}
