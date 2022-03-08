import * as React from 'react';
import Stack from '@mui/material/Stack';
import DuwamishRiverCleanUp from './DuwamishRiverCleanUp'; 
import ECOSS from './ECOSS';

export default function BasicStack() {
  return (
    <div>
      <Stack spacing={4}
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      margin= "25px">
        <DuwamishRiverCleanUp></DuwamishRiverCleanUp>
        <ECOSS></ECOSS>
      </Stack>
    </div>
  );
}