import React from 'react'
import './App.scss'
import Header from './Header/Header'
import Protagonist from './Protagonist/Protagonist'
import Notes from './Notes/Notes'

function App() {
  return (
    <div className="app">
      <Header />
      <Protagonist />
      <Notes />
    </div>
  );
}

export default App;
