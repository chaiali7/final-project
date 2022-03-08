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
      <Table/>
      <div class="header">Types of Actions to Take:</div>
      <ActionPage/>
    </div>
  );
}

export default App;
