'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const navItems = [
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
];

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll and trap focus when mobile menu open
    useEffect(() => {
        const mainContent = document.getElementById('main-content');
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
            mainContent?.setAttribute('inert', 'true');
        } else {
            document.body.style.overflow = '';
            mainContent?.removeAttribute('inert');
        }
        return () => {
            document.body.style.overflow = '';
            document.getElementById('main-content')?.removeAttribute('inert');
        };
    }, [mobileOpen]);

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="max-w-6xl mx-auto px-6">
                    <div
                        className={`flex items-center justify-between rounded-xl px-5 py-2.5 transition-all duration-300 ${scrolled
                            ? 'glass-panel shadow-lg'
                            : 'bg-transparent'
                            }`}
                    >
                        <Link href="/" className="text-lg font-bold tracking-tight group">
                            <span className="text-foreground group-hover:text-primary transition-colors duration-300">Robin</span>
                            <span className="text-primary">.</span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-7">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative text-sm font-medium text-foreground-muted hover:text-foreground transition-colors duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-primary/60 transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center gap-3">
                            <a href="/CV.pdf" download="Robin_Morgenstern_CV.pdf">
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="hidden md:block px-4 py-2 text-sm font-medium text-primary border border-primary/20 rounded-lg hover:bg-primary/10 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                                >
                                    CV
                                </motion.button>
                            </a>

                            {/* Mobile Hamburger */}
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
                                aria-label="Toggle navigation menu"
                                aria-expanded={mobileOpen}
                            >
                                <motion.span
                                    animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                                    className="w-5 h-[1.5px] bg-foreground block transition-colors"
                                />
                                <motion.span
                                    animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                                    className="w-5 h-[1.5px] bg-foreground block transition-colors"
                                />
                                <motion.span
                                    animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                                    className="w-5 h-[1.5px] bg-foreground block transition-colors"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05, duration: 0.3 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="text-2xl font-semibold text-foreground hover:text-primary transition-colors duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navItems.length * 0.05, duration: 0.3 }}
                            >
                                <a
                                    href="/CV.pdf"
                                    download="Robin_Morgenstern_CV.pdf"
                                    onClick={() => setMobileOpen(false)}
                                    className="text-lg font-medium text-primary border border-primary/20 rounded-lg px-6 py-3 hover:bg-primary/10 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                                >
                                    Download CV
                                </a>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
