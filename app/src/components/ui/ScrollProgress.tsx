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
            className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/80 via-primary to-primary/80 origin-left z-50"
            style={{ scaleX }}
        />
    );
};
