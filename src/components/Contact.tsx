import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { media } from '../styles/media';

const ContactWrapper = styled.div<{ $isVisible: boolean; $direction: string }>`
  position: fixed;
  top: calc(50% - 40px); /* Ajuste para centralizar acima do footer */
  left: 50%;
  transform: translate(-50%, -50%) scale(${props => props.$isVisible ? '1' : '0.8'});
  opacity: ${props => props.$isVisible ? '1' : '0'};
  width: 85%;
  max-width: 700px;
  height: auto;
  max-height: 60vh; /* Reduzido para mais respiro */
  background: rgba(27, 61, 80, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 500;
  padding: 35px;
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
    max-height: 65vh;
    width: 90%;
  `}

  ${media.mobile`
    padding: 25px; /* Aumentado */
    width: 92%;
    max-width: 95%;
    max-height: 70vh; /* Ajustado */
    top: calc(50% - 30px); /* Ajuste mobile */
  `}
`;

const Title = styled.h2`
  color: #f5f5f5;
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  ${media.tablet`
    font-size: 1.8rem;
    margin-bottom: 25px;
  `}

  ${media.mobile`
    font-size: 1.5rem;
    margin-bottom: 20px;
  `}
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

const ContactCard = styled.a`
  background: rgba(61, 58, 58, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  padding: 25px;
  text-decoration: none;
  color: #f5f5f5;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  align-items: center;
  gap: 20px;

  &:hover {
    background: rgba(61, 58, 58, 0.8);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }

  .icon {
    font-size: 2.2rem;
    min-width: 45px;
    text-align: center;
  }

  .info {
    flex: 1;
    
    h3 {
      color: #f5f5f5;
      margin: 0 0 8px 0;
      font-size: 1.2rem;
    }

    p {
      margin: 0;
      color: rgba(245, 245, 245, 0.8);
      font-size: 0.95rem;
    }
  }

  ${media.tablet`
    padding: 20px;
    gap: 18px;

    .icon {
      font-size: 2rem;
      min-width: 40px;
    }

    .info h3 {
      font-size: 1.15rem;
      margin-bottom: 6px;
    }

    .info p {
      font-size: 0.9rem;
    }
  `}

  ${media.mobile`
    padding: 15px;
    gap: 12px;

    .icon {
      font-size: 1.8rem;
      min-width: 35px;
    }

    .info h3 {
      font-size: 1.05rem;
      margin-bottom: 4px;
    }

    .info p {
      font-size: 0.85rem;
    }
  `}
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
