import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${props => props.theme.fontWeights.bold};
    line-height: 1.2;
    color: ${props => props.theme.colors.text};
  }

  h1 {
    font-size: ${props => props.theme.fontSizes['5xl']};

    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: ${props => props.theme.fontSizes['4xl']};
    }
  }

  h2 {
    font-size: ${props => props.theme.fontSizes['4xl']};

    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: ${props => props.theme.fontSizes['3xl']};
    }
  }

  h3 {
    font-size: ${props => props.theme.fontSizes['2xl']};
  }

  p {
    color: ${props => props.theme.colors.textSecondary};
    font-size: ${props => props.theme.fontSizes.base};
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: color ${props => props.theme.transitions.base};

    &:hover {
      color: ${props => props.theme.colors.primaryLight};
    }
  }

  button {
    font-family: ${props => props.theme.fonts.primary};
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }

  input, textarea, select {
    font-family: ${props => props.theme.fonts.primary};
    outline: none;
  }

  ::selection {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
    border-radius: ${props => props.theme.borderRadius.md};

    &:hover {
      background: ${props => props.theme.colors.primaryDark};
    }
  }

  /* Prevent iframe embedding */
  iframe {
    display: none !important;
  }
`;
