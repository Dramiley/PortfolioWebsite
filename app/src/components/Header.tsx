'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'
                }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="container mx-auto px-6">
                <div
                    className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${scrolled
                        ? 'glass-panel bg-opacity-80 shadow-lg backdrop-blur-xl'
                        : 'bg-transparent'
                        }`}
                >
                    <Link href="/" className="text-xl font-bold tracking-tighter group">
                        <span className="text-foreground group-hover:text-neon-blue transition-colors">Robin</span>
                        <span className="text-primary">.</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative text-sm font-medium text-foreground-muted hover:text-foreground transition-colors group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(249,115,22,0.5)]" />
                            </Link>
                        ))}
                    </nav>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2 text-sm font-medium bg-primary/10 text-primary border border-primary/20 rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.1)] hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]"
                    >
                        Resume
                    </motion.button>
                </div>
            </div>
        </motion.header>
    );
}
