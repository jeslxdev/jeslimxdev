/**
 * Profile Repository Implementation - Application Layer
 * Repository Pattern implementation with mock data
 * Open/Closed Principle (OCP) - open for extension, closed for modification
 */

import type { Profile } from '@/domain/entities/Profile';
import type { IProfileRepository } from '@/domain/usecases/IProfileRepository';
import { SkillCategory } from '@/domain/entities/Profile';

export class ProfileRepository implements IProfileRepository {
  private readonly profileData: Record<string, Profile> = {
    pt: {
      name: 'João',
      role: 'Engenheiro de Software',
      specializations: ['InfoSec', 'DevOps', 'Cibersegurança'],
      description: `Engenheiro de Software especializado em InfoSec, DevOps e Cibersegurança, com forte atuação no desenvolvimento de soluções robustas e escaláveis.

Desenvolvimento focado em alta performance, segurança de ponta e arquiteturas escaláveis, aplicando rigorosamente os princípios de Clean Code, Clean Architecture, SOLID e Domain-Driven Design (DDD).

Expertise técnica em infraestrutura cloud (Cloudflare), containerização (Docker), automação de CI/CD e desenvolvimento em múltiplas linguagens, com domínio das stacks principais: PHP, NestJS, Python, React e Java.

Habilidades interpessoais comprovadas em liderança técnica, gestão estratégica de projetos e tradução eficiente de regras de negócio em soluções tecnológicas de alto impacto.`,
      skills: [
        { name: 'Clean Code', category: SkillCategory.ARCHITECTURE },
        { name: 'Clean Architecture', category: SkillCategory.ARCHITECTURE },
        { name: 'SOLID', category: SkillCategory.ARCHITECTURE },
        { name: 'DDD', category: SkillCategory.ARCHITECTURE },
        { name: 'InfoSec', category: SkillCategory.SECURITY },
        { name: 'DevOps', category: SkillCategory.DEVOPS },
        { name: 'Cibersegurança', category: SkillCategory.SECURITY },
        { name: 'Cloudflare', category: SkillCategory.CLOUD },
        { name: 'Docker', category: SkillCategory.DEVOPS },
        { name: 'CI/CD', category: SkillCategory.DEVOPS },
        { name: 'Performance', category: SkillCategory.DEVELOPMENT },
        { name: 'Segurança', category: SkillCategory.SECURITY },
      ],
      stacks: [
        { name: 'PHP', isPrimary: true },
        { name: 'NestJS', isPrimary: true },
        { name: 'Python', isPrimary: true },
        { name: 'React', isPrimary: true },
        { name: 'Java', isPrimary: true },
      ],
      softSkills: [
        'Liderança Técnica',
        'Gestão de Projetos',
        'Desenvolvimento de Regras de Negócio',
        'Comunicação Efetiva',
        'Resolução de Problemas',
      ],
    },
    en: {
      name: 'João',
      role: 'Software Engineer',
      specializations: ['InfoSec', 'DevOps', 'Cybersecurity'],
      description: `Software Engineer specialized in InfoSec, DevOps, and Cybersecurity, with strong expertise in developing robust and scalable solutions.

Development focused on high performance, top-tier security, and scalable architectures, rigorously applying Clean Code, Clean Architecture, SOLID, and Domain-Driven Design (DDD) principles.

Technical expertise in cloud infrastructure (Cloudflare), containerization (Docker), CI/CD automation, and multi-language development, with mastery of primary stacks: PHP, NestJS, Python, React, and Java.

Proven interpersonal skills in technical leadership, strategic project management, and efficient translation of business rules into high-impact technological solutions.`,
      skills: [
        { name: 'Clean Code', category: SkillCategory.ARCHITECTURE },
        { name: 'Clean Architecture', category: SkillCategory.ARCHITECTURE },
        { name: 'SOLID', category: SkillCategory.ARCHITECTURE },
        { name: 'DDD', category: SkillCategory.ARCHITECTURE },
        { name: 'InfoSec', category: SkillCategory.SECURITY },
        { name: 'DevOps', category: SkillCategory.DEVOPS },
        { name: 'Cybersecurity', category: SkillCategory.SECURITY },
        { name: 'Cloudflare', category: SkillCategory.CLOUD },
        { name: 'Docker', category: SkillCategory.DEVOPS },
        { name: 'CI/CD', category: SkillCategory.DEVOPS },
        { name: 'Performance', category: SkillCategory.DEVELOPMENT },
        { name: 'Security', category: SkillCategory.SECURITY },
      ],
      stacks: [
        { name: 'PHP', isPrimary: true },
        { name: 'NestJS', isPrimary: true },
        { name: 'Python', isPrimary: true },
        { name: 'React', isPrimary: true },
        { name: 'Java', isPrimary: true },
      ],
      softSkills: [
        'Technical Leadership',
        'Project Management',
        'Business Rules Development',
        'Effective Communication',
        'Problem Solving',
      ],
    },
  };

  async getProfile(language: string): Promise<Profile> {
    const profile = this.profileData[language] || this.profileData['en'];
    return Promise.resolve(profile);
  }

  async updateProfile(_profile: Profile): Promise<void> {
    // Implementation for updating profile
    return Promise.resolve();
  }
}
