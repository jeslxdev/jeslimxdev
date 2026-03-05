import { useState, useEffect } from 'react';
import { colorPalettes } from '../styles/colorPalettes';

interface ThemeSelectorProps {
  onThemeChange: (paletteIndex: number) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const ThemeSelectorSimple: React.FC<ThemeSelectorProps> = ({
  onThemeChange,
  isDarkMode,
  onToggleDarkMode,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePalette, setActivePalette] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('selectedPalette');
    if (saved) {
      const index = parseInt(saved, 10);
      setActivePalette(index);
    }
  }, []);

  const handlePaletteChange = (index: number) => {
    setActivePalette(index);
    localStorage.setItem('selectedPalette', index.toString());
    onThemeChange(index);
  };

  const currentPalette = colorPalettes[activePalette];
  const mode = isDarkMode ? currentPalette.dark : currentPalette.light;

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          top: '50%',
          right: isOpen ? '300px' : '0',
          transform: 'translateY(-50%)',
          width: '44px',
          height: '44px',
          background: `linear-gradient(135deg, ${currentPalette.colors.primary}, ${currentPalette.colors.secondary})`,
          border: 'none',
          borderRadius: '8px 0 0 8px',
          cursor: 'pointer',
          zIndex: 10000,
          color: mode.text,
          fontSize: '20px',
          boxShadow: '-4px 0 15px rgba(0,0,0,0.4)',
          transition: 'right 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        title="Theme selector"
      >
        🎨
      </button>

      {/* Panel */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          right: isOpen ? '0' : '-300px',
          transform: 'translateY(-50%)',
          width: '300px',
          maxHeight: '80vh',
          background: mode.surface,
          borderTop: `1px solid ${mode.border}`,
          borderBottom: `1px solid ${mode.border}`,
          borderLeft: `1px solid ${mode.border}`,
          borderRadius: '12px 0 0 12px',
          boxShadow: '-4px 0 24px rgba(0,0,0,0.4)',
          transition: 'right 0.3s ease',
          zIndex: 9999,
          overflowY: 'auto',
          padding: '20px',
        }}
      >
        <h3
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '12px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: mode.text,
            marginBottom: '16px',
          }}
        >
          // PALETTE
        </h3>

        {/* Dark / Light toggle */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            paddingBottom: '16px',
            borderBottom: `1px solid ${mode.border}`,
          }}
        >
          <span style={{ color: mode.textSecondary, fontSize: '13px', fontFamily: 'IBM Plex Mono, monospace' }}>
            {isDarkMode ? 'Dark' : 'Light'}
          </span>
          <button
            onClick={onToggleDarkMode}
            style={{
              background: 'transparent',
              border: `1px solid ${mode.border}`,
              padding: '6px 14px',
              cursor: 'pointer',
              color: mode.text,
              fontSize: '18px',
              fontFamily: 'IBM Plex Mono, monospace',
              transition: 'all 0.2s',
            }}
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
        </div>

        {/* Palette list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {colorPalettes.map((palette, index) => (
            <button
              key={index}
              onClick={() => handlePaletteChange(index)}
              style={{
                background: activePalette === index ? `${currentPalette.colors.primary}22` : 'transparent',
                border: `1px solid ${activePalette === index ? currentPalette.colors.primary : mode.border}`,
                padding: '10px 12px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
                <div style={{ width: '18px', height: '18px', background: palette.colors.primary, border: `1px solid ${mode.border}` }} />
                <div style={{ width: '18px', height: '18px', background: palette.colors.secondary, border: `1px solid ${mode.border}` }} />
                <div style={{ width: '18px', height: '18px', background: palette.colors.accent, border: `1px solid ${mode.border}` }} />
              </div>
              <span
                style={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                  color: activePalette === index ? mode.text : mode.textSecondary,
                  textTransform: 'uppercase',
                }}
              >
                {palette.name} {activePalette === index ? '◆' : ''}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
