import { createGlobalStyle } from 'styled-components';
import { fadeIn } from './animations';

const GlobalStyle = createGlobalStyle`
  :root {
    /* Safe area insets for notch devices */
    --safe-top: max(env(safe-area-inset-top, 0px), 0px);
    --safe-bottom: max(env(safe-area-inset-bottom, 0px), 0px);

    /* Will be overridden by Navbar measurement on mount */
    --nav-height: 64px;
    --nav-offset: calc(var(--nav-height) + 20px);
    --nav-safe-top: calc(var(--nav-offset) + var(--safe-top));

    /* Footer sizing; overridden by Footer measurement on mount */
    --footer-height: 64px;
    --footer-safe-bottom: calc(var(--footer-height) + var(--safe-bottom));

    /* Panel spacing from header/footer and screen edges */
    --panel-gap-y: clamp(10px, 3vh, 24px);
    --panel-gap-x: clamp(8px, 4vw, 24px);
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #1B3D50;
    color: #f5f5f5;
    width: 100%;
  }

  #root {
    width: 100%;
  }

  section, header, footer {
    width: 100%;
    animation: ${fadeIn} 1s ease-in-out;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyle;
