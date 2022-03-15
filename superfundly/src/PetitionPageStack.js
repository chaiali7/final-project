import * as React from 'react';
import Stack from '@mui/material/Stack';
import DuwamishPetition from './DuwamishPetition';
import PuyallupPetition from './PuyallupPetition';

export default function BasicStack() {
  return (
    <div>
      <Stack spacing={4}
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      margin= "25px">
        <DuwamishPetition></DuwamishPetition>
        <PuyallupPetition></PuyallupPetition>
      </Stack>
    </div>
  );
}