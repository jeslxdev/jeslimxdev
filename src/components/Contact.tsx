import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { media } from '../styles/media';
import { Card as ContactCardBase } from './common/Card';

const ContactWrapper = styled.div<{ $isVisible: boolean; $direction: string }>`
  position: fixed;
  top: calc(50% + (var(--nav-safe-top) / 2) - 40px); /* Centralized, respecting navbar */
  left: 50%;
  transform: translate(-50%, -50%) scale(${props => props.$isVisible ? '1' : '0.8'});
  opacity: ${props => props.$isVisible ? '1' : '0'};
  width: 85%;
  max-width: 700px;
  height: auto;
  max-height: 70vh;
  background: rgba(27, 61, 80, 0.2);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 900;
  padding: clamp(16px, 3vw, 28px);
  overflow-y: auto;
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 10px 60px rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  pointer-events: ${props => props.$isVisible ? 'auto' : 'none'};

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
    padding: 30px;
    max-width: 85%;
    max-height: 70vh;
    width: 90%;
  `}

  ${media.mobile`
    padding: clamp(12px, 4vw, 20px);
    width: 92%;
    max-width: 95%;
  max-height: calc(100vh - var(--nav-safe-top) - var(--footer-safe-bottom) - (2 * var(--panel-gap-y)));
  top: calc(50% + (var(--nav-safe-top) / 2) - 30px);
  `}
`;

const Title = styled.h2`
  color: #f5f5f5;
  font-size: clamp(1.25rem, 4vw, 2rem);
  margin-bottom: clamp(16px, 3vw, 30px);
  text-align: center;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const ContactOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 20px;

  ${media.mobile`
    gap: 15px;
    margin-top: 15px;
  `}
`;

const ContactCard = styled(ContactCardBase).attrs({ as: 'a' })`
  display: flex;
  align-items: center;
  gap: clamp(12px, 2.5vw, 20px);
  text-decoration: none;
  color: #f5f5f5;

  .icon {
    font-size: clamp(1.4rem, 5vw, 2rem);
    min-width: clamp(28px, 6vw, 40px);
    text-align: center;
  }

  .info {
    flex: 1;
    h3 {
      font-size: clamp(1rem, 3.2vw, 1.15rem);
      margin: 0 0 clamp(4px, 1.2vw, 8px) 0;
    }
    p {
      font-size: clamp(0.85rem, 2.6vw, 0.95rem);
    }
  }
`;

interface ContactProps {
  isVisible: boolean;
  direction?: 'left' | 'right' | 'top' | 'bottom';
}

const Contact = ({ isVisible, direction = 'bottom' }: ContactProps) => {
  const { t } = useTranslation();

  return (
    <ContactWrapper $isVisible={isVisible} $direction={direction}>
      <Title>{t('contact.title')}</Title>
      <ContactOptions>
        <ContactCard href="https://www.linkedin.com/in/joao-emanuel-752778174/" target="_blank" rel="noopener noreferrer">
          <span className="icon">💼</span>
          <div className="info">
            <h3>LinkedIn</h3>
            <p>{t('contact.linkedin')}</p>
          </div>
        </ContactCard>
        <ContactCard href="mailto:joaoemanuel@example.com">
          <span className="icon">📧</span>
          <div className="info">
            <h3>Email</h3>
            <p>{t('contact.email')}</p>
          </div>
        </ContactCard>
        <ContactCard href="https://github.com/jeslxdev" target="_blank" rel="noopener noreferrer">
          <span className="icon">💻</span>
          <div className="info">
            <h3>GitHub</h3>
            <p>{t('contact.github')}</p>
          </div>
        </ContactCard>
      </ContactOptions>
    </ContactWrapper>
  );
};

export default Contact;
