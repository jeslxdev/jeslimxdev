import styled, { keyframes } from 'styled-components';

const countUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Band = styled.div`
  background: ${props => props.theme.colors.backgroundCard};
  border-top: 1px solid ${props => props.theme.colors.border};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  overflow: hidden;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Cell = styled.div`
  padding: ${props => props.theme.spacing['2xl']} ${props => props.theme.spacing.xl};
  border-right: 1px solid ${props => props.theme.colors.border};
  animation: ${countUp} 0.6s ease-out both;
  position: relative;

  &:last-child { border-right: none; }

  &:nth-child(1) { animation-delay: 0.05s; }
  &:nth-child(2) { animation-delay: 0.15s; }
  &:nth-child(3) { animation-delay: 0.25s; }
  &:nth-child(4) { animation-delay: 0.35s; }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    &:nth-child(2) { border-right: none; }
    &:nth-child(3) { border-top: 1px solid ${props => props.theme.colors.border}; }
    &:nth-child(4) {
      border-right: none;
      border-top: 1px solid ${props => props.theme.colors.border};
    }
  }
`;

const Num = styled.div`
  font-family: ${props => props.theme.fonts.mono};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.text};
  letter-spacing: -0.04em;
  line-height: 1;
  margin-bottom: 6px;
`;

const Lbl = styled.div`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

const Corner = styled.div`
  position: absolute;
  top: ${props => props.theme.spacing.md};
  right: ${props => props.theme.spacing.md};
  font-family: ${props => props.theme.fonts.mono};
  font-size: 9px;
  color: ${props => props.theme.colors.border};
  letter-spacing: 0.1em;
`;

export const StatsBand = () => {
  return (
    <Band>
      <Inner>
        <Cell>
          <Corner>01</Corner>
          <Num>10+</Num>
          <Lbl>Projects Delivered</Lbl>
        </Cell>
        <Cell>
          <Corner>02</Corner>
          <Num>7+</Num>
          <Lbl>Years in Market</Lbl>
        </Cell>
        <Cell>
          <Corner>03</Corner>
          <Num>4</Num>
          <Lbl>Countries Active</Lbl>
        </Cell>
        <Cell>
          <Corner>04</Corner>
          <Num>AI</Num>
          <Lbl>Core Specialty</Lbl>
        </Cell>
      </Inner>
    </Band>
  );
};
