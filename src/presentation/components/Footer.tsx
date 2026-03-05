import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const FooterEl = styled.footer`
  background: ${props => props.theme.colors.background};
  border-top: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing['3xl']} ${props => props.theme.spacing.xl} ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing['2xl']} ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: ${props => props.theme.spacing['2xl']};
  margin-bottom: ${props => props.theme.spacing['2xl']};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Col = styled.div``;

const Brand = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
`;

const BrandName = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.text};
  letter-spacing: -0.02em;

  span { color: ${props => props.theme.colors.textMuted}; }
`;

const BrandTagline = styled.p`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 4px;
`;

const FooterDesc = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textMuted};
  line-height: 1.7;
  margin-bottom: ${props => props.theme.spacing.lg};
  max-width: 360px;
`;

const SocialRow = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
`;

const SocialIcon = styled.a`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.textMuted};
  font-size: ${props => props.theme.fontSizes.base};
  transition: all 0.2s;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.backgroundCard};
  }
`;

const ColTitle = styled.div`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: ${props => props.theme.spacing.lg};
  padding-bottom: ${props => props.theme.spacing.sm};
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;

const FooterLink = styled.a`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textMuted};
  cursor: pointer;
  transition: color 0.2s;
  text-decoration: none;

  &:hover { color: ${props => props.theme.colors.text}; }
`;

const Divider = styled.div`
  height: 1px;
  background: ${props => props.theme.colors.border};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${props => props.theme.spacing.sm};
    text-align: center;
  }
`;

const Copy = styled.p`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: 0.05em;
`;

const StatusDot = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: 0.08em;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background: #6b7280;
    border-radius: 50%;
    display: inline-block;
  }
`;

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <FooterEl>
      <Container>
        <Top>
          <Col>
            <Brand>
              <BrandName>FLN<span>.</span></BrandName>
              <BrandTagline>Solutions IT</BrandTagline>
            </Brand>
            <FooterDesc>
              Software delivery and IT outsourcing. Scalable, secure, and production-ready systems — engineered by senior professionals.
            </FooterDesc>
            <SocialRow>
              <SocialIcon href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon href="https://github.com" target="_blank" aria-label="GitHub">
                <FaGithub />
              </SocialIcon>
              <SocialIcon href="mailto:contact@feilen.tech" aria-label="Email">
                <FaEnvelope />
              </SocialIcon>
            </SocialRow>
          </Col>

          <Col>
            <ColTitle>Navigate</ColTitle>
            <Links>
              <FooterLink onClick={() => go('home')}>{t('nav.home')}</FooterLink>
              <FooterLink onClick={() => go('services')}>{t('nav.services')}</FooterLink>
              <FooterLink onClick={() => go('about')}>{t('nav.about')}</FooterLink>
              <FooterLink onClick={() => go('pricing')}>{t('nav.pricing')}</FooterLink>
              <FooterLink onClick={() => go('contact')}>{t('nav.contact')}</FooterLink>
            </Links>
          </Col>

          <Col>
            <ColTitle>Contact</ColTitle>
            <Links>
              <FooterLink href="mailto:contact@feilen.tech">
                contact@feilen.tech
              </FooterLink>
            </Links>
          </Col>
        </Top>

        <Divider />

        <Bottom>
          <Copy>© {year} Feilen Solutions IT. All rights reserved. &nbsp;·&nbsp; CNPJ 64.634.091/0001-08</Copy>
          <StatusDot>All systems operational</StatusDot>
        </Bottom>
      </Container>
    </FooterEl>
  );
};
