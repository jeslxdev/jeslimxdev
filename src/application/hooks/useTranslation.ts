import { useTranslation as useI18nTranslation } from 'react-i18next';

// Fallback translations in case i18n is not ready
const fallbackTranslations: Record<string, string> = {
  'nav.home': 'Início',
  'nav.services': 'Serviços',
  'nav.projects': 'Projetos',
  'nav.about': 'Sobre',
  'nav.contact': 'Contato',
  'hero.greeting': 'Olá, eu sou',
  'hero.title': 'João Emanuel',
  'hero.subtitle': 'Desenvolvedor Fullstack',
  'hero.description': 'Transformo ideias em soluções digitais de alta qualidade.',
  'hero.cta.primary': 'Ver Projetos',
  'hero.cta.secondary': 'Entre em Contato',
};

export const useTranslation = () => {
  const { t: i18nT, i18n, ready } = useI18nTranslation();

  const t = (key: string): string => {
    if (!ready) {
      return fallbackTranslations[key] || key;
    }
    return i18nT(key);
  };

  return { t, i18n, ready };
};
