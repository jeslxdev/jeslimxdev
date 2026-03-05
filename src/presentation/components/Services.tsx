import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { services } from '@/application/data';
import {
  FaRocket, FaMobile, FaUsers, FaBrain, FaCloud, FaShieldAlt,
  FaCode, FaServer, FaDatabase,
} from 'react-icons/fa';

const iconMap: Record<string, React.ComponentType> = {
  FaRocket, FaMobile, FaUsers, FaBrain, FaCloud, FaShieldAlt,
  FaCode, FaServer, FaDatabase,
};

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  padding: ${props => props.theme.spacing['4xl']} ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.backgroundLight};
  position: relative;
  overflow: hidden;

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

const SectionHead = styled.div`
  margin-bottom: ${props => props.theme.spacing['3xl']};
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

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights.bold};
  letter-spacing: -0.03em;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const SectionSub = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.textMuted};
  max-width: 600px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: ${props => props.theme.colors.border};
  border: 1px solid ${props => props.theme.colors.border};

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing['2xl']};
  transition: background 0.2s ease;
  animation: ${fadeUp} 0.5s ease-out both;

  &:nth-child(1) { animation-delay: 0.05s; }
  &:nth-child(2) { animation-delay: 0.1s; }
  &:nth-child(3) { animation-delay: 0.15s; }
  &:nth-child(4) { animation-delay: 0.2s; }
  &:nth-child(5) { animation-delay: 0.25s; }
  &:nth-child(6) { animation-delay: 0.3s; }

  &:hover {
    background: ${props => props.theme.colors.backgroundCard};
  }
`;

const CardIcon = styled.div`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.textMuted};
  margin-bottom: ${props => props.theme.spacing.lg};
  transition: color 0.2s;

  ${Card}:hover & {
    color: ${props => props.theme.colors.primary};
  }
`;

const CardNumber = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: 0.1em;
  display: block;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const CardTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.md};
  letter-spacing: -0.01em;
`;

const CardDesc = styled.p`
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.textMuted};
  line-height: 1.7;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
`;

const Tag = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textMuted};
  border: 1px solid ${props => props.theme.colors.border};
  padding: 2px ${props => props.theme.spacing.sm};
  letter-spacing: 0.05em;
  transition: all 0.2s;

  ${Card}:hover & {
    border-color: ${props => props.theme.colors.borderLight};
    color: ${props => props.theme.colors.textSecondary};
  }
`;

export const Services = () => {
  const { t } = useTranslation();

  return (
    <Section id="services">
      <Container>
        <SectionHead>
          <Label>capabilities</Label>
          <SectionTitle>{t('services.title')}</SectionTitle>
          <SectionSub>{t('services.subtitle')}</SectionSub>
        </SectionHead>

        <Grid>
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] as React.ComponentType;
            return (
              <Card key={service.id}>
                <CardIcon>{Icon && <Icon />}</CardIcon>
                <CardNumber>{String(i + 1).padStart(2, '0')}</CardNumber>
                <CardTitle>{t(`services.items.${i}.title`)}</CardTitle>
                <CardDesc>{t(`services.items.${i}.description`)}</CardDesc>
                <TagRow>
                  {service.technologies.map(tech => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </TagRow>
              </Card>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
};
