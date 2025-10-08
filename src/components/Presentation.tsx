import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { media } from '../styles/media';

const PresentationWrapper = styled.div<{ $isVisible: boolean; $direction: string }>`
  position: fixed;
  left: ${props => props.$isVisible ? '0' : '-100%'};
  top: 0;
  height: 100vh;
  width: 600px;
  background: rgba(27, 61, 80, 0.95);
  backdrop-filter: blur(20px);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 500;
  padding: 120px 40px 120px;
  overflow-y: auto;
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 10px 0 60px rgba(0, 0, 0, 0.6);

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
    width: 80%;
    padding: 100px 30px 100px;
  `}

  ${media.mobile`
    width: 100%;
    padding: 80px 25px;
    border-right: none;
  `}
`;

const Title = styled.h2`
  color: #f5f5f5;
  font-size: 2rem;
  margin-bottom: 30px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  ${media.mobile`
    font-size: 1.5rem;
  `}
`;

const Content = styled.div`
  color: rgba(245, 245, 245, 0.95);
  line-height: 1.7;
  font-size: 1rem;

  p {
    margin-bottom: 15px;
  }

  ${media.mobile`
    font-size: 0.95rem;
    line-height: 1.6;
  `}
`;

interface PresentationProps {
  isVisible: boolean;
  direction?: 'left' | 'right' | 'top' | 'bottom';
}

const Presentation = ({ isVisible, direction = 'left' }: PresentationProps) => {
  const { t } = useTranslation();

  return (
    <PresentationWrapper $isVisible={isVisible} $direction={direction}>
      <Title>{t('presentation.title')}</Title>
      <Content>
        <p>{t('presentation.intro')}</p>
        <p>{t('presentation.experience')}</p>
        <p>{t('presentation.passion')}</p>
      </Content>
    </PresentationWrapper>
  );
};

export default Presentation;
