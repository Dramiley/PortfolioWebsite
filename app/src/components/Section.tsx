import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useEffects } from '@/context/EffectsContext';
import { useMobile } from '@/hooks/useMobile';

export const Section = ({ children, className = '', id }: SectionProps) => {
    const isMobile = useMobile();

    const { effectsEnabled } = useEffects();

    return (
        <section
            id={id}
            className={cn(
                "max-w-5xl mx-auto px-6 py-20 md:py-28",
                className
            )}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                    once: isMobile,
                    amount: isMobile ? 0 : 0.2,
                    margin: isMobile ? "100px" : "-100px"
                }}
                transition={{ duration: effectsEnabled ? 0.8 : 0, ease: "easeOut" }}
                style={{ willChange: 'transform, opacity' }}
            >
                {children}
            </motion.div>
        </section>
    );
};
