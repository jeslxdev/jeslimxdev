import styled, { keyframes } from 'styled-components';
import { useLanguage } from '@/infrastructure/i18n/LanguageContext';
import { media } from '@/styles/media';
import { FaPhp, FaBolt, FaLock, FaCogs, FaPalette } from 'react-icons/fa';

const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ProjectsWrapper = styled.div<{ $isVisible: boolean; $direction: string }>`
  position: relative;
  width: min(1200px, 95%);
  max-height: calc(90vh - 80px);
  background: linear-gradient(135deg,
    #01191e 0%,
    #011317 50%,
    #010d0f 100%);
  backdrop-filter: blur(25px);
  border: 1px solid #2f2f2f;
  border-radius: 24px;
  padding: clamp(24px, 4vw, 48px);
  margin: clamp(20px, 3vw, 40px) auto;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #101010;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #3e3e3e, #2f2f2f);
    border-radius: 10px;

    &:hover {
      background: linear-gradient(to bottom, #2f2f2f, #1f1f1f);
    }
  }

  ${media.tablet`
    width: 95%;
    max-height: calc(85vh - 60px);
    padding: clamp(20px, 4vw, 36px);
    margin: clamp(15px, 3vw, 30px) auto;
  `}

  ${media.mobile`
    width: 95%;
    max-height: calc(85vh - 40px);
    padding: clamp(16px, 4vw, 28px);
    margin: clamp(10px, 2vw, 20px) auto;
    border-radius: 20px;
  `}
`;const Title = styled.h2`
  color: #f5f5f5;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: clamp(32px, 4vw, 48px);
  margin-top: 0;
  text-align: center;
  font-weight: 700;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: #4a5568;
    border-radius: 2px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  gap: clamp(20px, 3vw, 28px);
  grid-template-columns: 1fr;
  width: 100%;
  box-sizing: border-box;

  ${media.laptopLarge`
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: clamp(24px, 3vw, 32px);
  `}

  ${media.laptop`
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: clamp(20px, 3vw, 28px);
  `}

  ${media.tablet`
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: clamp(18px, 3vw, 24px);
  `}

  ${media.mobile`
    grid-template-columns: 1fr;
    gap: clamp(16px, 3vw, 20px);
  `}
`;

const ProjectCard = styled.div`
  background: linear-gradient(135deg,
    #1f1f1f 0%,
    #101010 100%);
  border: 1px solid #2f2f2f;
  border-radius: 20px;
  padding: clamp(24px, 3vw, 32px);
  transition: all 0.2s ease;
  animation: ${slideInUp} 0.6s ease-out forwards;
  animation-fill-mode: forwards;
  opacity: 0;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.3s; }
  &:nth-child(3) { animation-delay: 0.5s; }
  &:nth-child(4) { animation-delay: 0.7s; }
  &:nth-child(5) { animation-delay: 0.9s; }
  &:nth-child(6) { animation-delay: 1.1s; }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #3e3e3e 0%, #2f2f2f 100%);
  }

  &:hover {
    transform: translateY(-8px);
    background: linear-gradient(135deg,
      #2f2f2f 0%,
      #1f1f1f 100%);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
  }

  ${media.tablet`
    padding: clamp(20px, 3vw, 28px);
    border-radius: 18px;
    min-height: 260px;
  `}

  ${media.mobile`
    padding: clamp(18px, 4vw, 24px);
    border-radius: 16px;
    min-height: 240px;
  `}
`;const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
`;

const ProjectIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #3e3e3e 0%, #2f2f2f 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  font-size: 1.5rem;
  flex-shrink: 0;

  ${media.mobile`
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    margin-right: 12px;
  `}
`;

const ProjectTitle = styled.h3`
  color: #f5f5f5;
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  margin: 0;
  font-weight: 600;
  position: relative;
  z-index: 1;
  line-height: 1.3;
`;

const ProjectDescription = styled.p`
  color: rgba(245, 245, 245, 0.9);
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  line-height: 1.6;
  margin: 0 0 20px;
  position: relative;
  z-index: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
  position: relative;
  z-index: 1;
`;

