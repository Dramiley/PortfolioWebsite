'use client';

import { siteConfig } from '@/data/config';
import { Section } from './Section';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MagneticButton } from './ui/MagneticButton';

import { useEffects } from '@/context/EffectsContext';

export const Hero = () => {
    const { effectsEnabled } = useEffects();

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

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: effectsEnabled ? 0.8 : 0, ease: [0.16, 1, 0.3, 1] as const },
        },
    };

    // Typewriter Effect
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
    }, [displayText, isDeleting, titleIndex, titles]);

    // 3D Tilt Effect
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
        <Section id="hero" className="pt-32 md:pt-48 min-h-screen flex flex-col justify-center relative">
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

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                        <MagneticButton>
                            <a
                                href="#projects"
                                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-primary rounded-full hover:bg-primary-soft hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
                            >
                                <span className="mr-2">View Projects</span>
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </MagneticButton>
                        <MagneticButton>
                            <a
                                href={siteConfig.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 font-bold text-foreground transition-all duration-300 rounded-full glass-panel hover:bg-white/5 hover:border-neon-blue/50 hover:text-neon-blue hover:shadow-[0_0_20px_rgba(14,165,233,0.2)]"
                            >
                                GitHub Profile
                            </a>
                        </MagneticButton>
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
