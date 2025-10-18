import styled from 'styled-components';
import { useLanguage } from '@/infrastructure/i18n/LanguageContext';
import { media } from '@/styles/media';
import { Card } from '@/components/common/Card';

const PresentationWrapper = styled.div<{ $isVisible: boolean; $direction: string }>`
  position: fixed;
  left: ${props => props.$isVisible ? '0' : '-100%'};
  top: calc(var(--nav-safe-top) + var(--panel-gap-y));
  height: calc(100vh - var(--nav-safe-top) - var(--footer-safe-bottom) - (2 * var(--panel-gap-y)));
  width: min(600px, calc(100% - var(--panel-gap-x)));
  background: rgba(27, 61, 80, 0.25); /* softer opacity */
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 900;
  padding: clamp(16px, 3vw, 28px);
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
    width: calc(100% - var(--panel-gap-x));
    padding: clamp(14px, 3vw, 24px);
  `}

  ${media.mobile`
    width: 100%;
    top: calc(var(--nav-safe-top) + var(--panel-gap-y));
    height: calc(100vh - var(--nav-safe-top) - var(--footer-safe-bottom) - (2 * var(--panel-gap-y)));
    padding: clamp(12px, 5vw, 24px);
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
  const { t } = useLanguage();

  return (
    <PresentationWrapper $isVisible={isVisible} $direction={direction}>
      <Title>{t('presentation.title')}</Title>
      <Content>
        <Card>
          <p>{t('presentation.intro')}</p>
        </Card>
        <Card>
          <p>{t('presentation.experience')}</p>
        </Card>
        <Card>
          <p>{t('presentation.passion')}</p>
        </Card>
      </Content>
    </PresentationWrapper>
  );
};

export default Presentation;
