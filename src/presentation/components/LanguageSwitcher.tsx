import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

const Container = styled.div`
  position: fixed;
  bottom: ${props => props.theme.spacing.xl};
  right: ${props => props.theme.spacing.xl};
  z-index: ${props => props.theme.zIndex.fixed};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    bottom: ${props => props.theme.spacing.lg};
    right: ${props => props.theme.spacing.lg};
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  background: ${props => props.theme.colors.backgroundCard};
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.textSecondary};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.medium};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.base};
  box-shadow: ${props => props.theme.shadows.lg};

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.xl};
  }

  svg {
    font-size: ${props => props.theme.fontSizes.base};
  }
`;

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  const currentLanguageLabel = i18n.language === 'pt' ? 'PT' : 'EN';

  return (
    <Container>
      <Button onClick={toggleLanguage} aria-label="Change language">
        <FaGlobe />
        {currentLanguageLabel}
      </Button>
    </Container>
  );
};
