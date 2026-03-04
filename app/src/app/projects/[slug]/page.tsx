import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import ProjectContent from './ProjectContent';

// Generate static params for all projects
export async function generateStaticParams() {
    return projects
        .filter((project) => project.hasDetailPage)
        .map((project) => ({
            slug: project.slug,
        }));
}

// Generate per-project OG metadata for rich social previews
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) return {};

    return {
        title: `${project.title} — Case Study`,
        description: project.shortDescription,
        openGraph: {
            title: `${project.title} — Robin Morgenstern`,
            description: project.shortDescription,
            images: project.heroImage ? [{ url: project.heroImage, width: 1200, height: 630, alt: project.title }] : [],
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${project.title} — Robin Morgenstern`,
            description: project.shortDescription,
            images: project.heroImage ? [project.heroImage] : [],
        },
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return <ProjectContent project={project} />;
}
