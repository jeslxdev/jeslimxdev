export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  technologies: string[];
}

export enum ServiceType {
  WEB = 'web',
  MOBILE = 'mobile',
  BACKEND = 'backend',
  FULLSTACK = 'fullstack',
}
