import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const Section = ({ children, className = '', id }: SectionProps) => {
    return (
        <section id={id} className={`max-w-3xl mx-auto px-6 py-12 md:py-16 ${className}`}>
            {children}
        </section>
    );
};
