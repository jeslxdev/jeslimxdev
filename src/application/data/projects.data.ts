import type { Project } from '@/domain/entities';
import { ProjectCategory } from '@/domain/entities';
import erpextdsImg from '@/assets/erpextds.png';
import viajesnonesImg from '@/assets/viajesnones.png';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Sistema ERP - EXTDS Portugal',
    description: 'Sistema ERP certificado pela Autoridade Tributária de Portugal. Solução completa de faturação seguindo rigorosamente as normas AT portuguesas. Desenvolvido com CodeIgniter 3, PHP 8.1 e backend Python para APIs robustas.',
    technologies: ['PHP 8.1', 'CodeIgniter 3', 'Python', 'MySQL', 'REST API', 'JavaScript', 'AT Compliance'],
    category: ProjectCategory.ERP,
    url: 'https://erp.extds.pt',
    image: erpextdsImg,
    featured: true,
    year: '2024 - Atual',
  },
  {
    id: '2',
    title: 'Meet2Face - App para Baladas',
    description: 'Aplicativo mobile inovador para conectar pessoas em eventos e baladas na Espanha. Plataforma completa com geolocalização, chat em tempo real, perfis de usuário e sistema de matchmaking para eventos noturnos.',
    technologies: ['React Native', 'Node.js', 'Socket.io', 'MongoDB', 'Geolocation API', 'Push Notifications'],
    category: ProjectCategory.MOBILE,
    featured: true,
    year: '2025',
  },
  {
    id: '3',
    title: 'Viaje Nones - Site WordPress',
    description: 'Site institucional em WordPress para agência de viagens espanhola. Design responsivo e moderno, otimizado para SEO, com sistema de reservas integrado e galeria de destinos turísticos.',
    technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'SEO', 'Responsive Design'],
    category: ProjectCategory.WEB,
    url: 'https://nones.es',
    image: viajesnonesImg,
    featured: true,
    year: '2025',
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  return projects.filter((project) => project.category === category);
};
