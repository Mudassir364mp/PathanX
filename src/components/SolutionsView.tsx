"use client";

import { useState } from "react";
import Button from "@/components/Button";
import ServiceInquiryModal from "@/components/ServiceInquiryModal";
import { Check } from "lucide-react";

interface Service {
    title: string;
    price: string;
    features: string[];
}

const services: Service[] = [
    {
        title: "Smart Living Ecosystem",
        price: "Custom",
        features: ["Home Automation Integration", "Voice Control Systems", "Energy Management", "Security Surveillance"],
    },
    {
        title: "Enterprise Solutions",
        price: "Scale",
        features: ["Process Automation", "Custom AI Models", "Secure Cloud Infrastructure", "24/7 Dedicated Support"],
    },
    {
        title: "Hardware Development",
        price: "Bespoke",
        features: ["Prototyping & Design", "Embedded Systems", "Manufacturing Support", "Firmware Development"],
    },
];

export default function SolutionsView() {
    const [selectedService, setSelectedService] = useState<string>("Enterprise");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleGetStarted = (serviceName: string) => {
        setSelectedService(serviceName);
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <div key={i} className="bg-gradient-to-b from-brand-blue/5 to-transparent border border-brand-blue/20 p-8 rounded-2xl relative overflow-hidden flex flex-col hover:border-brand-blue/40 transition-colors group">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                                <div className="text-brand-blue font-mono text-xl">{service.price}</div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {service.features.map((feature, j) => (
                                    <li key={j} className="flex items-start gap-3 text-brand-silver">
                                        <Check className="w-5 h-5 text-brand-blue shrink-0" />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant="outline"
                                className="w-full group-hover:bg-brand-blue group-hover:text-brand-navy group-hover:border-transparent transition-all"
                                onClick={() => handleGetStarted(service.title)}
                            >
                                Get Started
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <h3 className="text-2xl font-bold text-white mb-6">Need a custom solution?</h3>
                    <Button onClick={() => handleGetStarted("Custom Inquiry")}>Contact Sales Team</Button>
                </div>
            </div>

            <ServiceInquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                defaultService={selectedService}
            />
        </>
    );
}
