import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInUp, fadeIn } from '../styles/animations';
import { useTranslation } from 'react-i18next';
import { FaChevronRight } from 'react-icons/fa';

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
const flickerIn = keyframes`
  0%   { opacity: 0; }
  10%  { opacity: 0.8; }
  12%  { opacity: 0.2; }
  14%  { opacity: 0.9; }
  100% { opacity: 1; }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
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
    linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: ${gridScroll} 12s linear infinite;
`;
const ScanLine = styled.div`
  position: absolute;
  left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
  z-index: 1;
  animation: ${scanline} 8s linear infinite;
  pointer-events: none;
`;
const Vignette = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 60% 50%, transparent 30%, rgba(0,0,0,0.7) 100%);
  z-index: 1;
  pointer-events: none;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: ${props => props.theme.spacing['4xl']};
  align-items: center;
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;
const Left = styled.div``;
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
    width: 6px; height: 6px;
    background: ${props => props.theme.colors.primary};
    animation: ${blink} 2s step-end infinite;
  }
`;
const Title = styled.h1`
  font-size: clamp(2.8rem, 6vw, 5.5rem);
  font-weight: ${props => props.theme.fontWeights.extrabold};
  color: ${props => props.theme.colors.text};
  line-height: 1.0;
  letter-spacing: -0.04em;
  margin-bottom: ${props => props.theme.spacing.xl};
  animation: ${fadeInUp} 0.8s ease-out both;
  animation-delay: 0.1s;
  span { color: ${props => props.theme.colors.textMuted}; }
`;
const Tagline = styled.p`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.textMuted};
  margin-bottom: ${props => props.theme.spacing['2xl']};
  animation: ${fadeInUp} 0.8s ease-out both;
  animation-delay: 0.2s;
  letter-spacing: 0.05em;
  &::before { content: '> '; color: ${props => props.theme.colors.primary}; }
`;
const CTARow = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
  align-items: center;
  flex-wrap: wrap;
  animation: ${fadeInUp} 0.8s ease-out both;
  animation-delay: 0.35s;
`;
const PrimaryBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  background: ${props => props.theme.colors.text};
  color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing['2xl']};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-family: ${props => props.theme.fonts.primary};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
  &:hover {
    background: ${props => props.theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`;
const SecondaryBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  background: transparent;
  color: ${props => props.theme.colors.textSecondary};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing['2xl']};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-family: ${props => props.theme.fonts.primary};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: 1px solid ${props => props.theme.colors.border};
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    border-color: ${props => props.theme.colors.textMuted};
    color: ${props => props.theme.colors.text};
  }
`;

/* ── Right panel: Arasaka terminal ── */
const StatusPanel = styled.div`
  border: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.backgroundCard};
  animation: ${flickerIn} 1.2s ease-out both;
  animation-delay: 0.6s;
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`;
const PanelHeader = styled.div`
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const PanelTitle = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;
const PanelDots = styled.div`
  display: flex;
  gap: 5px;
  span {
    display: inline-block;
    width: 6px; height: 6px;
    border: 1px solid ${props => props.theme.colors.border};
  }
  span:last-child { background: ${props => props.theme.colors.textMuted}; }
`;
const PanelBody = styled.div`
  padding: ${props => props.theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;
const DataRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: ${props => props.theme.spacing.md};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  &:last-child { border-bottom: none; padding-bottom: 0; }
`;
const DataKey = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;
const DataVal = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.text};
  letter-spacing: 0.05em;
`;
const PanelFooter = styled.div`
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  border-top: 1px solid ${props => props.theme.colors.border};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
`;
const OnlineDot = styled.span`
  width: 6px; height: 6px;
  border-radius: 50%;
  background: ${props => props.theme.colors.textMuted};
  display: inline-block;
  animation: ${blink} 3s step-end infinite;
`;
const OnlineLabel = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const Hero = () => {
  const { t } = useTranslation();
  const [dots, setDots] = useState('');
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => {
      setDots(d => d.length >= 3 ? '' : d + '.');
      setTick(n => n + 1);
    }, 500);
    return () => clearInterval(iv);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const uptime = (99.7 + (tick % 3) * 0.01).toFixed(1);

  return (
    <HeroSection id="home">
      <GridBg />
      <ScanLine />
      <Vignette />
      <Container>
        <Left>
          <SystemBadge>
            {t('hero.greeting')} &nbsp;|&nbsp; SYS::ONLINE{dots}
          </SystemBadge>
          <Title>
            We Build.<br /><span>We Scale.</span><br />We Deliver.
          </Title>
          <Tagline>{t('hero.subtitle')}</Tagline>
          <CTARow>
            <PrimaryBtn onClick={() => scrollTo('services')}>
              {t('hero.cta.primary')} <FaChevronRight size={10} />
            </PrimaryBtn>
            <SecondaryBtn onClick={() => scrollTo('contact')}>
              {t('hero.cta.secondary')}
            </SecondaryBtn>
          </CTARow>
        </Left>

        <StatusPanel>
          <PanelHeader>
            <PanelTitle>FEILEN.SYS // STATUS</PanelTitle>
            <PanelDots><span /><span /><span /></PanelDots>
          </PanelHeader>
          <PanelBody>
            <DataRow><DataKey>NODE</DataKey><DataVal>BR-SP-01</DataVal></DataRow>
            <DataRow><DataKey>MODE</DataKey><DataVal>DELIVERY</DataVal></DataRow>
            <DataRow><DataKey>REGION</DataKey><DataVal>BR · PT · ES · BE</DataVal></DataRow>
            <DataRow><DataKey>AI_CORE</DataKey><DataVal>ACTIVE</DataVal></DataRow>
            <DataRow><DataKey>STACK</DataKey><DataVal>FULL-STACK</DataVal></DataRow>
            <DataRow><DataKey>OUTSOURCING</DataKey><DataVal>AVAILABLE</DataVal></DataRow>
            <DataRow><DataKey>UPTIME</DataKey><DataVal>{uptime}%</DataVal></DataRow>
            <DataRow><DataKey>PROJECTS</DataKey><DataVal>10+ DELIVERED</DataVal></DataRow>
          </PanelBody>
          <PanelFooter>
            <OnlineDot />
            <OnlineLabel>ALL SYSTEMS OPERATIONAL</OnlineLabel>
          </PanelFooter>
        </StatusPanel>
      </Container>
    </HeroSection>
  );
};
