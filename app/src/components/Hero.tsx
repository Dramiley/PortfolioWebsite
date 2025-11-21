'use client';

import { siteConfig } from '@/data/config';
import { Section } from './Section';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
        },
    };

    return (
        <Section className="pt-32 md:pt-48 min-h-screen flex flex-col justify-center relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-start"
                >
                    <motion.div variants={itemVariants} className="mb-6">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-xs font-medium tracking-wider shadow-[0_0_10px_rgba(14,165,233,0.2)]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue"></span>
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

                    <motion.p variants={itemVariants} className="text-xl md:text-2xl text-foreground-muted mb-10 leading-relaxed max-w-lg">
                        {siteConfig.tagline}
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                        <a
                            href="#projects"
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-primary rounded-full hover:bg-primary-soft hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
                        >
                            <span className="mr-2">View Projects</span>
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a
                            href={siteConfig.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 font-bold text-foreground transition-all duration-300 rounded-full glass-panel hover:bg-white/5 hover:border-neon-blue/50 hover:text-neon-blue hover:shadow-[0_0_20px_rgba(14,165,233,0.2)]"
                        >
                            GitHub Profile
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        {/* Rotating Rings */}
                        <div className="absolute inset-0 rounded-full border border-neon-blue/20 animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-4 rounded-full border border-primary/20 animate-[spin_15s_linear_infinite_reverse]" />

                        {/* Image Container */}
                        <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-neon-blue/20 z-10 glass-card">
                            <Image
                                src="/images/profile.jpg"
                                alt="Robin Morgenstern"
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-700"
                                priority
                            />
                        </div>

                        {/* Glow Effects */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/30 to-primary/30 rounded-full blur-[60px] -z-10 animate-pulse-slow" />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span className="text-xs font-medium text-foreground-muted tracking-widest uppercase">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-neon-blue/0 via-neon-blue to-neon-blue/0 animate-pulse" />
            </motion.div>
        </Section>
    );
};
