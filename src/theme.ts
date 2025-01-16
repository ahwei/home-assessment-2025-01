import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#0070f3',
    secondary: '#dedede',
  },
  spacing: (factor: number) => `${factor * 8}px`,
  breakpoints: {
    xs: '0px',
    sm: '480px',
    md: '768px',
    lg: '960px',
    xl: '1280px',
  },
};

export default theme;
