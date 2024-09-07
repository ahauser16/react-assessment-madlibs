// mad-app/src/App.js
import React from 'react';
import './App.css';
import Madlib from './Madlib';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Madlibs Game</h1>
      </header>
      <Madlib />
    </div>
  );
}

export default App;