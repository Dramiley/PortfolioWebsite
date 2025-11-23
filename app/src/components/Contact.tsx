'use client';

import { siteConfig } from '@/data/config';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { useEffects } from '@/context/EffectsContext';

import { useMobile } from '@/hooks/useMobile';

export const Contact = () => {
    const { effectsEnabled } = useEffects();
    const isMobile = useMobile();

    return (
        <Section id="contact" className="mb-20 relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: isMobile, amount: isMobile ? 0 : 0.2 }}
                transition={{ duration: effectsEnabled ? 0.8 : 0, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-[2.5rem] overflow-hidden p-12 md:p-24 text-center glass-panel group"
            >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-background-secondary/80 to-background/80 z-0" />

                {/* Interactive Glow Orbs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px] group-hover:bg-neon-blue/20 transition-colors duration-1000 animate-pulse-slow" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-colors duration-1000 animate-pulse-slow delay-700" />

                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.05] bg-noise mix-blend-overlay z-0" />

                <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: isMobile, amount: isMobile ? 0 : 0.2 }}
                        transition={{ delay: effectsEnabled ? 0.2 : 0, duration: effectsEnabled ? 0.6 : 0 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight">
                            {siteConfig.sections.contact.titlePrefix} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-soft to-primary animate-gradient-x">{siteConfig.sections.contact.titleHighlight}</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: isMobile, amount: isMobile ? 0 : 0.2 }}
                        transition={{ delay: effectsEnabled ? 0.4 : 0, duration: effectsEnabled ? 0.6 : 0 }}
                        className="text-foreground-muted mb-12 max-w-xl mx-auto text-xl leading-relaxed"
                    >
                        {siteConfig.sections.contact.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: isMobile, amount: isMobile ? 0 : 0.2 }}
                        transition={{ delay: effectsEnabled ? 0.6 : 0, duration: effectsEnabled ? 0.6 : 0 }}
                    >
                        <a
                            href={`mailto:${siteConfig.social.email}`}
                            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-300 bg-primary rounded-full hover:bg-primary-soft hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.5)]"
                        >
                            <span className="mr-2">{siteConfig.sections.contact.buttonText}</span>
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </Section>
    );
};
