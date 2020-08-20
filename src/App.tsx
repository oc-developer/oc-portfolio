import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import './App.scss'
import './Animations.scss'

import Header from './Header/Header'
import Main from './Main/Main'
import DynamicLetters from './Projects/DynamicLetters/DynamicLetters'
import Leftbar from './Leftbar/Leftbar'

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Header />
        <Route exact path='/floaty-letter' render={() => (
          <DynamicLetters />
        )} />
        <Route exact path="/" render={() => (
          <Main />
        )} />
        <Leftbar />
      </div>

    </HashRouter>
  );
}

export default App;
