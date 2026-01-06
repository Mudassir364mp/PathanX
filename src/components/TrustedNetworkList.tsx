"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Building2, CheckCircle2, Globe, Cpu, Loader2, AlertCircle } from "lucide-react";

// Google Apps Script Web App URL - Yahan apna URL paste karein
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyUL3A8lco8Pjzl07cksw78EQQJOfzVXEEFkuP9CP1vFHfNi-cXXt8skRoZQAb4cK-0/exec";

interface Partner {
    partnerName: string;
    category: string;
    city: string;
    partnershipType: string;
    status: string;
    description: string;
    website?: string;
    contactEmail?: string;
}

export default function TrustedNetworkList() {
    const [partners, setPartners] = useState<Partner[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPartners = async () => {
            try {
                // Check if URL is configured
                if (GOOGLE_SCRIPT_URL === "https://script.google.com/macros/s/AKfycbyUL3A8lco8Pjzl07cksw78EQQJOfzVXEEFkuP9CP1vFHfNi-cXXt8skRoZQAb4cK-0/exec") {
                    // Simulate loading for demo purposes
                    await new Promise(resolve => setTimeout(resolve, 1500));
                    // Return mock data for visualization if backend isn't ready
                    setPartners([
                        {
                            partnerName: "TechCorp Industries",
                            category: "Technology Partner",
                            city: "Mumbai",
                            partnershipType: "Strategic Alliance",
                            status: "Active",
                            description: "Leading provider of industrial automation sensors and IoT hardware.",
                            website: "https://techcorp.example.com"
                        },
                        {
                            partnerName: "Global EduSystems",
                            category: "Education Partner",
                            city: "Bangalore",
                            partnershipType: "Training & Certification",
                            status: "Active",
                            description: "Collaborating on next-gen curriculum for AI and Cyber Security training."
                        },
                        {
                            partnerName: "Nexus Smart City",
                            category: "Business Partner",
                            city: "Dubai",
                            partnershipType: "Smart Infrastructure",
                            status: "Active",
                            description: "Deployment of Pathan X security grid across Phase 2 urban development."
                        },
                        {
                            partnerName: "Quantum Hardware Labs",
                            category: "Hardware Partner",
                            city: "Delhi",
                            partnershipType: "Manufacturing Alliance",
                            status: "Active",
                            description: "Manufacturing smart IoT devices and automation modules."
                        }
                    ]);
                    setLoading(false);
                    return;
                }

                // Fetch from Google Sheets
                const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=getPartners`);
                const data = await response.json();

                if (data.status === "success") {
                    setPartners(data.data || []);
                } else {
                    setError("Failed to load trusted network data.");
                }
            } catch (err) {
                console.error("Error fetching partners:", err);
                setError("Network unavailable. Please check back later.");
            } finally {
                setLoading(false);
            }
        };

        fetchPartners();
    }, []);

    // Category icons
    const getCategoryIcon = (category: string) => {
        switch (category.toLowerCase()) {
            case 'technology partner':
                return <Cpu className="w-6 h-6 text-brand-blue" />;
            case 'hardware partner':
                return <Building2 className="w-6 h-6 text-brand-blue" />;
            default:
                return <Building2 className="w-6 h-6 text-brand-blue" />;
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="w-10 h-10 text-brand-blue animate-spin mb-4" />
                <p className="text-brand-silver animate-pulse">Accessing Secure Network Database...</p>
            </div>
        );
    }

    if (error && partners.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
                <p className="text-white mb-2">{error}</p>
                <p className="text-brand-silver text-sm">System is currently validating secure connections.</p>
            </div>
        );
    }

    if (partners.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <Building2 className="w-16 h-16 text-brand-blue/30 mb-4" />
                <p className="text-white text-xl mb-2">No Partners Found</p>
                <p className="text-brand-silver">Network directory is being updated.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-brand-navy border border-brand-blue/10 rounded-xl p-6 hover:border-brand-blue/40 hover:bg-brand-blue/5 transition-all group"
                >
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-brand-blue/10 rounded-lg group-hover:bg-brand-blue/20 transition-colors">
                            {getCategoryIcon(partner.category)}
                        </div>
                        <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-bold uppercase tracking-wider rounded-full border border-green-500/20 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            Verified
                        </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{partner.partnerName}</h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 bg-white/5 rounded text-xs text-brand-silver border border-white/10 uppercase tracking-wide">
                            {partner.category}
                        </span>
                        <span className="px-2 py-1 bg-white/5 rounded text-xs text-brand-silver border border-white/10 flex items-center gap-1">
                            <Globe className="w-3 h-3" /> {partner.city}
                        </span>
                    </div>

                    <p className="text-brand-silver/80 text-sm leading-relaxed mb-4 min-h-[60px]">
                        {partner.description}
                    </p>

                    {partner.website && (
                        <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-blue hover:text-brand-cyan text-sm mb-4 block transition-colors"
                        >
                            Visit Website →
                        </a>
                    )}

                    <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-brand-cyan">
                        <CheckCircle2 className="w-4 h-4" />
                        Official Pathan X Partner
                    </div>
                </motion.div>
            ))}
        </div>
    );
}