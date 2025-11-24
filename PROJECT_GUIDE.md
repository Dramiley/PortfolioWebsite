# Project Integration Guide

## Adding a New Project

To add a new project, edit `app/src/data/projects.ts`. Each project object must follow the `Project` interface defined in `app/src/types/index.ts`.

### Fields
- **id**: Unique string identifier.
- **slug**: URL-friendly string for the route.
- **hasDetailPage**: Boolean.
    - `true`: Generates a dedicated page at `/projects/[slug]`.
    - `false`: Opens details in a modal on the projects list.
- **title**: Project title.
- **shortDescription**: Brief summary for the card.
- **fullDescription**: Detailed overview for the page/modal.
- **tags**: Array of strings for tech tags.
- **techStack**: Array of objects `{ name: string }` for the detailed view.
- **heroImage**: Path to the hero image (e.g., `/images/projects/my-project.jpg`).
- **galleryImages**: Array of image paths (currently unused but ready).
- **details**: Object containing `problem`, `solution`, `architecture` (optional), `features` (array), and `timeline` (optional).

### Example Entry
```typescript
{
    id: 'new-project',
    slug: 'new-project',
    hasDetailPage: true, // Set to false for modal view
    title: 'My New Project',
    shortDescription: 'A brief summary.',
    fullDescription: 'A longer description...',
    tags: ['React', 'Next.js'],
    techStack: [{ name: 'React' }, { name: 'Next.js' }],
    heroImage: '/images/projects/new.jpg',
    galleryImages: [],
    details: {
        problem: 'The problem I solved.',
        solution: 'How I solved it.',
        features: [
            { title: 'Feature 1', description: 'Description 1' }
        ]
    }
}
```

## State Preservation
- **Subpages**: Standard Next.js scroll restoration handles returning to the main page.
- **Modals**: Since the modal is a client-side component overlay, the main page never unmounts, preserving all state (scroll position, animations, etc.) perfectly.

## Customization
- **Animations**: Controlled by `Framer Motion` in `Projects.tsx` and `ProjectModal.tsx`.
- **Styling**: Uses Tailwind CSS classes.
