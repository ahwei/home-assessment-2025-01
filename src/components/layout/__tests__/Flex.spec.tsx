import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import Flex from '../Flex';
import { renderWithTheme } from './test-utils';

describe('Flex', () => {
  it('renders with default props', () => {
    const { container } = renderWithTheme(<Flex />);
    expect(container.firstChild as HTMLElement).toHaveStyle({
      display: 'flex',
      'flex-direction': 'row',
    });
  });

  it('renders with custom props', () => {
    const { container } = renderWithTheme(
      <Flex direction="column" justify="center" align="center" />,
    );
    expect(container.firstChild as HTMLElement).toHaveStyle({
      'flex-direction': 'column',
      'justify-content': 'center',
      'align-items': 'center',
    });
  });
});
