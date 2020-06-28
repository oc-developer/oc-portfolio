import React from 'react';
import Logo from './Logo/Logo';
import FloatyLetters from './FloatyLetters/FloatyLetters'
import './App.css';

function App() {
  return (
    <div className="App">
      <Logo />
      <div className="welcome-banner">
        <FloatyLetters word="Welcome!" maxDuration={15} minDuration={5} />
      </div>
    </div>
  );
}

export default App;
