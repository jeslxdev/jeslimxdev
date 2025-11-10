import styled from 'styled-components';
import { useLayoutEffect, useRef } from 'react';
import { ContentContainer } from '@/styles/ContentContainer';
import { media } from '@/styles/media';

const FooterWrapper = styled.footer`
  background: #01191e;
  border-top: 1px solid #2f2f2f;
  padding: 20px 20px calc(20px + var(--safe-bottom));
  color: #f5f5f5;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1100;
  min-height: 70px;
  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.5);

  ${media.laptop`
    padding: 18px 18px calc(18px + var(--safe-bottom));
    min-height: 65px;
  `}

  ${media.tablet`
    padding: 16px 16px calc(16px + var(--safe-bottom));
    min-height: 60px;
  `}

  ${media.mobile`
    padding: 14px 14px calc(14px + var(--safe-bottom));
    min-height: 55px;
  `}
`;

const FooterContent = styled(ContentContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;

  ${media.laptopLarge`
    gap: 18px;
    max-width: 1100px;
  `}

  ${media.laptop`
    gap: 16px;
    max-width: 1000px;
  `}

  ${media.tablet`
    flex-direction: column;
    text-align: center;
    gap: 14px;
    max-width: 100%;
  `}

  ${media.mobile`
    gap: 12px;
  `}
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  ${media.laptopLarge`
    gap: 20px;
  `}

  ${media.laptop`
    gap: 18px;
  `}

  ${media.tablet`
    gap: 16px;
    order: -1;
    flex-wrap: wrap;
    justify-content: center;
  `}

  ${media.mobile`
    gap: 12px;
    width: 100%;
  `}
`;

const SocialLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 8px 16px;
  border-radius: 20px;
  background: #1f1f1f;
  border: 1px solid #3e3e3e;
  white-space: nowrap;

  &:hover {
    color: #f5f5f5;
    background: #2f2f2f;
    border-color: #4a5568;
    transform: translateY(-2px);
  }

  ${media.laptop`
    font-size: 0.88rem;
    padding: 7px 14px;
  `}

  ${media.tablet`
    padding: 6px 12px;
    font-size: 0.85rem;
  `}

  ${media.mobile`
    padding: 6px 10px;
    font-size: 0.8rem;
    flex: 1;
    text-align: center;
    min-width: 80px;
  `}
`;

const Copyright = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  font-weight: 400;

  ${media.laptop`
    font-size: 0.83rem;
  `}

  ${media.tablet`
    font-size: 0.8rem;
  `}

  ${media.mobile`
    font-size: 0.75rem;
    text-align: center;
  `}
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
      <FooterContent>
        <Copyright>
          © {new Date().getFullYear()} João Emanuel. All rights reserved.
        </Copyright>

        <SocialLinks>
          <SocialLink
            href="https://www.linkedin.com/in/joao-emanuel-752778174/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </SocialLink>
          <SocialLink
            href="https://github.com/jeslxdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
