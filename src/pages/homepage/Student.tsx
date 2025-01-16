import { Box, Flex } from '@/components/layout';
import styled from 'styled-components';
import { StyleCard } from './homepage.style';

interface StyleCardHeadProps {
  isActive?: boolean;
}

const StyleCardHead = styled(Box)<StyleCardHeadProps>`
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.secondary};
  color: white;
  width: 100%;
  padding: 4px;
  text-align: center;
  overflow: hidden;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

const StyleCardBody = styled(Flex)`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const StyleCardFooter = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  height: 35px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 4px;
`;

const StyleButton = styled.button<{ color?: 'red' | 'green' }>`
  color: white;
  background-color: ${({ color }) => (color === 'red' ? '#FF2D2D' : '#02DF82')};
  border-radius: 4px;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  &:hover {
    background-color: ${({ color }) =>
      color === 'red' ? '#CE0000' : '#02C874'};
  }
  &:active {
    background-color: ${({ color }) =>
      color === 'red' ? '#FF6D6D' : '#02FFC2'};
  }
`;

interface StudentProps {
  isActive?: boolean;
  onClick?: () => void;
}

const Student = ({ isActive = true, onClick }: StudentProps) => {
  return (
    <StyleCard onClick={onClick}>
      <StyleCardHead isActive={isActive}>1</StyleCardHead>
      <StyleCardBody>
        <p>
          <b>AhWei</b>
        </p>
      </StyleCardBody>
      <StyleCardFooter>
        <StyleButton color="red">-1</StyleButton>
        <p>Footer</p>
        <StyleButton>+1</StyleButton>
      </StyleCardFooter>
    </StyleCard>
  );
};

export default Student;
