import { Student } from '@/types/student';
import { baseApi } from './baseApi';

export const studentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStudents: builder.query<{ students: Student[] }, any>({
      query: () => 'students',
    }),
    updateStudentScore: builder.mutation<
      Student,
      { id: number; score: number }
    >({
      query: ({ id, score }) => ({
        url: `/students/${id}/score`,
        method: 'PATCH',
        body: { score },
      }),
      // Optimistic update
      async onQueryStarted({ id, score }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          studentApi.util.updateQueryData('getStudents', '', (draft) => {
            const student = draft.students.find((s) => s.id === id);
            if (student) {
              student.score = score;
            }
          }),
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const { useGetStudentsQuery, useUpdateStudentScoreMutation } =
  studentApi;
