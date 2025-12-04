import styled from 'styled-components';
import { fadeInUp } from '../styles/animations';
import { useTranslation } from 'react-i18next';

const AboutSection = styled.section`
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

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing['3xl']};
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing['2xl']};
  }
`;

const TextContent = styled.div`
  animation: ${fadeInUp} 1s ease-out;
`;

const AboutText = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.8;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const SkillsContent = styled.div`
  animation: ${fadeInUp} 1.2s ease-out;
`;

const SkillsTitle = styled.h3`
  margin-bottom: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.text};
`;

const SkillCategories = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xl};
`;

const SkillCategory = styled.div``;

const CategoryTitle = styled.h4`
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.fontSizes.lg};
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
`;

const SkillBadge = styled.span`
  background: ${props => props.theme.colors.backgroundCard};
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.textSecondary};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.lg};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.medium};
  transition: all ${props => props.theme.transitions.base};
  animation: ${fadeInUp} 0.5s ease-out both;

  &:nth-child(1) { animation-delay: 0.05s; }
  &:nth-child(2) { animation-delay: 0.1s; }
  &:nth-child(3) { animation-delay: 0.15s; }
  &:nth-child(4) { animation-delay: 0.2s; }
  &:nth-child(5) { animation-delay: 0.25s; }
  &:nth-child(6) { animation-delay: 0.3s; }
  &:nth-child(7) { animation-delay: 0.35s; }
  &:nth-child(8) { animation-delay: 0.4s; }

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.primary}11;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 5px 15px ${props => props.theme.colors.primary}33;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing['2xl']};

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.backgroundCard};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  transition: all ${props => props.theme.transitions.base};

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.div`
  font-size: ${props => props.theme.fontSizes['4xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const StatLabel = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fontSizes.base};
`;

export const About = () => {
  const { t } = useTranslation();

  const skills = {
    frontend: ['React', 'Angular', 'TypeScript', 'Next.js', 'Vue.js', 'Styled Components'],
    backend: ['PHP', 'Java 17', 'Python', 'Node.js', 'Spring Boot', 'Laravel', 'CodeIgniter'],
    database: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Oracle'],
    tools: ['Git', 'Docker', 'Maven', 'AWS', 'CI/CD', 'REST API', 'Microservices'],
  };

  return (
    <AboutSection id="about">
      <Container>
        <Header>
          <SectionTitle>{t('about.title')}</SectionTitle>
        </Header>

        <Content>
          <TextContent>
            <AboutText>{t('about.text1')}</AboutText>
            <AboutText>{t('about.text2')}</AboutText>
            <AboutText>{t('about.text3')}</AboutText>

            <Stats>
              <StatCard>
                <StatNumber>7+</StatNumber>
                <StatLabel>{t('about.stats.years')}</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>10+</StatNumber>
                <StatLabel>{t('about.stats.projects')}</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>8+</StatNumber>
                <StatLabel>{t('about.stats.clients')}</StatLabel>
              </StatCard>
            </Stats>
          </TextContent>

          <SkillsContent>
            <SkillsTitle>{t('about.skills.title')}</SkillsTitle>
            <SkillCategories>
              <SkillCategory>
                <CategoryTitle>{t('about.skills.frontend')}</CategoryTitle>
                <SkillList>
                  {skills.frontend.map((skill) => (
                    <SkillBadge key={skill}>{skill}</SkillBadge>
                  ))}
                </SkillList>
              </SkillCategory>

              <SkillCategory>
                <CategoryTitle>{t('about.skills.backend')}</CategoryTitle>
                <SkillList>
                  {skills.backend.map((skill) => (
                    <SkillBadge key={skill}>{skill}</SkillBadge>
                  ))}
                </SkillList>
              </SkillCategory>

              <SkillCategory>
                <CategoryTitle>{t('about.skills.database')}</CategoryTitle>
                <SkillList>
                  {skills.database.map((skill) => (
                    <SkillBadge key={skill}>{skill}</SkillBadge>
                  ))}
                </SkillList>
              </SkillCategory>

              <SkillCategory>
                <CategoryTitle>{t('about.skills.tools')}</CategoryTitle>
                <SkillList>
                  {skills.tools.map((skill) => (
                    <SkillBadge key={skill}>{skill}</SkillBadge>
                  ))}
                </SkillList>
              </SkillCategory>
            </SkillCategories>
          </SkillsContent>
        </Content>
      </Container>
    </AboutSection>
  );
};
