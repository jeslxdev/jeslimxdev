import styled, { css } from 'styled-components';
import { media } from '@/styles/media';

// A reusable responsive Card with adaptive spacing and typography
const base = css`
  background: rgba(255, 255, 255, 0.05); /* Apenas 5% de opacidade - quase transparente */
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: clamp(12px, 2.5vw, 20px);
  margin-bottom: clamp(12px, 2.5vw, 20px);
  margin-top: clamp(8px, 2vw, 16px);
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, border-color 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  }

  h3 {
    color: #f5f5f5;
    margin: 0 0 clamp(8px, 1.5vw, 12px) 0;
    font-size: clamp(1rem, 2.5vw, 1.15rem);
  }

  p {
    margin: 0;
    color: rgba(245, 245, 245, 0.85);
    font-size: clamp(0.9rem, 2.2vw, 1rem);
    line-height: 1.6;
  }
`;

export const Card = styled.div`
  ${base}
  /* Full-perimeter semantic line */
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);

  ${media.mobile`
    border-radius: 14px;
  `}
`;

export default Card;
