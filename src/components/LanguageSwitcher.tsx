import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { media } from '../styles/media';

const SwitcherContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Button = styled.button`
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #f5f5f5;
  padding: 8px 15px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  border-radius: 20px;

  &.active {
    background: rgba(61, 58, 58, 0.6);
    border-color: rgba(255, 255, 255, 0.3);
    color: #f5f5f5;
  }

  &:hover {
    background: rgba(61, 58, 58, 0.4);
    border-color: rgba(255, 255, 255, 0.3);
  }

  ${media.mobile`
    padding: 6px 12px;
    font-size: 0.85rem;
  `}
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <SwitcherContainer>
      <Button 
        onClick={() => changeLanguage('en')}
        className={i18n.language.startsWith('en') ? 'active' : ''}
      >
        EN
      </Button>
      <Button 
        onClick={() => changeLanguage('pt')}
        className={i18n.language.startsWith('pt') ? 'active' : ''}
      >
        PT
      </Button>
    </SwitcherContainer>
  );
};

export default LanguageSwitcher;
