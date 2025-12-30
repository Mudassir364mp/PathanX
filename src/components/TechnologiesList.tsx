"use client";

import { Bot, Cpu, Shield, Smartphone, Server, Network } from "lucide-react";
import { motion } from "framer-motion";

const techs = [
    { icon: <Bot className="w-10 h-10" />, title: "Artificial Intelligence", desc: "Advanced machine learning models, natural language processing systems, predictive intelligence engines, and adaptive AI solutions built to evolve with business data and operational needs." },
    { icon: <Cpu className="w-10 h-10" />, title: "Automation Systems", desc: "Intelligent industrial and smart-living automation systems designed to eliminate manual errors, increase operational efficiency, and enable full digital control environments." },
    { icon: <Smartphone className="w-10 h-10" />, title: "Smart Hardware", desc: "Custom-engineered smart hardware devices, IoT controllers, and embedded systems developed for seamless integration into Pathan X automation and security ecosystems.." },
    { icon: <Shield className="w-10 h-10" />, title: "Cyber Security", desc: "End-to-end cyber defense architecture including application protection, penetration testing, encryption systems, real-time threat detection, and active digital risk mitigation." },
    { icon: <Server className="w-10 h-10" />, title: "Cloud Computing", desc: "High-availability, secure, and scalable cloud infrastructures optimized for enterprise systems, digital platforms, and automation environments." },
    { icon: <Network className="w-10 h-10" />, title: "IoT Connectivity", desc: "Secure IoT networking frameworks connecting smart devices, automation systems, and digital control environments through real-time data synchronization." },
];

export default function TechnologiesList() {
    return (
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {techs.map((tech, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-black/40 border border-brand-blue/10 p-8 rounded-2xl hover:bg-brand-blue/5 hover:border-brand-blue/30 transition-all group"
                    >
                        <div className="mb-6 p-4 bg-brand-blue/10 rounded-xl inline-block text-brand-blue group-hover:bg-brand-blue group-hover:text-black transition-colors">
                            {tech.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">{tech.title}</h3>
                        <p className="text-brand-silver leading-relaxed">{tech.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
