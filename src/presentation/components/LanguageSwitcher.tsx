import styled from 'styled-components';
import { useLanguage } from '@/infrastructure/i18n/LanguageContext';
import type { Language } from '@/infrastructure/i18n/translations';

const SwitcherContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const LanguageButton = styled.button<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${props => props.$isActive ? 'rgba(59, 130, 246, 0.3)' : 'transparent'};
  color: ${props => props.$isActive ? '#fff' : 'rgba(255, 255, 255, 0.7)'};
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: ${props => props.$isActive ? '600' : '500'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const FlagText = styled.span`
  font-size: 1.25rem;
`;

const LanguageLabel = styled.span`
  user-select: none;
`;

const Divider = styled.div`
  width: 1px;
  height: 24px;
  background: rgba(255, 255, 255, 0.15);
`;

const languages = [
  { code: 'pt' as Language, label: 'PT', flag: String.fromCodePoint(0x1F1E7, 0x1F1F7) },
  { code: 'en' as Language, label: 'EN', flag: String.fromCodePoint(0x1F1FA, 0x1F1F8) },
];

export const LanguageSwitcher: React.FC = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <SwitcherContainer>
      {languages.map((lang, index) => (
        <>
          <LanguageButton
            key={lang.code}
            $isActive={language === lang.code}
            onClick={() => changeLanguage(lang.code)}
            type="button"
          >
            <FlagText>{lang.flag}</FlagText>
            <LanguageLabel>{lang.label}</LanguageLabel>
          </LanguageButton>
          {index < languages.length - 1 && <Divider key={`div-${index}`} />}
        </>
      ))}
    </SwitcherContainer>
  );
};
