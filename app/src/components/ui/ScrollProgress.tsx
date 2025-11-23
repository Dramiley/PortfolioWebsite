'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffects } from '@/context/EffectsContext';

export const ScrollProgress = () => {
    const { effectsEnabled } = useEffects();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    if (!effectsEnabled) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-primary to-neon-blue origin-left z-50"
            style={{ scaleX }}
        />
    );
};
