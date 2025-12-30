"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Bot, Cpu, Shield, Smartphone } from "lucide-react";

const technologies = [
    {
        icon: <Bot className="w-8 h-8" />,
        title: "Artificial Intelligence",
        slug: "ai",
        description: "Advanced ai assistant and machine learning algorithms driving autonomous systems.",
    },
    {
        icon: <Cpu className="w-8 h-8" />,
        title: "Automation Systems",
        slug: "automation",
        description: "Streamlined industrial, commercial and home automation for maximum efficiency.",
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: "Smart Hardware",
        slug: "hardware",
        description: "Next-gen physical devices integrated with powerful software ecosystems.",
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Cyber Security",
        slug: "cyber-security",
        description: "We provide protection for digital assets and application integrity.",
    },
];

export default function TechSection() {
    const router = useRouter();

    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-brand-blue font-bold tracking-widest uppercase mb-2 text-sm">Our Expertise</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white">Core Technologies</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            onClick={() => router.push(`/technologies/${tech.slug}`)}
                            className="bg-brand-navy border border-brand-blue/10 p-8 rounded-xl hover:border-brand-blue/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all group cursor-pointer"
                        >
                            <div className="mb-6 p-4 bg-brand-blue/5 rounded-full inline-block group-hover:bg-brand-blue/20 transition-colors">
                                <div className="text-brand-blue group-hover:text-brand-cyan transition-colors">
                                    {tech.icon}
                                </div>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">{tech.title}</h4>
                            <p className="text-brand-silver text-sm leading-relaxed">
                                {tech.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
