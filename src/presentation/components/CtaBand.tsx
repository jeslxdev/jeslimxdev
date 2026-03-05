import styled, { keyframes } from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';

const gridScroll = keyframes`
  from { transform: translate(0, 0); }
  to   { transform: translate(50px, 50px); }
`;

const Band = styled.section`
  padding: ${props => props.theme.spacing['4xl']} ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.text};
  color: ${props => props.theme.colors.background};
  position: relative;
  overflow: hidden;
  border-top: 1px solid ${props => props.theme.colors.border};
`;

const GridBg = styled.div`
  position: absolute;
  inset: -100px;
  z-index: 0;
  background-image:
    linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: ${gridScroll} 12s linear infinite;
  pointer-events: none;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${props => props.theme.spacing['2xl']};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
    gap: ${props => props.theme.spacing.xl};
  }
`;

const TextBlock = styled.div``;

const Eyebrow = styled.p`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.backgroundCard};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: ${props => props.theme.spacing.md};
  &::before { content: '// '; }
`;

const Headline = styled.h2`
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: ${props => props.theme.fontWeights.extrabold};
  color: ${props => props.theme.colors.background};
  letter-spacing: -0.04em;
  line-height: 1.0;
`;

const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing['3xl']};
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: ${props => props.theme.fontWeights.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
  transition: all 0.2s;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background: ${props => props.theme.colors.border};
    transform: translateY(-2px);
  }

  svg { flex-shrink: 0; }
`;

export const CtaBand = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Band>
      <GridBg />
      <Inner>
        <TextBlock>
          <Eyebrow>next step</Eyebrow>
          <Headline>Let's Build It.</Headline>
        </TextBlock>
        <Btn onClick={() => scrollTo('contact')}>
          Start a Project <FaChevronRight size={12} />
        </Btn>
      </Inner>
    </Band>
  );
};
