'use client';

import { aboutContent } from '@/data/about';
import { Section } from './Section';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
                    {aboutContent.title.split(' ')[0]} <span className="text-neon-blue">{aboutContent.title.split(' ').slice(1).join(' ')}</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6 text-lg text-foreground-muted leading-relaxed">
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

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-neon-blue/10 bg-background-secondary relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-primary/20 group-hover:opacity-0 transition-opacity duration-500 z-10" />
                            <Image
                                src="/images/profile.jpg"
                                alt="Robin Morgenstern"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-5 -right-5 w-24 h-24 bg-neon-blue/10 rounded-full blur-2xl -z-10" />
                        <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
                    </motion.div>
                </div>
            </motion.div>
        </Section>
    );
};
