import styled from 'styled-components';
import { media } from './media';

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(20px, 5vw, 60px);

  ${media.tablet`
    padding: 0 clamp(24px, 6vw, 40px);
  `}

  ${media.mobile`
    padding: 0 clamp(16px, 4vw, 24px);
  `}
`;
