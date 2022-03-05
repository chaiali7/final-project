import * as React from 'react';
import Stack from '@mui/material/Stack';
import CommunityCard from './CommunityCard';
import PetitionCard from "./PetitionCard";
import PoliticianCard from "./PoliticianCard";

export default function BasicStack() {
  return (
    <div>
      <Stack spacing={2}>
        <CommunityCard></CommunityCard>
        <PetitionCard></PetitionCard>
        <PoliticianCard></PoliticianCard>
      </Stack>
    </div>
  );
}