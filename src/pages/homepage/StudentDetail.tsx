import { Dialog } from '@/components/layout';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { closeDialog } from '@/store/slices/dialogSlice';
import { RootState } from '@/store/store';

export const StudentDetail: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state: RootState) => state.dialog.isOpen);
  const studentData = useAppSelector(
    (state: RootState) => state.dialog.studentData,
  );

  return (
    <Dialog open={isOpen} onClose={() => dispatch(closeDialog())}>
      <div>
        {studentData && (
          <>
            <p>Class ID: {studentData.classId}</p>
            <p>Student ID: {studentData.studentId}</p>
            <p>Link: {studentData.link}</p>
          </>
        )}
      </div>
    </Dialog>
  );
};

export default StudentDetail;
