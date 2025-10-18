import styled from 'styled-components';
import { useLayoutEffect, useRef } from 'react';
import { useLanguage } from '@/infrastructure/i18n/LanguageContext';
import { media } from '@/styles/media';
import { LanguageSwitcher } from '@/presentation/components/LanguageSwitcher';

const NavbarWrapper = styled.nav`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: 90%;
  max-width: 1200px;
  padding: 15px 30px;
  background: rgba(27, 61, 80, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);

  ${media.tablet`
    padding: 12px 20px;
    top: 15px;
  `}

  ${media.mobile`
    flex-direction: column;
    gap: 15px;
    padding: 15px 20px;
    border-radius: 30px;
    top: 10px;
    width: 95%;
  `}
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #f5f5f5;
  letter-spacing: 2px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  ${media.tablet`
    font-size: 1.2rem;
  `}

  ${media.mobile`
    font-size: 1.1rem;
  `}
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  ${media.tablet`
    gap: 20px;
  `}

  ${media.mobile`
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  `}
`;

const NavLink = styled.a`
  color: rgba(245, 245, 245, 0.9);
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
  padding: 8px 15px;
  border-radius: 20px;

  &:hover {
    color: #f5f5f5;
    background: rgba(61, 58, 58, 0.5);
    transform: translateY(-2px);
  }

  ${media.tablet`
    font-size: 0.9rem;
    padding: 6px 12px;
  `}

  ${media.mobile`
    font-size: 0.85rem;
    padding: 5px 10px;
  `}
`;

interface NavbarProps {
  onNavigate: (section: string) => void;
}

const Navbar = ({ onNavigate }: NavbarProps) => {
  const { t } = useLanguage();
  const navRef = useRef<HTMLDivElement>(null);

  // Measure navbar height + offset and expose as CSS variables to prevent content overlap
  useLayoutEffect(() => {
    const updateVars = () => {
      const el = navRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const styles = getComputedStyle(el);
      const topPx = parseFloat(styles.top || '0');
      const height = rect.height;
      const offset = Math.round(topPx + height);
      const root = document.documentElement;
      root.style.setProperty('--nav-height', `${Math.round(height)}px`);
      root.style.setProperty('--nav-offset', `${offset}px`);
      // Also a safer top offset that includes safe-area
      const safeTop = Number.parseFloat(getComputedStyle(root).getPropertyValue('--safe-top')) || 0;
      root.style.setProperty('--nav-safe-top', `${offset + safeTop}px`);
    };

    updateVars();
    window.addEventListener('resize', updateVars);
    const ro = new ResizeObserver(updateVars);
    if (navRef.current) ro.observe(navRef.current);
    return () => {
      window.removeEventListener('resize', updateVars);
      ro.disconnect();
    };
  }, []);

  return (
    <NavbarWrapper ref={navRef}>
      <Logo>JE</Logo>
      <NavLinks>
        <NavLink onClick={() => onNavigate('home')}>Home</NavLink>
        <NavLink onClick={() => onNavigate('presentation')}>{t('navbar.presentation')}</NavLink>
        <NavLink onClick={() => onNavigate('projects')}>{t('navbar.projects')}</NavLink>
        <NavLink onClick={() => onNavigate('company')}>{t('navbar.company')}</NavLink>
        <NavLink onClick={() => onNavigate('contact')}>{t('navbar.contact')}</NavLink>
        <LanguageSwitcher />
      </NavLinks>
    </NavbarWrapper>
  );
};

export default Navbar;
