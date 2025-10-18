/**
 * Language Use Case - Domain Layer
 * Interface Segregation Principle (ISP) - specific interface for language operations
 * Dependency Inversion Principle (DIP) - depends on abstractions
 */

export interface ILanguageService {
  getCurrentLanguage(): string;
  changeLanguage(language: string): Promise<void>;
  getSupportedLanguages(): ReadonlyArray<string>;
}

export interface ITranslationService {
  translate(key: string, options?: Record<string, unknown>): string;
  hasTranslation(key: string): boolean;
}
