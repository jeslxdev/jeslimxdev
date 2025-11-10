import styled, { keyframes } from 'styled-components';
import { useLanguage } from '@/infrastructure/i18n/LanguageContext';
import { media } from '@/styles/media';
import { FaBuilding, FaBriefcase, FaShip, FaUniversity, FaIndustry, FaLaptopCode } from 'react-icons/fa';

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const timelineAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const CompanyWrapper = styled.div<{ $isVisible: boolean; $direction: string }>`
  position: relative;
  width: min(1000px, 95%);
  max-height: calc(85vh - 60px);
  background: #1a252e;
  border: 1px solid #4a5555;
  border-radius: 24px;
  padding: clamp(32px, 5vw, 48px);
  margin-top: 20px;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #223037;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #4a5555;
    border-radius: 10px;

    &:hover {
      background: #5a6565;
    }
  }

  ${media.laptopLarge`
    width: min(950px, 90%);
    padding: clamp(28px, 4vw, 44px);
  `}

  ${media.laptop`
    width: min(900px, 92%);
    padding: clamp(26px, 4vw, 40px);
  `}

  ${media.tablet`
    width: 95%;
    max-height: calc(80vh - 50px);
    padding: clamp(24px, 4vw, 36px);
    margin-top: 15px;
    border-radius: 22px;
  `}

  ${media.mobile`
    width: 95%;
    max-height: calc(85vh - 40px);
    padding: clamp(20px, 4vw, 28px);
    margin-top: 10px;
    border-radius: 20px;
  `}
`;

const Title = styled.h2`
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

const TimelineContainer = styled.div`
  position: relative;
  margin: clamp(24px, 4vw, 40px) 0;

  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: #4a5568;
    border-radius: 2px;

    ${media.mobile`
      left: 15px;
      width: 2px;
    `}
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: clamp(32px, 4vw, 48px);
  padding-left: clamp(60px, 8vw, 80px);
  animation: ${slideInFromLeft} 0.8s ease-out forwards;
  opacity: 0;

  &:nth-child(1) { animation-delay: 0.2s; }
  &:nth-child(2) { animation-delay: 0.4s; }
  &:nth-child(3) { animation-delay: 0.6s; }

  ${media.mobile`
    padding-left: clamp(45px, 8vw, 55px);
    margin-bottom: clamp(28px, 4vw, 36px);
  `}
`;

const TimelineMarker = styled.div`
  position: absolute;
  left: 8px;
  top: 8px;
  width: 28px;
  height: 28px;
  background: #4a5568;
  border: 3px solid #01191e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  animation: ${timelineAnimation} 0.5s ease-out forwards;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  ${media.mobile`
    left: 6px;
    width: 24px;
    height: 24px;
    font-size: 1rem;
  `}
`;

const CompanyCard = styled.div`
  background: #2a3940;
  border: 1px solid #4a5555;
  border-radius: 20px;
  padding: clamp(24px, 4vw, 32px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: #6a7a84;
  }

  &:hover {
    transform: translateY(-5px);
    background: #3a4a50;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    border-color: #5a6a74;
  }

  ${media.mobile`
    padding: clamp(20px, 4vw, 24px);
    border-radius: 16px;
  `}
`;

const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const CompanyLogo = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #4a5568;
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

const CompanyInfo = styled.div`
  flex: 1;
`;

const CompanyName = styled.h3`
  color: #f5f5f5;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  margin: 0 0 4px 0;
  font-weight: 600;
`;

const CompanyRole = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: clamp(0.9rem, 2vw, 1rem);
  font-weight: 500;
`;

const CompanyPeriod = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: clamp(0.85rem, 1.8vw, 0.95rem);
  font-weight: 500;
  margin-left: auto;

  ${media.mobile`
    margin-left: 0;
    margin-top: 4px;
  `}
`;

const CompanyDescription = styled.p`
  color: rgba(245, 245, 245, 0.9);
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  line-height: 1.6;
  margin: 16px 0;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

const TechTag = styled.span`
  background: #1f1f1f;
  border: 1px solid #3e3e3e;
  color: rgba(255, 255, 255, 0.9);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #2f2f2f;
    border-color: #4a5568;
  }

  ${media.mobile`
    font-size: 0.75rem;
    padding: 3px 10px;
  `}
`;

const TechSection = styled.div`
  margin-bottom: clamp(32px, 4vw, 48px);
  padding: clamp(24px, 4vw, 32px);
  background: #011317;
  border-radius: 20px;
  border: 1px solid #2f2f2f;
  text-align: center;
  width: 100%;
  box-sizing: border-box;

  ${media.mobile`
    padding: clamp(20px, 4vw, 24px);
    border-radius: 16px;
  `}
`;

const TechTitle = styled.h3`
  color: #f5f5f5;
  margin: 0 0 24px 0;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 600;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  gap: 12px;
  max-width: 100%;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;

  ${media.laptop`
    grid-template-columns: repeat(auto-fit, minmax(85px, 1fr));
    gap: 10px;
  `}

  ${media.tablet`
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 8px;
  `}

  ${media.mobile`
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    gap: 6px;
  `}
