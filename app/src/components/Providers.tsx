'use client';

import { MotionConfig } from 'framer-motion';

/**
 * Client-side providers for the app. MotionConfig with reducedMotion="user"
 * disables transform animations for visitors with prefers-reduced-motion set.
 */
export function Providers({ children }: { children: React.ReactNode }) {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
