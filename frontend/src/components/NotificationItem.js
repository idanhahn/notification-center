import React from 'react';
import { Typography, IconButton, Box } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

export default function NotificationItem({ children, onDelete }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography sx={{ fontSize: '0.8rem' }}>{children.content}</Typography>
      <IconButton onClick={onDelete}>
        <ClearIcon />
      </IconButton>
    </Box>
  );
}
