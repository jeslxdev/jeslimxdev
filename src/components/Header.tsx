import styled, { keyframes } from 'styled-components';
import { useLanguage } from '@/infrastructure/i18n/LanguageContext';
import { media } from '@/styles/media';
import { fadeInScale } from '@/styles/animations';
import { ContentContainer } from '@/styles/ContentContainer';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const HeaderWrapper = styled.header`
  background: linear-gradient(135deg,
    #01191e 0%,
    #011317 50%,
    #010d0f 100%);
  padding: 0;
  margin: 0;
  color: white;
  width: 100%; /* Voltar para 100% */
  height: 100vh;
  position: relative;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background:
      radial-gradient(circle at 20% 80%, rgba(62, 62, 62, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(47, 47, 47, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(31, 31, 31, 0.05) 0%, transparent 50%);
    animation: ${float} 20s ease-in-out infinite;
    pointer-events: none;
  }
`;const HeaderContent = styled(ContentContainer)`
  text-align: center;
  animation: ${fadeInScale} 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  opacity: 0;
  position: relative;
  z-index: 2;
  padding: 0 20px;

  ${media.tablet`
    width: 90%;
    padding: 0 24px;
  `}

  ${media.mobile`
    width: 95%;
    padding: 0 16px;
  `}
`;

const Title = styled.h1`
  font-size: 4.5rem;
  margin: 0;
  font-weight: 800;
  background: linear-gradient(135deg, #3e3e3e 0%, #2f2f2f 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;

  ${media.laptop`
    font-size: 4rem;
  `}

  ${media.tablet`
    font-size: 3.2rem;
  `}

  ${media.mobile`
    font-size: 2.8rem;
    line-height: 1.2;
  `}
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  margin: 24px 0 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.5px;

  ${media.laptop`
    font-size: 1.6rem;
    margin: 20px 0 0;
  `}

  ${media.tablet`
    font-size: 1.4rem;
    margin: 18px 0 0;
  `}

  ${media.mobile`
    font-size: 1.2rem;
    margin: 16px 0 0;
  `}
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin: 32px auto 0;
  max-width: 600px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-weight: 300;

  ${media.laptop`
    font-size: 1.15rem;
    margin: 28px auto 0;
    max-width: 580px;
  `}

  ${media.tablet`
    font-size: 1.1rem;
    margin: 24px auto 0;
    max-width: 500px;
    line-height: 1.5;
  `}

  ${media.mobile`
    font-size: 1rem;
    margin: 20px auto 0;
    max-width: 320px;
    line-height: 1.5;
    padding: 0 8px;
  `}
`;

const Header = () => {
  const { t } = useLanguage();

  return (
    <HeaderWrapper>
      <HeaderContent>
        <Title>{t('title')}</Title>
        <Subtitle>{t('subtitle')}</Subtitle>
        <Description>
          Desenvolvedor de Software com 7+ anos construindo e escalando aplicações PHP. Contribuí para a evolução de sistemas críticos em empresas de referência no mercado brasileiro e liderei iniciativas técnicas e de negócios em ERP e SaaS na Europa. Foco em arquitetura, performance e segurança.
        </Description>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
