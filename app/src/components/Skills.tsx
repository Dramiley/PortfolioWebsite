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
        acc[skill.category].push(skill.name);
        return acc;
    }, {} as Record<string, string[]>);

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
                    Technical <span className="text-neon-blue">Arsenal</span>
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
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-3"
                        >
                            {skillsByCategory[category].map((skill) => (
                                <motion.span
                                    key={skill}
                                    variants={item}
                                    className="px-4 py-2 text-sm font-medium bg-background border border-white/10 rounded-lg text-foreground-muted hover:text-neon-blue hover:border-neon-blue/50 transition-all duration-300 cursor-default shadow-sm"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
