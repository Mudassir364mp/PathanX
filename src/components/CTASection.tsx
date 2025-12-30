"use client";

import Button from "./Button";
import { useRouter } from "next/navigation";

export default function CTASection() {
    const router = useRouter();
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-blue/90" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                    READY TO SHAPE THE FUTURE?
                </h2>
                <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10">
                    Join us in building the next generation of intelligent systems. Let's create something extraordinary together.
                </p>
                <div className="flex justify-center gap-6">
                    <Button variant="secondary" onClick={() => router.push('/partnership')}>Work With Us</Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => router.push('/contact')}>Contact Support</Button>
                </div>
            </div>
        </section>
    );
}
