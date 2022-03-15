
import * as React from 'react';
import PetitionPageStack from './PetitionPageStack';
import TextInput from './TextInput';
import TopAppBar from './TopAppBar'; 
import PetitionBreadcrumb from "./PetitionBreadcrumb";
import './CommunityPage.css';

export default function BasicStack() {
  return (
    <div>
      <TopAppBar/>
      <PetitionBreadcrumb/>
      <div class ="header">Petitions To Sign</div>
      <TextInput/>
      <PetitionPageStack/>
    </div>
  );
}