import styled from 'styled-components';
import { useLayoutEffect, useRef } from 'react';
import { ContentContainer } from '@/styles/ContentContainer';

const FooterWrapper = styled.footer`
  background: rgba(255, 255, 255, 0.02); /* Aumentada transparência - apenas 2% */
  backdrop-filter: blur(10px); /* Reduzido blur para mostrar mais o background */
  padding: 16px 20px calc(16px + var(--safe-bottom));
  color: #f5f5f5;
  width: 100%;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1); /* Border mais sutil */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1100;
  min-height: 60px; /* Altura mínima garantida */
`;

const Link = styled.a`
  color: #f5f5f5;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
    color: rgba(245, 245, 245, 0.7);
  }
`;

const Footer = () => {
  const ref = useRef<HTMLElement>(null);

  // Measure footer height and expose CSS variables to avoid content overlap
  useLayoutEffect(() => {
    const updateVars = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const height = Math.round(rect.height);
      const root = document.documentElement;
      root.style.setProperty('--footer-height', `${height}px`);
      const safeBottom = Number.parseFloat(getComputedStyle(root).getPropertyValue('--safe-bottom')) || 0;
      root.style.setProperty('--footer-safe-bottom', `${height + safeBottom}px`);
    };
    updateVars();
    window.addEventListener('resize', updateVars);
    const ro = new ResizeObserver(updateVars);
    if (ref.current) ro.observe(ref.current);
    return () => {
      window.removeEventListener('resize', updateVars);
      ro.disconnect();
    };
  }, []);

  return (
    <FooterWrapper ref={ref}>
      <ContentContainer>
        <p>
          <Link href="https://www.linkedin.com/in/joao-emanuel-752778174/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>
        </p>
        <p>© {new Date().getFullYear()} Lima IT. All rights reserved.</p>
      </ContentContainer>
    </FooterWrapper>
  );
};

export default Footer;
