/**
 * Language Service Implementation - Application Layer
 * Implements domain interfaces following DIP
 * Single Responsibility: Manages language operations only
 */

import type { ILanguageService } from '@/domain/usecases/ILanguageService';

export class LanguageService implements ILanguageService {
  private currentLanguage: string = 'pt';
  private readonly supportedLanguages: ReadonlyArray<string> = ['pt', 'en'];
  private languageChangeCallback?: (language: string) => Promise<void>;

  constructor(changeCallback?: (language: string) => Promise<void>) {
    this.languageChangeCallback = changeCallback;
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  async changeLanguage(language: string): Promise<void> {
    if (!this.supportedLanguages.includes(language)) {
      throw new Error(`Unsupported language: ${language}`);
    }

    this.currentLanguage = language;

    if (this.languageChangeCallback) {
      await this.languageChangeCallback(language);
    }
  }

  getSupportedLanguages(): ReadonlyArray<string> {
    return this.supportedLanguages;
  }
}
