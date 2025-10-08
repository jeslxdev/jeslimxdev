import { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import Company from './components/Company';
import Contact from './components/Contact';
import GlobalStyle from './styles/GlobalStyle';
import AppWrapper from './AppWrapper';
import MainContent from './MainContent';
import AnimatedBackground from './components/AnimatedBackground';

type SectionType = 'home' | 'presentation' | 'projects' | 'company' | 'contact';

function App() {
  const [activeSection, setActiveSection] = useState<SectionType>('home');

  const handleNavigate = (section: string) => {
    setActiveSection(section as SectionType);
  };

  return (
    <AppWrapper>
      <GlobalStyle />
      <AnimatedBackground />
      <Navbar onNavigate={handleNavigate} />
      
      {activeSection === 'home' && <Header />}
      
      <MainContent>
        <Presentation isVisible={activeSection === 'presentation'} direction="left" />
        <Projects isVisible={activeSection === 'projects'} direction="right" />
        <Company isVisible={activeSection === 'company'} direction="top" />
        <Contact isVisible={activeSection === 'contact'} direction="bottom" />
      </MainContent>
      
      <Footer />
    </AppWrapper>
  );
}

export default App;

