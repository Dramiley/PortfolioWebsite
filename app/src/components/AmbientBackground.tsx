'use client';

import { useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function AmbientBackground() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 50, stiffness: 400 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            // Normalize coordinates -1 to 1
            const xVal = (clientX / windowWidth - 0.5) * 2;
            const yVal = (clientY / windowHeight - 0.5) * 2;

            mouseX.set(xVal * 100); // Move background up to 100px
            mouseY.set(yVal * 100);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[var(--background)]">
            {/* Primary Glow */}
            <motion.div
                className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full opacity-20 blur-[100px]"
                style={{
                    background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
                    x,
                    y,
                }}
            />

            {/* Secondary Glow (Neon Blue) */}
            <motion.div
                className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full opacity-15 blur-[120px]"
                style={{
                    background: 'radial-gradient(circle, var(--neon-blue) 0%, transparent 70%)',
                    x: useSpring(mouseX, { ...springConfig, damping: 60 }), // Slightly different movement for depth
                    y: useSpring(mouseY, { ...springConfig, damping: 60 }),
                }}
            />

            {/* Accent Glow (Center) */}
            <motion.div
                className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] rounded-full opacity-10 blur-[80px]"
                style={{
                    background: 'radial-gradient(circle, var(--neon-blue-dim) 0%, transparent 70%)',
                    x: useSpring(mouseX, { ...springConfig, damping: 40 }), // Faster movement
                    y: useSpring(mouseY, { ...springConfig, damping: 40 }),
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.15, 0.1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Noise Overlay for texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise mix-blend-overlay"></div>
        </div>
    );
}
