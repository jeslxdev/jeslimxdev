import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { media } from '../styles/media';

const ProjectsWrapper = styled.div<{ $isVisible: boolean; $direction: string }>`
  position: fixed;
  right: ${props => props.$isVisible ? '0' : '-100%'};
  top: 0;
  height: 100vh;
  width: 600px;
  background: rgba(27, 61, 80, 0.95);
  backdrop-filter: blur(20px);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 500;
  padding: 120px 40px 120px;
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
    width: 80%;
    padding: 100px 30px 100px;
  `}

  ${media.mobile`
    width: 100%;
    padding: 80px 25px;
    border-left: none;
  `}
`;

const Title = styled.h2`
  color: #f5f5f5;
  font-size: 2rem;
  margin-bottom: 30px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  ${media.mobile`
    font-size: 1.5rem;
  `}
`;

const ProjectCard = styled.div`
  background: rgba(61, 58, 58, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    background: rgba(61, 58, 58, 0.8);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }

  h3 {
    color: #f5f5f5;
    margin: 0 0 10px 0;
  }

  p {
    margin: 0;
    color: rgba(245, 245, 245, 0.8);
    font-size: 0.95rem;
    line-height: 1.6;
  }

  ${media.mobile`
    padding: 18px;
  `}
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
