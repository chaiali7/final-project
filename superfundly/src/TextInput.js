import * as React from 'react';
import { Box, TextField } from '@mui/material';
import './TextInput.css';

export default function TextInput() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Enter City or Zipcode" variant="outlined" />
    </Box>
  );
}
