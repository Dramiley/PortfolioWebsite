'use client';

import { siteConfig } from '@/data/config';
import { skills } from '@/data/skills';
import { Section } from './Section';
import { motion } from 'framer-motion';

const categoryLabels: Record<string, string> = {
    'languages': 'Languages',
    'ml-ai': 'ML & AI',
    'frameworks': 'Frameworks',
    'infrastructure': 'Infrastructure',
};

export const Skills = () => {
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
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
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
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                        className="p-6 rounded-2xl border border-border hover:border-primary/20 transition-colors duration-300"
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
                                            ? 'bg-primary/10 text-primary border border-primary/20 hover:border-primary/40'
                                            : 'bg-surface text-foreground-muted border border-border hover:border-border-strong hover:text-foreground'
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
