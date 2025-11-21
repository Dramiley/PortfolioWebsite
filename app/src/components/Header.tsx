'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
                ? 'bg-[#0A0F1F]/80 backdrop-blur-md border-b border-neon-blue/10'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="font-bold text-2xl tracking-tight text-white group">
                    R<span className="text-primary">M</span>
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-blue ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                <nav className="hidden md:flex gap-8 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative text-sm font-medium text-foreground-muted hover:text-white transition-colors group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(89,223,255,0.8)]" />
                        </Link>
                    ))}

                    <a
                        href="#contact"
                        className="ml-4 px-5 py-2 text-sm font-medium text-white bg-primary/10 border border-primary/50 rounded-full hover:bg-primary hover:border-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,139,61,0.4)]"
                    >
                        Let's Talk
                    </a>
                </nav>
            </div>
        </header>
    );
};