`;

const TechIcon = styled.div`
  padding: 12px 8px;
  background: #1f1f1f;
  border: 1px solid #3e3e3e;
  border-radius: 12px;
  transition: all 0.3s ease;
  font-size: clamp(0.7rem, 1.8vw, 0.85rem);
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  min-width: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #2f2f2f;
    border-color: #4a5568;
    transform: translateY(-2px);
  }

  ${media.laptop`
    padding: 10px 6px;
    font-size: clamp(0.65rem, 1.6vw, 0.8rem);
  `}

  ${media.tablet`
    padding: 8px 4px;
    font-size: clamp(0.6rem, 1.4vw, 0.75rem);
    border-radius: 10px;
  `}

  ${media.mobile`
    padding: 6px 4px;
    border-radius: 8px;
    font-size: clamp(0.55rem, 1.2vw, 0.7rem);
  `}
`;

interface CompanyProps {
  isVisible: boolean;
  direction?: 'left' | 'right' | 'top' | 'bottom';
}

const Company = ({ isVisible, direction = 'top' }: CompanyProps) => {
  const { t } = useLanguage();

  const experiences = [
    {
      company: 'Platform Builders',
      role: 'Software Engineer',
      period: '2025 - Present',
      logo: <FaBuilding />,
      description: t('company.builders'),
      technologies: ['PHP', 'Laravel', 'NestJS', 'React', 'Docker', 'Azure', 'Kafka', 'Java 17', 'Spring Boot', 'Angular']
    },
    {
      company: 'Extds',
      role: 'Líder de Desenvolvimento',
      period: '2023 - Present',
      logo: <FaBriefcase />,
      description: 'Liderança técnica de equipes de desenvolvimento, arquitetura de sistemas e implementação de melhores práticas de desenvolvimento de software.',
      technologies: ['CodeIgniter', 'PHP', 'Python', 'Docker']
    },
    {
      company: 'Porto Serviço (Alocado by Platform Builders)',
      role: 'Backend Developer',
      period: '2025 - Present',
      logo: <FaShip />,
      description: 'Desenvolvimento de soluções backend robustas e escaláveis para plataforma de seguros, com foco em arquitetura de microserviços e performance.',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Redis', 'Docker', 'Azure']
    },
    {
      company: 'UNICRED (Alocado by Zallpy)',
      role: 'Backend Developer',
      period: '2024 - 2025',
      logo: <FaUniversity />,
      description: 'Desenvolvimento de APIs RESTful seguras e escaláveis para sistema CRM bancário, com foco em performance e segurança.',
      technologies: ['PHP', 'Hyperf', 'MySQL', 'Redis', 'Docker', 'Microservices']
    },
    {
      company: 'Facta (Alocado by Zallpy)',
      role: 'Full Stack Developer',
      period: '2022 - 2024',
      logo: <FaIndustry />,
      description: 'Desenvolvimento de sistemas industriais e dashboards para gestão de produção, com integração IoT e análise de dados em tempo real.',
      technologies: ['PHP', 'Laravel', 'Vue.js', 'PostgreSQL', 'Docker', 'AWS']
    },
    {
      company: 'Zallpy Digital',
      role: 'Full Stack Developer',
      period: '2022 - 2025',
      logo: <FaLaptopCode />,
      description: 'Desenvolvimento de aplicações web e mobile, APIs backend e integração de sistemas com foco em escalabilidade.',
      technologies: ['Node.js', 'React', 'Python', 'PostgreSQL', 'Docker', 'AWS']
    }
  ];

  const technologies = [
    'PHP', 'JavaScript', 'TypeScript', 'Node.js', 'React', 'Laravel',
    'NestJS', 'Python', 'Docker', 'Kafka', 'PostgreSQL', 'MongoDB',
    'Azure', 'AWS', 'Git', 'Linux', 'Redis', 'Microservices',
    'Java 17', 'Spring Boot', 'Angular', 'CodeIgniter'
  ];

  return (
    <CompanyWrapper $isVisible={isVisible} $direction={direction}>
      <Title>{t('company.title')}</Title>

      <TechSection>
        <TechTitle>{t('company.technologies')}</TechTitle>
        <TechGrid>
          {technologies.map((tech, index) => (
            <TechIcon key={index}>{tech}</TechIcon>
          ))}
        </TechGrid>
      </TechSection>

      <TimelineContainer>
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineMarker>{exp.logo}</TimelineMarker>
            <CompanyCard>
              <CompanyHeader>
                <CompanyLogo>{exp.logo}</CompanyLogo>
                <CompanyInfo>
                  <CompanyName>{exp.company}</CompanyName>
                  <CompanyRole>{exp.role}</CompanyRole>
                </CompanyInfo>
                <CompanyPeriod>{exp.period}</CompanyPeriod>
              </CompanyHeader>
              <CompanyDescription>{exp.description}</CompanyDescription>
              <TechStack>
                {exp.technologies.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </TechStack>
            </CompanyCard>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </CompanyWrapper>
  );
};

export default Company;
