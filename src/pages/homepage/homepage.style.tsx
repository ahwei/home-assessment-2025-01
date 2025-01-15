import { Box } from '@/components/layout';
import styled from 'styled-components';

export const StyleTabContainer = styled(Box)`
  background-color: white;
  border-radius: 8px;
  min-height: 600px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px;

  @media (max-width: 768px) {
    padding: 8px;
    min-height: 400px;
  }
`;

export const StyleCard = styled(Box)`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 16px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;
