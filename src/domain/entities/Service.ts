export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  technologies: string[];
}

export const ServiceType = {
  WEB: 'web',
  MOBILE: 'mobile',
  BACKEND: 'backend',
  FULLSTACK: 'fullstack',
} as const;

export type ServiceType = typeof ServiceType[keyof typeof ServiceType];
