import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import type { SectionType } from '@/models/Section';

interface TerminalProps {
  onNavigate: (section: SectionType, subSection?: string) => void;
  currentSection: SectionType;
  subSection?: string;
}

interface CommandHistory {
  input: string;
  output: string[];
  type: 'success' | 'error' | 'info';
}

const Terminal = ({ onNavigate, currentSection, subSection }: TerminalProps) => {
  const { t } = useTranslation();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isRebooting, setIsRebooting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [showCursor, setShowCursor] = useState(true);

  // Função para obter conteúdo da seção
  const getSectionContent = (section: SectionType, sub?: string): string[] => {
    if (section === 'home') return [];

    if (section === 'company' && sub === 'sobre') {
      return [
        '',
        '╔══════════════════════════════════════╗',
        '║  INFORMAÇÕES DO SISTEMA              ║',
        '╚══════════════════════════════════════╝',
        '',
        'USER: João Emanuel Silva Lima',
        'ROLE: Software Developer',
        'SPECIALIZATION: InfoSec | DevOps | Cybersecurity',
        '',
        '## DESCRIÇÃO',
        t('aboutText'),
        '',
        '## HABILIDADES PRINCIPAIS',
        '[████████████████████] ' + t('skills.architecture'),
        '[█████████████████░░░] ' + t('skills.security'),
        '[██████████████████░░] ' + t('skills.devops'),
        '[████████████████████] ' + t('skills.development'),
        '[█████████████████░░░] ' + t('skills.cloud'),
        '[██████████████░░░░░░] ' + t('skills.leadership'),
        ''
      ];
    }

    if (section === 'projects') {
      return [
        '',
        '╔══════════════════════════════════════╗',
        '║  PROJETOS REALIZADOS                 ║',
        '╚══════════════════════════════════════╝',
        '',
        '[PROJECT_01] UNICRED - CRM Platform',
        '├── Descrição: ' + t('projects.project1.description'),
        '├── Stack: PHP/Hyperf, NestJS, Kafka',
        '└── Status: COMPLETED',
        '',
        '[PROJECT_02] Facta Financeira - Modernização',
        '├── Descrição: ' + t('projects.project2.description'),
        '├── Stack: APIs RESTful, Dock Integration',
        '└── Status: COMPLETED',
        '',
        '[PROJECT_03] Zallpy - Microservices Ecosystem',
        '├── Descrição: ' + t('projects.project3.description'),
        '├── Stack: PHP, NestJS, Python, Docker, Kafka',
        '└── Status: COMPLETED',
        ''
      ];
    }

    if (section === 'company') {
      return [
        '',
        '╔══════════════════════════════════════╗',
        '║  EXPERIÊNCIA PROFISSIONAL            ║',
        '╚══════════════════════════════════════╝',
        '',
        '$ cat platform_builders.txt',
        '> Platform Builders',
        '  └── ' + t('company.builders'),
        '',
        '$ cat extds.txt',
        '> EXTDS - International Projects',
        '  └── ' + t('company.extds'),
        '',
        '## TECNOLOGIAS UTILIZADAS',
        'Backend: PHP, NestJS, Python, Node.js',
        'DevOps: Docker, Kubernetes, CI/CD, Kafka',
        'Security: OWASP, Pentesting, Encryption',
        'Cloud: AWS, Azure, GCP',
        ''
      ];
    }

    if (section === 'contact') {
      return [
        '',
        '{',
        '  "title": "' + t('contact.title') + '",',
        '  "subtitle": "' + t('contact.subtitle') + '",',
        '  "channels": {',
        '    "linkedin": {',
        '      "url": "https://linkedin.com/in/jeslimx",',
        '      "description": "' + t('contact.linkedin') + '"',
        '    },',
        '    "github": {',
        '      "url": "https://github.com/jeslxdev",',
        '      "description": "' + t('contact.github') + '"',
        '    },',
        '    "email": {',
        '      "address": "contact@jeslimx.dev",',
        '      "description": "' + t('contact.email') + '"',
        '    }',
        '  }',
        '}',
        '',
        '// Execute: curl -X POST contact@jeslimx.dev',
        ''
      ];
    }

    return [];
  };

  // Cursor piscando
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Auto scroll para o final e manter foco
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
    inputRef.current?.focus();
  }, [history]);

  // Garantir foco ao digitar
  useEffect(() => {
    inputRef.current?.focus();
  }, [input]);

  // Mensagem inicial
  useEffect(() => {
    const welcomeMessages = [
      { input: '', output: ['Kali Linux Terminal v1.0.0', ''], type: 'info' as const },
      {
        input: '',
        output: [
          'Digite "help" para ver os comandos disponíveis',
          'Digite "cd <diretório>" para navegar entre seções',
          ''
        ],
        type: 'info' as const
      }
    ];
    setHistory(welcomeMessages);
  }, []);

  const executeCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const parts = trimmedCmd.split(' ');
    const command = parts[0];
    const args = parts.slice(1);

    setIsTyping(true);

    // Simular delay de processamento
    await new Promise(resolve => setTimeout(resolve, 300));

    let output: string[] = [];
    let type: 'success' | 'error' | 'info' = 'info';

    switch (command) {
      case 'help':
        output = [
          'Comandos disponíveis:',
          '  cd <dir>      - Navegar para um diretório (sobre, projetos, experiencias, contato, home)',
          '  ls            - Listar diretórios disponíveis',
          '  pwd           - Mostrar diretório atual',
          '  clear         - Limpar terminal',
          '  whoami        - Mostrar informações do usuário',
          '  neofetch      - Informações do sistema',
          '  help          - Mostrar esta mensagem',
          '',
          '⚠️  AVISO: Não tente usar sudo rm -rf / ... você foi avisado!',
          ''
        ];
        type = 'info';
        break;

      case 'ls':
        output = [
          'home/',
          'sobre/',
          'projetos/',
          'experiencias/',
          'contato/',
          ''
        ];
        type = 'success';
        break;

      case 'pwd':
        output = [`/home/jeslimx/${currentSection}`, ''];
        type = 'info';
        break;

      case 'cd':
        if (args.length === 0) {
          onNavigate('home');
          output = ['Navegando para /home/jeslimx/home', ''];
          type = 'success';
        } else {
          const dir = args[0];
          const validDirs: Record<string, { section: SectionType; subSection?: string }> = {
            'home': { section: 'home' },
            'sobre': { section: 'company', subSection: 'sobre' },
            'projetos': { section: 'projects' },
            'experiencias': { section: 'company', subSection: 'experiencias' },
            'contato': { section: 'contact' },
            '..': { section: 'home' },
            '~': { section: 'home' }
          };

          if (validDirs[dir]) {
            const targetSection = validDirs[dir];
            onNavigate(targetSection.section, targetSection.subSection);

            // Obter conteúdo da seção
            const content = getSectionContent(targetSection.section, targetSection.subSection);

            output = [
              `jeslimx@kali:~/${dir}$`,
              ...content
            ];
            type = 'success';
          } else {
            output = [`bash: cd: ${dir}: Diretório não encontrado`, ''];
            type = 'error';
          }
        }
        break;

      case 'clear':
        setHistory([]);
        setIsTyping(false);
        return;

      case 'sudo':
        if (args.join(' ') === 'rm -rf /' || args.join(' ') === 'rm -rf /*') {
          output = [
            '[sudo] password for jeslimx: ',
            'rm: it is dangerous to operate recursively on \'/\'',
            'rm: use --no-preserve-root to override this failsafe',
            '',
            '⚠️  CRITICAL ERROR: Attempting to remove system files',
            'Kernel panic - not syncing: VFS: Unable to mount root fs',
            ''
          ];
          type = 'error';
          setHistory(prev => [...prev, { input: cmd, output, type }]);
          setIsTyping(false);

          setTimeout(() => {
            setIsRebooting(true);
            setTimeout(() => {
              window.location.reload();
            }, 4000);
          }, 1500);
          return;
        } else if (args[0] === 'reboot' || args[0] === 'shutdown') {
          output = ['[sudo] password for jeslimx: ', 'Reiniciando sistema...', ''];
          type = 'info';
          setHistory(prev => [...prev, { input: cmd, output, type }]);
          setIsTyping(false);

          setTimeout(() => {
            setIsRebooting(true);
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          }, 1000);
          return;
        } else {
          output = [`sudo: ${args.join(' ')}: command not found`, ''];
          type = 'error';
        }
        break;

      case 'reboot':
      case 'shutdown':
      case 'init':
        if (command === 'init' && args[0] === '6') {
          output = ['Sistema reiniciando...', ''];
        } else if (command === 'shutdown' && args[0] === '-r') {
          output = ['Sistema reiniciando...', ''];
        } else if (command === 'reboot') {
          output = ['Sistema reiniciando...', ''];
        } else {
          output = [`${command}: Permission denied. Try 'sudo ${command}'`, ''];
          type = 'error';
          break;
        }

        type = 'info';
        setHistory(prev => [...prev, { input: cmd, output, type }]);
        setIsTyping(false);

        setTimeout(() => {
          setIsRebooting(true);
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }, 500);
        return;

      case 'whoami':
        output = [
          'João Emanuel Silva Lima',
          'Desenvolvedor de Software | InfoSec | DevOps | Cibersegurança',
          ''
        ];
        type = 'success';
        break;

      case 'neofetch':
        output = [
          '        ,.=:^!^!t3Z3z.,                  jeslimx@portfolio',
          '       :tt:::tt333EE3                    -----------------',
          '       Et:::ztt33EEE @Ee.,      ..,      OS: Kali Linux',
          '      ;tt:::tt333EE7 ;EEEEEEttttt33#     Host: GitHub Pages',
          '     :Et:::zt333EEQ. SEEEEEttttt33QL     Kernel: TypeScript',
          '     it::::tt333EEF @EEEEEEttttt33F      Uptime: ' + new Date().toLocaleDateString(),
          '    ;3=*^```"*4EEV :EEEEEEttttt33@.      Shell: bash',
          '    ,.=::::it=., ` @EEEEEEtttz33QF       Terminal: WebTerminal',
          '   ;::::::::zt33)   "4EEEtttji3P*        CPU: Node.js',
          '  :t::::::::tt33.:Z3z..  `` ,..g.        Memory: React 18',
          '  i::::::::zt33F AEEEtttt::::ztF         ',
          ' ;:::::::::t33V ;EEEttttt::::t3          ',
          ' E::::::::zt33L @EEEtttt::::z3F          ',
          '{3=*^```"*4E3) ;EEEtttt:::::tZ`          ',
          '             ` :EEEEtttt::::z7            ',
          '                 "VEzjt:;;z>*`            ',
          ''
        ];
        type = 'success';
        break;

      case '':
        output = [''];
        break;

      default:
        output = [`bash: ${command}: comando não encontrado. Digite "help" para ver os comandos disponíveis.`, ''];
        type = 'error';
        break;
    }

    setHistory(prev => [...prev, { input: cmd, output, type }]);
    setIsTyping(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput('');
    }
    // Manter foco no input após executar comando
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Implementar histórico de comandos com setas
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      // TODO: Navegar pelo histórico
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      // TODO: Navegar pelo histórico
    }
  };

  const getCurrentPath = () => {
    const paths: Record<SectionType, string> = {
      home: '~',
      projects: '~/projetos',
      company: '~/sobre',
      contact: '~/contato'
    };
    return paths[currentSection] || '~';
  };

  return (
    <>
      {isRebooting && <RebootScreen />}
      <TerminalContainer
        onClick={(e) => {
          e.preventDefault();
          inputRef.current?.focus();
        }}
        isMinimized={isMinimized}
        isMaximized={isMaximized}
      >
        <TerminalHeader>
          <HeaderButtons>
            <HeaderButton
              color="#ff5f56"
              onClick={(e) => {
                e.stopPropagation();
                window.location.reload();
              }}
              title="Fechar"
            />
            <HeaderButton
              color="#ffbd2e"
              onClick={(e) => {
                e.stopPropagation();
                setIsMinimized(!isMinimized);
              }}
              title="Minimizar"
            />
            <HeaderButton
              color="#27c93f"
              onClick={(e) => {
                e.stopPropagation();
                setIsMaximized(!isMaximized);
              }}
              title="Maximizar"
            />
          </HeaderButtons>
          <HeaderTitle>jeslimx@kali: {getCurrentPath()}</HeaderTitle>
        </TerminalHeader>

        <TerminalBody ref={terminalRef} isMinimized={isMinimized}>
        {history.map((item, index) => (
          <div key={index}>
            {item.input && (
              <CommandLine>
                <Prompt>
                  <User>jeslimx@kali</User>
                  <Separator>:</Separator>
                  <Path>{getCurrentPath()}</Path>
                  <Dollar>$</Dollar>
                </Prompt>
                <Command>{item.input}</Command>
              </CommandLine>
            )}
            {item.output.map((line, i) => {
              // Determinar cor baseada no conteúdo da linha
              let lineColor: 'success' | 'error' | 'info' = item.type;
              if (line.includes('╔') || line.includes('║') || line.includes('╚') || line.startsWith('##')) {
                lineColor = 'info'; // Headers em amarelo/cinza
              } else if (line.startsWith('[PROJECT_') || line.startsWith('[████') || line.startsWith('>') || line.includes('jeslimx@kali')) {
                lineColor = 'success'; // Verde
              }

              return (
                <OutputLine key={i} type={lineColor}>
                  {line}
                </OutputLine>
              );
            })}
          </div>
        ))}

        <form onSubmit={handleSubmit}>
          <CommandLine>
            <Prompt>
              <User>jeslimx@kali</User>
              <Separator>:</Separator>
              <Path>{getCurrentPath()}</Path>
              <Dollar>$</Dollar>
            </Prompt>
            <InputWrapper>
              <InputDisplay>{input}</InputDisplay>
              <Input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={(e) => {
                  e.preventDefault();
                  inputRef.current?.focus();
                }}
                disabled={isTyping}
                autoFocus
                spellCheck={false}
                autoComplete="off"
              />
              <Cursor visible={showCursor && !isTyping}>█</Cursor>
            </InputWrapper>
          </CommandLine>
        </form>

        {isTyping && (
          <TypingIndicator>
            <span>Processing</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </TypingIndicator>
        )}
      </TerminalBody>
    </TerminalContainer>
    </>
  );
};

