import styled from 'styled-components';
import { fadeInUp, scaleIn } from '../styles/animations';
import { useTranslation } from 'react-i18next';
import { services } from '@/application/data';
import { FaMobile, FaCode, FaServer, FaDatabase } from 'react-icons/fa';

const iconMap: Record<string, React.ComponentType> = {
  FaMobile,
  FaCode,
  FaServer,
  FaDatabase,
};

const ServicesSection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} ${props => props.theme.spacing.xl};
  background-color: ${props => props.theme.colors.background};
  position: relative;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing['3xl']} ${props => props.theme.spacing.md};
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing['3xl']};
`;

const SectionTitle = styled.h2`
  margin-bottom: ${props => props.theme.spacing.md};
  animation: ${fadeInUp} 0.8s ease-out;
`;

const SectionSubtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.textMuted};
  max-width: 600px;
  margin: 0 auto;
  animation: ${fadeInUp} 1s ease-out;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: ${props => props.theme.colors.backgroundCard};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing['2xl']};
  transition: all ${props => props.theme.transitions.base};
  animation: ${scaleIn} 0.6s ease-out;
  animation-fill-mode: both;

  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }

  &:hover {
    transform: translateY(-10px);
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 20px 40px ${props => props.theme.colors.primary}33;
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  border-radius: ${props => props.theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing.lg};
  font-size: ${props => props.theme.fontSizes['2xl']};
  color: ${props => props.theme.colors.text};
  transition: all ${props => props.theme.transitions.base};

  ${ServiceCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 10px 30px ${props => props.theme.colors.primary}66;
  }
`;

const ServiceTitle = styled.h3`
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.text};
`;

const ServiceDescription = styled.p`
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.7;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
`;

const TechBadge = styled.span`
  background: ${props => props.theme.colors.primary}55;
  color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.semibold};
  border: 1.5px solid ${props => props.theme.colors.primary}99;
`;

export const Services = () => {
  const { t } = useTranslation();

  return (
    <ServicesSection id="services">
      <Container>
        <Header>
          <SectionTitle>{t('services.title')}</SectionTitle>
          <SectionSubtitle>{t('services.subtitle')}</SectionSubtitle>
        </Header>

        <Grid>
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <ServiceCard key={service.id}>
                <IconWrapper>
                  {IconComponent && <IconComponent />}
                </IconWrapper>
                <ServiceTitle>{t(`services.items.${index}.title`)}</ServiceTitle>
                <ServiceDescription>
                  {t(`services.items.${index}.description`)}
                </ServiceDescription>
                <TechList>
                  {service.technologies.map((tech) => (
                    <TechBadge key={tech}>{tech}</TechBadge>
                  ))}
                </TechList>
              </ServiceCard>
            );
          })}
        </Grid>
      </Container>
    </ServicesSection>
  );
};
