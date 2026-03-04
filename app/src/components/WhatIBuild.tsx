'use client';

/**
 * @file WhatIBuild.tsx
 * @description Value proposition section — domain cards with accent bars and
 * large decorative indices. Data-driven from siteConfig.
 */

import { siteConfig } from '@/data/config';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { useEffects } from '@/context/EffectsContext';
import { useMobile } from '@/hooks/useMobile';

export const WhatIBuild = () => {
    const { effectsEnabled } = useEffects();
    const isMobile = useMobile();
    const { title, domains } = siteConfig.sections.whatIBuild;

    return (
        <Section id="what-i-build">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: isMobile, amount: isMobile ? 0 : 0.2 }}
                transition={{ duration: effectsEnabled ? 0.5 : 0 }}
                style={{ willChange: 'transform, opacity' }}
                className="mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {title}
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {domains.map((domain, idx) => (
                    <motion.div
                        key={domain.title}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: isMobile, amount: isMobile ? 0 : 0.2 }}
                        transition={{ duration: effectsEnabled ? 0.5 : 0, delay: effectsEnabled ? idx * 0.1 : 0 }}
                        style={{ willChange: 'transform, opacity' }}
                        className="relative group overflow-hidden rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-500 bg-white/[0.02] hover:bg-white/[0.04]"
                    >
                        {/* Top accent bar */}
                        <div className="h-1 w-full bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />

                        <div className="p-8 md:p-10 relative">
                            {/* Large decorative index number */}
                            <span className="absolute top-4 right-6 text-7xl md:text-8xl font-bold text-white/[0.03] select-none leading-none group-hover:text-primary/[0.06] transition-colors duration-500">
                                {String(idx + 1).padStart(2, '0')}
                            </span>

                            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 relative z-10">
                                {domain.title}
                            </h3>
                            <p className="text-foreground-muted text-base leading-relaxed relative z-10">
                                {domain.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
