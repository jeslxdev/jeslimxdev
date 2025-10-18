import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlobalStyle from '@/styles/GlobalStyle';
import AppWrapper from '@/AppWrapper';
import AnimatedBackground from '@/components/ModernBackground';
import Carousel from '@/components/Carousel';

type SectionType = 'home' | 'presentation' | 'projects' | 'company' | 'contact';

function App() {
  const [activeSection, setActiveSection] = useState<SectionType>('home');

  const handleNavigate = (section: string) => {
    setActiveSection(section as SectionType);
  };

  const handleSectionChange = (section: SectionType) => {
    setActiveSection(section);
  };

  return (
    <AppWrapper>
      <GlobalStyle />
      <AnimatedBackground />

      <Navbar onNavigate={handleNavigate} />

      <Carousel
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      <Footer />
    </AppWrapper>
  );
}

export default App;

