# Robin Morgenstern

A high-performance, interactive portfolio built to demonstrate modern web capabilities. This project focuses on fluid motion, reactive design, and a polished user experience.

## Overview

Built with **Next.js 16** and **React 19**, this application leverages **Framer Motion** for complex orchestrations and **Tailwind CSS 4** for a streamlined styling engine. The goal was to move beyond static templates and create an environment that feels alive—responding to mouse movement, scroll position, and user interaction.

### Key Features

- **Ambient Interactivity**: A custom background system (`AmbientBackground.tsx`) that generates wandering light sources and reacts to cursor movement with parallax depth.
- **Physics-Based UI**: 3D tilt effects on the hero profile and magnetic button interactions that follow the cursor.
- **Scroll-Linked Navigation**: A floating sidebar that tracks viewport intersection to highlight the active section dynamically.
- **Data-Driven Architecture**: Content is decoupled from presentation. All text, projects, and skills are managed in `src/data/`, making updates trivial without touching React components.
- **Performance First**: Optimized for Core Web Vitals with efficient re-renders and hardware-accelerated animations.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Motion**: Framer Motion
- **Tooling**: ESLint, PostCSS

## Configuration

The site is designed to be easily customized. All personal information and content are located in `src/data/config.ts`.

```typescript
// src/data/config.ts
export const siteConfig = {
    name: "Robin Morgenstern",
    tagline: "Software Engineer",
    // ...
};
```

To add new projects or skills, simply modify the respective arrays in `src/data/config.ts`. The UI will automatically adapt to display the new content.

## Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the dev server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Project Structure

- `src/components`: Reusable UI components and section layouts.
- `src/context`: Global state management (e.g., `EffectsContext` for toggling animations).
- `src/data`: Centralized content and configuration.
- `src/hooks`: Custom hooks (e.g., `useMobile` for responsive logic).
- `src/types`: TypeScript definitions for data consistency.

---

© 2025 Robin Morgenstern. Built with precision.
