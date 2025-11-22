'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform, useReducedMotion, useScroll } from 'framer-motion';

export default function AmbientBackground() {
    const [isClient, setIsClient] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const shouldReduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll();

    // Smooth spring animation for mouse movement
    const springConfig = { damping: 50, stiffness: 400 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    // Parallax transforms for different layers
    const x1 = useTransform(x, (value) => value * 0.5);
    const y1 = useTransform(y, (value) => value * 0.5);
    const x2 = useTransform(x, (value) => value * 0.2);
    const y2 = useTransform(y, (value) => value * 0.2);
    const x3 = useTransform(x, (value) => value * 0.8);
    const y3 = useTransform(y, (value) => value * 0.8);

    // Scroll-reactive transforms
    const scrollY1 = useTransform(scrollYProgress, [0, 1], [0, 200]);

    useEffect(() => {
        // Set client flag after mount
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsClient(true);

        if (shouldReduceMotion) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            // Normalize coordinates -1 to 1
            const xVal = (clientX / windowWidth - 0.5) * 2;
            const yVal = (clientY / windowHeight - 0.5) * 2;

            // Update motion values (max offset in pixels)
            mouseX.set(xVal * 50);
            mouseY.set(yVal * 50);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY, shouldReduceMotion]);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#020617]">
            {/* Layer 1: Deep Base Gradient (Vignette) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--background-secondary)_0%,_#000000_100%)] opacity-80" />

            {/* Only render animated elements on client */}
            {isClient && (
                <>
                    {/* Layer 2: Atmospheric Light Beams with Wandering + Mouse Tracking */}
                    {/* Orange blob - Outer div for wandering, inner for mouse parallax */}
                    <motion.div
                        className="absolute will-change-transform"
                        animate={{
                            x: [0, 30, -20, 0],
                            y: [0, -20, 30, 0],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <motion.div
                            className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full opacity-[0.25] blur-[100px]"
                            style={{
                                background: 'radial-gradient(circle, var(--primary) 0%, transparent 60%)',
                                x: x2,
                                y: y2,
                                mixBlendMode: 'screen',
                            }}
                        />
                    </motion.div>

                    {/* Blue blob - Outer div for wandering, inner for mouse parallax */}
                    <motion.div
                        className="absolute will-change-transform"
                        animate={{
                            x: [0, -40, 20, 0],
                            y: [0, 30, -30, 0],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <motion.div
                            className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full opacity-[0.2] blur-[120px]"
                            style={{
                                background: 'radial-gradient(circle, var(--neon-blue) 0%, transparent 60%)',
                                x: x1,
                                y: y1,
                                mixBlendMode: 'screen',
                            }}
                        />
                    </motion.div>

                    {/* Layer 3: Subtle Particles (CSS Box Shadow Trick for Performance) */}
                    <motion.div
                        className="absolute inset-0 opacity-30 will-change-transform"
                        style={{ x: x3, y: y3 }}
                    >
                        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white] opacity-20" />
                        <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-neon-blue rounded-full shadow-[0_0_15px_var(--neon-blue)] opacity-20" />
                        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary rounded-full shadow-[0_0_10px_var(--primary)] opacity-20" />
                        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white rounded-full shadow-[0_0_20px_white] opacity-10" />
                        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-neon-blue rounded-full shadow-[0_0_8px_var(--neon-blue)] opacity-20" />
                    </motion.div>

                    {/* Layer 4: Moving Light Streaks (Aurora effect) - Scroll Reactive */}
                    <motion.div
                        className="absolute top-0 left-0 right-0 h-[500px] opacity-10 blur-[80px] will-change-transform"
                        style={{
                            background: 'linear-gradient(180deg, var(--neon-blue-dim) 0%, transparent 100%)',
                            x: x2,
                            y: scrollY1,
                            mixBlendMode: 'screen',
                        }}
                    />
                </>
            )}

            {/* Layer 5: Noise Texture - Always visible */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-noise mix-blend-overlay" />
        </div>
    );
}
