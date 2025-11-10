import { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
    background-size: 60px 60px;
  }
  25% {
    background-position: 100% 0%;
    background-size: 50px 50px;
  }
  50% {
    background-position: 100% 50%;
    background-size: 70px 70px;
  }
  75% {
    background-position: 0% 100%;
    background-size: 50px 50px;
  }
  100% {
    background-position: 0% 50%;
    background-size: 60px 60px;
  }
`;

const floatingOrbs = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(120deg); }
  66% { transform: translateY(10px) rotate(240deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
`;

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;

  /* Modern dark gradient background */
  background: linear-gradient(
    135deg,
    #000000 0%,
    #000608 15%,
    #010d0f 35%,
    #011317 55%,
    #01191e 75%,
    #000608 100%
  );

  /* Animated grid overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
      linear-gradient(rgba(63, 63, 63, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(63, 63, 63, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    animation: ${gradientShift} 40s ease infinite;
    opacity: 0.7;
  }

  /* Floating gradient orbs */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
      radial-gradient(circle at 20% 20%, rgba(31, 31, 31, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(47, 47, 47, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 40% 70%, rgba(62, 62, 62, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 70% 30%, rgba(74, 85, 104, 0.08) 0%, transparent 50%);
    animation: ${floatingOrbs} 30s ease infinite;
  }
`;

const ParticleLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
`;

const Particle = styled.div<{ $top: number; $left: number; $size: number; $duration: number; $delay: number }>`
  position: absolute;
  top: ${props => props.$top}%;
  left: ${props => props.$left}%;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: rgba(74, 85, 104, 0.2);
  border-radius: 50%;
  animation:
    ${pulse} ${props => props.$duration}s ease infinite ${props => props.$delay}s,
    ${floatingOrbs} ${props => props.$duration * 2}s ease infinite ${props => props.$delay}s;
  filter: blur(1px);
`;

const Canvas = styled.canvas`
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  mix-blend-mode: screen;
`;

interface ParticleProps {
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Generate random particles
  const particles: ParticleProps[] = Array.from({ length: 20 }, () => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 5,
    delay: Math.random() * 5
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const drawConnections = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw subtle animated lines
      for (let i = 0; i < 3; i++) {
        const angle = (time * 0.001) + (i * Math.PI * 2 / 3);
        const radius = 200 + Math.sin(time * 0.002 + i) * 50;

        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 100);
        gradient.addColorStop(0, `rgba(74, 85, 104, ${0.1 + Math.sin(time * 0.003) * 0.05})`);
        gradient.addColorStop(1, 'rgba(74, 85, 104, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(x - 50, y - 50, 100, 100);
      }
    };

    const animate = () => {
      time += 1;
      drawConnections();
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
      <ParticleLayer>
        {particles.map((particle, index) => (
          <Particle
            key={index}
            $top={particle.top}
            $left={particle.left}
            $size={particle.size}
            $duration={particle.duration}
            $delay={particle.delay}
          />
        ))}
      </ParticleLayer>
      <Canvas ref={canvasRef} />
    </CanvasContainer>
  );
};

export default AnimatedBackground;
