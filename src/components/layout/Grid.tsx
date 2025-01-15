import { GridConfig } from '@/types/layout';
import styled from 'styled-components';

interface GridContainerProps {
  spacing?: number;
  gap?: number;
}

interface GridItemProps {
  grid: GridConfig;
}

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${({ gap, theme }) => (gap ? theme.spacing(gap) : 0)};
  width: 100%;
`;

export const GridItem = styled.div<GridItemProps>`
  ${({ grid, theme }) => `
    ${
      grid.xs &&
      `
      @media (min-width: ${theme.breakpoints.xs}) {
        grid-column: span ${grid.xs};
      }
    `
    }
    
    ${
      grid.sm &&
      `
      @media (min-width: ${theme.breakpoints.sm}) {
        grid-column: span ${grid.sm};
      }
    `
    }
    
    ${
      grid.md &&
      `
      @media (min-width: ${theme.breakpoints.md}) {
        grid-column: span ${grid.md};
      }
    `
    }
    
    ${
      grid.lg &&
      `
      @media (min-width: ${theme.breakpoints.lg}) {
        grid-column: span ${grid.lg};
      }
    `
    }
    
    ${
      grid.xl &&
      `
      @media (min-width: ${theme.breakpoints.xl}) {
        grid-column: span ${grid.xl};
      }
    `
    }
  `}
`;

export default GridContainer;
