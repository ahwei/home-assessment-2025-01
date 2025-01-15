import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#0070f3',
    secondary: '#1c1c1e',
  },
  spacing: (factor: number) => `${factor * 8}px`,
};

export default theme;
