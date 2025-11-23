'use client';

import { experience } from '@/data/experience';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { useEffects } from '@/context/EffectsContext';

export const Experience = () => {
    const { effectsEnabled } = useEffects();

    return (
        <Section id="experience">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: effectsEnabled ? 0.6 : 0 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
                    Work <span className="text-primary">Experience</span>
                </h2>
            </motion.div>

            <div className="space-y-8 relative">
                {/* Vertical Line */}
                <div className="absolute left-[28px] top-0 bottom-0 w-[2px] bg-white/10 md:left-[50%] md:-ml-[1px]" />

                {experience.map((job, index) => (
                    <motion.div
                        key={job.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: effectsEnabled ? 0.6 : 0, delay: effectsEnabled ? index * 0.1 : 0 }}
                        className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-0 top-0 w-14 h-14 flex items-center justify-center md:left-1/2 md:-ml-7">
                            <div className="w-4 h-4 rounded-full bg-neon-blue shadow-[0_0_10px_rgba(89,223,255,0.6)] z-10" />
                        </div>

                        <div className="ml-16 md:ml-0 md:w-1/2 p-6 bg-background-secondary/50 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-neon-blue/30 transition-all duration-300">
                            <div className="flex flex-col mb-4">
                                <h3 className="text-xl font-bold text-white">{job.role}</h3>
                                <span className="text-primary font-medium">{job.company}</span>
                                <span className="text-sm text-foreground-muted mt-1 font-mono">{job.period}</span>
                            </div>
                            <ul className="space-y-2">
                                {job.description.map((item, i) => (
                                    <li key={i} className="flex items-start text-foreground-muted text-sm leading-relaxed">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Empty space for the other side */}
                        <div className="hidden md:block md:w-1/2" />
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
