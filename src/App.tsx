import React from 'react'
import './App.css'
import About from './About/About'
import DynamicLetters from './Projects/DynamicLetters/DynamicLetters'
import Protagonist from './Protagonist/Protagonist'
import Notes from './Notes/Notes'

function App() {
  return (
    <div className="app">
      <Protagonist />
      <Notes />
      <div className="main">
        <div className="content">
          <About />
          <DynamicLetters />
        </div>
      </div>
    </div>
  );
}

export default App;
