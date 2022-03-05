import * as React from 'react';
import { Box, TextField } from '@mui/material';

export default function FullWidthTextField() {
  return (
    <Box
      sx={{
        display: 'flex',
        width: 500,
        maxWidth: '100%',
        margin: 3
      }}
    >
    <TextField fullWidth label="Enter City or Zipcode" id="fullWidth" />
    </Box>
  );
}
