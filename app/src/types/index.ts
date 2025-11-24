/**
 * @file index.ts
 * @description TypeScript definitions for the application's data structures.
 */

/**
 * Represents a single project in the portfolio.
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  githubUrl?: string;
  details?: {
    problem: string;
    process: string;
    results: string;
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
  category: 'frontend' | 'backend' | 'tools' | 'other';
  level: 'Basic' | 'Intermediate' | 'Advanced';
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
    email: string;
  };
  sections: {
    hero: {
      availableForWork: string;
      typewriterWords: string[];
    };
    projects: {
      description: string;
    };
    skills: {
      description: string;
    };
    contact: {
      titlePrefix: string;
      titleHighlight: string;
      description: string;
      buttonText: string;
    };
  };
}
