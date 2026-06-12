'use client';

import { aboutContent } from '@/data/about';
import { Section } from './Section';
import { motion } from 'framer-motion';

export const About = () => {
    return (
        <Section id="about" className="relative">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-3xl"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">
                    {aboutContent.title}
                </h2>

                <div className="space-y-6 text-base md:text-lg text-foreground-muted leading-relaxed">
                    {aboutContent.bio.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
};
