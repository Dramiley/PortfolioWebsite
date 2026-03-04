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

export const Section = ({ children, className = '', id }: SectionProps) => {
    return (
        <section
            id={id}
            className={cn(
                "max-w-6xl mx-auto px-6 py-24 md:py-32",
                className
            )}
        >
            <div className="relative">
                {children}
            </div>
        </section>
    );
};
