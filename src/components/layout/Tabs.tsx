import styled from 'styled-components';
import Box from './Box';

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TabList = styled.div`
  display: flex;
  gap: 4px;
`;

interface TabProps {
  selected?: boolean;
}

const Tab = styled.button<TabProps>`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)};
  border: none;
  background: ${({ selected, theme }) =>
    selected ? 'white' : theme.colors.disabled};
  min-width: 150px;
  cursor: pointer;
  color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : 'black'};
  transition: all 0.3s;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-weight: 900;
  &:hover {
    background-color: ${({ theme }) => theme.colors.disabled}9A;
  }
`;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanelWrapper = styled.div`
  &[hidden] {
    display: none;
  }
`;

const TabPanel: React.FC<TabPanelProps> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <TabPanelWrapper
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </TabPanelWrapper>
  );
};

interface TabsProps {
  value: number;
  onChange: (value: number) => void;
  children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  return (
    <TabsContainer>
      <TabList>{children}</TabList>
    </TabsContainer>
  );
};

export { Tab, TabPanel };
