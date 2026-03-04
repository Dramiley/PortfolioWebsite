'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform, useReducedMotion, useScroll } from 'framer-motion';
import { useEffects } from '@/context/EffectsContext';

export default function AmbientBackground() {
    const [isClient, setIsClient] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const shouldReduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll();

    const springConfig = { damping: 50, stiffness: 400 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const x1 = useTransform(x, (value) => value * 0.4);
    const y1 = useTransform(y, (value) => value * 0.4);
    const x2 = useTransform(x, (value) => value * 0.2);
    const y2 = useTransform(y, (value) => value * 0.2);

    const scrollY1 = useTransform(scrollYProgress, [0, 1], [0, 150]);

    const { effectsEnabled } = useEffects();

    useEffect(() => {
        setIsClient(true);

        if (shouldReduceMotion || !effectsEnabled) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            const xVal = (clientX / windowWidth - 0.5) * 2;
            const yVal = (clientY / windowHeight - 0.5) * 2;

            mouseX.set(xVal * 40);
            mouseY.set(yVal * 40);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY, shouldReduceMotion, effectsEnabled]);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#020617]">
            {/* Base vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--background-secondary)_0%,_#000000_100%)] opacity-80" />

            {isClient && effectsEnabled && (
                <>
                    {/* Terracotta blob */}
                    <motion.div
                        className="absolute will-change-transform"
                        animate={{
                            x: [0, 25, -15, 0],
                            y: [0, -15, 25, 0],
                        }}
                        transition={{
                            duration: 22,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <motion.div
                            className="absolute top-[-15%] left-[-5%] w-[70vw] h-[70vw] rounded-full opacity-[0.12] blur-[120px]"
                            style={{
                                background: 'radial-gradient(circle, var(--primary) 0%, transparent 60%)',
                                x: x2,
                                y: y2,
                                mixBlendMode: 'screen',
                            }}
                        />
                    </motion.div>

                    {/* Slate blue blob */}
                    <motion.div
                        className="absolute will-change-transform"
                        animate={{
                            x: [0, -30, 15, 0],
                            y: [0, 20, -25, 0],
                        }}
                        transition={{
                            duration: 28,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <motion.div
                            className="absolute bottom-[-15%] right-[-5%] w-[70vw] h-[70vw] rounded-full opacity-[0.10] blur-[130px]"
                            style={{
                                background: 'radial-gradient(circle, var(--accent) 0%, transparent 60%)',
                                x: x1,
                                y: y1,
                                mixBlendMode: 'screen',
                            }}
                        />
                    </motion.div>

                    {/* Subtle aurora streak */}
                    <motion.div
                        className="absolute top-0 left-0 right-0 h-[400px] opacity-[0.06] blur-[100px] will-change-transform"
                        style={{
                            background: 'linear-gradient(180deg, var(--accent-dim) 0%, transparent 100%)',
                            x: x2,
                            y: scrollY1,
                            mixBlendMode: 'screen',
                        }}
                    />
                </>
            )}

            {/* Noise texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise mix-blend-overlay" />
        </div>
    );
}
