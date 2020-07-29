import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.scss'

import Header from './Header/Header'
import Main from './Main/Main'
import DynamicLetters from './Projects/DynamicLetters/DynamicLetters'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Route exact path='/floaty-letter' render={() => (
          <DynamicLetters />
        )} />
        <Route exact path="/" render={() => (
          <Main />
        )} />
      </div>
    </Router>
  );
}

export default App;
