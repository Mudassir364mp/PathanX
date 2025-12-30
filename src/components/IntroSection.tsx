"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
    return (
        <section className="py-24 bg-brand-navy relative overflow-hidden">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Redefining <span className="text-brand-blue">Intelligence</span> <br />
                        For A Smarter Tomorrow
                    </h2>
                    <p className="text-brand-silver text-lg leading-relaxed mb-3">
                        Pathan X is a future technology building intelligent systems, smart devices, and secure digital infrastructure for modern living. We bridge the gap between imagination and reality with cutting-edge engineering.
                    </p>

                    <p className="text-brand-silver text-lg leading-relaxed">
                        We partner with businesses, institutes, and brands to design intelligent digital infrastructure.
                    </p>

                    <div className="h-1 w-20 bg-brand-blue rounded-full" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Abstract visual representation */}
                    <div className="relative z-10 p-8 border border-brand-blue/20 bg-brand-navy/50 backdrop-blur-sm rounded-2xl">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-brand-blue/10 p-4 rounded-lg h-32 w-full animate-pulse" />
                            <div className="bg-brand-silver/5 p-4 rounded-lg h-32 w-full" />
                            <div className="bg-brand-silver/5 p-4 rounded-lg h-32 w-full" />
                            <div className="bg-brand-blue/10 p-4 rounded-lg h-32 w-full animate-pulse delay-150" />
                        </div>
                    </div>
                    <div className="absolute -inset-4 bg-brand-blue/20 blur-3xl -z-10 rounded-full" />
                </motion.div>
            </div>
        </section>
    );
}
