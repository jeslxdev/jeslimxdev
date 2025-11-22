import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Ajustar tamanho do canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Caracteres do efeito Matrix + símbolos de terminal
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~`$>:█▓▒░';
    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    // Adicionar linhas de código estáticas no fundo
    const drawStaticCode = () => {
      ctx.fillStyle = 'rgba(103, 228, 128, 0.05)';
      ctx.font = `${fontSize - 2}px 'Fira Code', monospace`;

      const codeLines = [
        '  sudo apt-get update && apt-get upgrade',
        '  nmap -sS -p- 192.168.1.1',
        '  netstat -tulpn | grep LISTEN  ',
        '  ps aux | grep root',
        '  chmod 755 /usr/local/bin/*',
        '  tail -f /var/log/syslog',
        '  ifconfig eth0 | grep inet',
        '  cat /etc/passwd | cut -d: -f1'
      ];

      for (let i = 0; i < 15; i++) {
        const line = codeLines[Math.floor(Math.random() * codeLines.length)];
        const y = (i * 40) + 20;
        ctx.fillText(line, 20, y);
      }
    };

    // Função de desenho
    const draw = () => {
      // Efeito de fade
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Redesenhar código estático periodicamente
      if (Math.random() > 0.98) {
        drawStaticCode();
      }

      ctx.font = `${fontSize}px 'Fira Code', monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Caractere aleatório
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Verde Kali Linux
        ctx.fillStyle = '#67e480';
        ctx.fillText(char, x, y);

        // Reset aleatório
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    // Animação
    drawStaticCode();
    const interval = setInterval(draw, 40);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <Canvas ref={canvasRef} />;
};

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.3;
  pointer-events: none;
`;

export default MatrixBackground;
