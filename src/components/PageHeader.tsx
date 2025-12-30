"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
    return (
        <div className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-brand-navy">
            <div className="absolute inset-0 bg-brand-blue/5">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(2,6,23,0)_0%,#020617_100%),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 uppercase">
                        {title}
                    </h1>
                    <p className="text-brand-silver text-lg max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
