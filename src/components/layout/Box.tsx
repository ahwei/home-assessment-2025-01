import styled from 'styled-components';
interface BoxContainerProps {
  gap?: number;
}

const Box = styled.div<BoxContainerProps>`
  padding: ${({ theme }) => theme.spacing(2)};
  margin: ${({ theme }) => theme.spacing(2)};
  gap: ${({ theme, gap }) => (gap ? theme.spacing(gap) : 0)};
`;

export default Box;
