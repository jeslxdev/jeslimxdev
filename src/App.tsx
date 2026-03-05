import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme as defaultTheme } from './presentation/styles';
import {
  Navbar,
  Hero,
  Services,
  Projects,
  About,
  Founder,
  Pricing,
  Contact,
  Footer,
  LanguageSwitcher,
} from './presentation/components';

function App() {
  const currentTheme = {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      background: '#0A0A0A',
      backgroundLight: '#111111',
      backgroundCard: '#1A1A1A',
      text: '#FFFFFF',
      textSecondary: '#C8C8C8',
      textMuted: '#666666',
      border: '#2D2D2D',
      borderLight: '#3A3A3A',
      primary: '#E8E8E8',
      primaryDark: '#C0C0C0',
      primaryLight: '#FFFFFF',
    },
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Founder />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <LanguageSwitcher />
    </ThemeProvider>
  );
}

export default App;


