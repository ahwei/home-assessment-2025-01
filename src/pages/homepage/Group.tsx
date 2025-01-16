import { Box, Grid } from '@/components/layout';
import { Student as StudentType } from '@/types/student';
import { useMemo } from 'react';
import styled from 'styled-components';
import Student from './Student';

interface GroupProps {
  students: StudentType[];
}

const GroupContainer = styled.div`
  margin-bottom: 2rem;
`;

const GroupTitle = styled.h3`
  color: #666;
  margin-bottom: 1rem;
`;

const Group = ({ students }: GroupProps) => {
  const groups = useMemo(() => {
    return students.reduce((acc: StudentType[][], curr, i) => {
      if (i % 5 === 0) acc.push([]);
      acc[acc.length - 1].push(curr);
      return acc;
    }, []);
  }, [students]);

  return (
    <Box p={2}>
      {groups.map((group, groupIndex) => (
        <GroupContainer key={groupIndex}>
          <GroupTitle>Group {groupIndex + 1}</GroupTitle>
          <Grid container gap={1} spacing={1}>
            {group.map((student) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                lg={2.5}
                key={student.id}
                spacing={1}
              >
                <Student student={student} />
              </Grid>
            ))}
          </Grid>
        </GroupContainer>
      ))}
    </Box>
  );
};

export default Group;
