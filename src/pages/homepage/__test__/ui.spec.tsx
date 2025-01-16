import dialogReducer from '@/store/slices/dialogSlice';
import theme from '@/theme';
import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { describe, expect, it } from 'vitest';
import Group from '../Group';
import Student from '../Student';
import { StudentDetail } from '../StudentDetail';

const mockStore = configureStore({
  reducer: {
    dialog: dialogReducer,
  },
  preloadedState: {
    dialog: {
      isOpen: true,
      studentData: {
        classId: '1',
        studentId: 123,
        name: 'Test Student',
        link: 'https://test.com',
      },
    },
  },
});

const mockStudent = {
  id: 1,
  name: 'Test Student',
  isActive: true,
  score: 0,
};

describe('UI Components', () => {
  it('renders Group component', () => {
    render(
      <Provider store={mockStore}>
        <ThemeProvider theme={theme}>
          <Group students={[mockStudent]} />
        </ThemeProvider>
      </Provider>,
    );
    expect(screen.getByText('Group 1')).toBeInTheDocument();
  });

  it('renders Student component', () => {
    render(
      <Provider store={mockStore}>
        <ThemeProvider theme={theme}>
          <Student student={mockStudent} />
        </ThemeProvider>
      </Provider>,
    );
    expect(screen.getByText(mockStudent.name)).toBeInTheDocument();
  });

  it('renders StudentDetail component', () => {
    render(
      <Provider store={mockStore}>
        <ThemeProvider theme={theme}>
          <StudentDetail />
        </ThemeProvider>
      </Provider>,
    );

    expect(screen.getByText('back to class')).toBeInTheDocument();
  });
});
