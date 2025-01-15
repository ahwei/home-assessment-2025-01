import { AlignItems, FlexDirection, JustifyContent } from '@/types/layout';
import styled from 'styled-components';

interface FlexProps {
  justify?: JustifyContent;
  align?: AlignItems;
  direction?: FlexDirection;
  gap?: number;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || FlexDirection.Row};
  justify-content: ${({ justify }) => justify || JustifyContent.Start};
  align-items: ${({ align }) => align || AlignItems.Stretch};
  gap: ${({ gap, theme }) => (gap ? theme.spacing(gap) : 0)};
  box-sizing: border-box;
`;

export default Flex;
