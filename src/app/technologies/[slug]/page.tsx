export async function generateStaticParams() {
  return [
    { slug: "ai" },
    { slug: "automation" },
    { slug: "hardware" },
    { slug: "cyber-security" }
  ];
}


import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import { ArrowLeft, CheckCircle2, Cpu, Shield, Zap, RefreshCw } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Data for each technology domain
const techData: Record<string, {
    title: string;
    subtitle: string;
    description: string;
    solutions: string[];
    benefits: string[];
    useCases: string[];
    futurePlans: string;
    icon: any;
}> = {
    "ai": {
        title: "Artificial Intelligence",
        subtitle: "Intelligent systems built for real businesses.",
        description: `Pathan X designs and deploys practical AI solutions for businesses, institutes and startups — focused on automation, data processing, decision-support and customer experience systems.

We don’t sell theory.
We build real AI tools that solve real problems.

Depending on your needs, our AI solutions are designed to:
• Automate repetitive business operations
• Improve customer response systems
• Generate data-driven insights
• Support decision making
• Enhance security monitoring

Our AI systems are customized, scalable and business-focused.`,
        solutions: ["AI Chatbots & Support Assistants", "Business Process Automation", "Data Analytics & Reporting Dashboards", "Intelligent Lead Management Systems", "AI-Based Monitoring & Alert Systems"],
        benefits: ["Reduced workload & manpower cost", "Faster customer handling", "Better business insights", "24/7 automated operations", "Improved system reliability"],
        useCases: ["Customer support chatbots", "Automated inquiry handling", "Lead qualification systems", "Sales follow-up automation", "Business performance dashboards"],
        futurePlans: "Expanding Pathan X AI systems into predictive automation, security intelligence, and smart decision engines for business and smart living ecosystems.",
        icon: Cpu
    },
    "automation": {
        title: "Automation Systems",
        subtitle: "Streamlining operations with intelligent robotic process automation.",
        description: "We engineer end-to-end automation frameworks that remove human error and maximize throughput. From digital workflows to physical robotic control, our systems ensure seamless execution.",
        solutions: ["Robotic Process Automation (RPA)", "Industrial IoT Control", "Smart Home/Office Automation", "Supply Chain Automation"],
        benefits: ["Zero-Error Execution", "Exponential Speed Increase", "Cost Reduction", "Scalable Operations"],
        useCases: ["Assembly Line Control", "Automated Inventory Management", "Smart Lighting & Climate Control", "Document Verification Pipelines"],
        futurePlans: "Integrating swarm intelligence for coordinated multi-robot systems in warehousing and construction.",
        icon: RefreshCw
    },
    "hardware": {
        title: "Smart Hardware",
        subtitle: "Physical devices engineered for the connected world.",
        description: "Our hardware division focuses on creating robust, secure, and energy-efficient IoT devices. We bridge the digital and physical worlds with sensors, controllers, and smart interfaces.",
        solutions: ["Custom IoT Sensors", "Smart Wearables", "Embedded Controllers", "Edge Computing Nodes"],
        benefits: ["Real-Time Physical Monitoring", "Seamless Connectivity", "Low Power Consumption", "Industrial-Grade Durability"],
        useCases: ["Health Monitoring Wearables", "Environmental Sensing Stations", "Smart Access Control Systems", "Connected Fleet Management"],
        futurePlans: "Researching bio-compatible interfaces and quantum-resistant secure hardware modules.",
        icon: Zap
    },
    "cyber-security": {
        title: "Cyber Security",
        subtitle: "Real-world digital protection for modern businesses.",
        description: `Pathan X provides practical cyber security solutions for businesses, institutes, startups and online platforms — focused on application protection, data safety, access control and threat monitoring.

We don’t sell fear.
We build real digital protection systems.

Pathan X Cyber Security systems are designed to:
• Protect websites, apps and digital platforms
• Prevent unauthorized access
• Secure customer and business data
• Monitor suspicious activities
• Improve system reliability`,
        solutions: ["Website & Application Security", "Secure Login & Access Control Systems", "Data Backup & Protection", "Malware & Threat Monitoring", "Server & Hosting Security Setup", "Vulnerability Scanning & Hardening"],
        benefits: ["Reduced risk of hacking & data leaks", "Secure customer data", "Improved system stability", "24/7 monitoring readiness", "Business continuity protection"],
        useCases: ["Protecting business websites & admin panels", "Securing customer login systems", "Preventing spam, malware and attacks", "Server and hosting security setup", "Securing automation & IoT systems"],
        futurePlans: "Expanding Pathan X security platforms into automated threat intelligence and smart digital defense systems.",
        icon: Shield
    }
};

interface PageProps {
    params: {
        slug: string;
    };
}

// Generate metadata dynamically
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = techData[slug];

    if (!data) {
        return {
            title: "Technology Not Found | PATHAN X INDUSTRY",
        };
    }

    return {
        title: `${data.title} | PATHAN X INDUSTRY`,
        description: data.subtitle,
    };
}

export default async function TechDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = techData[slug];

    if (!data) {
        notFound();
    }

    const Icon = data.icon;

    return (
        <main className="min-h-screen bg-brand-navy">
            <PageHeader
                title={data.title}
                subtitle={data.subtitle}
            />

            <section className="py-24">
                <div className="container mx-auto px-6">
                    {/* Overview */}
                    <div className="mb-20">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="p-4 bg-brand-blue/10 rounded-2xl">
                                <Icon className="w-12 h-12 text-brand-blue" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">Domain Overview</h2>
                        </div>
                        <p className="text-brand-silver text-xl leading-relaxed max-w-4xl border-l-4 border-brand-blue pl-6 whitespace-pre-line">
                            {data.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                        {/* Solutions */}
                        <div className="bg-black/20 border border-brand-blue/10 p-10 rounded-2xl">
                            <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-widest">Key Solutions</h3>
                            <ul className="space-y-4">
                                {data.solutions.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-brand-silver">
                                        <CheckCircle2 className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Benefits */}
                        <div className="bg-black/20 border border-brand-blue/10 p-10 rounded-2xl">
                            <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-widest">Core Benefits</h3>
                            <ul className="space-y-4">
                                {data.benefits.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-brand-silver">
                                        <CheckCircle2 className="w-6 h-6 text-brand-cyan shrink-0 mt-0.5" />
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Use Cases & Future */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <h3 className="text-2xl font-bold text-white mb-6">Real-World Use Cases</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {data.useCases.map((useCase, i) => (
                                    <div key={i} className="p-6 bg-brand-blue/5 border border-brand-blue/10 rounded-xl">
                                        <span className="text-brand-silver">{useCase}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6 text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">Future Roadmap</h3>
                            <div className="p-8 bg-gradient-to-br from-brand-blue/10 to-transparent border border-brand-blue/20 rounded-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                                <p className="text-white relative z-10 italic leading-relaxed">
                                    "{data.futurePlans}"
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 pt-10 border-t border-brand-blue/10 flex justify-between items-center">
                        <Link href="/">
                            <Button variant="outline" className="gap-2">
                                <ArrowLeft className="w-4 h-4" /> Back to Home
                            </Button>
                        </Link>
                        <Link href="/solutions">
                            <Button variant="secondary">
                                View Related Solutions
                            </Button>
                        </Link>
                    </div>

                </div>
            </section>
        </main>
    );
}
