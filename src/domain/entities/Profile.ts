/**
 * Profile Entity - Domain Layer
 * Represents the core business entity for professional profile
 * Follows Single Responsibility Principle (SRP)
 */
export interface Profile {
  readonly name: string;
  readonly role: string;
  readonly specializations: ReadonlyArray<string>;
  readonly description: string;
  readonly skills: ReadonlyArray<Skill>;
  readonly stacks: ReadonlyArray<Stack>;
  readonly softSkills: ReadonlyArray<string>;
}

export interface Skill {
  readonly name: string;
  readonly category: SkillCategoryType;
  readonly level?: SkillLevelType;
}

export interface Stack {
  readonly name: string;
  readonly icon?: string;
  readonly isPrimary: boolean;
}

export const SkillCategory = {
  SECURITY: 'security',
  DEVOPS: 'devops',
  DEVELOPMENT: 'development',
  ARCHITECTURE: 'architecture',
  CLOUD: 'cloud',
  LEADERSHIP: 'leadership',
} as const;

export type SkillCategoryType = typeof SkillCategory[keyof typeof SkillCategory];

export const SkillLevel = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
  EXPERT: 'expert',
} as const;

export type SkillLevelType = typeof SkillLevel[keyof typeof SkillLevel];
