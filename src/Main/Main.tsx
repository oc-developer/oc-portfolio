import React from 'react'

import './Main.scss'

import Protagonist from '../Protagonist/Protagonist'
import Notes from '../Notes/Notes'
import About from '../About/About'

export default function Main() {
    return (
        <div className="content">
            <Protagonist />
            <Notes />
            <About />
        </div>
    )
}