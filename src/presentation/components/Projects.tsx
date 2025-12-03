import styled from 'styled-components';
import { fadeInUp, scaleIn } from '../styles/animations';
import { useTranslation } from 'react-i18next';
import { projects } from '@/application/data';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} ${props => props.theme.spacing.xl};
  background-color: ${props => props.theme.colors.backgroundLight};
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
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${props => props.theme.spacing['2xl']};

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: ${props => props.theme.colors.backgroundCard};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  overflow: hidden;
  transition: all ${props => props.theme.transitions.base};
  animation: ${scaleIn} 0.6s ease-out;
  animation-fill-mode: both;
  display: flex;
  flex-direction: column;

  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }

  &:hover {
    transform: translateY(-10px);
    border-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.shadows.xl};
  }
`;

const ProjectImage = styled.div<{ $hasImage: boolean; $imageUrl?: string }>`
  height: 200px;
  background: ${({ $hasImage, $imageUrl, theme }) =>
    $hasImage && $imageUrl
      ? `url(${$imageUrl})`
      : `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ $hasImage }) => ($hasImage ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.3)')};
  }
`;

const ProjectYear = styled.span`
  position: absolute;
  top: ${props => props.theme.spacing.md};
  right: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.semibold};
  z-index: 1;
`;

const ProjectContent = styled.div`
  padding: ${props => props.theme.spacing.xl};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectCategory = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const ProjectTitle = styled.h3`
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.text};
`;

const ProjectDescription = styled.p`
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.7;
  flex: 1;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const TechBadge = styled.span`
  background: rgba(139, 92, 246, 0.1);
  color: ${props => props.theme.colors.secondary};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  border: 1px solid rgba(139, 92, 246, 0.3);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.semibold};
  transition: all ${props => props.theme.transitions.base};

  &:hover {
    color: ${props => props.theme.colors.primaryLight};
    transform: translateX(5px);
  }

  svg {
    font-size: ${props => props.theme.fontSizes.base};
  }
`;

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <ProjectsSection id="projects">
      <Container>
        <Header>
          <SectionTitle>{t('projects.title')}</SectionTitle>
          <SectionSubtitle>{t('projects.subtitle')}</SectionSubtitle>
        </Header>

        <Grid>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectImage $hasImage={!!project.image} $imageUrl={project.image}>
                <ProjectYear>{project.year}</ProjectYear>
              </ProjectImage>
              <ProjectContent>
                <ProjectCategory>{project.category.toUpperCase()}</ProjectCategory>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechList>
                  {project.technologies.map((tech) => (
                    <TechBadge key={tech}>{tech}</TechBadge>
                  ))}
                </TechList>
                <ProjectLinks>
                  {project.url && (
                    <ProjectLink
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                      {t('projects.viewProject')}
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </Grid>
      </Container>
    </ProjectsSection>
  );
};
