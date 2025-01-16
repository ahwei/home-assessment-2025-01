import { Box, Flex } from '@/components/layout';
import { useUpdateStudentScoreMutation } from '@/services/studentApi';
import { openDialog } from '@/store/slices/dialogSlice';
import { Student as StudentType } from '@/types/student';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { StyleCard } from './homepage.style';
interface StyleCardHeadProps {
  isActive?: boolean;
}

const StyleCardHead = styled(Box)<StyleCardHeadProps>`
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 4px;
  text-align: center;
  overflow: hidden;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

const StyleCardBody = styled(Flex)<{ disabled?: boolean }>`
  justify-content: center;
  align-items: center;
  flex: 1;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const StyleCardFooter = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  height: 35px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 4px;
`;

const StyleButton = styled.button<{ color?: 'red' | 'green' }>`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ color, theme }) =>
    color === 'red' ? theme.colors.error.main : theme.colors.success.main};
  border-radius: 4px;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  &:hover {
    background-color: ${({ color, theme }) =>
      color === 'red' ? theme.colors.error.dark : theme.colors.success.dark};
  }
  &:active {
    background-color: ${({ color, theme }) =>
      color === 'red' ? theme.colors.error.light : theme.colors.success.light};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
    &:hover {
      background-color: ${({ theme }) => theme.colors.disabled};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.disabled};
    }
  }
`;

interface StudentProps {
  student: StudentType;
}

const Student = ({ student }: StudentProps) => {
  const dispatch = useDispatch();
  const { id, name, isActive = true, score } = student;
  const [updateScore] = useUpdateStudentScoreMutation();

  const handleScoreChange = (increment: number) => {
    const newScore = Math.max(0, score + increment);
    if (newScore !== score) {
      updateScore({ id, score: newScore });
    }
  };

  const handleOpenDetail = (studentId: number) => {
    dispatch(
      openDialog({
        classId: 'CLASS001',
        studentId: studentId,
        link: 'https://www.classswift.viewsonic.io/',
      }),
    );
  };

  return (
    <StyleCard>
      <StyleCardHead isActive={isActive}>{id}</StyleCardHead>
      <StyleCardBody
        disabled={!isActive}
        onClick={() => {
          if (isActive) {
            handleOpenDetail(id);
          }
        }}
      >
        <h4>
          <b>{name}</b>
        </h4>
      </StyleCardBody>
      <StyleCardFooter>
        <StyleButton
          color="red"
          disabled={!isActive}
          onClick={() => {
            if (score > 0) {
              handleScoreChange(-1);
            }
          }}
        >
          -1
        </StyleButton>
        <p>{score}</p>
        <StyleButton disabled={!isActive} onClick={() => handleScoreChange(1)}>
          +1
        </StyleButton>
      </StyleCardFooter>
    </StyleCard>
  );
};

export default Student;
