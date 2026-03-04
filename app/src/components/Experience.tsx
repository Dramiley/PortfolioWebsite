'use client';

import { experience } from '@/data/experience';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { useEffects } from '@/context/EffectsContext';
import { useState } from 'react';
import { useMobile } from '@/hooks/useMobile';

export const Experience = () => {
    const { effectsEnabled } = useEffects();
    const isMobile = useMobile();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <Section id="experience">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: isMobile, amount: isMobile ? 0 : 0.2 }}
                transition={{ duration: effectsEnabled ? 0.5 : 0 }}
                style={{ willChange: 'transform, opacity' }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
                    Experience
                </h2>
            </motion.div>

            <div className="space-y-6">
                {experience.map((job, index) => (
                    <motion.div
                        key={job.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: isMobile, amount: isMobile ? 0 : 0.2 }}
                        transition={{ duration: effectsEnabled ? 0.5 : 0, delay: effectsEnabled ? index * 0.08 : 0 }}
                        style={{ willChange: 'transform, opacity' }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`p-6 md:p-8 rounded-2xl border transition-all duration-400 ${hoveredIndex === index
                                ? 'bg-white/[0.03] border-primary/20'
                                : 'bg-transparent border-white/5'
                            }`}
                    >
                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 gap-1">
                            <div>
                                <h3 className="text-xl font-semibold text-foreground">{job.role}</h3>
                                <span className="text-primary font-medium">{job.company}</span>
                            </div>
                            <span className="text-sm text-foreground-muted font-mono shrink-0">{job.period}</span>
                        </div>
                        <ul className="space-y-2.5">
                            {job.description.map((item, i) => (
                                <li key={i} className="flex items-start text-foreground-muted leading-relaxed">
                                    <span className="mr-3 mt-2 w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
