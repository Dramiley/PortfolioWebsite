'use client';

import { aboutContent } from '@/data/about';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { useEffects } from '@/context/EffectsContext';
import { useMobile } from '@/hooks/useMobile';

export const About = () => {
    const { effectsEnabled } = useEffects();
    const isMobile = useMobile();

    return (
        <Section id="about" className="relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: isMobile, amount: isMobile ? 0 : 0.2, margin: isMobile ? "100px" : "-100px" }}
                transition={{ duration: effectsEnabled ? 0.7 : 0, ease: [0.16, 1, 0.3, 1] }}
                style={{ willChange: 'transform, opacity' }}
                className="max-w-4xl mx-auto"
            >
                <div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden">
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">
                        {aboutContent.title}
                    </h2>

                    <div className="space-y-6 text-base md:text-lg text-foreground-muted leading-relaxed">
                        {aboutContent.bio.map((paragraph, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: isMobile, amount: isMobile ? 0 : 0.2 }}
                                transition={{ duration: effectsEnabled ? 0.5 : 0, delay: effectsEnabled ? index * 0.08 + 0.15 : 0 }}
                                style={{ willChange: 'transform, opacity' }}
                                className="hover:text-foreground transition-colors duration-300"
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </div>
                </div>
            </motion.div>
        </Section>
    );
};
