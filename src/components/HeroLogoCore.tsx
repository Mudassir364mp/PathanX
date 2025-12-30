"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";

export default function HeroLogoCore() {
    const ref = useRef<HTMLDivElement>(null);

    // Parallax Setup
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;

        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { damping: 15, stiffness: 150 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { damping: 15, stiffness: 150 });

    return (
        <div
            className="perspective-1000 relative flex justify-center items-center py-20"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Core Container with Floating Animation */}
            <motion.div
                ref={ref}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                animate={{
                    y: [-12, 12, -12],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut"
                }}
                className="relative z-10"
            >
                {/* Back Glow - Soft Electric Blue Aura */}
                <motion.div
                    animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.9, 1.1, 0.9] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-blue/20 blur-[80px] rounded-full pointer-events-none -z-10"
                />

                {/* SVG Logo */}
                <svg
                    width="600"
                    height="200"
                    viewBox="0 0 600 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full max-w-[300px] md:max-w-[500px] lg:max-w-[700px] drop-shadow-2xl"
                >
                    <defs>
                        <linearGradient id="metallicGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#e2e8f0" />
                            <stop offset="50%" stopColor="#94a3b8" />
                            <stop offset="51%" stopColor="#cbd5e1" />
                            <stop offset="100%" stopColor="#64748b" />
                        </linearGradient>

                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="4" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>

                        <linearGradient id="streakGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#00f3ff" />
                        </linearGradient>
                    </defs>

                    {/* Main Text: PATHAN X */}
                    <text
                        x="50%"
                        y="55%"
                        textAnchor="middle"
                        fill="url(#metallicGradient)"
                        className="text-7xl font-black tracking-tighter"
                        style={{ fontStyle: "italic" }}
                    >
                        PATHAN X
                    </text>

                    {/* Subtext: INDUSTRIES */}
                    <text
                        x="50%"
                        y="75%"
                        textAnchor="middle"
                        fill="#94a3b8"
                        className="text-xl font-bold tracking-[0.4em] uppercase"
                    >
                        INDUSTRIES
                    </text>

                    {/* Light Streak / Arrow Effect */}
                    {/* A dynamic path creating the 'arrow' look from the image */}
                    <motion.path
                        d="M 50 70 L 450 70 L 530 130"
                        stroke="url(#streakGradient)"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        filter="url(#glow)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    />

                    {/* Moving Light Sweep on Text */}
                    <motion.rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="url(#lightSweep)"
                        style={{ mixBlendMode: "overlay" }}
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 12, ease: "linear", repeatDelay: 5 }}
                    />
                    <defs>
                        <linearGradient id="lightSweep" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="45%" stopColor="rgba(255,255,255,0)" />
                            <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
                            <stop offset="55%" stopColor="rgba(255,255,255,0)" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>

                </svg>

                {/* Hologram Scanline Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:100%_4px] opacity-20 pointer-events-none" />
            </motion.div>
        </div>
    );
}
