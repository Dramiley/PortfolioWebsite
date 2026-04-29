'use client';

import { useState, useEffect } from 'react';

/**
 * @file GitHubPulse.tsx
 * @description Tiny indicator showing the user's latest GitHub activity.
 * Renders as a subtle mono-text line: "▍Active - last commit 2h ago"
 * Falls back to nothing if no data is available.
 */

interface GitHubPulseProps {
    lastPushAt: string | null;
}

function getTimeAgo(dateString: string): string {
    const now = new Date();
    const then = new Date(dateString);
    const diffMs = now.getTime() - then.getTime();

    const minutes = Math.floor(diffMs / 60000);
    const hours = Math.floor(diffMs / 3600000);
    const days = Math.floor(diffMs / 86400000);

    if (minutes < 1) return 'just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 30) return `${days}d ago`;
    return `${Math.floor(days / 30)}mo ago`;
}

export function GitHubPulse({ lastPushAt }: GitHubPulseProps) {
    const [, setTick] = useState(0);

    useEffect(() => {
        // Update the time ago string every minute
        const interval = setInterval(() => setTick(t => t + 1), 60000);
        return () => clearInterval(interval);
    }, []);

    if (!lastPushAt) return null;

    const timeAgo = getTimeAgo(lastPushAt);

    return (
        <div className="flex items-center gap-2 text-sm font-mono text-foreground-muted/60" suppressHydrationWarning>
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400/75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span suppressHydrationWarning>Last commit {timeAgo}</span>
        </div>
    );
}
