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

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  proficiency: number; // 0-100
}

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
