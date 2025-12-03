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
    name: 'Classic Gold',
    colors: {
      primary: '#D4AF37',
      primaryDark: '#B8941E',
      primaryLight: '#E5C758',
      secondary: '#2C2416',
      secondaryDark: '#1A1409',
      secondaryLight: '#3E3220',
      accent: '#FFD700',
      accentDark: '#DAB900',
      accentLight: '#FFE44D',
      success: '#4CAF50',
      warning: '#FF9800',
      error: '#F44336',
      info: '#2196F3',
    },
    dark: {
      background: '#1A1409',
      surface: '#2C2416',
      text: '#F5F5DC',
      textSecondary: '#D4C5A0',
      border: '#3E3220',
    },
    light: {
      background: '#FFF8E7',
      surface: '#FFFFFF',
      text: '#2C2416',
      textSecondary: '#5A4A2E',
      border: '#E5D7BB',
    },
  },
  {
    name: 'Elegant Beige',
    colors: {
      primary: '#C9A96E',
      primaryDark: '#A68B52',
      primaryLight: '#E0C791',
      secondary: '#8B7355',
      secondaryDark: '#6B5742',
      secondaryLight: '#A68F73',
      accent: '#D4AF37',
      accentDark: '#B8941E',
      accentLight: '#E5C758',
      success: '#4CAF50',
      warning: '#FF9800',
      error: '#F44336',
      info: '#2196F3',
    },
    dark: {
      background: '#2B2318',
      surface: '#3D3024',
      text: '#F5F0E6',
      textSecondary: '#D9CDB8',
      border: '#4F4232',
    },
    light: {
      background: '#FAF7F2',
      surface: '#FFFFFF',
      text: '#3D3024',
      textSecondary: '#6B5E4F',
      border: '#E8DFD0',
    },
  },
  {
    name: 'Royal Bronze',
    colors: {
      primary: '#CD7F32',
      primaryDark: '#A66827',
      primaryLight: '#E09B52',
      secondary: '#4A3428',
      secondaryDark: '#2E201A',
      secondaryLight: '#664836',
      accent: '#B87333',
      accentDark: '#985F2A',
      accentLight: '#D49056',
      success: '#4CAF50',
      warning: '#FF9800',
      error: '#F44336',
      info: '#2196F3',
    },
    dark: {
      background: '#1C140E',
      surface: '#2E201A',
      text: '#F5E6D3',
      textSecondary: '#D4BFA8',
      border: '#422C1F',
    },
    light: {
      background: '#FFF5EB',
      surface: '#FFFFFF',
      text: '#2E201A',
      textSecondary: '#5C4033',
      border: '#E8D4C0',
    },
  },
  {
    name: 'Champagne Rose',
    colors: {
      primary: '#F1DDCF',
      primaryDark: '#D4BFA8',
      primaryLight: '#FAF0E6',
      secondary: '#C9A0A0',
      secondaryDark: '#A67C7C',
      secondaryLight: '#E0BEBE',
      accent: '#E6B8A2',
      accentDark: '#C9987C',
      accentLight: '#F5D4C3',
      success: '#4CAF50',
      warning: '#FF9800',
      error: '#F44336',
      info: '#2196F3',
    },
    dark: {
      background: '#2A1F1F',
      surface: '#3C2C2C',
      text: '#FAF0E6',
      textSecondary: '#E0CFCF',
      border: '#4E3939',
    },
    light: {
      background: '#FFF9F5',
      surface: '#FFFFFF',
      text: '#3C2C2C',
      textSecondary: '#6B5555',
      border: '#F0E0D6',
    },
  },
  {
    name: 'Platinum Luxury',
    colors: {
      primary: '#E5E4E2',
      primaryDark: '#C1BFBD',
      primaryLight: '#F5F5F3',
      secondary: '#8C8C88',
      secondaryDark: '#6B6B68',
      secondaryLight: '#ADADAA',
      accent: '#BFC1C2',
      accentDark: '#9FA1A2',
      accentLight: '#D9DBDC',
      success: '#4CAF50',
      warning: '#FF9800',
      error: '#F44336',
      info: '#2196F3',
    },
    dark: {
      background: '#1A1A19',
      surface: '#2C2C2A',
      text: '#F5F5F3',
      textSecondary: '#D4D4D2',
      border: '#3E3E3C',
    },
    light: {
      background: '#FAFAF9',
      surface: '#FFFFFF',
      text: '#2C2C2A',
      textSecondary: '#5A5A58',
      border: '#ECECEA',
    },
  },
  {
    name: 'Warm Terracotta',
    colors: {
      primary: '#E07856',
      primaryDark: '#C25A3A',
      primaryLight: '#F09876',
      secondary: '#8B4513',
      secondaryDark: '#6B340F',
      secondaryLight: '#A65625',
      accent: '#D2691E',
      accentDark: '#B4541A',
      accentLight: '#E88445',
      success: '#4CAF50',
      warning: '#FF9800',
      error: '#F44336',
      info: '#2196F3',
    },
    dark: {
      background: '#1F1410',
      surface: '#322118',
      text: '#F5E6D3',
      textSecondary: '#D9C3AD',
      border: '#452E20',
    },
    light: {
      background: '#FFF6F0',
      surface: '#FFFFFF',
      text: '#322118',
      textSecondary: '#64432F',
      border: '#F0DACB',
    },
  },
];
