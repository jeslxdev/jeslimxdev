import { useRef, useState } from 'react';
import styled from 'styled-components';
import { useLanguage } from '@/infrastructure/i18n/LanguageContext';
import { media } from '@/styles/media';
import { LanguageSwitcher } from '@/presentation/components/LanguageSwitcher';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarWrapper = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
  z-index: 1000;
  width: auto;
  max-width: 280px;
  padding: 16px 20px;
  background: rgba(1, 25, 30, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(47, 47, 47, 0.3);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.3s ease;
  opacity: 0.9;

  &:hover {
    background: rgba(1, 19, 23, 0.85);
    opacity: 1;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
    transform: translateY(-50%) scale(1.02);
  }

  ${media.laptopLarge`
    padding: 14px 18px;
    gap: 18px;
    right: 20px;
  `}

  ${media.laptop`
    padding: 12px 16px;
    gap: 16px;
    right: 16px;
  `}

  ${media.tablet`
    top: 20px;
    right: 20px;
    transform: translateY(0);
    border-radius: 16px;
    padding: 12px 16px;
    gap: 14px;
    flex-direction: row;
    align-items: center;
    max-width: none;
    width: auto;

    &:hover {
      transform: translateY(0) scale(1.02);
    }
  `}

  ${media.mobile`
    top: 0;
    right: 0;
    bottom: 0;
    width: 280px;
    max-width: 80vw;
    height: 100vh;
    padding: 20px;
    gap: 16px;
    border-radius: 0;
    flex-direction: column;
    align-items: stretch;
    transform: translateX(${props => props.$isOpen ? '0' : '100%'});
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background: rgba(1, 25, 30, 0.95);
    backdrop-filter: blur(30px);
    border: none; /* Remove todas as bordas no mobile */

    &:hover {
      transform: translateX(${props => props.$isOpen ? '0' : '100%'});
    }
  `}
`;

const MobileToggle = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1001;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 12px;
  background: rgba(1, 25, 30, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(47, 47, 47, 0.3);
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: none;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(1, 19, 23, 0.95);
    transform: scale(1.05);
    color: #ffffff;
  }

  ${media.mobile`
    display: flex;
  `}
`;

const MobileBackdrop = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 999;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  display: none;

  ${media.mobile`
    display: block;
  `}
`;

const CloseButton = styled.button`
  display: none;
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
    background: rgba(47, 47, 47, 0.3);
  }

  ${media.mobile`
    display: block;
  `}
`;

interface NavbarProps {
  onNavigate: (section: string) => void;
}

const Navbar = ({ onNavigate }: NavbarProps) => {
  const { t } = useLanguage();
  const navRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    onNavigate('home');
    setIsOpen(false);
  };

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <MobileToggle onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileToggle>

      <MobileBackdrop $isOpen={isOpen} onClick={closeMenu} />

      <NavbarWrapper ref={navRef} $isOpen={isOpen}>
        <CloseButton onClick={closeMenu}>
          <FaTimes />
        </CloseButton>

        <div onClick={handleLogoClick} style={{
          fontSize: '1.4rem',
          fontWeight: 700,
          color: 'rgba(255, 255, 255, 0.9)',
          cursor: 'pointer',
          textAlign: 'center',
          padding: '8px',
          borderRadius: '12px',
          background: 'rgba(47, 47, 47, 0.2)'
        }}>
          JE
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          background: 'rgba(31, 31, 31, 0.4)',
          borderRadius: '16px',
          padding: '12px 8px',
          border: '1px solid rgba(47, 47, 47, 0.3)'
        }}>
          <button onClick={() => handleNavClick('home')} style={{
            background: 'transparent',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '0.85rem',
            fontWeight: 500,
            cursor: 'pointer',
            padding: '8px 12px',
            borderRadius: '10px',
            transition: 'all 0.3s ease'
          }}>
            Home
          </button>

          <button onClick={() => handleNavClick('projects')} style={{
            background: 'transparent',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '0.85rem',
            fontWeight: 500,
            cursor: 'pointer',
            padding: '8px 12px',
            borderRadius: '10px',
            transition: 'all 0.3s ease'
          }}>
            {t('navbar.projects')}
          </button>

          <button onClick={() => handleNavClick('company')} style={{
            background: 'transparent',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '0.85rem',
            fontWeight: 500,
            cursor: 'pointer',
            padding: '8px 12px',
            borderRadius: '10px',
            transition: 'all 0.3s ease'
          }}>
            {t('navbar.company')}
          </button>

          <button onClick={() => handleNavClick('contact')} style={{
            background: 'transparent',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '0.85rem',
            fontWeight: 500,
            cursor: 'pointer',
            padding: '8px 12px',
            borderRadius: '10px',
            transition: 'all 0.3s ease'
          }}>
            {t('navbar.contact')}
          </button>

          <div style={{
            marginTop: '16px',
            paddingTop: '16px',
            borderTop: '1px solid rgba(47, 47, 47, 0.3)',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <LanguageSwitcher />
          </div>
        </div>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
