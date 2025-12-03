import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fadeInDown } from '../styles/animations';
import { useTranslation } from 'react-i18next';

const Nav = styled.nav<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  background-color: ${({ $isScrolled, theme }) =>
    $isScrolled ? `${theme.colors.backgroundCard}ee` : 'transparent'};
  backdrop-filter: ${({ $isScrolled }) => ($isScrolled ? 'blur(10px)' : 'none')};
  border-bottom: ${({ $isScrolled, theme }) =>
    $isScrolled ? `1px solid ${theme.colors.border}` : 'none'};
  transition: all ${props => props.theme.transitions.base};
  animation: ${fadeInDown} 0.6s ease-out;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing.md};
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: ${props => props.theme.fontWeights.extrabold};
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.base};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
    transition: width ${props => props.theme.transitions.base};
    border-radius: ${props => props.theme.borderRadius.full};
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

const Menu = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  gap: ${props => props.theme.spacing.xl};
  list-style: none;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: ${props => props.theme.colors.backgroundCard}fa;
    backdrop-filter: blur(10px);
    padding: ${props => props.theme.spacing.xl};
    gap: ${props => props.theme.spacing.lg};
    transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform ${props => props.theme.transitions.base};
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }
`;

const MenuItem = styled.li``;

const MenuLink = styled.a`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: ${props => props.theme.fontWeights.medium};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.lg};
  transition: all ${props => props.theme.transitions.base};
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
    transition: width ${props => props.theme.transitions.base};
    border-radius: ${props => props.theme.borderRadius.full};
  }

  &:hover {
    color: ${props => props.theme.colors.text};

    &::after {
      width: 70%;
    }
  }
`;

const CTAButton = styled.a`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: ${props => props.theme.colors.text};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: ${props => props.theme.fontWeights.semibold};
  transition: all ${props => props.theme.transitions.base};
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4);

    &::before {
      left: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: ${props => props.theme.spacing.sm};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
  }

  span {
    width: 25px;
    height: 3px;
    background-color: ${props => props.theme.colors.text};
    border-radius: ${props => props.theme.borderRadius.sm};
    transition: all ${props => props.theme.transitions.base};
  }
`;

export const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <Nav $isScrolled={isScrolled}>
      <Container>
        <Logo onClick={() => scrollToSection('home')}>{'<JE />'}</Logo>

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span />
          <span />
          <span />
        </MobileMenuButton>

        <Menu $isOpen={isMobileMenuOpen}>
          <MenuItem>
            <MenuLink onClick={() => scrollToSection('home')}>
              {t('nav.home')}
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink onClick={() => scrollToSection('services')}>
              {t('nav.services')}
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink onClick={() => scrollToSection('pricing')}>
              {t('nav.pricing')}
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink onClick={() => scrollToSection('projects')}>
              {t('nav.projects')}
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink onClick={() => scrollToSection('about')}>
              {t('nav.about')}
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <CTAButton onClick={() => scrollToSection('contact')}>
              {t('nav.contact')}
            </CTAButton>
          </MenuItem>
        </Menu>
      </Container>
    </Nav>
  );
};
