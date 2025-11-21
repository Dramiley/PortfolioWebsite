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

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <Section id="skills" className="bg-background-secondary/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
                    My <span className="text-primary">Skills</span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {categories.map((category, idx) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className="bg-background-secondary p-8 rounded-2xl border border-white/5 hover:border-neon-blue/30 transition-colors duration-300"
                    >
                        <h3 className="text-xl font-bold text-white capitalize mb-6 flex items-center">
                            <span className="w-2 h-8 bg-primary rounded-full mr-4" />
                            {category}
                        </h3>
                        <div className="space-y-6">
                            {skillsByCategory[category].map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm font-medium text-foreground-muted">{skill.name}</span>
                                    </div>
                                    <div className="w-full bg-background rounded-full h-2.5 overflow-hidden">
                                        <motion.div
                                            className="bg-gradient-to-r from-neon-blue to-primary h-2.5 rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.proficiency}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                        />
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