const TerminalContainer = styled.div<{ isMinimized: boolean; isMaximized: boolean }>`
  width: ${props => props.isMaximized ? '95%' : '90%'};
  max-width: ${props => props.isMaximized ? 'none' : '900px'};
  height: ${props => props.isMaximized ? '90vh' : (props.isMinimized ? '42px' : '70vh')};
  max-height: ${props => props.isMaximized ? 'none' : '600px'};
  margin: 0 auto;
  background: rgba(13, 17, 23, 0.75);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  font-family: 'Fira Code', 'Courier New', monospace;
  cursor: text;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(40, 40, 40, 0.8);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 95%;
    height: 80vh;
    max-height: none;
  }
`;

const TerminalHeader = styled.div`
  background: linear-gradient(to bottom, #2a2a2a, #1a1a1a);
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid rgba(60, 60, 60, 0.8);
  user-select: none;
`;

const HeaderButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const HeaderButton = styled.button<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color};
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const HeaderTitle = styled.div`
  color: #67e480;
  font-size: 13px;
  font-weight: 500;
  flex: 1;
  text-align: center;
`;

const TerminalBody = styled.div<{ isMinimized: boolean }>`
  padding: 20px;
  height: calc(100% - 42px);
  overflow-y: auto;
  color: #67e480;
  font-size: 14px;
  line-height: 1.6;
  display: ${props => props.isMinimized ? 'none' : 'block'};

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

const CommandLine = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 4px 0;
`;

