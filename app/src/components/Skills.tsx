'use client';

import { skills } from '@/data/skills';
import { Section } from './Section';
import { motion } from 'framer-motion';

export const Skills = () => {
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
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-blue-dim">Skills</span>
                </h2>
                <p className="text-foreground-muted max-w-2xl mx-auto text-lg">
                    A curated list of technologies I use to build digital experiences.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categories.map((category, idx) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className="glass-card rounded-2xl p-8 hover:border-neon-blue/30 group relative overflow-hidden"
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
                                        <span className="text-xs font-mono text-neon-blue opacity-0 group-hover:opacity-100 transition-opacity">{skill.proficiency}%</span>
                                    </div>
                                    <div className="w-full bg-background-tertiary rounded-full h-2 overflow-hidden border border-white/5">
                                        <motion.div
                                            className="h-full rounded-full relative"
                                            style={{
                                                background: 'linear-gradient(90deg, var(--neon-blue-dim), var(--neon-blue))',
                                                boxShadow: '0 0 10px rgba(14, 165, 233, 0.3)'
                                            }}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.proficiency}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 + (skillIdx * 0.05) }}
                                        >
                                            <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white/50" />
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
