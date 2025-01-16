import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import Grid from '../Grid';
import { renderWithTheme } from './test-utils';

describe('Grid', () => {
  it('renders container correctly', () => {
    const { container } = renderWithTheme(<Grid container spacing={2} />);
    expect(container.firstChild as HTMLElement).toHaveStyle({
      display: 'grid',
    });
  });

  it('renders item correctly', () => {
    const { container } = renderWithTheme(<Grid item xs={6} />);
    expect(container.firstChild as HTMLElement).toHaveStyle({
      'grid-column': 'span 6',
    });
  });
});
