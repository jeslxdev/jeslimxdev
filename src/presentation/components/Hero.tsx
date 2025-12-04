import styled from 'styled-components';
import { fadeInUp, gradientMove } from '../styles/animations';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: ${props => props.theme.spacing['4xl']} ${props => props.theme.spacing.xl};
  overflow: hidden;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing['3xl']} ${props => props.theme.spacing.md};
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;

  /* Grid pattern */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
      linear-gradient(${props => props.theme.colors.primary}15 1px, transparent 1px),
      linear-gradient(90deg, ${props => props.theme.colors.primary}15 1px, transparent 1px);
    background-size: 50px 50px;
    opacity: 0.3;
  }

  /* Animated gradient orbs */
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background:
      radial-gradient(circle at 20% 50%, ${props => props.theme.colors.primary}20 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, ${props => props.theme.colors.secondary}20 0%, transparent 50%),
      radial-gradient(circle at 40% 20%, ${props => props.theme.colors.accent}15 0%, transparent 50%);
    animation: ${gradientMove} 20s ease infinite;
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  text-align: center;
`;

const Greeting = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: ${props => props.theme.spacing.md};
  animation: ${fadeInUp} 0.6s ease-out;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 20px ${props => props.theme.colors.primary}44;
`;

const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes['6xl']};
  margin-bottom: ${props => props.theme.spacing.lg};
  animation: ${fadeInUp} 0.8s ease-out;

  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.primary} 0%,
    ${props => props.theme.colors.accent} 50%,
    ${props => props.theme.colors.secondary} 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradientMove} 5s ease infinite, ${fadeInUp} 0.8s ease-out;
  filter: drop-shadow(0 0 30px ${props => props.theme.colors.primary}44);

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes['4xl']};
  }
`;

const Subtitle = styled.h2`
  font-size: ${props => props.theme.fontSizes['2xl']};
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.xl};
  font-weight: ${props => props.theme.fontWeights.medium};
  animation: ${fadeInUp} 1s ease-out;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;

const Description = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.textMuted};
  max-width: 700px;
  margin: 0 auto ${props => props.theme.spacing['2xl']};
  line-height: 1.8;
  animation: ${fadeInUp} 1.2s ease-out;
`;

const CTAContainer = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing['2xl']};
  animation: ${fadeInUp} 1.4s ease-out;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: ${props => props.theme.colors.text};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.xl};
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.semibold};
  transition: all ${props => props.theme.transitions.base};
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.glow};
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  border: 2px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.xl};
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.semibold};
  transition: all ${props => props.theme.transitions.base};
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    transform: translateY(-3px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
  justify-content: center;
  animation: ${fadeInUp} 1.6s ease-out;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fontSizes['2xl']};
  transition: all ${props => props.theme.transitions.base};

  &:hover {
    color: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: ${props => props.theme.spacing['2xl']};
  left: 50%;
  transform: translateX(-50%);
  color: ${props => props.theme.colors.textMuted};
  font-size: ${props => props.theme.fontSizes['2xl']};
  animation: ${fadeInUp} 2s ease-out;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    bottom: ${props => props.theme.spacing.xl};
  }
`;

export const Hero = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection id="home">
      <Background />
      <Container>
        <Greeting>{t('hero.greeting')}</Greeting>
        <Title>{t('hero.title')}</Title>
        <Subtitle>{t('hero.subtitle')}</Subtitle>
        <Description>{t('hero.description')}</Description>

        <CTAContainer>
          <PrimaryButton onClick={() => scrollToSection('projects')}>
            {t('hero.cta.primary')}
          </PrimaryButton>
          <SecondaryButton onClick={() => scrollToSection('contact')}>
            {t('hero.cta.secondary')}
          </SecondaryButton>
        </CTAContainer>

        <SocialLinks>
          <SocialLink
            href="https://github.com/jeslxdev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/joao-emanuel-752778174/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </SocialLink>
        </SocialLinks>
      </Container>

      <ScrollIndicator onClick={() => scrollToSection('services')}>
        <FaArrowDown />
      </ScrollIndicator>
    </HeroSection>
  );
};
