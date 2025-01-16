import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StudentDetailData {
  classId: string;
  studentId: string;
  link: string;
}

interface DialogState {
  isOpen: boolean;
  studentData: StudentDetailData | null;
}

const initialState: DialogState = {
  isOpen: false,
  studentData: null,
};

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openDialog: (state, action: PayloadAction<StudentDetailData>) => {
      state.isOpen = true;
      state.studentData = action.payload;
    },
    closeDialog: (state) => {
      state.isOpen = false;
      state.studentData = null;
    },
  },
});

export const { openDialog, closeDialog } = dialogSlice.actions;
export default dialogSlice.reducer;
