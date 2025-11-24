'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface BackToProjectsButtonProps {
    variant?: 'top' | 'bottom';
    className?: string;
}

/**
 * Unified "Back to Projects" button component.
 * 
 * This component provides a consistent navigation experience when returning from
 * project detail pages. It uses the browser's history API when possible, and falls
 * back to direct navigation if needed.
 * 
 * Both the top and bottom buttons on project detail pages use this component to
 * ensure identical behavior.
 */
export function BackToProjectsButton({ variant = 'top', className }: BackToProjectsButtonProps) {
    const router = useRouter();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();

        // Set the returning flag so the Projects page knows to restore state
        sessionStorage.setItem('returning_from_project', 'true');

        // Check if we can use history.back()
        // This is preferred as it preserves more browser state
        if (window.history.length > 1) {
            router.back();
        } else {
            // Fallback to direct navigation if no history
            router.push('/#projects');
        }
    };

    if (variant === 'bottom') {
        return (
            <button
                onClick={handleClick}
                className={className || "inline-block px-12 py-6 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xl transition-all hover:scale-105"}
            >
                View All Projects
            </button>
        );
    }

    return (
        <button
            onClick={handleClick}
            className={className || "inline-flex items-center text-sm text-neon-blue mb-6 hover:underline"}
        >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Projects
        </button>
    );
}
