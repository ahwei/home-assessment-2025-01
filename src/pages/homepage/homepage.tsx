import { Container, Grid } from '@/components/layout';
import { Tab, TabPanel, Tabs } from '@/components/layout/Tabs';
import { useState } from 'react';
import { StyleCard, StyleTabContainer } from './homepage.style';

export const Home = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Container>
      <StyleTabContainer>
        <Tabs value={activeTab} onChange={handleChange}>
          <Tab selected={activeTab === 0} onClick={() => handleChange(0)}>
            StudentList
          </Tab>
          <Tab selected={activeTab === 1} onClick={() => handleChange(1)}>
            Group
          </Tab>
        </Tabs>
        <TabPanel value={activeTab} index={0}>
          <Grid gap={1}>
            <StyleCard>132</StyleCard>
            <StyleCard>132</StyleCard>
            <StyleCard>132</StyleCard>
            <StyleCard>132</StyleCard>
            <StyleCard>132</StyleCard>
          </Grid>
        </TabPanel>
        <TabPanel value={activeTab} index={1}>
          Tab 內容 2
        </TabPanel>
      </StyleTabContainer>
    </Container>
  );
};

export default Home;
