import styled from 'styled-components';
import { fadeInUp } from '../styles/animations';
import { useTranslation } from 'react-i18next';
import { FaCheck } from 'react-icons/fa';

const Section = styled.section`
  padding: ${props => props.theme.spacing['4xl']} ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.backgroundLight};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${props => props.theme.colors.border}, transparent);
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing['3xl']} ${props => props.theme.spacing.md};
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Label = styled.p`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: ${props => props.theme.spacing.md};

  &::before { content: '// '; }
`;

const Title = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights.bold};
  letter-spacing: -0.03em;
  margin-bottom: ${props => props.theme.spacing.md};
  animation: ${fadeInUp} 0.8s ease-out;
`;

const Subtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.textMuted};
  margin-bottom: ${props => props.theme.spacing['3xl']};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border: 1px solid ${props => props.theme.colors.border};

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    border: none;
    gap: 1px;
    background: ${props => props.theme.colors.border};
  }
`;

const Card = styled.div<{ $featured?: boolean }>`
  background: ${props => props.$featured ? props.theme.colors.backgroundCard : props.theme.colors.background};
  padding: ${props => props.theme.spacing['2xl']};
  border-right: 1px solid ${props => props.theme.colors.border};
  position: relative;
  transition: background 0.2s;
  animation: ${fadeInUp} 0.8s ease-out both;

  &:last-child { border-right: none; }

  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }

  ${props => props.$featured && `
    border-top: 2px solid ${props.theme.colors.primary};
  `}

  &:hover {
    background: ${props => props.theme.colors.backgroundCard};
  }

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    border-right: none;
  }
`;

const FeaturedTag = styled.div`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.border};
  display: inline-block;
  padding: 2px ${props => props.theme.spacing.sm};
`;

const PlanName = styled.h3`
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.text};
  letter-spacing: -0.02em;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const PlanDesc = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textMuted};
  margin-bottom: ${props => props.theme.spacing.md};
  line-height: 1.6;
`;

const PlanNote = styled.p`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: 0.05em;
  margin-bottom: ${props => props.theme.spacing.xl};
  padding: ${props => props.theme.spacing.sm};
  border-left: 2px solid ${props => props.theme.colors.border};
`;

const Divider = styled.div`
  height: 1px;
  background: ${props => props.theme.colors.border};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const FeatureList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing['2xl']};
`;

const Feature = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.5;

  svg {
    color: ${props => props.theme.colors.textMuted};
    flex-shrink: 0;
    margin-top: 3px;
  }
`;

const ContactBtn = styled.a`
  display: block;
  width: 100%;
  text-align: center;
  padding: ${props => props.theme.spacing.md};
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.semibold};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
  background: transparent;
  color: ${props => props.theme.colors.textSecondary};
  border: 1px solid ${props => props.theme.colors.border};

  &:hover {
    background: ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.background};
    border-color: ${props => props.theme.colors.text};
  }
`;

const plans = [
  { key: 'starter',      featured: false },
  { key: 'professional', featured: true  },
  { key: 'enterprise',   featured: false },
] as const;

export const Pricing = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="pricing">
      <Container>
        <Label>engagement</Label>
        <Title>{t('pricing.title')}</Title>
        <Subtitle>{t('pricing.subtitle')}</Subtitle>

        <Grid>
          {plans.map(({ key, featured }) => (
            <Card key={key} $featured={featured}>
              {featured && <FeaturedTag>{t('pricing.popular')}</FeaturedTag>}
              <PlanName>{t(`pricing.${key}.name`)}</PlanName>
              <PlanDesc>{t(`pricing.${key}.description`)}</PlanDesc>
              <PlanNote>{t(`pricing.${key}.note`)}</PlanNote>
              <Divider />
              <FeatureList>
                {(t(`pricing.${key}.features`, { returnObjects: true }) as string[]).map((f, i) => (
                  <Feature key={i}>
                    <FaCheck size={10} />
                    {f}
                  </Feature>
                ))}
              </FeatureList>
              <ContactBtn onClick={scrollToContact}>{t('pricing.cta')}</ContactBtn>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
