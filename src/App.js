import React from 'react';
import './App.css';
import Row from './Row';
import request from "./request";
import requests from './request';

function App() {
  return (
    <div className="App">
      <h1>BOOOOOOOOOH</h1>
      <Row title="Originals" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Trending" fetchUrl={request.fetchTrending} /> 
      
    </div>
  );
}

export default App;
