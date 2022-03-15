
import * as React from 'react';
import TopAppBar from './TopAppBar'; 
import PoliticianBreadcrumb from "./PoliticianBreadcrumb";
import PoliticianPageStack from "./PoliticianPageStack";
import TextInput from './TextInput';
import './CommunityPage.css';

export default function BasicStack() {
  return (
    <div>
      <TopAppBar/>
      <PoliticianBreadcrumb/>
      <div class ="header">Contacting Local + National Politicians</div>
      <TextInput/>
      <PoliticianPageStack></PoliticianPageStack>
    </div>
  );
}