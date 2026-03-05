import styled, { keyframes } from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  padding: ${props => props.theme.spacing['4xl']} ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.background};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${props => props.theme.colors.border}, transparent);
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing['3xl']} ${props => props.theme.spacing.md};
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Label = styled.p`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: ${props => props.theme.spacing.md};
  animation: ${fadeUp} 0.6s ease-out;

  &::before { content: '// '; }
`;

const Title = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights.bold};
  letter-spacing: -0.03em;
  margin-bottom: ${props => props.theme.spacing['3xl']};
  animation: ${fadeUp} 0.7s ease-out;
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  border: 1px solid ${props => props.theme.colors.border};
  animation: ${fadeUp} 0.8s ease-out;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const AvatarBlock = styled.div`
  background: ${props => props.theme.colors.backgroundCard};
  border-right: 1px solid ${props => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing['3xl']} ${props => props.theme.spacing.xl};
  gap: ${props => props.theme.spacing.lg};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    border-right: none;
    border-bottom: 1px solid ${props => props.theme.colors.border};
    padding: ${props => props.theme.spacing['2xl']} ${props => props.theme.spacing.xl};
  }
`;

const Avatar = styled.div`
  width: 96px;
  height: 96px;
  background: ${props => props.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${props => props.theme.fonts.mono};
  font-size: 2rem;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: -0.04em;
  clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
`;

const FounderName = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.text};
  letter-spacing: -0.02em;
  text-align: center;
`;

const FounderRole = styled.p`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-align: center;
`;

const LinkedInButton = styled.a`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  background: ${props => props.theme.colors.text};
  color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.primaryDark};
  }

  svg { font-size: ${props => props.theme.fontSizes.base}; }
`;

const InfoBlock = styled.div`
  padding: ${props => props.theme.spacing['3xl']};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing['2xl']} ${props => props.theme.spacing.xl};
  }
`;

const Bio = styled.p`
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.85;
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
  background: ${props => props.theme.colors.border};
  border: 1px solid ${props => props.theme.colors.border};
`;

const MetaItem = styled.div`
  flex: 1;
  min-width: 140px;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.backgroundCard};
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const MetaLabel = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const MetaValue = styled.span`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights.medium};
`;

export const Founder = () => {
  return (
    <Section id="founder">
      <Container>
        <Label>founder &amp; leadership</Label>
        <Title>The Person Behind It</Title>

        <Card>
          <AvatarBlock>
            <Avatar>JE</Avatar>
            <FounderName>João Emanuel</FounderName>
            <FounderRole>Founder</FounderRole>
            <LinkedInButton
              href="https://www.linkedin.com/in/joao-emanuel-752778174/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </LinkedInButton>
          </AvatarBlock>

          <InfoBlock>
            <Bio>
              Senior software engineer with 7+ years of hands-on experience across fintech, ERP, SaaS, and mobile platforms.
              Founded Feilen Solutions IT to channel deep technical expertise into a focused delivery operation — building
              software that works at scale and stands up in production.
            </Bio>
            <Bio>
              Has led full-cycle deliveries for clients in Portugal, Brussels, Spain, and Brazil, working across backend,
              frontend, and infrastructure. Core background in PHP, Java, and Python with growing focus on AI-augmented systems and
              modern cloud architectures.
            </Bio>

            <MetaRow>
              <MetaItem>
                <MetaLabel>Location</MetaLabel>
                <MetaValue>São Paulo, Brasil</MetaValue>
              </MetaItem>
              <MetaItem>
                <MetaLabel>Company</MetaLabel>
                <MetaValue>Feilen Solutions IT</MetaValue>
              </MetaItem>
            </MetaRow>
          </InfoBlock>
        </Card>
      </Container>
    </Section>
  );
};
