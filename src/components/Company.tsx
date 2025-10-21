import styled from 'styled-components';
import { useLanguage } from '@/infrastructure/i18n/LanguageContext';
import { media } from '@/styles/media';
import { Card } from '@/components/common/Card';

const CompanyWrapper = styled.div<{ $isVisible: boolean; $direction: string }>`
  position: relative;
  width: min(750px, 90%);
  max-height: calc(80vh - 60px); /* Reduzir altura para dar espaço ao navbar */
  background: rgba(27, 61, 80, 0.5); /* 50% transparency */
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: clamp(24px, 4vw, 40px); /* Aumentar padding interno */
  margin-top: 20px; /* Adicionar margem superior */
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
    max-height: calc(80vh - 40px);
    padding: clamp(20px, 3vw, 35px);
    margin-top: 15px;
  `}

  ${media.mobile`
    width: 95%;
    max-height: calc(85vh - 30px);
    padding: clamp(16px, 4vw, 24px);
    margin-top: 10px;
  `}
`;

const Title = styled.h2`
  color: #f5f5f5;
  font-size: clamp(1.25rem, 4vw, 2rem);
  margin-bottom: clamp(20px, 4vw, 35px);
  margin-top: clamp(8px, 2vw, 16px);
  text-align: center;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const TechSection = styled.div`
  margin-bottom: 30px;
  padding: clamp(16px, 3vw, 25px);
  background: rgba(255, 255, 255, 0.05); /* Transparente como os cards */
  backdrop-filter: blur(15px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  h3 {
    color: #f5f5f5;
    margin: 0 0 20px 0;
    font-size: clamp(1rem, 3vw, 1.2rem);
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
  line-height: 1.75;
  font-size: clamp(0.95rem, 2.5vw, 1.05rem);

  p {
    margin-bottom: 18px;
  }

  h3 {
    color: #f5f5f5;
    margin-top: 25px;
    margin-bottom: 15px;
    font-size: clamp(1rem, 3vw, 1.2rem);
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
  const { t } = useLanguage();

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
        <Card>
          <h3>🏢 Builders</h3>
          <p>{t('company.builders')}</p>
        </Card>

        <Card>
          <h3>🌍 EXTDS - Portugal / Bélgica</h3>
          <p>{t('company.extds')}</p>
        </Card>
      </Content>
    </CompanyWrapper>
  );
};

export default Company;
