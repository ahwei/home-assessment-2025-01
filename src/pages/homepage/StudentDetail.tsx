import { Dialog, Flex } from '@/components/layout';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { closeDialog } from '@/store/slices/dialogSlice';
import { RootState } from '@/store/store';
import { ArrowBack, Close, ContentCopy } from '@styled-icons/material';
import QRCodeLink from 'react-qr-code';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: ${({ theme }) => theme.colors.grey[600]};
  &:hover {
    color: ${({ theme }) => theme.colors.grey[800]};
  }
`;

const StyleActionButton = styled(IconButton)`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 4px;
  &:hover {
    opacity: 0.8;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const StyledIcon = styled.svg`
  width: 18px;
  height: 18px;
`;

const HeaderContainer = styled(Flex)`
  width: 100%;
  padding: px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[200]};
`;

const ContentContainer = styled.div`
  padding: 24px;
`;

export const StudentDetail: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state: RootState) => state.dialog.isOpen);
  const studentData = useAppSelector(
    (state: RootState) => state.dialog.studentData,
  );

  const handleCopyId = () => {
    if (studentData?.studentId) {
      navigator.clipboard.writeText(studentData.studentId);
      toast.success('Id is copied to clipboard');
    }
  };

  const handleCopyLink = () => {
    if (studentData?.link) {
      navigator.clipboard.writeText(studentData.link);
      toast.success('Link is copied to clipboard');
    }
  };

  return (
    <Dialog open={isOpen} onClose={() => dispatch(closeDialog())}>
      {studentData && (
        <>
          <HeaderContainer justify="space-between" align="flex-start">
            <Flex align="center" direction="column">
              <Flex align="center">
                <IconButton onClick={() => dispatch(closeDialog())}>
                  <StyledIcon as={ArrowBack} />
                </IconButton>
                back to class
              </Flex>
              <h3>ID: {studentData.studentId}</h3>
            </Flex>
            <IconButton onClick={() => dispatch(closeDialog())}>
              <StyledIcon as={Close} />
            </IconButton>
          </HeaderContainer>

          <ContentContainer>
            <Flex direction="column" gap={2}>
              <Flex align="center" gap={1}>
                <span>ID:{studentData.studentId}</span>

                <StyleActionButton onClick={handleCopyId}>
                  <StyledIcon as={ContentCopy} />
                </StyleActionButton>

                <span>Link</span>
                <StyleActionButton onClick={handleCopyLink}>
                  <StyledIcon as={ContentCopy} />
                </StyleActionButton>
              </Flex>

              <Flex justify="center">
                <QRCodeLink value={studentData.link} />,
              </Flex>
            </Flex>
          </ContentContainer>
        </>
      )}
    </Dialog>
  );
};

export default StudentDetail;
