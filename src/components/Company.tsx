import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { media } from '../styles/media';

const CompanyWrapper = styled.div<{ $isVisible: boolean; $direction: string }>`
  position: fixed;
  top: calc(50% - 40px); /* Ajuste para centralizar acima do footer */
  left: 50%;
  transform: translate(-50%, -50%) scale(${props => props.$isVisible ? '1' : '0.8'});
  opacity: ${props => props.$isVisible ? '1' : '0'};
  width: 85%;
  max-width: 750px;
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

const TechSection = styled.div`
  margin-bottom: 30px;
  padding: 25px;
  background: rgba(61, 58, 58, 0.5);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: #f5f5f5;
    margin: 0 0 20px 0;
    font-size: 1.2rem;
    text-align: center;
  }

  ${media.tablet`
    padding: 20px;
    margin-bottom: 25px;

    h3 {
      font-size: 1.1rem;
      margin-bottom: 18px;
    }
  `}

  ${media.mobile`
    padding: 18px;
    margin-bottom: 20px;

    h3 {
      font-size: 1rem;
      margin-bottom: 15px;
    }
  `}
`;

const TechIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  img {
    max-width: 100%;
    height: auto;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
  }

  ${media.mobile`
    gap: 8px;
  `}
`;

const Content = styled.div`
  color: rgba(245, 245, 245, 0.95);
  line-height: 1.8;
  font-size: 1.05rem;

  p {
    margin-bottom: 18px;
  }

  h3 {
    color: #f5f5f5;
    margin-top: 25px;
    margin-bottom: 15px;
    font-size: 1.2rem;
    padding-left: 12px;
    border-left: 3px solid rgba(255, 255, 255, 0.3);
  }

  ${media.tablet`
    font-size: 1rem;
    line-height: 1.7;

    p {
      margin-bottom: 15px;
    }
    
    h3 {
      font-size: 1.15rem;
      margin-top: 20px;
      margin-bottom: 12px;
    }
  `}

  ${media.mobile`
    font-size: 0.95rem;
    line-height: 1.6;

    p {
      margin-bottom: 12px;
    }
    
    h3 {
      font-size: 1.05rem;
      margin-top: 18px;
      margin-bottom: 10px;
      padding-left: 10px;
      border-left-width: 2px;
    }
  `}
`;

interface CompanyProps {
  isVisible: boolean;
  direction?: 'left' | 'right' | 'top' | 'bottom';
}

const Company = ({ isVisible, direction = 'top' }: CompanyProps) => {
  const { t } = useTranslation();

  return (
    <CompanyWrapper $isVisible={isVisible} $direction={direction}>
      <Title>{t('company.title')}</Title>
      
      <TechSection>
        <h3>{t('company.technologies')}</h3>
        <TechIcons>
          <img src="https://skillicons.dev/icons?i=js,ts,react,nextjs,nodejs,nestjs,php,mysql,github,notion&perline=5" alt="Technologies" />
        </TechIcons>
      </TechSection>

      <Content>
        <h3>🏢 Builders</h3>
        <p>{t('company.builders')}</p>

        <h3>🌍 EXTDS - Portugal / Bélgica</h3>
        <p>{t('company.extds')}</p>
      </Content>
    </CompanyWrapper>
  );
};

export default Company;
