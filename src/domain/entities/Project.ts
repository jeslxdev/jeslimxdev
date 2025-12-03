export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  url?: string;
  image?: string;
  featured: boolean;
  year: string;
}

export const ProjectCategory = {
  ERP: 'erp',
  MOBILE: 'mobile',
  WEB: 'web',
  SYSTEM: 'system',
} as const;

export type ProjectCategory = typeof ProjectCategory[keyof typeof ProjectCategory];
