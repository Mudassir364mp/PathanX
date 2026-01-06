import Link from "next/link";
import { Cpu, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-brand-navy border-t border-brand-blue/10 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">

                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <div className="flex items-center gap-2 group">
                            <div className="p-2 bg-brand-blue/10 rounded-lg">
                                <Cpu className="w-6 h-6 text-brand-blue" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold tracking-tighter text-white">
                                    PATHAN X
                                </span>
                                <span className="text-[10px] tracking-[0.2em] text-brand-blue uppercase">
                                    <div className="md:col-span-1">
                                        <h2 className="text-2xl font-bold text-white mb-4 tracking-wider">PATHAN X</h2>
                                        <p className="text-brand-silver text-sm leading-relaxed mb-6">
                                            Engineering future-ready digital ecosystems with advanced AI, automation, and cyber security protocols.
                                        </p>
                                    </div>

                                    {/* Quick Links */}
                                    <div>
                                        <h3 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Company</h3>
                                        <ul className="space-y-4 text-sm text-brand-silver">
                                            <li><a href="/about" className="hover:text-brand-blue transition-colors">About Us</a></li>
                                            <li><a href="/solutions" className="hover:text-brand-blue transition-colors">Solutions</a></li>
                                            <li><a href="/technologies" className="hover:text-brand-blue transition-colors">Technologies</a></li>
                                            <li><a href="/contact" className="hover:text-brand-blue transition-colors">Contact</a></li>
                                        </ul>
                                    </div>

                                    {/* Legal Links */}
                                    <div>
                                        <h3 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Legal & Trust</h3>
                                        <ul className="space-y-4 text-sm text-brand-silver">
                                            <li><a href="/terms" className="hover:text-brand-blue transition-colors">Terms & Conditions</a></li>
                                            <li><a href="/privacy" className="hover:text-brand-blue transition-colors">Privacy Policy</a></li>
                                            <li><a href="/refund" className="hover:text-brand-blue transition-colors">Refund Policy</a></li>
                                            <li><a href="/trusted-network" className="hover:text-brand-blue transition-colors">Trusted Network</a></li>
                                            <li><a href="/partnership" className="hover:text-brand-blue transition-colors">Partnership</a></li>
                                        </ul>
                                    </div>

                                    ENGINEERING
                                </span>
                            </div>
                        </div>
                        <div className="md:col-span-1">
                            <h2 className="text-2xl font-bold text-white mb-4 tracking-wider">PATHAN X</h2>
                            <p className="text-brand-silver text-sm leading-relaxed mb-6">
                                Engineering future-ready digital ecosystems with advanced AI, automation, and cyber security protocols.
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Company</h3>
                        <ul className="space-y-4 text-sm text-brand-silver">
                            <li><a href="/about" className="hover:text-brand-blue transition-colors">About Us</a></li>
                            <li><a href="/solutions" className="hover:text-brand-blue transition-colors">Solutions</a></li>
                            <li><a href="/technologies" className="hover:text-brand-blue transition-colors">Technologies</a></li>
                            <li><a href="/contact" className="hover:text-brand-blue transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Legal & Trust</h3>
                        <ul className="space-y-4 text-sm text-brand-silver">
                            <li><a href="/terms" className="hover:text-brand-blue transition-colors">Terms & Conditions</a></li>
                            <li><a href="/privacy" className="hover:text-brand-blue transition-colors">Privacy Policy</a></li>
                            <li><a href="/refund" className="hover:text-brand-blue transition-colors">Refund Policy</a></li>
                            <li><a href="/trusted-network" className="hover:text-brand-blue transition-colors">Trusted Network</a></li>
                            <li><a href="/partnership" className="hover:text-brand-blue transition-colors">Partnership</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Contact</h3>
                        <ul className="space-y-4 text-sm text-brand-silver">
                            <li>General Inquiries & Support</li>
                            <li><a href="mailto:contact@pathanx.com" className="text-white hover:text-brand-blue transition-colors">contact@pathanx.com</a></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-brand-blue/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-silver/40">
                    <p>© {new Date().getFullYear()} Pathan X Industry. All rights reserved.</p>
                    <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        System Operational
                    </p>
                </div>
            </div>
        </footer>
    );
}
