'use client';

import Link from 'next/link';
import { Project } from '@/types';

interface CompactProjectCardProps {
    project: Project;
    onNavigate?: () => void;
}

/**
 * Small card for non-featured projects: kicker, title, one-liner, tags,
 * and a "case study" cue. The whole card is one link.
 */
export const CompactProjectCard = ({ project, onNavigate }: CompactProjectCardProps) => {
    const body = (
        <>
            {project.meta && (
                <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted/80 mb-3">
                    {project.meta}
                </p>
            )}

            <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                {project.title}
            </h4>

            <p className="text-sm text-foreground-muted leading-relaxed mb-5">
                {project.shortDescription}
            </p>

            <div className="mt-auto flex items-end justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-surface text-foreground-muted border border-border"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {project.hasDetailPage && (
                    <span className="flex items-center gap-1.5 text-sm font-medium text-primary whitespace-nowrap shrink-0">
                        Case study
                        <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                )}
            </div>
        </>
    );

    const cardClasses = "group flex flex-col h-full p-6 rounded-2xl bg-surface border border-border hover:border-primary/25 hover:bg-surface-hover transition-colors duration-300";

    if (project.hasDetailPage) {
        return (
            <Link
                href={`/projects/${project.slug}`}
                onClick={onNavigate}
                className={`${cardClasses} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
            >
                {body}
            </Link>
        );
    }

    return <div className={cardClasses}>{body}</div>;
};
