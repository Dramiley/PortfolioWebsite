import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

const BASE_URL = 'https://robin-morgenstern.dev';

export default function sitemap(): MetadataRoute.Sitemap {
    const projectPages = projects
        .filter((project) => project.hasDetailPage)
        .map((project) => ({
            url: `${BASE_URL}/projects/${project.slug}`,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));

    return [
        {
            url: BASE_URL,
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...projectPages,
    ];
}
