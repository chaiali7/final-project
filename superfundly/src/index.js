import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CommunityPage from "./CommunityPage"; 
import PoliticianPage from "./PoliticianPage";
import PetitionPage from "./PetitionPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<App />} />
        <Route path="/CommunityPage" element = {<CommunityPage />} />
        <Route path="/PoliticianPage" element = {<PoliticianPage/>} />
        <Route path="/PetitionPage" element = {<PetitionPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
