'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { useEffects } from '@/context/EffectsContext';

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    strength?: number;
}

export const MagneticButton = ({ children, className = "", strength = 0.5 }: MagneticButtonProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const { effectsEnabled } = useEffects();

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!effectsEnabled) return;

        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const center = { x: left + width / 2, y: top + height / 2 };

        const distance = { x: clientX - center.x, y: clientY - center.y };

        x.set(distance.x * strength);
        y.set(distance.y * strength);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseX, y: mouseY }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
