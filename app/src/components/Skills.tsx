'use client';

import { siteConfig } from '@/data/config';
import { skills } from '@/data/skills';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { useEffects } from '@/context/EffectsContext';
import { useMobile } from '@/hooks/useMobile';

const categoryLabels: Record<string, string> = {
    'languages': 'Languages',
    'ml-ai': 'ML & AI',
    'frameworks': 'Frameworks',
    'infrastructure': 'Infrastructure',
};

export const Skills = () => {
    const { effectsEnabled } = useEffects();
    const isMobile = useMobile();

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
                transition={{ duration: effectsEnabled ? 0.5 : 0 }}
                style={{ willChange: 'transform, opacity' }}
                className="mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    Skills
                </h2>
                <p className="text-foreground-muted text-lg max-w-2xl">
                    {siteConfig.sections.skills.description}
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categories.map((category, idx) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: isMobile, amount: isMobile ? 0 : 0.2 }}
                        transition={{ duration: effectsEnabled ? 0.5 : 0, delay: effectsEnabled ? idx * 0.08 : 0 }}
                        style={{ willChange: 'transform, opacity' }}
                        className="p-6 rounded-2xl border border-white/5 hover:border-primary/15 transition-colors duration-400"
                    >
                        <h3 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-5 flex items-center">
                            <span className="w-1 h-4 bg-primary/60 rounded-full mr-3" />
                            {categoryLabels[category] || category}
                        </h3>

                        <div className="flex flex-wrap gap-2.5">
                            {skillsByCategory[category].map((skill) => (
                                <span
                                    key={skill.name}
                                    className={`px-3.5 py-1.5 text-sm font-medium rounded-lg transition-colors duration-300 ${skill.primary
                                            ? 'bg-primary/10 text-primary-soft border border-primary/20 hover:border-primary/40'
                                            : 'bg-white/[0.04] text-foreground-muted border border-white/8 hover:border-white/15 hover:text-foreground'
                                        }`}
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
