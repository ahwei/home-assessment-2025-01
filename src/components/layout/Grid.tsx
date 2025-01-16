import styled, { css } from 'styled-components';

interface GridContainerProps {
  spacing?: number;
  gap?: number;
  item?: boolean;
  container?: boolean;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const containerStyles = css<GridContainerProps>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${({ gap, theme }) => (gap ? theme.spacing(gap) : 0)};
  width: 100%;
  box-sizing: border-box;
`;

const itemStyles = css<GridContainerProps>`
  ${({ xs }) => xs && `grid-column: span ${xs};`}
  ${({ theme, sm, md, lg, xl }) => `
    ${
      sm &&
      `
      @media (min-width: ${theme.breakpoints.sm}) {
        grid-column: span ${sm};
      }
    `
    }
    
    ${
      md &&
      `
      @media (min-width: ${theme.breakpoints.md}) {
        grid-column: span ${md};
      }
    `
    }
    
    ${
      lg &&
      `
      @media (min-width: ${theme.breakpoints.lg}) {
        grid-column: span ${lg};
      }
    `
    }
    
    ${
      xl &&
      `
      @media (min-width: ${theme.breakpoints.xl}) {
        grid-column: span ${xl};
      }
    `
    }
  `}
`;

export const Grid = styled.div<GridContainerProps>`
  ${({ container }) => container && containerStyles}
  ${({ item }) => item && itemStyles}
  padding: ${({ spacing, theme }) => (spacing ? theme.spacing(spacing) : 0)};
`;

export default Grid;
