'use client';

import Link from 'next/link';

interface BackToProjectsButtonProps {
    variant?: 'top' | 'bottom';
    className?: string;
}

/**
 * Unified "Back to Projects" button component.
 * 
 * This component always returns to the project index. Browser history is deliberately
 * not used because readers may have moved through several case studies first.
 * 
 * Both the top and bottom buttons on project detail pages use this component to
 * ensure identical behavior.
 */
export function BackToProjectsButton({ variant = 'top', className }: BackToProjectsButtonProps) {
    const rememberReturnIntent = () => {
        sessionStorage.setItem('returning_from_project', 'true');
    };

    if (variant === 'bottom') {
        return (
            <Link
                href="/#projects"
                onClick={rememberReturnIntent}
                aria-label="View all projects"
                className={className || "inline-block px-10 py-5 rounded-lg bg-surface hover:bg-surface-hover border border-border text-foreground font-semibold text-lg transition-all hover:scale-[1.02]"}
            >
                View All Projects
            </Link>
        );
    }

    return (
        <Link
            href="/#projects"
            onClick={rememberReturnIntent}
            aria-label="Back to projects"
            className={className || "inline-flex items-center text-sm text-primary mb-6 hover:underline"}
        >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Projects
        </Link>
    );
}
