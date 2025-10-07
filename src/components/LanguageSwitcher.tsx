import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { media } from '../styles/media';

const SwitcherContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  ${media.mobile`
    position: static;
    margin-bottom: 15px;
  `}
`;

const Button = styled.button`
  background: none;
  border: 1px solid white;
  color: white;
  padding: 5px 10px;
  margin-left: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &.active {
    background: white;
    color: #282c34;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
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
