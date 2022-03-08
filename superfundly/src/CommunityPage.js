
import * as React from 'react';
import CommunityPageStack from './CommunityPageStack';
import TextInput from './TextInput';
import TopAppBar from './TopAppBar'; 
import CommunityBreadcrumb from "./CommunityBreadcrumb";
import './CommunityPage.css';

export default function BasicStack() {
  return (
    <div>
      <TopAppBar/>
      <CommunityBreadcrumb/>
      <div class ="header">Community Actions to Take</div>
      <TextInput/>
      <CommunityPageStack/>
    </div>
  );
}