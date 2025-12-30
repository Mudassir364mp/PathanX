import PageHeader from "@/components/PageHeader";
import { CheckCircle2, Shield, Cpu, Code2, Globe, Database } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | PATHAN X INDUSTRY",
    description: "Engineering the Future of Smart Living. Founded in 2026.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-brand-navy">
            <PageHeader
                title="ABOUT PATHAN X INDUSTRY"
                subtitle="Engineering the Future of Smart Living"
            />

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Company Manifesto */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Who We Are</h3>
                                <p className="text-brand-silver text-lg leading-relaxed">
                                    Founded in 2026, Pathan X Industry is a future-focused technology group dedicated to building intelligent, secure, and scalable digital systems for modern businesses and smart living environments.
                                </p>
                            </div>

                            <p className="text-brand-silver text-lg leading-relaxed">
                                We design and develop intelligent software, smart hardware, automation systems, and secure digital infrastructure that empower organizations and individuals to operate smarter, faster, and safer in a rapidly evolving digital world.
                            </p>

                            <p className="text-brand-silver text-lg leading-relaxed border-l-2 border-brand-blue pl-6 italic">
                                Our journey begins at the city and state level, driven by a long-term vision to expand across India and into the global technology ecosystem.
                            </p>

                            <div className="pt-8">
                                <p className="text-white text-lg font-medium">
                                    We work with businesses, brands, institutions, and individuals seeking reliable, secure, and future-ready digital systems designed for long-term performance and scalability.
                                </p>
                            </div>
                        </div>

                        {/* What We Do */}
                        <div className="bg-black/20 border border-brand-blue/10 rounded-2xl p-8 lg:p-12">
                            <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-wider">What We Do</h3>
                            <p className="text-brand-silver mb-8">
                                Pathan X Industry delivers full-stack technology solutions across multiple domains, including:
                            </p>

                            <ul className="space-y-6">
                                {[
                                    { text: "Custom Software & Application Development", icon: <Code2 className="w-5 h-5" /> },
                                    { text: "Smart Hardware & IoT Device Engineering", icon: <Cpu className="w-5 h-5" /> },
                                    { text: "Automation & Control Systems", icon: <Database className="w-5 h-5" /> },
                                    { text: "Cyber Security & Application Protection", icon: <Shield className="w-5 h-5" /> },
                                    { text: "Smart Digital Infrastructure Solutions", icon: <Globe className="w-5 h-5" /> },
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-brand-silver group">
                                        <div className="mt-1 p-2 bg-brand-blue/10 rounded-lg text-brand-blue group-hover:bg-brand-blue group-hover:text-black transition-colors">
                                            {item.icon}
                                        </div>
                                        <span className="text-lg">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
