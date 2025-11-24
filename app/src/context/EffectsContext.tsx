'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface EffectsContextType {
    effectsEnabled: boolean;
    toggleEffects: () => void;
}

const EffectsContext = createContext<EffectsContextType | undefined>(undefined);

export const EffectsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [effectsEnabled, setEffectsEnabled] = useState(true);

    useEffect(() => {
        const stored = localStorage.getItem('effectsEnabled');
        if (stored !== null) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setEffectsEnabled(stored === 'true');
        }
    }, [setEffectsEnabled]);

    useEffect(() => {
        if (effectsEnabled) {
            document.body.classList.remove('no-effects');
        } else {
            document.body.classList.add('no-effects');
        }
    }, [effectsEnabled]);

    const toggleEffects = () => {
        setEffectsEnabled((prev) => {
            const newValue = !prev;
            localStorage.setItem('effectsEnabled', String(newValue));
            return newValue;
        });
    };

    // Prevent hydration mismatch by rendering children only after mount, 
    // or render with default but accept that it might flicker preference.
    // For this use case, rendering immediately is better for LCP, 
    // but we might want to suppress effects until we know the preference.
    // However, to keep it simple and fast, we'll just render.

    return (
        <EffectsContext.Provider value={{ effectsEnabled, toggleEffects }}>
            {children}
        </EffectsContext.Provider>
    );
};

export const useEffects = () => {
    const context = useContext(EffectsContext);
    if (context === undefined) {
        throw new Error('useEffects must be used within an EffectsProvider');
    }
    return context;
};
