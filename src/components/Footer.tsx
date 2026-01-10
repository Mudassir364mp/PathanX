import Link from "next/link";
import { Cpu, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-brand-navy border-t border-brand-blue/10 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 group mb-4">
                            <div className="p-2 bg-brand-blue/10 rounded-lg">
                                <Cpu className="w-6 h-6 text-brand-blue" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold tracking-tighter text-white">
                                    PATHAN X
                                </span>
                                <span className="text-[10px] tracking-[0.2em] text-brand-blue uppercase">
                                    Industry
                                </span>
                            </div>
                        </div>
                        <p className="text-brand-silver text-sm leading-relaxed mb-6">
                            Engineering future-ready digital ecosystems with advanced AI, automation, and cyber security protocols.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            <a href="https://www.instagram.com/pathanx_industry?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-blue/5 hover:bg-brand-blue/20 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] group">
                                <Instagram className="w-5 h-5 text-brand-silver group-hover:text-brand-blue" />
                            </a>
                            <a href="https://twitter.com/pathanx" target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-blue/5 hover:bg-brand-blue/20 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] group">
                                <Twitter className="w-5 h-5 text-brand-silver group-hover:text-brand-blue" />
                            </a>
                            <a href="https://www.linkedin.com/company/pathanx" target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-blue/5 hover:bg-brand-blue/20 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] group">
                                <Linkedin className="w-5 h-5 text-brand-silver group-hover:text-brand-blue" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Company</h3>
                        <ul className="space-y-4 text-sm text-brand-silver">
                            <li><Link href="/about" className="hover:text-brand-blue transition-colors">About Us</Link></li>
                            <li><Link href="/solutions" className="hover:text-brand-blue transition-colors">Solutions</Link></li>
                            <li><Link href="/technologies" className="hover:text-brand-blue transition-colors">Technologies</Link></li>
                            <li><Link href="/contact" className="hover:text-brand-blue transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Legal & Trust</h3>
                        <ul className="space-y-4 text-sm text-brand-silver">
                            <li><Link href="/terms" className="hover:text-brand-blue transition-colors">Terms & Conditions</Link></li>
                            <li><Link href="/privacy" className="hover:text-brand-blue transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/refund" className="hover:text-brand-blue transition-colors">Refund Policy</Link></li>
                            <li><Link href="/trusted-network" className="hover:text-brand-blue transition-colors">Trusted Network</Link></li>
                            <li><Link href="/partnership" className="hover:text-brand-blue transition-colors">Partnership</Link></li>
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
