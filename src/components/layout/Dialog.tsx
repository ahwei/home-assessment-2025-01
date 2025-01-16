import { AlignItems, JustifyContent } from '@/types/layout';
import styled from 'styled-components';

interface DialogProps {
  open: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

const DialogOverlay = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ open }) => (open ? 'flex' : 'none')};
  align-items: ${AlignItems.Center};
  justify-content: ${JustifyContent.Center};
  z-index: 1000;
`;

const DialogContent = styled.div<{ open: boolean }>`
  background-color: white;
  padding: 24px;
  border-radius: 4px;
  min-width: 300px;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  transform: ${({ open }: { open: boolean }) =>
    open ? 'scale(1)' : 'scale(0.9)'};
  opacity: ${({ open }: { open: boolean }) => (open ? '1' : '0')};
  transition: transform 0.2s ease-out, opacity 0.2s ease-out;
`;

const Dialog: React.FC<DialogProps> = ({ open, onClose, children }) => {
  return (
    <DialogOverlay open={open} onClick={onClose}>
      <DialogContent open={open} onClick={(e) => e.stopPropagation()}>
        {children}
      </DialogContent>
    </DialogOverlay>
  );
};

export default Dialog;
