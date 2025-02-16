import React from 'react';
import { Modal, Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const modalStyle = (isMobile: boolean) => ({
  position: 'absolute',
  top: isMobile ? 'auto' : '50%',
  bottom: isMobile ? 0 : 'auto',
  left: '50%',
  transform: isMobile ? 'translateX(-50%)' : 'translate(-50%, -50%)',
  width: isMobile ? '100%' : '400px',
  maxWidth: '100%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderTopLeftRadius: isMobile ? 8 : 0,
  borderTopRightRadius: isMobile ? 8 : 0,
  outline: 'none',
});

export const CustomModal = ({ open, onClose, children }: CustomModalProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='modal-title'
      aria-describedby='modal-description'
    >
      <Box sx={modalStyle(isMobile)} data-testid='custom-modal-box'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <IconButton onClick={onClose} aria-label='close'>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box id='modal-description'>{children}</Box>
      </Box>
    </Modal>
  );
};
