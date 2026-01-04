"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { Network } from "lucide-react";

export default function TrustedNetworkCTA() {
    const router = useRouter();

    return (
        <section className="py-24 bg-brand-navy relative overflow-hidden border-t border-brand-blue/10">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-black/20 border border-brand-blue/10 p-10 rounded-2xl backdrop-blur-sm">

                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-brand-blue/10 rounded-lg">
                                <Network className="w-8 h-8 text-brand-blue" />
                            </div>
                            <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm">Trusted Alliance</h2>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Official Partners & Technology Allies
                        </h3>
                        <p className="text-brand-silver text-lg leading-relaxed max-w-2xl">
                            Explore our ecosystem of verified clients, technology partners, and strategic investors. Join a network built on trust and innovation.
                        </p>
                    </div>

                    <div className="shrink-0">
                        <Button variant="outline" onClick={() => router.push('/trusted-network')}>
                            View Trusted Network
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
}
