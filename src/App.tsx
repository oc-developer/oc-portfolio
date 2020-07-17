import React from 'react'
import './App.css'
import Header from './Header/Header'
import About from './About/About'
import DynamicLetters from './Projects/DynamicLetters/DynamicLetters'
import ButtonFn from './ButtonFn/ButtonFn'
import ButtonClass from './ButtonClass/ButtonClass'
import FloatyLetter from './FloatyLetters/FloatyLetter/FloatyLetter'
import FloatyLetters from './FloatyLetters/FloatyLettersClass'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="body">
        <About />
        <DynamicLetters />
        <ButtonFn />
        <ButtonClass />
        <FloatyLetter letter="H" maxDuration={15} minDuration={5} />
        <FloatyLetters/>
      </div>
    </div>
  );
}

export default App;
