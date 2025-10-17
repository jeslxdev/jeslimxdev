import { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const gradientMove = keyframes`
  0% {
    background-position: 0% 50%;
    background-size: 50px 50px;
  }
  25% {
    background-position: 100% 0%;
    background-size: 45px 45px;
  }
  50% {
    background-position: 100% 50%;
    background-size: 55px 55px;
  }
  75% {
    background-position: 0% 100%;
    background-size: 45px 45px;
  }
  100% {
    background-position: 0% 50%;
    background-size: 50px 50px;
  }
`;

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;

  /* Background moderno com gradiente sutil */
  background: linear-gradient(
    135deg,
    rgba(15, 23, 42, 1) 0%,
    rgba(30, 41, 59, 1) 25%,
    rgba(51, 65, 85, 1) 50%,
    rgba(30, 41, 59, 1) 75%,
    rgba(15, 23, 42, 1) 100%
  );

  /* Grid overlay com cor mais elegante */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
      linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: ${gradientMove} 30s ease infinite;
    opacity: 0.8;
  }
`;

const Canvas = styled.canvas`
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  filter: contrast(1.2) brightness(1.1);
`;

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const animate = () => {
      // Canvas transparente - deixa apenas o CSS background fazer o trabalho
      ctx.clearRect(0, 0, canvas.width, canvas.height);

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
