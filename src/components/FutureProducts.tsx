"use client";

import { motion } from "framer-motion";

const futureProjects = [
    {
        title: "Project: HALO",
        category: "Smart Wearable",
    },
    {
        title: "Project: NEXUS",
        category: "Home Automation",
    },
    {
        title: "Project: AIGIS",
        category: "Personal Security",
    },
];

export default function FutureProducts() {
    return (
        <section className="py-24 bg-brand-navy relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-blue/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-brand-blue font-bold tracking-widest uppercase mb-2 text-sm">Innovation Pipeline</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white">Future Releases</h3>
                    </div>
                    <p className="text-brand-silver text-sm mt-4 md:mt-0 max-w-md text-right">
                        Glimpses into the next generation of smart living technology currently under development at Pathan X labs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {futureProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="group relative h-80 rounded-2xl overflow-hidden bg-black border border-brand-silver/10"
                        >
                            <div className="absolute inset-0 bg-brand-navy/80 group-hover:bg-brand-navy/60 transition-colors z-10 flex flex-col items-center justify-center p-6 text-center">
                                <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                                <span className="text-brand-blue text-xs uppercase tracking-widest mb-6">{project.category}</span>
                                <div className="px-4 py-2 border border-brand-silver/30 rounded text-brand-silver text-xs uppercase tracking-wider">
                                    Coming Soon
                                </div>
                            </div>

                            {/* Abstract Background Image Placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-black opacity-50 group-hover:scale-110 transition-transform duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