const TechTag = styled.span`
  background: #1f1f1f;
  border: 1px solid #3e3e3e;
  color: rgba(255, 255, 255, 0.9);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: #2f2f2f;
    border-color: #3e3e3e;
  }

  ${media.mobile`
    font-size: 0.75rem;
    padding: 3px 10px;
  `}
`;

const ProjectActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  position: relative;
  z-index: 1;
`;

const ActionButton = styled.button`
  padding: 8px 16px;
  background: #1f1f1f;
  border: 1px solid #3e3e3e;
  border-radius: 25px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #2f2f2f;
    border-color: #3e3e3e;
    transform: translateY(-2px);
  }

  ${media.mobile`
    padding: 6px 12px;
    font-size: 0.8rem;
  `}
`;

interface ProjectsProps {
  isVisible: boolean;
  direction?: 'left' | 'right' | 'top' | 'bottom';
}

const Projects = ({ isVisible, direction = 'right' }: ProjectsProps) => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'PHP Library Collection',
      description: 'Coleção de bibliotecas PHP para produtividade e integração. Focado em soluções reutilizáveis para sistemas críticos e alta performance.',
      icon: <FaPhp />,
      technologies: ['PHP', 'Composer', 'PSR-4', 'Unit Tests', 'Documentation'],
      type: 'Backend Library',
      githubUrl: 'https://github.com/jeslxdev',
      liveUrl: '#'
    },
    {
      title: 'Microservices Architecture',
      description: 'Arquitetura de microserviços com NestJS e PHP, implementando mensageria com Kafka, containerização Docker e pipelines CI/CD.',
      icon: <FaBolt />,
      technologies: ['NestJS', 'PHP', 'Kafka', 'Docker', 'Kubernetes'],
      type: 'Microservices',
      githubUrl: 'https://github.com/jeslxdev',
      liveUrl: '#'
    },
    {
      title: 'DevOps Automation Tools',
      description: 'Ferramentas de automação para DevOps com scripts para deploy, monitoramento e CI/CD. Inclui configurações para Azure DevOps e GitHub Actions.',
      icon: <FaCogs />,
      technologies: ['Bash', 'Python', 'Azure DevOps', 'GitHub Actions', 'Docker'],
      type: 'DevOps',
      githubUrl: 'https://github.com/jeslxdev',
      liveUrl: '#'
    },
    {
      title: 'API Security Framework',
      description: 'Framework de segurança para APIs com autenticação JWT, rate limiting, validação de dados e logs de auditoria. Foco em InfoSec e proteção de dados.',
      icon: <FaLock />,
      technologies: ['PHP', 'JWT', 'Redis', 'MySQL', 'Security'],
      type: 'Security',
      githubUrl: 'https://github.com/jeslxdev',
      liveUrl: '#'
    },
    {
      title: 'Legacy System Modernization',
      description: 'Projeto de modernização de sistemas legados, refatoração de código, implementação de testes e migração para arquiteturas modernas.',
      icon: <FaPalette />,
      technologies: ['PHP', 'Laravel', 'Clean Architecture', 'PHPUnit', 'MySQL'],
      type: 'Modernization',
      githubUrl: 'https://github.com/jeslxdev',
      liveUrl: '#'
    },
  ];

  return (
    <ProjectsWrapper $isVisible={isVisible} $direction={direction}>
      <Title>{t('projects.title')}</Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectHeader>
              <ProjectIcon>{project.icon}</ProjectIcon>
              <div>
                <ProjectTitle>{project.title}</ProjectTitle>
              </div>
            </ProjectHeader>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechStack>
              {project.technologies.map((tech, techIndex) => (
                <TechTag key={techIndex}>{tech}</TechTag>
              ))}
            </TechStack>
            <ProjectActions>
              <ActionButton
                as="a"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </ActionButton>
            </ProjectActions>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsWrapper>
  );
};

export default Projects;
