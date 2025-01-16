import { Student } from '@/types/student';
import { baseApi } from './baseApi';

export const studentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStudents: builder.query<{ students: Student[] }, any>({
      query: () => 'students',
    }),
  }),
});

export const { useGetStudentsQuery } = studentApi;
