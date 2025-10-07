import styled from 'styled-components';
import { media } from './media';

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  ${media.tablet`
    padding: 0 15px;
  `}

  ${media.mobile`
    padding: 0 10px;
  `}
`;
