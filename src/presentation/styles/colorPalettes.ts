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
      primary: '#E8E8E8', primaryDark: '#C0C0C0', primaryLight: '#FFFFFF',
      secondary: '#2D2D2D', secondaryDark: '#1A1A1A', secondaryLight: '#3A3A3A',
      accent: '#FFFFFF', accentDark: '#E0E0E0', accentLight: '#FFFFFF',
      success: '#A8A8A8', warning: '#808080', error: '#D0D0D0', info: '#E8E8E8',
    },
    dark:  { background: '#0A0A0A', surface: '#161616', text: '#FFFFFF', textSecondary: '#C8C8C8', border: '#2D2D2D' },
    light: { background: '#F5F5F5', surface: '#FFFFFF', text: '#0A0A0A', textSecondary: '#333333', border: '#CCCCCC' },
  },
  {
    name: 'Graphite',
    colors: {
      primary: '#D4D4D4', primaryDark: '#ABABAB', primaryLight: '#F0F0F0',
      secondary: '#3A3A3A', secondaryDark: '#252525', secondaryLight: '#4F4F4F',
      accent: '#ECECEC', accentDark: '#C8C8C8', accentLight: '#F8F8F8',
      success: '#999999', warning: '#707070', error: '#CCCCCC', info: '#D4D4D4',
    },
    dark:  { background: '#111111', surface: '#1E1E1E', text: '#F0F0F0', textSecondary: '#B8B8B8', border: '#333333' },
    light: { background: '#EFEFEF', surface: '#FAFAFA', text: '#111111', textSecondary: '#444444', border: '#D0D0D0' },
  },
  {
    name: 'Ash',
    colors: {
      primary: '#C5C9CC', primaryDark: '#9EA3A8', primaryLight: '#E2E5E8',
      secondary: '#3B3F42', secondaryDark: '#27292B', secondaryLight: '#4F5458',
      accent: '#DDE0E3', accentDark: '#B8BCBF', accentLight: '#F0F2F4',
      success: '#909598', warning: '#686C6F', error: '#C0C4C7', info: '#C5C9CC',
    },
    dark:  { background: '#0E0F10', surface: '#1A1C1E', text: '#E8EAEC', textSecondary: '#B0B4B8', border: '#2E3234' },
    light: { background: '#F2F3F4', surface: '#FFFFFF', text: '#1A1C1E', textSecondary: '#4A4E52', border: '#C8CCCE' },
  },
  {
    name: 'Slate',
    colors: {
      primary: '#C8CDD4', primaryDark: '#A1A8B2', primaryLight: '#E4E7EC',
      secondary: '#3A404A', secondaryDark: '#252930', secondaryLight: '#4E5563',
      accent: '#D8DCE4', accentDark: '#B0B6C2', accentLight: '#EEF0F4',
      success: '#8C9199', warning: '#656C78', error: '#BBC0CA', info: '#C8CDD4',
    },
    dark:  { background: '#0C0D10', surface: '#181A20', text: '#E4E7EC', textSecondary: '#A8AEBB', border: '#2C303A' },
    light: { background: '#F0F1F4', surface: '#FFFFFF', text: '#181A20', textSecondary: '#484E5C', border: '#C4C8D2' },
  },
  {
    name: 'Bone',
    colors: {
      primary: '#DDD8D0', primaryDark: '#B8B2AA', primaryLight: '#F0EDE8',
      secondary: '#3E3A35', secondaryDark: '#282420', secondaryLight: '#524E48',
      accent: '#EAE6E0', accentDark: '#C4BFB8', accentLight: '#F5F2EE',
      success: '#9E9890', warning: '#706A62', error: '#CECCCA', info: '#DDD8D0',
    },
    dark:  { background: '#100E0C', surface: '#1C1916', text: '#EDE9E4', textSecondary: '#BEB8B0', border: '#302C28' },
    light: { background: '#F6F3EF', surface: '#FFFEFB', text: '#1C1916', textSecondary: '#4A4540', border: '#D2CEC8' },
  },
  {
    name: 'Onyx',
    colors: {
      primary: '#B0B0B0', primaryDark: '#888888', primaryLight: '#D4D4D4',
      secondary: '#282828', secondaryDark: '#141414', secondaryLight: '#383838',
      accent: '#C8C8C8', accentDark: '#A0A0A0', accentLight: '#E0E0E0',
      success: '#888888', warning: '#606060', error: '#B8B8B8', info: '#B0B0B0',
    },
    dark:  { background: '#060606', surface: '#121212', text: '#F2F2F2', textSecondary: '#A0A0A0', border: '#242424' },
    light: { background: '#EBEBEB', surface: '#F8F8F8', text: '#060606', textSecondary: '#383838', border: '#C0C0C0' },
  },
  {
    name: 'Mist',
    colors: {
      primary: '#D8DEE4', primaryDark: '#B0B8C2', primaryLight: '#ECF0F4',
      secondary: '#3C4450', secondaryDark: '#272E38', secondaryLight: '#505D6C',
      accent: '#E4E9EE', accentDark: '#BCC4CC', accentLight: '#F2F5F8',
      success: '#96A0AB', warning: '#6A7480', error: '#C4CCD4', info: '#D8DEE4',
    },
    dark:  { background: '#0A0C0F', surface: '#141820', text: '#E8ECF0', textSecondary: '#A4AEBC', border: '#262C38' },
    light: { background: '#EFF1F4', surface: '#FFFFFF', text: '#141820', textSecondary: '#404C5C', border: '#C8CED8' },
  },
];
