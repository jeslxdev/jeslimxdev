import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { media } from '../styles/media';
import { fadeIn } from '../styles/animations';
import { ContentContainer } from '../styles/ContentContainer';

const TechnologiesWrapper = styled.section`
  padding: 60px 0;
  background-color: #f7f7f7;
  animation: ${fadeIn} 1s ease-in-out;
  width: 100%;
  text-align: center;

  ${media.tablet`
    padding: 40px 0;
  `}

  ${media.mobile`
    padding: 30px 0;
  `}
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const Technologies = () => {
  const { t } = useTranslation();

  return (
    <TechnologiesWrapper>
      <ContentContainer>
        <h2>{t('technologiesTitle')}</h2>
        <IconsContainer>
          <img src="https://skillicons.dev/icons?i=js,ts,react,nextjs,nodejs,nestjs,php,mysql,github,notion&perline=5" />
        </IconsContainer>
      </ContentContainer>
    </TechnologiesWrapper>
  );
};

export default Technologies;
