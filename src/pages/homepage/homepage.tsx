import { Container, Grid } from '@/components/layout';
import { Tab, TabPanel, Tabs } from '@/components/layout/Tabs';
import { openDialog } from '@/store/slices/dialogSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleTabContainer } from './homepage.style';
import Student from './Student';
import StudentDetail from './StudentDetail';

export const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [cards] = useState(Array(40).fill(132));
  const dispatch = useDispatch();

  const handleChange = (newValue: number) => {
    setActiveTab(newValue);
  };

  const handleOpenDetail = () => {
    dispatch(
      openDialog({
        classId: 'CLASS001',
        studentId: 'STU001',
        link: 'https://example.com',
      }),
    );
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
          <Grid container gap={1} spacing={1}>
            {cards.map((_, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                key={index}
                spacing={1}
              >
                <Student onClick={handleOpenDetail} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={activeTab} index={1}>
          Tab 內容 2
        </TabPanel>
      </StyleTabContainer>

      <StudentDetail />
    </Container>
  );
};

export default Home;
