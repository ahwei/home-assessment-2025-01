import theme from '@/theme';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

export const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};
