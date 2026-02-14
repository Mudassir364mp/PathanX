"use client";

import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import { Mail, MapPin, Phone, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const googleScriptUrl = "https://script.google.com/macros/s/AKfycbyUL3A8lco8Pjzl07cksw78EQQJOfzVXEEFkuP9CP1vFHfNi-cXXt8skRoZQAb4cK-0/exec";

export default function ContactPage() {
    const [selectedService, setSelectedService] = useState("Smart Living Automation");
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
            email: formData.get('email') as string,
            subject: formData.get('subject') as string,
            service: formData.get('service') as string,
            requirement: formData.get('requirement') as string || '',
            message: formData.get('message') as string,
            type: 'Contact Form Submission',
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
            setSelectedService("Smart Living Automation"); // Reset dropdown

        } catch (err) {
            console.error('Submission error:', err);
            setError('Failed to send message. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-brand-navy">
            <PageHeader
                title="Contact Us"
                subtitle="Ready to build the future? Get in touch with our team."
            />

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Form */}
                        <div className="bg-black/50 border border-brand-blue/10 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm text-brand-silver uppercase tracking-wider">Name</label>
                                            <input
                                                required
                                                name="fullName"
                                                type="text"
                                                className="w-full bg-brand-navy border border-brand-blue/20 rounded p-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm text-brand-silver uppercase tracking-wider">Email</label>
                                            <input
                                                required
                                                name="email"
                                                type="email"
                                                className="w-full bg-brand-navy border border-brand-blue/20 rounded p-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm text-brand-silver uppercase tracking-wider">What service do you need?</label>
                                        <select
                                            name="service"
                                            value={selectedService}
                                            onChange={(e) => setSelectedService(e.target.value)}
                                            className="w-full bg-brand-navy border border-brand-blue/20 rounded p-3 text-white focus:outline-none focus:border-brand-blue transition-colors appearance-none"
                                        >
                                            <option>Smart Living Automation</option>
                                            <option>Enterprise Systems</option>
                                            <option>Hardware Development</option>
                                            <option>Cyber Security</option>
                                            <option>Custom Software / App</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    {selectedService === "Other" && (
                                        <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                                            <label className="text-sm text-brand-silver uppercase tracking-wider text-brand-blue">Please specify your requirement</label>
                                            <input
                                                required
                                                name="requirement"
                                                type="text"
                                                className="w-full bg-brand-navy border border-brand-blue/40 rounded p-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
                                                placeholder="Tell us more..."
                                            />
                                        </div>
                                    )}

                                    <div className="space-y-2">
                                        <label className="text-sm text-brand-silver uppercase tracking-wider">Subject</label>
                                        <input
                                            required
                                            name="subject"
                                            type="text"
                                            className="w-full bg-brand-navy border border-brand-blue/20 rounded p-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
                                            placeholder="Project Inquiry"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm text-brand-silver uppercase tracking-wider">Message</label>
                                        <textarea
                                            required
                                            name="message"
                                            rows={5}
                                            className="w-full bg-brand-navy border border-brand-blue/20 rounded p-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>

                                    {error && (
                                        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-sm">
                                            {error}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        className="w-full px-6 py-3 bg-brand-blue text-white rounded-lg hover:bg-brand-blue/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Sending...
                                            </span>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>
                                </form>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="w-8 h-8 text-brand-blue" />
                                    </div>
                                    <h3 className="text-2xl text-white font-bold mb-4">Message Sent</h3>
                                    <p className="text-brand-silver mb-8">We'll get back to you shortly.</p>
                                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                                        Send Another
                                    </Button>
                                </div>
                            )}
                        </div>

                        {/* Info */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                                <p className="text-brand-silver mb-8">
                                    Reach out to our global headquarters.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { icon: <Mail className="w-6 h-6" />, label: "Email", value: "contact@pathanx.industry" },
                                    { icon: <Phone className="w-6 h-6" />, label: "Phone", value: "+919529589650" },
                                    { icon: <MapPin className="w-6 h-6" />, label: "HQ", value: "INDIA, MAHARASHTRA" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="p-3 bg-brand-blue/10 rounded-full text-brand-blue">{item.icon}</div>
                                        <div>
                                            <div className="text-xs text-brand-silver uppercase tracking-wider">{item.label}</div>
                                            <div className="text-white font-medium">{item.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}