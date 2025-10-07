import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { media } from '../styles/media';
import { fadeIn } from '../styles/animations';
import LanguageSwitcher from './LanguageSwitcher';
import { ContentContainer } from '../styles/ContentContainer';

const HeaderWrapper = styled.header`
  background-color: #282c34;
  padding: 40px 0;
  color: white;
  animation: ${fadeIn} 1s ease-in-out;
  width: 100%;

  ${media.tablet`
    padding: 30px 0;
  `}

  ${media.mobile`
    padding: 20px 0;
  `}
`;

const HeaderContent = styled(ContentContainer)`
  position: relative;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;

  ${media.tablet`
    font-size: 2rem;
  `}

  ${media.mobile`
    font-size: 1.5rem;
  `}
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: normal;
  margin: 10px 0 0;

  ${media.tablet`
    font-size: 1rem;
  `}

  ${media.mobile`
    font-size: 0.9rem;
  `}
`;

const Header = () => {
  const { t } = useTranslation();

  return (
    <HeaderWrapper>
      <HeaderContent>
        <LanguageSwitcher />
        <Title>{t('title')}</Title>
        <Subtitle>{t('subtitle')}</Subtitle>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
