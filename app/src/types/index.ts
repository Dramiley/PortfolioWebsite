/**
 * @file index.ts
 * @description TypeScript definitions for the application's data structures.
 */

/**
 * Represents a single project in the portfolio.
 */
export interface Project {
  id: string;
  slug: string;
  hasDetailPage: boolean;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  categories: ('ml-ai' | 'mobile' | 'web' | 'systems')[];
  techStack: { name: string; icon?: string }[];
  heroImage: string;
  galleryImages: string[];
  link?: string;
  links?: { label: string; url: string }[];
  githubUrl?: string;
  details: {
    problem: string;
    problemImage?: string;
    approach: string;
    approachImage?: string;
    impact?: string;
    metrics?: { label: string; value: string }[];
    architecture?: string;
    features: { title: string; description: string }[];
    timeline?: { date: string; title: string; description: string }[];
  };
}

/**
 * Represents a work experience entry.
 */
export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

/**
 * Represents a technical skill.
 */
export interface Skill {
  name: string;
  category: 'languages' | 'ml-ai' | 'frameworks' | 'infrastructure';
  primary?: boolean;
}

/**
 * Global configuration for the website content.
 */
export interface SiteConfig {
  name: string;
  tagline: string;
  subtitle: string;
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
  sections: {
    hero: {
      statement: string;
      subtext: string;
    };
    whatIBuild: {
      title: string;
      domains: { title: string; description: string }[];
    };
    projects: {
      description: string;
    };
    skills: {
      description: string;
    };
    contact: {
      title: string;
      description: string;
      buttonText: string;
    };
  };
}
