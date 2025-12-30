import Link from "next/link";
import { Cpu, Linkedin, Twitter, Instagram } from "lucide-react";

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
                                    Industry
                                </span>
                            </div>
                        </div>
                        <p className="text-brand-silver text-sm max-w-xs">
                            Building intelligent systems and secure digital infrastructure for the future of smart living.
                        </p>
                    </div>

                    {/* Links 1 */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="text-white font-bold tracking-wider uppercase">Company</h4>
                        <Link href="/about" className="text-brand-silver hover:text-brand-blue transition-colors text-sm">About Us</Link>
                        <Link href="/contact" className="text-brand-silver hover:text-brand-blue transition-colors text-sm">Contact</Link>
                        <Link href="/careers" className="text-brand-silver hover:text-brand-blue transition-colors text-sm">Careers</Link>
                    </div>

                    {/* Links 2 */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="text-white font-bold tracking-wider uppercase">Solutions</h4>
                        <Link href="/technologies" className="text-brand-silver hover:text-brand-blue transition-colors text-sm">Artificial Intelligence</Link>
                        <Link href="/solutions" className="text-brand-silver hover:text-brand-blue transition-colors text-sm">Cyber Security</Link>
                        <Link href="/future-projects" className="text-brand-silver hover:text-brand-blue transition-colors text-sm">Smart Living</Link>
                    </div>

                    {/* Social */}
                    <div className="flex flex-col space-y-4 items-center md:items-start">
                        <h4 className="text-white font-bold tracking-wider uppercase">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="https://twitter.com/pathanx_industry" target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-blue/5 hover:bg-brand-blue/20 rounded-full transition-colors group">
                                <Twitter className="w-5 h-5 text-brand-silver group-hover:text-brand-blue" />
                            </a>
                            <a href="https://www.linkedin.com/company/pathan-x-industry" target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-blue/5 hover:bg-brand-blue/20 rounded-full transition-colors group">
                                <Linkedin className="w-5 h-5 text-brand-silver group-hover:text-brand-blue" />
                            </a>
                            <a href="https://www.instagram.com/pathanx_industry?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-blue/5 hover:bg-brand-blue/20 rounded-full transition-colors group">
                                <Instagram className="w-5 h-5 text-brand-silver group-hover:text-brand-blue" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-brand-blue/5 text-center">
                    <p className="text-brand-silver/50 text-xs">
                        © {new Date().getFullYear()} PATHAN X INDUSTRY. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
