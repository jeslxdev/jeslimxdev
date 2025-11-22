import { useState } from 'react';
import styled from 'styled-components';
import type { SectionType } from '@/models/Section';
import GlobalStyle from '@/styles/GlobalStyle';
import AppWrapper from '@/AppWrapper';
import Terminal from '@/components/Terminal/Terminal';
import MatrixBackground from '@/components/Terminal/MatrixBackground';

// SectionType is imported from models/Section

function App() {
  const [activeSection, setActiveSection] = useState<SectionType>('home');
  const [activeSubSection, setActiveSubSection] = useState<string | undefined>(undefined);

  const handleNavigate = (section: SectionType, subSection?: string) => {
    setActiveSection(section);
    setActiveSubSection(subSection);
  };

  return (
    <AppWrapper>
      <GlobalStyle />
      <MatrixBackground />

      <MainContainer>
        <TerminalSection>
          <Terminal
            onNavigate={handleNavigate}
            currentSection={activeSection}
            subSection={activeSubSection}
          />
        </TerminalSection>
      </MainContainer>
    </AppWrapper>
  );
}const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 20px;
  position: relative;
  z-index: 1;
  background: transparent;

  @media (max-width: 768px) {
    padding: 10px;
    gap: 20px;
  }
`;

const TerminalSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;

