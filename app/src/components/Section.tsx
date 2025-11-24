/**
 * @file Section.tsx
 * @description A reusable wrapper component for page sections.
 * Handles consistent spacing, max-width, and scroll-triggered entrance animations.
 */

import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility to merge Tailwind classes.
 */
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Props for the Section component.
 */
interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

import { motion } from 'framer-motion';
import { useEffects } from '@/context/EffectsContext';
import { useMobile } from '@/hooks/useMobile';

/**
 * Section Component
 * 
 * Wraps content in a semantic <section> tag with standard padding and constraints.
 * Applies a default fade-in/slide-up animation when the section comes into view.
 * 
 * @param {SectionProps} props - Component props
 * @returns {JSX.Element} The rendered Section wrapper.
 */
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
                    once: isMobile || !effectsEnabled,
                    amount: (isMobile || !effectsEnabled) ? 0 : 0.2,
                    margin: (isMobile || !effectsEnabled) ? "100px" : "-100px"
                }}
                transition={{ duration: effectsEnabled ? 0.8 : 0, ease: "easeOut" }}
                style={{ willChange: 'transform, opacity' }}
            >
                {children}
            </motion.div>
        </section>
    );
};
