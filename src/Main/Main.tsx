import React from 'react'

import './Main.scss'

import Protagonist from '../Protagonist/Protagonist'
import Articles from '../Articles/Articles'
import About from '../About/About'
import Work from '../Work/Work'

export default function Main() {
    return (
        <div className="content">
            <Protagonist />
            <Articles />
            <Work />
            <About />
        </div>
    )
}