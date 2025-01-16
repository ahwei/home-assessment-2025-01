import { screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Tab, TabPanel, Tabs } from '../Tabs';
import { renderWithTheme } from './test-utils';

describe('Tabs', () => {
  it('renders tabs and handles selection', () => {
    const handleChange = vi.fn();
    renderWithTheme(
      <>
        <Tabs value={0} onChange={handleChange}>
          <Tab value={0}>Tab 1</Tab>
          <Tab value={1}>Tab 2</Tab>
        </Tabs>
        <TabPanel value={0} index={0}>
          Panel 1
        </TabPanel>
        <TabPanel value={0} index={1}>
          Panel 2
        </TabPanel>
      </>,
    );

    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();

    expect(screen.getByText('Panel 1')).toBeInTheDocument();
    expect(screen.queryByText('Panel 2')).not.toBeInTheDocument();
  });
});
