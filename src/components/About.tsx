import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { media } from '../styles/media';
import { fadeIn } from '../styles/animations';
import { ContentContainer } from '../styles/ContentContainer';

const AboutWrapper = styled.section`
  padding: 60px 0;
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

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;

  ${media.tablet`
    font-size: 1rem;
  `}

  ${media.mobile`
    font-size: 0.9rem;
  `}
`;

const About = () => {
  const { t } = useTranslation();

  return (
    <AboutWrapper>
      <ContentContainer>
        <h2>{t('aboutTitle')}</h2>
        <AboutText>
          {t('aboutText')}
        </AboutText>
      </ContentContainer>
    </AboutWrapper>
  );
};

export default About;
