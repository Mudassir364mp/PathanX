"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu } from "lucide-react";
import Button from "./Button";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Technologies", href: "/technologies" },
    { name: "Solutions", href: "/solutions" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-brand-navy/80 backdrop-blur-lg border-b border-brand-blue/20"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="p-2 bg-brand-blue/10 rounded-lg group-hover:bg-brand-blue/20 transition-colors">
                        <Cpu className="w-8 h-8 text-brand-blue group-hover:text-brand-cyan transition-colors" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tighter text-white">
                            PATHAN X
                        </span>
                        <span className="text-[10px] tracking-[0.2em] text-brand-blue uppercase">
                            Industry
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-brand-silver hover:text-brand-blue transition-colors tracking-wide uppercase"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/portal-coming-soon">
                        <Button variant="outline" className="text-xs px-4 py-2">
                            Client Portal
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-brand-silver hover:text-brand-blue"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-brand-navy/95 backdrop-blur-xl border-b border-brand-blue/20 overflow-hidden"
                    >
                        <div className="flex flex-col items-center gap-6 py-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-brand-silver hover:text-brand-blue transition-colors tracking-wide uppercase"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="/portal-coming-soon" onClick={() => setIsOpen(false)}>
                                <Button>Client Portal</Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
