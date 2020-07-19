import React from 'react'
import './App.css'
import Header from './Header/Header'
import About from './About/About'
import DynamicLetters from './Projects/DynamicLetters/DynamicLetters'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="body">
        <About />
        <DynamicLetters />
      </div>
    </div>
  );
}

export default App;
