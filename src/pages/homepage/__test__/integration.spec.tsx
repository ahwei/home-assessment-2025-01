import theme from '@/theme';
import { renderWithProviders } from '@/utils/testUtils';
import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { describe, expect, it, vi } from 'vitest';
import Home from '../homepage';

vi.mock('@/services/studentApi', async (importOriginal) => {
  const actual = (await importOriginal()) as object;
  let students = [
    { id: 1, name: 'John Doe', score: 85 },
    { id: 2, name: 'Jane Smith', score: 90 },
  ];

  return {
    ...actual,
    useGetStudentsQuery: () => ({
      data: { students },
      isError: false,
      isLoading: false,
    }),
  };
});

describe('Home Integration Test', () => {
  const renderHome = () =>
    renderWithProviders(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>,
    );

  it('should display student list and group data from API', async () => {
    renderHome();

    expect(screen.getByText('302 Science')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('85')).toBeInTheDocument();
  });

  it('should show group content when switching to group tab', async () => {
    renderHome();
    fireEvent.click(screen.getByText('Group'));
    expect(screen.getByText('Group 1')).toBeInTheDocument();
  });

  it('should switch back to student list from group tab', async () => {
    renderHome();
    fireEvent.click(screen.getByText('Group'));
    expect(screen.getByText('Group 1')).toBeInTheDocument();

    fireEvent.click(screen.getByText('StudentList'));
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('should open student detail dialog when student card is clicked with redux', async () => {
    renderHome();

    fireEvent.click(screen.getByText('John Doe'));
    expect(screen.getByText('Link')).toBeInTheDocument();
  });
});
