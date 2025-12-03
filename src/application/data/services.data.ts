import type { Service } from '@/domain/entities';

export const services: Service[] = [
  {
    id: '1',
    icon: 'FaMobile',
    title: 'Aplicativos Mobile',
    description: 'Desenvolvimento de aplicativos nativos e híbridos para iOS e Android usando React Native. Aplicações modernas, responsivas e com excelente performance.',
    technologies: ['React Native', 'TypeScript', 'Expo', 'Firebase', 'Redux'],
  },
  {
    id: '2',
    icon: 'FaCode',
    title: 'Sites & Landing Pages',
    description: 'Criação de sites institucionais, landing pages e portfólios com design moderno e otimizado para conversão. SEO, performance e responsividade garantidos.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Styled Components'],
  },
  {
    id: '3',
    icon: 'FaServer',
    title: 'Sistemas Web',
    description: 'Desenvolvimento de sistemas web complexos, ERPs, CRMs e plataformas personalizadas. Arquitetura escalável e segura para seu negócio.',
    technologies: ['PHP', 'Python', 'Node.js', 'Laravel', 'CodeIgniter', 'MySQL', 'PostgreSQL'],
  },
  {
    id: '4',
    icon: 'FaDatabase',
    title: 'APIs & Backend',
    description: 'Criação de APIs RESTful e GraphQL robustas e escaláveis. Integração com sistemas terceiros, microserviços e arquitetura serverless.',
    technologies: ['Node.js', 'Python', 'Express', 'FastAPI', 'Docker', 'AWS'],
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};
