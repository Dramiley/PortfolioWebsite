'use client';

import { useEffects } from '@/context/EffectsContext';
import { motion } from 'framer-motion';

export const EffectsToggle = () => {
    const { effectsEnabled, toggleEffects } = useEffects();

    return (
        <motion.button
            onClick={toggleEffects}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full glass-panel hover:bg-white/10 transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={effectsEnabled ? "Disable Effects" : "Enable Effects"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
        >
            <div className="relative w-6 h-6 flex items-center justify-center text-foreground-muted group-hover:text-neon-blue transition-colors">
                {effectsEnabled ? (
                    // Motion Enabled Icon (Waves/Activity)
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                ) : (
                    // Motion Disabled Icon (Pause/Static)
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                )}

                {/* Status Indicator Dot */}
                <span className={`absolute -top-1 -right-1 flex h-2.5 w-2.5`}>
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${effectsEnabled ? 'bg-neon-blue' : 'hidden'}`}></span>
                    <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${effectsEnabled ? 'bg-neon-blue' : 'bg-slate-500'}`}></span>
                </span>
            </div>
        </motion.button>
    );
};
