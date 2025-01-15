import { AlignItems, FlexDirection, JustifyContent } from '@/types/layout';
import styled from 'styled-components';

interface FlexProps {
  justify?: JustifyContent;
  align?: AlignItems;
  direction?: FlexDirection;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || FlexDirection.Row};
  justify-content: ${({ justify }) => justify || JustifyContent.Start};
  align-items: ${({ align }) => align || AlignItems.Stretch};
`;

export default Flex;
