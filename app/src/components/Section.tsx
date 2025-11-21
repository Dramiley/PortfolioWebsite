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

export const Section = ({ children, className = '', id }: SectionProps) => {
    return (
        <section
            id={id}
            className={cn(
                "max-w-5xl mx-auto px-6 py-20 md:py-28",
                className
            )}
        >
            {children}
        </section>
    );
};
