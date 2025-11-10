import styled, { keyframes } from 'styled-components';
import { useLanguage } from '@/infrastructure/i18n/LanguageContext';
import { media } from '@/styles/media';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const bounceIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    transform: scale(1.05);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContactWrapper = styled.div<{ $isVisible: boolean; $direction: string }>`
  position: relative;
  width: min(850px, 95%);
  max-height: calc(85vh - 60px);
  background: #01191e;
  border: 1px solid #3e3e3e;
  border-radius: 24px;
  padding: clamp(32px, 5vw, 48px);
  margin-top: 20px;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #1f1f1f;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #2f2f2f;
    border-radius: 10px;

    &:hover {
      background: #3e3e3e;
    }
  }

  ${media.laptopLarge`
    width: min(800px, 90%);
    padding: clamp(28px, 4vw, 44px);
  `}

  ${media.laptop`
    width: min(750px, 92%);
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
  margin-bottom: clamp(16px, 3vw, 24px);
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

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  text-align: center;
  margin-bottom: clamp(32px, 4vw, 48px);
  line-height: 1.6;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(20px, 3vw, 24px);
  margin-bottom: clamp(32px, 4vw, 48px);

  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}
`;

const ContactCard = styled.a`
  background: #1f1f1f;
  border: 1px solid #2f2f2f;
  border-radius: 20px;
  padding: clamp(24px, 4vw, 32px);
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: clamp(16px, 3vw, 20px);
  transition: all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
  animation: ${slideUp} 0.6s ease-out forwards;
  opacity: 0;
  position: relative;
  overflow: hidden;

  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.3s; }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: #4a5568;
  }

  &:hover {
    transform: translateY(-8px);
    background: #2f2f2f;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  }

  ${media.mobile`
    padding: clamp(20px, 4vw, 24px);
    border-radius: 16px;
    flex-direction: column;
    text-align: center;
    gap: 12px;
  `}
`;

const ContactIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #4a5568;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  flex-shrink: 0;
  animation: ${bounceIn} 0.8s ease-out forwards;

  ${media.mobile`
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  `}
`;

const ContactInfo = styled.div`
  flex: 1;

  ${media.mobile`
    text-align: center;
  `}
`;

const ContactTitle = styled.h3`
  color: #f5f5f5;
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  margin: 0 0 8px 0;
  font-weight: 600;
`;

const ContactDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  margin: 0;
  line-height: 1.5;
`;

interface ContactProps {
  isVisible: boolean;
  direction?: 'left' | 'right' | 'top' | 'bottom';
}

const Contact = ({ isVisible, direction = 'bottom' }: ContactProps) => {
  const { t } = useLanguage();

  return (
    <ContactWrapper $isVisible={isVisible} $direction={direction}>
      <Title>{t('contact.title')}</Title>
      <Subtitle>
        {t('contact.subtitle')}
      </Subtitle>

      <ContactGrid>
        <ContactCard
          href="https://www.linkedin.com/in/joao-emanuel-752778174/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactIcon><FaLinkedin /></ContactIcon>
          <ContactInfo>
            <ContactTitle>LinkedIn</ContactTitle>
            <ContactDescription>{t('contact.linkedin')}</ContactDescription>
          </ContactInfo>
        </ContactCard>

        <ContactCard
          href="https://github.com/jeslxdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactIcon><FaGithub /></ContactIcon>
          <ContactInfo>
            <ContactTitle>GitHub</ContactTitle>
            <ContactDescription>{t('contact.github')}</ContactDescription>
          </ContactInfo>
        </ContactCard>
      </ContactGrid>

    </ContactWrapper>
  );
};

export default Contact;
