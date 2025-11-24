'use client';

/**
 * @file Skills.tsx
 * @description The Skills section component.
 * Displays a grid of technical skills grouped by category with animated progress bars.
 */

import { siteConfig } from '@/data/config';
import { skills } from '@/data/skills';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { useEffects } from '@/context/EffectsContext';

import { useMobile } from '@/hooks/useMobile';

/**
 * Skills Component
 * 
 * Renders skills grouped by category (e.g., Frontend, Backend, Tools).
 * Features:
 * - Responsive grid layout
 * - Animated progress bars for skill proficiency
 * - Hover effects on skill cards
 * 
 * @returns {JSX.Element} The rendered Skills section.
 */
export const Skills = () => {
    const { effectsEnabled } = useEffects();
    const isMobile = useMobile();

    // Group skills by category
    const skillsByCategory = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, typeof skills>);

    const categories = Object.keys(skillsByCategory);

    return (
        <Section id="skills" className="relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: isMobile, amount: isMobile ? 0 : 0.2 }}
                transition={{ duration: effectsEnabled ? 0.6 : 0 }}
                style={{ willChange: 'transform, opacity' }}
                className="mb-16 text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-blue-dim">Skills</span>
                </h2>
                <p className="text-foreground-muted max-w-2xl mx-auto text-lg">
                    {siteConfig.sections.skills.description}
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((category, idx) => {
                    // Logic for centering the last item on medium screens if we have an odd number of items
                    const isLastItem = idx === categories.length - 1;
                    const isOddCount = categories.length % 2 !== 0;
                    const shouldCenterOnMedium = isLastItem && isOddCount;

                    return (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: isMobile, amount: isMobile ? 0 : 0.2 }}
                            transition={{ duration: effectsEnabled ? 0.6 : 0, delay: effectsEnabled ? idx * 0.1 : 0 }}
                            style={{ willChange: 'transform, opacity' }}
                            className={`glass-card rounded-2xl p-8 hover:border-neon-blue/30 group relative overflow-hidden ${shouldCenterOnMedium ? 'md:col-span-2 md:w-[calc(50%-1rem)] md:justify-self-center lg:col-span-1 lg:w-auto lg:justify-self-auto' : ''}`}
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <h3 className="text-xl font-bold text-white capitalize mb-8 flex items-center relative z-10">
                                <span className="w-1.5 h-6 bg-gradient-to-b from-neon-blue to-transparent rounded-full mr-4 shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
                                {category}
                            </h3>

                            <div className="space-y-6 relative z-10">
                                {skillsByCategory[category].map((skill, skillIdx) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-medium text-foreground-muted group-hover:text-foreground transition-colors">{skill.name}</span>
                                            <span className="text-xs font-medium text-neon-blue/80">{skill.level}</span>
                                        </div>
                                        <div className="w-full bg-background-tertiary rounded-full h-2 overflow-hidden border border-white/5">
                                            <motion.div
                                                className="h-full rounded-full relative"
                                                style={{
                                                    background: 'linear-gradient(90deg, var(--neon-blue-dim), var(--neon-blue))',
                                                    boxShadow: '0 0 10px rgba(14, 165, 233, 0.3)',
                                                    willChange: 'transform, opacity, width'
                                                }}
                                                initial={{ width: 0 }}
                                                whileInView={{
                                                    width: skill.level === 'Advanced' ? '100%' :
                                                        skill.level === 'Intermediate' ? '66%' : '33%'
                                                }}
                                                viewport={{ once: isMobile, amount: isMobile ? 0 : 0.2 }}
                                                transition={{ duration: effectsEnabled ? 1.2 : 0, ease: "easeOut", delay: effectsEnabled ? 0.2 + (skillIdx * 0.05) : 0 }}
                                            >
                                                <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white/50" />
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
};
