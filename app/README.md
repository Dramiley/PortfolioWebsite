# Robin Morgenstern - Portfolio Website

A modern, production-ready portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean, premium aesthetic with smooth animations, responsive design, and a data-driven architecture for easy customization.

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4
- **Smooth Animations**: Powered by Framer Motion for engaging user experiences
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Data-Driven Content**: Easy-to-update configuration through centralized data files
- **SEO Optimized**: Meta tags, semantic HTML, and optimized performance
- **Premium Aesthetics**: Blue-orange color theme with glassmorphism and subtle animations
- **Accessible**: Built with accessibility best practices

## 🎨 Sections

1. **Hero**: Eye-catching introduction with circular profile photo and call-to-action buttons
2. **About Me**: Personal bio section with descriptive paragraphs
3. **My Skills**: Technical skills organized by category with animated proficiency bars
4. **Featured Projects**: Showcase of projects with images, descriptions, tags, and links
5. **Work Experience**: Timeline-based experience section with alternating layout
6. **Contact**: Call-to-action section with direct email contact

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository
2. Navigate to the app directory
3. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create a production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm start
```

## 📁 Project Structure

```
app/
├── public/
│   └── images/          # Static images (profile, projects, etc.)
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── layout.tsx  # Root layout with metadata
│   │   ├── page.tsx    # Home page with all sections
│   │   └── globals.css # Global styles and CSS variables
│   ├── components/     # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Section.tsx
│   │   └── Skills.tsx
│   ├── data/          # Content configuration files
│   │   ├── about.ts
│   │   ├── config.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   └── types/         # TypeScript type definitions
│       └── index.ts
└── package.json
```

## 🎨 Customization

### Updating Personal Information

Edit `src/data/config.ts`:

```typescript
export const siteConfig = {
    name: "Your Name",
    tagline: "Your Title",
    subtitle: "Your Subtitle",
    social: {
        github: "https://github.com/yourusername",
        email: "your@email.com"
    }
};
```

### Adding/Editing Skills

Edit `src/data/skills.ts`:

```typescript
export const skills: Skill[] = [
    { name: 'Python', category: 'backend', proficiency: 90 },
    // Add more skills...
];
```

### Adding Projects

Edit `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
    {
        id: 'project-id',
        title: 'Project Name',
        description: 'Project description...',
        tags: ['React', 'TypeScript'],
        imageUrl: '/images/projects/project.jpg',
        link: 'https://project.com',
        githubUrl: 'https://github.com/user/repo'
    }
];
```

### Updating Work Experience

Edit `src/data/experience.ts` to add or modify your work history.

### Updating About Me

Edit `src/data/about.ts` to change your bio paragraphs.

### Changing Profile Photo

Replace `/public/images/profile.jpg` with your own photo (recommended: square aspect ratio, at least 800x800px).

### Color Customization

Edit `src/app/globals.css` to modify the color scheme:

```css
:root {
    --primary: 255 139 61;        /* Orange */
    --neon-blue: 89 223 255;      /* Blue */
    --background: 15 12 24;        /* Dark background */
    /* ... other variables */
}
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: Custom React components
- **Package Manager**: npm/yarn/pnpm

## 📦 Dependencies

### Core
- `next`: ^16.0.3
- `react`: ^19.2.0
- `react-dom`: ^19.2.0
- `typescript`: ^5

### Styling & Utilities
- `tailwindcss`: ^4
- `framer-motion`: ^12.23.24
- `clsx`: ^2.1.1
- `tailwind-merge`: ^3.4.0

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Next.js and deploy

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway
- Render

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Robin Morgenstern**
- GitHub: [@Dramiley](https://github.com/Dramiley)
- Email: morgensternrobin04@gmail.com
