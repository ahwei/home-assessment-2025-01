import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Dialog from '../Dialog';
import { renderWithTheme } from './test-utils';

describe('Dialog', () => {
  it('renders children when open', () => {
    renderWithTheme(<Dialog open={true}>Dialog Content</Dialog>);
    expect(screen.getByText('Dialog Content')).toBeInTheDocument();
  });

  it('does not render children when closed', () => {
    renderWithTheme(<Dialog open={false}>Dialog Content</Dialog>);
    expect(screen.queryByText('Dialog Content')).not.toBeInTheDocument();
  });
});
