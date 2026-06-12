'use client';

import { experience } from '@/data/experience';
import { Section } from './Section';
import { motion } from 'framer-motion';

export const Experience = () => {
    return (
        <Section id="experience">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
                    Experience
                </h2>
            </motion.div>

            <div className="space-y-6">
                {experience.map((job, index) => (
                    <motion.div
                        key={job.id}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="p-6 md:p-8 rounded-2xl border border-border bg-transparent hover:bg-surface hover:border-primary/20 transition-colors duration-300"
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
                                    <span className="mr-4 mt-[11px] w-1.5 h-1.5 rounded-full bg-primary/80 shrink-0" />
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
