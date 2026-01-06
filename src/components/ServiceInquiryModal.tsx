"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import Button from "./Button";

interface ServiceInquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultService?: string;
}

export default function ServiceInquiryModal({ isOpen, onClose, defaultService = "Enterprise Solutions" }: ServiceInquiryModalProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Google Apps Script Web App URL - Yahan apna URL paste karein
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyUL3A8lco8Pjzl07cksw78EQQJOfzVXEEFkuP9CP1vFHfNi-cXXt8skRoZQAb4cK-0/exec";

    // Reset submitted state when modal opens
    useEffect(() => {
        if (isOpen) {
            setIsSubmitted(false);
            setError(null);
        }
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            fullName: formData.get('fullName') as string,
            businessName: formData.get('businessName') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            interestedSolution: formData.get('interestedSolution') as string,
            projectDetails: formData.get('projectDetails') as string,
            timestamp: new Date().toISOString()
        };

        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Important for Google Apps Script
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            // With no-cors mode, we can't read the response
            // So we assume success if no error is thrown
            setIsSubmitted(true);

            // Reset form
            (e.target as HTMLFormElement).reset();

        } catch (err) {
            console.error('Form submission error:', err);
            setError('Failed to submit form. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] overflow-y-auto">
                    {/* Flex Container for Centering & Scroll */}
                    <div className="flex min-h-full items-center justify-center p-4 md:p-8">

                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-2xl bg-brand-navy border border-brand-blue/20 rounded-2xl shadow-[0_0_50px_rgba(59,130,246,0.1)] z-10 my-4"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-brand-silver hover:text-white transition-colors z-20"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {!isSubmitted ? (
                                <div className="p-6 md:p-10">
                                    <h2 className="text-2xl font-bold text-white mb-2">Service Inquiry</h2>
                                    <p className="text-brand-silver mb-8 text-sm">
                                        Tell us about your project requirements.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs uppercase tracking-wider text-brand-silver">Full Name</label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="fullName"
                                                    className="w-full bg-black/40 border border-brand-blue/20 rounded p-3 text-white focus:border-brand-blue outline-none transition-colors"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs uppercase tracking-wider text-brand-silver">Business Name</label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="businessName"
                                                    className="w-full bg-black/40 border border-brand-blue/20 rounded p-3 text-white focus:border-brand-blue outline-none transition-colors"
                                                    placeholder="Acme Corp"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs uppercase tracking-wider text-brand-silver">Email Address</label>
                                                <input
                                                    required
                                                    type="email"
                                                    name="email"
                                                    className="w-full bg-black/40 border border-brand-blue/20 rounded p-3 text-white focus:border-brand-blue outline-none transition-colors"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs uppercase tracking-wider text-brand-silver">Phone Number</label>
                                                <input
                                                    required
                                                    type="tel"
                                                    name="phone"
                                                    className="w-full bg-black/40 border border-brand-blue/20 rounded p-3 text-white focus:border-brand-blue outline-none transition-colors"
                                                    placeholder="+1 (555) 000-0000"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-wider text-brand-silver">Interested Solution</label>
                                            <select
                                                name="interestedSolution"
                                                defaultValue={defaultService}
                                                className="w-full bg-black/40 border border-brand-blue/20 rounded p-3 text-white focus:border-brand-blue outline-none transition-colors appearance-none"
                                            >
                                                <option>Enterprise Solutions</option>
                                                <option>Smart Living Ecosystem</option>
                                                <option>Hardware Development</option>
                                                <option>Other Inquiry</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-wider text-brand-silver">Project Details</label>
                                            <textarea
                                                required
                                                rows={4}
                                                name="projectDetails"
                                                className="w-full bg-black/40 border border-brand-blue/20 rounded p-3 text-white focus:border-brand-blue outline-none transition-colors"
                                                placeholder="Describe your requirements..."
                                            />
                                        </div>

                                        {error && (
                                            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-sm">
                                                {error}
                                            </div>
                                        )}

                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                className="w-full px-6 py-3 bg-brand-blue text-white rounded-lg hover:bg-brand-blue/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                                disabled={isLoading}
                                            >
                                                {isLoading ? (
                                                    <span className="flex items-center justify-center gap-2">
                                                        <Loader2 className="w-4 h-4 animate-spin" />
                                                        Submitting...
                                                    </span>
                                                ) : (
                                                    "Submit Request"
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            ) : (
                                <div className="p-12 md:p-20 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-8 h-8 text-brand-blue" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-4">Request Received</h2>
                                    <p className="text-brand-silver text-lg max-w-md mb-8">
                                        Thank you. Pathan X sales team will contact you within 24 hours.
                                    </p>
                                    <div className="flex flex-col gap-4 w-full md:w-auto">
                                        <Button onClick={() => setIsSubmitted(false)} variant="primary">
                                            Submit Another Request
                                        </Button>
                                        <Button onClick={onClose} variant="outline">
                                            Return to Site
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
}