const Prompt = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  flex-shrink: 0;
`;

const User = styled.span`
  color: #67e480;
  font-weight: 600;
`;

const Separator = styled.span`
  color: #fff;
`;

const Path = styled.span`
  color: #5e7ce0;
`;

const Dollar = styled.span`
  color: #fff;
  margin-left: 2px;
`;

const Command = styled.span`
  color: #fff;
`;

const InputWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
`;

const InputDisplay = styled.span`
  color: #fff;
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 14px;
  white-space: pre;
  pointer-events: none;
`;

const Input = styled.input`
  position: absolute;
  left: 0;
  background: transparent;
  border: none;
  outline: none;
  color: transparent;
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 14px;
  width: 100%;
  caret-color: transparent;

  &:disabled {
    opacity: 0.5;
  }
`;

const Cursor = styled.span<{ visible: boolean }>`
  color: #67e480;
  opacity: ${props => props.visible ? 1 : 0};
  animation: blink 1.06s infinite;
  margin-left: 0;
  pointer-events: none;

  @keyframes blink {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }
`;

const OutputLine = styled.div<{ type: 'success' | 'error' | 'info' }>`
  color: ${props => {
    switch (props.type) {
      case 'error': return '#ef4444';
      case 'success': return '#67e480';
      default: return '#a0a0a0';
    }
  }};
  margin-left: 8px;
  white-space: pre-wrap;
  word-break: break-word;
`;

