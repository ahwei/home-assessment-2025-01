import { Box, Flex } from '@/components/layout';
import { Student as StudentType } from '@/types/student';
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
  onClick?: () => void;
}

const Student = ({ student, onClick }: StudentProps) => {
  const { id, name, isActive = true, score } = student;

  return (
    <StyleCard>
      <StyleCardHead isActive={isActive}>{id}</StyleCardHead>
      <StyleCardBody
        disabled={!isActive}
        onClick={isActive ? onClick : undefined}
      >
        <h4>
          <b>{name}</b>
        </h4>
      </StyleCardBody>
      <StyleCardFooter>
        <StyleButton color="red" disabled={!isActive}>
          -1
        </StyleButton>
        <p>{score}</p>
        <StyleButton disabled={!isActive}>+1</StyleButton>
      </StyleCardFooter>
    </StyleCard>
  );
};

export default Student;
