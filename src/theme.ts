import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#0070f3',
    secondary: '#dedede',
    main: '#1a73e8',
    grey: {
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      1000: '#000000',
    },
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
