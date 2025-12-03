import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: linear-gradient(180deg, ${props => props.theme.colors.backgroundLight}, ${props => props.theme.colors.background});
  border-top: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing['3xl']} ${props => props.theme.spacing.xl} ${props => props.theme.spacing.xl};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary}, transparent);
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing['2xl']} ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: ${props => props.theme.spacing['2xl']};
  margin-bottom: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.xl};
    text-align: center;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

const FooterTitle = styled.h4`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.semibold};
  margin-bottom: ${props => props.theme.spacing.sm};
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.textMuted};
  font-size: ${props => props.theme.fontSizes.xl};
  transition: all ${props => props.theme.transitions.base};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.borderRadius.lg};
  background: ${props => props.theme.colors.backgroundCard};
  border: 1px solid ${props => props.theme.colors.border};

  &:hover {
    color: ${props => props.theme.colors.text};
    background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
    border-color: transparent;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(99, 102, 241, 0.3);
  }
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, ${props => props.theme.colors.border}, transparent);
  margin: ${props => props.theme.spacing.xl} 0;
`;

const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.lg};

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${props => props.theme.colors.textMuted};
  font-size: ${props => props.theme.fontSizes.sm};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};

  svg {
    color: ${props => props.theme.colors.error};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.lg};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    align-items: center;
  }
`;

const FooterLink = styled.a`
  color: ${props => props.theme.colors.textMuted};
  font-size: ${props => props.theme.fontSizes.sm};
  transition: all ${props => props.theme.transitions.base};
  position: relative;
  padding: ${props => props.theme.spacing.xs} 0;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: ${props => props.theme.colors.primary};
    transition: width ${props => props.theme.transitions.base};
  }

  &:hover {
    color: ${props => props.theme.colors.primary};

    &::after {
      width: 100%;
    }
  }
`;

const FooterText = styled.p`
  color: ${props => props.theme.colors.textMuted};
  font-size: ${props => props.theme.fontSizes.sm};
  line-height: 1.6;
  max-width: 400px;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FooterContainer>
      <Container>
        <Content>
          <Column>
            <FooterTitle>{'<JE />'}</FooterTitle>
            <FooterText>
              Desenvolvedor Fullstack especializado em criar soluções digitais inovadoras.
              Transformando ideias em realidade desde 2018.
            </FooterText>
            <SocialLinks>
              <SocialLink
                href="https://github.com/jeslxdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/joao-emanuel-752778174/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialLink>
            </SocialLinks>
          </Column>

          <Column>
            <FooterTitle>Navegação</FooterTitle>
            <Links>
              <FooterLink onClick={() => scrollToSection('home')}>
                {t('nav.home')}
              </FooterLink>
              <FooterLink onClick={() => scrollToSection('services')}>
                {t('nav.services')}
              </FooterLink>
              <FooterLink onClick={() => scrollToSection('projects')}>
                {t('nav.projects')}
              </FooterLink>
              <FooterLink onClick={() => scrollToSection('about')}>
                {t('nav.about')}
              </FooterLink>
            </Links>
          </Column>

          <Column>
            <FooterTitle>Contato</FooterTitle>
            <Links>
              <FooterLink href="mailto:contato@jeslimx.tech">
                contato@jeslimx.tech
              </FooterLink>
              <FooterLink onClick={() => scrollToSection('contact')}>
                {t('nav.contact')}
              </FooterLink>
            </Links>
          </Column>
        </Content>

        <Divider />

        <BottomContent>
          <Copyright>
            © {currentYear} João Emanuel. {t('footer.madeWith')} PHP
          </Copyright>
        </BottomContent>
      </Container>
    </FooterContainer>
  );
};
