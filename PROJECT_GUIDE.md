# Project Integration Guide

## Adding a New Project

To add a new project, edit `app/src/data/projects.ts`. Each project object must follow the `Project` interface defined in `app/src/types/index.ts`.

### Fields
- **id**: Unique string identifier.
- **slug**: URL-friendly string for the route.
- **hasDetailPage**: Boolean. When `true`, a case study page is statically generated at `/projects/[slug]`.
- **featured**: Boolean. Featured projects get a large alternating row at the top of the projects section; everything else lands in the compact "More projects" grid. Keep this to the 2-3 strongest projects.
- **meta**: Short kicker line shown above the title on cards and case study pages, e.g. `"Solo build · 10,000+ downloads · 2025 - 2026"`. Lead with your role, then the most impressive fact, then the period.
- **categories**: Array of `'ml-ai' | 'mobile' | 'web' | 'systems'`. Currently reserved (the filter tabs were removed); kept for future use.
- **title**: Project title.
- **shortDescription**: Brief summary for the card and the case study hero.
- **fullDescription**: The "Context" paragraph on the case study page.
- **tags**: Array of strings for tech tags on the card.
- **techStack**: Array of objects `{ name: string }` for the case study page.
- **heroImage**: Path to the hero image (e.g., `/images/projects/my-project.jpg`).
- **galleryImages**: Array of image paths shown in the case study gallery (with lightbox).
- **githubUrl**: Repository URL, or the literal string `'closed source'` to render a disabled badge.
- **details**: Object containing `problem`, `approach`, `impact`, `architecture` (optional), `metrics` (optional), `features` (array), and `timeline` (optional).
    - **CRITICAL**: The `features` array **must contain exactly 4 items** to maintain the integrity of the responsive layout grid on project pages.

### Example Entry
```typescript
{
    id: 'new-project',
    slug: 'new-project',
    hasDetailPage: true,
    categories: ['web'],
    title: 'My New Project',
    shortDescription: 'A brief summary.',
    fullDescription: 'A longer description...',
    tags: ['React', 'Next.js'],
    techStack: [{ name: 'React' }, { name: 'Next.js' }],
    heroImage: '/images/projects/new.jpg',
    galleryImages: [],
    githubUrl: 'https://github.com/user/repo',
    details: {
        problem: 'The problem I solved.',
        approach: 'How I solved it.',
        impact: 'What came out of it.',
        features: [
            { title: 'Core Feature A', description: 'Description for primary feature.' },
            { title: 'Core Feature B', description: 'Description for secondary feature.' },
            { title: 'Core Feature C', description: 'Description for tertiary feature.' },
            { title: 'Core Feature D', description: 'Description for quaternary feature.' }
        ]
    }
}
```

## State Preservation
- Navigating into a case study and back restores the projects-list scroll position (see `app/src/hooks/useProjectsScrollRestoration.ts`).
- Entrance animations only play on the first visit per session (`sessionStorage` flag), so returning to the page doesn't replay them.

## Customization
- **Theme tokens**: All colors, surfaces, and hairline borders are CSS variables in `app/src/app/globals.css`. Light mode overrides live under the `.light` class. Use the `border-border` / `bg-surface` utilities instead of hardcoded white/black alphas so both themes stay correct.
- **Animations**: Framer Motion, configured globally in `app/src/components/Providers.tsx` to respect `prefers-reduced-motion`.
- **Styling**: Tailwind CSS 4 utility classes.
