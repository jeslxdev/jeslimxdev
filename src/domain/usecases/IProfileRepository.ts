/**
 * Profile Repository Interface - Domain Layer
 * Repository Pattern following DIP (Dependency Inversion Principle)
 */

import type { Profile } from '../entities/Profile';

export interface IProfileRepository {
  getProfile(language: string): Promise<Profile>;
  updateProfile(profile: Profile): Promise<void>;
}
