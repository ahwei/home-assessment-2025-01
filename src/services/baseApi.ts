import studentsData from '@/data/students.json';
import { createApi } from '@reduxjs/toolkit/query/react';

const mockBaseQuery = () => async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { data: studentsData };
};

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: mockBaseQuery(),
  endpoints: () => ({}),
});
