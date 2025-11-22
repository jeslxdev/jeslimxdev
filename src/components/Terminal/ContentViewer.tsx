import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import type { SectionType } from '@/models/Section';

interface ContentViewerProps {
  section: SectionType;
  subSection?: string;
}

const ContentViewer = ({ section, subSection }: ContentViewerProps) => {
  const { t } = useTranslation();

  const renderContent = () => {
    switch (section) {
      case 'home':
        return (
          <ContentWindow>
            <WindowHeader>
              <WindowTitle>README.md - /home/jeslimx</WindowTitle>
            </WindowHeader>
            <WindowContent>
              <AsciiArt>{`
    ╔═══════════════════════════════════════════════════════════╗
    ║                                                           ║
    ║     ██╗███████╗███████╗██╗     ██╗███╗   ███╗██╗  ██╗   ║
    ║     ██║██╔════╝██╔════╝██║     ██║████╗ ████║╚██╗██╔╝   ║
    ║     ██║█████╗  ███████╗██║     ██║██╔████╔██║ ╚███╔╝    ║
    ║██   ██║██╔══╝  ╚════██║██║     ██║██║╚██╔╝██║ ██╔██╗    ║
    ║╚█████╔╝███████╗███████║███████╗██║██║ ╚═╝ ██║██╔╝ ██╗   ║
    ║ ╚════╝ ╚══════╝╚══════╝╚══════╝╚═╝╚═╝     ╚═╝╚═╝  ╚═╝   ║
    ║                                                           ║
    ╚═══════════════════════════════════════════════════════════╝
              `}</AsciiArt>
              <CodeBlock>
                <CodeLine><GreenText>#</GreenText> {t('title')}</CodeLine>
                <CodeLine><GreenText>{'>'}</GreenText> {t('subtitle')}</CodeLine>
                <CodeLine></CodeLine>
                <CodeLine><YellowText>## Navegação</YellowText></CodeLine>
                <CodeLine><CyanText>$</CyanText> cd sobre       <GrayText># Ver informações sobre mim</GrayText></CodeLine>
                <CodeLine><CyanText>$</CyanText> cd projetos    <GrayText># Explorar meus projetos</GrayText></CodeLine>
                <CodeLine><CyanText>$</CyanText> cd experiencias <GrayText># Histórico profissional</GrayText></CodeLine>
                <CodeLine><CyanText>$</CyanText> cd contato     <GrayText># Entrar em contato</GrayText></CodeLine>
                <CodeLine></CodeLine>
                <CodeLine><YellowText>## Status</YellowText></CodeLine>
                <CodeLine><GreenText>[✓]</GreenText> Sistema operacional: <CyanText>Online</CyanText></CodeLine>
                <CodeLine><GreenText>[✓]</GreenText> Desenvolvedor: <CyanText>Disponível</CyanText></CodeLine>
                <CodeLine><GreenText>[✓]</GreenText> Portfólio: <CyanText>Ativo</CyanText></CodeLine>
              </CodeBlock>
            </WindowContent>
          </ContentWindow>
        );

      case 'projects':
        return (
          <ContentWindow>
            <WindowHeader>
              <WindowTitle>README.md - /home/jeslimx</WindowTitle>
            </WindowHeader>
            <WindowContent>
              <AsciiArt>{`
    ╔═══════════════════════════════════════════════════════════╗
    ║                                                           ║
    ║     ██╗███████╗███████╗██╗     ██╗███╗   ███╗██╗  ██╗   ║
    ║     ██║██╔════╝██╔════╝██║     ██║████╗ ████║╚██╗██╔╝   ║
    ║     ██║█████╗  ███████╗██║     ██║██╔████╔██║ ╚███╔╝    ║
    ║██   ██║██╔══╝  ╚════██║██║     ██║██║╚██╔╝██║ ██╔██╗    ║
    ║╚█████╔╝███████╗███████║███████╗██║██║ ╚═╝ ██║██╔╝ ██╗   ║
    ║ ╚════╝ ╚══════╝╚══════╝╚══════╝╚═╝╚═╝     ╚═╝╚═╝  ╚═╝   ║
    ║                                                           ║
    ╚═══════════════════════════════════════════════════════════╝
              `}</AsciiArt>
              <CodeBlock>
                <CodeLine><GreenText>#</GreenText> {t('title')}</CodeLine>
                <CodeLine><GreenText>{'>'}</GreenText> {t('subtitle')}</CodeLine>
                <CodeLine></CodeLine>
                <CodeLine><YellowText>## Navegação</YellowText></CodeLine>
                <CodeLine><CyanText>$</CyanText> cd sobre       <GrayText># Ver informações sobre mim</GrayText></CodeLine>
                <CodeLine><CyanText>$</CyanText> cd projetos    <GrayText># Explorar meus projetos</GrayText></CodeLine>
                <CodeLine><CyanText>$</CyanText> cd experiencias <GrayText># Histórico profissional</GrayText></CodeLine>
                <CodeLine><CyanText>$</CyanText> cd contato     <GrayText># Entrar em contato</GrayText></CodeLine>
                <CodeLine></CodeLine>
                <CodeLine><YellowText>## Status</YellowText></CodeLine>
                <CodeLine><GreenText>[✓]</GreenText> Sistema operacional: <CyanText>Online</CyanText></CodeLine>
                <CodeLine><GreenText>[✓]</GreenText> Desenvolvedor: <CyanText>Disponível</CyanText></CodeLine>
                <CodeLine><GreenText>[✓]</GreenText> Portfólio: <CyanText>Ativo</CyanText></CodeLine>
              </CodeBlock>
            </WindowContent>
          </ContentWindow>
        );

      case 'projects':
        return (
          <ContentWindow>
            <WindowHeader>
              <WindowTitle>projects.log - /home/jeslimx/projetos</WindowTitle>
            </WindowHeader>
            <WindowContent>
              <CodeBlock>
                <CodeLine><YellowText>╔══════════════════════════════════════╗</YellowText></CodeLine>
                <CodeLine><YellowText>║</YellowText>  PROJETOS REALIZADOS             <YellowText>║</YellowText></CodeLine>
                <CodeLine><YellowText>╚══════════════════════════════════════╝</YellowText></CodeLine>
                <CodeLine></CodeLine>
                <CodeLine><GreenText>[PROJECT_01]</GreenText> <CyanText>UNICRED - CRM Platform</CyanText></CodeLine>
                <CodeLine><GrayText>├──</GrayText> Descrição: {t('projects.project1.description')}</CodeLine>
                <CodeLine><GrayText>├──</GrayText> Stack: PHP/Hyperf, NestJS, Kafka</CodeLine>
                <CodeLine><GrayText>└──</GrayText> Status: <GreenText>COMPLETED</GreenText></CodeLine>
                <CodeLine></CodeLine>
                <CodeLine><GreenText>[PROJECT_02]</GreenText> <CyanText>Facta Financeira - Modernização</CyanText></CodeLine>
                <CodeLine><GrayText>├──</GrayText> Descrição: {t('projects.project2.description')}</CodeLine>
                <CodeLine><GrayText>├──</GrayText> Stack: APIs RESTful, Dock Integration</CodeLine>
                <CodeLine><GrayText>└──</GrayText> Status: <GreenText>COMPLETED</GreenText></CodeLine>
                <CodeLine></CodeLine>
                <CodeLine><GreenText>[PROJECT_03]</GreenText> <CyanText>Zallpy - Microservices Ecosystem</CyanText></CodeLine>
                <CodeLine><GrayText>├──</GrayText> Descrição: {t('projects.project3.description')}</CodeLine>
                <CodeLine><GrayText>├──</GrayText> Stack: PHP, NestJS, Python, Docker, Kafka</CodeLine>
                <CodeLine><GrayText>└──</GrayText> Status: <GreenText>COMPLETED</GreenText></CodeLine>
              </CodeBlock>
            </WindowContent>
          </ContentWindow>
        );

      case 'company':
        // Se subSection for 'sobre', mostra informações pessoais, senão mostra experiência
        if (subSection === 'sobre') {
          return (
            <ContentWindow>
              <WindowHeader>
                <WindowTitle>about.txt - /home/jeslimx/sobre</WindowTitle>
              </WindowHeader>
              <WindowContent>
                <CodeBlock>
                  <CodeLine><YellowText>╔══════════════════════════════════════╗</YellowText></CodeLine>
                  <CodeLine><YellowText>║</YellowText>  INFORMAÇÕES DO SISTEMA         <YellowText>║</YellowText></CodeLine>
                  <CodeLine><YellowText>╚══════════════════════════════════════╝</YellowText></CodeLine>
                  <CodeLine></CodeLine>
                  <CodeLine><CyanText>USER:</CyanText> João Emanuel Silva Lima</CodeLine>
                  <CodeLine><CyanText>ROLE:</CyanText> Software Developer</CodeLine>
                  <CodeLine><CyanText>SPECIALIZATION:</CyanText> InfoSec | DevOps | Cybersecurity</CodeLine>
                  <CodeLine></CodeLine>
                  <CodeLine><YellowText>## DESCRIÇÃO</YellowText></CodeLine>
                  <CodeLine>{t('aboutText')}</CodeLine>
                  <CodeLine></CodeLine>
                  <CodeLine><YellowText>## HABILIDADES PRINCIPAIS</YellowText></CodeLine>
                  <CodeLine><GreenText>[████████████████████]</GreenText> {t('skills.architecture')}</CodeLine>
                  <CodeLine><GreenText>[█████████████████░░░]</GreenText> {t('skills.security')}</CodeLine>
                  <CodeLine><GreenText>[██████████████████░░]</GreenText> {t('skills.devops')}</CodeLine>
                  <CodeLine><GreenText>[████████████████████]</GreenText> {t('skills.development')}</CodeLine>
                  <CodeLine><GreenText>[█████████████████░░░]</GreenText> {t('skills.cloud')}</CodeLine>
                  <CodeLine><GreenText>[██████████████░░░░░░]</GreenText> {t('skills.leadership')}</CodeLine>
                </CodeBlock>
              </WindowContent>
            </ContentWindow>
          );
        } else {
          return (
            <ContentWindow>
              <WindowHeader>
                <WindowTitle>experience.sh - /home/jeslimx/experiencias</WindowTitle>
              </WindowHeader>
              <WindowContent>
                <CodeBlock>
                  <CodeLine><YellowText>╔══════════════════════════════════════╗</YellowText></CodeLine>
                  <CodeLine><YellowText>║</YellowText>  EXPERIÊNCIA PROFISSIONAL        <YellowText>║</YellowText></CodeLine>
                  <CodeLine><YellowText>╚══════════════════════════════════════╝</YellowText></CodeLine>
                  <CodeLine></CodeLine>
                  <CodeLine><CyanText>$ cat platform_builders.txt</CyanText></CodeLine>
                  <CodeLine><GreenText>{'>'}</GreenText> Platform Builders</CodeLine>
                  <CodeLine><GrayText>  └──</GrayText> {t('company.builders')}</CodeLine>
                  <CodeLine></CodeLine>
                  <CodeLine><CyanText>$ cat extds.txt</CyanText></CodeLine>
                  <CodeLine><GreenText>{'>'}</GreenText> EXTDS - International Projects</CodeLine>
                  <CodeLine><GrayText>  └──</GrayText> {t('company.extds')}</CodeLine>
                  <CodeLine></CodeLine>
                  <CodeLine><YellowText>## TECNOLOGIAS UTILIZADAS</YellowText></CodeLine>
                  <CodeLine><GrayText>Backend:</GrayText> PHP, NestJS, Python, Node.js</CodeLine>
                  <CodeLine><GrayText>DevOps:</GrayText> Docker, Kubernetes, CI/CD, Kafka</CodeLine>
                  <CodeLine><GrayText>Security:</GrayText> OWASP, Pentesting, Encryption</CodeLine>
                  <CodeLine><GrayText>Cloud:</GrayText> AWS, Azure, GCP</CodeLine>
                </CodeBlock>
              </WindowContent>
            </ContentWindow>
          );
        }

      case 'contact':
        return (
          <ContentWindow>
            <WindowHeader>
              <WindowTitle>contact.json - /home/jeslimx/contato</WindowTitle>
            </WindowHeader>
            <WindowContent>
              <CodeBlock>
                <CodeLine>{`{`}</CodeLine>
                <CodeLine>  <YellowText>"title"</YellowText>: <GreenText>"{t('contact.title')}"</GreenText>,</CodeLine>
                <CodeLine>  <YellowText>"subtitle"</YellowText>: <GreenText>"{t('contact.subtitle')}"</GreenText>,</CodeLine>
                <CodeLine>  <YellowText>"channels"</YellowText>: {`{`}</CodeLine>
                <CodeLine>    <YellowText>"linkedin"</YellowText>: {`{`}</CodeLine>
                <CodeLine>      <CyanText>"url"</CyanText>: <GreenText>"https://linkedin.com/in/jeslimx"</GreenText>,</CodeLine>
                <CodeLine>      <CyanText>"description"</CyanText>: <GreenText>"{t('contact.linkedin')}"</GreenText></CodeLine>
                <CodeLine>    {`}`},</CodeLine>
                <CodeLine>    <YellowText>"github"</YellowText>: {`{`}</CodeLine>
                <CodeLine>      <CyanText>"url"</CyanText>: <GreenText>"https://github.com/jeslxdev"</GreenText>,</CodeLine>
                <CodeLine>      <CyanText>"description"</CyanText>: <GreenText>"{t('contact.github')}"</GreenText></CodeLine>
                <CodeLine>    {`}`},</CodeLine>
                <CodeLine>    <YellowText>"email"</YellowText>: {`{`}</CodeLine>
                <CodeLine>      <CyanText>"address"</CyanText>: <GreenText>"contact@jeslimx.dev"</GreenText>,</CodeLine>
                <CodeLine>      <CyanText>"description"</CyanText>: <GreenText>"{t('contact.email')}"</GreenText></CodeLine>
                <CodeLine>    {`}`}</CodeLine>
                <CodeLine>  {`}`}</CodeLine>
                <CodeLine>{`}`}</CodeLine>
                <CodeLine></CodeLine>
                <CodeLine><GrayText>// Execute: curl -X POST contact@jeslimx.dev</GrayText></CodeLine>
              </CodeBlock>
            </WindowContent>
          </ContentWindow>
        );

      default:
        return null;
    }
  };

  return <Container>{renderContent()}</Container>;
};

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ContentWindow = styled.div`
  width: 90%;
  max-width: 900px;
  background: rgba(13, 17, 23, 0.75);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(40, 40, 40, 0.8);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const WindowHeader = styled.div`
  background: linear-gradient(to bottom, #1e293b, #0f172a);
  padding: 10px 15px;
  border-bottom: 1px solid rgba(56, 189, 248, 0.3);
`;

const WindowTitle = styled.div`
  color: #67e480;
  font-size: 13px;
  font-weight: 500;
  font-family: 'Fira Code', monospace;
`;

const WindowContent = styled.div`
  padding: 20px;
  max-height: 60vh;
  overflow-y: auto;
  font-family: 'Fira Code', 'Courier New', monospace;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #0a0a0a;
  }

  &::-webkit-scrollbar-thumb {
    background: #67e480;
    border-radius: 4px;
  }
`;

const AsciiArt = styled.pre`
  color: #67e480;
  font-size: 10px;
  line-height: 1.2;
  margin-bottom: 20px;
  overflow-x: auto;

  @media (max-width: 768px) {
    font-size: 6px;
  }
`;

const CodeBlock = styled.div`
  color: #a0a0a0;
  font-size: 14px;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const CodeLine = styled.div`
  margin: 4px 0;
  white-space: pre-wrap;
  word-break: break-word;
`;

const GreenText = styled.span`
  color: #67e480;
  font-weight: 600;
`;

const YellowText = styled.span`
  color: #f0ad4e;
  font-weight: 600;
`;

const CyanText = styled.span`
  color: #5bc0de;
  font-weight: 500;
`;

const GrayText = styled.span`
  color: #64748b;
`;

export default ContentViewer;
