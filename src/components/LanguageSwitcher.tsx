import { useLanguage } from '@/infrastructure/i18n/LanguageContext';
import styled from 'styled-components';
import { media } from '@/styles/media';

const SwitcherContainer = styled.div`
  display: flex;
  background: #1f1f1f;
  border-radius: 8px;
  padding: 4px;
  border: 1px solid #2f2f2f;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
`;

const Button = styled.button`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  padding: 8px 16px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  white-space: nowrap;

  &.active {
    background: #3e3e3e;
    color: #ffffff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  }

  &:hover:not(.active) {
    background: #2f2f2f;
    color: rgba(255, 255, 255, 0.9);
  }

  ${media.mobile`
    padding: 6px 12px;
    font-size: 0.8rem;
    min-width: 70px;
  `}
`;

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'pt', label: 'Português' }
  ];

  return (
    <SwitcherContainer>
      {languages.map((lang) => (
        <Button
          key={lang.code}
          onClick={() => changeLanguage(lang.code as 'en' | 'pt')}
          className={language === lang.code ? 'active' : ''}
        >
          {lang.label}
        </Button>
      ))}
    </SwitcherContainer>
  );
};

export default LanguageSwitcher;
