import styled from 'styled-components';
import { fadeInUp } from '../styles/animations';
import { useTranslation } from 'react-i18next';

const Section = styled.section`
  padding: ${props => props.theme.spacing['4xl']} ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.background};
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
  animation: ${fadeInUp} 0.6s ease-out;

  &::before { content: '// '; }
`;

const Title = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights.bold};
  letter-spacing: -0.03em;
  margin-bottom: ${props => props.theme.spacing['3xl']};
  animation: ${fadeInUp} 0.7s ease-out;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing['4xl']};
  align-items: start;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing['2xl']};
  }
`;

const Left = styled.div`
  animation: ${fadeInUp} 0.8s ease-out;
`;

const BodyText = styled.p`
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.85;
  margin-bottom: ${props => props.theme.spacing.lg};

  &:last-of-type {
    margin-bottom: ${props => props.theme.spacing['2xl']};
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid ${props => props.theme.colors.border};

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Stat = styled.div`
  padding: ${props => props.theme.spacing.xl};
  border-right: 1px solid ${props => props.theme.colors.border};
  text-align: left;

  &:last-child { border-right: none; }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    border-right: none;
    border-bottom: 1px solid ${props => props.theme.colors.border};

    &:last-child { border-bottom: none; }
  }
`;

const StatNum = styled.div`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes['3xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.text};
  letter-spacing: -0.03em;
`;

const StatLbl = styled.div`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 4px;
`;

const Right = styled.div`
  animation: ${fadeInUp} 1s ease-out;
`;

const PillarTitle = styled.h3`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: ${props => props.theme.spacing.xl};
  padding-bottom: ${props => props.theme.spacing.md};
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

const PillarGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const PillarLabel = styled.div`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
`;

const Tag = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textSecondary};
  border: 1px solid ${props => props.theme.colors.border};
  padding: 3px ${props => props.theme.spacing.sm};
  letter-spacing: 0.05em;
  transition: all 0.2s;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
  }
`;

export const About = () => {
  const { t } = useTranslation();

  const stack = {
    frontend: ['React', 'Angular', 'TypeScript', 'Vue'],
    backend: ['Java', 'PHP', 'Python', 'Node.js'],
    database: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Oracle'],
    tools: ['Docker', 'AWS', 'GCP', 'Linux', 'K8s', 'CI/CD'],
  };

  return (
    <Section id="about">
      <Container>
        <Label>about feilen</Label>
        <Title>{t('about.title')}</Title>

        <Layout>
          <Left>
            <BodyText>{t('about.text1')}</BodyText>
            <BodyText>{t('about.text2')}</BodyText>
            <BodyText>{t('about.text3')}</BodyText>

            <StatsGrid>
              <Stat>
                <StatNum>7+</StatNum>
                <StatLbl>{t('about.stats.years')}</StatLbl>
              </Stat>
              <Stat>
                <StatNum>50+</StatNum>
                <StatLbl>{t('about.stats.projects')}</StatLbl>
              </Stat>
              <Stat>
                <StatNum>10+</StatNum>
                <StatLbl>{t('about.stats.clients')}</StatLbl>
              </Stat>
            </StatsGrid>
          </Left>

          <Right>
            <PillarTitle>{t('about.pillars.title')}</PillarTitle>

            {Object.entries(stack).map(([key, techs]) => (
              <PillarGroup key={key}>
                <PillarLabel>
                  {t(`about.pillars.${key === 'tools' ? 'tools' : key}`)}
                </PillarLabel>
                <TagRow>
                  {techs.map(tech => <Tag key={tech}>{tech}</Tag>)}
                </TagRow>
              </PillarGroup>
            ))}
          </Right>
        </Layout>
      </Container>
    </Section>
  );
};
