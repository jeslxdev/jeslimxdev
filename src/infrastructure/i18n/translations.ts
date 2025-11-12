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
    projects: string;
    company: string;
    contact: string;
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
  // no explicit tests section
  company: {
    title: string;
    technologies: string;
    builders: string;
    extds: string;
  };
  contact: {
    title: string;
    subtitle: string;
    linkedin: string;
    email: string;
    github: string;
  };
}

export const translations: Record<Language, Translations> = {
  pt: {
    title: 'João Emanuel',
    subtitle: 'Desenvolvedor de Software | DevOps | Cibersegurança',
    aboutTitle: 'Sobre Mim',
    aboutText: 'Desenvolvedor de Software com foco em back-end e integração, entregando APIs RESTful escaláveis e seguras para plataformas web e mobile. Experiência com PHP (Laravel, Hyperf, Slim), Node.js/NestJS (TypeScript), Python e Java; mensageria com Kafka; containers com Docker; pipelines CI/CD (Azure DevOps) e bancos relacionais (SQL Server, MySQL). Atuação em produtos corporativos e modernização de legados (UNICRED, Zallpy, Facta), aplicando Clean Architecture, SOLID, DDD, testes e observabilidade.',
    technologiesTitle: 'Tecnologias & Ferramentas',
    navbar: {
      projects: 'Projetos',
      company: 'Experiência',
      contact: 'Contato',
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
        title: 'CRM Web/Mobile e APIs — UNICRED',
        description: 'APIs RESTful em PHP/Hyperf e NestJS (TypeScript), mensageria com Kafka, roteiros de CI/CD no Azure DevOps, autenticação e observabilidade. Entregas com foco em throughput, segurança e consistência.',
      },
      project2: {
        title: 'Modernização de Legados — Facta Financeira',
        description: 'Refatoração de módulos críticos (Estrutura, Portais, CRM, Seguros, Cartões) em PHP (CodeIgniter/Laravel/Yii) e Python; integrações com APIs Dock (boletos/cartões); automação de rotinas e hardening de segurança.',
      },
      project3: {
        title: 'Microserviços e Apps — Zallpy',
        description: 'Serviços backend e aplicações web/mobile com PHP, NestJS e Python; containerização com Docker; mensageria Kafka; SQL Server. Ênfase em performance, testes e métricas.',
      },
    },
    // tests section intentionally omitted
    company: {
      title: 'Experiência Profissional',
      technologies: 'Tecnologias & Ferramentas',
      builders: 'Desenvolvedor de Software especializado em segurança, DevOps e arquiteturas escaláveis. Desenvolvimento de soluções críticas com foco em performance e proteção de dados.',
      extds: 'Liderança técnica e gestão de projetos internacionais, coordenando equipes e implementando soluções de alto impacto com foco em qualidade e segurança.',
    },
    contact: {
      title: 'Vamos Conversar!',
      subtitle: 'Vamos trabalhar juntos! Entre em contato através de qualquer um desses canais.',
      linkedin: 'Conecte-se comigo no LinkedIn',
      email: 'Envie-me um email',
      github: 'Confira meu código no GitHub',
    },
  },
  en: {
    title: 'João Emanuel',
    subtitle: 'Software Developer | DevOps | Cybersecurity',
    aboutTitle: 'About Me',
    aboutText: 'Software Developer focused on back-end and integrations, delivering secure and scalable RESTful APIs for web and mobile platforms. Experience with PHP (Laravel, Hyperf, Slim), Node.js/NestJS (TypeScript), Python, and Java; Kafka for messaging; Docker for containers; CI/CD in Azure DevOps; and relational databases (SQL Server, MySQL). Work on corporate products and legacy modernization (UNICRED, Zallpy, Facta), applying Clean Architecture, SOLID, DDD, testing, and observability.',
    technologiesTitle: 'Technologies & Tools',
    navbar: {
      projects: 'Projects',
      company: 'Company',
      contact: 'Contact',
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
        title: 'Web/Mobile CRM & APIs — UNICRED',
        description: 'RESTful APIs in PHP/Hyperf and NestJS (TypeScript), Kafka messaging, Azure DevOps CI/CD pipelines, authentication, and observability. Delivery focused on throughput, security, and consistency.',
      },
      project2: {
        title: 'Legacy Modernization — Facta Financeira',
        description: 'Refactoring critical modules (Structure, Portals, CRM, Insurance, Cards) in PHP (CodeIgniter/Laravel/Yii) and Python; integrations with Dock APIs (boletos/cards); routine automation and security hardening.',
      },
      project3: {
        title: 'Microservices & Apps — Zallpy',
        description: 'Backend services and web/mobile apps with PHP, NestJS, and Python; Docker containerization; Kafka messaging; SQL Server. Focus on performance, testing, and metrics.',
      },
    },
    // tests section intentionally omitted
    company: {
      title: 'Professional Experience',
      technologies: 'Technologies & Tools',
      builders: 'Software Developer specialized in security, DevOps, and scalable architectures. Development of critical solutions with focus on performance and data protection.',
      extds: 'Technical leadership and international project management, coordinating teams and implementing high-impact solutions with focus on quality and security.',
    },
    contact: {
      title: "Let's Connect!",
      subtitle: "Let's work together! Get in touch through any of these channels.",
      linkedin: 'Connect with me on LinkedIn',
      email: 'Send me an email',
      github: 'Check out my code on GitHub',
    },
  },
};
