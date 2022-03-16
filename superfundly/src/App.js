import './App.css';
import React from 'react';
import TopAppBar from './TopAppBar';
import ActionPage from './ActionPage';
import Table from './Table';


//creates an app with a top navigation bar, data table of superfund sites, and actions cards
function App() {
  return (
    <div className="App">
      <TopAppBar/>
      <div><p>Superfund site: contaminated sites exist nationally due to hazardous waste being dumped, left out in the open, or otherwise improperly managed (US EPA)</p></div>
      <Table/>
      <div class="header">Types of Actions to Take:</div>
      <ActionPage/>
    </div>
  );
}

export default App;
