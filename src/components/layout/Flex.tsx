import type { AlignItems, FlexDirection, JustifyContent } from '@/types/layout';
import styled from 'styled-components';

interface FlexProps {
  justify?: JustifyContent;
  align?: AlignItems;
  direction?: FlexDirection;
  gap?: number;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
  gap: ${({ gap, theme }) => (gap ? theme.spacing(gap) : 0)};
  box-sizing: border-box;
`;

export default Flex;
