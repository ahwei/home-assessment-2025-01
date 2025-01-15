import { Container } from '@/components/layout';
import { Tab, TabPanel, Tabs } from '@/components/layout/Tabs';
import { useState } from 'react';

export const Home = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Container>
      <Tabs value={activeTab} onChange={handleChange}>
        <Tab selected={activeTab === 0} onClick={() => handleChange(0)}>
          StudentList
        </Tab>
        <Tab selected={activeTab === 1} onClick={() => handleChange(1)}>
          Group
        </Tab>
      </Tabs>

      <TabPanel value={activeTab} index={0}>
        Tab 內容 1
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        Tab 內容 2
      </TabPanel>
    </Container>
  );
};

export default Home;
