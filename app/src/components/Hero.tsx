'use client';

import { siteConfig } from '@/data/config';
import { Section } from './Section';
import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <Section className="pt-32 md:pt-48 min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <span className="inline-block py-1 px-3 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-xs font-medium tracking-wider mb-6">
                    AVAILABLE FOR WORK
                </span>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
                    Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-blue-dim">Digital</span> <br />
                    Experiences that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-soft">Matter</span>.
                </h1>

                <p className="text-xl md:text-2xl text-foreground-muted mb-10 leading-relaxed max-w-2xl">
                    {siteConfig.tagline}
                </p>

                <div className="flex flex-col sm:flex-row gap-5">
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center rounded-full bg-primary text-white px-8 py-4 text-sm font-bold tracking-wide hover:bg-primary-soft transition-all duration-300 shadow-[0_0_20px_rgba(255,139,61,0.3)] hover:shadow-[0_0_30px_rgba(255,139,61,0.5)] hover:-translate-y-1"
                    >
                        View Projects
                    </a>
                    <a
                        href={siteConfig.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-neon-blue/30 bg-neon-blue/5 text-white px-8 py-4 text-sm font-bold tracking-wide hover:bg-neon-blue/10 hover:border-neon-blue transition-all duration-300 hover:shadow-[0_0_20px_rgba(89,223,255,0.2)] hover:-translate-y-1"
                    >
                        GitHub Profile
                    </a>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-neon-blue/0 via-neon-blue/50 to-neon-blue/0" />
            </motion.div>
        </Section>
    );
};
