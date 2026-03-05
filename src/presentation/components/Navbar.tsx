import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fadeInDown } from '../styles/animations';
import { useTranslation } from 'react-i18next';

const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  background: ${({ $scrolled, theme }) =>
    $scrolled ? `${theme.colors.background}f0` : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(12px)' : 'none')};
  border-bottom: ${({ $scrolled, theme }) =>
    $scrolled ? `1px solid ${theme.colors.border}` : 'none'};
  transition: all 0.25s ease;
  animation: ${fadeInDown} 0.6s ease-out;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing.md};
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  cursor: pointer;
  text-decoration: none;
`;

const LogoMark = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.text};
  letter-spacing: -0.02em;

  span {
    color: ${props => props.theme.colors.textMuted};
  }
`;

const LogoSub = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-left: 1px solid ${props => props.theme.colors.border};
  padding-left: ${props => props.theme.spacing.sm};

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

const Menu = styled.ul<{ $open: boolean }>`
  display: flex;
  gap: ${props => props.theme.spacing.xl};
  list-style: none;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: ${props => props.theme.colors.backgroundCard}f8;
    backdrop-filter: blur(12px);
    padding: ${props => props.theme.spacing.xl};
    gap: ${props => props.theme.spacing.lg};
    border-bottom: 1px solid ${props => props.theme.colors.border};
    transform: ${({ $open }) => ($open ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.25s ease;
  }
`;

const MenuItem = styled.li``;

const NavLink = styled.a`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  padding: ${props => props.theme.spacing.xs} 0;
  position: relative;
  transition: color 0.2s;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: ${props => props.theme.colors.primary};
    transition: width 0.2s ease;
  }

  &:hover {
    color: ${props => props.theme.colors.text};

    &::after {
      width: 100%;
    }
  }
`;

const ContactBtn = styled.a`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.background};
  background: ${props => props.theme.colors.text};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  transition: all 0.2s ease;
  clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);

  &:hover {
    background: ${props => props.theme.colors.primaryDark};
    transform: translateY(-1px);
  }
`;

const Hamburger = styled.button`
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
    width: 22px;
    height: 2px;
    background: ${props => props.theme.colors.textSecondary};
    transition: all 0.2s ease;
  }
`;

export const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navItems = [
    { key: 'nav.home',     id: 'home'     },
    { key: 'nav.services', id: 'services' },
    { key: 'nav.projects', id: 'projects' },
    { key: 'nav.about',    id: 'about'    },
    { key: 'nav.founder',  id: 'founder'  },
    { key: 'nav.pricing',  id: 'pricing'  },
  ];

  return (
    <Nav $scrolled={scrolled}>
      <Container>
        <Logo onClick={() => go('home')}>
          <LogoMark>FLN<span>.</span></LogoMark>
          <LogoSub>Solutions IT</LogoSub>
        </Logo>

        <Menu $open={menuOpen}>
          {navItems.map(({ key, id }) => (
            <MenuItem key={id}>
              <NavLink onClick={() => go(id)}>{t(key)}</NavLink>
            </MenuItem>
          ))}
          <MenuItem>
            <ContactBtn onClick={() => go('contact')}>{t('nav.contact')}</ContactBtn>
          </MenuItem>
        </Menu>

        <Hamburger onClick={() => setMenuOpen(o => !o)}>
          <span /><span /><span />
        </Hamburger>
      </Container>
    </Nav>
  );
};
