import styled from 'styled-components';
import { useLanguage } from '@/infrastructure/i18n/LanguageContext';
import { media } from '@/styles/media';
import { fadeIn } from '@/styles/animations';
import { ContentContainer } from '@/styles/ContentContainer';

const HeaderWrapper = styled.header`
  background-color: transparent;
  padding: calc(var(--nav-safe-top) + 40px) 20px 60px;
  color: white;
  animation: ${fadeIn} 1s ease-in-out;
  width: 100%;
  position: relative;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - var(--nav-safe-top) - 120px);

  ${media.tablet`
    padding: calc(var(--nav-safe-top) + 30px) 15px 40px;
    min-height: calc(100vh - var(--nav-safe-top) - 100px);
  `}

  ${media.mobile`
    padding: calc(var(--nav-safe-top) + 20px) 10px 30px;
    min-height: calc(100vh - var(--nav-safe-top) - 80px);
  `}
`;

const HeaderContent = styled(ContentContainer)`
  text-align: center;
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
