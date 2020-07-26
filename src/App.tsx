import React from 'react'
import './App.css'
import Header from './Header/Header'
import About from './About/About'
import DynamicLetters from './Projects/DynamicLetters/DynamicLetters'

function App() {
  return (
    <div className="app">
      <div className="main">
        <Header />
        <div className="content">
          <About />
          <DynamicLetters />
        </div>
      </div>
    </div>
  );
}

export default App;
