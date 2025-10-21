import styled from 'styled-components';
import { useLanguage } from '@/infrastructure/i18n/LanguageContext';
import { media } from '@/styles/media';
import { Card as ProjectCard } from '@/components/common/Card';
import { cardCarouselIn } from '@/styles/animations';

const ProjectsWrapper = styled.div<{ $isVisible: boolean; $direction: string }>`
  position: relative;
  width: min(600px, 90%);
  max-height: calc(80vh - 60px);
  background: rgba(27, 61, 80, 0.5); /* 50% transparency */
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: clamp(24px, 4vw, 40px);
  margin-top: 20px;
  overflow-y: auto;
  box-shadow: 0 10px 60px rgba(0, 0, 0, 0.6);
  border-radius: 20px;

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
    width: 90%;
    max-height: calc(80vh - 50px);
    padding: clamp(20px, 3.5vw, 32px);
    margin-top: 15px;
  `}

  ${media.mobile`
    width: 95%;
    max-height: calc(85vh - 40px);
    padding: clamp(16px, 4vw, 24px);
    margin-top: 10px;
  `}
`;

const Title = styled.h2`
  color: #f5f5f5;
  font-size: clamp(1.25rem, 4vw, 2rem);
  margin-bottom: clamp(20px, 4vw, 35px);
  margin-top: clamp(8px, 2vw, 16px);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

// Cards com animação carousel individual
const CarouselCard = styled(ProjectCard)`
  /* Cada card entra da direita em sequência */
  animation: ${cardCarouselIn} 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  opacity: 0;
  transform: translateX(120%);

  &:nth-child(2) { animation-delay: 0.2s; } /* Primeiro card */
  &:nth-child(3) { animation-delay: 0.5s; } /* Segundo card */
  &:nth-child(4) { animation-delay: 0.8s; } /* Terceiro card */
`;

interface ProjectsProps {
  isVisible: boolean;
  direction?: 'left' | 'right' | 'top' | 'bottom';
}

const Projects = ({ isVisible, direction = 'right' }: ProjectsProps) => {
  const { t } = useLanguage();

  return (
    <ProjectsWrapper $isVisible={isVisible} $direction={direction}>
      <Title>{t('projects.title')}</Title>
      <CarouselCard>
        <h3>{t('projects.project1.title')}</h3>
        <p>{t('projects.project1.description')}</p>
      </CarouselCard>
      <CarouselCard>
        <h3>{t('projects.project2.title')}</h3>
        <p>{t('projects.project2.description')}</p>
      </CarouselCard>
      <CarouselCard>
        <h3>{t('projects.project3.title')}</h3>
        <p>{t('projects.project3.description')}</p>
      </CarouselCard>
    </ProjectsWrapper>
  );
};

export default Projects;
