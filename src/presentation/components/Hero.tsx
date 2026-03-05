import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInUp, fadeIn } from '../styles/animations';
import { useTranslation } from 'react-i18next';
import { FaArrowDown, FaChevronRight } from 'react-icons/fa';

const gridScroll = keyframes`
  from { transform: translate(0, 0); }
  to   { transform: translate(50px, 50px); }
`;

const scanline = keyframes`
  0%   { top: -10%; }
  100% { top: 110%; }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 120px ${props => props.theme.spacing.xl} ${props => props.theme.spacing['4xl']};
  overflow: hidden;
  background: ${props => props.theme.colors.background};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 100px ${props => props.theme.spacing.md} ${props => props.theme.spacing['3xl']};
  }
`;

const GridBg = styled.div`
  position: absolute;
  inset: -100px;
  z-index: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: ${gridScroll} 8s linear infinite;
`;

const ScanLine = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
  z-index: 1;
  animation: ${scanline} 6s linear infinite;
  pointer-events: none;
`;

const Vignette = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 40%, #000000cc 100%);
  z-index: 1;
  pointer-events: none;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const SystemBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: ${props => props.theme.spacing.xl};
  animation: ${fadeIn} 0.6s ease-out;

  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    background: ${props => props.theme.colors.primary};
    animation: ${blink} 2s step-end infinite;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: ${props => props.theme.fontWeights.extrabold};
  color: ${props => props.theme.colors.text};
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin-bottom: ${props => props.theme.spacing.lg};
  animation: ${fadeInUp} 0.8s ease-out both;
  animation-delay: 0.1s;

  span {
    color: ${props => props.theme.colors.textMuted};
  }
`;

const Subtitle = styled.p`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.textMuted};
  margin-bottom: ${props => props.theme.spacing.md};
  animation: ${fadeInUp} 0.8s ease-out both;
  animation-delay: 0.2s;
  letter-spacing: 0.05em;

  &::before {
    content: '> ';
    color: ${props => props.theme.colors.primary};
  }
`;

const Description = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.textSecondary};
  max-width: 680px;
  line-height: 1.8;
  margin-bottom: ${props => props.theme.spacing['2xl']};
  animation: ${fadeInUp} 0.8s ease-out both;
  animation-delay: 0.3s;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.base};
  }
`;

const CTARow = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: ${props => props.theme.spacing['3xl']};
  animation: ${fadeInUp} 0.8s ease-out both;
  animation-delay: 0.4s;
`;

const PrimaryBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  background: ${props => props.theme.colors.text};
  color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing['2xl']};
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-family: ${props => props.theme.fonts.primary};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);

  &:hover {
    background: ${props => props.theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(232, 232, 232, 0.2);
  }
`;

const SecondaryBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  background: transparent;
  color: ${props => props.theme.colors.textSecondary};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing['2xl']};
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-family: ${props => props.theme.fonts.primary};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: 1px solid ${props => props.theme.colors.border};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    transform: translateY(-2px);
  }
`;

const StatsRow = styled.div`
  display: flex;
  gap: 0;
  border: 1px solid ${props => props.theme.colors.border};
  width: fit-content;
  animation: ${fadeInUp} 0.8s ease-out both;
  animation-delay: 0.5s;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`;

const StatItem = styled.div`
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing['2xl']};
  border-right: 1px solid ${props => props.theme.colors.border};
  min-width: 180px;

  &:last-child {
    border-right: none;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    border-right: none;
    border-bottom: 1px solid ${props => props.theme.colors.border};
    min-width: unset;

    &:last-child {
      border-bottom: none;
    }
  }
`;

const StatValue = styled.div`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.text};
  letter-spacing: -0.02em;
  margin-bottom: 4px;
`;

const StatLabel = styled.div`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const ScrollHint = styled.button`
  position: absolute;
  bottom: ${props => props.theme.spacing['2xl']};
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.textMuted};
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  animation: ${fadeIn} 2s ease-out both;
  animation-delay: 1s;
  transition: color 0.2s;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

export const Hero = () => {
  const { t } = useTranslation();
  const [dots, setDots] = useState('');

  useEffect(() => {
    const iv = setInterval(() => {
      setDots(d => d.length >= 3 ? '' : d + '.');
    }, 500);
    return () => clearInterval(iv);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroSection id="home">
      <GridBg />
      <ScanLine />
      <Vignette />

      <Container>
        <SystemBadge>
          {t('hero.greeting')} &nbsp;|&nbsp; SYS::ONLINE{dots}
        </SystemBadge>

        <Title>
          We Build.<span> We Scale.</span><br />We Deliver.
        </Title>

        <Subtitle>{t('hero.subtitle')}</Subtitle>

        <Description>{t('hero.description')}</Description>

        <CTARow>
          <PrimaryBtn onClick={() => scrollTo('services')}>
            {t('hero.cta.primary')} <FaChevronRight size={12} />
          </PrimaryBtn>
          <SecondaryBtn onClick={() => scrollTo('contact')}>
            {t('hero.cta.secondary')}
          </SecondaryBtn>
        </CTARow>

        <StatsRow>
          <StatItem>
            <StatValue>7+</StatValue>
            <StatLabel>Years in market</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>50+</StatValue>
            <StatLabel>Projects delivered</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>AI-First</StatValue>
            <StatLabel>Core specialty</StatLabel>
          </StatItem>
        </StatsRow>
      </Container>

      <ScrollHint onClick={() => scrollTo('services')}>
        scroll <FaArrowDown />
      </ScrollHint>
    </HeroSection>
  );
};