const TypingIndicator = styled.div`
  color: #67e480;
  margin-left: 8px;
  margin-top: 8px;

  .dot {
    animation: typing 1.4s infinite;

    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.4s; }
    &:nth-child(4) { animation-delay: 0.6s; }
  }

  @keyframes typing {
    0%, 60%, 100% { opacity: 0.3; }
    30% { opacity: 1; }
  }
`;

const RebootScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  text-align: left;
  padding: 20px;
  overflow: hidden;

  &::before {
    content: '[ 0.000000] Kernel panic - not syncing: VFS: Unable to mount root fs on unknown-block(0,0)\\A[ 0.000000] CPU: 0 PID: 1 Comm: swapper/0 Not tainted 5.10.0-kali #1\\A[ 0.000000] Hardware name: Generic x86_64\\A[ 0.000000] Call Trace:\\A[ 0.000000]  dump_stack+0x6d/0x88\\A[ 0.000000]  panic+0x101/0x2e3\\A[ 0.000000]  mount_block_root+0x2a1/0x2b0\\A[ 0.000000]  prepare_namespace+0x13f/0x170\\A[ 0.000000]  kernel_init_freeable+0x22a/0x271\\A[ 0.000000]  ? rest_init+0xb0/0xb0\\A[ 0.000000]  kernel_init+0xa/0x110\\A[ 0.000000]  ret_from_fork+0x22/0x30\\A[ 0.000000] Kernel Offset: disabled\\A[ 0.000000] ---[ end Kernel panic - not syncing: VFS: Unable to mount root fs on unknown-block(0,0) ]---';
    white-space: pre-wrap;
    word-wrap: break-word;
    font-size: 13px;
    line-height: 1.4;
    color: #fff;
    max-width: 100%;
  }
`;export default Terminal;
