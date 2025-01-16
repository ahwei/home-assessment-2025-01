import { Container, Flex, Grid } from '@/components/layout';
import { Tab, TabPanel, Tabs } from '@/components/layout/Tabs';
import { useGetStudentsQuery } from '@/services/studentApi';
import { openDialog } from '@/store/slices/dialogSlice';
import { People } from '@styled-icons/material';
import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleTabContainer } from './homepage.style';
import Student from './Student';
import StudentDetail from './StudentDetail';

export const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { data, isError, isLoading } = useGetStudentsQuery('');
  const dispatch = useDispatch();

  const handleChange = (newValue: number) => {
    setActiveTab(newValue);
  };

  const handleOpenDetail = (studentId: number) => {
    dispatch(
      openDialog({
        classId: 'CLASS001',
        studentId: studentId,
        link: 'https://www.classswift.viewsonic.io/',
      }),
    );
  };
  const activeStudents = useMemo(() => {
    return data?.students.filter((student) => student.isActive).length || 0;
  }, [data?.students]);

  return (
    <Container>
      <Flex align="center" gap={1}>
        <h1>302 Science </h1>

        <People size={32} />
        {!isLoading && !isError && (
          <p>
            {activeStudents} / {data?.students.length || 0}
          </p>
        )}
      </Flex>
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
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error ,Please try later</div>}
            {!isLoading &&
              !isError &&
              data?.students.map((student) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={2}
                  key={student.id}
                  spacing={1}
                >
                  <Student student={student} onClick={handleOpenDetail} />
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
