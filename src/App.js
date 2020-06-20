import React from 'react';
import Logo from './Logo';
import FloatyLetters from './FloatyLetters/FloatyLetters'
import './App.css';

function App() {
  return (
    <div className="App">
        <Logo/>
        <FloatyLetters word="Welcome!" maxDuration={15} minDuration={5}/>
    </div>
  );
}

export default App;
