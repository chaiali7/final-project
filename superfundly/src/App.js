import './App.css';
import React from 'react';
import TextInput from './TextInput';
import TopAppBar from './TopAppBar';
import ActionPage from './ActionPage';
import Map from './Map'

function App() {
  return (
    <div className="App">
      <header className="Header">
      </header>
      <TopAppBar/>
      <Map/>
      <TextInput/>
      <ActionPage/>
    </div>
  );
}

export default App;
