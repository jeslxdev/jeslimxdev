/**
 * Translation Dictionary - Infrastructure Layer
 * Contém todas as traduções em TypeScript puro
 * Melhor performance e type-safety
 */

export type Language = 'pt' | 'en';

export interface Translations {
  title: string;
  subtitle: string;
  aboutTitle: string;
  aboutText: string;
  technologiesTitle: string;
  navbar: {
    presentation: string;
    projects: string;
    company: string;
    contact: string;
  };
  presentation: {
    title: string;
    intro: string;
    experience: string;
    passion: string;
  };
  skills: {
    architecture: string;
    security: string;
    devops: string;
    development: string;
    cloud: string;
    leadership: string;
  };
  projects: {
    title: string;
    project1: {
      title: string;
      description: string;
    };
    project2: {
      title: string;
      description: string;
    };
    project3: {
      title: string;
      description: string;
    };
  };
  company: {
    title: string;
    technologies: string;
    builders: string;
    extds: string;
  };
  contact: {
    title: string;
    linkedin: string;
    email: string;
    github: string;
  };
}

export const translations: Record<Language, Translations> = {
  pt: {
    title: 'João Emanuel (Eslimx)',
    subtitle: 'Engenheiro de Software | InfoSec | DevOps | Cibersegurança',
    aboutTitle: 'Sobre Mim',
    aboutText: 'Engenheiro de Software especializado em InfoSec, DevOps e Cibersegurança. Desenvolvimento focado em alta performance, segurança e arquiteturas escaláveis, aplicando Clean Code, Clean Architecture, SOLID e DDD. Expertise em Cloudflare, Docker e CI/CD. Stacks principais: PHP, NestJS, Python, React e Java.',
    technologiesTitle: 'Tecnologias & Ferramentas',
    navbar: {
      presentation: 'Sobre',
      projects: 'Projetos',
      company: 'Empresa',
      contact: 'Contato',
    },
    presentation: {
      title: 'Sobre Mim',
      intro: 'Engenheiro de Software especializado em InfoSec, DevOps e Cibersegurança, com forte atuação no desenvolvimento de soluções robustas e escaláveis.',
      experience: 'Desenvolvimento focado em alta performance, segurança de ponta e arquiteturas escaláveis, aplicando rigorosamente os princípios de Clean Code, Clean Architecture, SOLID e Domain-Driven Design (DDD). Expertise técnica em infraestrutura cloud (Cloudflare), containerização (Docker), automação de CI/CD e desenvolvimento em múltiplas linguagens.',
      passion: 'Domínio das stacks principais: PHP, NestJS, Python, React e Java. Habilidades interpessoais comprovadas em liderança técnica, gestão estratégica de projetos e tradução eficiente de regras de negócio em soluções tecnológicas de alto impacto.',
    },
    skills: {
      architecture: 'Arquitetura',
      security: 'Segurança',
      devops: 'DevOps',
      development: 'Desenvolvimento',
      cloud: 'Cloud',
      leadership: 'Liderança',
    },
    projects: {
      title: 'Meus Projetos',
      project1: {
        title: 'Infraestrutura Cloud Segura',
        description: 'Arquitetura de infraestrutura escalável utilizando Cloudflare, Docker e CI/CD com foco em alta disponibilidade e segurança avançada.',
      },
      project2: {
        title: 'Sistema de Monitoramento de Segurança',
        description: 'Plataforma de monitoramento em tempo real com análise de vulnerabilidades, detecção de ameaças e automação de resposta a incidentes.',
      },
      project3: {
        title: 'Arquitetura Clean com DDD',
        description: 'Implementação de sistemas corporativos aplicando Clean Architecture, SOLID e Domain-Driven Design para máxima manutenibilidade e escalabilidade.',
      },
    },
    company: {
      title: 'Experiência Profissional',
      technologies: 'Tecnologias & Ferramentas',
      builders: 'Engenheiro de Software especializado em segurança, DevOps e arquiteturas escaláveis. Desenvolvimento de soluções críticas com foco em performance e proteção de dados.',
      extds: 'Liderança técnica e gestão de projetos internacionais, coordenando equipes e implementando soluções de alto impacto com foco em qualidade e segurança.',
    },
    contact: {
      title: 'Vamos Conversar!',
      linkedin: 'Conecte-se comigo no LinkedIn',
      email: 'Envie-me um email',
      github: 'Confira meu código no GitHub',
    },
  },
  en: {
    title: 'João Emanuel (Eslimx)',
    subtitle: 'Software Engineer | InfoSec | DevOps | Cybersecurity',
    aboutTitle: 'About Me',
    aboutText: 'Software Engineer specialized in InfoSec, DevOps, and Cybersecurity. Development focused on high performance, security, and scalable architectures, applying Clean Code, Clean Architecture, SOLID, and DDD. Expertise in Cloudflare, Docker, and CI/CD. Primary stacks: PHP, NestJS, Python, React, and Java.',
    technologiesTitle: 'Technologies & Tools',
    navbar: {
      presentation: 'About',
      projects: 'Projects',
      company: 'Company',
      contact: 'Contact',
    },
    presentation: {
      title: 'About Me',
      intro: 'Software Engineer specialized in InfoSec, DevOps, and Cybersecurity, with strong expertise in developing robust and scalable solutions.',
      experience: 'Development focused on high performance, top-tier security, and scalable architectures, rigorously applying Clean Code, Clean Architecture, SOLID, and Domain-Driven Design (DDD) principles. Technical expertise in cloud infrastructure (Cloudflare), containerization (Docker), CI/CD automation, and multi-language development.',
      passion: 'Mastery of primary stacks: PHP, NestJS, Python, React, and Java. Proven interpersonal skills in technical leadership, strategic project management, and efficient translation of business rules into high-impact technological solutions.',
    },
    skills: {
      architecture: 'Architecture',
      security: 'Security',
      devops: 'DevOps',
      development: 'Development',
      cloud: 'Cloud',
      leadership: 'Leadership',
    },
    projects: {
      title: 'My Projects',
      project1: {
        title: 'Secure Cloud Infrastructure',
        description: 'Scalable infrastructure architecture using Cloudflare, Docker, and CI/CD with focus on high availability and advanced security.',
      },
      project2: {
        title: 'Security Monitoring System',
        description: 'Real-time monitoring platform with vulnerability analysis, threat detection, and automated incident response.',
      },
      project3: {
        title: 'Clean Architecture with DDD',
        description: 'Implementation of enterprise systems applying Clean Architecture, SOLID, and Domain-Driven Design for maximum maintainability and scalability.',
      },
    },
    company: {
      title: 'Professional Experience',
      technologies: 'Technologies & Tools',
      builders: 'Software Engineer specialized in security, DevOps, and scalable architectures. Development of critical solutions with focus on performance and data protection.',
      extds: 'Technical leadership and international project management, coordinating teams and implementing high-impact solutions with focus on quality and security.',
    },
    contact: {
      title: "Let's Connect!",
      linkedin: 'Connect with me on LinkedIn',
      email: 'Send me an email',
      github: 'Check out my code on GitHub',
    },
  },
};
