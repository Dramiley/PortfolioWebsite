# Portfolio Website

A high-performance, interactive portfolio built with Next.js 16, React 19, and Tailwind CSS 4. This project implements a reactive, motion-first design system featuring ambient background effects, physics-based UI interactions, and seamless state preservation across routes. It is designed for performance, accessibility, and ease of maintenance.

## Features

- **Ambient Interactivity**: Custom background system with wandering light sources and parallax depth reacting to cursor movement.
- **Physics-Based UI**: 3D tilt effects and magnetic button interactions.
- **Scroll-Linked Navigation**: Floating sidebar that dynamically tracks viewport intersection.
- **Dynamic Routing**: Conditional routing for project details (`/projects/[slug]`) vs. modal views.
- **State Preservation**: Custom navigation management preserves scroll position and UI state between views.
- **Data-Driven Architecture**: Content, projects, and skills are managed via centralized data files, decoupling content from presentation.
- **Performance**: Optimized for Core Web Vitals with efficient re-renders and hardware-accelerated animations.
- **Accessibility**: Full keyboard navigation support and adherence to `prefers-reduced-motion`.

## Installation

Ensure you have Node.js installed.

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd PortfolioWebsite
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
- `hasDetailPage`: Boolean to toggle between dedicated page and modal view.
- `slug`: URL identifier.
- `details`: Extended metadata for deep-dive pages.

Refer to `PROJECT_GUIDE.md` for the complete schema and examples.

## Folder Structure

```
src/
├── app/              # Next.js App Router pages and layouts
├── components/       # Reusable UI components
├── context/          # Global state (e.g., EffectsContext)
├── data/             # Centralized content and configuration
├── hooks/            # Custom hooks (scroll restoration, etc.)
└── types/            # TypeScript definitions
```

## Development Notes

- **Styling**: Uses Tailwind CSS 4. Global styles are defined in `src/app/globals.css`.
- **Motion**: Animations are handled by Framer Motion.
- **Linting**: ESLint configuration is provided in `eslint.config.mjs`.

### Scripts
- `npm run dev`: Start development server.
- `npm run build`: Build for production.
- `npm run start`: Start production server.
- `npm run lint`: Run ESLint.

## Roadmap & Limitations

- **Gallery Support**: Project gallery image rendering is currently in progress.
- **Testing**: Comprehensive unit and integration tests are planned for future updates.
