import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { media } from '@/styles/media';
import { Card as ProjectCard } from '@/components/common/Card';

const ProjectsWrapper = styled.div<{ $isVisible: boolean; $direction: string }>`
  position: fixed;
  right: ${props => props.$isVisible ? '0' : '-100%'};
  top: calc(var(--nav-safe-top) + var(--panel-gap-y));
  height: calc(100vh - var(--nav-safe-top) - var(--footer-safe-bottom) - (2 * var(--panel-gap-y)));
  width: min(600px, calc(100% - var(--panel-gap-x)));
  background: rgba(27, 61, 80, 0.25);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 900;
  padding: clamp(16px, 3vw, 28px);
  overflow-y: auto;
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: -10px 0 60px rgba(0, 0, 0, 0.6);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(61, 58, 58, 0.3);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(245, 245, 245, 0.3);
    border-radius: 10px;

    &:hover {
      background: rgba(245, 245, 245, 0.5);
    }
  }

  ${media.tablet`
    width: calc(100% - var(--panel-gap-x));
    padding: clamp(14px, 3vw, 24px);
    height: calc(100vh - var(--nav-safe-top) - var(--footer-safe-bottom) - (2 * var(--panel-gap-y)));
  `}

  ${media.mobile`
    width: 100%;
    top: calc(var(--nav-safe-top) + var(--panel-gap-y));
    height: calc(100vh - var(--nav-safe-top) - var(--footer-safe-bottom) - (2 * var(--panel-gap-y)));
    padding: clamp(12px, 5vw, 24px);
    border-left: none;
  `}
`;

const Title = styled.h2`
  color: #f5f5f5;
  font-size: clamp(1.25rem, 4vw, 2rem);
  margin-bottom: clamp(16px, 3vw, 30px);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

interface ProjectsProps {
  isVisible: boolean;
  direction?: 'left' | 'right' | 'top' | 'bottom';
}

const Projects = ({ isVisible, direction = 'right' }: ProjectsProps) => {
  const { t } = useTranslation();

  return (
    <ProjectsWrapper $isVisible={isVisible} $direction={direction}>
      <Title>{t('projects.title')}</Title>
      <ProjectCard>
        <h3>{t('projects.project1.title')}</h3>
        <p>{t('projects.project1.description')}</p>
      </ProjectCard>
      <ProjectCard>
        <h3>{t('projects.project2.title')}</h3>
        <p>{t('projects.project2.description')}</p>
      </ProjectCard>
      <ProjectCard>
        <h3>{t('projects.project3.title')}</h3>
        <p>{t('projects.project3.description')}</p>
      </ProjectCard>
    </ProjectsWrapper>
  );
};

export default Projects;
