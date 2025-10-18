/**
 * Language Switcher Component - Presentation Layer
 * Single Responsibility: Handle language switching UI only
 * Open/Closed: Can be extended with new animations without modifying core logic
 */

import { useState, useCallback, Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const SwitcherContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.3s ease-out;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const LanguageButton = styled.button<{ $isActive: boolean; $isAnimating: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${props => props.$isActive
    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(99, 102, 241, 0.3))'
    : 'transparent'};
  color: ${props => props.$isActive ? '#fff' : 'rgba(255, 255, 255, 0.7)'};
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: ${props => props.$isActive ? '600' : '500'};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(99, 102, 241, 0.4));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover:not(:disabled) {
    color: #fff;
    transform: translateY(-2px);

    &::before {
      opacity: 1;
    }
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  ${props => props.$isAnimating && `
    animation: ${pulse} 0.4s ease-out;
  `}

  ${props => props.$isActive && `
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
  `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const FlagEmoji = styled.span<{ $isAnimating: boolean }>`
  font-size: 1.2rem;
  line-height: 1;
  display: inline-block;
  transition: transform 0.3s ease;

  ${props => props.$isAnimating && `
    animation: ${slideIn} 0.4s ease-out;
  `}
`;

const LanguageLabel = styled.span`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  letter-spacing: 0.02em;
`;

const Divider = styled.div`
  width: 1px;
  height: 24px;
  background: rgba(255, 255, 255, 0.15);
`;

interface LanguageOption {
  code: string;
  label: string;
  flag: string;
}

const languages: ReadonlyArray<LanguageOption> = [
  { code: 'pt', label: 'PT', flag: '🇧🇷' },
  { code: 'en', label: 'EN', flag: '🇺🇸' },
];

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isAnimating, setIsAnimating] = useState<string | null>(null);

  // Normalizar o código do idioma (remover região se houver)
  const getCurrentLanguageCode = () => {
    const currentLang = i18n.language || 'pt';
    return currentLang.split('-')[0]; // 'pt-BR' -> 'pt'
  };

  const handleLanguageChange = useCallback(async (languageCode: string) => {
    const currentCode = i18n.language?.split('-')[0] || 'pt';

    if (currentCode === languageCode || isAnimating) {
      return;
    }

    setIsAnimating(languageCode);

    try {
      await i18n.changeLanguage(languageCode);

      // Manter animação por um curto período
      setTimeout(() => {
        setIsAnimating(null);
      }, 400);
    } catch (error) {
      console.error('Failed to change language:', error);
      setIsAnimating(null);
    }
  }, [i18n, isAnimating]);

  const currentLangCode = getCurrentLanguageCode();

  return (
    <SwitcherContainer>
      {languages.map((lang, index) => (
        <Fragment key={lang.code}>
          <LanguageButton
            $isActive={currentLangCode === lang.code}
            $isAnimating={isAnimating === lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            disabled={!!isAnimating}
            aria-label={`Switch to ${lang.label}`}
            aria-pressed={currentLangCode === lang.code}
          >
            <FlagEmoji $isAnimating={isAnimating === lang.code}>
              {lang.flag}
            </FlagEmoji>
            <LanguageLabel>{lang.label}</LanguageLabel>
          </LanguageButton>
          {index < languages.length - 1 && <Divider />}
        </Fragment>
      ))}
    </SwitcherContainer>
  );
};
