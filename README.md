# Portfolio Website

Personal portfolio built with Next.js 16, React 19, and Tailwind CSS 4. All content lives in typed data files under `src/data/`, separate from the components that render it, so updating the site is usually a data change rather than a layout change.

## Features

- **Data-driven content**: Projects, experience, and skills are plain TypeScript files validated by the types in `src/types/`.
- **Static case study pages**: Each project with `hasDetailPage: true` gets a pre-rendered page at `/projects/[slug]`.
- **Flash-free theming**: A blocking inline script applies the saved (or system) dark/light theme before first paint. All colors flow from one set of CSS variables in `globals.css`, so both themes stay in sync.
- **Scroll restoration**: Returning from a case study restores the scroll position in the projects list.
- **Live GitHub activity**: The hero shows the time of the latest push, fetched at build time and revalidated every 10 minutes (ISR).
- **Accessibility**: Semantic HTML, keyboard navigation, visible focus states, a skip link, and `prefers-reduced-motion` support via Framer Motion's `MotionConfig`.
- **SEO**: Per-project Open Graph metadata, JSON-LD person schema, `sitemap.xml`, and `robots.txt`.

## Installation

Ensure you have Node.js installed.

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd PortfolioWebsite/app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Usage

### Development Server
Start the local development server:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

### Production Build
Build the application for production:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Configuration

The application is configured via TypeScript files in `src/data/`.

### Site Configuration
General site settings (name, tagline, contact info) are in `src/data/config.ts`:

```typescript
// src/data/config.ts
export const siteConfig = {
    name: "Robin Morgenstern",
    tagline: "Software Engineer",
    // ...
};
```

### Project Management
Projects are defined in `src/data/projects.ts`. Each entry supports:
- `hasDetailPage`: Boolean to generate a dedicated case study page.
- `slug`: URL identifier.
- `details`: Extended metadata for the case study page.

Refer to `PROJECT_GUIDE.md` for the complete schema and examples.

## Folder Structure

```
src/
├── app/              # Next.js App Router pages, layouts, sitemap, robots
├── components/       # Reusable UI components
├── data/             # Centralized content and configuration
├── hooks/            # Custom hooks (scroll restoration, etc.)
├── lib/              # Data fetching (GitHub activity)
└── types/            # TypeScript definitions
```

## Development Notes

- **Styling**: Tailwind CSS 4. Theme tokens (colors, surfaces, hairline borders) are CSS variables in `src/app/globals.css` with light-mode overrides under the `.light` class.
- **Motion**: Framer Motion, kept to short entrance fades. `MotionConfig reducedMotion="user"` disables transforms for users who prefer reduced motion.
- **Linting**: ESLint configuration is provided in `eslint.config.mjs`.
