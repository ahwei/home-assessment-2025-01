import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import Container from '../Container';
import { renderWithTheme } from './test-utils';

describe('Container', () => {
  it('renders correctly', () => {
    const { container } = renderWithTheme(<Container />);
    expect(container.firstChild as HTMLElement).toHaveStyle({
      'max-width': '1280px',
    });
  });
});
