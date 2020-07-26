import React from 'react'
import './App.css'
import Header from './Header/Header'
import About from './About/About'
import DynamicLetters from './Projects/DynamicLetters/DynamicLetters'
import Bee from './Bee/Bee'

function App() {
  return (
    <div className="app">
      <div className="main">
        <Header />
        <div className="content">
          <About />
          <DynamicLetters />
        </div>
        <Bee/>
      </div>
    </div>
  );
}

export default App;
