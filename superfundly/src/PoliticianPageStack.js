import * as React from 'react';
import Stack from '@mui/material/Stack';
import JayInslee from './JayInslee';
import BruceHarrell from './BruceHarrell'; 

export default function BasicStack() {
  return (
    <div>
      <Stack spacing={4}
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      margin= "25px">
        <BruceHarrell></BruceHarrell>
        <JayInslee></JayInslee>
      </Stack>
    </div>
  );
}