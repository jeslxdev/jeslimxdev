import { createGlobalStyle } from 'styled-components';
import { fadeIn } from './animations';

const GlobalStyle = createGlobalStyle`
  :root {
    /* Safe area insets for notch devices */
    --safe-top: max(env(safe-area-inset-top, 0px), 0px);
    --safe-bottom: max(env(safe-area-inset-bottom, 0px), 0px);

    /* Footer sizing */
    --footer-height: 64px;
    --footer-safe-bottom: calc(var(--footer-height) + var(--safe-bottom));

    /* Panel spacing optimized for aside menu */
    --panel-gap-y: clamp(16px, 4vh, 32px);
    --panel-gap-x: clamp(16px, 4vw, 32px);
    --panel-gap-mobile: clamp(12px, 3vw, 24px);

    /* Typography scale */
    --font-size-xs: clamp(0.75rem, 2vw, 0.875rem);
    --font-size-sm: clamp(0.875rem, 2.5vw, 1rem);
    --font-size-base: clamp(1rem, 3vw, 1.125rem);
    --font-size-lg: clamp(1.125rem, 3.5vw, 1.25rem);
    --font-size-xl: clamp(1.25rem, 4vw, 1.5rem);
    --font-size-2xl: clamp(1.5rem, 5vw, 2rem);
    --font-size-3xl: clamp(2rem, 6vw, 3rem);
    --font-size-4xl: clamp(2.5rem, 8vw, 4rem);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #f5f5f5;
    width: 100%; /* Voltar para 100% */
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
    position: relative;
    margin: 0;
    padding: 0;

    /* Melhorar performance em mobile */
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 1000px;
    perspective: 1000px;

    /* Otimizações para touch */
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;

    /* Prevent zoom on inputs in iOS */
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;

    /* Smooth scrolling for better UX */
    scroll-behavior: smooth;

    /* Base font size for responsive typography */
    font-size: 16px;
    line-height: 1.6;

    /* Responsive typography */
    @media (max-width: 425px) {
      font-size: 14px;
    }

    @media (max-width: 320px) {
      font-size: 13px;
    }
  }

  html {
    height: 100%;
    overflow: hidden;
    margin: 0; /* Garantir que não há margem no html */
    padding: 0; /* Garantir que não há padding no html */
    /* Prevent font size adjustments after orientation change */
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }

  #root {
    width: 100%; /* Voltar para 100% */
    height: 100%;
    min-height: 100vh;
    position: relative;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  section, header, footer {
    width: 100%;
    animation: ${fadeIn} 1s ease-in-out;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  /* Better button and input defaults for mobile */
  button, input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;

    @media (hover: none) and (pointer: coarse) {
      cursor: default;
    }
  }

  /* Responsive images */
  img, video {
    max-width: 100%;
    height: auto;
  }

  /* Better scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #1f1f1f;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #3e3e3e, #2f2f2f);
    border-radius: 10px;

    &:hover {
      background: linear-gradient(to bottom, #2f2f2f, #1f1f1f);
    }
  }
`;

export default GlobalStyle;
