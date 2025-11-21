'use client';

import { aboutContent } from '@/data/about';
import { Section } from './Section';
import { motion } from 'framer-motion';

export const About = () => {
    return (
        <Section id="about" className="bg-background-secondary/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
                    {aboutContent.title.split(' ')[0]} <span className="text-primary">{aboutContent.title.split(' ').slice(1).join(' ')}</span>
                </h2>

                <div className="space-y-6 text-lg text-foreground-muted leading-relaxed max-w-3xl mx-auto">
                    {aboutContent.bio.map((paragraph, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {paragraph}
                        </motion.p>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
};
