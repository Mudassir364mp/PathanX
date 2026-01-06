"use client";

import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import { CheckCircle2, Users, Building, Cpu, BookOpen, Loader2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const googleScriptUrl = "https://script.google.com/macros/s/AKfycbyUL3A8lco8Pjzl07cksw78EQQJOfzVXEEFkuP9CP1vFHfNi-cXXt8skRoZQAb4cK-0/exec";

export default function PartnershipPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            fullName: formData.get('fullName') as string,
            company: formData.get('company') as string,
            city: formData.get('city') as string,
            phone: formData.get('phone') as string,
            email: formData.get('email') as string,
            partnershipType: formData.get('partnershipType') as string,
            experience: formData.get('experience') as string,
            type: 'Partnership Application',
            timestamp: new Date().toISOString()
        };

        try {
            await fetch(googleScriptUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            setIsSubmitted(true);
            (e.target as HTMLFormElement).reset();
        } catch (err) {
            console.error('Submission error:', err);
            setError('Failed to submit application. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-brand-navy">
            <PageHeader
                title="Become a Partner"
                subtitle="Build the Future of Smart Living Together with Pathan X Industry"
            />

            {/* Intro CTA */}
            <section className="py-20 text-center px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-6">Join Our Global Ecosystem</h2>
                    <p className="text-brand-silver text-xl mb-10 leading-relaxed">
                        Collaborate in developing intelligent technology systems, smart devices, and secure digital infrastructures for modern businesses and institutions.
                    </p>
                    <Button onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}>
                        Apply for Partnership
                    </Button>
                </div>
            </section>

            {/* Why Partner */}
            <section className="py-20 bg-brand-blue/5">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center uppercase tracking-wider">Why Partner With Pathan X</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "Access to advanced automation & AI technology",
                            "Full system training & documentation",
                            "Recurring revenue models",
                            "Strong cyber security architecture",
                            "Brand association with a future-focused tech group",
                            "Early access to beta innovations"
                        ].map((benefit, i) => (
                            <div key={i} className="flex items-start gap-4 p-6 bg-brand-navy border border-brand-blue/10 rounded-xl">
                                <CheckCircle2 className="w-6 h-6 text-brand-blue shrink-0" />
                                <p className="text-brand-silver font-medium">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership Programs */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center uppercase tracking-wider">Partnership Programs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: "Technology Partner", desc: "Build & deliver automation systems, apps, AI platforms and secure software infrastructures.", icon: Cpu },
                            { title: "Business Partner", desc: "Resell Pathan X solutions in your city, manage clients and earn recurring commissions.", icon: Building },
                            { title: "Hardware Partner", desc: "Manufacture and distribute smart devices, IoT modules and automation hardware.", icon: Users },
                            { title: "Education Partner", desc: "Implement Pathan X smart education systems in coaching institutes & schools.", icon: BookOpen }
                        ].map((program, i) => {
                            const Icon = program.icon;
                            return (
                                <div key={i} className="bg-black/40 border border-brand-blue/10 p-8 rounded-2xl hover:border-brand-blue/30 transition-colors">
                                    <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-6">
                                        <Icon className="w-6 h-6 text-brand-blue" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{program.title}</h3>
                                    <p className="text-brand-silver">{program.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Who Can Partner */}
            <section className="py-20 bg-brand-blue/5 border-y border-brand-blue/10">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-12 uppercase tracking-wider">Who Can Partner With Us</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "Business Owners", "Coaching Institutes", "IT Service Providers",
                            "Hardware Manufacturers", "Software Developers", "Campus Ambassadors",
                            "Regional Distributors", "Investors"
                        ].map((role, i) => (
                            <span key={i} className="px-6 py-3 bg-brand-navy border border-brand-blue/20 rounded-full text-brand-silver font-medium">
                                {role}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section id="application-form" className="py-24">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="bg-black/50 border border-brand-blue/20 p-8 md:p-12 rounded-3xl">
                        <h2 className="text-3xl font-bold text-white mb-2 text-center">Partner Application</h2>
                        <p className="text-brand-silver text-center mb-10">Join the network building the next era of technology.</p>

                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs text-brand-silver uppercase tracking-wider">Full Name</label>
                                        <input required name="fullName" type="text" className="w-full bg-brand-navy border border-brand-blue/20 rounded-lg p-3 text-white focus:border-brand-blue outline-none transition-colors" placeholder="Your Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs text-brand-silver uppercase tracking-wider">Company / Institute</label>
                                        <input required name="company" type="text" className="w-full bg-brand-navy border border-brand-blue/20 rounded-lg p-3 text-white focus:border-brand-blue outline-none transition-colors" placeholder="Organization Name" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs text-brand-silver uppercase tracking-wider">Phone</label>
                                        <input required name="phone" type="tel" className="w-full bg-brand-navy border border-brand-blue/20 rounded-lg p-3 text-white focus:border-brand-blue outline-none transition-colors" placeholder="+1 (555) 000-0000" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs text-brand-silver uppercase tracking-wider">Email</label>
                                        <input required name="email" type="email" className="w-full bg-brand-navy border border-brand-blue/20 rounded-lg p-3 text-white focus:border-brand-blue outline-none transition-colors" placeholder="you@company.com" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs text-brand-silver uppercase tracking-wider">City</label>
                                        <input required name="city" type="text" className="w-full bg-brand-navy border border-brand-blue/20 rounded-lg p-3 text-white focus:border-brand-blue outline-none transition-colors" placeholder="City, Country" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs text-brand-silver uppercase tracking-wider">Partnership Type</label>
                                        <select name="partnershipType" className="w-full bg-brand-navy border border-brand-blue/20 rounded-lg p-3 text-white focus:border-brand-blue outline-none transition-colors appearance-none">
                                            <option>Technology Partner</option>
                                            <option>Business Partner</option>
                                            <option>Hardware Partner</option>
                                            <option>Education Partner</option>
                                            <option>Investor / Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs text-brand-silver uppercase tracking-wider">Your Experience / Why Partner?</label>
                                    <textarea required name="experience" rows={4} className="w-full bg-brand-navy border border-brand-blue/20 rounded-lg p-3 text-white focus:border-brand-blue outline-none transition-colors" placeholder="Tell us about your background and goals..." />
                                </div>

                                {error && <p className="text-red-400 text-sm text-center">{error}</p>}

                                <button
                                    type="submit"
                                    className="w-full px-6 py-4 bg-gradient-to-r from-brand-blue to-brand-cyan text-black font-bold uppercase tracking-wider rounded-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Submitting...
                                        </span>
                                    ) : (
                                        "Submit Application"
                                    )}
                                </button>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-8">
                                    <CheckCircle2 className="w-10 h-10 text-brand-blue" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">Application Received</h3>
                                <p className="text-brand-silver text-lg mb-10">
                                    Thank you for your interest in partnering with Pathan X. Our partnership team will review your application and contact you shortly.
                                </p>
                                <Button onClick={() => setIsSubmitted(false)} variant="outline">Submit Another Application</Button>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
