import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled, { css } from 'styled-components';
import {
  sectionFadeIn,
  sectionFadeOut,
  slideInFromRight,
  slideInFromLeft,
  slideOutToLeft,
  slideOutToRight
} from '@/styles/animations';
import { Header, Presentation, Projects, Company, Contact } from '@/presentation/components';
import { sections as sectionsList, type SectionType } from '@/models/Section';

interface CarouselWrapperProps {
  $isTransitioning: boolean;
}

const CarouselWrapper = styled.div<CarouselWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 500;
  touch-action: pan-x;
  cursor: ${props => props.$isTransitioning ? 'grabbing' : 'grab'};
`;

const SectionContainer = styled.div<{
  $isActive: boolean;
  $isExiting: boolean;
  $slideDirection?: 'left' | 'right' | 'none';
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.$isActive ? 1 : 0};
  pointer-events: ${props => props.$isActive ? 'auto' : 'none'};

  ${props => props.$isActive && !props.$isExiting && css`
    animation: ${
      props.$slideDirection === 'right' ? slideInFromLeft :
      props.$slideDirection === 'left' ? slideInFromRight :
      sectionFadeIn
    } 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  `}

  ${props => props.$isExiting && css`
    animation: ${
      props.$slideDirection === 'right' ? slideOutToRight :
      props.$slideDirection === 'left' ? slideOutToLeft :
      sectionFadeOut
    } 0.4s ease-out forwards;
  `}
`;

const NavigationDots = styled.div`
  display: none; /* Removido conforme solicitado */
`;

const Dot = styled.button<{ $isActive: boolean }>`
  display: none; /* Removido conforme solicitado */
`;

const SwipeHint = styled.div`
  display: none; /* Removido conforme solicitado */
`;

// Section type is centralized in models/Section

interface CarouselProps {
  activeSection: SectionType;
  onSectionChange: (section: SectionType) => void;
}

const sections: SectionType[] = sectionsList;

const Carousel: React.FC<CarouselProps> = ({ activeSection, onSectionChange }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [exitingSection, setExitingSection] = useState<SectionType | null>(null);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | 'none'>('none');
  const [dragStart, setDragStart] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const currentIndex = sections.indexOf(activeSection);

  const navigateToSection = useCallback((newSection: SectionType, direction: 'left' | 'right' | 'none' = 'none') => {
    if (newSection === activeSection || isTransitioning) return;

    setIsTransitioning(true);
    setExitingSection(activeSection);
    setSlideDirection(direction);

    setTimeout(() => {
      onSectionChange(newSection);
      setExitingSection(null);
      setIsTransitioning(false);
      setSlideDirection('none');
    }, 400);
  }, [activeSection, isTransitioning, onSectionChange]);

  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % sections.length;
    navigateToSection(sections[nextIndex], 'left'); // Swipe left = content from right
  }, [currentIndex, navigateToSection]);

  const handlePrevious = useCallback(() => {
    const prevIndex = currentIndex === 0 ? sections.length - 1 : currentIndex - 1;
    navigateToSection(sections[prevIndex], 'right'); // Swipe right = content from left
  }, [currentIndex, navigateToSection]);

  // Touch/Mouse handlers
  const handleStart = (clientX: number) => {
    if (isTransitioning) return;
    setDragStart(clientX);
  };

  const handleEnd = (clientX: number) => {
    if (!dragStart || isTransitioning) return;

    const deltaX = clientX - dragStart;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        handlePrevious();
      } else {
        handleNext();
      }
    }

    setDragStart(null);
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.changedTouches[0]) {
      handleEnd(e.changedTouches[0].clientX);
    }
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    handleEnd(e.clientX);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;

      switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          handlePrevious();
          break;
        case 'ArrowRight':
        case 'ArrowDown':
          handleNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isTransitioning, handleNext, handlePrevious]);

  return (
    <CarouselWrapper
      ref={carouselRef}
      $isTransitioning={isTransitioning}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Home */}
      <SectionContainer
        $isActive={activeSection === 'home'}
        $isExiting={exitingSection === 'home'}
        $slideDirection={slideDirection}
      >
        <Header />
      </SectionContainer>

      {/* Presentation */}
      <SectionContainer
        $isActive={activeSection === 'presentation'}
        $isExiting={exitingSection === 'presentation'}
        $slideDirection={slideDirection}
      >
        <Presentation isVisible={activeSection === 'presentation'} direction="left" />
      </SectionContainer>

      {/* Projects */}
      <SectionContainer
        $isActive={activeSection === 'projects'}
        $isExiting={exitingSection === 'projects'}
        $slideDirection={slideDirection}
      >
        <Projects isVisible={activeSection === 'projects'} direction="right" />
      </SectionContainer>

      {/* Tests removed by request */}

      {/* Company */}
      <SectionContainer
        $isActive={activeSection === 'company'}
        $isExiting={exitingSection === 'company'}
        $slideDirection={slideDirection}
      >
        <Company isVisible={activeSection === 'company'} direction="top" />
      </SectionContainer>

      {/* Contact */}
      <SectionContainer
        $isActive={activeSection === 'contact'}
        $isExiting={exitingSection === 'contact'}
        $slideDirection={slideDirection}
      >
        <Contact isVisible={activeSection === 'contact'} direction="bottom" />
      </SectionContainer>

      {/* Navigation Dots - Hidden */}
      <NavigationDots>
        {sections.map((section, index) => (
          <Dot
            key={section}
            $isActive={index === currentIndex}
            onClick={() => navigateToSection(section)}
          />
        ))}
      </NavigationDots>

      {/* Swipe Hint - Hidden */}
      <SwipeHint>
        ← Arraste ou use as setas para navegar →
      </SwipeHint>
    </CarouselWrapper>
  );
};

export default Carousel;
