import { useState } from 'react';
import type { SectionType } from '@/models/Section';
import { Navbar, Footer, ModernBackground as ModernBg } from '@/presentation/components';
import GlobalStyle from '@/styles/GlobalStyle';
import AppWrapper from '@/AppWrapper';
import Carousel from '@/components/Carousel';

// SectionType is imported from models/Section

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
  <ModernBg />

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

