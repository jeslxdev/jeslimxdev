import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme as defaultTheme } from './presentation/styles';
import { colorPalettes } from './presentation/styles/colorPalettes';
import {
  Navbar,
  Hero,
  StatsBand,
  Services,
  Projects,
  About,
  Founder,
  Pricing,
  CtaBand,
  Contact,
  Footer,
  LanguageSwitcher,
  ThemeSelectorSimple,
} from './presentation/components';

function App() {
  const [paletteIndex, setPaletteIndex] = useState<number>(() => {
    const saved = localStorage.getItem('selectedPalette');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('isDarkMode');
    return saved !== null ? saved === 'true' : true;
  });

  useEffect(() => {
    localStorage.setItem('isDarkMode', String(isDarkMode));
  }, [isDarkMode]);

  const palette = colorPalettes[paletteIndex] ?? colorPalettes[0];
  const mode = isDarkMode ? palette.dark : palette.light;

  const currentTheme = {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      ...palette.colors,
      background: mode.background,
      backgroundLight: mode.surface,
      backgroundCard: isDarkMode
        ? `${mode.background}cc`
        : mode.surface,
      text: mode.text,
      textSecondary: mode.textSecondary,
      textMuted: isDarkMode ? '#666666' : '#999999',
      border: mode.border,
      borderLight: mode.border,
    },
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Navbar />
      <main>
        <Hero />
        <StatsBand />
        <Services />
        <Projects />
        <About />
        <Founder />
        <Pricing />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <LanguageSwitcher />
      <ThemeSelectorSimple
        onThemeChange={setPaletteIndex}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(prev => !prev)}
      />
    </ThemeProvider>
  );
}

export default App;
