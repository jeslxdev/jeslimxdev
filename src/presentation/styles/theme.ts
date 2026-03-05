export const theme = {
  colors: {
    // Cold Steel — primary accent is near-white chrome
    primary: '#E8E8E8' as string,
    primaryDark: '#C0C0C0' as string,
    primaryLight: '#FFFFFF' as string,

    secondary: '#2D2D2D' as string,
    secondaryDark: '#1A1A1A' as string,
    secondaryLight: '#3A3A3A' as string,

    accent: '#FFFFFF' as string,
    accentDark: '#E0E0E0' as string,
    accentLight: '#FFFFFF' as string,

    background: '#0A0A0A' as string,
    backgroundLight: '#111111' as string,
    backgroundCard: '#1A1A1A' as string,

    text: '#FFFFFF' as string,
    textSecondary: '#C8C8C8' as string,
    textMuted: '#666666' as string,

    border: '#2D2D2D' as string,
    borderLight: '#3A3A3A' as string,

    success: '#A8A8A8' as string,
    warning: '#808080' as string,
    error: '#D0D0D0' as string,
    info: '#E8E8E8' as string,
  },
  fonts: {
    primary: "'IBM Plex Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'IBM Plex Mono', 'JetBrains Mono', 'Fira Code', monospace",
  },

  fontSizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
  },

  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  spacing: {
    xs: '0.25rem',  // 4px
    sm: '0.5rem',   // 8px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem',     // 32px
    '2xl': '3rem',  // 48px
    '3xl': '4rem',  // 64px
    '4xl': '6rem',  // 96px
  },

  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  borderRadius: {
    sm: '0px',
    md: '2px',
    lg: '2px',
    xl: '2px',
    '2xl': '4px',
    full: '2px',
  },

  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.8)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.9)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.9)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.95)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 1)',
    glow: '0 0 20px rgba(232, 232, 232, 0.15), 0 0 40px rgba(232, 232, 232, 0.05)',
    glowPrimary: '0 0 20px rgba(232, 232, 232, 0.2)',
  },

  transitions: {
    fast: '150ms ease-in-out',
    base: '200ms ease-in-out',
    slow: '300ms ease-in-out',
  },

  zIndex: {
    base: 1,
    dropdown: 10,
    sticky: 100,
    fixed: 1000,
    modal: 10000,
  },
} as const;

export type Theme = typeof theme;
