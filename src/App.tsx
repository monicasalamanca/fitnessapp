import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(): JSX.Element {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
