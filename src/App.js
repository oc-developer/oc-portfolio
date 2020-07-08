import React from 'react'
import './App.css'
import Header from './Header/Header'
import About from './About/About'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="body">
        <About />
      </div>
    </div>
  );
}

export default App;
