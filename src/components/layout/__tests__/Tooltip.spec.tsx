import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Tooltip from '../Tooltip';
import { renderWithTheme } from './test-utils';

describe('Tooltip', () => {
  it('renders tooltip with content', () => {
    renderWithTheme(
      <Tooltip title="Tooltip Text">
        <button>Hover me</button>
      </Tooltip>,
    );
    expect(screen.getByText('Hover me')).toBeInTheDocument();
    expect(screen.getByText('Tooltip Text')).toBeInTheDocument();
  });
});
