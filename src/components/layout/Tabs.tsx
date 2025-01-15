import styled from 'styled-components';
import Box from './Box';

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TabList = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary}40;
`;

interface TabProps {
  selected?: boolean;
}

const Tab = styled.button<TabProps>`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)};
  border: none;
  background: none;
  cursor: pointer;
  color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.secondary};
  border-bottom: 2px solid
    ${({ selected, theme }) =>
      selected ? theme.colors.primary : 'transparent'};
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary}10;
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

export const Tabs: React.FC<TabsProps> = ({ value, onChange, children }) => {
  return (
    <TabsContainer>
      <TabList>{children}</TabList>
    </TabsContainer>
  );
};

export { Tab, TabPanel };
