'use client';

/**
 * @file Hero.tsx
 * @description The Hero section component.
 * Displays the main introduction, a typewriter effect for roles, and a 3D tilt interactive profile image.
 */

import { siteConfig } from '@/data/config';
import { Section } from './Section';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';


import { useEffects } from '@/context/EffectsContext';

/**
 * Hero Component
 * 
 * The first section the user sees.
 * Features:
 * - Animated entrance
 * - Typewriter text effect
 * - 3D mouse-following tilt effect for the profile image
 * - Call to action buttons
 * 
 * @returns {JSX.Element} The rendered Hero section.
 */
export const Hero = () => {
    const { effectsEnabled } = useEffects();

    // Animation variants for the container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: effectsEnabled ? 0.1 : 0,
                delayChildren: effectsEnabled ? 0.3 : 0,
            },
        },
    };

    // Animation variants for individual items
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: effectsEnabled ? 0.8 : 0, ease: [0.16, 1, 0.3, 1] as const },
        },
    };

    // --- Typewriter Effect Logic ---
    const titles = siteConfig.sections.hero.typewriterWords;
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentTitle = titles[titleIndex];
        const typeSpeed = isDeleting ? 50 : 100;
        const deleteSpeed = 50;
        const pauseTime = 2000;

        const handleType = () => {
            if (!effectsEnabled) {
                setDisplayText(currentTitle);
                return;
            }

            if (!isDeleting) {
                if (displayText.length < currentTitle.length) {
                    setDisplayText(currentTitle.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(currentTitle.slice(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                    setTitleIndex((prev) => (prev + 1) % titles.length);
                }
            }
        };

        const timer = setTimeout(handleType, isDeleting ? deleteSpeed : typeSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, titleIndex, titles, effectsEnabled]);

    // --- 3D Tilt Effect Logic ---
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!effectsEnabled) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;
        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <Section id="hero" className="pt-32 md:pt-48 pb-32 min-h-screen flex flex-col justify-center relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-start"
                >
                    <motion.div variants={itemVariants} className="mb-6">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/5 border border-neon-blue/20 text-neon-blue text-xs font-medium tracking-wider shadow-[0_0_15px_rgba(14,165,233,0.15)] backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue shadow-[0_0_8px_rgba(14,165,233,0.6)]"></span>
                            </span>
                            {siteConfig.sections.hero.availableForWork}
                        </span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-foreground leading-[1.1]">
                        Robin <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-blue-dim to-primary animate-gradient-x">
                            Morgenstern
                        </span>
                        <span className="text-primary">.</span>
                    </motion.h1>

                    <motion.div variants={itemVariants} className="text-xl md:text-2xl text-foreground-muted mb-10 leading-relaxed max-w-lg h-8 flex items-center">
                        <span className="mr-2">&gt;</span>
                        <span className="text-foreground">{displayText}</span>
                        <span className="ml-1 w-0.5 h-6 bg-primary animate-pulse"></span>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        {/* Primary: View Projects */}
                        <a
                            href="#projects"
                            className="group relative flex items-center justify-center h-12 px-8 font-bold text-white transition-all duration-300 bg-primary rounded-full hover:bg-primary-soft hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:scale-105 active:scale-95"
                        >
                            <span className="mr-2">Projects</span>
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>

                        {/* Secondary Group */}
                        <div className="flex gap-4 w-full sm:w-auto justify-center">
                            {/* GitHub */}
                            <a
                                href={siteConfig.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center justify-center h-12 px-6 font-medium text-foreground transition-all duration-300 rounded-full glass-panel border border-white/10 hover:bg-white/10 hover:border-neon-blue/50 hover:text-neon-blue hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] hover:scale-105 active:scale-95"
                                aria-label="GitHub Profile"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-2">GitHub</span>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href={siteConfig.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center justify-center h-12 px-6 font-medium text-foreground transition-all duration-300 rounded-full glass-panel border border-white/10 hover:bg-white/10 hover:border-neon-blue/50 hover:text-neon-blue hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] hover:scale-105 active:scale-95"
                                aria-label="LinkedIn Profile"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-2">LinkedIn</span>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: effectsEnabled ? 1 : 0, delay: effectsEnabled ? 0.2 : 0, ease: [0.16, 1, 0.3, 1] as const }}
                    className="relative flex justify-center lg:justify-end perspective-1000"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <motion.div
                        className="relative w-72 h-72 md:w-96 md:h-96"
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d"
                        }}
                    >
                        {/* Subtle Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/10 to-primary/10 rounded-full blur-[60px] -z-10" />

                        {/* Image Container */}
                        <div className="absolute inset-4 rounded-full overflow-hidden border border-white/10 shadow-2xl shadow-neon-blue/10 z-10 transform translate-z-[20px] bg-slate-900">
                            <Image
                                src="/images/profile.jpg"
                                alt="Robin Morgenstern"
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-700"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            {effectsEnabled && (
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    <span className="text-xs font-medium text-foreground-muted tracking-widest uppercase">Scroll</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-neon-blue/0 via-neon-blue to-neon-blue/0 animate-pulse" />
                </motion.div>
            )}
        </Section>
    );
};
