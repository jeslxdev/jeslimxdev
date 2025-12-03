import { useEffect, useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme as defaultTheme } from './presentation/styles';
import { colorPalettes } from './presentation/styles/colorPalettes';
import {
  Navbar,
  Hero,
  Services,
  Pricing,
  Projects,
  About,
  Contact,
  Footer,
  LanguageSwitcher,
  ThemeSelectorSimple,
} from './presentation/components';

function App() {
  const [paletteIndex, setPaletteIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    console.log('App mounted successfully');
    const savedPalette = localStorage.getItem('selectedPalette');
    const savedMode = localStorage.getItem('darkMode');

    if (savedPalette) {
      setPaletteIndex(parseInt(savedPalette, 10));
    }
    if (savedMode) {
      setIsDarkMode(savedMode === 'true');
    }
  }, []);

  const currentTheme = useMemo(() => {
    const palette = colorPalettes[paletteIndex];
    const mode = isDarkMode ? palette.dark : palette.light;

    console.log('Atualizando tema para paleta:', paletteIndex, palette.name, 'Modo:', isDarkMode ? 'Dark' : 'Light');

    return {
      ...defaultTheme,
      colors: {
        ...palette.colors,
        background: mode.background,
        backgroundLight: mode.surface,
        backgroundCard: mode.surface,
        text: mode.text,
        textSecondary: mode.textSecondary,
        textMuted: mode.textSecondary,
        border: mode.border,
        borderLight: mode.border,
      },
    };
  }, [paletteIndex, isDarkMode]);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <ThemeSelectorSimple
        onThemeChange={setPaletteIndex}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <LanguageSwitcher />
    </ThemeProvider>
  );
}

export default App;

