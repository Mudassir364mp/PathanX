"use client";

import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "./Button";

export default function ServicesSection() {
    const router = useRouter();
    return (
        <section className="py-24 bg-brand-navy border-y border-brand-blue/5">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-cyan blur-3xl opacity-20" />
                        <div className="relative bg-black rounded-xl border border-brand-blue/20 p-8 overflow-hidden aspect-video flex items-center justify-center">
                            <h3 className="text-4xl font-bold text-white/10 uppercase tracking-widest rotate-[-15deg]">Services</h3>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <h2 className="text-brand-blue font-bold tracking-widest uppercase mb-2 text-sm">What We Do</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Comprehensive Solutions</h3>
                    <p className="text-brand-silver mb-8 text-lg">
                        From custom software development to full-scale automation, we provide end-to-end services tailored for the future.
                    </p>

                    <ul className="space-y-4 mb-8">
                        {["Custom Software Development", "Security Audits & Protection", "IoT Integration", "Cloud Infrastructure"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-brand-silver">
                                <CheckCircle2 className="text-brand-blue w-5 h-5" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <Button variant="outline" onClick={() => router.push('/solutions')}>View All Services</Button>
                </div>
            </div>
        </section>
    );
}
