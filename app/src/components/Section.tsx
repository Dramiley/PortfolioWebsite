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

export const Section = ({ children, className = '', id }: SectionProps) => {
    // Default to desktop settings to match server-side rendering
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Check initially
        checkMobile();

        // Add listener for resize
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

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
                    once: false,
                    amount: isMobile ? 0.1 : 0.2,
                    margin: isMobile ? "-20px" : "-100px"
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </section>
    );
};
