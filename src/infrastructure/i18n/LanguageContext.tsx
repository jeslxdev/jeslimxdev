/**
 * Language Context - Infrastructure Layer
 * Gerenciamento de estado de idioma sem dependências externas
 * Segue princípios SOLID e Clean Architecture
 */

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import { translations, type Language, type Translations } from './translations';

interface LanguageContextType {
  language: Language;
  translations: Translations;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'preferred-language';

/**
 * Detecta o idioma preferido do usuário
 */
const detectLanguage = (): Language => {
  // 1. Verificar localStorage
  const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
  if (stored && (stored === 'pt' || stored === 'en')) {
    return stored;
  }

  // 2. Verificar idioma do navegador
  const browserLang = navigator.language.split('-')[0];
  if (browserLang === 'pt' || browserLang === 'en') {
    return browserLang as Language;
  }

  // 3. Fallback padrão
  return 'pt';
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(detectLanguage);

  const changeLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, []);

  // Função helper para buscar traduções aninhadas
  const t = useCallback((key: string): string => {
    const keys = key.split('.');
    let result: unknown = translations[language];

    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = (result as Record<string, unknown>)[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }

    return typeof result === 'string' ? result : key;
  }, [language]);

  // Atualizar lang no HTML quando mudar
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value: LanguageContextType = {
    language,
    translations: translations[language],
    changeLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Hook customizado para usar o contexto de idioma
 */
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
