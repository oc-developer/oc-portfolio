import React from 'react';
import Logo from './Logo/Logo';
import FloatyLetters from './FloatyLetters/FloatyLetters'
import Leftbar from './Leftbar/leftbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Logo />
        <div className="welcome-banner">
          <FloatyLetters word="Welcome!" maxDuration={15} minDuration={5} />
        </div>
      </div>
      <Leftbar />
    </div>
  );
}

export default App;
