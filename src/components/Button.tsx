"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline" | "command";
    className?: string;
    type?: "button" | "submit" | "reset";
}

export default function Button({
    children,
    onClick,
    variant = "primary",
    className = "",
    type = "button",
}: ButtonProps) {
    const baseStyles =
        "relative px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 overflow-hidden group";

    const variants = {
        primary:
            "bg-brand-blue text-brand-navy hover:bg-brand-cyan hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]",
        secondary:
            "bg-brand-silver text-brand-navy hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]",
        outline:
            "border border-brand-blue text-brand-blue hover:bg-brand-blue/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
        command:
            "bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue bg-[length:200%_100%] text-brand-navy border border-white/20 hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] hover:bg-[100%_0] w-full md:w-auto min-w-[200px] text-lg rounded-none clip-none",
    };

    return (
        <motion.button
            whileHover={{ scale: variant === "command" ? 1.0 : 1.05 }}
            whileTap={{ scale: variant === "command" ? 0.98 : 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className} ${variant !== "command" ? "clip-path-slant" : ""}`}
            onClick={onClick}
            type={type}
        >
            <span className="relative z-10">{children}</span>
            {/* Glitch effect overlay or scanline could go here */}
            {variant === "command" && (
                <>
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-700 ease-in-out" />
                    <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white/50 shadow-[0_0_10px_white]" />
                </>
            )}
        </motion.button>
    );
}
