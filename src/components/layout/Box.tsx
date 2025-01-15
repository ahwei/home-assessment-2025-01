import styled from 'styled-components';
interface BoxContainerProps {
  p?: number;
  m?: number;
  gap?: number;
}

const Box = styled.div<BoxContainerProps>`
  padding: ${({ theme, p }) => (p ? theme.spacing(p) : 0)};
  margin: ${({ theme, m }) => (m ? theme.spacing(m) : 0)};
  gap: ${({ theme, gap }) => (gap ? theme.spacing(gap) : 0)};
  box-sizing: border-box;
`;

export default Box;
