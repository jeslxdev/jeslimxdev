import type { Service } from '@/domain/entities';

export const services: Service[] = [
  {
    id: '1',
    icon: 'FaRocket',
    title: 'Software Delivery',
    description: 'Complete product cycles from ideation to production. Web platforms, SaaS, ERPs and custom systems built with agile methodology.',
    technologies: ['React', 'Next.js', 'Node.js', 'Spring Boot', 'Python', 'TypeScript'],
  },
  {
    id: '2',
    icon: 'FaMobile',
    title: 'Mobile Applications',
    description: 'Native and hybrid apps for iOS and Android engineered for performance and scale.',
    technologies: ['React Native', 'TypeScript', 'Expo', 'Firebase', 'Redux'],
  },
  {
    id: '3',
    icon: 'FaUsers',
    title: 'IT Outsourcing',
    description: 'Plug senior engineers directly into your team without recruitment overhead.',
    technologies: ['Full-Stack', 'Frontend', 'Backend', 'Tech Lead', 'DevOps', 'Architect'],
  },
  {
    id: '4',
    icon: 'FaBrain',
    title: 'AI & Intelligence',
    description: 'LLM integrations, automation pipelines, predictive models and AI-powered features.',
    technologies: ['OpenAI', 'LangChain', 'Python', 'TensorFlow', 'RAG', 'Agents'],
  },
  {
    id: '5',
    icon: 'FaCloud',
    title: 'Cloud & Scalability',
    description: 'Microservices, containerization, CI/CD and cloud-native architecture.',
    technologies: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
  },
  {
    id: '6',
    icon: 'FaShieldAlt',
    title: 'Security & Compliance',
    description: 'Application security, pentesting, LGPD/GDPR compliance and data protection.',
    technologies: ['OWASP', 'JWT', 'OAuth2', 'LGPD', 'GDPR', 'Pentest'],
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};
