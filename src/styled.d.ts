import 'styled-components';
import type { Theme } from './presentation/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
