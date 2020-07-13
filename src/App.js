import React from 'react'
import './App.css'
import Header from './Header/Header'
import About from './About/About'
import DynamicLetters from './Projects/DynamicLetters/DynamicLetters'
import ButtonFn from './ButtonFn/ButtonFn'
import ButtonClass from './ButtonClass/ButtonClass'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="body">
        <About />
        <DynamicLetters />
        <ButtonFn />
        <ButtonClass />
      </div>
    </div>
  );
}

export default App;
