import styled from 'styled-components';
import { media } from './media';

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: clamp(16px, 4vw, 24px);
  padding-right: clamp(16px, 4vw, 24px);
  ${media.tablet`
    padding-left: clamp(16px, 5vw, 28px);
    padding-right: clamp(16px, 5vw, 28px);
  `}
  ${media.mobile`
    padding-left: clamp(12px, 6vw, 20px);
    padding-right: clamp(12px, 6vw, 20px);
  `}
`;
