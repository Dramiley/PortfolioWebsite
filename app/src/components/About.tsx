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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: isMobile, amount: isMobile ? 0 : 0.2, margin: isMobile ? "100px" : "-100px" }}
                transition={{ duration: effectsEnabled ? 0.8 : 0, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl mx-auto"
            >
                <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden group">
                    {/* Decorative gradient blob */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-neon-blue/10 rounded-full blur-[80px] group-hover:bg-neon-blue/20 transition-colors duration-700" />

                    <h2 className="text-3xl md:text-5xl font-bold mb-10 text-white relative z-10">
                        {aboutContent.title.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-soft">{aboutContent.title.split(' ').slice(1).join(' ')}</span>
                    </h2>

                    <div className="space-y-6 text-lg md:text-xl text-foreground-muted leading-relaxed relative z-10">
                        {aboutContent.bio.map((paragraph, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: isMobile, amount: isMobile ? 0 : 0.2 }}
                                transition={{ duration: effectsEnabled ? 0.6 : 0, delay: effectsEnabled ? index * 0.1 + 0.2 : 0 }}
                                className="hover:text-foreground transition-colors duration-300"
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
                </div>
            </motion.div>
        </Section>
    );
};
