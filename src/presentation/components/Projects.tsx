import styled from 'styled-components';
import { fadeInUp } from '../styles/animations';
import { useTranslation } from 'react-i18next';
import { projects } from '@/application/data';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1px;
  background: ${props => props.theme.colors.border};
  border: 1px solid ${props => props.theme.colors.border};

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: ${props => props.theme.colors.backgroundCard};
  overflow: hidden;
  transition: all 0.2s;
  animation: ${fadeInUp} 0.6s ease-out;
  animation-fill-mode: both;
  display: flex;
  flex-direction: column;

  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }

  &:hover {
    background: ${props => props.theme.colors.background};
  }
`;

const ProjectImage = styled.div<{ $hasImage: boolean; $imageUrl?: string }>`
  height: 200px;
  background: ${({ $hasImage, $imageUrl, theme }) =>
    $hasImage && $imageUrl
      ? `url(${$imageUrl})`
      : `linear-gradient(135deg, ${theme.colors.backgroundCard}, ${theme.colors.background})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${props => props.theme.colors.border};

  &::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const ProjectYear = styled.span`
  position: absolute;
  top: ${props => props.theme.spacing.md};
  right: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textMuted};
  padding: 2px ${props => props.theme.spacing.sm};
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  letter-spacing: 0.1em;
  z-index: 1;
  border: 1px solid ${props => props.theme.colors.border};
`;

const ProjectContent = styled.div`
  padding: ${props => props.theme.spacing.xl};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectCategoryLabel = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  color: ${props => props.theme.colors.textMuted};
  font-size: ${props => props.theme.fontSizes.xs};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: ${props => props.theme.spacing.sm};
  display: block;
`;

const ProjectTitle = styled.h3`
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.semibold};
`;

const ProjectDescription = styled.p`
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.7;
  font-size: ${props => props.theme.fontSizes.sm};
  flex: 1;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const TechBadge = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textSecondary};
  border: 1px solid ${props => props.theme.colors.border};
  padding: 2px ${props => props.theme.spacing.sm};
  letter-spacing: 0.05em;
  transition: all 0.2s;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.semibold};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: all 0.2s;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  padding-bottom: 2px;

  &:hover {
    color: ${props => props.theme.colors.textMuted};
    border-color: transparent;
  }

  svg {
    font-size: ${props => props.theme.fontSizes.xs};
  }
`;

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <ProjectsSection id="projects">
      <Container>
        <Label>case studies</Label>
        <Title>{t('projects.title')}</Title>

        <Grid>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectImage $hasImage={!!project.image} $imageUrl={project.image}>
                <ProjectYear>{project.year}</ProjectYear>
              </ProjectImage>
              <ProjectContent>
                <ProjectCategoryLabel>{project.category.toUpperCase()}</ProjectCategoryLabel>
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
