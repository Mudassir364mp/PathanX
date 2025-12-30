"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Button from "./Button";
import HeroLogoCore from "./HeroLogoCore";

export default function Hero() {
    const router = useRouter();

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-navy">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] animate-pulse" />

            {/* Grid Pattern or Geometric shapes can go here */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(2,6,23,0)_0%,#020617_100%),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

            <div className="container relative z-10 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <HeroLogoCore />

                    <div className="flex flex-col items-center gap-4 mb-10 mt-8">
                        {/* Hero Headline */}
                        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-[0.15em] text-white">
                            Building Future-Ready Technology
                        </h2>

                        {/* Hero Focus Line */}
                        <div className="text-xs md:text-sm font-medium tracking-[0.3em] text-brand-silver/80 uppercase">
                            Web • Apps • AI • Secure Digital Systems
                        </div>

                        {/* Hero Authority Line */}
                        <p className="text-lg md:text-xl font-medium mt-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            We don’t sell services — We engineer digital power.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <Button variant="command" onClick={() => router.push('/partnership')}>
                            WORK WITH PATHAN X
                        </Button>
                    </div>
                </motion.div>
            </div >

        </section >
    );
}
