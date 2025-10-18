import styled from 'styled-components';
import { useLanguage } from '@/infrastructure/i18n/LanguageContext';
import { media } from '@/styles/media';
import { fadeInScale } from '@/styles/animations';
import { ContentContainer } from '@/styles/ContentContainer';

const HeaderWrapper = styled.header`
  background-color: transparent;
  padding: 0;
  color: white;
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderContent = styled(ContentContainer)`
  text-align: center;
  animation: ${fadeInScale} 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  opacity: 0;

  ${media.mobile`
    width: 90%;
  `}
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin: 0;
  text-shadow: 0 0 20px rgba(100, 150, 255, 0.5);

  ${media.tablet`
    font-size: 2.5rem;
  `}

  ${media.mobile`
    font-size: 2rem;
  `}
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  margin: 20px 0 0;
  color: rgba(255, 255, 255, 0.8);

  ${media.tablet`
    font-size: 1.2rem;
  `}

  ${media.mobile`
    font-size: 1rem;
  `}
`;

const Header = () => {
  const { t } = useLanguage();

  return (
    <HeaderWrapper>
      <HeaderContent>
        <Title>{t('title')}</Title>
        <Subtitle>{t('subtitle')}</Subtitle>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
