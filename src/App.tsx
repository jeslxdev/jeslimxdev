import { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './styles/GlobalStyle';
import AppWrapper from './AppWrapper';
import MainContent from './MainContent';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy loading dos componentes pesados
const AnimatedBackground = lazy(() => import('./components/AnimatedBackground'));
const Presentation = lazy(() => import('./components/Presentation'));
const Projects = lazy(() => import('./components/Projects'));
const Company = lazy(() => import('./components/Company'));
const Contact = lazy(() => import('./components/Contact'));

type SectionType = 'home' | 'presentation' | 'projects' | 'company' | 'contact';

function App() {
  const [activeSection, setActiveSection] = useState<SectionType>('home');

  const handleNavigate = (section: string) => {
    setActiveSection(section as SectionType);
  };

  return (
    <AppWrapper>
      <GlobalStyle />

      {/* Renderizar background animado apenas quando necessário */}
      <Suspense fallback={null}>
        <AnimatedBackground />
      </Suspense>

      <Navbar onNavigate={handleNavigate} />

      {activeSection === 'home' && <Header />}

      <MainContent>
        <Suspense fallback={<LoadingSpinner />}>
          {activeSection === 'presentation' && (
            <Presentation isVisible={true} direction="left" />
          )}
          {activeSection === 'projects' && (
            <Projects isVisible={true} direction="right" />
          )}
          {activeSection === 'company' && (
            <Company isVisible={true} direction="top" />
          )}
          {activeSection === 'contact' && (
            <Contact isVisible={true} direction="bottom" />
          )}
        </Suspense>
      </MainContent>

      <Footer />
    </AppWrapper>
  );
}

export default App;

