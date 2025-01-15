import { Container, Grid } from '@/components/layout';
import { Tab, TabPanel, Tabs } from '@/components/layout/Tabs';
import { useState } from 'react';
import { StyleCard, StyleTabContainer } from './homepage.style';

export const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [cards] = useState(Array(40).fill(132));

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
          <Grid container gap={1}>
            {cards.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
                <StyleCard>{card}</StyleCard>
              </Grid>
            ))}
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
