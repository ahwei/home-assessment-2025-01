import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import Box from '../Box';
import { renderWithTheme } from './test-utils';

describe('Box', () => {
  it('renders with default props', () => {
    const { container } = renderWithTheme(<Box />);
    expect(container.firstChild as HTMLElement).toHaveStyle({
      padding: '0',
      margin: '0',
    });
  });

  it('renders with custom props', () => {
    const { container } = renderWithTheme(<Box p={2} m={2} gap={2} />);
    expect(container.firstChild as HTMLElement).toHaveStyle({
      padding: '16px',
      margin: '16px',
      gap: '16px',
    });
  });
});
