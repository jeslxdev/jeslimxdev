import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(135deg, #1B3D50 0%, #3d3a3a 50%, #1B3D50 100%);
  pointer-events: none;
`;

const Canvas = styled.canvas`
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.7;
`;

interface CodeRain {
  x: number;
  y: number;
  speed: number;
  text: string;
  opacity: number;
  color: string;
  size: number;
  changeInterval: number;
  lastChange: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const codeRains: CodeRain[] = [];
    let frameCount = 0;
    
    // Cores mais neutras e simbólicas - tons de cinza azulado
    const colors = [
      'rgba(120, 140, 160, ',   // Cinza azulado claro
      'rgba(100, 120, 140, ',   // Cinza azulado médio
      'rgba(80, 100, 120, ',    // Cinza azulado escuro
      'rgba(140, 150, 160, ',   // Cinza claro
      'rgba(90, 110, 130, ',    // Azul acinzentado
    ];

    // Tokens semânticos de PHP/Programação
    const phpTokens = [
      ';', ':', '<?php', '?>', '$', '->', '::', '=>', 'echo', 'return', 'function', 'class', 'if', 'else', 'foreach', 'try', 'catch', 'new', 'public', 'private', 'protected', 'static'
    ];

    const pickPhpToken = () => phpTokens[Math.floor(Math.random() * phpTokens.length)];

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Criar tokens subindo
    for (let i = 0; i < 80; i++) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      codeRains.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 1.5 + 0.5,
        text: pickPhpToken(),
        opacity: Math.random() * 0.6 + 0.4,
        color: randomColor,
        size: Math.random() * 6 + 14,
        changeInterval: Math.floor(Math.random() * 10) + 5, // Muda a cada 5-15 frames
        lastChange: 0,
      });
    }

    const animate = () => {
      frameCount++;
      
      // Clear com fade mais escuro para efeito sutil
      ctx.fillStyle = 'rgba(1, 4, 9, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      codeRains.forEach((rain) => {
        // Mudar número aleatoriamente baseado no intervalo
        if (frameCount - rain.lastChange >= rain.changeInterval) {
          rain.text = pickPhpToken();
          rain.lastChange = frameCount;
        }

        // Mover para cima
        rain.y -= rain.speed;

        // Reset quando sair da tela
        if (rain.y < -30) {
          rain.y = canvas.height + 30;
          rain.x = Math.random() * canvas.width;
          rain.color = colors[Math.floor(Math.random() * colors.length)];
          rain.text = pickPhpToken();
        }

        // Desenhar código com glow sutil
        ctx.font = `bold ${rain.size}px "Courier New", monospace`;
        
        // Glow externo suave
        ctx.shadowBlur = 15;
        ctx.shadowColor = rain.color + '0.5)';
        ctx.fillStyle = rain.color + rain.opacity + ')';
        ctx.fillText(rain.text, rain.x, rain.y);
        
        // Glow interno
        ctx.shadowBlur = 8;
        ctx.shadowColor = rain.color + '0.8)';
        ctx.fillStyle = rain.color + Math.min(rain.opacity + 0.2, 1) + ')';
        ctx.fillText(rain.text, rain.x, rain.y);
        
        ctx.shadowBlur = 0;

        // Desenhar pontos brilhantes menores e sutis
        const pointOffset = rain.text.length * 8;
        ctx.beginPath();
        ctx.arc(rain.x + pointOffset, rain.y - 10, 2, 0, Math.PI * 2);
        ctx.fillStyle = rain.color + Math.min(rain.opacity + 0.3, 1) + ')';
        ctx.shadowBlur = 10;
        ctx.shadowColor = rain.color + '0.6)';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Linhas verticais ocasionais mais sutis
        if (Math.random() < 0.01) {
          ctx.beginPath();
          ctx.moveTo(rain.x, rain.y);
          ctx.lineTo(rain.x, rain.y - 30);
          ctx.strokeStyle = rain.color + '0.2)';
          ctx.lineWidth = 1;
          ctx.shadowBlur = 5;
          ctx.shadowColor = rain.color + '0.4)';
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <CanvasContainer>
      <Canvas ref={canvasRef} />
    </CanvasContainer>
  );
};

export default AnimatedBackground;
