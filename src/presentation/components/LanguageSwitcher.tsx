import styled from 'styled-components';
import React from 'react';
import { useLanguage } from '@/infrastructure/i18n/LanguageContext';
import { media } from '@/styles/media';
import type { Language } from '@/infrastructure/i18n/translations';

const SwitcherContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: #1f1f1f;
  border: 1px solid #2f2f2f;
  border-radius: 12px;
  padding: 0.25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: #2f2f2f;
    border-color: #3e3e3e;
  }

  ${media.mobile`
    border-radius: 10px;
    padding: 0.2rem;
  `}
`;

const LanguageButton = styled.button<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${props => props.$isActive ? '#3e3e3e' : 'transparent'};
  color: ${props => props.$isActive ? '#fff' : 'rgba(255, 255, 255, 0.7)'};
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: ${props => props.$isActive ? '600' : '500'};
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    color: #fff;
    background: ${props => props.$isActive ? '#3e3e3e' : '#2f2f2f'};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  ${media.tablet`
    padding: 0.45rem 0.9rem;
    font-size: 0.85rem;
  `}

  ${media.mobile`
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
    border-radius: 6px;
  `}
`;

const LanguageLabel = styled.span`
  user-select: none;

  ${media.mobile`
    display: none;
  `}
`;

const LanguageCode = styled.span`
  display: none;
  user-select: none;
  text-transform: uppercase;
  font-weight: 600;

  ${media.mobile`
    display: block;
  `}
`;

const Divider = styled.div`
  width: 1px;
  height: 24px;
  background: #2f2f2f;

  ${media.mobile`
    height: 20px;
  `}
`;

const languages = [
  { code: 'pt' as Language, label: 'Português' },
  { code: 'en' as Language, label: 'English' },
];

export const LanguageSwitcher: React.FC = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <SwitcherContainer>
      {languages.map((lang, index) => (
        <React.Fragment key={lang.code}>
          <LanguageButton
            $isActive={language === lang.code}
            onClick={() => changeLanguage(lang.code)}
            type="button"
          >
            <LanguageLabel>{lang.label}</LanguageLabel>
            <LanguageCode>{lang.code}</LanguageCode>
          </LanguageButton>
          {index < languages.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </SwitcherContainer>
  );
};
