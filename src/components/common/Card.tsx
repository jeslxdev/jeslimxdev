import styled, { css } from 'styled-components';
import { media } from '../../styles/media';

// A reusable responsive Card with adaptive spacing and typography
const base = css`
  background: rgba(61, 58, 58, 0.25); /* softer ~25% transparency */
  border: 1px solid rgba(255, 255, 255, 0.28); /* slightly stronger border for contrast */
  border-radius: 16px;
  padding: clamp(12px, 2.5vw, 20px);
  margin-bottom: clamp(12px, 2.5vw, 20px);
  margin-top: clamp(8px, 2vw, 16px);
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, border-color 0.25s ease;

  &:hover {
    background: rgba(61, 58, 58, 0.75);
    border-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.35);
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
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.18);

  ${media.mobile`
    border-radius: 14px;
  `}
`;

export default Card;
