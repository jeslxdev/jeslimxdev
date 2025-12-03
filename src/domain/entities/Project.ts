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

export enum ProjectCategory {
  ERP = 'erp',
  MOBILE = 'mobile',
  WEB = 'web',
  SYSTEM = 'system',
}
