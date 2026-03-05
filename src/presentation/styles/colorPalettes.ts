export interface ColorPalette {
  name: string;
  colors: {
    primary: string;
    primaryDark: string;
    primaryLight: string;
    secondary: string;
    secondaryDark: string;
    secondaryLight: string;
    accent: string;
    accentDark: string;
    accentLight: string;
    success: string;
    warning: string;
    error: string;
    info: string;
  };
  dark: {
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
  };
  light: {
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
  };
}

export const colorPalettes: ColorPalette[] = [
  {
    name: 'Cold Steel',
    colors: {
      primary: '#E8E8E8',
      primaryDark: '#C0C0C0',
      primaryLight: '#FFFFFF',
      secondary: '#2D2D2D',
      secondaryDark: '#1A1A1A',
      secondaryLight: '#3A3A3A',
      accent: '#FFFFFF',
      accentDark: '#E0E0E0',
      accentLight: '#FFFFFF',
      success: '#A8A8A8',
      warning: '#808080',
      error: '#D0D0D0',
      info: '#E8E8E8',
    },
    dark: {
      background: '#0A0A0A',
      surface: '#1A1A1A',
      text: '#FFFFFF',
      textSecondary: '#C8C8C8',
      border: '#2D2D2D',
    },
    light: {
      background: '#F5F5F5',
      surface: '#FFFFFF',
      text: '#0A0A0A',
      textSecondary: '#333333',
      border: '#CCCCCC',
    },
  },
];
